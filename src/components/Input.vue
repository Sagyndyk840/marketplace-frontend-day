<script>
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "Input",
  components: {ErrorMessage},
  props: {
    errors: {
      type: Array
    },
    placeholder: {
      type: String,
      default: 'Input'
    },
    type: {
      type: String,
      default: 'text'
    },
    className: {
      type: String,
      default: 'w-443'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<template>
  <div class="component-form">
    <input :type="type" class="input" :class="[className, {'error': errors && errors.length}]" :placeholder="placeholder" :disabled="disabled" @input="updateValue"/>
    <div class="m-b-10">
      <ErrorMessage :errors="errors" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  border: 0.5px solid #252525;
  color: rgba(37, 37, 37, 0.50);
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 200;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 16px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #E0BEA2;
    color: #252525;
  }

  &::placeholder {
    color: rgba(37, 37, 37, 0.50);
  }

}

.error {
  border: 1px solid #FFA4A4 !important;
  color: #FFA4A4 !important;

  &::placeholder {
    color: #FFA4A4;
  }

}
</style>