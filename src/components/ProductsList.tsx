import ProductCard from '@/components/ProductCard';
import { Product } from '@/data/products';

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-0 md:gap-4 md:gap-y-6">
      {products.length > 0 &&
        products.map((p) => <ProductCard product={p} key={p.title} />)}
    </div>
  );
}
