<template>
    <div class="card">
        <div class="header-card">
            <figure>
                <img :src="imgUrl" alt="">
            </figure>
            <div class="title-card">
                <span>
                    {{title}}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title:{type: String, default: 'Sem titulo'},
    imgUrl: {type: String, default: ''}
})
 
</script>

<style scoped>
.card{
    border-radius: 10px;
}
.header-card{
    padding: .5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.header-card .title-card span{
    font-weight: 500;
}
figure{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
      -webkit-box-shadow: 1px 12px 12px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 1px 12px 12px 0px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  padding: .5rem;
}
figure img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
