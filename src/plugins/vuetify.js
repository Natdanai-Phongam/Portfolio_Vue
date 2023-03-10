import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'md' || 'fa',
    },
    theme: {
        themes: {
            dark: {
                background: "#171925"

            },
        },
    },
});
