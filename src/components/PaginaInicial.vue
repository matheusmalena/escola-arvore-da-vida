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
            delay: 3000,
            disableOnInteraction: false
          }"
          class="swiper-wrapper mySwiper"
        >
          <swiper-slide class="swiper-slide"><img src="../assets/mz01.jpg" alt="Foto 1" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz02.png" alt="Foto 2" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz04.png" alt="Foto 3" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz03.png" alt="Foto 4" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz01.jpg" alt="Foto 1" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz02.png" alt="Foto 2" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz04.png" alt="Foto 3" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz03.png" alt="Foto 4" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz01.jpg" alt="Foto 1" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz02.png" alt="Foto 2" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz04.png" alt="Foto 3" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz03.png" alt="Foto 4" /></swiper-slide>
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
          <img src="../assets/baby.jpg" alt="Educação Infantil Bilíngue" />
          <h3>Aprendizado<br /><strong>Baby</strong></h3>
          <p>
            Promove o crescimento saudável e feliz do bebê com experiências sensoriais e
            educativas desde os primeiros passos.
          </p>
          <button>Veja mais Detalhes</button>
        </div>
        <div class="card-turma-02 card-turmas">
          <img src="../assets/foto-2.jpg" alt="Ensino Fundamental I" />
          <h3>Educação Infantil <br /><strong>Bilíngue</strong></h3>
          <p>
            Destina-se à formação da criança visando o desenvolvimento integral e
            harmonioso de suas potencialidades.
          </p>
          <button>Veja mais Detalhes</button>
        </div>
        <div class="card-turma-03 card-turmas">
          <img src="" alt="Novo Ensino Médio" />
          <h3>Ensino Fundamental I <br /><strong> Bilíngue </strong></h3>
          <p>
            Estimula o aprendizado e o desenvolvimento integral das crianças,
            preparando-as para um futuro de descobertas e conquistas.
          </p>
          <button>Veja mais Detalhes</button>
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
          <!-- <p class="text-center">
            Com o objetivo de melhorar a formação do aluno, o estabelecimento de ensino
            Escola Árvore da Vida oferece atividades extracurriculares para despertar o
            talento dos estudantes, aprimorando o desempenho em sala de aula. O trabalho
            de estímulo cognitivo em diferentes áreas, apresenta um ganho significativo no
            desenvolvimento integral do indivíduo. Os estudantes praticam com mais
            frequência as expressões corporais, e tornam-se mais críticos, participativos,
            proporcionando lições como: autonomia, tolerância, respeito, e o
            reconhecimento de ponto de vista de outras pessoas. Confira algumas das
            práticas interdisciplinares mais comuns que são oferecidas na escola:
          </p> -->
        </div>
        <div class="serv-content" data-aos="zoom-in-up">
          <div class="card" style="width: 18rem">
            <img src="../assets/ballet.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ballet</h5>
              <p class="card-text">Desenvolvendo a graça e a disciplina em cada passo.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/judo.jpeg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Judo</h5>
              <p class="card-text">Poder e equilíbrio: onde a força encontra a mente.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/fut.png" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Futebol</h5>
              <p class="card-text">Paixão no gramado, união no jogo.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/tinta.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Passeios e visitações</h5>
              <p class="card-text">Descubra o mundo, uma aventura por vez.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/foto-2.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Festas temáticas</h5>
              <p class="card-text">Momentos inesquecíveis, diversão garantida.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
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
      <div class="max-width" data-aos="fade-down">
        <div>
          <h2 class="title">Nossa <span>estrutura</span></h2>
        </div>
        <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="../assets/quadra.jpeg" class="portfolio-img" alt="projeto lista de tarefas" />
              <div>
                <h3 class="portfolio-title">Quadra</h3>
                <p class="portfolio-description">
                  Uma página de previsão de tempo com um API integrada a OpenWeather em
                  JavaScript.
                </p>
                <a
                  href="https://matheusmalena.github.io/AppPrevisaoDoTempo/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
        <!-- <div class="portfolio-container swiper mySwiper">
          <div class="swiper-wrapper">
            
            <div class="portfolio-content swiper-slide">
              <img src="../assets/quadra.jpeg" class="portfolio-img" alt="projeto lista de tarefas" />
              <div>
                <h3 class="portfolio-title">Quadra</h3>
                <p class="portfolio-description">
                  Uma página de previsão de tempo com um API integrada a OpenWeather em
                  JavaScript.
                </p>
                <a
                  href="https://matheusmalena.github.io/AppPrevisaoDoTempo/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            
            <div class="portfolio-content swiper-slide">
              <img src="../assets/playground.jpg" class="portfolio-img" alt="projeto yoga website" />
              <div>
                <h3 class="portfolio-title">Fokus Website</h3>
                <p class="portfolio-description">
                  Um sistema de temporizador, que ajuda a pessoa usuária a focar nas suas
                  atividades do dia a dia.
                </p>
                <a
                  href="https://matheusmalena.github.io/Fokus/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            
            <div class="portfolio-content swiper-slide">
              <img src="../assets/sala.jpg" class="portfolio-img" />
              <div>
                <h3 class="portfolio-title">Salas de aula</h3>
                <p class="portfolio-description">
                  Uma site para você explorar novas receitas todos os dias com os
                  ingredientes que estão ao seu alcance!
                </p>
                <a
                  href="https://cookin--up.vercel.app/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            
            <div class="portfolio-content swiper-slide">
              <img src="" class="portfolio-img" alt="card light/dark mode" />
              <div>
                <h3 class="portfolio-title">Jogo Advinha Número - Voz</h3>
                <p class="portfolio-description">
                  Um jogo onde você tem que advinhar um número secreto através de sua voz.
                </p>
                <a
                  href="https://jogo-numero-secreto-voz-three.vercel.app/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View
                  <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            
            <div class="portfolio-content swiper-slide">
              <img src="" class="portfolio-img" alt="card light/dark mode" />
              <div>
                <h3 class="portfolio-title">Cafeteria - Landing Page</h3>
                <p class="portfolio-description">
                  Uma landing page de uma cafeteria moderna.
                </p>
                <a
                  href="https://matheusmalena.github.io/landing-page_cafeteria/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>
          </div>

          <div class="swiper-button-next">
            
          </div>
          <div class="swiper-button-prev">
            
          </div>
        </div> -->
      </div>
    </section>

    <!--- CERTIFICATES SECTION --->
    <!-- <section
      class="conquest section"
      id="certificates"
      aria-label="uma seção mostrando os meus certificados do meu aprendizado."
    >
      <div class="max-width" data-aos="fade-down">
        <div>
          <h2 class="title">Minhas Conquistas</h2>
        </div>

        <div class="carousel owl-carousel">
          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/1244f4a2-7b6b-4cfa-a0e9-7a07bed262bb"
              ><img src="" alt="Certificado HTML"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/f36bf34c-fd7e-4326-9d59-45b03c4ff385"
              ><img src="" alt="Certificado DESENVOLVA APLICAÇÕES WEB COM JAVASCRIPT"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/e77a674a-4527-4715-95a4-71b145fce611"
              ><img
                src=""
                href="https://cursos.alura.com.br/certificate/e77a674a-4527-4715-95a4-71b145fce611"
                alt="GIT E GITHUB: REPOSITÓRIO, COMMIT E VERSÕES"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/6f36049a-25b7-4b6a-ab98-42e3324faa3a"
              ><img src="" alt="Certificado Linux"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/4a40261c-7c41-476f-8397-b67c1b830da0"
              ><img src="" alt="Certificado Bootstrap"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/matheus-tew-one/arquitetura-computadores-funcionamento-programa"
              ><img src="" alt="Certificado ARQUITETURA DE COMPUTADORES"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/df42bfc0-c7d5-4cf4-b7a5-7e768eb1c281"
              ><img src="" alt="Certificado DNS"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/matheus-tew-one/logica-programacao-javascript-html"
              ><img src="" alt="Certificado HTML"
            /></a>
          </div>
        </div>
      </div>
    </section> -->
    

    <section class="instagram">
      <h2>Siga nossa página no <span>Instagram</span> </h2>
    <div class="instagram-wrapper">
    <InstagramFeed
      :count="6"
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
import { Autoplay } from 'swiper';
import emailComponent from './emailComponent.vue';
import verseComponent from './verseComponent.vue';

export default {
  name: "PaginaInicial",
  components: {
    Swiper,
    SwiperSlide,
    emailComponent,
    verseComponent,
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN,
    }
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style>
/* Estilos opcionais para o componente Vue */
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: auto;
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
  content: '\f16d'; /* Unicode do ícone do Instagram no FontAwesome */
  font-family: 'Font Awesome 5 Brands';
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  font-size: 3rem !important;
  color: white !important;
  opacity: 0 !important;
  transition: opacity 0.3s !important;
  pointer-events: none !important; /* Evita interferir no hover */
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

</style>