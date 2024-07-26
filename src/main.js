import { createApp } from 'vue';
import App from './App.vue';
import InstagramFeed from 'vue3-instagram-feed';
import 'vue3-instagram-feed/dist/style.css';
import '../src/css/index.css';
import '../src/css/responsive.css';
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importar os componentes necessários do Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';

// Inicializar AOS
AOS.init({
  duration: 1000,
  offset: 200,
  once: true
});

// Adicionar ícones à biblioteca
library.add(faPhone, faBars, faWhatsapp, faInstagram, faFacebook);

// Criar o app Vue
const app = createApp(App);

// Usar o plugin InstagramFeed
app.use(InstagramFeed);

// Registrar o componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Montar o aplicativo Vue no elemento com id 'app' no seu HTML
app.mount('#app');
