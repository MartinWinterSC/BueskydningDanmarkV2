import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faBars, faXmark, faUsers, faMedal, faMagnifyingGlass, faArrowUp, faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import { faCalendar as faCalendarRegular } from '@fortawesome/free-regular-svg-icons'

library.add(faChevronDown, faBars, faXmark, faUsers, faMedal, faMagnifyingGlass, faArrowUp, faEarthEurope)

library.add(faCalendarRegular)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
