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

  <TableComponent :horarios="horariosBercario" />

  <EmailComponent />
</template>

<script>
import EmailComponent from "./emailComponent.vue";
import TableComponent from "./TableComponent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EnsinoFundamentalI",
  components: {
    EmailComponent,
    TableComponent,
  },
  data() {
    return {
      horariosBercario: [
        { periodo: "Tarde", horario: "13h às 17h30" },
        { periodo: "Integral", horario: "08h ás 18h" },
        { periodo: "-", horario: "-" },
        { periodo: "Futebol", horario: "17h30 ás 18h30 - (Quarta-feira)" },
        { periodo: "Ballet", horario: "17h30 ás 18h30 - (Quarta-feira)" },
        { periodo: "Judô", horario: "17h40 ás 18h30 - (Quinta-feira)" },
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
