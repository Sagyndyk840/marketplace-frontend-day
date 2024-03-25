<script>
import ProductItem from "@/components/ProductItem.vue";
import {useFavoriteStore} from "@/stores/favotire.js";

export default {
  name: "FavoritePage",
  components: {ProductItem},
  setup () {
    const favoriteStore = useFavoriteStore()

    return {favoriteStore}
  }
}
</script>

<template>
  <div class="favorite">
    <div class="container">
      <h2 class="title favorite-title">Избранное</h2>
      <div class="favorite-inner">
        <ProductItem v-for="product in favoriteStore.favorites"
                     :key="product.id"
                     :img="product.image"
                     :title="product.title"
                     :price="product.price"
                     :router="{name: 'ProductPage', params: {id: product.id}}"
                     :sizes="product.size"
                     :colors="product.color"
                     @favorite="favoriteStore.toggleFavorite(product)"
                     :favorite-active="favoriteStore.isFavorite(product)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.favorite {
  margin-top: 140px;
  &-title {
    margin-bottom: 30px;
  }
  &-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
}
</style>