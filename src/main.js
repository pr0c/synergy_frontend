import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faSortDown, faWindowClose, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add([faTimes, faSortDown, faWindowClose, faPenSquare]);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.prototype.$actions = 'http://localhost:8000';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app');