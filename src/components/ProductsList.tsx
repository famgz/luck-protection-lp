import ProductCard from 'src/components/ProductCard';
import { Product } from 'src/data/products';

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 gap-y-6">
      {products.length > 0 &&
        products.map((p) => <ProductCard product={p} key={p.title} />)}
    </div>
  );
}
