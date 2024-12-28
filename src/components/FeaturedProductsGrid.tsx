import FeaturedProduct from '@/components/FeaturedProduct';
import { ProductCategory, baseImagePath } from '@/data/products';

export default function FeaturedProductsGrid() {
  const alavanca = {
    slug: 'alavanca',
    active: true,
    title: 'Alavanca policial',
    categories: [ProductCategory.POLICIAL],
    description:
      'Este equipamento conta com um quebrador de vidros ou perfurador, uma cunha de expansão e um pé de cabra',
    descriptionHTML: '',
    details: {},
    price: 0,
    images: [baseImagePath + 'alavanca.png'],
  };

  const abafador = {
    slug: 'abafador-m32',
    active: true,
    title: 'Abafador Tático',
    categories: [ProductCategory.POLICIAL],
    description:
      'Proteção auditiva e melhora a consciência situacional e a comunicação',
    descriptionHTML: '',
    details: {},
    price: 0,
    images: [baseImagePath + 'abafador.png'],
  };

  const ariete = {
    slug: 'ariete-tatico',
    active: true,
    title: 'Ariete Tático',
    categories: [ProductCategory.POLICIAL],
    description:
      'Com capacidade para fornecer 500 kg de força cinética(padrão).',
    descriptionHTML: '',
    details: {},
    price: 0,
    images: [baseImagePath + 'ariete.png'],
  };

  const marreta = {
    slug: 'marreta',
    active: true,
    title: 'Marreta Tática',
    categories: [ProductCategory.POLICIAL],
    description:
      'Equipamento desenvolvido para arrombar portas (internas), fechaduras, dobradiças e auxiliar na abertura de cadeados, romper obstáculos e expandir resistências, a marreta pode entregar uma força cinética de mais de 150kg',
    descriptionHTML: '',
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
