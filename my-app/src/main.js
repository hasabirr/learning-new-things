import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue';
import OptionComponent from './components/OptionComponent.vue';

const app = createApp(App);

// membuat komponen menjadi global
app
    .component("CompositionComponent", CompositionComponent)
    .component("OptionComponent", OptionComponent)

app.mount('#app')
