<template>
    <section
      class="verse section"
      id="verse"
    >
      <div class="max-width card-verse" data-aos="fade-down">
        <div class="verse-01">
          <h2 class="">"E conhecereis a verdade, e a
            verdade vos libertará."</h2>
            <span class="versicule">João 8:32 </span>
        </div>
        <div class="verse-02">
            <img src="../assets/logo-mkz-oficial.png" alt="">
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'verseComponent',
  };
  </script>
  
  <style>

    .verse {
      background-color: var(--color-black);
    }

    .verse h2{
        margin: 0 !important;
        color: white;
        font-size: 50px;
        font-family: var(--baloo);
        font-weight: 800;
    }
    .card-verse {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }

    .verse-01{
      display: flex;
      flex-direction: column;
      width: 70%;
      align-items: center;
      gap: 1rem;
    }

    .verse-01 .versicule{
      width: 100px;
      text-align: center;
      color: white;
      background-color: #cb0a1a;
      font-weight: 800;
    }

    .verse-02 {
      width: 30%;
    }

    .verse-02 img {
      width: 90%;
      height: auto;
    }
  </style>