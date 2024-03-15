<script>
import Button from "@/components/Button.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Input from "@/components/Input.vue";

export default {
  name: "RegisterPage",
  components: {Button, ClipLoader, Input},
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods: {
    async register () {
      this.v$.$validate()
      
      if (this.v$.$error) return
    }
  },
  validations () {
    return {
      form: {
        name: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        email: {
          email : helpers.withMessage('Вы ввели неверный email', email),
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        password: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true,
          minLength: helpers.withMessage(`Минимальная длина: 8 символа`, minLength(8))
        },
        password_confirmation: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true,
          minLength: helpers.withMessage(`Минимальная длина: 8 символа`, minLength(8)),
          sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(this.form.password))
        }
      }
    }
  }
}
</script>

<template>
  <section class="auth">
    <div class="auth-image">
      <img src="@png/login.png" alt="">
    </div>
    <div class="auth-right">
      <div class="auth-card w-443">
        <h2 class="title auth-title">Регистрация</h2>
        <Input :disabled="false" type="text"  placeholder="Ваш фио*" v-model:value="form.name" :errors="v$.form.name.$errors"/>
        <Input :disabled="false" type="text"  placeholder="Ваш e-mail*" v-model:value="form.email" :errors="v$.form.email.$errors"/>
        <Input :disabled="false" type="password"  placeholder="Ваш пароль*" v-model:value="form.password" :errors="v$.form.password.$errors"/>
        <Input :disabled="false" type="password"  placeholder="Подтвердить пароль*" v-model:value="form.password_confirmation" :errors="v$.form.password_confirmation.$errors"/>
        <div class="auth-inner">
          <router-link :to="{name: 'HomePage'}">Главная</router-link>
          <router-link :to="{name: 'LoginPage'}">Есть аккаунт?</router-link>
        </div>
        <Button @click="register" title="ЗАРЕГИСТРИРОВАТЬСЯ" :loader="false">
          <template v-slot:loader>
            <clip-loader :loading="false" color="white"></clip-loader>
          </template>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>