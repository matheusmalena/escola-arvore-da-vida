<template>
  <main class="main-content">
    <div class="green"></div>

    <!-- <section class="w-100 p-0">
            <div class="section-carrousel">
                <img src="../assets/jardin-carrousel - Copia.jpg" alt="">
            </div>
        </section> -->

    <!-- Seção inicial com carrossel -->
    <section class="first-section">
    <div class="matriculas-card">
      <h2>Matrículas Abertas</h2>
      <p>
        Sua criança brilha no seu próprio aprendizado, com o apoio de professores que
        facilitam uma jornada sem limites. Juntos, vamos explorar, descobrir e crescer!
      </p>
      <a href="https://wa.me/5511972216682" class="botao-matricula">
        <font-awesome-icon :icon="['fab', 'whatsapp']" /> Matricule seu filho
      </a>
      <div class="carrousel-card">
        <swiper
        :slidesPerView="1"
          :loop="true"
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          class="swiper-wrapper mySwiper"
        >
          <swiper-slide class="swiper-slide"><img src="../assets/mz01.jpg" alt="Foto 1" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz02.png" alt="Foto 2" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz04.png" alt="Foto 3" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz03.png" alt="Foto 4" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz01.jpg" alt="Foto 1" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz02.png" alt="Foto 2" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz04.png" alt="Foto 3" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz03.png" alt="Foto 4" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz01.jpg" alt="Foto 1" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz02.png" alt="Foto 2" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz04.png" alt="Foto 3" /></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="../assets/mz03.png" alt="Foto 4" /></swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="card-img-01">
      <img src="../assets/foto01.jpg" alt="" />
    </div>
  </section>

    <section class="turmas section" id="turmas">
      <h1>O colégio <span>Atende</span></h1>
      <div class="container-turmas">
        <div class="card-turma-01 card-turmas">
          <img src="../assets/baby.jpg" alt="Educação Infantil Bilíngue" />
          <h3>Aprendizado<br /><strong>Baby</strong></h3>
          <p>
            Promove o crescimento saudável e feliz do bebê com experiências sensoriais e
            educativas desde os primeiros passos.
          </p>
          <button>Veja mais Detalhes</button>
        </div>
        <div class="card-turma-02 card-turmas">
          <img src="../assets/foto-2.jpg" alt="Ensino Fundamental I" />
          <h3>Educação Infantil <br /><strong>Bilíngue</strong></h3>
          <p>
            Destina-se à formação da criança visando o desenvolvimento integral e
            harmonioso de suas potencialidades.
          </p>
          <button>Veja mais Detalhes</button>
        </div>
        <div class="card-turma-03 card-turmas">
          <img src="" alt="Novo Ensino Médio" />
          <h3>Ensino Fundamental I <br /><strong> Bilíngue </strong></h3>
          <p>
            Estimula o aprendizado e o desenvolvimento integral das crianças,
            preparando-as para um futuro de descobertas e conquistas.
          </p>
          <button>Veja mais Detalhes</button>
        </div>
      </div>
    </section>

    <!--- ABOUT SECTION --->
    <section class="about section" id="about" aria-label="Seção falando sobre a escola">
      <div class="max-width" data-aos="fade-down">
        <h2 class="title">Quem Somos</h2>

        <div class="about-content">
          <div class="column left">
            <img src="../assets/sala.jpg" alt="imagem pessoal Roberta Fontes" />
          </div>

          <div class="column right">
            <div class="text"></div>
            <h3 class="mb-4">Conheça a Escola Árvore da Vida</h3>
            <p>
              A instituição de ensino básico Escola Árvore da Vida é comprometida em
              oferecer educação de qualidade com o objetivo de contribuir para a formação
              integral dos seus alunos, fundamentado em princípios éticos e de
              responsabilidade. As ações pedagógicas desenvolvidas nas turmas de Creche ao
              Ensino Fundamental I, promovidas por professores experientes e em constante
              atualização profissional, colabora para o desenvolvimento pleno de aspectos
              cognitivos e intelectuais dos estudantes, garantindo o acréscimo na
              sociedade de cidadãos capazes de compreender seu papel.
            </p>

            <br />

            <a target="_blank" href="https://wa.me/5511972216682"
              >Entre em contato <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="tag-anos-escola">
      <h2>7 anos transformando vidas através da educação</h2>
    </div>

    <!-- SERVICES SECTION -->
    <section
      class="services section"
      id="services"
      aria-label="uma seção falando dos meus serviços que eu ofereço."
    >
      <!-- <div id="particles-js"></div> -->
      <div class="max-width">
        <div data-aos="fade-down">
          <h2 class="title">Atividade Extracurricular</h2>
          <p class="text-center">
            Com o objetivo de melhorar a formação do aluno, o estabelecimento de ensino
            Escola Árvore da Vida oferece atividades extracurriculares para despertar o
            talento dos estudantes, aprimorando o desempenho em sala de aula. O trabalho
            de estímulo cognitivo em diferentes áreas, apresenta um ganho significativo no
            desenvolvimento integral do indivíduo. Os estudantes praticam com mais
            frequência as expressões corporais, e tornam-se mais críticos, participativos,
            proporcionando lições como: autonomia, tolerância, respeito, e o
            reconhecimento de ponto de vista de outras pessoas. Confira algumas das
            práticas interdisciplinares mais comuns que são oferecidas na escola:
          </p>
        </div>
        <div class="serv-content" data-aos="zoom-in-up">
          <div class="card" style="width: 18rem">
            <img src="../assets/ballet.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ballet</h5>
              <p class="card-text">Desenvolvendo a graça e a disciplina em cada passo.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/judo.jpeg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Judo</h5>
              <p class="card-text">Poder e equilíbrio: onde a força encontra a mente.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/fut.png" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Futebol</h5>
              <p class="card-text">Paixão no gramado, união no jogo.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/tinta.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Passeios e visitações</h5>
              <p class="card-text">Descubra o mundo, uma aventura por vez.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>

          <div class="card" style="width: 18rem">
            <img src="../assets/foto-2.jpg" class="card-box-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Festas temáticas</h5>
              <p class="card-text">Momentos inesquecíveis, diversão garantida.</p>
              <a href="#" class="btn btn-primary">Saiba mais!</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--- SKILLS SECTION --->
    <section
      class="skills"
      id="skills"
      aria-label="uma seção falando das minhas habilidades e estudos até o momento."
    >
      <div class="max-width" data-aos="fade-down">
        <h2 class="title">Habilidades</h2>

        <div class="skills-content">
          <div class="column left">
            <div class="text">Minhas habilidades criativas e experiências</div>
            <p>
              Gostaria de compartilhar aqui sobre minha trajetória nos estudos da
              programação até o momento. Embora eu ainda não tenha experiência
              profissional, tenho me dedicado diariamente para aprimorar minhas
              habilidades e conhecimentos na área de Desenvolvimento Full-Stack, na qual
              almejo me especializar.
              <br />
              Comecei meus estudos no Front-end, que é a parte visual e interativa dos
              sites. Estou me aprofundando cada dia mais em tecnologias como HTML, CSS e
              JavaScript, e atualmente iniciei meus estudos em React. Além disso, estou
              mergulhando no universo do Front-end e explorando Banco de Dados, que faz
              parte do Back-end, área que comecei estudar na Faculdade.
              <br />
              Estou gostando bastante de poder conhecer aos poucos como funciona por trás
              de tudo e suas tecnologias. Desde então, meu objetivo é continuar evoluindo
              e aprendendo cada dia mais que a área do Desenvolvimento Web oferece, para
              poder colocar meus conhecimentos em prática e continuar aprendendo ainda
              mais com projetos reais, visando contribuir no mercado de trabalho.
            </p>
          </div>

          <div class="column right"></div>
        </div>
      </div>
    </section>

    <!--- CERTIFICATES SECTION --->
    <section
      class="conquest section"
      id="certificates"
      aria-label="uma seção mostrando os meus certificados do meu aprendizado."
    >
      <div class="max-width" data-aos="fade-down">
        <div>
          <h2 class="title">Minhas Conquistas</h2>
        </div>

        <div class="carousel owl-carousel">
          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/1244f4a2-7b6b-4cfa-a0e9-7a07bed262bb"
              ><img src="" alt="Certificado HTML"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/f36bf34c-fd7e-4326-9d59-45b03c4ff385"
              ><img src="" alt="Certificado DESENVOLVA APLICAÇÕES WEB COM JAVASCRIPT"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/e77a674a-4527-4715-95a4-71b145fce611"
              ><img
                src=""
                href="https://cursos.alura.com.br/certificate/e77a674a-4527-4715-95a4-71b145fce611"
                alt="GIT E GITHUB: REPOSITÓRIO, COMMIT E VERSÕES"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/6f36049a-25b7-4b6a-ab98-42e3324faa3a"
              ><img src="" alt="Certificado Linux"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/degree/certificate/4a40261c-7c41-476f-8397-b67c1b830da0"
              ><img src="" alt="Certificado Bootstrap"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/matheus-tew-one/arquitetura-computadores-funcionamento-programa"
              ><img src="" alt="Certificado ARQUITETURA DE COMPUTADORES"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/df42bfc0-c7d5-4cf4-b7a5-7e768eb1c281"
              ><img src="" alt="Certificado DNS"
            /></a>
          </div>

          <div class="card">
            <a
              href="https://cursos.alura.com.br/certificate/matheus-tew-one/logica-programacao-javascript-html"
              ><img src="" alt="Certificado HTML"
            /></a>
          </div>
        </div>
      </div>
    </section>

    <!--- PROJECTS SECTION --->
    <section
      class="portfolio section"
      id="projects"
      aria-label="uma seção mostrando os principais projetos do meu Github."
    >
      <div class="max-width" data-aos="fade-down">
        <h2 class="title">Projetos</h2>
        <div class="portfolio-container swiper mySwiper">
          <div class="swiper-wrapper">
            <!-- project 01 -->
            <div class="portfolio-content swiper-slide">
              <img src="" class="portfolio-img" alt="projeto lista de tarefas" />
              <div>
                <h3 class="portfolio-title">Previsão do Tempo Website</h3>
                <p class="portfolio-description">
                  Uma página de previsão de tempo com um API integrada a OpenWeather em
                  JavaScript.
                </p>
                <a
                  href="https://matheusmalena.github.io/AppPrevisaoDoTempo/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            <!-- project 02 -->
            <div class="portfolio-content swiper-slide">
              <img src="" class="portfolio-img" alt="projeto yoga website" />
              <div>
                <h3 class="portfolio-title">Fokus Website</h3>
                <p class="portfolio-description">
                  Um sistema de temporizador, que ajuda a pessoa usuária a focar nas suas
                  atividades do dia a dia.
                </p>
                <a
                  href="https://matheusmalena.github.io/Fokus/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            <!-- project 03 -->
            <div class="portfolio-content swiper-slide">
              <img src="" class="portfolio-img" alt="card light/dark mode" />
              <div>
                <h3 class="portfolio-title">Cookin Up</h3>
                <p class="portfolio-description">
                  Uma site para você explorar novas receitas todos os dias com os
                  ingredientes que estão ao seu alcance!
                </p>
                <a
                  href="https://cookin--up.vercel.app/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            <!-- project 04 -->
            <div class="portfolio-content swiper-slide">
              <img src="" class="portfolio-img" alt="card light/dark mode" />
              <div>
                <h3 class="portfolio-title">Jogo Advinha Número - Voz</h3>
                <p class="portfolio-description">
                  Um jogo onde você tem que advinhar um número secreto através de sua voz.
                </p>
                <a
                  href="https://jogo-numero-secreto-voz-three.vercel.app/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View
                  <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>

            <!-- project 05 -->
            <div class="portfolio-content swiper-slide">
              <img src="" class="portfolio-img" alt="card light/dark mode" />
              <div>
                <h3 class="portfolio-title">Cafeteria - Landing Page</h3>
                <p class="portfolio-description">
                  Uma landing page de uma cafeteria moderna.
                </p>
                <a
                  href="https://matheusmalena.github.io/landing-page_cafeteria/"
                  target="_blank"
                  class="portfolio-button"
                >
                  View <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
              </div>
            </div>
          </div>

          <div class="swiper-button-next">
            <!-- <i class="uil uil-angle-right-b swiper-portfolio-icon"></i> -->
          </div>
          <div class="swiper-button-prev">
            <!-- <i class="uil uil-angle-left-b swiper-portfolio-icon"></i> -->
          </div>
        </div>
      </div>
    </section>

    <section class="instagram-feed" id="instagram-feed"></section>
    <div class="spinner-border text-primary" role="status" id="loading-spinner">
      <span class="sr-only">Loading...</span>
    </div>
    <button class="load-more" id="load-more">Carregar Mais</button>

    <!--- CONTACT SECTION --->
    <section
      class="contact section"
      id="contact"
      aria-label="uma seção falando se interessou com o meu trabalho, entrar em contato."
    >
      <div class="max-width">
        <div class="contact-content">
          <div class="column left content-maps" data-aos="fade-down">
            <div class="text">Se Interessou?</div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29085.63039976201!2d-47.03874462568358!3d-24.3219648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d02674d0188d1b%3A0x1cce5688ad766a40!2sCentro%20Educacional%20%C3%81rvore%20da%20Vida%20-%20Peru%C3%ADbe!5e0!3m2!1spt-BR!2sbr!4v1720744547478!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="column right" data-aos="fade-up">
            <div class="form-right">
              <h2>Fale conosco</h2>
              <div class="d-flex flex-row gap-2">
                <a
                  href="https://pt-br.facebook.com/arvoredavidaperuibe"
                  class="icons-forms icon-facebook"
                  ><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                <a
                  href="https://www.instagram.com/arvoredavidaperuibe/"
                  class="icons-forms icon-instagram"
                  ><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="https://wa.me/5511972216682" class="icons-forms icon-whatsapp"
                  ><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
                  <font-awesome-icon :icon="['fas', 'phone']" />
                <div class="d-flex flex-row">
                  <div class="d-flex justify-content-center align-items-center"></div>
                  <div class="d-flex flex-column m-2 content-tell">
                    <p>Telefone</p>
                    <span>(13) 3453-4922</span>
                  </div>
                </div>
              </div>
            </div>

            <form
              action="https://formsubmit.co/arvoredavidaperuibe@gmail.com"
              method="POST"
              class="input-area"
            >
              <div class="fields">
                <div class="field">
                  <input type="text" name="nome" placeholder="Nome" required />
                </div>
                <div class="field number">
                  <input type="tel" name="numero" placeholder="Número" required />
                </div>
              </div>
              <div class="field email">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div class="field">
                <input type="text" name="assunto" placeholder="Assunto" required />
              </div>
              <div class="textarea">
                <textarea
                  cols="30"
                  rows="10"
                  name="mensagem"
                  placeholder="Mensagem (Opcional)"
                  required
                ></textarea>
              </div>
              <div class="button">
                <button type="submit">Enviar <font-awesome-icon :icon="['fas', 'envelope']" /></button>
              </div>
              <input type="hidden" name="_subject" value="New submission!" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import { Autoplay } from 'swiper';

  export default {
    name: "PaginaInicial",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
  };
</script>

<style scoped>
/* Estilos opcionais para o componente Vue */
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: auto;
}
</style>