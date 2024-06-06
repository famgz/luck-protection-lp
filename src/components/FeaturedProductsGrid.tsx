import FeaturedProduct from 'src/components/FeaturedProduct';
import { products } from 'src/data/products';

export default function FeaturedProductsGrid() {
  const alavanca = products.find((p) => p.slug === 'alavanca')!;
  const abafador = products.find((p) => p.slug === 'abafador')!;
  const ariete = products.find((p) => p.slug === 'ariete')!;
  const marreta = products.find((p) => p.slug === 'marreta')!;

  return (
    <div className="hidden bg-background-dark sm:block">
      <div
        id="featured-products-grid"
        className="mx-auto flex min-h-[600px] w-full max-w-[1440px] flex-col xl:flex-row"
      >
        <div className="flex flex-1 flex-col">
          <FeaturedProduct product={alavanca} />
          <div className="flex flex-1">
            <FeaturedProduct product={abafador} />
            <FeaturedProduct product={ariete} />
          </div>
        </div>
        <FeaturedProduct product={marreta} reverseOrder={true} />
      </div>
    </div>
  );
}
