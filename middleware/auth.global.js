export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    if (to.path !== '/login' && to.path !== '/register' && !authStore.isAuthenticated) {
      console.log("sir 3llah");
      return navigateTo('/login');
    }
  })
  