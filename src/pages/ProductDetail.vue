<template>
  <div class="flex w-full gap-4" v-if="isLoading">
    <div class="flex-none skeleton h-64 w-64"></div>
    <div class="flex-1 flex flex-col gap-4">
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </div>

  <div
    v-if="!isLoading && !isError"
    class="card lg:card-side bg-base-100 shadow-sm"
  >
    <figure class="m-6">
      <img :src="product.image" :alt="product.title" />
    </figure>
    <div class="card-body">
      <div class="flex">
        <h2 class="flex-1 card-title">{{ product.title }}</h2>
        <button class="btn btn-ghost" @click="$router.go(-1)">
          <ArrowLeft />
          Back
        </button>
      </div>
      <p>{{ product.description }}</p>

      <h1 class="text-xl">${{ product.price }}</h1>

      <div class="card-actions justify-end">
        <button class="btn btn-primary">
          <ShoppingCart />
          Buy
        </button>
      </div>
    </div>
  </div>

  <FetchError v-if="isError" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import FetchError from "@/components/FetchError.vue";
import { ArrowLeft, ShoppingCart } from "lucide-vue-next";
// import { useRoute } from "vue-router";

// const route = useRoute();
// const { id } = route.params;

const props = defineProps(["id"]);
const product = ref({});
const isLoading = ref(true);
const isError = ref(false);

onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${props.id}`)
    .then((res) => res.json())
    .then((json) => {
      product.value = json;
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
