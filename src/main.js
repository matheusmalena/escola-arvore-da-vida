import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importar os componentes necessários do Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Adicionar o ícone do WhatsApp ao library
library.add(faWhatsapp);

// Criar o app Vue e montar o componente principal
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Registrar o componente globalmente

app.mount('#app');
