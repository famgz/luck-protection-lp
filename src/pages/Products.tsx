import { useEffect, useState } from 'react';
import BreadCrumb from 'src/components/BreadCrumb';
import ProductsList from 'src/components/ProductsList';
import SearchBox from 'src/components/SearchBox';
import { ProductCategory, products } from 'src/data/products';

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const categories = Object.values(ProductCategory);

  const [selectedCategories, setSelectedCategories] = useState<
    ProductCategory[]
  >([]);

  useEffect(() => {
    console.log(selectedCategories);

    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(
      products.filter((p) => selectedCategories.includes(p.category))
    );
  }, [selectedCategories]);

  function handleFilterClick(category: ProductCategory) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
      return;
    }

    setSelectedCategories((prev) => [...prev, category]);
  }

  function getCategoryLength(category: ProductCategory) {
    return products.filter((p) => p.category === category).length;
  }

  return (
    <div>
      <div className="container">
        <BreadCrumb />
        <div className="flex gap-8 py-10">
          {/* Categories list filter */}
          <div className="min-w-[200px] space-y-5">
            <h2 className="line-bottom pb-3 text-xl font-medium">Categorias</h2>
            <SearchBox />
            <div>
              <div>
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  className="mr-2 scale-125 accent-primary"
                  checked={selectedCategories.length === 0}
                  onChange={() => {
                    setSelectedCategories([]);
                  }}
                />
                <label
                  htmlFor="all"
                  className="text-sm font-medium text-secondary"
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
                      className="mr-2 scale-125 accent-primary"
                      onChange={() => handleFilterClick(c)}
                      checked={selectedCategories.includes(c)}
                    />
                    <label
                      htmlFor={c}
                      className="text-sm font-medium capitalize text-secondary"
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
          <div className="flex-1 space-y-8">
            <h2 className="text-muted">
              Produtos selecionados:{' '}
              <span className="text-xl font-medium text-dark">
                {filteredProducts.length}
              </span>
            </h2>
            <ProductsList products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
