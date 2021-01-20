import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../coustom.scss';
import ScrollAnimation from './directives/scrollanimation';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Appear from '@/components/Appear'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
var VueScrollTo = require('vue-scrollto');
Vue.directive('scrollanimation', ScrollAnimation);
Vue.component('Appear', Appear)
AOS.init();
 
Vue.use(VueScrollTo)
 
// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
