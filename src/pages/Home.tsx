import CategoryList from 'src/components/CategoryList';
import FeaturedProductsGrid from 'src/components/FeaturedProductsGrid';
import Hero from 'src/components/Hero';
import ProductsList from 'src/components/ProductsList';
import { Product, products } from 'src/data/products';
import { shuffleproducts } from 'src/utils/misc';

export default function HomePage() {
  const recommendedProducts: Product[] = shuffleproducts(products).slice(0, 8);

  return (
    <>
      <Hero />

      <FeaturedProductsGrid />

      <CategoryList />

      <div className="py-14">
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
