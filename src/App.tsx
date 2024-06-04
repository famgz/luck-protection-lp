import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'src/components/Header';
import Home from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
