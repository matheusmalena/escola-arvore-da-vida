<template>
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
                  <input type="tel" name="numero" placeholder="Telefone" required />
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
</template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'emailComponent',
  };
  </script>
  
  <style>
 
  </style>