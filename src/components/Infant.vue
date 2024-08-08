<template>
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
      <div class="text-section">
        <h2>Educação <span>Infantil</span></h2>
        <p>
          Na Educação Infantil, focamos no desenvolvimento integral da criança nas
          dimensões cognitiva, física, emocional, social e cultural. Integramos essas
          dimensões por meio de jogos, brincadeiras, rodas de conversa, momentos de
          contação de histórias e resolução de problemas, incentivando a interação entre a
          criança e o professor. Tudo isso é embasado em verdades e ensinamentos da fé
          cristã reformada.
        </p>
      </div>
      <div class="image-grid">
        <img src="../assets/livro01-infant.png" alt="Imagem 1">
            <img src="../assets/livro02-infant.png" alt="Imagem 2">
            <img src="../assets/livro03-infant.png" alt="Imagem 3">
            <img src="../assets/livro04-infant.png" alt="Imagem 4">
            <img src="../assets/livro05-infant.png" alt="Imagem 5">
            <img src="../assets/livro06-infant.png" alt="Imagem 6">
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
  name: "Infant",
  components: {
    EmailComponent,
    TableComponent,
  },
  data() {
    return {
      horariosBercario: [
        { periodo: "Tarde", horario: "13h às 17h" },
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
  max-width: 40%;
}

.text-section p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 40%;
}

.image-grid img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
