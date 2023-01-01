import type { Product } from "../api/productApi"

export const useItemComparison = (productA: Product, productB: Product) => {
  const moreExpensiveProduct = productA.price > productB.price ? productA : productB;
  const cheaperProduct = productA.price > productB.price ? productB : productA;

  const timesMoreExpensive = Math.floor(moreExpensiveProduct.price / cheaperProduct.price);

  return { moreExpensiveProduct, cheaperProduct, timesMoreExpensive}
}
