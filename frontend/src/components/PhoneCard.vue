<template>
  <div class="container" @click="onSelected">
    <img :src="phone.image" />
    <div class="info">
      <span class="badge">Envío gratis</span>
      <p class="description">{{ phone.description }}</p>
      <p class="price">{{ price }}</p>
      <p class="shipping">Recíbelo mañana</p>
      <transition name="fade">
        <PhoneInfo v-if="selected" :phone="phone" />
      </transition>
    </div>
  </div>
</template>
<script>
import { formatPrice } from "../utils";
import PhoneInfo from "./PhoneInfo.vue";
export default {
  data() {
    return {
      selected: false,
    };
  },
  components: {
    PhoneInfo,
  },
  props: {
    phone: {
      image: String,
      description: String,
      price: Number,
      color: String,
      colorLabel: String,
      brand: String,
    },
  },
  computed: {
    price() {
      return formatPrice(this.phone.price);
    },
  },
  methods: {
    onSelected() {
      this.selected = !this.selected;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 10px;
  margin: 10px 5px;
  cursor: pointer;
}
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.info {
  display: flex;
  width: 100%;
  margin: -20px 0;
  flex-direction: column;
  align-items: flex-start;
}
.badge {
  border-radius: 5px;
  background-color: white;
  border: 1px solid green;
  padding: 2px 5px;
  color: green;
}
.description {
  margin-bottom: 0px;
  text-align: left;
}
.price {
  font-weight: bold;
  margin: 5px 0px;
}
.shipping {
  color: green;
  margin: 0px;
  font-size: 14px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
