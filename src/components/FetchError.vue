<template>
  <div role="alert" class="alert alert-error">
    <CircleAlert />
    <span>{{ message }}</span>
  </div>
</template>

<script setup>
import { CircleAlert } from "lucide-vue-next";

defineProps({
  message: {
    type: String,
    default: "Failed to fetch data!",
  },
});
</script>
