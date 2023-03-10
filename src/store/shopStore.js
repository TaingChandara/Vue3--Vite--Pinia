import { defineStore, acceptHMRUpdate } from 'pinia'

export const shopStore = defineStore('market', {
    state: () => {
        return {
            market: 30,
            cart: 0,
            price: 1.25,
            pricekhr: 5.2004
        }
    },
    getters: {
        avaliable(state) {
            return state.market - state.cart
        }
    },
    actions: {
        addToCart(valueToAdd) {
            if (this.market > 0) {
                if (valueToAdd > this.avaliable) {
                    this.cart = this.market

                } else {
                    this.cart += valueToAdd
                    this.market - valueToAdd
                }
            }
        },
        removeFromCard(item) {
            if (item && this.cart > 0) {
                if (item > this.cart) {

                    this.cart = 0
                    this.market += this.cart
                } else {

                    this.cart -= item
                    this.market + item
                }
            }
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(shopStore, import.meta.hot))
}
