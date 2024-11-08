import { createApp } from 'vue';
import { Quasar, Ripple, QBtn, QToolbar, QToolbarTitle } from 'quasar';
import 'quasar/dist/quasar.css'; 
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(Quasar, {
    plugins: {},
    directives: {
        Ripple,
    },
});

app.use(router);
app.mount('#app');