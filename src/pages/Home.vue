<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <div
      class="flex w-52 flex-col gap-4"
      v-for="(value, index) in new Array(8)"
      :key="index"
      v-if="isLoading"
    >
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>

    <ProductCard
      v-if="!isLoading && !isError"
      v-for="product in products"
      :product="product"
      :key="product.id"
    />

    <FetchError v-if="isError" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import FetchError from "@/components/FetchError.vue";

const isLoading = ref(true);
const products = ref([]);
const isError = ref(false);

onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
      isError.value = false;
    })
    .catch((err) => {
      isError.value = true;
    })
    .finally(() => {
      isLoading.value = false;
    });
});
</script>
