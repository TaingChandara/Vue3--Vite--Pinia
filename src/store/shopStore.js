import { defineStore, acceptHMRUpdate } from 'pinia'

export const shopStore = defineStore('market', {
    state: () => {
        return {
            market: 24,
            cart: 0
        }
    },
    getters:{
        avaliable(state){
            return state.market - state.cart
        }
    },
    actions:{
        addToCart(item){
            this.cart += item
            
        },
        removeFromCard(item){
            if(item > this.cart){
                this.cart = 0
            }else{
             this.cart -= item   
            }
        }
    }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(shopStore, import.meta.hot))
}