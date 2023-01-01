<script setup lang="ts">
import { computed, PropType } from "vue";
import { Product } from "../api/productApi";
import { useItemComparison } from "../composables/itemComparison";

const props = defineProps({
  productX: { type: Object as PropType<Product>, required: true },
  productY: { type: Object as PropType<Product>, required: true },
});

const products = computed(() => useItemComparison(props.productX, props.productY));
</script>

<template>
  <p class="mx-5 text-center" v-if="productX.id === productY.id">These are the same items.</p>
  <p class="mx-5 text-center" v-else>
    You can get <strong>{{ products.timesMoreExpensive }}x</strong> <em>{{ products.cheaperProduct.title }}</em> for
    about the same price as a single
    <em>{{ products.moreExpensiveProduct.title }}</em>
  </p>
</template>
