export const base44 = {
  auth: {
    me: async () => ({ id: 'local-user', email: 'demo@example.com', role: 'user' }),
    logout: async () => {},
    redirectToLogin: () => {},
    loginViaEmailPassword: async () => ({ ok: true }),
    loginWithProvider: async () => ({ ok: true }),
    resetPasswordRequest: async () => ({ ok: true }),
    register: async () => ({ ok: true }),
    verifyOtp: async () => ({ access_token: 'local-token' }),
    setToken: () => {},
    resendOtp: async () => ({ ok: true }),
    resetPassword: async () => ({ ok: true }),
  },
  get: async () => null,
  post: async () => null,
  put: async () => null,
  delete: async () => null,
}
