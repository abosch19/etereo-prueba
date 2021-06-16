<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <span>Vue {{ a }}</span>
  <PhoneList />
  <ul>
    <li v-for="(phone, key) in phones" :key="key">
      {{ phone.title }}
    </li>
  </ul>
</template>

<script>
import PhoneList from './components/PhoneList.vue'
// import { fetchPhonesCatalog } from './services/api.js'

export default {
  name: 'App',
  components: {
    PhoneList
  },
  data() {
    return {
      a: 1
    }
  }
  // async setup() {
  //   let phones = []
  //   // await fetchPhonesCatalog().then(result => phones = result.data)
  //   return {
  //     phones
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
