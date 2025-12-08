<script setup lang="ts">
import Scene from './components/Scene.vue';
import { ref } from 'vue';

const score = ref(0);
</script>

<template>
  <div class="app-container">
    <!-- Ваша 3D сцена на фоне -->
    <Scene />

    <div class="ui-layer">
      <h1>Очки: {{ score }}</h1>
      <button @click="score++">Нажми меня</button>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.ui-layer {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10; /* Интерфейс поверх канваса */
  color: white;
  pointer-events: none; /* Позволяет взаимодействовать с 3D сценой через UI */
}

.ui-layer > * {
  pointer-events: auto; /* Восстанавливаем взаимодействие для элементов UI */
}
</style>