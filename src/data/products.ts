export enum ProductCategory {
  BOMBEIRO = 'bombeiro',
  POLICIAL = 'policial',
  RESGATE = 'resgate',
  MERGULHO = 'mergulho',
  ARROMBAMENTO = 'arrombamento',
}

export interface Product {
  slug: string;
  title: string;
  category: ProductCategory;
  description: string;
  price: number;
  image: string;
}

const baseImagePath = '/products/';

export const products: Product[] = [
  {
    slug: 'abafador-eletronico',
    title: 'Abafador Eletrônico IA Earmor M20T Preto',
    category: ProductCategory.POLICIAL,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-eletronico.png',
  },
  {
    slug: 'abafador-incendio',
    title: 'Abafador de Incêndio Cabo de Madeira/Alumínio',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-incendio.png',
  },
  {
    slug: 'abafador-m31',
    title: 'Abafador Protetor Auricular Eletrônico Tático Earmor M31',
    category: ProductCategory.POLICIAL,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-m31.png',
  },
  {
    slug: 'abafador-m32',
    title: 'Abafador Eletrônico Earmor M32 Verde',
    category: ProductCategory.POLICIAL,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-m32.png',
  },
  {
    slug: 'abafador',
    title: 'Abafador Tático',
    category: ProductCategory.POLICIAL,
    description:
      'Proteção auditiva e melhora a consciência situacional e a comunicação',
    price: 0,
    image: baseImagePath + 'abafador.png',
  },
  {
    slug: 'alavanca-2',
    title: 'Alavanca Hooligan Pé de Cabra',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'alavanca-2.png',
  },
  {
    slug: 'alavanca-corta-latas',
    title: 'Alavanca Hoolingan Corta Latas',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'alavanca-corta-latas.png',
  },
  {
    slug: 'alavanca',
    title: 'Alavanca Tática Usiplen em aço',
    category: ProductCategory.ARROMBAMENTO,
    description:
      'Este equipamento conta com um quebrador de vidros ou perfurador, uma cunha de expansão e um pé de cabra',
    price: 0,
    image: baseImagePath + 'alavanca.png',
  },
  {
    slug: 'alicate-tatico',
    title: 'Alicate tático preto em aço',
    category: ProductCategory.POLICIAL,
    description: '',
    price: 0,
    image: baseImagePath + 'alicate-tatico.png',
  },
  {
    slug: 'ariete-tatico-2',
    title: 'Ariete tático 1 e 2 alças usiplen',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'ariete-tatico-2.png',
  },
  {
    slug: 'ariete',
    title: 'Ariete Tático',
    category: ProductCategory.POLICIAL,
    description:
      'Com capacidade para fornecer 500 kg de força cinética(padrão).',
    price: 0,
    image: baseImagePath + 'ariete.png',
  },
  {
    slug: 'barco-inflavel',
    title: 'Barco Inflável de poliéster em borracha',
    category: ProductCategory.RESGATE,
    description: '',
    price: 0,
    image: baseImagePath + 'barco-inflavel.png',
  },
  {
    slug: 'bota-neoprene',
    title: 'Bota Neopreme com forro duplo nylon',
    category: ProductCategory.MERGULHO,
    description: '',
    price: 0,
    image: baseImagePath + 'bota-neoprene.png',
  },
  {
    slug: 'bote-inflavel',
    title: 'Bote Inflável Capacidade 9 passageiros',
    category: ProductCategory.RESGATE,
    description: '',
    price: 0,
    image: baseImagePath + 'bote-inflavel.png',
  },
  {
    slug: 'capuz-neoprene',
    title: 'Capuz Neoprene em borracha',
    category: ProductCategory.MERGULHO,
    description: '',
    price: 0,
    image: baseImagePath + 'capuz-neoprene.png',
  },
  {
    slug: 'cilindro-mergulho',
    title: 'Cilindro de mergulho alumínio',
    category: ProductCategory.MERGULHO,
    description: '',
    price: 0,
    image: baseImagePath + 'cilindro-mergulho.png',
  },
  {
    slug: 'enxada-rastelo',
    title: 'Ferramenta combinada Enxada e Rastelo',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'enxada-rastelo.png',
  },
  {
    slug: 'equipamento-respiracao',
    title: 'Equipamento de respiração com máscara autônoma',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'equipamento-respiracao.png',
  },
  {
    slug: 'gancho',
    title: 'Gancho Croque de Bombeiros',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'gancho.png',
  },
  {
    slug: 'kit-arrombamento',
    title: 'Kit de Arrombamento',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'kit-arrombamento.png',
  },
  {
    slug: 'laco-cambao',
    title: 'Laço cambão confeccionado em alumínio',
    category: ProductCategory.RESGATE,
    description: '',
    price: 0,
    image: baseImagePath + 'laco-cambao.png',
  },
  {
    slug: 'luva-neoprene',
    title: 'Luva Neoprene com forro em duplo nylon',
    category: ProductCategory.MERGULHO,
    description: '',
    price: 0,
    image: baseImagePath + 'luva-neoprene.png',
  },
  {
    slug: 'machado-picareta',
    title: 'Ferramenta combinada machado/picareta',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'machado-picareta.png',
  },
  {
    slug: 'marreta',
    title: 'Marreta tática construída em aço',
    category: ProductCategory.ARROMBAMENTO,
    description:
      'Equipamento desenvolvido para arrombar portas (internas), fechaduras, dobradiças e auxiliar na abertura de cadeados, romper obstáculos e expandir resistências, a marreta pode entregar uma força cinética de mais de 150kg',
    price: 0,
    image: baseImagePath + 'marreta.png',
  },
  {
    slug: 'passador-nivel',
    title: 'Passador de nível para mangueira',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'passador-nivel.png',
  },
  {
    slug: 'protetor-nuca',
    title: 'Protetor de nuca e ouvidos em tecido antichamas',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'protetor-nuca.png',
  },
  {
    slug: 'rastelo',
    title: 'Rastelo para remoção de material vegetal',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'rastelo.png',
  },
  {
    slug: 'roupa-neoprene',
    title: 'Roupa Neoprene costurada e colada',
    category: ProductCategory.MERGULHO,
    description: '',
    price: 0,
    image: baseImagePath + 'roupa-neoprene.png',
  },
  {
    slug: 'suporte-colunas',
    title: 'Suporte para colunas veicular',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-colunas.png',
  },
  {
    slug: 'suporte-lanterna',
    title: 'Suporte lanterna Propolymer 4AA 27x37',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-lanterna.png',
  },
  {
    slug: 'suporte-painel',
    title: 'Suporte para pressão Painel',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-painel.png',
  },
  {
    slug: 'suporte-teto',
    title: 'Suporte para pressão Teto',
    category: ProductCategory.BOMBEIRO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-teto.png',
  },
  {
    slug: 'capacete-resgate',
    title: 'Capacete de resgate aquático',
    category: ProductCategory.MERGULHO,
    description: '',
    price: 0,
    image: baseImagePath + 'capacete-resgate.png',
  },
];
