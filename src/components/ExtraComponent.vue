<template>
    <div class="green"></div>
  
    <section class="section card-component-turmas">
      <div class="card-img-turmas">
        <img src="../assets/futebol-sem-fundo.png" alt="">
      </div>
      <div class="card-text-turmas">
        <h2>Aulas de futebol</h2>
        <p>Trabalhando em equipe, estratégia e diversão.</p>
        <a href="https://wa.me/5511972216682" target="_blank" ><button class="btn-agendar"> Conheça mais sobre nossa escola <font-awesome-icon :icon="['fab', 'whatsapp']" /></button></a>
      </div>
    </section>

    <section class="section card-component-turmas ballet-cell">
      <div class="card-text-turmas">
        <h2>Aulas de Ballet</h2>
        <p>Dançando com o coração, construindo sonhos com os pés.</p>
        <a href="https://wa.me/5511972216682" target="_blank" ><button class="btn-agendar"> Conheça mais sobre nossa escola <font-awesome-icon :icon="['fab', 'whatsapp']" /></button></a>
      </div>
      <div class="card-img-turmas">
        <img src="../assets/ballet-sem-fundo.png" alt="">
      </div>
    </section>

    <section class="section card-component-turmas">
      <div class="card-img-turmas">
        <img src="../assets/judo-sem-fundo.png" alt="">
      </div>
      <div class="card-text-turmas">
        <h2>Aulas de Judô</h2>
        <p>Aprendendo a arte do Judô com técnica e respeito.</p>
        <a href="https://wa.me/5511972216682" target="_blank" ><button class="btn-agendar"> Conheça mais sobre nossa escola <font-awesome-icon :icon="['fab', 'whatsapp']" /></button></a>
      </div>
    </section>
  
    <!-- <section class="material">
      <div class="card-material-fundamental">
        <div class="text-section">
          <h2>Material <span> Didático</span></h2>
          <p>
            Nos anos iniciais do Ensino Fundamental, a criança compreende o mundo e interage
            com ele em níveis gradativos de complexidade. Enfatizamos a integração das áreas
            do conhecimento, seguindo a Base Nacional Comum Curricular. Ancorados nos
            princípios e valores cristãos, buscamos criar um ambiente de aprendizagem
            colaborativo e inovador.
          </p>
        </div>
        <div class="card2-material-fundamental">
          <div class="book-gallery">
            <img src="../assets/livro01-fundamental.png" alt="Imagem 1" />
            <img src="../assets/livro02-fundamental.png" alt="Imagem 2" />
            <img src="../assets/livro03-fundamental.png" alt="Imagem 3" />
            <img src="../assets/livro04-fundamental.png" alt="Imagem 4" />
            <img src="../assets/livro05-fundamental.png" alt="Imagem 5" />
            <img src="../assets/livro06-fundamental.png" alt="Imagem 6" />
            <img src="../assets/livro07-fundamental.png" alt="Imagem 6" />
          </div>
  
          <div class="book-gallery-responsive">
            <swiper
              :slides-per-view="3"
              space-between="30"
              loop="false"
              :pagination="{ el: '.swiper-pagination', clickable: true }"
            >
              <swiper-slide v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="image.alt" />
              </swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>
          </div>
        </div>
        <section class="content-section">
          <div class="content-wrapper-metodo-fonico">
            <div class="image-section">
              <img src="../assets/trio-estudando.jpeg" alt="Método Fônico" />
            </div>
            <div class="text-section">
              <h4>MÉTODO <span>FÔNICO</span></h4>
              <p>
                Utilizamos o Método Fônico para a alfabetização para a criança consolidar a
                compreensão dos sons e sua forma escrita, explorando as diferentes posições
                dos sons nas palavras. Favorecemos fluência de leitura e escrita,
                desenvolvimento de habilidades ortográficas, criativas e argumentativas, e
                percepção dos usos da língua em diferentes gêneros textuais.
              </p>
            </div>
          </div>
  
          <div class="content-wrapper">
            <div class="literatura-viva">
              <h4>LITERATURA <span>VIVA</span></h4>
              <p>
                Projeto de incentivo à leitura com um catálogo de obras literárias,
                principalmente ficcionais. Selecionamos as obras com base na proposta de
                educação cristã do Sistema Mackenzie de Ensino, oferecendo orientações ao
                professor e materiais para registros das leituras realizadas pelos alunos.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section> -->
  <div class="card-email" >
    <EmailComponent />
  </div>
  </template>
  
  <script>
  import EmailComponent from "./emailComponent.vue";
  import 'swiper/css';
  import { Navigation, Autoplay, Pagination } from 'swiper/modules';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "EnsinoFundamentalI",
    components: {
      EmailComponent,
    },
    data() {
      return {
        horariosBercario: [
          { periodo: "Tarde", horario: "13:00 às 17:30" },
          { periodo: "Integral", horario: "8:00 ás 18:00" },
          { periodo: "-", horario: "-" },
          { periodo: "Futebol", horario: "17:30 ás 18:30 - (Quarta-feira)" },
          { periodo: "Ballet", horario: "17:30 ás 18:30 - (Segunda-feira)" },
          { periodo: "Judô", horario: "17:40 ás 18:30 - (Quinta-feira)" },
        ],
        images: [
          { src: require("../assets/livro01-fundamental.png"), alt: "Imagem 1" },
          { src: require("../assets/livro02-fundamental.png"), alt: "Imagem 2" },
          { src: require("../assets/livro03-fundamental.png"), alt: "Imagem 3" },
          { src: require("../assets/livro04-fundamental.png"), alt: "Imagem 4" },
          { src: require("../assets/livro05-fundamental.png"), alt: "Imagem 5" },
          { src: require("../assets/livro06-fundamental.png"), alt: "Imagem 6" },
          { src: require("../assets/livro07-fundamental.png"), alt: "Imagem 7" },
        ],
      };
    },
    setup() {
      return {
        modules: [Autoplay, Navigation, Pagination],
      };
    },
  };
  </script>
  
  <style scoped>
  .card-text-turmas p {
    font-size: 14px;
  }
  
  .bilingue {
    background-color: var(--azul);
    color: var(--color-white);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .bilingue h2 {
    color: var(--yellow);
    font-family: var(--baloo);
    font-weight: 800;
    font-size: 42px;
  }
  
  .bilingue h3 {
    color: var();
    font-family: var(--baloo);
    font-weight: 800;
    font-size: 30px;
  }
  
  .card-bilingue {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 1rem;
  }

  .card-email {
    padding: 3rem 0;
  }
  
  .bilingue-first {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 56%;
  }
  
  .bilingue-second {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }
  
  .bilingue-second img {
    width: 100%;
  }
  
  .text-section {
    max-width: 50%;
  }
  
  .text-section p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .section {
    padding: 20px !important;
  }
  
  .card-material-fundamental {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  
  .card-component-turmas {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  
    .card-text-turmas {
    width: 50%;
  }
  
  .card-img-turmas {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    border: none !important;
  }

  .card-img-turmas img {
    border: none !important;
  }
  
  .card-swiper-slide {
    width: 40%;
    height: auto;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  
  .card-swiper-slide img {
    display: block;
    width: 100%;
    height: 500px;
  }
  
  .book-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
  }
  
  .book-gallery img {
    width: 130px; /* Ajuste conforme necessário */
    height: auto;
    transition: transform 0.3s ease;
  }
  
  .book-gallery img:hover {
    transform: scale(1.05);
  }
  
  .image-section {
    width: 30% !important;
    flex: 1;
  }
  
  .image-section img {
    width: 80%;
    height: auto;
    border-radius: 10px;
  }
  
  .text-section {
    flex: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .text-section p {
    font-size: 18px;
    line-height: 1.6;
  }
  
  .content-section {
    padding: 20px;
    margin-top: 3rem;
  }
  
  .content-wrapper,
  .content-wrapper-metodo-fonico {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .image-section {
    flex: 1;
  }
  
  .text-section {
    flex: 2;
  }
  
  .text-section h4 span {
    font-size: 30px;
  }
  
  .literatura-viva {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center !important;
    justify-content: center;
    margin: 2rem 0 0 0;
  }
  
  .literatura-viva p {
    width: 80%;
    display: flex;
    text-align: center;
    align-items: center !important;
    justify-content: center;
  }
  
  .book-gallery-responsive {
    display: none;
  }
  
  .literatura-viva img {
    width: 800px;
    height: auto;
  }
  
  @media (max-width: 947px) {
    .text-section p {
      font-size: 14px;
      line-height: 1.6;
      width: 100%;
    }
  
    .text-section {
      max-width: 84%;
    }
  
    .literatura-viva p {
      width: 100%;
      font-size: 14px;
    }
  
    .content-wrapper-metodo-fonico {
      display: flex;
      flex-direction: column-reverse;
    }
  
    .image-section {
      flex: 1;
      width: 100% !important;
    }
  
    .image-section img {
      width: 80%;
      height: auto;
      border-radius: 10px;
    }
  
    .card-material-fundamental {
      width: 100% !important;
    }
  
    .content-wrapper-metodo-fonico {
      width: 100% !important;
    }
    .content-section {
      padding: 20px;
      margin-top: 1rem;
    }
  
    .book-gallery {
      display: none;
    }
  
    .book-gallery-responsive {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .swiper-slide {
      width: 25% !important;
    }
  
    .swiper-slide img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 10;
  }
  .swiper-pagination-bullet {
    background-color: black;
    opacity: 1; /* Certifique-se de que a opacidade esteja visível */
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
  
  .swiper-pagination-bullet-active {
    background-color: red; /* Cor do bullet ativo */
  }

  .card-img-turmas {
    padding: 0 !important;
  }

  .ballet-cell {
    flex-direction: column-reverse !important;
  }
  }
  </style>
  