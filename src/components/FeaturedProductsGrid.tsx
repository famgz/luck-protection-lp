import FeaturedProduct from 'src/components/FeaturedProduct';

export default function FeaturedProductsGrid() {
  const featuredProducts = {
    alavanca: {
      title: 'Alavanca',
      text: 'Este equipamento conta com um quebrador de vidros ou perfurador, uma cunha de expansão e um pé de cabra',
      image: '/products/alavanca.png',
    },
    marreta: {
      title: 'Marreta Tática',
      text: 'Equipamento desenvolvido para arrombar portas (internas), fechaduras, dobradiças e auxiliar na abertura de cadeados, romper obstáculos e expandir resistências, a marreta pode entregar uma força cinética de mais de 150kg',
      image: '/products/marreta.png',
    },
    abafador: {
      title: 'Abafador Tático',
      text: 'Proteção auditiva e melhora a consciência situacional e a comunicação',
      image: '/products/abafador.png',
    },
    ariete: {
      title: 'Ariete Tático',
      text: 'Com capacidade para fornecer 500 kg de força cinética(padrão).',
      image: '/products/ariete.png',
    },
  };

  return (
    <div className="bg-background-dark">
      <div
        id="featured-products-grid"
        className="mx-auto flex h-[600px] w-full max-w-[1440px]"
      >
        <div className="flex flex-1 flex-col">
          <FeaturedProduct product={featuredProducts.alavanca} />
          <div className="flex flex-1">
            <FeaturedProduct product={featuredProducts.abafador} />
            <FeaturedProduct product={featuredProducts.ariete} />
          </div>
        </div>
        <FeaturedProduct
          product={featuredProducts.marreta}
          reverseOrder={true}
        />
      </div>
    </div>
  );
}
