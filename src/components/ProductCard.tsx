import { IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Product } from 'src/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex h-[392px] w-[268px] flex-col justify-end gap-5 p-4 text-center">
      <button className="flex w-full justify-end">
        <IoHeartOutline size={30} className="text-light" />
      </button>
      <div className="flex-1 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto max-h-full object-contain"
        />
      </div>

      <p className="font-medium">{product.title}</p>

      <Link to={`/catalogo/${product.slug}`} className="btn-secondary w-full">
        Disponibilidade
      </Link>
    </div>
  );
}
