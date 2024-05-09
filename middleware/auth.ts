export default defineNuxtRouteMiddleware((to, from) =>{
  //Properties here...
  console.log({to,from});
  const isAuthenticated = useState('authenticated', () => false);
  if(!isAuthenticated.value) {
    if(to.path !== '/login'){
      return navigateTo('/login')
    }
  }
});
