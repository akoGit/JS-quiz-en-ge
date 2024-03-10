import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import EN from "./locale/en.json"
import KA from "./locale/ka.json"
import './assets/styles.css'
import App from './App.vue'
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

const i18n = createI18n({
    locale: document.cookie.split('=')[1], 
    messages: {
        EN: EN,
        KA: KA
    }
  })


const app = createApp(App)
app.use(i18n )
app.use(hljsVuePlugin)
app.mount('#app')