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
        { periodo: "Ballet", horario: "17h30 ás 18h30 - (Segunda-feira)" },
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
</style>
