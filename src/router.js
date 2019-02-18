import Vue from 'vue'
import Router from 'vue-router'
import CjkFirstView from '@/components/templates/CjkFirstView.vue'
import queryString from 'query-string'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CjkFirstView',
      component: CjkFirstView
    },
    {
      path: '/result',
      name: 'CjkResultView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/templates/CjkResultView.vue'),
      props: (route) => ({ query: route.query.q })
    }
  ],parseQuery: (query) => {
    return queryString.parse(query, {
      arrayFormat: 'bracket'
    })
  },
  stringifyQuery: (params) => {
    if (0 == Object.keys(params).length) {
      return ''
    } else {
      return '?' + queryString.stringify(params, {
        arrayFormat: 'bracket'
      })
    }
  }
})
