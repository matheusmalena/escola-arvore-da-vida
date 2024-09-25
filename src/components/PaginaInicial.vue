<template>
  <main class="main-content">
    <div class="green"></div>
    <section class="first-section">
    <div class="matriculas-card">
      <h2>Matrículas Abertas</h2>
      <p>
        Sua criança brilha no seu próprio aprendizado, com o apoio de professores que
        facilitam uma jornada sem limites. Juntos, vamos explorar, descobrir e crescer!
      </p>
      <a href="https://wa.me/5511972216682" class="botao-matricula">
        <font-awesome-icon :icon="['fab', 'whatsapp']" /> Matricule seu filho
      </a>
      <div class="carrousel-card">
        <swiper
        :slidesPerView="1"
          :loop="true"
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 1000,
            disableOnInteraction: false
          }"
          class="swiper-wrapper mySwiper"
        >
        <swiperSlide v-for="(image, i) in images" :key="i" class="swiper-slide-partners">
            <img :src="image.src" :alt="image.alt" />
          </swiperSlide>
        </swiper>
      </div>
    </div>
    <div class="card-img-01">
      <img src="../assets/foto01.jpg" alt="" />
    </div>
  </section>

    <section class="turmas section" id="turmas">
      <h1>O colégio <span>Atende</span></h1>
      <div class="container-turmas">
        <div class="card-turma-01 card-turmas">
          <img src="../assets/rael.png" alt="Educação Infantil Bilíngue" />
          <h3>Aprendizado<br /><strong>Baby</strong></h3>
          <p>
            Promove o crescimento saudável e feliz do bebê com experiências sensoriais e
            educativas desde os primeiros passos.
          </p>
          <router-link to="/Bercario" class="btn-turmas" >Veja mais detalhes</router-link>
        </div>
        <div class="card-turma-02 card-turmas">
          <img src="../assets/foto-2.jpg" alt="Ensino Fundamental I" />
          <h3>Educação Infantil<br /><strong>Bilíngue</strong></h3>
          <p>
            Destina-se à formação da criança visando o desenvolvimento integral e
            harmonioso de suas potencialidades.
          </p>
          <router-link to="/EducacaoInfantil" class="btn-turmas" >Veja mais detalhes</router-link>
        </div>
        <div class="card-turma-03 card-turmas">
          <img src="../assets/aluna-fundamental.jpeg" alt="Novo Ensino Médio" />
          <h3>Fundamental I<br/><strong>Bilíngue</strong></h3>
          <p>
            Estimula o aprendizado e o desenvolvimento integral das crianças,
            preparando-as para um futuro de descobertas e conquistas.
          </p>
          <router-link to="/EnsinoFundamentalI" class="btn-turmas" >Veja mais detalhes</router-link>
        </div>
      </div>
    </section>

    <!--- ABOUT SECTION --->
    <section class="about section" id="about" aria-label="Seção falando sobre a escola">
      <div class="max-width" data-aos="fade-down">
        <h2 class="title">Quem Somos</h2>

        <div class="about-content">
          <div class="column left">
            <img src="../assets/sala.jpg" alt="imagem pessoal Roberta Fontes" />
          </div>

          <div class="column right">
            <div class="text"></div>
            <h3 class="mb-4">Conheça a Escola Árvore da Vida</h3>
            <p>
              A instituição de ensino básico Escola Árvore da Vida é comprometida em
              oferecer educação de qualidade com o objetivo de contribuir para a formação
              integral dos seus alunos, fundamentado em princípios éticos e de
              responsabilidade. As ações pedagógicas desenvolvidas nas turmas de Creche ao
              Ensino Fundamental I, promovidas por professores experientes e em constante
              atualização profissional, colabora para o desenvolvimento pleno de aspectos
              cognitivos e intelectuais dos estudantes, garantindo o acréscimo na
              sociedade de cidadãos capazes de compreender seu papel.
            </p>

            <br />

            <a target="_blank" href="https://wa.me/5511972216682"
              >Entre em contato <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="tag-anos-escola">
      <h2>7 anos transformando vidas através da educação</h2>
    </div>

    <section class="proposta">
    <div class="proposta-card">
      <h2>Proposta <span>Pedagógica</span> </h2>
      <p>Nossa proposta visa formar alunos com as competências necessárias para o mundo atual, por meio de atividades de experimentação, suporte teórico do professor e o uso de tecnologias a favor da aprendizagem.</p>
      <span>Aqui o aluno é o protagonista do seu aprendizado; o professor, o mediador e a aprendizagem é sem limites.
        Para uma nova geração, uma nova proposta de educação.</span>
    </div>

    <img class="sistema-img" src="../assets/mackenziesite2-removebg-preview.png" alt="">
  </section>

    <!-- SERVICES SECTION -->
    <section
      class="services section"
      id="services"
      aria-label="uma seção falando dos meus serviços que eu ofereço."
    >
      <!-- <div id="particles-js"></div> -->
      <div class="max-width">
        <div data-aos="fade-down">
          <h2>Atividades <span>Extracurriculares</span></h2>
        </div>
        <div class="serv-content" data-aos="zoom-in-up">
          <div class="card" style="width: 18rem">
            <img src="../assets/ballet.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ballet</h5>
              <p class="card-text">Desenvolvendo a graça e a disciplina em cada passo.</p>
              <router-link to="/Atividades" class="btn btn-primary" @click="closeSidebar"
                >Saiba mais!</router-link
              >
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/judo.jpeg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Judo</h5>
              <p class="card-text">Poder e equilíbrio: onde a força encontra a mente.</p>
              <router-link to="/Atividades" class="btn btn-primary" @click="closeSidebar"
                >Saiba mais!</router-link
              >
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/fut.png" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Futebol</h5>
              <p class="card-text">Transformando paixão em técnica e jogo coletivo</p>
              <router-link to="/Atividades" class="btn btn-primary" @click="closeSidebar"
                >Saiba mais!</router-link
              >
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/passeio.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Passeios e visitações</h5>
              <p class="card-text">Descubra o mundo, uma aventura por vez.</p>
              <router-link to="/Atividades" class="btn btn-primary" @click="closeSidebar"
                >Saiba mais!</router-link
              >
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/transito.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Festas temáticas</h5>
              <p class="card-text">Momentos inesquecíveis, diversão garantida.</p>
              <router-link to="/Atividades" class="btn btn-primary" @click="closeSidebar"
                >Saiba mais!</router-link
              >
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/atv-pintura.jpeg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Extra Especiais</h5>
              <p class="card-text">Muitas brincadeiras e atividades interativas com as crianças.</p>
              <router-link to="/Atividades" class="btn btn-primary" @click="closeSidebar"
                >Saiba mais!</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <verseComponent/>

    <section
      class="structure section"
      id="structure"
    >
      <div class="" data-aos="fade-down">
        <div>
          <h2 class="title">Nossa <span>estrutura</span></h2>
        </div>
  <swiper
      :navigation="true" :pagination="true" :modules="modules" class="mySwiper"
    >
    <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/carrinhos-casinha.jpeg" /></swiper-slide>
      <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/parquinho2.jpeg" /></swiper-slide>
      <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/refeitorio.jpeg" /></swiper-slide>      <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/piscina.jpeg" /></swiper-slide>      <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/sala.jpg" alt="" /></swiper-slide>
      <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/pingpong.jpeg" alt="" /></swiper-slide>
      <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/parquinho01.jpeg" /></swiper-slide>
      <swiper-slide class="card-swiper-slide" ><img class="img-carrousel-estruture" src="../assets/piscina.jpeg" /></swiper-slide>
    </swiper>
      </div>
    </section>

    <section class="instagram">
      <h2>Siga nossa página no <span>Instagram</span> </h2>
    <div class="instagram-wrapper">
    <InstagramFeed
      :count="8"
      :accessToken="accessToken"
      :pagination="true"
      :caption="true"
    />
  </div>
