<template>
  <div class="container">
    <img :src="phone.image" />
    <div class="info">
      <span class="badge">Envío gratis</span>
      <p class="description">{{ phone.description }}</p>
      <p class="price">{{ phone.price }} €</p>
      <p class="shipping">Recíbelo mañana</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    phone: {
      title: String,
      image: String,
      description: String,
      price: Number,
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
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
</style>
