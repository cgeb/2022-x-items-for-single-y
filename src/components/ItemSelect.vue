<script setup lang="ts">
import { Product } from "../api/productApi";

const props = defineProps<{
  selected?: Product;
  products: Product[];
}>();

const emits = defineEmits<{
  (event: "update:selected", product: Product): void;
}>();

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const product = props.products.find((x) => x.id === Number(target.value))!;
  emits("update:selected", product);
};
</script>

<template>
  <select @change="onChange" class="p-2 border-2 border-gray-dark">
    <option value="">Select an item</option>
    <option
      v-for="product in products"
      :selected="props.selected && product.id === props.selected.id"
      :key="product.id"
      :value="product.id"
    >
      {{ product.title }} - ${{ product.price }}
    </option>
  </select>
</template>
