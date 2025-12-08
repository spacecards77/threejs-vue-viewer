<script setup lang="ts">
import { ref } from 'vue';
import Scene from './components/Scene.vue';
import openIcon from './assets/openJson.png';

const sceneRef = ref<InstanceType<typeof Scene> | null>(null);

// Убирание варнинга
const openIconUrl: string = openIcon;

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file && sceneRef.value) {
    // Pass the file to the Scene component
    sceneRef.value.loadJsonFile(file);
  }

  // Reset input so the same file can be selected again
  if (target) {
    target.value = '';
  }
};
</script>

<template>
  <div class="app-container">
    <!-- 3D сцена на всю страницу -->
    <Scene ref="sceneRef" />

    <!-- Панель инструментов поверх сцены -->
    <div class="toolbar">
      <label class="toolbar-button" title="Открыть json">
        <img :src="openIconUrl" alt="Open" class="toolbar-icon" />
        <input
          type="file"
          accept=".json"
          style="display: none"
          @change="handleFileChange"
        />
      </label>
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
  margin: 0;
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