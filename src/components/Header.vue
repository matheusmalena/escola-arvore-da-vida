<template>
    <nav>
        <div>
            <img src="../assets/logo-sem-fundo.png" alt="">
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
            <button>Fale conosco</button>
        </div>
    </nav>
    
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    props: {
      msg: String
    }
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
    }

    nav button{
        background-color: var(--branco);
        border: 1px solid var(--branco);
        border-radius: 10px;
        padding: 0.6rem;
    }

  </style>
  