import FeaturedProductsGrid from 'src/components/FeaturedProductsGrid';
import Hero from 'src/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProductsGrid />
      <div className="h-[300px] flex-1"></div>
    </>
  );
}
