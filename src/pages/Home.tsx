import CategoryCards from '@/components/CategoryCards';
import FeaturedProductsGrid from '@/components/FeaturedProductsGrid';
import Hero from '@/components/Hero';
import ProductsList from '@/components/ProductsList';
import { Product, products } from '@/data/products';
import { shuffleproducts } from '@/lib/utils';

export default function HomePage() {
  const recommendedProducts: Product[] = shuffleproducts(products).slice(0, 8);

  return (
    <>
      <Hero />

      <FeaturedProductsGrid />

      <CategoryCards />

      <div className="py-10 sm:py-14">
        <div className="container">
          <h2 className="text-xl underline">Recomendado pra você</h2>
          <div className="mt-10">
            <ProductsList products={recommendedProducts} />
          </div>
        </div>
      </div>
    </>
  );
}
