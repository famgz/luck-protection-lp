import ProductCard from 'src/components/ProductCard';
import { Product, products } from 'src/data/products';
import { shuffleproducts } from 'src/utils/misc';

export default function ProductsList() {
  const displayProducts: Product[] = shuffleproducts(products).slice(0, 8);

  return (
    <div className="flex flex-wrap justify-center gap-4 gap-y-6">
      {displayProducts.length > 0 &&
        displayProducts.map((p) => <ProductCard product={p} key={p.title} />)}
    </div>
  );
}
