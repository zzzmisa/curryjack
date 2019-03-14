import Vue from 'vue'
import Router from 'vue-router'
import CjkHandView from '@/components/templates/CjkHandView.vue'
import queryString from 'query-string'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CjkHandView',
      component: CjkHandView
    },
    {
      path: '/result',
      name: 'CjkResultView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "result" */ '@/components/templates/CjkResultView.vue'),
      props: (route) => ({ hand: route.query.h })
    },
    {
      path: '/faq',
      name: 'CjkFaqView',
      component: () => import(/* webpackChunkName: "faq" */ '@/components/templates/CjkFaqView.vue')
    },
    {
      path: '*',
      name: 'Cjk404View',
      component: () => import(/* webpackChunkName: "404" */ '@/components/templates/Cjk404View.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  parseQuery: (query) => {
    return queryString.parse(query, {
      arrayFormat: 'bracket'
    })
  },
  stringifyQuery: (params) => {
    if (Object.keys(params).length === 0) {
      return ''
    } else {
      return '?' + queryString.stringify(params, {
        arrayFormat: 'bracket'
      })
    }
  }
})
