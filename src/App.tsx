import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import HomePage from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';
import ProductsPage from 'src/pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="catalogo" element={<ProductsPage />}>
        <Route path=":productSlug" element={<ProductsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  );
}

export default WrappedApp;
