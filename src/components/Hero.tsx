export default function Hero() {
  return (
    <div className="bg-secondary px-24">
      <div className="flex-center container !justify-between">
        <div className="space-y-4 text-left text-white">
          <p className="text-2xl">
            Qualidade em<span className="text-primary"> segurança!</span>
          </p>
          <div className="space-y-2">
            <p className="text-7xl">Equipamentos</p>
            <p className="text-7xl text-primary">confiáveis</p>
          </div>
          <p>Soluções eficazes para um ambiente seguro</p>
          <button className="btn-outline">Conferir</button>
        </div>

        <div>
          <img src="/bombeiro.png" alt="" />
        </div>
      </div>
    </div>
  );
}
