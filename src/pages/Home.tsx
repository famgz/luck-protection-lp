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

      <div className="container-wrapper py-10 sm:py-14">
        <div className="container">
          <h2 className="text-xl underline">Recomendado pra você</h2>
          <div className="mt-10">
            <ProductsList products={recommendedProducts} />
          </div>
          <div>
      <p>Convide seus amigos e planeje sua próxima viagem!</p>

      <p>
        Ao planejar sua viagem pela plann.er você automaticamente concorda com
        nossos <a href="">termos de uso</a> e <a href="">políticas de privacidade</a>.
      </p>
    </div>
        </div>
      </div>
    </>
  );
}
