import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-secondary px-24">
      <div className="flex-center container !justify-between">
        <div className="my-5 flex flex-col items-start gap-4 text-left text-white">
          <p className="text-2xl">
            Qualidade em<span className="text-primary"> segurança!</span>
          </p>
          <div className="space-y-2">
            <p className="text-4xl lg:text-7xl">Equipamentos</p>
            <p className="text-4xl text-primary lg:text-7xl">confiáveis</p>
          </div>
          <p>Soluções eficazes para um ambiente seguro</p>
          <button className="btn-outline-white scale-75 md:scale-100">
            <Link to={'/catalogo'}>Conferir</Link>
          </button>
        </div>

        <div>
          <img src="/bombeiro.png" alt="" />
        </div>
      </div>
    </div>
  );
}
