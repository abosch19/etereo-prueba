<template>
  <ul v-if="$store.state.phones.length > 0">
    <li v-for="phone in $store.state.phones" :key="phone.title">
      <PhoneCard :phone="phone" />
    </li>
  </ul>
  <ul v-else>
    <li v-for="n in 30" :key="n">
      <PhoneCardSkeleton />
    </li>
  </ul>
</template>
<script>
import { useStore } from "vuex";
import PhoneCard from "./PhoneCard.vue";
import PhoneCardSkeleton from "./PhoneCardSkeleton.vue";
import { FETCH_PHONES_CATALOG } from "../store/mutations";

export default {
  setup() {
    const store = useStore();
    store.commit(FETCH_PHONES_CATALOG);
  },
  components: {
    PhoneCard,
    PhoneCardSkeleton,
  },
};
</script>
<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  padding: 0;
}
li {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>