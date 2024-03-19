<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "DefaultLayout",
  components: {Header, Footer}
}
</script>

<template>
  <Header :global="true"/>
  <router-view></router-view>
  <Footer />
</template>

<style scoped>

</style>