import HeaderLinks from '@/components/HeaderLinks';
import LogoImage from '@/components/LogoImage';
import LogoText from '@/components/LogoText';
import SearchBox from '@/components/SearchBox';
import SideMenu from '@/components/SideMenu';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
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
    <header className="bg-background-dark py-4">
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
                className="w-full bg-transparent text-dark focus:outline-none"
              />
            </form>
          </SearchBox>
        </div>

        <nav className="hidden flex-1 items-center md:flex">
          <HeaderLinks ulClassNames="flex-center !justify-between gap-4 " />
        </nav>

        <SideMenu />
      </div>
    </header>
  );
}
