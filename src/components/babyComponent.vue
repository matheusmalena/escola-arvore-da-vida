<template>
    <Header></Header>
    <div class="green"></div>

    <img src="" alt="">

    <section class="section bercario">
      <h2>Berçario</h2>
        <div>
            <span>O bebê vive em um fase extremamente importante para o seu desenvolvimento emocional, intelectual e físico. </span>
 
<p> É o momento das descobertas, onde tudo se torna novo. Neste momento sensível e de descobertas, que o bebê aprende e associa a sua existência ao mundo.</p>

<p>Oferecemos carinho, segurança e aceitação. Atividades únicas, ambiente seguro e projetado exclusivamente para essa fase da vida de seu filho.</p>
        </div>
    </section>

    <TableComponent :horarios="horariosBercario" />

    <EmailComponent/>
    
</template>

<script>
import EmailComponent from './emailComponent.vue';
import Header from './Header.vue';
import TableComponent from './TableComponent.vue';

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
        { periodo: 'Manhã', horario: '07:00 ás 12:30' },
        { periodo: 'Tarde', horario: '12:45 às 17:00' },
        { periodo: 'Integral', horario: '08:00 ás 17:30' },
        { periodo: 'Estendido', horario: '07:00 às 19:00' }
      ]
    };
  }
};
</script>

<style>

.bercario h2 {
color: var(--orange);
font-weight: 800;
font-family: var(--baloo);
}
</style>
