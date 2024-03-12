<script>
import Button from "@/components/Button.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import Input from "@/components/Input.vue";
import {email, helpers, required, minLength} from '@vuelidate/validators'
import useVuelidate from "@vuelidate/core";

export default {
  name: "LoginPage",
  setup () {
    return {v$: useVuelidate() }
  },
  data () {
    return {
        form: {
          email: '',
          password: ''
        }
    }
  },
  validations () {
    return {
      form: {
        email: {
          email: helpers.withMessage('Вы ввели неверный email', email),
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        password: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true,
          minLength: helpers.withMessage('Минимальная длина: 6 символа', minLength(6))
        }
      }
    }
  },
  methods: {
    login () {
      this.v$.$validate()

      if (this.v$.$error) return
    }
  },
  components: {Input, Button, ClipLoader}
}
</script>

<template>
  <section class="auth">
    <div class="auth-image">
      <img src="@png/login.png" alt="">
    </div>
    <div class="auth-right">
      <div class="auth-card w-443">
        <h2 class="title auth-title">Авторизация </h2>
        <Input :errors="v$.form.email.$errors" v-model:value="form.email" placeholder="Ваш e-mail*" type="text" :disabled="false" />
        <Input :errors="v$.form.password.$errors" v-model:value="form.password" placeholder="Ваш пароль*" type="password" :disabled="false"/>
        <div class="auth-inner">
          <router-link :to="{name: 'HomePage'}">Главная</router-link>
          <router-link :to="{name: 'RegisterPage'}">Нет аккаунта?</router-link>
        </div>
        <Button title="Войти" :loader="false">
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