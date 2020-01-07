import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from '../views/contacts/Contacts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: Contacts,
    redirect: '/all',
    children: [
      {
        path: '/all',
        name: 'contacts-all',
        component: () => import(/* webpackChunkName: "contacts-all" */ '../views/contacts/ContactsAll.vue')
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: () => import(/* webpackChunkName: "favorites" */ '../views/contacts/ContactsFavorites.vue')
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'user-single',
    component: () => import(/* webpackChunkName: "user-single" */ '../views/user/UserSingle.vue')
  },
  {
    path: '/user/:id/edit',
    name: 'user-edit',
    component: () => import(/* webpackChunkName: "user-edit" */ '../views/user/UserEdit.vue')
  },
  {
    path: '/add-new',
    name: 'add-new',
    component: () => import(/* webpackChunkName: "add-new" */ '../views/user/UserAddNew.vue'),
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
  }



  // contacts / all
  // contacts / favorites
  // user / :id
  // user / :id / edit
  // user / add-new
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
