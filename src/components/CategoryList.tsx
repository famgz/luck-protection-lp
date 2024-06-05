import { ProductCategory } from 'src/data/products';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function CategoryList() {
  const categories = Object.values(ProductCategory);

  return (
    <div>
      <div className="container py-20">
        <div className="flex justify-between">
          <p className="text-xl">Navegar por Categoria</p>
          <div className="flex gap-5">
            <button>
              <FaChevronLeft size={24} />
            </button>
            <button>
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex-center mt-5 gap-5">
          {categories.length > 0 &&
            categories.map((c) => (
              <Link
                to={'/catalogo'}
                key={c}
                className="flex-center h-[128px] w-[160px] flex-col gap-3 rounded-md bg-background-dark"
              >
                <img src={`/icons/${c}.svg`} alt={c} />
                <h3 className="capitalize">{c}</h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
