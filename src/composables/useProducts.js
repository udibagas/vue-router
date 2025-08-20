import { onMounted, ref } from "vue";

export default function useProducts() {
  const products = ref([]);
  const isLoading = ref(true);
  const isError = ref(false);

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      products.value = data;
      isError.value = false;
    } catch (error) {
      isError.value = true;
    }

    isLoading.value = false;
  }

  onMounted(() => {
    fetchProducts();
  });

  return { products, isLoading, isError, fetchProducts };
}
