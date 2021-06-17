<template>
  <h1>Loading...</h1>
  <content-loader v-if="!myData" :speed="2" :animate="true"></content-loader>
</template>