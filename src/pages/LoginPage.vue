<script>
import Button from "@/components/Button.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
export default {
  name: "LoginPage",
  components: {Button, ClipLoader}
}
</script>

<template>
  <section class="auth">
    <div class="auth-image">
      <img src="@png/login.png" alt="">
    </div>
    <div class="auth-right">
      <div class="auth-card w-443">
        <h2 class="title auth-title">Авторизация</h2>
        <input type="text" class="input w-443" placeholder="Ваш e-mail*" />
        <input type="text" class="input w-443" placeholder="Ваш пароль*"/>
        <div class="auth-inner">
          <router-link :to="{name: 'HomePage'}">Главная</router-link>
          <router-link :to="{name: 'RegisterPage'}">Нет аккаунта?</router-link>
        </div>
        <Button title="Войти" >
          <template v-slot:loader>
            <clip-loader :loading="true" color="white"></clip-loader>
          </template>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>