import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from 'src/components/BreadCrumb';
import { Product, products } from 'src/data/products';

export default function SingleProductPage() {
  const { productSlug } = useParams();
  const [product, setProduct] = useState<Product | undefined>();
  const [currentImage, setCurrentImage] = useState<string | undefined>();

  useEffect(() => {
    const foundProduct = products.find((p) => p.slug === productSlug);
    setProduct(foundProduct);

    if (foundProduct) {
      setCurrentImage(foundProduct.image);
    }
  }, [productSlug]);

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

  const images = [
    product?.image,
    '/products/capuz-neoprene.png',
    '/products/alavanca-2.png',
  ];

  return (
    <div>
      <div className="container py-10">
        <BreadCrumb product={product} category={product?.category} />

        {/* Product images and title */}
        <div className="grid grid-cols-2 items-center gap-10 py-24">
          <div className="flex gap-10">
            {/* Thumbnails */}
            <div className="flex flex-col justify-center gap-4">
              {images.length > 0 &&
                images.map((img, idx) => (
                  <div key={idx + img} className="max-w-[80px] overflow-hidden">
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
            <div className="item-center flex max-h-[500px] min-h-[500px] flex-1 overflow-hidden">
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
              <p className="text-muted">{product.description}</p>
            </div>
            <div className="flex gap-4">
              <button className="btn-outline-primary w-full whitespace-nowrap">
                Lista de Desejo
              </button>
              <button className="btn-secondary w-full whitespace-nowrap">
                Orçamento
              </button>
            </div>
          </div>
        </div>

        {/* Technical details */}
        <div className="space-y-6 py-20">
          <h2 className="text-2xl font-semibold">Detalhes</h2>
          <p>{product.description}</p>

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
