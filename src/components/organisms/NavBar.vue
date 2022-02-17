<template>
  <nav>
    <div class="avaliables">
      <span class="title">Avaliable</span>
      <span class="value-avaliables">55</span>
    </div>
    <div class="shop-cart">
      <figure class="img-cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-shopping-cart"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>

        <span class="value-in-cart">55</span>
      </figure>
      
    </div>
  </nav>
</template>


<style  scoped>
nav{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .4rem;
    padding: 0 1.5rem;
}
.avaliables{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}
.avaliables span{
    display: block;
}
.avaliables .title{
    font-weight: 600;
}
.avaliables .value-avaliables{
    font-weight: 500;
    border-radius: 20px;
    padding: .1rem.5rem;
    font-size: .7em;
    color: white;
    background: #74A2F7;
}
.shop-cart{
display: flex;
align-items: center;
justify-content: center;
}
.shop-cart .img-cart{
    width: 22px;
    height: 22px;
    position: relative;
}
.img-cart .icon{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.value-in-cart{
    position: absolute;
    top: -11px;
    font-size: .8em;
    padding: .2rem;
    border-radius: 50%;
     color: white;
    background: #74A2F7;
    font-weight: 500;
}
</style>