<template>
  <header>
    <Menu />
  </header>
  <main>
    <section>

</section>
  
    <slot />
  </main>
</template>
<style>
.dark {
  background-color: #262626;
  color: #f5f5f5;
}
.title {
  text-align: center;
  font-size: x-large;
}
section{
    background-image: url("../assets/img/casadeempeño.jpeg");
    background-repeat: repeat;
    height:50%;
    width: 100%;
    background-position:center;
    background-size: cover;
   background-attachment: fixed;
}
</style>
