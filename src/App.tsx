import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import ProductsPage from '@/pages/Products';
import SingleProductPage from '@/pages/SingleProduct';

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
