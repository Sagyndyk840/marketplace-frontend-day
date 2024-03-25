import {defineStore} from "pinia";

export const useFavoriteStore = defineStore({
  id: 'favorite',
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) ?? []
  }),
  getters: {
      isFavorite (state) {
          return (product) => this.favorites.some((p) => p.id === product.id)
      }
  },
  actions: {
      toggleFavorite (product) {
          const index = this.favorites.findIndex((p) => p.id === product.id)

          if (index === -1) {
              this.favorites.push(product)

          } else {
              this.favorites.splice(index, 1)
          }

          localStorage.setItem('favorites', JSON.stringify(this.favorites))

      }
  }
})