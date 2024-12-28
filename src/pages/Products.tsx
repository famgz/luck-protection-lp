import BreadCrumb from '@/components/BreadCrumb';
import ProductsList from '@/components/ProductsList';
import SearchBox from '@/components/SearchBox';
import { ProductCategory, products } from '@/data/products';
import { matchProductsCategories } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const categories = Object.values(ProductCategory);
  const [search, setSearch] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);

  const [selectedCategories, setSelectedCategories] = useState<
    ProductCategory[]
  >([]);

  useEffect(() => {
    // first access, check params filter
    const paramCategory = searchParams.get('category') as ProductCategory;
    const paramProduct = searchParams.get('product') as string;

    if (categories.includes(paramCategory)) {
      setSelectedCategories([paramCategory]);
      searchParams.delete('category');
    }

    if (paramProduct) {
      setSearch(paramProduct);
      searchParams.delete('product');
    }

    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) =>
          matchProductsCategories(selectedCategories, p.categories)
        )
      );
    }

    if (search.trim()) {
      setFilteredProducts((prev) =>
        prev.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories, search]);

  // useEffect(() => {
  //   if (searchInput.current) {
  //     searchInput.current.focus();
  //   }
  // }, []);

  function handleFilterClick(category: ProductCategory) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
      return;
    }

    setSelectedCategories((prev) => [...prev, category]);
  }

  function getCategoryLength(category: ProductCategory) {
    return products.filter((p) => p.categories.includes(category)).length;
  }

  return (
    <div className="container-wrapper">
      <div className="container">
        <BreadCrumb />
        <div className="flex flex-col gap-8 pb-4 md:py-10 lg:flex-row">
          {/* Categories list filter */}
          <div className="min-w-[200px] max-w-[200px] space-y-5">
            <h2 className="line-bottom pb-3 text-xl font-medium">Categorias</h2>
            <SearchBox className="focus-within:bg-white">
              <input
                type="text"
                name="search"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                ref={searchInput}
                placeholder="Pesquisar"
                className="w-full flex-1 bg-transparent text-dark focus:outline-none"
              />
            </SearchBox>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  className="mr-2 scale-125 cursor-pointer accent-primary"
                  checked={selectedCategories.length === 0}
                  onChange={() => {
                    setSelectedCategories([]);
                  }}
                />
                <label
                  htmlFor="all"
                  className="cursor-pointer text-sm font-medium text-secondary"
                >
                  Todos os Produtos
                  <span className="ml-1 text-xs text-light">
                    {products.length}
                  </span>
                </label>
              </div>
              {categories.length > 0 &&
                categories.map((c) => (
                  <div key={c}>
                    <input
                      type="checkbox"
                      name={c}
                      id={c}
                      className="mr-2 scale-125 cursor-pointer accent-primary"
                      onChange={() => handleFilterClick(c)}
                      checked={selectedCategories.includes(c)}
                    />
                    <label
                      htmlFor={c}
                      className="cursor-pointer text-sm font-medium capitalize text-secondary"
                    >
                      {c}
                      <span className="ml-1 text-xs text-light">
                        {getCategoryLength(c)}
                      </span>
                    </label>
                  </div>
                ))}
            </div>
          </div>

          {/* Products list */}
          {filteredProducts.length === 0 ? (
            <div className="flex-center min-h-[300px] w-full text-lg">
              Nenhum produto encontrado
            </div>
          ) : (
            <div className="flex-1 space-y-8">
              <h2 className="text-muted">
                Produtos selecionados:{' '}
                <span className="text-xl font-medium text-dark">
                  {filteredProducts.length}
                </span>
              </h2>
              <ProductsList products={filteredProducts} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
