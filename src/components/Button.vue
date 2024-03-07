<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: 'Кнопка',
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    className: {
      type: String,
      default: 'w-443 bg-yellow color-white'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loader: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <button :type="type" class="btn" :class="className" :disabled="disabled">
    <slot v-if="loader" name="loader"></slot>
    <span v-else>{{ title }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  text-align: center;
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  padding: 16px 20px;
  transition: .3s all ease;
  &:hover {
    filter: drop-shadow(0px 5px 7px rgba(37, 37, 37, 0.15));
  }
}
</style>