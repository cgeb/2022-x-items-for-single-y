export type Product = {
  id: number
  price: number
  title: string
}

export const fetchProducts = async () => {
  const res = await window.fetch(`https://dummyjson.com/products`)
  const json = await res.json()
  return json.products as Product[]
}