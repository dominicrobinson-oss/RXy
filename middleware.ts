import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

const BLOCKED_PATHS = ['/clothing', '/activewear']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block removed category paths
  const isBlocked = BLOCKED_PATHS.some(
    (blocked) => pathname === blocked || pathname.startsWith(blocked + '/')
  )
  if (isBlocked) {
    return NextResponse.redirect(new URL('/', request.url), { status: 302 })
  }

  // Protect /admin/** routes (but not /admin/login itself)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const { supabaseResponse, user } = await updateSession(request)

    if (!user) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('redirectTo', pathname)
      return NextResponse.redirect(loginUrl, { status: 302 })
    }

    return supabaseResponse
  }

  // For all other routes, still refresh the Supabase session so cookies stay fresh
  if (pathname.startsWith('/admin/login')) {
    const { supabaseResponse } = await updateSession(request)
    return supabaseResponse
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/clothing',
    '/clothing/:path*',
    '/activewear',
    '/activewear/:path*',
    '/admin/:path*',
  ],
}
