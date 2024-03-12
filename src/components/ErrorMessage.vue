<script>
export default {
  name: "ErrorMessage",
  props: {
    errors: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <p class="error-text" v-for="error in errors" :key="error.$uid">
    {{error.$message}}
  </p>
</template>

<style scoped lang="scss">
.error-text {
  color: #FFA4A4 !important;
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 200;
}
</style>