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
        { periodo: "Meio período", horario: "13h às 17h" },
        { periodo: "Integral", horario: "8h ás 18h" },
      ],
    };
  },
};
</script>

<style>
</style>
