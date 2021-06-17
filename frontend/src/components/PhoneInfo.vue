<template>
  <div class="info-container">
    <div class="color-row">
      <p>Color: {{ phone.colorLabel }}</p>
      <span class="color" :style="{ backgroundColor: phone.color }" />
    </div>
    <p>Marca: {{ phone.brand }}</p>
    <button @click.stop="buy" :disabled="bought">
      {{ bought ? "Comprado" : "Comprar" }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bought: false,
    };
  },
  props: {
    phone: {
      color: String,
      colorLabel: String,
      brand: String,
      description: String,
    },
  },
  methods: {
    buy() {
      this.bought = true;
      alert(`${this.phone.description} comprado!`);
    },
  },
};
</script>
<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
}
p {
  margin: 0;
  text-align: left;
}
.color-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.color {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  margin-left: 5px;
}
button {
  width: 100%;
  margin-top: 10px;
  background-color: #ff6000;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  user-select: none;
  padding: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #b84a06;
}
button:disabled {
  background-color: #b84a06;
  cursor: not-allowed;
}
</style>