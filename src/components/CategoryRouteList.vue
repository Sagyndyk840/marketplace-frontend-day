<script>

import {useCategoryStore} from "@/stores/categories.js";
import {useProductStore} from "@/stores/product.js";

export default {
  name: "CategoryRouteList",
  setup () {
    const categoryStore = useCategoryStore()
    const productStore = useProductStore()

    return {categoryStore, productStore}
  },
  mounted() {
    this.categoryStore.getCategories()
  },
  methods: {
    chooseCategory (categoryId) {
      this.productStore.getProducts({
        'categoryId[eq]': categoryId,
      })
    }
  }
}
</script>

<template>
  <h2 class="title catalog-left__title">Каталог</h2>
  <nav>
    <ul>
      <li @click="chooseCategory(category.id)" v-for="category in categoryStore.categories" :key="category.id">
        {{ category.title }}
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
 li {
   cursor: pointer;
 }
</style>