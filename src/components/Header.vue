<template>
  <header class="header-content" :class="{ sticky: isSticky }">
    <!--- MENU NAVBAR --->
    <nav class="nav-bar">
      <div class="logo">
        <router-link to="/"
          ><img class="logo" src="../assets/logo.jpg" alt=""
        /></router-link>
      </div>

      <ul id="menu" class="menu">
        <li>
          <a href="#turmas" @click="handleMenuClick">Turmas</a>
          <ul class="submenu">
            <li>
              <router-link to="/Bercario" @click="handleMenuClick">Baby</router-link>
            </li>
            <li>
              <router-link to="/EducacaoInfantil" @click="handleMenuClick"
                >Educação Infantil</router-link
              >
            </li>
            <li>
              <router-link to="/EnsinoFundamentalI" @click="handleMenuClick"
                >Ensino Fundamental I</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="#services" @click="handleMenuClick">Atividades</a>
        </li>
        <li><a href="#about" @click="handleMenuClick">Sobre Nós</a></li>
        <li><a href="#structure" @click="handleMenuClick">Estrutura</a></li>
        <li><a href="#contact" @click="handleMenuClick">Contato</a></li>
      </ul>

      <!-- icon menu responsive -->
      <div class="menu-btn" @click="toggleSidebar">
        <i class="fa fa-bars" :class="{ active: isSidebarActive }"></i>
      </div>
      <div>
        <a
          target="_blank"
          href="https://wa.me/5511972216682"
          class="botao-entrar-em-contato"
        >
          Entre em contato conosco <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </nav>

    <!-- Sidebar Menu -->
    <div class="sidebar" :class="{ active: isSidebarActive }">
      <div class="sidebar-close" @click="toggleSidebar">
        <i class="fa fa-times"></i>
      </div>
      <ul class="sidebar-menu">
        <li>
          <a href="#turmas" @click="toggleSubmenu('turmas')"
            >Turmas
            <font-awesome-icon
              :icon="
                activeSubmenu === 'turmas'
                  ? 'fa-solid fa-angle-up'
                  : 'fa-solid fa-angle-down'
              "
            />
          </a>
          <ul v-if="activeSubmenu === 'turmas'" class="sidebar-submenu">
            <li><router-link to="/Bercario" class="submenu" @click="closeSidebar">Baby</router-link></li>
            <li>
              <router-link to="/EducacaoInfantil" class="submenu" @click="closeSidebar"
                >Educação Infantil</router-link
              >
            </li>
            <li>
              <router-link to="/EnsinoFundamentalI"  class="submenu" @click="closeSidebar"
                >Ensino Fundamental I</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="#services" @click="closeSidebar">Atividades</a>
        </li>
        <li><a href="#about" @click="closeSidebar">Sobre Nós</a></li>
        <li><a href="#structure" @click="closeSidebar">Estrutura</a></li>
        <li><a href="#contact" @click="closeSidebar">Contato</a></li>
      </ul>
      <div class="footer-sidebar">
        <div class="link-principal-responsivo">
          <a
            target="_blank"
            href="https://wa.me/5511972216682"
            class="botao-entrar-em-contato-responsivo"
          >
            Fale conosco <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </a>
        </div>
        <div class="responsive-icons">
          <div class="redes-responsive-icons">
            <a target="_blank" href="https://www.instagram.com/arvoredavidaperuibe/">
              <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon
            ></a>
            <a target="_blank" href="https://wa.me/5511972216682">
              <font-awesome-icon :icon="['fab', 'whatsapp']"></font-awesome-icon
            ></a>
            <a target="_blank" href="https://pt-br.facebook.com/arvoredavidaperuibe">
              <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSidebarActive" class="overlay" @click="closeSidebar"></div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      isSticky: false,
      isSidebarActive: false,
      activeSubmenu: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.adjustFirstSectionPadding();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    adjustFirstSectionPadding() {
      const navBar = document.querySelector(".nav-bar");
      const firstSection = document.querySelector(".first-section");
      if (navBar && firstSection) {
        const navBarHeight = navBar.offsetHeight;
        firstSection.style.paddingTop = `${navBarHeight + 20}px`;
      }
    },
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    toggleSubmenu(menu) {
      this.activeSubmenu = this.activeSubmenu === menu ? null : menu;
    },
    handleScroll() {
      const navBar = document.querySelector(".nav-bar");
      if (navBar) {
        this.isSticky = window.scrollY > 20;
        if (this.isSticky) {
          navBar.classList.add("sticky");
        } else {
          navBar.classList.remove("sticky");
        }
      }
    },
    closeSidebar() {
      this.isSidebarActive = false;
    },
    handleMenuClick() {
      if (this.isSidebarActive) {
        this.closeSidebar();
      }
    },
  },
};
</script>

<style>
/* Estilos para o menu responsivo e sidebar */
.menu-btn {
  display: none;
  margin: 0 0 0 200px !important;
}

/* Estilos para o menu na tela grande */
.nav-bar {
  /* seus estilos atuais */
}

.nav-bar.sticky {
  /* seus estilos atuais */
}

/* Estilos para o menu responsivo */
@media (max-width: 945px) {
  .menu-btn {
    display: flex;
    z-index: 999;
    align-items: center;
    gap: 1rem;
  }

  .fa-bars {
    margin: 0 0 0 100px;
  }

  .menu-btn i.active:before {
    content: "" !important;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: 250px;
    height: 100%;
    background: var(--color-black-clean);
    transition: left 0.3s ease;
    padding: 20px;
    z-index: 1000;
    overflow-y: auto;
  }

  .sidebar.active {
    left: 0;
  }

  .sidebar-close {
    text-align: right;
    margin-bottom: 20px;
  }

  .sidebar-close i {
    font-size: 24px;
    color: var(--color-white);
    cursor: pointer;
  }

  .sidebar-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar-menu li {
    margin-bottom: 15px;
  }

  .sidebar-menu li a {
    display: block;
    color: var(--color-white);
    font-size: 20px;
    text-decoration: none;
    padding: 10px 0;
    transition: color 0.3s ease;
  }

  .sidebar-menu li a:hover {
    color: var(--orange);
  }

  .sidebar-submenu {
    list-style: none;
    padding-left: 20px;
    margin: 0;
  }

  .sidebar-submenu li {
    margin-bottom: 10px;
  }

  .sidebar-submenu li a {
    font-size: 18px;
  }

  .sidebar-menu li a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .footer-sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20rem;
  }

  .footer-sidebar .responsive-icons {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .submenu {
    color: var(--yellow) !important;
  }

  .submenu:hover {
    color: var(--yellow-hover) !important;
  }
}
</style>
