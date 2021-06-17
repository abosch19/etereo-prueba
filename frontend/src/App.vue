<template>
  <div>
    <Navbar />
    <PhoneList />
  </div>
</template>

<script>
import PhoneList from "./components/PhoneList.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    PhoneList,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
