<template>
  <header class="header-content" :class="{ sticky: isSticky }">
    <!--- MENU NAVBAR --->
    <nav class="nav-bar">
      <div class="logo">
        <a href="#"><img class="logo" src="../assets/logo.jpg" alt=""></a>
      </div>

      <ul id="menu" class="menu">
        <li>
          <a href="#turmas" @click="handleMenuClick">Turmas</a>
          <ul class="submenu">
            <li><a href="./baby.html" @click="handleMenuClick">Baby</a></li>
            <li><a href="#turmas2" @click="handleMenuClick">Educação Infantil</a></li>
            <li><a href="#turmas2" @click="handleMenuClick">Ensino Fundamental I</a></li>
          </ul>
        </li>
        <li>
          <a href="#extracurricular" @click="handleMenuClick">Atividades</a>
          <ul class="submenu">
            <li><a href="#atividade1" @click="handleMenuClick">Ballet</a></li>
            <li><a href="#atividade2" @click="handleMenuClick">Judo</a></li>
            <li><a href="#atividade2" @click="handleMenuClick">Futebol</a></li>
            <li><a href="#atividade2" @click="handleMenuClick">Passeios e visitações</a></li>
            <li><a href="#atividade2" @click="handleMenuClick">Festas temáticas</a></li>
          </ul>
        </li>
        <li><a href="#about" @click="handleMenuClick">Sobre Nós</a></li>
        <li><a href="#structure" @click="handleMenuClick">Estrutura</a></li>
        <li><a href="#contact" @click="handleMenuClick">Contato</a></li>
      </ul>

      <!-- icon menu responsive -->
      <div class="menu-btn" @click="toggleMenu">
        <i class="fa fa-bars" :class="{ active: isMenuActive }"></i>
      </div>
      <div>
        <a target="_blank" href="https://wa.me/5511972216682" class="botao-entrar-em-contato">
          Entre em contato conosco <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  data() {
    return {
      isSticky: false,
      isMenuActive: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.adjustFirstSectionPadding(); // Chama a função para ajustar o padding inicial
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
  adjustFirstSectionPadding() {
    const navBar = document.querySelector('.nav-bar');
    const firstSection = document.querySelector('.first-section');
    if (navBar && firstSection) {
      const navBarHeight = navBar.offsetHeight;
      firstSection.style.paddingTop = `${navBarHeight + 20}px`;
    }
  },
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    const menu = document.getElementById('menu');
    if (this.isMenuActive) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  },
  handleScroll() {
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
      this.isSticky = window.scrollY > 20;
      if (this.isSticky) {
        navBar.classList.add('sticky');
      } else {
        navBar.classList.remove('sticky');
      }
    }
  },
  handleMenuClick() {
      if (this.isMenuActive) {
        this.toggleMenu();
      }
    },
}
};
</script>

<style>
/* Estilos */
.nav-bar {
  position: fixed;
  background: var(--first-color);
  width: 100%;
  padding: 30px 0;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row !important;
  justify-content: space-around;
  align-items: center;
  z-index: 1000; /* Ajuste o z-index para garantir que o nav-bar esteja sobre outros elementos */
}

.nav-bar.sticky {
  padding: 15px 0;
  background: var(--first-color);
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.menu-btn {
  color: var(--color-white);
  font-size: 23px;
  cursor: pointer;
}

.menu-btn i.active {
  color: var(--orange); /* Cor quando ativo */
}

.menu .submenu {
  display: none;
  position: absolute;
  background-color: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  z-index: 1000;
}

.menu li:hover .submenu {
  display: block;
}

.menu li {
  position: relative;
}

.menu li a {
  display: block;
  color: var(--color-white);
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  transition: color 0.3s ease;
  text-decoration: none;
}

.menu li a:hover {
  color: var(--orange);
}

.submenu li {
  padding: 10px 20px;
}

.submenu li a {
  color: var(--color-black) !important;
  text-decoration: none;
  font-size: 14px !important;
  margin: 0 !important;
}

.submenu li a:hover {
  color: var(--color-orange-light) !important;
  text-decoration: none;
  font-size: 14px !important;
  margin: 0 !important;
}
</style>