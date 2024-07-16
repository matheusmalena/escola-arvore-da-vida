<template>
    <!--- FOOTER --->
    <footer class="footer">
        <div class="content-footer">
            <div>
                <img src="../assets/logo-sem-fundo.png" alt="">
            </div>
            <div class="responsive-icons">
                <div class="redes-footer">
                    <a target="_blank" href=""> <font-awesome-icon :icon="['fab', 'instagram']"><span>Instagram</span></font-awesome-icon></a>
                    <a target="_blank" href=""> <font-awesome-icon :icon="['fas', 'phone']"><span>Telefone</span></font-awesome-icon></a>
                    <a target="_blank" href=""> <font-awesome-icon :icon="['fab', 'facebook']"><span>Facebook</span></font-awesome-icon></a>
                </div>
            </div>
            <div class="container-footer">
                <p>&copy; Centro Educacional Arvore da Vida - 2024 Todos os direitos reservados. By <a target="_blank"
                        href="https://www.instagram.com/dev_malena/"> Matheus Malena </a></p>
                <ul>
                    <li><a target="_blank" href="#">Política de Privacidade</a></li>
                    <li><a target="_blank" href="#">Termos de Uso</a></li>
                    <li><a target="_blank" href="#">Contato</a></li>
                </ul>
            </div>
            <div class="redes-footer">
                <a target="_blank" href=""> <font-awesome-icon :icon="['fab', 'instagram']"><span>Instagram</span></font-awesome-icon></a>
                <a target="_blank" href=""> <font-awesome-icon :icon="['fas', 'phone']"><span>Telefone</span></font-awesome-icon></a>
                <a target="_blank" href=""> <font-awesome-icon :icon="['fab', 'facebook']"><span>Facebook</span></font-awesome-icon></a>
            </div>
        </div>
    </footer>
</template>
  
  <script>
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
  };
  </script>

  <style scoped>
  /* ============= FOOTER ============= */
.footer {
  background: var(--color-black-clean);
  padding: 17px 23px;
  color: var(--color-white);
  text-align: center;
}

.footer p {
  margin: 0;
  padding: 10px 0;
}

.footer ul {
  padding: 0;
  margin: 10px 0 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer ul li {
  margin: 0 10px;
}

footer img {
  width: 150px;
}

.footer ul li a {
  color: var(--color-orange-light);
  text-decoration: none;
}

.footer ul li a:hover {
  text-decoration: underline;
}

.footer-icons a i {
  font-size: 24px;
  color: var(--color-white);
  text-decoration: none;
  padding: 0 0.5rem;
}

.footer-icons a i span {
  font-size: 16px;
  color: var(--color-white);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

.container-footer a {
  text-decoration: none;
  color: var(--color-orange-light);
}

.container-footer a:hover {
  color: var(--orange);
}

.redes-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.redes-footer a {
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.redes-footer a i {
  font-size: 18px;
  text-align: center;
}

.redes-footer a span {
  font-family: var(--poppins);
  color: var(--color-white);
  font-weight: 400 !important;
  font-size: 14px !important;
  padding: 0 0 0 0.5rem;
}

.content-footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.responsive-icons {
 display: none;
}
  </style>