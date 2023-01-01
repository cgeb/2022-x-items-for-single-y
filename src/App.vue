<script setup lang="ts">
import ItemSelect from "./components/ItemSelect.vue";
import ComparisonSummary from "./components/ComparisonSummary.vue";
import { fetchProducts, Product } from "./api/productApi";
import { ref } from "vue";

const productX = ref<Product>();
const productY = ref<Product>();
const products = ref<Product[]>([]);

const getProducts = async () => {
  products.value = await fetchProducts();
};

getProducts();
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect v-model:selected="productX" :products="products" />
      <ItemSelect v-model:selected="productY" :products="products" />
    </div>
    <ComparisonSummary v-if="productX && productY" :product-x="productX" :product-y="productY" />
  </div>
</template>
