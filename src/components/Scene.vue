<!-- src/components/Scene.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { SceneBuilder } from '../types/SceneBuilder';

// Ссылка на DOM-элемент <div>
const containerRef = ref<HTMLElement | null>(null);

// Храним инстанс мира, но НЕ делаем его реактивным
let sceneBuilder: SceneBuilder | null = null;

// Expose method to load file from parent component
const loadJsonFile = (file: File) => {
  if (sceneBuilder) {
    sceneBuilder.loadJsonFile(file);
  }
};

// Expose method to parent component
defineExpose({
  loadJsonFile
});

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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}
</style>