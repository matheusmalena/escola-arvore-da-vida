<template>
  <div class="green"></div>

  <img src="" alt="" />

  <section class="section card-component-turmas">
    <div class="card-text-turmas">
      <h2>Ensino Fundamental I</h2>
      <p>
        Na escola Árvore da Vida, o Ensino Fundamental I é a fase em que os alunos
        consolidam os primeiros conceitos das diversas áreas do conhecimento, com foco no
        desenvolvimento da leitura, escrita e pensamento lógico.
        <br />
        <br />
        Durante esse período, os alunos desenvolvem a capacidade de organizar seus
        pensamentos e ações de forma crítica, guiados por princípios e valores cristãos,
        facilitando a compreensão da realidade ao seu redor.
        <br />
        <br />
        Além disso, valorizamos o fortalecimento dos laços familiares, da solidariedade e
        da tolerância, integrando conhecimentos sobre o ambiente natural e social, sistema
        político, tecnologia, artes e valores essenciais para a vida em sociedade.
      </p>
    </div>
    <div class="card-img-turmas">
      <img src="../assets/transito.jpg" alt="" />
    </div>
  </section>

  <section class="section bilingue">
    <div class="card-bilingue">
      <div class="bilingue-first">
        <h2>Educação Bilíngue</h2>
        <p>
          Na Escola Árvore da Vida, acreditamos que a educação bilíngue é essencial. A
          fluência em línguas estrangeiras abre portas para novas culturas e amplia a
          comunicação global, essencial no mundo de hoje.
        </p>
        <h3>Língua Estrangeira na Primeira Infância</h3>
        <p>
          Introduzir uma língua estrangeira cedo facilita o aprendizado. Pesquisas mostram
          que até os 10 anos, a aquisição de idiomas é natural, e quanto mais cedo a
          exposição, melhor a fluência. O cérebro das crianças é moldado para captar sons
          e ritmos de diversas línguas, e aprender uma nova língua expande sua capacidade
          neural, facilitando o aprendizado de outros idiomas no futuro.
        </p>
        <p>
          Oferecemos aulas diárias de inglês, combinando diversão e aprendizado. Nossa
          abordagem inclui leitura, escrita, conversação, além de músicas, histórias e
          jogos. Isso proporciona uma base sólida para o desenvolvimento contínuo das
          habilidades linguísticas e prepara os alunos para futuros desafios acadêmicos,
          tornando o aprendizado envolvente e eficaz.
        </p>
      </div>
      <div class="bilingue-second">
        <img src="../assets/bilingue.png" alt="" />
      </div>
    </div>
  </section>

  <section class="material">
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
            <img src="../assets/metodo-fonico.png" alt="Método Fônico" />
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
  </section>

  <TableComponent :horarios="horariosBercario" />

  <EmailComponent />
</template>

<script>
import EmailComponent from "./emailComponent.vue";
import TableComponent from "./TableComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EnsinoFundamentalI",
  components: {
    EmailComponent,
    TableComponent,
    Swiper,
    SwiperSlide,
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

.card-material-fundamental {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
}
</style>
