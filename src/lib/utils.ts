import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Product, ProductCategory } from '@/data/products';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleproducts(products: Product[]) {
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [products[i], products[j]] = [products[j], products[i]]; // Swap elements
  }
  return products;
}

export function matchProductsCategories(
  categories1: ProductCategory[],
  categories2: ProductCategory[]
): boolean {
  for (const cat1 of categories1) {
    if (categories2.includes(cat1)) {
      return true;
    }
  }

  return false;
}
