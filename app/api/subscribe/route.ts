import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getResendClient() {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey || resendApiKey === 're_YOUR_KEY_HERE') {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if lead already exists
    let lead = await prisma.lead.findUnique({
      where: { email },
    });

    if (!lead) {
      // Create new lead
      lead = await prisma.lead.create({
        data: {
          email,
          name: name || undefined,
        },
      });
    }

    const resend = getResendClient();

    if (resend) {
      // Send welcome email via Resend
      await resend.emails.send({
        from: 'noreply@rxyplus.com',
        to: email,
        subject: '🎉 Welcome to RXy+ - 20% Off Your First Order!',
        html: `
          <h2>Welcome to RXy+!</h2>
          <p>Hi ${name || 'there'},</p>
          <p>Thanks for joining our community of 100k+ fitness enthusiasts.</p>
          <p><strong>Use code: WELCOME20 for 20% off your first order</strong></p>
          <p>Explore our premium selection of:</p>
          <ul>
            <li>Protein Powders & Shakes</li>
            <li>Supplements & Vitamins</li>
            <li>Blood Testing Kits</li>
            <li>Healthy Snacks & Bars</li>
          </ul>
          <p>Happy shopping!</p>
          <p>Best regards,<br/>The RXy+ Team</p>
        `,
      });
    }

    return NextResponse.json(
      { message: 'Successfully subscribed', lead, emailSent: Boolean(resend) },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
