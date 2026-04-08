// Temporarily disabled auth client for deployment
export const authClient = {
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};