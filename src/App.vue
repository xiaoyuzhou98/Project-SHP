<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- Home search 显示  login register隐藏-->
    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style></style>
