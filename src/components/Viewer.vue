<!-- src/components/Viewer.vue -->
<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import {Viewer} from '../types/Viewer.ts';
import type {CameraView} from "../services/camera/CameraView.ts";

// Ссылка на DOM-элемент <div>
const containerRef = ref<HTMLElement | null>(null);

// Храним инстанс мира, но НЕ делаем его реактивным
let viewer: Viewer | null = null;

const loadJsonFile = (file: File) => {
  if (viewer) {
    viewer.loadJsonFile(file);
  }
};

const setMainCamera = (isMainPerspective: boolean) => {
  if (viewer) {
    viewer.setMainCamera(isMainPerspective);
  }
};

const setCameraView = (cameraView: CameraView) => {
  if (viewer) {
    viewer.setCameraView(cameraView);
  }
};

defineExpose({
  loadJsonFile,
  setMainCamera,
  setCameraView
});

onMounted(() => {
  if (containerRef.value) {
    // Инициализируем Three.js, передавая ему div
    viewer = new Viewer(containerRef.value);
  }
});

onUnmounted(() => {
  // Важно: очистка памяти при переходе на другую страницу
  if (viewer) {
    viewer.dispose();
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