import CategoryList from 'src/components/CategoryList';
import FeaturedProductsGrid from 'src/components/FeaturedProductsGrid';
import Hero from 'src/components/Hero';
import ProductsList from 'src/components/ProductsList';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProductsGrid />
      <CategoryList />
      <div className="mt-32">
        <div className="container">
          <h2 className="text-xl underline">Recomendado pra você</h2>
          <div className="mt-5">
            <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
}
