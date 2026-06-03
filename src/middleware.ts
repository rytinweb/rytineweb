import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  
  // 1. Enforce HTTPS in production
  const isProduction = process.env.NODE_ENV === 'production';
  const proto = request.headers.get('x-forwarded-proto');
  if (isProduction && proto !== 'https') {
    return NextResponse.redirect(`https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`, 301);
  }

  // 2. Redirect www to non-www
  if (host.startsWith('www.')) {
    const cleanHost = host.replace('www.', '');
    return NextResponse.redirect(`https://${cleanHost}${request.nextUrl.pathname}${request.nextUrl.search}`, 301);
  }

  // 3. Lowercase URLs
  if (
    request.nextUrl.pathname !== request.nextUrl.pathname.toLowerCase() &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    url.pathname = request.nextUrl.pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  // 4. Remove Trailing Slashes
  if (request.nextUrl.pathname.endsWith('/') && request.nextUrl.pathname !== '/') {
    url.pathname = request.nextUrl.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|logos|images|blog).*)'],
};
