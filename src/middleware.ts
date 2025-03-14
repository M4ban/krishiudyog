import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// Simplified middleware that only protects the dashboard route
export default withAuth(
  function middleware(req) {
    // No additional logic for now
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*'],
}; 