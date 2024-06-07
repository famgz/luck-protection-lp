import { IoHeartOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoImage from 'src/components/LogoImage';
import LogoText from 'src/components/LogoText';
import SearchBox from 'src/components/SearchBox';
import { IoMenu } from 'react-icons/io5';
import { useRef } from 'react';

export default function Header() {
  const pathname = useLocation().pathname;

  const currentLinkStyle = 'text-dark';
  const regularLinkStyle = 'text-light';

  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputElement = inputRef.current;
    const querySearch = inputElement!.value.trim();
    if (!querySearch) return;
    inputElement!.value = '';
    navigate(`/catalogo?product=${querySearch}`);
  }

  return (
    <header className="bg-background-dark px-2 py-4">
      <div className="container flex justify-between gap-10">
        <Link to={'/'} className="flex items-center gap-3">
          <LogoImage color="fill-primary" size={30} />
          <LogoText color="fill-secondary" size={10} position="vertical" />
        </Link>

        <div className="hidden max-w-[min(350px,100%)] flex-1 md:flex">
          <SearchBox className="focus-within:bg-background-light">
            <form onSubmit={handleSearchSubmit} className="w-full flex-1">
              <input
                type="text"
                name="search"
                placeholder="Pesquisar"
                ref={inputRef}
                className="bg-transparent w-full text-dark focus:outline-none"
              />
            </form>
          </SearchBox>
        </div>

        <button className="flex items-center text-muted md:hidden">
          <IoMenu size={40} />
        </button>

        <nav className="hidden flex-1 md:block">
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
                to={'https://www.instagram.com/luckprotection/'}
                target="_blank"
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
                to={'https://wa.me/5511975305715'}
                target="_blank"
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
                <button>
                  <IoHeartOutline size={20} />
                </button>
                <button>
                  <LuUser size={20} strokeWidth={1.5} />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
