<script setup lang="ts">
import Scene from './components/Scene.vue';
import openIcon from './assets/open.png';

const handleOpenFile = () => {
  alert('Открыть файл json');
};
</script>

<template>
  <div class="app-container">
    <!-- 3D сцена на всю страницу -->
    <Scene />

    <!-- Панель инструментов поверх сцены -->
    <div class="toolbar">
      <button
        class="toolbar-button"
        @click="handleOpenFile"
        title="Открыть json"
      >
        <img :src="openIcon" alt="Open" class="toolbar-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.toolbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #E5EAF3;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toolbar-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.toolbar-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.toolbar-icon {
  width: 24px;
  height: 24px;
  display: block;
}
</style>