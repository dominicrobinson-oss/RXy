import { NextRequest, NextResponse } from 'next/server'

const BLOCKED_PATHS = ['/clothing', '/activewear']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isBlocked = BLOCKED_PATHS.some(
    (blocked) => pathname === blocked || pathname.startsWith(blocked + '/')
  )

  if (isBlocked) {
    return NextResponse.redirect(new URL('/', request.url), { status: 302 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/clothing', '/clothing/:path*', '/activewear', '/activewear/:path*'],
}
