const appMytab = resolve => require(['./pages/invite/app_mytab.vue'], resolve)
let routes = [
  {
    path: '/',
    component: appMytab,
    name: '邀请收徒3',
    meta: {
      keepAlive: true // 需要缓存
    }
  }
]
export default routes
