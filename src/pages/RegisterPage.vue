<script>
import Button from "@/components/Button.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "RegisterPage",
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
        <h2 class="title auth-title">Регистрация</h2>
        <input type="text" class="input w-443" placeholder="Ваш пароль*"/>
        <input type="text" class="input w-443" placeholder="Подтвердить пароль*"/>
        <div class="auth-inner">
          <router-link :to="{name: 'HomePage'}">Главная</router-link>
          <router-link :to="{name: 'LoginPage'}">Есть аккаунт?</router-link>
        </div>
        <Button title="ЗАРЕГИСТРИРОВАТЬСЯ" :loader="false">
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