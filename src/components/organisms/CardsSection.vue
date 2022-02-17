<template>
  <div class="cards-section">
    <Card class="card" title="Market" imgUrl="/src/assets/icons/shop.svg">
      <div class="info-card">
        <span>oi</span>

        <div class="footer-card f-market">
          <input type="number" />
          <button>Add to Cart</button>
        </div>
      </div>
    </Card>

    <Card class="card" title="Your Cart" imgUrl="/src/assets/icons/cart.svg">
      <div class="info-card">
        <span>oi</span>

        <div class="footer-card">
          <div class="footer-card f-market">
            <input type="number" />
            <button>Remove</button>
          </div>
        </div>
      </div>
    </Card>

    <Card class="card" title="Checkout" imgUrl="/src/assets/icons/money.svg">
      <div class="info-card">
        <span>oi</span>

        <div class="footer-card">
            <div class="footer-card f-market checkout">
            <button>Proced</button>
          </div>
        </div>
      </div>
    </Card>
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
.card .info-card {
  height: 100%;
  padding: 0.5rem;
  position: relative;
}
.card .info-card .footer-card {
  position: absolute;
  bottom: -5px;
  width: 100%;
  right: 0;
  padding: 0.5rem 0.6rem;
}
.f-market {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.f-market input,
button {
  padding: 0.5rem;
  border-radius: 5px;
}
.f-market button {
  color: white;
  background: #74a2f7;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.f-market button:hover {
  background: #628ee0;
}
.f-market input {
  border: 1px solid #74a2f7;
  outline: none;
}
.checkout{
    justify-content: flex-end;
}
</style>