export enum ProductCategory {
  BOMBEIRO = 'bombeiro',
  POLICIAL = 'policial',
  RESGATE = 'resgate',
  MERGULHO = 'mergulho',
  ARROMBAMENTO = 'arrombamento',
}

export interface Product {
  title: string;
  category: ProductCategory;
  description: string;
  price: number;
  image: string;
}

const baseImagePath = '/products/';

export const products: Product[] = [
  {
    title: 'abafador-eletronico',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-eletronico.png',
  },
  {
    title: 'abafador-incendio',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-incendio.png',
  },
  {
    title: 'abafador-m31',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-m31.png',
  },
  {
    title: 'abafador-m32',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'abafador-m32.png',
  },
  {
    title: 'abafador',
    category: ProductCategory.ARROMBAMENTO,
    description:
      'Proteção auditiva e melhora a consciência situacional e a comunicação',
    price: 0,
    image: baseImagePath + 'abafador.png',
  },
  {
    title: 'alavanca-2',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'alavanca-2.png',
  },
  {
    title: 'alavanca-corta-latas',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'alavanca-corta-latas.png',
  },
  {
    title: 'alavanca',
    category: ProductCategory.ARROMBAMENTO,
    description:
      'Este equipamento conta com um quebrador de vidros ou perfurador, uma cunha de expansão e um pé de cabra',
    price: 0,
    image: baseImagePath + 'alavanca.png',
  },
  {
    title: 'alicate-tatico',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'alicate-tatico.png',
  },
  {
    title: 'ariete-tatico-2',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'ariete-tatico-2.png',
  },
  {
    title: 'ariete',
    category: ProductCategory.ARROMBAMENTO,
    description:
      'Com capacidade para fornecer 500 kg de força cinética(padrão).',
    price: 0,
    image: baseImagePath + 'ariete.png',
  },
  {
    title: 'barco-inflavel',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'barco-inflavel.png',
  },
  {
    title: 'bota-neoprene',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'bota-neoprene.png',
  },
  {
    title: 'bote-inflavel',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'bote-inflavel.png',
  },
  {
    title: 'capuz-neoprene',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'capuz-neoprene.png',
  },
  {
    title: 'cilindro-mergulho',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'cilindro-mergulho.png',
  },
  {
    title: 'enxada-rastelo',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'enxada-rastelo.png',
  },
  {
    title: 'equipamento-respiracao',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'equipamento-respiracao.png',
  },
  {
    title: 'gancho',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'gancho.png',
  },
  {
    title: 'kit-arrombamento',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'kit-arrombamento.png',
  },
  {
    title: 'laco-cambao',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'laco-cambao.png',
  },
  {
    title: 'luve-neoprene',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'luve-neoprene.png',
  },
  {
    title: 'machado-picareta',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'machado-picareta.png',
  },
  {
    title: 'marreta',
    category: ProductCategory.ARROMBAMENTO,
    description:
      'Equipamento desenvolvido para arrombar portas (internas), fechaduras, dobradiças e auxiliar na abertura de cadeados, romper obstáculos e expandir resistências, a marreta pode entregar uma força cinética de mais de 150kg',
    price: 0,
    image: baseImagePath + 'marreta.png',
  },
  {
    title: 'passador-nivel',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'passador-nivel.png',
  },
  {
    title: 'protetor-nuca',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'protetor-nuca.png',
  },
  {
    title: 'rastelo',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'rastelo.png',
  },
  {
    title: 'roupa-neoprene',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'roupa-neoprene.png',
  },
  {
    title: 'suporte-colunas',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-colunas.png',
  },
  {
    title: 'suporte-lanterna',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-lanterna.png',
  },
  {
    title: 'suporte-painel',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-painel.png',
  },
  {
    title: 'suporte-teto',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'suporte-teto.png',
  },
  {
    title: 'capacete-resgate',
    category: ProductCategory.ARROMBAMENTO,
    description: '',
    price: 0,
    image: baseImagePath + 'capacete-resgate.png',
  },
];
