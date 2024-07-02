<template>
  <section class="card-matriculas">
    <div class="d-flex flex-column justify-content-center align-items-center w-50">
        <h2>Matrículas Abertas</h2>
        <p>Sua criança brilha no seu próprio aprendizado, com o apoio de professores que facilitam uma jornada sem limites. Juntos, vamos explorar, descobrir e crescer!</p>
        <a href="https://wa.me/5511972216682" class="botao-matricula">
            <span><font-awesome-icon :icon="['fab', 'whatsapp']" class="icone-whatsapp"/></span> Matricule seu filho</a>
    </div>
    <div class="div-imagem w-25">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/foto01.jpg" class="d-block w-50" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../assets/foto-2.jpg" class="d-block w-50" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../assets/foto03.jpg" class="d-block w-50" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PaginaInicial",
};
</script>

<style scoped>

.card-matriculas{
    display: flex;
    flex-direction: row;
}

.card-matriculas h2 {
    color: var(--laranja);
    font-family: "Baloo 2", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 3rem;
    letter-spacing: 0px;
}

.botao-matricula{
    width: 200px;
    font-size: 14px;
    text-decoration: none;
    padding: 0.8rem;
    border: 1px solid var(--verde-escuro);
    border-radius: 6rem;
    background-color: var(--verde-escuro);
    color: var(--branco);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.icone-whatsapp{
    font-size: 20px;
}

.div-imagem{
    width: 100%;
}
</style>
