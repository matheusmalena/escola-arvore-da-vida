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
import router from './router';

// Importar os componentes necessários do Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBars, faEnvelope, faAngleDown, faAngleUp  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 200,
  once: true
});

// Adicionar ícones à biblioteca do Font Awesome
library.add(faPhone, faBars, faWhatsapp, faInstagram, faFacebook, faEnvelope, faAngleDown, faAngleUp );

const app = createApp(App);

// Usar os plugins necessários
app.use(InstagramFeed);
app.use(router);

// Registrar o componente Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon);

// Montar a aplicação
app.mount('#app');
