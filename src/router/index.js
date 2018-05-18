import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import FriendsList from '@/components/FriendsList'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/friendsList',
      name: 'FriendsList',
      component: FriendsList
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
