<template>
  <div class="material-didatico">
    <h1 class="title">MATERIAL <span class="highlight">DIDÁTICO</span></h1>
    <div class="cards">
      <!-- Card 1 -->
      <div class="card" :class="{'active': activeCard === 0}" @mouseover="setActiveCard(0)" @mouseleave="resetActiveCard">
        <img src="../assets/aluna-fundamental.jpeg" alt="" class="card-img">
        <div class="card-content">
          <h2>EDUCAÇÃO INFANTIL</h2>
          <button class="btn">CONHEÇA &#x2197;</button>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="card" :class="{'active': activeCard === 1}" @mouseover="setActiveCard(1)" @mouseleave="resetActiveCard">
        <img src="path_to_image_2.jpg" alt="" class="card-img">
        <div class="card-content">
          <h2>EF ANOS INICIAIS</h2>
          <button class="btn">CONHEÇA &#x2197;</button>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="card" :class="{'active': activeCard === 2}" @mouseover="setActiveCard(2)" @mouseleave="resetActiveCard">
        <img src="path_to_image_3.jpg" alt="" class="card-img">
        <div class="card-content">
          <h2>EF ANOS FINAIS</h2>
          <button class="btn">CONHEÇA &#x2197;</button>
        </div>
      </div>
      <!-- Card 4 -->
      <div class="card" :class="{'active': activeCard === 3}" @mouseover="setActiveCard(3)" @mouseleave="resetActiveCard">
        <img src="path_to_image_4.jpg" alt="" class="card-img">
        <div class="card-content">
          <h2>ENSINO MÉDIO</h2>
          <button class="btn">CONHEÇA &#x2197;</button>
        </div>
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
}

.title {
  font-size: 48px;
  margin-bottom: 20px;
}

.highlight {
  color: red;
}

.cards {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  transition: all 0.3s ease;
}

.card {
  position: relative;
  width: 20%;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform: scale(0.9);
}

.card.active {
  width: 35%;
  transform: scale(1.1);
}

.card-img {
  width: 100%;
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
</style>
