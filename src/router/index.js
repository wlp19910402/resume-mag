import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import ResumeList from '@/views/resume/list'

Vue.use(Router)

export default new Router({
  mode: "history",
  // mode: "abstract",
  // mode: "hash",
  routes: [{
      path: '/',
      name: 'ResumeList',
      component: ResumeList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
