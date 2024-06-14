import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '@/components/BreadCrumb';
import { Product, products } from '@/data/products';
import useFavorites from '@/hooks/useFavorites';
import KitArrombamentoDetails from '@/components/KitArrombamentoDetails';

export default function SingleProductPage() {
  const { productSlug } = useParams();
  const [product, setProduct] = useState<Product | undefined>();
  const [currentImage, setCurrentImage] = useState<string | undefined>();
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const foundProduct = products.find((p) => p.slug === productSlug);
    setProduct(foundProduct);

    if (foundProduct) {
      setCurrentImage(foundProduct.images[0]);
    }
  }, [productSlug]);

  function handleTextClampClick(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) {
    event.currentTarget.classList.toggle('line-clamp-3');
  }

  if (!product) {
    return (
      <div className="flex-center min-h-full flex-col gap-12 py-36">
        <h1 className="text-4xl font-light">Produto não encontrado</h1>
        <Link to={'/catalogo'} className="btn-secondary w-fit">
          Voltar para Catálogo
        </Link>
      </div>
    );
  }

  function whatsAppMessage(product: Product) {
    return `https://wa.me/5511975305715?text=Ol%C3%A1!+Tenho+interesse+no+produto+*${product.title}*.%0A%0AEstá+disponível?`;
  }

  const handleToggleFavorite = () => {
    toggleFavorite(product.slug);
  };

  return (
    <div>
      <div className="container">
        <BreadCrumb product={product} category={product?.categories[0]} />

        {/* Product images and title */}
        <div className="grid grid-cols-1 items-center gap-10 py-0 lg:grid-cols-2 lg:py-24">
          <div className="flex gap-2 md:gap-10">
            {/* Thumbnails */}
            <div className="flex flex-col justify-center gap-4">
              {product.images.length > 0 &&
                product.images.map((img, idx) => (
                  <div
                    key={idx + img}
                    className="max-w-[50px] overflow-hidden sm:max-w-[80px]"
                  >
                    <img
                      src={img}
                      alt={product.title}
                      className={`cursor-pointer object-contain ${
                        currentImage !== img ? 'opacity-30' : ''
                      }`}
                      onClick={() => setCurrentImage(img)}
                    />
                  </div>
                ))}
            </div>

            {/* Main image */}
            <div className="item-center flex max-h-[500px] flex-1 justify-center overflow-hidden sm:min-h-[500px]">
              <img
                src={currentImage}
                alt={product.title}
                className="object-contain"
              />
            </div>
          </div>

          {/* Product title and description */}
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl">{product.title}</h1>
              <p
                className="line-clamp-3 cursor-pointer text-muted"
                onClick={(ev) => handleTextClampClick(ev)}
              >
                {product.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="grid-col-1 grid gap-4 lg:grid-cols-2">
              <button
                className="btn-outline-primary w-full whitespace-nowrap"
                onClick={() => handleToggleFavorite()}
                disabled={isFavorite(product.slug)}
              >
                Lista de Desejo
              </button>
              <Link
                to={whatsAppMessage(product)}
                target="_blank"
                className="btn-secondary w-full whitespace-nowrap"
              >
                Orçamento
              </Link>
            </div>
          </div>
        </div>

        {/* Technical details */}
        <div className="space-y-10 py-16 lg:py-20">
          <h2 className="text-2xl font-semibold">Detalhes</h2>
          {product.slug !== 'kit-arrombamento' ? (
            <p>{product.description}</p>
          ) : (
            <KitArrombamentoDetails />
          )}

          <div className="space-y-4">
            <h3 className="text-2xl">Corpo</h3>
            {Object.entries(product.details).map(([k, v]) => (
              <div
                key={k}
                className="line-bottom-primary-light flex justify-between pb-1"
              >
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
