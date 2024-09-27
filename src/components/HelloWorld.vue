<template>
  <h1 class="title">{{ naslov }}</h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['naslov']);
</script>

<style scoped>
.title {
  margin-left: 43vw;
}
</style>
