<template>
  <div class="green"></div>

  <div class="banner">
    <img src="../assets/2.png" alt="" />
  </div>

  <section class="section card-component-turmas">
    <div class="card-text-turmas">
      <h2>Berçario</h2>
      <p>
        O bebê vive em um fase extremamente importante para o seu desenvolvimento
        emocional, intelectual e físico. É o momento das descobertas, onde tudo se torna
        novo. Neste momento sensível e de descobertas, que o bebê aprende e associa a sua
        existência ao mundo. <br> <br>
        Oferecemos carinho, segurança e aceitação. Atividades únicas, ambiente seguro e
        projetado exclusivamente para essa fase da vida de seu filho.
      </p>
      <a href="https://wa.me/5511972216682" target="_blank" ><button class="btn-agendar"> Agende uma visita <font-awesome-icon :icon="['fab', 'whatsapp']" /></button></a>
    </div>
    <div class="card-img-turmas">
      <swiper :navigation="true" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/carrinhos-casinha.jpeg" /></swiper-slide>
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/parquinho2.jpeg" /></swiper-slide>
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/refeitorio.jpeg" /></swiper-slide>
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/piscina.jpeg" /></swiper-slide>
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/sala.jpg" alt="" /></swiper-slide>
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/pingpong.jpeg" alt="" /></swiper-slide>
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/parquinho01.jpeg" /></swiper-slide>
        <swiper-slide class="card-swiper-slide"><img class="img-carrousel-estruture" src="../assets/piscina.jpeg" /></swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="section bilingue">
    <div class="card-bilingue" >
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
          abordagem lúdica inclui músicas, histórias e brincadeiras, tornando o
          aprendizado envolvente e prazeroso.
        </p>
      </div>
      <div class="bilingue-second">
        <img src="../assets/bilingue.png" alt="" />
      </div>
    </div>
  </section>

  <TableComponent :horarios="horariosBercario" />

  <EmailComponent />
</template>

<script>
import EmailComponent from "./emailComponent.vue";
import TableComponent from "./TableComponent.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "babyComponent",
  components: {
    EmailComponent,
    TableComponent,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      horariosBercario: [
        { periodo: "Meio período", horario: "13h às 17h" },
        { periodo: "Integral", horario: "8h ás 18h" },
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

  .card-component-turmas {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 0 100px 0;
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
  height: 500px
}

</style>
