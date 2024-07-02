<template>
    <nav>
        <div>
            <img src="../assets/logo.jpg" alt="">
        </div>
        <div>
            <ul>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#extracurricular">Atividades</a></li>
            <li><a href="#estrutura">Estrutura</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
        </div>
        <div>
            <a href="https://wa.me/5511972216682" class="botao-entrar-em-contato"> Entre em contato conosco  <span><font-awesome-icon :icon="['fab', 'whatsapp']" class="icone-whatsapp"/></span> </a>
        </div>
    </nav>
    
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
  }
  </script>
  
  <style scoped>
    nav{
        background-color: var(--verde-escuro);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    nav img {
        width: 150px;
        height: auto;
    }

    nav ul{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        text-decoration: none;
        list-style-type: none;
    }

    nav ul li a{
        color: var(--branco);
        text-decoration: none;
    }

    nav ul li a:hover{
        color: var(--laranja-claro);
        text-decoration: none;
    }

    .botao-entrar-em-contato{
        background-color: var(--branco);
        border: 1px solid var(--branco);
        border-radius: 6rem;
        text-decoration: none;
        color: var(--preto);
        padding: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;
    }

    .botao-entrar-em-contato:hover{
        background-color: #ffffffc9;
        border: 1px solid #ffffffc9;
        border-radius: 6rem;
        padding: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;
    }
  </style>
  