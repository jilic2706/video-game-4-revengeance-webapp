import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faCampground, faStar, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faCampground, faStar, faPlusCircle);

createApp(App).
    use(router).
    component('icons', FontAwesomeIcon).
    mount("#app");
