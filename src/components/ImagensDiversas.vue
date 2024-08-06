<template>
    <div>
      <p>
        <img src="../assets/image1.png" width="800" height="400">
      </p>
      <section id="imagens_baixo">
        <img src="../assets/image2.png" width="400" height="200" class="pequenas">
        <img src="../assets/image2.png" width="400" height="200" class="pequenas">
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImagensDiversas'
  }
  </script>
  


<style>

#imagens_baixo{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

img{
    margin: 5px;
}

#imagen_cima{
    display: flex;
  justify-content: center;
}


@media (max-width: 800px){
    #imagens_baixo{
        display: flex;
        flex-direction: column;
    }

    .pequenas{
        width: 400px;
    }
}


</style>