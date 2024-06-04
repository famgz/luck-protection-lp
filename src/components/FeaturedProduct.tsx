import { Product } from 'src/data/products';
import { cn } from 'src/utils/cn';

interface FeaturedProductProps {
  product: Product;
  reverseOrder?: boolean;
}

export default function FeaturedProduct({
  product,
  reverseOrder = false,
}: FeaturedProductProps) {
  const padding = reverseOrder ? 'pl-10' : 'pr-10';

  return (
    <div
      className={cn(
        'featured-product grid flex-1 grid-cols-2 items-center gap-4 outline outline-[1px]',
        padding
      )}
    >
      <img
        src={product.image}
        alt=""
        className={reverseOrder ? 'order-last' : ''}
      />

      <div className="flex flex-col gap-2 text-left">
        <p className="text-left text-4xl capitalize">{product.title}</p>
        <p className="text-muted">{product.description}</p>
      </div>
    </div>
  );
}
