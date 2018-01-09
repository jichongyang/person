import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  //mode:'history',
		scrollBehavior(to, from, savedPosition) {
				return {x: 0, y: 0}
		},
    routes: [
      {
        path: '/',
        name: 'lawyerInfo',
        component: resolve => require(['@/components/lawyerInfo/lawyerInfo'], resolve)
      },
       {
        path: '/chating',
        name: 'chating',
        component: resolve => require(['@/components/chating/chating'], resolve)
      },
      {
        path: '/chatUs',
        name: 'chatUs',
        component: resolve => require(['@/components/chatUs/chatUs'], resolve)
      }

    ]
})
