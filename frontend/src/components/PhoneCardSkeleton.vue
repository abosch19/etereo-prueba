<template>
  <div class="container">
    <span class="skeleton-loader image"></span>
    <span class="skeleton-loader title"></span>
    <span class="skeleton-loader description"></span>
  </div>
</template>
<style scoped>
.skeleton-loader {
  width: 100%;
  border-radius: 5px;
  display: block;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
}
@keyframes shine {
  to {
    background-position: 100% 0, /* move highlight to right */ 0 0;
  }
}
.container {
  width: 200px;
  padding: 10px;
}

.image {
  width: 100%;
  height: 200px;
}

.description {
  width: 100%;
  height: 50px;
  margin-top: 5px;
}

.title {
  height: 20px;
  margin-top: 10px;
  border-radius: 4px;
}
</style>