<template>
  <div class="cards-section">
    <Card class="card" title="Market" imgUrl="/src/assets/icons/shop.svg">
      <div class="info-card">
        <div class="setcion-infos">
          <div class="icon" v-for="item in store.avaliable" :key="item">
            <figure>
              <img src="../../assets/icons/pinia.svg" alt="pinia" />
            </figure>
          </div>
        </div>

        <div class="footer-card f-market">
          <input type="number" v-model="amountToCart" />
          <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </Card>

    <Card class="card" title="Your Cart" imgUrl="/src/assets/icons/cart.svg">
      <div class="info-card">
        <div class="setcion-infos">
          <div class="icon" v-for="item in store.cart" :key="item">
            <figure>
              <img src="../../assets/icons/pinia.svg" alt="pinia" />
            </figure>
          </div>
        </div>

        <div class="footer-card">
          <div class="footer-card f-market">
            <input type="number" v-model="valueRemove" />
            <button @click="removeFromCard">Remove</button>
          </div>
        </div>
      </div>
    </Card>

    <Card class="card" title="Checkout" imgUrl="/src/assets/icons/money.svg">
      <div class="info-card">
        <div class="setcion-infos checkout-sec">
          <div class="icon">
            <figure>
              <img src="../../assets/icons/pinia.svg" alt="pinia" />
              <span class="amount-in-cart">x{{store.cart}}</span>
            </figure>
          </div>
          <div class="total">
              <span>
                  Total: R$ {{store.cart * store.price}}
              </span>
          </div>
        </div>

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
import { ref } from "vue";
import { shopStore } from "../../store/shopStore";
import Card from "../molecules/Card.vue";

const store = shopStore();
const amountToCart = ref(0);
const valueRemove = ref(0);

const removeFromCard = () => {
  store.removeFromCard(valueRemove.value);
};
const addToCart = () => {
  store.addToCart(amountToCart.value);
};
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
.checkout {
  justify-content: flex-end;
}

.setcion-infos {
  height: 90%;
  background: rgb(250, 250, 250);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.icon {
}
.icon .amount-in-cart{
    border: 1px solid;
    padding: .2rem .4rem;
    font-size: .6em;
    border-radius: 10px;
    background: #74A2F7;
    color: white;
}
.icon figure {
  width: 35px;
  height: 35px;
}
.icon figure img {
  width: 100%;
  height: 100%;
}
.checkout-sec{
    flex-direction: column;
    gap: 1rem;
}
.checkout-sec .icon figure{
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>