import { IoHeartOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import LogoImage from 'src/components/LogoImage';
import LogoText from 'src/components/LogoText';
import SearchBox from 'src/components/SearchBox';

export default function Header() {
  return (
    <header className="bg-background-dark px-2 py-4">
      <div className="container flex justify-between gap-3">
        <div className="flex items-center gap-3">
          <LogoImage color="fill-primary" size={30} />
          <LogoText color="fill-secondary" size={10} position="vertical" />
        </div>

        <SearchBox />

        <nav className="flex-center">
          <ul className="flex-center gap-12 text-base text-muted">
            <li>
              <Link to={'/'} className="">
                Início
              </Link>
            </li>
            <li>
              <Link to={'/'}>Conheça-nos</Link>
            </li>
            <li>
              <Link to={'/'}>Contato</Link>
            </li>
            <li>
              <Link to={'/'}>Loja</Link>
            </li>
            <li>
              <div className="flex-center gap-5 text-dark">
                <IoHeartOutline size={20} />
                <LuUser size={20} />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
