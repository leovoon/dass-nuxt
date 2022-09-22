export default defineNuxtRouteMiddleware((to, from) => {
  const result = useResult()
  if (!result) {
    return navigateTo('/')
  }
})
