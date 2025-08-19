<template>
  <div class="card bg-base-100 w-52 shadow-sm hover:scale-105">
    <figure class="p-4">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-48 h-48 object-cover"
        @click="$router.push(`/products/${product.id}`)"
      />
    </figure>
    <div class="card-body">
      <h4 class="line-clamp-1">{{ product.title }}</h4>
      <h1 class="text-xl">${{ product.price }}</h1>
      <div class="card-actions">
        <!-- <router-link
          :to="{ name: 'productDetail', params: { id: product.id } }"
          class="btn btn-primary w-full"
        >
          <ShoppingCart />
          Buy Now
        </router-link> -->

        <button
          @click.prevent="seeDetail(product.id)"
          class="btn btn-primary w-full"
        >
          <ShoppingCart />
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCart } from "lucide-vue-next";
import { useRouter } from "vue-router";

defineProps(["product"]);
const router = useRouter();

function seeDetail(id) {
  router.push({ name: "productDetail", params: { id: id } });
}
</script>
