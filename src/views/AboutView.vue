<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="center">
    <rocket-two-tone two-tone-color="#eb2f96" :rotate="50" />
    <reload-outlined spin />
  </div>
</template>

<script setup>
import { RocketTwoTone, ReloadOutlined } from "@ant-design/icons-vue";
</script>
