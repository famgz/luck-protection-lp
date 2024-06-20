import { Link } from 'react-router-dom';
import LogoImage from '@/components/LogoImage';
import LogoText from '@/components/LogoText';
import { FaInstagram } from 'react-icons/fa6';
import { ProductCategory } from '@/data/products';

export default function Footer() {
  const categories = Object.values(ProductCategory);

  return (
    <footer className="container-wrapper bg-background-dark">
      <div className="container grid grid-cols-1 py-10 text-sm md:grid-cols-[1fr_2fr] md:py-24">
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

        <div className="mt-5 grid grid-cols-2 md:mt-0">
          <div className="flex-center flex-col !items-start md:!items-center md:!justify-start">
            <div>
              <h3 className="mb-3 text-left text-base font-bold">Categorias</h3>
              <nav>
                <ul className="flex flex-col gap-3 text-left">
                  {categories.map((c) => (
                    <li key={c}>
                      <Link
                        to={`/catalogo?category=${c}`}
                        className="capitalize"
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex-center !items-start md:!justify-start">
            <div className="space-y-4 text-left">
              <h3 className="text-base font-bold">Contato</h3>
              <p>(11) 97530-5715</p>
              <p className="break-all">contato@luckprotection.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
