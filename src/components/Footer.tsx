import { Link } from 'react-router-dom';
import LogoImage from 'src/components/LogoImage';
import LogoText from 'src/components/LogoText';
import { FaInstagram } from 'react-icons/fa6';
import { ProductCategory } from 'src/data/products';

export default function Footer() {
  const categories = Object.values(ProductCategory);

  return (
    <footer className="bg-background-dark">
      <div className="container grid grid-cols-3 py-24 text-sm">
        <div className="space-y-6">
          <Link to={'/'} className="flex items-center gap-3">
            <LogoImage color="fill-primary" size={30} />
            <LogoText color="fill-secondary" size={10} position="vertical" />
          </Link>
          <p>
            A Luck Protection começou suas atividades para fornecer proteção
            individual, importando Equipamentos de Proteção Individual (EPIs)
            para o mercado nacional e internacional. A empresa se compromete a
            oferecer produtos de alta qualidade e custo-benefício, apoiando
            corporações militares e empresas de resgate e salvamento.
          </p>
          <div>
            <Link
              to="https://www.instagram.com/luckprotection/"
              target="_blank"
            >
              <FaInstagram size={16} className="text-primary" />
            </Link>
          </div>
        </div>

        <div className="flex-center flex-col !justify-start">
          <div>
            <h3 className="mb-3 text-left text-base font-bold">Categorias</h3>
            <nav className="">
              <ul className="flex flex-col gap-3 text-left">
                {categories.map((c) => (
                  <li key={c}>
                    <Link to={`/catalogo?category=${c}`} className="capitalize">
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex-center !items-start">
          <div className="space-y-4 text-left">
            <h3 className="text-base font-bold">Contato</h3>
            <p>(11) 98163-9291</p>
            <p>grupoluckprotection@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
