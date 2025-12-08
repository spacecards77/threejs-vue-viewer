<!-- src/components/Scene.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { SceneBuilder } from '../types/SceneBuilder';

// Ссылка на DOM-элемент <div>
const containerRef = ref<HTMLElement | null>(null);

// Храним инстанс мира, но НЕ делаем его реактивным (просто let или shallowRef)
let sceneBuilder: SceneBuilder | null = null;

onMounted(() => {
  if (containerRef.value) {
    // Инициализируем Three.js, передавая ему div
    sceneBuilder = new SceneBuilder(containerRef.value);
  }
});

onUnmounted(() => {
  // Важно: очистка памяти при переходе на другую страницу
  if (sceneBuilder) {
    sceneBuilder.dispose();
  }
});
</script>

<template>
  <!-- Vue управляет только этим дивом -->
  <div ref="containerRef" class="canvas-container"></div>
</template>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>