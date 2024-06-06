import FeaturedProduct from 'src/components/FeaturedProduct';
import { ProductCategory, baseImagePath } from 'src/data/products';

export default function FeaturedProductsGrid() {
  const alavanca = {
    slug: 'alavanca',
    title: 'Alavanca policial',
    category: ProductCategory.POLICIAL,
    description:
      'Este equipamento conta com um quebrador de vidros ou perfurador, uma cunha de expansão e um pé de cabra',
    details: {},
    price: 0,
    images: [baseImagePath + 'alavanca.png'],
  };

  const abafador = {
    slug: 'abafador-m32',
    title: 'Abafador Tático',
    category: ProductCategory.POLICIAL,
    description:
      'Proteção auditiva e melhora a consciência situacional e a comunicação',
    details: {},
    price: 0,
    images: [baseImagePath + 'abafador.png'],
  };

  const ariete = {
    slug: 'ariete-tatico-2',
    title: 'Ariete Tático',
    category: ProductCategory.POLICIAL,
    description:
      'Com capacidade para fornecer 500 kg de força cinética(padrão).',
    details: {},
    price: 0,
    images: [baseImagePath + 'ariete-tatico-2.png'],
  };

  const marreta = {
    slug: 'marreta',
    title: 'Marreta Tática',
    category: ProductCategory.POLICIAL,
    description:
      'Equipamento desenvolvido para arrombar portas (internas), fechaduras, dobradiças e auxiliar na abertura de cadeados, romper obstáculos e expandir resistências, a marreta pode entregar uma força cinética de mais de 150kg',
    details: {},
    price: 0,
    images: [baseImagePath + 'marreta.png'],
  };

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
