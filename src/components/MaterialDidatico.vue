<template>
  <div class="material-didatico">
    <h2 class="">MATERIAL <span class="highlight">DIDÁTICO</span></h2>
    <div class="cards">
      <!-- Card 1 -->
      <div class="card" :class="{'active': activeCard === 0}" @mouseover="setActiveCard(0)" @mouseleave="resetActiveCard">
        <img src="../assets/aluna-fundamental.jpeg" alt="" class="card-img">
        <div class="card-content">
          <h2>EDUCAÇÃO INFANTIL</h2>
          <button class="btn">CONHEÇA &#x2197;</button>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="card" :class="{'active': activeCard === 2}" @mouseover="setActiveCard(2)" @mouseleave="resetActiveCard">
        <img src="" alt="" class="card-img">
        <div class="card-content">
          <h2>ENSINO FUNDAMENTAL I</h2>
          <button class="btn">CONHEÇA &#x2197;</button>
        </div>
      </div>
    </div>
    <div class="features">
      <!-- Feature 1 -->
      <div class="feature">
        <img src="icon_path_1.png" alt="" class="feature-icon">
        <h3>Habilidades e competências</h3>
        <p>Fomentamos a interdisciplinaridade em todas as áreas do conhecimento.</p>
      </div>
      <!-- Feature 2 -->
      <div class="feature">
        <img src="icon_path_2.png" alt="" class="feature-icon">
        <h3>Método fônico</h3>
        <p>Utilizamos um método de alfabetização que valoriza a cultura letrada.</p>
      </div>
      <!-- Feature 3 -->
      <div class="feature">
        <font-awesome-icon :icon="['fas', 'cross']" />
        <h3>Cosmovisão cristã aplicada</h3>
        <p>Nossa prática pedagógica é fundamentada na teologia cristã reformada.</p>
      </div>
      <!-- Feature 4 -->
      <div class="feature">
        <img src="icon_path_4.png" alt="" class="feature-icon">
        <h3>Aprendizagem significativa</h3>
        <p>Organizamos sequências didáticas para o aluno construir o entendimento dos objetos de conhecimento de cada etapa.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCard: null
    };
  },
  methods: {
    setActiveCard(index) {
      this.activeCard = index;
    },
    resetActiveCard() {
      this.activeCard = null;
    }
  }
};
</script>

<style scoped>
.material-didatico {
  text-align: center;
  padding: 20px;
  margin: 50px 0 30px 0;
}

.cards {
  display: flex;
  justify-content: center;
  margin: 80px 0 40px 0;
  transition: all 0.3s ease;
  gap: 1rem;
}

.card {
  position: relative;
  width: 300px;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform: scale(0.9);
}

.card.active {
  width: 30%;
  transform: scale(1.1);
}

.card-img {
  max-width: 500px;
  height: auto;
  transition: all 0.3s ease;
}

.card-content {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  text-align: left;
}

.btn {
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #333;
}


.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.feature {
  text-align: center;
  width: 20%;
  border-right: 1px solid black;
}

.feature-icon {
  margin-bottom: 10px;
}

.feature h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.feature p {
  font-size: 14px;
  color: gray;
}
</style>
