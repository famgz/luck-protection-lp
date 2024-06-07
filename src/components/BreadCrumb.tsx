import { GoChevronRight } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';
import { Product, ProductCategory } from '@/data/products';

interface BreadCrumbProps {
  product?: Product;
  category?: ProductCategory;
}

export default function BreadCrumb({ product, category }: BreadCrumbProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="py-10" id="bread-crumb">
      <div className="flex-center !justify-start text-light">
        <ul className="flex flex-wrap gap-3">
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
                <Link
                  to={`/catalogo?category=${category}`}
                  className="capitalize"
                >
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
