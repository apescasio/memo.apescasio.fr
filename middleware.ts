import { createI18nMiddleware } from 'fumadocs-core/i18n';
import { i18n } from '@/lib/i18n';
import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  // Exclude static assets like /images from locale handling
  if (pathname.startsWith('/images')) {
    return NextResponse.next();
  }

  // Use the existing i18n middleware for other routes
  return createI18nMiddleware(i18n)(req, event);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};