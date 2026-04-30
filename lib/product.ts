import { Prisma } from '@prisma/client';

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function parseImages(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim())
      .filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(/[\n,]/g)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

export function toDecimal(value: unknown): Prisma.Decimal {
  const numeric = typeof value === 'string' || typeof value === 'number' ? Number(value) : NaN;
  if (Number.isNaN(numeric) || numeric < 0) {
    throw new Error('Invalid price value');
  }
  return new Prisma.Decimal(numeric);
}

export function decimalToPence(value: Prisma.Decimal | number | string): number {
  return Math.round(Number(value) * 100);
}
