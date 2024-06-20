import { cn } from '@/lib/utils';
import { IoHeartOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';

interface HeaderLinksProps {
  ulClassNames?: string;
  linkClickAction?: () => void;
}
export default function HeaderLinks({
  ulClassNames = '',
  linkClickAction: closeSheet = () => {},
}: HeaderLinksProps) {
  const pathname = useLocation().pathname;

  const currentLinkStyle = 'text-dark';
  const regularLinkStyle = 'text-light';

  return (
    <ul className={cn('h-full text-center text-base', ulClassNames)}>
      <li>
        <Link
          to={'/'}
          onClick={closeSheet}
          className={pathname === '/' ? currentLinkStyle : regularLinkStyle}
        >
          <span className="whitespace-nowrap">Início</span>
        </Link>
      </li>
      <li>
        <Link
          to={'https://www.instagram.com/luckprotection/'}
          onClick={closeSheet}
          target="_blank"
          className={
            pathname.startsWith('/sobre') ? currentLinkStyle : regularLinkStyle
          }
        >
          <span className="whitespace-nowrap">Conheça-nos</span>
        </Link>
      </li>
      <li>
        <Link
          to={'https://wa.me/5511975305715'}
          onClick={closeSheet}
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
          onClick={closeSheet}
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
  );
}
