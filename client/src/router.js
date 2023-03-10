import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserInformation from './views/UserInformation.vue'
import logIn from './views/logIn.vue'
import VerifyEmail from './views/VerifyEmail.vue'
import Booking from './views/Booking.vue'
import Bookings from './views/Bookings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: logIn
    },
    {
      path: '/userinformation/:id',
      name: 'userinformation',
      component: UserInformation
    },
    {
      path: '/home/:id',
      name: 'Home',
      component: Home
    },
    {
      path: '/booking/:id',
      name: 'Booking',
      component: Booking
    },
    {
      path: '/verify/:id',
      name: 'VerifyEmail',
      component: VerifyEmail
    },
    {
      path: '/userAppointments/:id',
      name: 'Bookings',
      component: Bookings
    }
  ]
})
