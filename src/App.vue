<script setup lang="ts">
import {ref} from 'vue';
import Viewer from './components/Viewer.vue';
import openIcon from './assets/openJson.png';
import perspectiveIcon from './assets/perspectiveView.png';
import viewInIsometricIcon from './assets/viewInIsometric.png';
import viewInXDirectionIcon from './assets/viewInXDirection.png';
import viewInYDirectionIcon from './assets/viewInYDirection.png';
import viewInZDirectionIcon from './assets/viewInZDirection.png';
import viewInReverseXDirectionIcon from './assets/viewInReverseXDirection.png';
import viewInReverseYDirectionIcon from './assets/viewInReverseYDirection.png';
import viewInReverseZDirectionIcon from './assets/viewInReverseZDirection.png';
import {CameraView} from './services/camera/CameraView.ts';

const sceneRef = ref<InstanceType<typeof Viewer> | null>(null);
const isPerspectiveView = ref(false);

// Убирание варнинга
const openIconUrl: string = openIcon;
const perspectiveIconUrl: string = perspectiveIcon;
const viewInIsometricIconUrl: string = viewInIsometricIcon;
const viewInXDirectionUrl: string = viewInXDirectionIcon;
const viewInYDirectionUrl: string = viewInYDirectionIcon;
const viewInZDirectionUrl: string = viewInZDirectionIcon;
const viewInReverseXDirectionUrl: string = viewInReverseXDirectionIcon;
const viewInReverseYDirectionUrl: string = viewInReverseYDirectionIcon;
const viewInReverseZDirectionUrl: string = viewInReverseZDirectionIcon;

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file && sceneRef.value) {
    // Pass the file to the Viewer component
    sceneRef.value.loadJsonFile(file);
  }

  // Reset input so the same file can be selected again
  if (target) {
    target.value = '';
  }
};

const togglePerspectiveView = () => {
  isPerspectiveView.value = !isPerspectiveView.value;
  if (sceneRef.value) {
    sceneRef.value.setMainCamera(isPerspectiveView.value);
  }
};


const setCameraView = (cameraView: CameraView) => {
  if (sceneRef.value) {
    sceneRef.value.setCameraView(cameraView);
  }
};
</script>

<template>
  <div class="app-container">
    <!-- 3D сцена на всю страницу -->
    <Viewer ref="sceneRef" />

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

      <div class="toolbar-separator"></div>

      <button
          class="toolbar-button"
          title="Изометрический вид"
          @click="setCameraView(CameraView.Isometric)"
      >
        <img :src="viewInIsometricIconUrl" alt="Isometric View" class="toolbar-icon"/>
      </button>

      <button
        class="toolbar-button"
        :class="{ active: isPerspectiveView }"
        @click="togglePerspectiveView"
        title="Перспективная камера"
      >
        <img :src="perspectiveIconUrl" alt="Perspective View" class="toolbar-icon" />
      </button>

      <div class="toolbar-separator"></div>

      <button
          class="toolbar-button"
          title="Вид в направлении X"
          @click="setCameraView(CameraView.XDirection)"
      >
        <img :src="viewInXDirectionUrl" alt="X Direction View" class="toolbar-icon"/>
      </button>
      <button
          class="toolbar-button"
          title="Вид в направлении Y"
          @click="setCameraView(CameraView.YDirection)"
      >
        <img :src="viewInYDirectionUrl" alt="Y Direction View" class="toolbar-icon"/>
      </button>
      <button
          class="toolbar-button"
          title="Вид в направлении Z"
          @click="setCameraView(CameraView.ZDirection)"
      >
        <img :src="viewInZDirectionUrl" alt="Z Direction View" class="toolbar-icon"/>
      </button>

      <div class="toolbar-separator"></div>

      <button
          class="toolbar-button"
          title="Вид в обратном направлении X"
          @click="setCameraView(CameraView.ReverseXDirection)"
      >
        <img :src="viewInReverseXDirectionUrl" alt="Reverse X Direction View" class="toolbar-icon"/>
      </button>
      <button
          class="toolbar-button"
          title="Вид в обратном направлении Y"
          @click="setCameraView(CameraView.ReverseYDirection)"
      >
        <img :src="viewInReverseYDirectionUrl" alt="Reverse Y Direction View" class="toolbar-icon"/>
      </button>
      <button
          class="toolbar-button"
          title="Вид в обратном направлении Z"
          @click="setCameraView(CameraView.ReverseZDirection)"
      >
        <img :src="viewInReverseZDirectionUrl" alt="Reverse Z Direction View" class="toolbar-icon"/>
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
  margin: 0;
}

.toolbar-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.toolbar-button.active {
  background-color: rgba(0, 120, 215, 0.2);
  border: 2px solid rgba(0, 120, 215, 0.6);
}

.toolbar-icon {
  width: 24px;
  height: 24px;
  display: block;
}

.toolbar-separator {
  width: 1px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 8px;
}
</style>