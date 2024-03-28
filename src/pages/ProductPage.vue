<script>
import Button from "@/components/Button.vue";
import {useProductStore} from "@/stores/product.js";
import {useFavoriteStore} from "@/stores/favotire.js";
import Select from "@/components/Select.vue";
import {useVuelidate} from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";

export default {
  name: "ProductPage",
  components: {Select, Button},
  setup () {
    const productStore = useProductStore()
    const favoriteStore = useFavoriteStore()

    return {productStore, favoriteStore, v$: useVuelidate()}
  },
  data () {
    return {
      form: {
        selectSize: '',
        changeColor: ''
      }
    }
  },
  mounted() {
    this.productStore.getProduct(this.$route.params.id)
  },
  validations () {
    return {
      form: {
        selectSize : {
          required: helpers.withMessage('Пожалуйста, выберите размер товара', required),
          $autoDirty: true
        },
        changeColor: {
          required: helpers.withMessage('Пожалуйста, выберите цвет товара', required),
          $autoDirty: true
        }
      }
    }
  }
}
</script>

<template>
  <section class="single-product">
    <div class="container">
      <div class="single-product__inner">
        <div class="single-product__left">
          <img :src="productStore.product.image" alt="">
        </div>
        <div class="single-product__right">
          <h2 class="single-product__title title">
            {{ productStore.product.title }}
          </h2>
          <div class="single-product__price price">{{ productStore.product.price }} грн</div>
          <div class="colors-radio single-product__colors">
            <input v-for="color in productStore.product.color"
                   :key="color.id"
                   :value="color"
                   type="radio"
                   name="color"
                   class="color-radio single-product__color"
                   :style="{'background-color': color.value}">
          </div>
          <div class="color-title">Цвет: Кофе с молоком меланж</div>
          <Select option-id="id"
                  option-value="value"
                  :options="productStore.product.size"
                  v-model:value="form.selectSize"
                  class-name="single-product__select m-t-10"
                  width="100%"
                  :errors="v$.form.selectSize.$errors"/>

          <div class="single-product__group--btns">
            <Button title="В КОРЗИНУ" class-name="bg-yellow color-white"></Button>
            <Button @click="favoriteStore.toggleFavorite(productStore.product)"
                    :title="favoriteStore.isFavorite(productStore.product) ? 'ТОВАР В ИЗБРАННОЕ' : 'В ИЗБРАННОЕ'"
                    class-name="bg-white color-black"></Button>
          </div>
          <div class="single-product__information">
            <div class="single-product__information--item">
              <div class="single-product__information--title">Подробности</div>
              <div class="single-product__information--content">
                {{ productStore.product.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
.single-product {
  margin-top: 140px;

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  &__left {
    img {
      width: 100%;
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__price {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__colors {
    display: flex;
  }
  &__color {
    height: 20px;
    width: 20px;
    margin: 0 5px 0 0;

    &:last-child {
      margin-right: 0;
    }

  }
  &__color[type="radio"] {
    appearance: none;
    border: 1px solid #2525254c;
    border-radius: 50%;
    transform: translateY(-0.075em);
    place-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-color: #2525254c;
    }

    &:checked::before {
      transform: scale(1);
    }
  }
  .color-title {
    color: #E0BEA2;
    text-align: left;
    font-family: 'Raleway', serif;
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  &__select {
    width: 100%;
  }
  &__group--btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__information {
    &--item {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &--title {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 10px;
    }
    &--content {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 14px;
      font-weight: 200;
    }
  }
}
</style>