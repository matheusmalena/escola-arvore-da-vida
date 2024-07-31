<template>
  <Header></Header>
  <div class="green"></div>

  <img src="" alt="" />

  <section class="section card-component-turmas">
    <div class="card-text-turmas">
      <h2>Educação Infantil</h2>
      <p>
        A Educação Infantil é a base onde começam os primeiros passos de um futuro
        brilhante. Valorizamos cada momento dessa fase mágica, onde a curiosidade e a
        vontade de aprender florescem naturalmente. Nosso objetivo é oferecer um ambiente
        acolhedor e estimulante, onde as crianças possam explorar, descobrir e criar,
        desenvolvendo-se intelectual, psicomotor, social e emocionalmente. <br />
        <br />
        A formação de uma visão de mundo fundamentada em princípios cristãos é central em
        nosso método educativo. Acreditamos que ensinar os valores bíblicos desde cedo
        ajuda a criança a crescer com uma forte base moral e ética. Nossa proposta
        pedagógica vai além do aprendizado convencional, instigando a criança a conhecer e
        a fazer, compreendendo os processos e significados por trás de cada ação.
        <br />
        <br />
        Cada dia na nossa Educação Infantil é uma nova oportunidade de aprendizado e
        crescimento. Construímos uma autoestima positiva, onde cada criança se sente
        valorizada e segura para expressar suas ideias e sentimentos. Venha fazer parte
        dessa aventura conosco!
      </p>
    </div>
    <div class="card-img-turmas">
      <img src="../assets/transito.jpg" alt="" />
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
  name: "Infant",
  components: {
    Header,
    EmailComponent,
    TableComponent,
  },
  data() {
    return {
      horariosBercario: [
        { periodo: "Tarde", horario: "13h às 17h" },
        { periodo: "Integral", horario: "08h ás 18h" },
      ],
    };
  },
};
</script>

<style scoped>
.card-text-turmas p {
    font-size: 14px;
}
</style>
