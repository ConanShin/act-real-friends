// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import ToggleButton from 'vue-js-toggle-button'
import Toasted from 'vue-toasted';

Vue.config.productionTip = false
Vue.use(ToggleButton)
Vue.use(Toasted, {position: 'bottom-center', duration: 1000})

var config = {
  apiKey: "AIzaSyBIVdVqliAv3kXNEGu3ODp_Zyq5fxJBSL4",
  authDomain: "act-real-friendz.firebaseapp.com",
  databaseURL: "https://act-real-friendz.firebaseio.com",
  projectId: "act-real-friendz",
  storageBucket: "act-real-friendz.appspot.com",
  messagingSenderId: "383017755227"
};

firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
