<template>
    <div>
      <h2 id="titulo">As Paisagens</h2>
      <p>{{ msg }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextoPrincipal',
    props: {
      msg: String
    }
  }
  </script>


<style>

#titulo {
    display: flex;
    justify-content: center;
    size: 65px;
}

</style>