import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import ScrollToTop from 'src/components/ScrollToTop';
import HomePage from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';
import ProductsPage from 'src/pages/Products';
import SingleProductPage from 'src/pages/SingleProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalogo" element={<ProductsPage />} />
      <Route path="/catalogo/:productSlug" element={<SingleProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default WrappedApp;
