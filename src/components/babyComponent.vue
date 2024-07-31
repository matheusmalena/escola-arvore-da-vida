<template>
  <Header></Header>
  <div class="green"></div>

  <img src="" alt="" />

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
    </div>
    <div class="card-img-turmas">
      <img src="../assets/transito.jpg" alt="">
    </div>
  </section>

  <TableComponent :horarios="horariosBercario" />

  <EmailComponent />
</template>

<script>
import EmailComponent from "./emailComponent.vue";
import Header from "./Header.vue";
import TableComponent from "./TableComponent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "babyComponent",
  components: {
    Header,
    EmailComponent,
    TableComponent,
  },
  data() {
    return {
      horariosBercario: [
        { periodo: "Manhã", horario: "07:00 ás 12:30" },
        { periodo: "Tarde", horario: "12:45 às 17:00" },
        { periodo: "Integral", horario: "08:00 ás 17:30" },
        { periodo: "Estendido", horario: "07:00 às 19:00" },
      ],
    };
  },
};
</script>

<style>
</style>
