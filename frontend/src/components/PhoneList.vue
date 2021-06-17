<template>
  <Loader v-if="$store.state.phones.length === 0" />
  <ul v-else>
    <li v-for="phone in $store.state.phones" :key="phone.title">
      <PhoneCard :phone="phone" />
    </li>
  </ul>
</template>
<script>
import { useStore } from "vuex";
import PhoneCard from "./PhoneCard.vue";
import Loader from "./Loader.vue";
import { FETCH_PHONES_CATALOG } from "../store/mutations";

export default {
  setup() {
    const store = useStore();
    store.commit(FETCH_PHONES_CATALOG);
  },
  components: {
    PhoneCard,
    Loader,
  },
};
</script>
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
li {
  list-style-type: none;
}
</style>