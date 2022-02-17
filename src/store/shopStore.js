import { defineStore } from 'pinia'

export const shopStore = defineStore('market', {
    state: () => {
        return {
            market: 24,
            cart: 0
        }
    }

})