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
    .verse h2{
        margin: 0 !important;
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
    }

    .verse-01 span{
      text-align: center;
      color: rgb(245, 44, 44);
      font-weight: 800;
    }

    .card-verse img {
      width: 250px;
      height: auto;
    }
  </style>