</section>

<emailComponent/>


  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import emailComponent from './emailComponent.vue';
import verseComponent from './verseComponent.vue';
import InstagramFeed from './InstagramFeed.vue';
// import MaterialDidatico from './MaterialDidatico.vue';

export default {
  name: "PaginaInicial",
  components: {
    Swiper,
    SwiperSlide,
    emailComponent,
    verseComponent,
    InstagramFeed
    // MaterialDidatico,
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN,
      images: this.generateImages(100),
    }
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination],
    };
  },
  methods: {
  generateImages(count) {
      const baseImages = [
        { src: require('@/assets/google-logo.png'), alt: 'Google Logo' },
        { src: require('@/assets/mz02.png'), alt: 'Imagem mz02' },
        { src: require('@/assets/logo-sebrae-transparente.png'), alt: 'Logo Sebrae' },
        { src: require('@/assets/mz04.png'), alt: 'Imagem mz04' },
        { src: require('@/assets/logo-agendaedu.png'), alt: 'Logo Agenda Edu' },
        { src: require('@/assets/logoprojeto.png'), alt: 'Logo Projeto' }
      ];
      const images = [];
      for (let i = 0; i < count; i++) {
        const baseImage = baseImages[i % baseImages.length];
        images.push({
          src: baseImage.src,
          alt: `${baseImage.alt} ${i + 1}`
        });
      }
      return images;
    }
  }
};
</script>

<style>

.instagram {
  background-color: var(--clean-light-gray);
}

.instagram-wrapper {
  max-width: 100% !important;
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 1px !important;
  align-items: center !important;
  justify-content: center !important;
  background-color: var(--clean-light-gray) !important;
  padding: 1rem 0 !important;
}

.instagram-gallery {
  display: flex !important;
  flex-wrap: wrap !important;
  padding-bottom: 3rem !important;
  align-items: center !important;
  justify-content: center !important;
}

.instagram-gallery-item {
  position: relative !important;
  flex: 0 0 298.4px !important;
  height: 298.4px !important;
  border: 1px solid #ddd !important;
  border-radius: 5px !important;
  overflow: hidden !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.3s !important;
}

.instagram-gallery-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: opacity 0.3s !important;
}

.instagram-gallery-item:hover .instagram-gallery-image {
  opacity: 0.6 !important;
}

.instagram-gallery-item::after {
  content: '\f16d';
  font-family: 'Font Awesome 5 Brands';
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  font-size: 3rem !important;
  color: white !important;
  opacity: 0 !important;
  transition: opacity 0.3s !important;
  pointer-events: none !important;
}

.instagram-gallery-item:hover::after {
  opacity: 1 !important;
}

button {
  background-color: var(--orange);
  padding: 0.5rem !important;
  font-family: var(--poppins);
  margin: 0.5rem !important;
  border: 1px solid var(--orange);
  border-radius: 8px !important;
}

.swiper-button-next:after {
  margin: 0 3rem 0 0;
  color: var(--orange);
}

.swiper-button-prev:after{
  margin: 0 0 0 3rem;
  color: var(--orange);
}

.card-swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 800px;
}

.card-swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
}

</style>