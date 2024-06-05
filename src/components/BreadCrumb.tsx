import { GoChevronRight } from 'react-icons/go';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Product, ProductCategory, products } from 'src/data/products';
import { useEffect, useState } from 'react';

export default function BreadCrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  const { productSlug } = useParams();

  const [product, setProduct] = useState<Product | undefined>();
  const [category, setCategory] = useState<ProductCategory | undefined>();

  // console.log(pathname);
  // console.log(productSlug);
  // console.log({ category });
  // console.log({ product });

  useEffect(() => {
    const foundProduct = products.find((p) => p.slug === productSlug);
    setProduct(foundProduct);

    if (foundProduct) {
      setCategory(
        Object.values(ProductCategory).find((c) => c === foundProduct.category)
      );
    }
  }, [productSlug]);

  return (
    <div className="py-10">
      <div className="flex-center container !justify-start text-light">
        <ul className="flex gap-3">
          <li>
            <Link to={'/'}>Home</Link>
          </li>

          {pathname.startsWith('/catalogo') && (
            <>
              <GoChevronRight size={24} strokeWidth={1} />
              <li>
                <Link to={'/catalogo'}>Catálogo</Link>
              </li>
            </>
          )}
          {category && (
            <>
              <GoChevronRight size={24} strokeWidth={1} />
              <li>
                <Link to={'/catalogo'} className="capitalize">
                  {category}
                </Link>
              </li>
            </>
          )}
          {category && product && (
            <>
              <GoChevronRight size={24} strokeWidth={1} />
              <li>
                <span>{product.title}</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
