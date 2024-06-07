import { ProductCategory } from '@/data/products';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function CategoryCards() {
  const categories = Object.values(ProductCategory);

  return (
    <div>
      <div className="container py-10 sm:py-20">
        <div className="flex justify-between">
          <p className="text-xl">Navegar por Categoria</p>
          <div className="flex gap-5 text-muted">
            <button>
              <FaChevronLeft size={24} />
            </button>
            <button>
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex-center mt-5 flex-wrap gap-5">
          {categories.length > 0 &&
            categories.map((c) => (
              <Link
                to={`/catalogo?category=${c}`}
                key={c}
                className="flex-center h-[128px] w-[160px] flex-col gap-3 rounded-lg bg-background-dark"
              >
                <img src={`/icons/${c}.svg`} alt={c} className="opacity-80" />
                <h3 className="capitalize">{c}</h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
