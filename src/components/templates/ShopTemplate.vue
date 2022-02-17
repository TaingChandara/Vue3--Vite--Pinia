<template>
  <section class="shop-template">
    <header>
      <NavBar />
    </header>

    <CardsSection class="card-section" />
  </section>
</template>

<script setup>
import NavBar from "../organisms/NavBar.vue";
import CardsSection from "../organisms/CardsSection.vue";
</script>

<style  scoped>
.shop-template {
  width: 100%;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
header {
     margin-top: 2rem;
  width: 100%;
  height: 55px;
  border-radius: 15px;
  -webkit-box-shadow: 1px 12px 12px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 1px 12px 12px 0px rgba(0, 0, 0, 0.12);
}
.card-section{
    margin-top: 2rem;
}
</style>