import { Product } from 'src/data/products';

export function shuffleproducts(products: Product[]) {
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [products[i], products[j]] = [products[j], products[i]]; // Swap elements
  }
  return products;
}
