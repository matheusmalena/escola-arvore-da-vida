<template>
  <div id="app">
    <Loading v-if="isLoading" />
    <div v-else>
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
import { ref, onMounted } from 'vue';

const loadResources = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Loading
  },
  setup() {
    const isLoading = ref(true);

    onMounted(async () => {
      await loadResources();
      isLoading.value = false;
    });

    return {
      isLoading,
    };
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
}

:root {
  --first-color: #0c4f3d;
  --color-orange-light: #fc7e2b;
  --color-black: rgb(27, 14, 14);
  --clean-white-purple: #fc7e2b;
  --text-color-light: rgb(134, 122, 159);
  --scroll-thumb-color: rgb(161, 151, 180);
  --scroll-bar-color: rgb(188, 181, 201);
  --clean-light-gray: #efefef;
  --color-clean-white: rgb(241, 239, 239);
  --color-light-green: #6c9087;
  --color-white: rgb(255, 255, 255);
  --color-black-clean: rgb(33, 33, 33);
  --orange: #fc7e2b;
  --yellow: #ffca37;
  --light-green: #24745eef;
  --light-orange: #ff7c24bd;
  --orange-full: #ff6b09;
  --poppins: "Poppins", sans-serif;
  --baloo: "Baloo 2", sans-serif;
}
</style>
