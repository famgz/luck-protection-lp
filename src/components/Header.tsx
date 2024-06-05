import { IoHeartOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from 'src/components/LogoImage';
import LogoText from 'src/components/LogoText';
import SearchBox from 'src/components/SearchBox';

export default function Header() {
  const pathname = useLocation().pathname;

  const currentLinkStyle = 'text-dark';
  const regularLinkStyle = 'text-light';

  return (
    <header className="bg-background-dark px-2 py-4">
      <div className="container flex justify-between gap-10">
        <Link to={'/'} className="flex items-center gap-3">
          <LogoImage color="fill-primary" size={30} />
          <LogoText color="fill-secondary" size={10} position="vertical" />
        </Link>

        <SearchBox />

        <nav className="flex-1">
          <ul className="flex-center h-full !justify-between gap-4 text-base">
            <li>
              <Link
                to={'/'}
                className={
                  pathname === '/' ? currentLinkStyle : regularLinkStyle
                }
              >
                <span className="whitespace-nowrap">Início</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/'}
                className={
                  pathname.startsWith('/sobre')
                    ? currentLinkStyle
                    : regularLinkStyle
                }
              >
                <span className="whitespace-nowrap">Conheça-nos</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/'}
                className={
                  pathname.startsWith('/contato')
                    ? currentLinkStyle
                    : regularLinkStyle
                }
              >
                <span className="whitespace-nowrap">Contato</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/catalogo'}
                className={
                  pathname.startsWith('/catalogo')
                    ? currentLinkStyle
                    : regularLinkStyle
                }
              >
                <span className="whitespace-nowrap">Loja</span>
              </Link>
            </li>
            <li>
              <div className="flex-center gap-5 text-dark">
                <IoHeartOutline size={20} />
                <LuUser size={20} strokeWidth={1.5} />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
