<template>
  <div class="cards-section">
    <Card class="card" title="Market" imgUrl="../../assets/icons/cart.svg" />
    <Card class="card" title="Your Cart" />
    <Card class="card" title="Checkout" />
  </div>
</template>

<script setup>
import Card from "../molecules/Card.vue";
</script>

<style  scoped>
.cards-section {
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.card {
  flex: 0 1 300px;
  height: 100%;
  -webkit-box-shadow: 1px 12px 12px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 1px 12px 12px 0px rgba(0, 0, 0, 0.12);
}
</style>