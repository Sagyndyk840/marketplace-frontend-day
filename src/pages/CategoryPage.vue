<script>
import CategoryRouteList from "@/components/CategoryRouteList.vue";
import ProductItem from "@/components/ProductItem.vue";
import {useProductStore} from "@/stores/product.js";
import Skeleton from "@/components/Skeleton.vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";

export default {
  name: "CategoryPage",
  components: {VueAwesomePaginate, Skeleton, ProductItem, CategoryRouteList},
  setup () {
    const productStore = useProductStore()

    return {productStore}
  },
  mounted() {
    this.productStore.getProducts({
      'page': 1
    })
  },
  methods: {
    async paginate () {
      await this.productStore.getProducts({
        'page': this.productStore.currentPaginate
      })
    }
  }
}
</script>

<template>
  <section class="catalog-page">
    <div class="container">
      <div class="catalog-inner">
        <div class="catalog-left">
          <CategoryRouteList />
        </div>
        <div class="catalog-right">
          <div class="filter"></div>
          <div class="catalog-products" v-if="productStore.loading">
            <skeleton height="340px" class="catalog-item" v-for="index in 9" :key="index" />
          </div>
          <div class="catalog-products" v-else>
            <ProductItem
                v-for="product in productStore.products"
                :key="product.id"
                :img="product.image"
                :title="product.title"
                :price="product.price"
                :favorite-active="false"
                :sizes="product.size"
                :colors="product.color"
                :router="{name: 'CategoryPage'}"
            />
          </div>
          <vue-awesome-paginate v-model="productStore.currentPaginate"
                                :total-items="productStore.pagination.total"
                                :max-pages-shown="2"
                                :on-click="paginate"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.catalog-page {
  margin-top: 140px;

  .catalog-inner {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 30px;
  }

  .catalog-left {

    &__title {
      margin-bottom: 30px;
    }
    nav {
      ul {
        li {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            color: #252525;
            font-family: "Raleway", serif;
            font-size: 16px;
            font-weight: 300;
            transition: .3s all ease;
            &:hover {
              color: #CCA88A;
            }
          }
        }
      }
    }
  }

  .catalog-products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }

}
</style>