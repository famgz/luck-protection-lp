import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-secondary px-24">
      <div className="container grid grid-cols-1 min-[400px]:grid-cols-2">
        <div className="my-8 flex flex-col items-start justify-center gap-4 text-left text-white">
          <p className="text-2xl">
            Qualidade em<span className="text-primary"> segurança!</span>
          </p>
          <div className="space-y-2">
            <p className="text-3xl sm:text-4xl lg:text-7xl">Equipamentos</p>
            <p className="text-3xl text-primary sm:text-4xl lg:text-7xl">
              confiáveis
            </p>
          </div>
          <p>Soluções eficazes para um ambiente seguro</p>
          <button className="btn-outline-white w-fit !px-5 !py-2 text-xs transition-colors duration-300 hover:bg-white hover:text-secondary sm:!px-14 sm:!py-4 sm:!text-base">
            <Link to={'/catalogo'}>Conferir</Link>
          </button>
        </div>

        <div className="flex hidden min-h-full items-end justify-end min-[400px]:flex">
          <img src="/bombeiro.png" alt="" className="max-h-[85%]" />
        </div>
      </div>
    </div>
  );
}
