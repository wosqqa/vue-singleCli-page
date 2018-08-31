import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'
import 'assets/scss/common/reset.scss'
import 'lib-flexible/flexible'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
    error:'',
    loading:''
})
Vue.use(VueRouter)
// Vue.use(MintUI)
const router = new VueRouter({
	// mode: 'history',//去除#号
  routes: routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  console.log(to);
  if (to.name) {
    document.title = to.name;
  }

  // if (to.matched.length ===0) {                         //如果未匹配到路由
  //   from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  // } else {
  //   next();                                             //如果匹配到正确跳转
  // }

  // let user = JSON.parse(localStorage.getItem('user'));
  // if(user && to.path == '/'){
  //   next({ path: '/main' })
  // }else{
  //   next()
  // }
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
