import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPortfolio = nextUrl.pathname.startsWith('/portfolio');
      if (isOnPortfolio) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL('/login', nextUrl));
      } else if (isLoggedIn) {
        // return Response.redirect(new URL('/portfolio', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
