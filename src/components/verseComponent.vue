<template>
    <section
      class="verse section"
      id="verse"
    >
      <div class="max-width card-verse" data-aos="fade-down">
        <div class="verse-01">
          <h2 class="title">"E conhecereis a verdade, e a
            verdade vos libertará."</h2>
            <span>João 8:32 </span>
        </div>
        <div>
            <img src="../assets/logo-mkz-red.png" alt="">
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
    }
    .card-verse {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .verse-01{
      display: flex;
      flex-direction: column;
      width: 70%;
      align-items: center;
    }

    .verse-01 span{
      width: 100px;
      text-align: center;
      color: white;
      background-color: #cb0a1a;
      font-weight: 800;
    }

    .card-verse img {
      width: 250px;
      height: auto;
    }
  </style>