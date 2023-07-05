import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '385581626162-3eqjscvckp9s2ll70pq82qo4qkmfdu4g.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ],
}

// export default NextAuth(authOptions)
const handler=NextAuth(authOptions);
export {handler as GET, handler as POST}