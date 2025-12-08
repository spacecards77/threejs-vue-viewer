<script setup lang="ts">
import Scene from './components/Scene.vue';
import { ref } from 'vue';

const score = ref(0);
</script>

<template>
  <div class="app-container">
    <div class="ui-layer">
      <h1>Очки: {{ score }}</h1>
      <button @click="score++">Нажми меня</button>
    </div>

    <!-- Ваша 3D сцена на фоне -->
    <Scene />
  </div>
</template>

<style>
.app-container { position: relative; }
.ui-layer {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10; /* Интерфейс поверх канваса */
  color: white;
}
</style>