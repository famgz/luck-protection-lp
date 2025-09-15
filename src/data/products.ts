export enum ProductCategory {
  BOMBEIRO = 'bombeiro',
  POLICIAL = 'policial',
  RESGATE = 'resgate',
  // MERGULHO = 'mergulho',
  // ARROMBAMENTO = 'arrombamento',
}

interface ProductDetails {
  [key: string]: string;
}

export interface Product {
  slug: string;
  active: boolean;
  title: string;
  categories: ProductCategory[];
  description: string;
  descriptionImage?: string;
  descriptionHTML: string;
  details: ProductDetails;
  price: number;
  images: string[];
}

export const baseImagePath = '/products/';

const baseProducts: Product[] = [
  {
    slug: 'abafador-incendio',
    active: true,
    title: 'Abafador de Incêndio Cabo de Alumínio',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta usada para o combate direto ao fogo apagando-o por abafamento. Construída de lâmina (flap) de borracha compacta, com duas lonas internas. <br> <strong>Modelos</strong> <br> LPA-01 - 40CMX30CMX3MM <br>LPA-02 - 40CMX30CMX4MM <br>LPA-03 - 40CMX30CMX5MM <br>LPA-04 - 40CMX30CMX6MM <br>LPA-05 - 50CMX40CMX3MM <br>LPA-06 - 50CMX40CMX4MM <br>LPA-07 - 50CMX40CMX5MM <br>LPA-08 - 50CMX40CMX6MM',
    descriptionHTML: '',
    details: {
      'Lâmina (Flap) de Borracha': '',
      'Duas lonas internas': '',
      Comprimento: '40 a a 50 cm',
      Largura: '30 a 40 cm',
      Espessura: '3 a 6 mm',
      'Com furos ou sem furos': '',
      'Parafusada em armação de madeira ou ferro': '',
      Forma: 'T reforçada',
      Furação: 'Para 4 parafusos',
      Angulação: '45° para maior ergonomia do operador durante o combate',
      Características: 'Flexível e resistente a impactos',
      'Comprimento do cabo ': '1,50 m',
      'Diâmetro do cabo': '31 mm',
      Peso: 'De 1,5 a 2,5 kg',
    },
    price: 0,
    images: [baseImagePath + 'abafador-incendio.png'],
  },
  {
    slug: 'abafador-incendio-madeira', // atualizar foto
    active: true,
    title: 'Abafador de Incêndio Cabo de Madeira',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta usada para o combate direto ao fogo apagando-o por abafamento. Construída de lâmina (flap) de borracha compacta, com duas lonas internas. <br> <strong>Modelos</strong> <br> LPA-01 - 40CMX30CMX3MM <br>LPA-02 - 40CMX30CMX4MM <br>LPA-03 - 40CMX30CMX5MM <br>LPA-04 - 40CMX30CMX6MM <br>LPA-05 - 50CMX40CMX3MM <br>LPA-06 - 50CMX40CMX4MM <br>LPA-07 - 50CMX40CMX5MM <br>LPA-08 - 50CMX40CMX6MM',
    descriptionHTML: '',
    details: {
      'Lâmina (Flap) de Borracha': '',
      'Duas lonas internas': '',
      Comprimento: '40 a a 50 cm',
      Largura: '30 a 40 cm',
      Espessura: '3 a 6 mm',
      'Com furos ou sem furos': '',
      'Parafusada em armação de madeira ou ferro': '',
      Forma: 'T reforçada',
      Furação: 'Para 4 parafusos',
      Angulação: '45° para maior ergonomia do operador durante o combate',
      Características: 'Flexível e resistente a impactos',
      'Comprimento do cabo ': '1,50 m',
      'Diâmetro do cabo': '31 mm',
      Peso: 'De 1,5 a 2,5 kg',
    },
    price: 0,
    images: [baseImagePath + 'abafador-incendio-madeira.png'],
  },
  {
    slug: 'alavanca-2',
    active: true,
    title: 'Alavanca Hooligan Pé de Cabra',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta para arrombamento tática portátil para uso exclusivo de forças especiais (Grupos Anti-Sequestro, Policiais, Bombeiros, Resgatistas). Projetada para forçar, martelar, torcer ou remover barreiras mantendo perfil tático. Corpo fabricado em aço SAE 1045 com ponteiras em aço SAE 1075 temperado. Uma extremidade: pé de cabra; outra extremidade: cunha e ponta arrombadora. Comprimento 80cm, peso 6,8kg.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '80cm',
      Diâmetro: '25mm',
      Peso: '6,8kg',
    },
    price: 0,
    images: [
      baseImagePath + 'alavanca-2.png',
      baseImagePath + 'alavanca-2-2.png',
      baseImagePath + 'alavanca-2-3.png',
    ],
  },
  {
    slug: 'alavanca-corta-latas',
    active: true,
    title: 'Alavanca Hoolingan Peça única de fundição',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta para arrombamento tática portátil para uso exclusivo de forças especiais(Grupos Anti-Sequestro, Bombeiros, Resgatistas), corpo fabricado em aço SAE 1045 e acabamento com pintura ou galvanizada. Contendo ponteiras fabricadas em aço SAE 1075 temperado e revenido, sendo em uma das extremidades uma ponteira tipo corta latas ou pé de cabra e na outra extremidade uma ponteira tipo cunha e uma ponta arrombadora. Medindo80 cm de comprimento e 25 mm de diâmetro(corpo), pesando até 6,8 Kg, (padrão). (obs: medidas podemvariar de acordo com pedido)',
    descriptionHTML: '',
    details: {
      Material: 'Aço liga, forjado em peça única de alta resistência',
      Tratamento:
        'Tratamento térmico para aumentar a durabilidade e resistência',
      Acabamento: 'Pintura eletrostática preto fosco ou natural',
      Comprimento: 'Mínimo: 90 cm / Máximo: 95 cm',
      Peso: '6,0kg',
      Ponteiras: 'Três ponteiras dinâmicas versáteis',
      'Uma extremidade': 'Para corte de chapa',
      'Outra extremidade': 'Para perfuração',
      Funcionalidade:
        'Ferramenta de arrombamento tático que permite perfurar e cortar chapas metálicas, tipo hooligan',
      Garantia: '1 ano contra defeitos de fabricação',
    },
    price: 0,
    images: [
      baseImagePath + 'alavanca-corta-latas.png',
      baseImagePath + 'alavanca-corta-latas-2.png',
      baseImagePath + 'alavanca-corta-latas-3.png',
    ],
  },
  {
    slug: 'alavanca',
    active: true,
    title: 'Alavanca de Arrombamento',
    categories: [ProductCategory.POLICIAL],
    description:
      'Ferramenta de arrombamento desenvolvida para uso em ações policiais e táticas especializadas. Equipamento multifuncional que combina diferentes funções: pé de cabra, cunha de expansão, quebrador de vidros e perfurador. Construída em aço temperado de alta resistência com acabamento em pintura eletrostática preta. Projetada para fornecer força cinética suficiente para romper obstáculos, abrir portas, expandir resistências e auxiliar em operações de arrombamento tático.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '60cm',
      'Diâmetro da haste': '3,5cm',
      Peso: '4kg',
    },
    price: 0,
    images: [baseImagePath + 'alavanca.png'],
  },
  {
    slug: 'alavanca-hooligan-corta-lata',
    active: true,
    title: 'Alavanca Hooligan Corta Lata',
    categories: [ProductCategory.POLICIAL, ProductCategory.BOMBEIRO],
    description:
      'Ferramenta de arrombamento tático que permite perfurar e cortar chapas metálicas, tipo hooligan. Material em aço liga, forjado em peça única de alta resistência com tratamento térmico para aumentar a durabilidade e resistência. Possui três ponteiras dinâmicas versáteis, uma extremidade para corte de chapa e outra extremidade para perfuração. Garantia de 1 ano contra defeitos de fabricação.',
    descriptionHTML: '',
    details: {
      Material: 'Aço liga, forjado em peça única de alta resistência',
      Tratamento:
        'Tratamento térmico para aumentar a durabilidade e resistência',
      Acabamento: 'Pintura eletrostática preto fosco ou natural',
      Comprimento: 'Mínimo 90 cm / Máximo 95 cm',
      Peso: 'Máximo 6,0 kg',
      Ponteiras: 'Três ponteiras dinâmicas versáteis',
      'Uma extremidade': 'Para corte de chapa',
      'Outra extremidade': 'Para perfuração',
      Funcionalidade:
        'Ferramenta de arrombamento tático que permite perfurar e cortar chapas metálicas, tipo hooligan',
      Garantia: '1 ano contra defeitos de fabricação',
    },
    price: 0,
    images: [
      baseImagePath + 'ALAVANCA HOOLIGAN CORTA LATA-1-Photoroom 1 1.png',
      baseImagePath + 'image 61.png',
      baseImagePath + 'image 62.png',
    ],
  },
  {
    slug: 'alicate-tatico',
    active: true,
    title: 'Alicate tático preto em aço 60cm ',
    categories: [ProductCategory.POLICIAL],
    description:
      'O Alicate Tático Especial foi criado especificamente para operações policiais e pode ser utilizado em diversas situações táticas. Equipamento construído em aço temperado de alta qualidade, usinado com precisão e acabamento em pintura eletrostática preta. As empunhaduras ergonômicas em nylon proporcionam aderência e conforto durante o uso, além de isolamento elétrico. Capacidade de corte de até 8mm, ideal para cortar arames, cabos, correntes e outros materiais. Anti-fagulha e não condutivo.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '60cm',
      'Capacidade de corte': '8mm',
      Peso: '2,6kg',
    },
    price: 0,
    images: [baseImagePath + 'alicate-tatico.png'],
  },
  {
    slug: 'alicate-tatico',
    active: true,
    title: 'Alicate tático preto em aço 75cm ',
    categories: [ProductCategory.POLICIAL],
    description:
      'O Alicate Tático Especial foi criado especificamente para operações policiais e pode ser utilizado em diversas situações táticas. Equipamento construído em aço temperado de alta qualidade, usinado com precisão e acabamento em pintura eletrostática preta. As empunhaduras ergonômicas em nylon proporcionam aderência e conforto durante o uso, além de isolamento elétrico. Versão estendida de 75cm para maior alavancagem. Capacidade de corte de até 8mm, ideal para cortar arames, cabos, correntes e outros materiais. Anti-fagulha e não condutivo.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '75cm',
      'Capacidade de corte': '8mm',
      Peso: '4kg',
    },
    price: 0,
    images: [baseImagePath + 'alicate-tatico.png'],
  },
  {
    slug: 'ariete-tatico',
    active: true,
    title: 'Ariete tático 2 alças 50cm para policial',
    categories: [ProductCategory.POLICIAL],
    description:
      'O Ariete foi desenvolvido exclusivamente para uso policial, podendo ser utilizado tanto para patrulhamento quanto por grupos especiais. Equipamento resistente com design inovador, fabricado em aço temperado com acabamento em pintura eletrostática preta. Versão compacta de 50cm com duas alças emborrachadas posicionadas transversalmente para melhor manuseio e absorção de impacto. As ponteiras de polímero garantem segurança e durabilidade. Isolamento elétrico conforme normas ABNT NBR IEC 60060-1-2013, proporcionando proteção de até 50.000V (50kV). Ideal para operações que exigem agilidade e precisão.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '50cm',
      'Diâmetro do tubo': '11,5cm',
      'Diâmetro da alca': '2,54cm',
      Peso: '8kg',
    },
    price: 0,
    images: [baseImagePath + 'ariete-tatico.png'],
  },
  {
    slug: 'ariete-tatico-75',
    active: true,
    title: 'Ariete tático 2 alças 75cm para policial',
    categories: [ProductCategory.POLICIAL],
    description:
      'O aríete foi projetado especificamente para o uso policial, sendo versátil em diversas operações. Desenvolvido para fácil transporte, pode ser acondicionado em viaturas e carregado em uma bandoleira. Com uma construção robusta e design inovador, ele é fabricado em polímero usinado com cortes e medidas precisas. Nas extremidades, há ponteiras de nylon fixadas de forma segura. Seu peso e tamanho foram cuidadosamente planejados para garantir força suficiente para romper portas internas e externas, mesmo aquelas com fechaduras complexas, como tetra-chaves. Uma de suas principais características é o sistema de neutralização de rebote, que utiliza a inércia para eliminar o efeito de ação e reação, protegendo o braço do operador de qualquer desconforto causado pelo impacto. O aríete conta com duas alças emborrachadas de alta resistência, capazes de suportar temperaturas entre -20° e 90°C. Semi-flexíveis e estrategicamente posicionadas transversalmente ao tubo, essas alças facilitam o manuseio e ajudam a absorver o impacto. Elas oferecem excelente aderência, mesmo quando o operador está utilizando luvas, em ambientes úmidos ou com presença de óleo ou sangue. Além disso, as ponteiras de nylon e o revestimento emborrachado das alças tornam o equipamento eletricamente isolado até 100.000 volts AC, atendendo às normas ABNT NBR IEC 60060-1/2013, ASTM 1826, ASTM F711 e IEC-60855. O aríete também é autoextinguível e anti-faíscas. A alça traseira foi posicionada de modo a evitar qualquer risco de esmagamento da mão do operador durante o uso.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '75cm',
      'Diâmetro do tubo': '11,5cm',
      'Diâmetro da alca': '2,54cm',
      Peso: '15kg',
    },
    price: 0,
    images: [baseImagePath + 'ariete-tatico.png'],
  },
  {
    slug: 'ariete-tatico-1-alca',
    active: true,
    title: 'Ariete tático 1 alça para policial',
    categories: [ProductCategory.POLICIAL],
    description:
      'Aríete tático desenvolvido exclusivamente para uso policial, otimizado para operações especiais que exigem força e precisão. Ferramenta a ser empregada durante ações táticas de arrombamento de diversos obstáculos. Foi projetado com tecnologia avançada de absorção de impacto e sistema de neutralização de rebote, protegendo o operador durante o uso. Construído em aço temperado de alta resistência com acabamento em pintura eletrostática preta e pontas de polímero. Equipado com alça ergonômica de alta aderência, permitindo controle total durante operações. Isolado eletricamente e anti-fagulha, conforme normas ASTM e IEC.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '60cm',
      'Diâmetro do tubo': '11,5cm',
      'Diâmetro da alca': '2,54cm',
      Peso: '12kg',
    },
    price: 0,
    images: [baseImagePath + 'Image (5).png'],
  },
  {
    slug: 'barco-inflavel',
    active: true,
    title: 'Barco Inflável de poliéster em borracha',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Este barco inflável é especialmente projetado para operações de resgate realizadas por equipes de bombeiros. Com uma estrutura robusta de poliéster emborrachado ele oferece durabilidade e resistência em situações de emergência, capaz de acomodar até nove pessoas e suportar uma carga total de 1200 kg. Equipado com acessórios essenciais como remos e kit de reparo, ele garante prontidão e eficiência em qualquer operação de salvamento.',
    descriptionHTML: '',
    details: {
      'Tipo de Material': 'Tecido de poliéster emborrachado',
      Comprimento: '4,70 m',
      'Largura Externa': '1,90 m',
      'Capacidade de Passageiros': '9 pessoas',
      'Material do Fundo': 'Tecido reforçado de poliéster emborrachado',
      'Potência do Motor': '20 a 50 HP',
      'Características Adicionais':
        'Quilha inflável para maior estabilidade e controle',
      'Capacidade de Carga': '1200 kg máximo',
      'Acessórios Inclusos':
        'Par de remos, kit de reparo e foles de enchimento',
    },
    price: 0,
    images: [baseImagePath + 'barco-inflavel.png'],
  },
  {
    slug: 'bota-neoprene',
    active: false,
    title: 'Bota Neoprene com forro duplo nylon',
    categories: [ProductCategory.RESGATE],
    description:
      'Aba de proteção interna para maior vedação. Reforço de borracha no peito do pé e calcanhar. Solado vulcanizado antiderrapante. Fechamento em velcro para prevenir que o zíper desça durante o uso',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Borracha',
      Tamanhos: '34 a 37',
    },
    price: 0,
    images: [baseImagePath + 'bota-neoprene.png'],
  },
  {
    slug: 'bote-inflavel',
    active: true,
    title: 'Bote Inflável Capacidade 9 passageiros',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Bote inflável desenvolvido especificamente para operações de resgate por equipes de bombeiros. Construído em material resistente de poliéster emborrachado para máxima durabilidade em condições extremas. Capacidade para 9 passageiros com carga máxima de 1200 kg. Design com quilha inflável oferece estabilidade superior em águas agitadas. Equipado com remos e kit completo de reparo para operações de emergência aquática.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Poliéster',
      Comprimento: '4,7m',
      Passageiros: '9',
      Peso: '1,2kg',
    },
    price: 0,
    images: [baseImagePath + 'bote-inflavel.png'],
  },
  {
    slug: 'caixa-desmuniciamento',
    active: true,
    title: 'Caixa Desmuniciamento',
    categories: [ProductCategory.POLICIAL],
    description: 'Medidas conforme a necessidade do cliente.',
    descriptionHTML: '',
    details: {
      'Fabricado em': '-',
      Comprimento: '-',
      Peso: '-',
    },
    price: 0,
    images: [
      baseImagePath + 'caixa-desmuniciamento.png',
      baseImagePath + 'caixa-desmuniciamento-2.png',
    ],
  },
  {
    slug: 'capuz-neoprene',
    active: false,
    title: 'Capuz Neoprene em borracha',
    categories: [ProductCategory.RESGATE],
    description:
      'Capuz-01 Fun Dive, Capuz de neoprene 3 mm para mergulho pesca ou esportes aquáticos. Contorno interno em borracha selante para face',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Borracha',
      Tamanhos: 'S, M, L, XL, 2XL e 3XL',
    },
    price: 0,
    images: [baseImagePath + 'capuz-neoprene.png'],
  },
  {
    slug: 'cilindro-mergulho',
    active: true,
    title: 'Cilindro de mergulho em alumínio',
    categories: [ProductCategory.RESGATE],
    description:
      'Equipamento destinado para operações de salvamento e resgate de vítimas de arrastamento, afogamento e naufrágios.',
    descriptionHTML: `
      <h3>Especificações</h3>
      <p>Cilindro para mergulho em alumínio 12L S80 com válvula 3000 PSI, componente essencial para mergulho seguro e eficaz. Projetado para armazenar ar sob pressão, permitindo respiração subaquática segura.</p>
      <p>Capacidade de 12 litros e pressão de 3000 PSI para experiência de mergulho prolongada. Construção em alumínio resistente à corrosão marinha.</p>
      <p><strong>Recomendações:</strong> É essencial manter o interior do cilindro livre de umidade, óleo, sujeira e outros contaminantes para garantir a qualidade do ar respirável durante o mergulho.</p>
      
      <h3>Bolsa</h3>
      <p>Confeccionada em material resistente à água, com dimensões adequadas para armazenamento e transporte seguro do cilindro. Inclui alças acolchoadas e sistema de fixação para evitar movimentação durante o transporte.</p>
    `,
    details: {
      'Fabricado em': 'Alumínio',
      Litros: '12L',
      'Pressão de serviço': '3000',
    },
    price: 0,
    images: [baseImagePath + 'cilindro-mergulho.png'],
  },
  {
    slug: 'cinto-pelvico',
    active: true,
    title: 'Cinto Pélvico',
    categories: [ProductCategory.RESGATE],
    description:
      'O cinto pélvico é um cinturão pélvico circunferencial, projetado para estabilizar fraturas pélvicas em livro aberto em caso de lesão pélvica traumática. Cientificamente e clinicamente comprovado para fornecer força segura e eficaz para estabilizar fraturas pélvicas.O fecho mantém a força correta; não pode ser apertado em excesso <br>O “clique” fornece feedback claro para confirmar a aplicação correta <br>Puxar gradualmente e simetricamente aumenta a tensão e reduz a pelve <br>Radio transparente( permitindo raios-X e tomográficas sem remoção ) <br>Facilidade de aplicação : Basta inserir o cinto através do fecho , puxar a alça e prender <br>Velcro na alça e no cinto para fixação rápida e fácil <br> DISPONÍVEL EM 3 TAMANHOS <br>PEQUENO : <br>Circunferência do quadril 27-45’’/69-114cm <br>PADRÃO : <br>Circunferência do quadril 32-50’’/81-127cm <br>(Militar Padrão) <br>GRANDE : <br>Circunferência do quadril 36-54’’/91-137cm',
    descriptionHTML: `O cinto pélvico é um cinturão pélvico circunferencial, projetado para estabilizar fraturas pélvicas em livro aberto em caso de lesão pélvica traumática. Cientificamente e clinicamente comprovado para fornecer força segura e eficaz para estabilizar fraturas pélvicas.<br/> O fecho mantém a força correta; não pode ser apertado em excesso.<br/> O “clique” fornece feedback claro para confirmar a aplicação correta.<br/> Puxar gradualmente e simetricamente aumenta a tensão e reduz a pelve.<br/> Radio transparente (permitindo raios-X e tomográficas sem remoção).<br/> Facilidade de aplicação : Basta inserir o cinto através do fecho, puxar a alça e prender.<br/> Velcro na alça e no cinto para fixação rápida e fácil.<br/> <br/> DISPONÍVEL EM 3 TAMANHOS<br/> PEQUENO : Circunferência do quadril 27-45''/69-114cm<br/> PADRÃO : Circunferência do quadril 32-50''/81-127cm (Militar Padrão)<br/> GRANDE : Circunferência do quadril 36-54''/91-137cm<br/>`,
    details: {
      'Fabricado em': 'Tecido macio',
      Tamanhos: 'S,M,L',
      Peso: '350g',
    },
    price: 0,
    images: [
      baseImagePath + 'cinto-pelvico.png',
      baseImagePath + 'cinto-pelvico-2.png',
      baseImagePath + 'cinto-pelvico-3.png',
      baseImagePath + 'cinto-pelvico-details.png',
    ],
  },
  {
    slug: 'colete-salva-vidas',
    active: false,
    title: 'Colete salva-vidas inflável',
    categories: [ProductCategory.RESGATE],
    description:
      'Os coletes salva-vidas infláveis são feitos de tecido de nylon + composto de TPU de poliéster e são formados por prensagem a quente de alta frequência. O aribag é equipado com um cartucho sensível á água e conectado a um cilindro de gás. Quando o colete salva-vidas inflável é exposto á água, ele se abre automaticamente para formar um airbag dentro de 3-5 segundos, alcançando o propósito de salvamento. Este produto tem as vantagens de ser leve, de tamanho pequeno, de centragem automática na água e de uso conveniente. Foi reconhecido pela indústria naval como uma nova alternativa aos coletes salva-vidas tradicionais de espuma.',
    descriptionHTML: `Os coletes salva-vidas infláveis são feitos de tecido de nylon + composto de TPU de poliéster e são formados por prensagem a quente de alta frequência. O aribag é equipado com um cartucho sensível á água e conectado a um cilindro de gás. Quando o colete salva-vidas inflável é exposto á água, ele se abre automaticamente para formar um airbag dentro de 3-5 segundos, alcançando o propósito de salvamento. Este produto tem as vantagens de ser leve, de tamanho pequeno, de centragem automática na água e de uso conveniente. Foi reconhecido pela indústria naval como uma nova alternativa aos coletes salva-vidas tradicionais de espuma.<br/> <br/> CICLOS DE TESTE:<br/> Sem sinais de danos apos dez ciclos de testes com temperaturas ambiente de -30°C a 65°C, como encolhimento, rachaduras, <br/>inchaço, decomposição ou mudanças nas propriedades mecânicas.<br/> <br/> RESISTENCIA Á PRESSÃO DO AIRBAG:<br/> Pressão de resistência: 40kPa<br/> Pressão de trabalho: 10-15KPa<br/> <br/> CILINDRO:<br/> Tamanho: 33g X 1 unidade<br/> Conector de rosca do cilindro: Rosca imperial de 1/2 polegada<br/> <br/> RESISTÊNCIA DO CORPO OU DO ANEL DE ELEVAÇÃO: 3200N<br/> <br/> RESISTÊNCIA DOS OMBROS: 900N<br/> <br/> FORÇA DE FIXAÇÃO DO APITO: 225N<br/>`,
    details: {
      'Fabricado em': 'Nylon',
      Flutuabilidade: '150N',
      'Temp de inflação': '5s',
      'Duração de Flutuação': '24H',
      Certificação: 'CCS/CE',
      Peso: '1kg',
    },
    price: 0,
    images: [
      baseImagePath + 'colete-salva-vidas.png',
      baseImagePath + 'colete-salva-vidas-2.png',
    ],
  },
  {
    slug: 'enxada-rastelo',
    active: true,
    title: 'Ferramenta combinada Enxada/Rastelo MC Lead',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta de uso verátil combinando em uma só peça, enxada e rastelo de alta resistência. Útil para l impar materiais inflaáveis por terra, abrindo pequenas faixas ou removendo detri os, para cavar pequenas valas, rastelar dentre outros. Possui cabo de madeira de 150 cm de comprimento e lâmina resistente com 6 dentes de aproximadamente 9 cm para máxima eficiência.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Madeira',
      Comprimento: '125cm',
      Peso: '2,3kg',
      Dentes: '6 dentes de 9cm',
    },
    price: 0,
    images: [baseImagePath + 'enxada-rastelo.png'],
  },
  {
    slug: 'equipamento-respiracao',
    active: true,
    title:
      'Aparelho de Respiração autônoma 6.8L Fibra C/ Corona Modelo: RHZ/ (6.8) (Máscara Dupla+Válvula de Máscara)',
    categories: [ProductCategory.BOMBEIRO],
    description:
      "Aparelho de respiração autônoma com máscara facial completa, proteção antiembaçante e antirreflexo. Válvula de gás compacta com grande fluxo. Placa traseira leve e resistente. Redutor de pressão com válvula de segurança integrada. Manômetro à prova d'água e choque. Inclui cilindro de fibra de carbono 6.8L, máscaras, conexões e caixa de transporte.",
    descriptionHTML:
      '<strong>Características</strong><br><br>' +
      '• Máscara facial com proteção contra embaçamento, antirreflexo, amplo campo de visão, boa vedação e uso confortável<br>' +
      '• Válvula de fornecimento de gás compacta, possui grande fluxo de gás e não interfere na visão do usuário<br>' +
      '• Placa traseira leve e de alta resistência, projetada para uso confortável e prático<br>' +
      '• Redutor de pressão com válvula de segurança embutida, sem dispositivo de ajuste, livre de manutenção e com interface de reserva<br>' +
      "• Manômetro leve à prova d'água e à choque, com exibição luminosa e preço preciso<br>" +
      '• Válvula da garrafa equipada com dispositivo de contra alavanca para evitar fechamento acidental durante o uso<br><br>' +
      '<strong>Acessórios</strong><br><br>' +
      '• 02 Máscaras faciais completas<br>' +
      '• 01 Conexão "Y" para carona do aparelho de respiração<br>' +
      '• 01 Cilindro de Fibra de Carbono 6.8L 300 PSI com válvula reguladora de pressão e manômetro<br>' +
      '• 01 Arnês (suporte para o cilindro) com manômetro<br>' +
      '• 02 Válvulas de demanda com mangueira reguladora<br>' +
      '• 01 Caixa para armazenamento e transporte<br><br>' +
      '<strong>Aplicação</strong><br><br>' +
      'Adequado para bombeiros ou trabalhadores de resgate em ambientes tóxicos ou prejudiciais, contendo substâncias nocivas como fumaça, oxigênio e outros. Proporciona proteção respiratória eficaz aos usuários<br><br>' +
      '<strong>Área de Uso</strong><br><br>' +
      'Amplamente utilizado em áreas como proteção contra incêndio, energia elétrica, indústria química, construção naval, fundição, armazenamento, laboratórios, mineração e outros setores<br><br>' +
      '<strong>Especificações</strong><br><br>' +
      '• Campo visual da máscara de gás > 96%<br>' +
      '• Inalação: 30 L/min<br>' +
      '• Material interno do cilindro: Fibra de Carbono<br>' +
      '• Capacidade do cilindro: 2040 L (6,8)<br>' +
      '• Resistência à exalação: < 1000 Pa<br>' +
      '• Resistência à inalação: < 500 Pa<br>' +
      '• Temperatura de operação: -30°C a 60°C<br>' +
      '• Pressão do alarme: 5.5 MPa<br>' +
      '• Pressão de trabalho: 300 Pa<br>' +
      '• Tempo de serviço: 55 – 60 min<br>' +
      '• Som do alarme: 90 dB<br>' +
      '• Peso: 18 kg<br>' +
      '• Embalagem: Estojo plástico (preto ou laranja)<br><br>' +
      '<strong>Certificação</strong><br><br>' +
      '• EN 137:2006, EN 136:1998<br>' +
      '• Certificado de Aprovação – C.A nº 52.013',
    details: {
      'Campo visual da máscara': '> 96%',
      Inalação: '30 L/min',
      'Material do cilindro': 'Fibra de Carbono',
      'Capacidade do cilindro': '2040L (6,8L)',
      'Resistência à exalação': '< 1000 Pa',
      'Resistência à inalação': '< 500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Pressão do alarme': '5.5 MPa',
      'Pressão de trabalho': '300 Pa',
      'Tempo de serviço': '55 – 60 min',
      'Som do alarme': '90 dB',
      Peso: '18 kg',
      Embalagem: 'Estojo plástico (preto ou laranja)',
      Certificação: 'EN 137:2006, EN 136:1998, C.A nº 52.013',
    },
    price: 0,
    images: [baseImagePath + 'Image (8).png'],
  },
  {
    slug: 'gancho',
    active: true,
    title: 'Gancho Crock de bombeiros',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Equipamento destinado ao combate a incêndio, arrombamento , rescaldo e remoção de materiais (impulso e tração). Gancho fundido e enriquecido em duro alumínio, pontiagudo e tracionante. Bastão de tubo de alumínio com diâmetro de 1 ¼” revestida com borracha de PU ou fibra de vidro, impregnado com resina epóxi e protegido internamente com o núcleo de poliuretano, proporcionando melhor isolamento térmico e elétrico.',
    descriptionHTML: '',
    details: {
      Tipo: 'Peça única ou articulada',
      Comprimento: 'de 2,60mts a 3mts',
      'Peso Aproximado': '2kg',
    },
    price: 0,
    images: [baseImagePath + 'gancho.png'],
  },
  {
    slug: 'gorgui',
    active: true,
    title: 'GORGUI (Equipamento multifuncional)',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta multifuncional para cortar, raspar, cavar e sufocar materiais (em rescaldo). Concebida com cabo de madeira sólido fixado por parafusos e porcas autotravantes à lâmina, fabricada em aço SAE 1045 com dureza de 42 a 46 RC, temperada e afiada com 10° nos lados. Possui funções individualizadas que conferem multifuncionalidade, eliminando a necessidade de transportar diversas ferramentas. Ideal para equipes helitransportadas, com facilidade de remoção da lâmina para manutenção.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Madeira',
      Medidas: '1240x35mm (cabo)',
      Lamina: '14x34cm',
      Peso: '2,5kg',
      Funções: 'Rastelo, Enxada , Enxadão',
    },
    price: 0,
    images: [baseImagePath + 'gorgui.png'],
  },
  {
    slug: 'kit-arrombamento',
    active: false,
    title: 'Kit de Arrombamento',
    categories: [ProductCategory.POLICIAL],
    description:
      'O kit contempla a mochila de transporte, um aríete ou a marreta, uma alavanca e um alicate (corta frio).',
    descriptionHTML: `<strong>Alavanca (hooligan).</strong> <p>Construído em Aço;</p> <p> Equipamento isolado eletricamente e não condutivo (pintura eletrostática); </p> <p>Comprimento mínimo de 60 cm e máximo de 70 cm;</p> <p>Peso máximo: 5 kg;</p> <br/> <strong>Aríete.</strong> <p>Construído em Aço;</p> <p> Equipamento isolado eletricamente e não condutivo (pintura eletrostática) e antifagulha; </p> <p>Comprimento mínimo de 50 cm e máximo de 70 cm;</p> <p> Diâmetro mínimo do tubo de 11,5 cm. O tamanho e o peso determinado para fornecer mais de 300kg de força cinética; </p> <p>Peso máximo: 12 kg;</p> <p> possuir alça de fácil manuseio, com boa aderência mesmo utilizando luvas, molhado, em contato com óleo; </p> <p>cor preta;</p> <br/> <strong>Alicate de Arrombamento.</strong> <p>Construído em Aço;</p> <p> Equipamento isolado eletricamente e não condutivo (pintura eletrostática); </p> <p>Comprimento mínimo de 60 cm e máximo de 70 cm;</p> <p>Peso máximo: 5 kg;</p> <p> Deve possuir boa aderência mesmo utilizando luvas, molhado, em contato com óleo; </p> <p> Deve ter força suficiente para cortar correntes, barras, estruturas metálicas e cadeados com dureza até 50 HRC (escala Rockwell) ou seja, capacidade máxima de corte de 5/16 ou 8 mm; </p> <p>cor preta</p> <br/> <strong>Mochila de Transporte.</strong> <p>Fabricação em Nylon;</p> <p> Leve e flexível, porém extremamente resistente e compacta, construída no mínimo em nylon 1000D (Cordura®) resinado, totalmente impermeável e resistente a hidrolise; </p> <p> Com capacidade para acondicionar e transportar com segurança a Alavanca, o Aríete e o Alicate, fornecidos no kit; </p> <p>Com fitas reguláveis;</p> <p>Ajustes de cintura e ombros;</p> <p> Possui 3 (três) bolsos distintos, destinados ao encaixe e acondicionamento de cada ferramenta, tendo o bolso central destinado a ferramenta mais pesada, no caso a aríete; </p> <p> ferramentas protegidas por 2 (duas) abas de nylon 1000D (Cordura®), que ajudam na fixação e estabilização das ferramentas; </p> <p>cor preta;</p>`,
    details: {
      'Fabricado em': 'Nylon',
      Peso: '1kg',
    },
    price: 0,
    images: [baseImagePath + 'kit-arrombamento.png'],
  },
  {
    slug: 'laco-cambao',
    active: true,
    title: 'Laço cambão confeccionado em alumínio',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Laço tipo cambão confeccionado em alumínio de alta resistência com cabo em aço encapado. Utilizado para captura e imobilização de animais com cabo que se adapta através do dispositivo de travamento mecânico e soltura do laço rápida e segura. Medidas: 150 cm de comprimento, peso de 1.125g.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Alumínio',
      Comprimento: '120cm:1000G e 150cm:1250G',
      Peso: '1125gr',
    },
    price: 0,
    images: [baseImagePath + 'laco-cambao.png'],
  },
  {
    slug: 'luva-neoprene',
    active: false,
    title: 'Luva Neoprene com forro em duplo nylon',
    categories: [ProductCategory.RESGATE],
    description:
      'Luva para mergulho em neoprene 2 ou 3 mm com forro em duplo nylon. Palma da mão e dedos com reforço em couro sintético "Amara". Tira elástica com velcro para melhor fechamento e fixação no punho.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Nylon',
    },
    price: 0,
    images: [baseImagePath + 'luva-neoprene.png'],
  },
  {
    slug: 'machado-picareta',
    active: true,
    title: 'Ferramenta combinada Machado/Picareta Pulaski',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta especializada desenvolvida para uso em combate a incêndios e modificação de terreno, combinando as funcionalidades de machado e picareta em uma só peça de alta resistência. Possui lâmina de aço forjado de alta qualidade para corte eficiente de madeira e um lado pontiagudo para cavar e penetrar em superfícies duras. Cabo de madeira ergonômico de 90cm proporciona equilíbrio ideal entre força e controle.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '90cm',
      Peso: '2,9kg',
    },
    price: 0,
    images: [baseImagePath + 'machado-picareta.png'],
  },
  {
    slug: 'marreta',
    active: true,
    title: 'Marreta Tática 60cm',
    categories: [ProductCategory.POLICIAL],
    description:
      'A Marreta foi criada especialmente para uso policial , sendo adequada tanto para patrulhas diárias quanto para operações de grupos especializados . Trata-se de uma ferramenta altamente resistente, com um design inovador, fabricada em aço usinado com cortes e dimensões precisas, e finalizada com pintura eletrostática Este equipamento é projetado para quebrar portas internas , travas , dobradiças , além de ajudar na abertura de estruturas . Capaz de gerar uma força cinética superior a 150kg, a marreta é uma aliada poderosa em operações táticas A ferramenta conta ainda com uma empunhadura em tubo isolante feito de fibra de vidro, impregnado com resina epóxi ao longo de toda sua extensão, proporcionando excelente aderência , mesmo com o uso de luvas , ou quando exposta a água , óleo ou sangue. A proteção nas laterais evita que as mãos do operador escorreguem para as extremidades ',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço',
      'Diâmetro do tubo': '3,5cm',
      Comprimento: '60cm',
      Cor: 'Preto',
    },
    price: 0,
    images: [baseImagePath + 'marreta.png'],
  },
  {
    slug: 'passador-nivel',
    active: true,
    title: 'Passador de nível para mangueira',
    categories: [ProductCategory.BOMBEIRO],
    description: `Equipamento fabricado em ferro fundido na cor preta com CT faixas na cor amarela para melhor visualização, utilizado para a proteção da mangueira de combate a incêndio quando da necessidade de transportá-la com o caminhão. Medidas: comprimento 76 cm, largura aproximada 42 cm, altura aproximada 9 cm, vão para encaixe das mangueiras de 1½" e 2½", aproximadamente 11 cm, peso máximo de 23 kg.`,
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Ferro',
      'Comprimento aproximado': '76cm',
      'Largura aproximada': '42cm',
      'Altura aproximada': '9cm',
      'Largura e altura do vão para encaixe das mangueiras':
        'De 1½" e 2½" de aproximadamente 11 cm',
      'Possui duas alças laterais em ferro para transporte': '',
      Peso: '23kg',
    },
    price: 0,
    images: [baseImagePath + 'passador-nivel.png'],
  },

  {
    slug: 'rastelo',
    active: true,
    title: 'Rastelo para remoção de material vegetal',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta especial para uso em combate a incêndios, projetada de terminar material de apo de alta temperatura, com 4 dentes, capaz de cortar e rastelar. Ferramenta desenvolvida projetada para a remoção de material vegetal no abertura de aceiros, corta e rastela com facilidade e eficiência, resistente e durável. Produzida em aço tratado, lâminas com pequenas estrias e com acabamento em pintura, sendo efetivamente em pintura ou galvanizada.',
    descriptionHTML: '',
    details: {
      Cabo: 'Reto, de Madeira',
      'Indicado para a construção de aceiros': '',
      'Corta e rastela material combustível abrindo caixas corta fogo': '',
      'Também disponível em cabo de fibra': '',
      Comprimento: '150cm',
      Peso: '1,4kg',
    },
    price: 0,
    images: [baseImagePath + 'Rastelo-1-Photoroom 1 1.png'],
  },
  {
    slug: 'roupa-neoprene',
    active: false,
    title: 'Roupa Neoprene costurada e colada',
    categories: [ProductCategory.RESGATE],
    description:
      'Roupa neoprene 5mm leve e confortável costurada e colada, impossibilitando a passagem de água pelas costuras zipper frontal ykk tamanho 10, fácil de manusear e resistente ombros texturizados em borracha para evitar desgaste por uso com colete joelheiras em supratex tamanhos: S, M, L, XL, 2XL E 3XL',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Borracha',
      Tamanhos: 'S, M, L, XL, 2XL E 3XL',
    },
    price: 0,
    images: [baseImagePath + 'roupa-neoprene.png'],
  },
  {
    slug: 'suporte-colunas',
    active: true,
    title: 'Suporte Coluna Veicular',
    categories: [ProductCategory.RESGATE],
    description:
      'Suporte para coluna veicular em ferro, complemento de soleira com encaixe para cilindros de resgate na cor amarelo. Peso 10kg. Equipamento essencial para estabilização de veículos durante operações de resgate, proporcionando segurança e eficiência no trabalho das equipes de emergência.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Ferro',
      Comprimento: '-',
      Peso: '10kg',
    },
    price: 0,
    images: [baseImagePath + 'suporte-colunas.png'],
  },
  {
    slug: 'suporte-lanterna',
    active: true,
    title: 'Suporte lanterna Propolymer 4AA 27x37',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Suporte adaptador metálico fabricado em alumínio com pintura a pó na cor preta para uso da lanterna Propolymer 4AA LEDS stream light em capacete MSA Gallet F1 SF. Dimensões 27x37mm, peso 454g. Projetado especificamente para integração perfeita com equipamentos de proteção individual dos bombeiros.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Alumínio',
      Dimensões: '27x37mm',
      Peso: '454g',
    },
    price: 0,
    images: [
      baseImagePath + 'suporte-lanterna.png',
      baseImagePath + 'suporte-lanterna-2.png',
    ],
  },
  {
    slug: 'suporte-painel',
    active: true,
    title: 'Suporte para pressão - Painel',
    categories: [ProductCategory.RESGATE],
    description:
      'Suporte para painel em ferro, complemento de soleira com encaixe para cilindros de resgate na cor amarelo. Peso 5kg. Projetado para distribuição de pressão em painéis durante operações de resgate veicular, proporcionando estabilidade e segurança.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Ferro',
      Comprimento: '-',
      Peso: '5kg',
    },
    price: 0,
    images: [baseImagePath + 'suporte-painel.png'],
  },
  {
    slug: 'suporte-teto',
    active: true,
    title: 'Suporte para pressão - Teto',
    categories: [ProductCategory.RESGATE],
    description:
      'Suporte para teto em ferro, complemento de soleira com encaixe para cilindros de resgate na cor amarelo. Peso 5kg. Equipamento projetado para distribuição de pressão em tetos durante operações de resgate veicular, garantindo estabilidade estrutural.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Ferro',
      Comprimento: '-',
      Peso: '5kg',
    },
    price: 0,
    images: [baseImagePath + 'suporte-teto.png'],
  },
  {
    slug: 'torniquete',
    active: true,
    title: 'Torniquete',
    categories: [ProductCategory.RESGATE],
    description:
      'Torniquete é um dispositivo médico projetado para controlar hemorragias graves em situações de emergência. Desenvolvido com design exclusivo e materiais duráveis para aplicação eficaz e rápida em primeiros socorros. Fácil de manusear, garante pressão adequada para interromper fluxo sanguíneo, crucial para salvar vidas em cenários de trauma. Fivela aprimorada assegura uso seguro mesmo em condições climáticas extremas. Inclui tira de tempo para registrar momento da aplicação.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Nylon',
      Comprimento: '3,8*96cm',
      Peso: '82g',
      Cores: 'Preto/Laranja/Azul/Bege/Camuflagem/Cor Personalizada',
      Haste: 'Metal e Plástico',
      Certificação: 'CE/ISO',
      'Material Durável': 'Alta resistência e confiabilidade',
      'Design Exclusivo': 'Facilita aplicação rápida e eficaz',
      'Fivela Aprimorada': 'Funciona em condições extremas',
      'Faixa Ajustável': 'Envolvimento firme do membro',
      'Haste Metálica': 'Aplica pressão necessária',
      'Tira de TEMPO': 'Registra o momento da aplicação',
      'Tamanho Versátil': 'Adequado para diversos tamanhos de membros',
      'Opções de Cor': 'Disponível em várias cores',
      'Fácil Manuseio': 'Intuitivo para todos os usuários',
      Compatibilidade: 'Pode ser usado com outro torniquete',
    },
    price: 0,
    images: [
      baseImagePath + 'torniquete.png',
      baseImagePath + 'torniquete-2.png',
      baseImagePath + 'torniquete-details.png',
    ],
  },
  {
    slug: 'mochila-arrombamento', // falta a description
    active: true,
    title: 'Mochila de Arrombamento',
    categories: [ProductCategory.POLICIAL],
    description:
      'Mochila desenvolvida para o serviço policial com compartimentos específicos para transporte e armazenamento de ferramentas de arrombamento. Design compacto e leve, focado na mobilidade e conforto do operador. Estrutura interna pré-moldada em EVA para sustentação ergonômica. Possui 3 ou 4 bolsos com sistema de ajuste múltiplo, bolso central para ferramentas pesadas (aríete ou marreta), alças anatômicas acolchoadas em nylon 1000D Cordura® e ajustes reguláveis de ombros e cintura para distribuição equilibrada do peso.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Nylon 1000D',
      Comprimento: '60cm',
      Largura: '60cm',
      Peso: '1,5kg',
    },
    price: 0,
    images: [
      baseImagePath + 'mochila-arrombamento.png',
      baseImagePath + 'mochila-arrombamento2.png',
    ],
  },
  {
    slug: 'cesto-resgate',
    active: true,
    title: 'Cesto de Resgate puça',
    categories: [ProductCategory.RESGATE],
    description:
      'Equipamento destinado para operações de salvamento e resgate de vítimas de arrastamento, afogamento e naufrágios. Cesto composto por dois aros de alumínio (120cm e 80cm de circunferência) revestidos por rede de nylon seda 4mm com malhas de 8cm. Capacidade para 500kg ou 3 pessoas. Inclui flutuadores de polipex, solas protetoras em borracha EVA, estropo de 5 toneladas e bolsa para transporte em vinil flexível.',
    descriptionHTML: '',
    details: {
      'Aro Superior': '120 cm de circunferência',
      'Aro Inferior': '80 cm de circunferência',
      'Altura Total': '150 cm',
      'Peso Total': '20 kg',
      'Capacidade de Carga': '500 kg ou 03 pessoas',
      Rede: 'Nylon seda 4mm com malhas de 8cm',
      Alças:
        '04 alças de poliéster de 50mm, com carga de ruptura de 2 toneladas',
      'Cintas Laterais':
        '06 cintas de poliéster de 50mm, com carga de ruptura de 2 toneladas',
      Estropo:
        '01 estropo de poliéster de 50mm, com carga de ruptura de 5 toneladas',
      Argola: 'Oval em aço forjado com capacidade de carga para 1,5 toneladas',
      'Gancho com Destorcedor': 'Em aço forjado para carga de 1,5 toneladas',
      Flutuador: 'Polipex',
      Solas: 'Borracha EVA',
      Bolsa:
        'Vinil flexível com zíper nº 10, dimensões de 420 cm x 130 cm x 15 cm',
    },
    price: 0,
    images: [baseImagePath + 'cesto-resgate.png'],
  },
  {
    slug: 'cesto-resgate-aereo',
    active: true,
    title: 'Cesto de Resgate Aéreo',
    categories: [ProductCategory.RESGATE],
    description:
      'Equipamento destinado para operações de salvamento e resgate de vítimas em altura, afogamentos e naufrágios a locais de difícil acesso.',
    descriptionHTML:
      '<strong>Descrição</strong><br><br>' +
      'Equipamento destinado para operações de salvamento e resgate de vítimas em altura, afogamentos e naufrágios a locais de difícil acesso.<br><br>' +
      '<strong>Estrutura Geral</strong><br><br>' +
      '<strong>Aros</strong><br><br>' +
      '<strong>Aro Superior</strong><br><br>' +
      '• Material: Tubular de alumínio, 1" (uma polegada) de diâmetro externo e 1/8" (um oitavo) de polegada de espessura<br>' +
      '• Dimensão: 70 cm (setenta centímetros) de diâmetro<br>' +
      '• Revestimento: Espuma de polipropileno para proteção contra impactos<br>' +
      '• Sustentação: Cinco cintas de poliéster (50 cm cada) distribuídas igualmente<br>' +
      '• Cintas superiores: Poliéster de 35 mm com capacidade de carga para 2 toneladas<br>' +
      '• Argola de conexão: Para fixação do estropo<br><br>' +
      '<strong>Aro Inferior</strong><br><br>' +
      '• Material: Tubular de alumínio com revestimento de cordim branco de poliamida de 3,5 mm<br>' +
      '• Dimensão: 100 cm (cem centímetros) de diâmetro externo<br>' +
      '• Proteção: Mangueira de PVC transparente contra abrasão<br>' +
      '• Conexão: Ligado ao aro superior por cintas de poliéster de 35 mm (capacidade de 2 toneladas), duplicadas e costuradas<br><br>' +
      '<strong>Corpo de Sustentação</strong><br><br>' +
      '• Composto por 9 cintas de poliéster (35 mm de largura, capacidade de 2 toneladas)<br>' +
      '• Comprimento das cintas: 210 cm (duzentos e dez centímetros)<br>' +
      '• Estrutura: Abertura de 40 cm (quarenta centímetros) servindo como porta de entrada/saída<br>' +
      '• Função: Costuras que unem as cintas do aro inferior<br><br>' +
      '<strong>Piso do Cesto</strong><br><br>' +
      '• Material: Rede de malha tipo "pescador" em nylon trançado de 3 mm de espessura<br>' +
      '• Reforço: Cintas de poliéster de 35 mm duplicadas e costuradas, com capacidade de 2 toneladas<br><br>' +
      '<strong>Estropo</strong><br><br>' +
      '• Material: Cinta de poliéster de 50 mm de largura, duplicada e costurada<br>' +
      '• Comprimento: 10 metros<br>' +
      '• Capacidade de carga: 5 toneladas<br>' +
      '• Extremidades:<br>' +
      '  • Uma alça com argola oval de aço (capacidade de 15 toneladas)<br>' +
      '  • Outra alça com destorcedor de aço forjado',
    details: {
      Material:
        'Tubular de alumínio, 1" (uma polegada) de diâmetro externo e 1/8" (um oitavo) de polegada de espessura',
      Dimensão: '70 cm (setenta centímetros) de diâmetro',
      Revestimento: 'Espuma de polipropileno para proteção contra impactos',
      Sustentação:
        'Cinco cintas de poliéster (50 cm cada) distribuídas igualmente',
      'Cintas superiores':
        'Poliéster de 35 mm com capacidade de carga para 2 toneladas',
      'Argola de conexão': 'Para fixação do estropo',
      'Material do Aro Inferior':
        'Tubular de alumínio com revestimento de cordim branco de poliamida de 3,5 mm',
      'Dimensão do Aro Inferior':
        '100 cm (cem centímetros) de diâmetro externo',
      'Proteção do Aro Inferior':
        'Mangueira de PVC transparente contra abrasão',
      'Conexão do Aro Inferior':
        'Ligado ao aro superior por cintas de poliéster de 35 mm (capacidade de 2 toneladas), duplicadas e costuradas',
      'Material da Proteção e Porta':
        'Rede de malha tipo "pescador" em nylon na cor azul',
      'Estrutura da Proteção e Porta':
        'Cintas de nylon (25 mm de largura, capacidade de 700 kgf) na cor preta',
      'Fechamento da Proteção e Porta':
        'Quatro mosquetões de aço inox fixados na estrutura do corpo do cesto',
      'Material da Bolsa de Acondicionamento e Transporte':
        'Lona de vinil na cor amarela com reforços',
      'Fechamento da Bolsa de Acondicionamento e Transporte': 'Zíper',
      'Drenagem da Bolsa de Acondicionamento e Transporte': 'Ilhós em latão',
      'Todas as cintas de Observações e Generalidades': 'Poliéster',
      'Acabamentos das cintas de Observações e Generalidades':
        'Fios de poliamida trançada (branca e amarela)',
      'Costuras das cintas de Observações e Generalidades':
        'Fios de nylon (brancos e pretos)',
      'Materiais metálicos das cintas de Observações e Generalidades':
        'Aço para trabalho de carga (exceto aros de alumínio e mosquetão)',
    },
    price: 0,
    images: [
      baseImagePath + 'cesto-resgate-aereo.png',
      baseImagePath + 'cesto-resgate-aereo2.png',
      baseImagePath + 'cesto-resgate-aereo3.png',
    ],
  },
  {
    slug: 'cinto-sling',
    active: true,
    title: 'Cinto Sling/ Cinto Multifuncional',
    categories: [ProductCategory.RESGATE],
    description:
      'Cinto de Resgate Sling oferece segurança máxima em operações de resgate, incluindo salvamento aquático e em altura. Fabricado em poliéster de alta tenacidade com capacidade para 2.000 kg. Design ergonômico facilita rápida colocação e ajuste, otimizando tempo de resposta. Projetado para bombeiros, equipes de resgate e profissionais de salvamento. Versátil para uso em água agitada, água parada, salvamento em alturas, retiradas de precipícios e áreas confinadas. Inclui espuma de polietileno para alta flutuação.',
    descriptionHTML: '',
    details: {
      'Cores disponiveis': 'vermelho ou amarelo',
      Peso: '1500 gramas',
      Tamanho: 'Diâmetro interno quando aberto de 50 cm',
      Material: 'Cordura 500',
      Fio: 'Nylon paraquedista',
      'Anel em D':
        'Aço de alta resistência com revestimento em PVC com 30 Kn de carga',
      Espuma: 'Polietileno de alta densidade, impermeável e com alta flutuação',
      Cintas: 'Polipropileno com 50mm com 20kn de carga',
      Velcro: '25 mm e 50mm na cor preta com costuras especiais',
      'Bolsa de transporte':
        'Toda em cordura 500 com ziper de nylon de alta resistência, tamanho 10',
    },
    price: 0,
    images: [
      baseImagePath + 'cinto-sling.png',
      baseImagePath + 'cinto-sling2.png',
      baseImagePath + 'cinto-sling3.png',
      baseImagePath + 'cinto-sling4.png',
    ],
  },
  {
    slug: 'colete-inflavel',
    active: true,
    title: 'Colete Salva Vidas Inflável',
    categories: [ProductCategory.RESGATE],
    description:
      'Colete salva-vidas inflável feito de tecido de nylon + composto de TPU de poliéster, formado por prensagem a quente de alta frequência. Airbag equipado com cartucho sensível à água conectado a cilindro de gás. Quando exposto à água, infla automaticamente em 3-5 segundos para salvamento. Vantagens: leve, compacto, centragem automática na água e uso conveniente. Reconhecido pela indústria naval como alternativa aos coletes tradicionais de espuma. Atende norma ISO12402-3:2006.',
    descriptionHTML:
      '<strong>Descrição Geral</strong><br><br>Os coletes salva-vidas infláveis são feitos de tecido de nylon + composto de TPU de poliéster e são formados por prensagem a quente de alta frequência.<br>O airbag é equipado com um cartucho sensível à água e conectado a um cilindro de gás. Quando o colete salva-vidas inflável é exposto à água, ele se abre automaticamente para formar um airbag dentro de 3-5 segundos, alcançando o propósito de salvamento.<br>Este produto tem as vantagens de ser leve, de tamanho pequeno, de centragem automática na água e de uso conveniente. Foi reconhecido pela indústria naval como uma nova alternativa aos coletes salva-vidas tradicionais de espuma.<br><br><strong>Parâmetros de Desempenho</strong><br><br>• Ciclos de Teste: Sem sinais de danos após dez ciclos de teste com temperatura ambiente de -30°C a 65°C, como estipulado, descompressão e mudanças nas propriedades microbianas<br>• Resistência de Integridade: Pressão de resistência: 40kPa<br>• Pressão de trabalho: 10-15kPa<br>• Cilindro: Tamanho 33g x 1 unidade<br>• Conector de rosca do cilindro: Rosca imperial de 1/2 polegada<br>• Capacidade de peso: 43kg - 140kg<br>• Resistência do Corpo ou do Anel de Elevação: ≥3200N<br>• Resistência dos Ombros: ≥900N<br>• Força de Fixação do Apito: ≥225N<br>• Laço de Levantamento: Laço 80kg<br><br><strong>Padrão Técnico do Produto</strong><br><br>Atende à norma ISO12402-3:2006 Dispositivo de Flutuação Pessoal - Parte 3: Nível de Desempenho dos Requisitos de Segurança do Colete Salva-Vidas 150.<br><br><strong>Operação</strong><br><br>Para tipos manuais, puxe a corda no inflador para inflar e utilizar normalmente.<br>Quando a pressão do airbag for insuficiente, use um insuflador bucal para complementar o ar.<br>Para tipos manual/automático, após a pessoa cair acidentalmente na água, o dispositivo de disparo ativa automaticamente o dispositivo inflável dentro de 3-5 segundos.<br>Se não puder ser ativado automaticamente, puxe a corda no dispositivo inflável para inflar e usar normalmente.<br>Quando a pressão do airbag for insuficiente, use um insuflador bucal para complementar o ar<br><br><strong>Certificação</strong><br><br>CCS/CE<br><br><strong>Regulamentação</strong><br><br>Regulamentações da SOLAS: IMO 2I(74), IMC 2S5(82), IMC 32R(84), IMO 200(95), versão aprovada para certificações internacionais CCS.',
    descriptionImage: baseImagePath + 'Group 77 2.png',
    details: {
      'ciclos de teste':
        'Sem sinais de danos após dez ciclos de teste com temperatura ambiente de -30°C a 65°C',
      'Resistência de Corpo ou do anel de Elevação': 'x3200N',
      'Resistência dos Ombros': 'x900N',
      'Força de Fixação do Apito': 'x225N',
      'Pressão de resistência': '40kPa',
      'Pressão de trabalho': '10-15kPa',
      Tamanho: '33g X 1 unidade',
      'Conector de rosca do cilindro':
        'Rosca imperial de 1/2 polegada 43kg - 140kg',
      'Embalagem padrão': '20 unidades por caixa',
      Certificação: 'CCS/CE',
      Volume: '0,09 m³',
    },
    price: 0,
    images: [
      baseImagePath + 'colete-inflavel.png',
      baseImagePath + 'Group 75 1.png',
    ],
  },
  {
    slug: 'carretel-mangueira', // falta a imagem
    active: true,
    title: 'Carretel de mangueira Dupla 10 e 20 metros',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Fabricado em armação de aço, alça para transporte, suporte para deixar os dois pares de mangueiras prontos para o uso, em cores diferentes para facilitar a visualização e operação pelo usuário, dispostos em carretel especialmente desenvolvido para o acondicionamento das mesmas com conexão de engate rápido, com trava de segurança e tampas de proteção contra detritos nas extremidades deixando-as prontas para desenrolar e enrolar, com dispositivo tipo manivela',
    descriptionHTML: '',
    details: {
      Peso: '23 e 26,9 Kg',
    },
    price: 0,
    images: [baseImagePath + 'carretel-mangueira.png'],
  },
  {
    slug: 'kit-manutencao',
    active: true,
    title: 'Kit completo de Manutenção e Reparos',
    categories: [ProductCategory.RESGATE],
    description:
      'Kit completo de manutenção e reparos com estojo organizado contendo diversas ferramentas e acessórios específicos para equipamentos de mergulho. Fácil de guardar e transportar, todas as ferramentas ficam alojadas em compartimentos próprios, protegidas e organizadas. Inclui chaves, ferramentas especializadas, anéis O-ring e acessórios essenciais para manutenção profissional.',
    descriptionHTML: '',
    details: {
      'Case para transporte, organização e proteção': '',
      'Diversas ferramentas': '',
      '1 peça "+" Chave De Fenda': '',
      '1 peça "-" Chave De Fenda': '',
      'Ferramenta 1 Piece Cup': '',
      'Chave 1 peça (3/4"-2")': '',
      '3 Peças O-ring Ferramenta': '',
      '2 peças fora motriz': '',
      '1 Piece Oil Tank Válvula Botão': '',
      '1 peça Registro Padrão': '',
      '1 peça levantamento ferramenta 3 cabeças': '',
      '1 peça levantamento ferramenta 4 cabeças': '',
      '1 peça Dt-203 ferramenta multifunções': '',
      'Chave 2 peças "s"': '',
      '1 Piece Handle': '',
      '1 peça Silicone O-ring (incluindo 10 peças As568-010,10 peças As568-011, 5 peças As568-012, 10 peças As568-014, 5 peças As568-015, 10 peças As568-112 Modelo.)':
        '',
    },
    price: 0,
    images: [
      baseImagePath + 'kit-manutencao.png',
      baseImagePath + 'kit-manutencao2.png',
      baseImagePath + 'kit-manutencao3.png',
    ],
  },
  {
    slug: 'plataforma-resgate',
    active: true,
    title: 'Plataforma de Resgate',
    categories: [ProductCategory.RESGATE],
    description:
      'Plataforma de Resgate construída em alumínio de alta resistência para operações de salvamento em altura. Composta por estrutura telescópica com barras de ligação, superfície antiderrapante articulada e 4 pés reguláveis para nivelamento. Capacidade de carga até 500kg. Altura ajustável de 850mm a 1391mm sem necessidade de ferramentas. Inclui grade de proteção articulável e removível. Dimensões: 850 x 1770mm (área total), 1980 x 1080 x 230mm (dobrável).',
    descriptionHTML: '',
    details: {
      Material: 'Construída em alumínio de alta resistência',
      'Capacidade de Carga': 'Até 500 kg',
      Superfície: 'Antiderrapante',
      'Dimensões (Área Total)': '850 x 1770 mm',
      'Dimensões (Dobrável)': '1980 x 1080 x 230 mm',
      'Altura Ajustável':
        'De 850 mm até 1391 mm, sem necessidade de ferramentas',
      'Grade de Proteção': 'Articulável e removível em um dos lados',
      'Pinos de Trava': 'Com cordão em aço para evitar perda',
      'Peso Total': '49 Kg',
      Dobrável: 'Facilita armazenamento e transporte',
    },
    price: 0,
    images: [baseImagePath + 'plataforma-resgate.png'],
  },
  {
    slug: 'cilindro-aco',
    active: false,
    title:
      'Cilindro de Aço SCBA para Bombeiros Modelo RHZ/(6.8) (Máscara Dupla+Válvula de  Máscara)',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Máscara Facial Completa: Proteção antiembaçante e antirreflexo, ampla visão, boa vedação, uso confortável. Válvula de Gás Compacta: Fornecimento de grande quantidade de gás sem interferir na visão. <br>Placa Traseira: Fibra de carbono leve e de alta resistência, desenhada para conforto e praticidade. <br>Redutor de Pressão: Com válvula de segurança interna, dispositivo de ajuste, manutenção fácil. <br>Manômetro: À prova dágua e à prova de choque. <br>Válvula do Cilindro: Equipado com dispositivo de segurança para evitar abertura acidental. <br><strong> Acessórios </strong> <br>02 Máscaras faciais completas <br>01 Conexão em "Y" para aparelho respiratório <br>01 Cilindro de fibra de carbono 6.8L 300 PSI com válvula reguladora de pressão e manômetro <br>01 Suporte de cilindro (arnês) com manômetro <br>02 Válvulas de demanda com mangueira reguladora <br>01 Caixa para armazenamento e transporte  <br> <strong> Aplicação </strong> <br> Adequado para bombeiros ou socorristas em ambientes com substâncias tóxicas ou nocivas, como fumaça e oxigênio, proporcionando proteção respiratória eficaz aos usuários. <br> <strong> Área de Uso </strong> <br> Amplamente utilizado em áreas como proteção contra incêndio, energia elétrica, indústria química, construção naval, fundição, armazenamento, laboratórios, mineração e outros setores   ',
    descriptionHTML: '',
    details: {
      'Campo de visão da máscara de  ': '>96%',
      Inalação: '30 L/min',
      'Material do cilindro': 'Aço',
      'Capacidade do cilindro': '2040L (6,8L)',
      'Resistência à exalação': '<1000 Pa',
      'Resistência à inalação': '<500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Pressão de alarme': '5.5 MPa',
      'Pressão de trabalho': '300 Pa',
      'Tempo de serviço': '55 - 60 min',
      'Som do alarme': '90 dB',
      Peso: '18 kg',
      Embalagem: 'Estojo de plástico (preto ou laranja)',
    },
    price: 0,
    images: [baseImagePath + 'cilindro-aco.png'],
  },
  {
    slug: 'cilindro-scba',
    active: true,
    title:
      'Aparelho de Respiração autônoma 6.8L Fibra S/ Carona Modelo: RHZ(6.8)',
    categories: [ProductCategory.BOMBEIRO],
    description:
      "Aparelho de respiração autônoma com máscara facial completa, proteção antiembaçante e antirreflexo. Válvula de gás compacta com grande fluxo. Placa traseira em fibra de carbono leve e resistente. Redutor de pressão com válvula de segurança integrada. Manômetro à prova d'água e choque. Modelo sem carona, inclui cilindro de fibra de carbono 6.8L.",
    descriptionHTML:
      '<strong>Características</strong><br><br>' +
      '• Máscara facial com propriedades antiembaçantes e antirreflexo, campo de visão amplo, boa vedação e uso confortável<br>' +
      '• Válvula de fornecimento de gás de pequeno volume, grande capacidade de fornecimento de gás, sem interferência no campo de visão durante o uso<br>' +
      '• Placa traseira em fibra de carbono, leve e de alta resistência, projetada para maior conforto e praticidade<br>' +
      '• Redutor de pressão com válvula de segurança embutida, sem necessidade de dispositivo de ajuste, livre de manutenção. Possui interface de reserva<br>' +
      "• Manômetro leve, com display à prova d'água, à prova de choque, luminoso e preciso no alarme<br>" +
      '• A válvula de demanda possui um dispositivo de catraca que evita o fechamento acidental durante o uso<br><br>' +
      '<strong>Acessórios</strong><br><br>' +
      '• 01 Máscara facial completa<br>' +
      '• 01 Cilindro de Fibra de Carbono 6.8L 300 PSI com Válvula reguladora de Pressão e Manômetro<br>' +
      '• 01 Arnês (suporte para o cilindro) com Manômetro<br>' +
      '• 01 Válvula de demanda com mangueira reguladora<br>' +
      '• 01 Caixa para armazenamento e transporte<br><br>' +
      '<strong>Aplicação</strong><br><br>' +
      'Indicado para bombeiros ou trabalhadores de resgate em ambientes com gases tóxicos ou prejudiciais, incluindo substâncias nocivas como fumaça e deficiência de oxigênio, proporcionando proteção respiratória eficaz aos usuários<br><br>' +
      '<strong>Área de Uso</strong><br><br>' +
      'Amplamente utilizado em combate a incêndios, energia elétrica, indústrias químicas, navais, metalúrgicas, armamento, laboratórios, mineração e outros setores<br><br>' +
      '<strong>Especificações</strong><br><br>' +
      '• Campo visual da máscara de gás > 96%<br>' +
      '• Inalação: 30 L/min<br>' +
      '• Material interno do cilindro: Fibra de Carbono<br>' +
      '• Capacidade do cilindro: 2040 L (6,8L)<br>' +
      '• Resistência à exalação: < 1000 Pa<br>' +
      '• Resistência à inalação: < 500 Pa<br>' +
      '• Temperatura de operação: -30°C a 60°C<br>' +
      '• Pressão do alarme: 5.5 MPa<br>' +
      '• Pressão de trabalho: 300 Pa<br>' +
      '• Tempo de serviço: 55 – 60 min<br>' +
      '• Som do alarme: 90 dB<br>' +
      '• Peso: 18 kg<br>' +
      '• Embalagem: Estojo plástico (preto ou laranja)<br><br>' +
      '<strong>Certificação</strong><br><br>' +
      '• EN 137:2006, EN 136:1998<br>' +
      '• Certificado de Aprovação – C.A nº 52.013',
    details: {
      'Campo visual da máscara': '> 96%',
      Inalação: '30 L/min',
      'Material do cilindro': 'Fibra de Carbono',
      'Capacidade do cilindro': '2040L (6,8L)',
      'Resistência à exalação': '< 1000 Pa',
      'Resistência à inalação': '< 500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Pressão do alarme': '5.5 MPa',
      'Pressão de trabalho': '300 Pa',
      'Tempo de serviço': '55 – 60 min',
      'Som do alarme': '90 dB',
      Peso: '18 kg',
      Embalagem: 'Estojo plástico (preto ou laranja)',
      Certificação: 'EN 137:2006, EN 136:1998, C.A nº 52.013',
    },
    price: 0,
    images: [baseImagePath + 'cilindro-scba.png'],
  },
  {
    slug: 'cilindro-amarelo',
    active: true,
    title:
      'Aparelho de Respiração Autônoma 6.0L Aço C/ Carona Modelo: RHZK6.0( Máscara Dupla+Válvula de Máscara)',
    categories: [ProductCategory.BOMBEIRO],
    description:
      "Aparelho de respiração autônoma com máscara facial completa, proteção antiembaçante e antirreflexo. Válvula de gás compacta com grande fluxo. Placa traseira em fibra de carbono leve e resistente. Redutor de pressão com válvula de segurança integrada. Manômetro à prova d'água e choque. Inclui cilindro de aço 6.0L, máscaras, conexões e caixa de transporte.",
    descriptionHTML:
      '<strong>Características</strong><br><br>' +
      '• Máscara facial com antiembaçante, antirreflexo, amplo campo de visão, boa vedação e uso confortável<br>' +
      '• A válvula de fornecimento de gás é compacta, possui grande fluxo de gás e não afeta a visão do usuário durante o uso<br>' +
      '• A placa traseira é feita de fibra de carbono, leve, de alta resistência, projetada para maior conforto e praticidade<br>' +
      '• O redutor de pressão possui válvula de segurança integrada, sem dispositivo de ajuste, sendo de manutenção e equipado com uma interface de reserva<br>' +
      "• O manômetro leve é à prova d'água, resistente a choques e com display luminoso<br>" +
      '• A válvula do cilindro possui um dispositivo de trava com catraca para evitar fechamento acidental durante o uso<br><br>' +
      '<strong>Acessórios</strong><br><br>' +
      '• 02 Máscaras facial completas<br>' +
      '• 01 Conexão "Y" para carona do aparelho de respiração<br>' +
      '• 01 Cilindro de aço 6.0L 300 PSI com Válvula reguladora de Pressão e Manômetro<br>' +
      '• 01 Arnês (Suporte para o cilindro) com Manômetro<br>' +
      '• 02 Válvula de demanda com mangueira reguladora<br>' +
      '• 01 Caixa para armazenamento e transporte<br><br>' +
      '<strong>Aplicação</strong><br><br>' +
      'Adequado para bombeiros ou equipes de resgate em ambientes com gases tóxicos ou prejudiciais, contendo substâncias nocivas como fumaça e em locais com baixo teor de oxigênio. Oferece proteção respiratória eficaz aos usuários.<br><br>' +
      '<strong>Área de Uso</strong><br><br>' +
      'Bombeiros, eletricidade, indústria química, navegação, metalurgia, armamento, laboratórios, mineração e outros setores<br><br>' +
      '<strong>Especificações</strong><br><br>' +
      '• Campo visual da máscara de gás ≥ 96%<br>' +
      '• Inalação: 30 L/min<br>' +
      '• Material interno do cilindro: Aço<br>' +
      '• Capacidade do cilindro: 2040L (6,8L)<br>' +
      '• Resistência à exalação: < 1000 Pa<br>' +
      '• Resistência à inalação: < 500 Pa<br>' +
      '• Temperatura de operação: -30°C a 60°C<br>' +
      '• Pressão do alarme: 5.5 MPa<br>' +
      '• Pressão de trabalho: 300 Pa<br>' +
      '• Tempo de uso: 50 – 60 min<br>' +
      '• Som do alarme: 90 dB<br>' +
      '• Peso: 18 kg<br>' +
      '• Embalagem: Caixa plástica (preta ou laranja)<br><br>' +
      '<strong>Certificação</strong><br><br>' +
      '• EN 137:2006, EN 136:1998<br>' +
      '• Certificado de Aprovação – C.A nº 52.013',
    details: {
      'Campo de visão da máscara de  ': '>96%',
      Inalação: '30 L/min',
      'Material do cilindro': 'Aço',
      'Capacidade do cilindro': '2040L (6,8L)',
      'Resistência à exalação': '<1000 Pa',
      'Resistência à inalação': '<500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Pressão de alarme': '5.5 MPa',
      'Pressão de trabalho': '300 Pa',
      'Tempo de serviço': '55 - 60 min',
      Certificação:
        'EN 137:2006, EN 136:1998, Certificado de Aprovação – C.A nº 52.013',
      'Som do alarme': '90 dB',
      Peso: '18 kg',
      Embalagem: 'Estojo de plástico (preto ou laranja)',
    },
    price: 0,
    images: [baseImagePath + 'cilindro-amarelo.png'],
  },
  {
    slug: 'kit-respiracao',
    active: false,
    title: 'Kit Respiração Autônoma',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Máscara Facial Completa: Proteção antiembaçante e antirreflexo, ampla visão, boa vedação, uso confortável. Válvula de Gás Compacta: Fornecimento de grande quantidade de gás sem interferir na visão. <br>Placa Traseira: Fibra de carbono leve e de alta resistência, desenhada para conforto e praticidade. <br>Redutor de Pressão: Com válvula de segurança interna, dispositivo de ajuste, manutenção fácil. <br>Manômetro: À prova dágua e à prova de choque. <br>Válvula do Cilindro: Equipado com dispositivo de segurança para evitar abertura acidental. <br><strong> Acessórios </strong> <br>01 Máscaras faciais completas <br>01 Conexão em "Y" para aparelho respiratório <br>01 Cilindro de fibra de carbono 6.0L 300 PSI com válvula reguladora de pressão e manômetro <br>01 Suporte de cilindro (arnês) com manômetro <br>02 Válvulas de demanda com mangueira reguladora <br>01 Caixa para armazenamento e transporte  <br> <strong> Aplicação </strong> <br> Adequado para bombeiros ou socorristas em ambientes com substâncias tóxicas ou nocivas, como fumaça e oxigênio, proporcionando proteção respiratória eficaz aos usuários. <br> <strong> Área de Uso </strong> <br> Amplamente utilizado em áreas como proteção contra incêndio, energia elétrica, indústria química, construção naval, fundição, armazenamento, laboratórios, mineração e outros setores   ',
    descriptionHTML: '',
    details: {
      'Campo de visão da máscara de  ': '>96%',
      Inalação: '30 L/min',
      'Material do cilindro': 'Aço',
      'Capacidade do cilindro': '2040L (6,8L)',
      'Resistência à exalação': '<1000 Pa',
      'Resistência à inalação': '<500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Pressão de alarme': '5.5 MPa',
      'Pressão de trabalho': '300 Pa',
      'Tempo de serviço': '55 - 60 min',
      'Som do alarme': '90 dB',
      Peso: '18 kg',
      Embalagem: 'Estojo de plástico (preto ou laranja)',
    },
    price: 0,
    images: [baseImagePath + 'kit-respiracao.png'],
  },
  {
    slug: 'cilindro-90',
    active: true,
    title:
      'Aparelho de Respiração Autônoma 9.0L Fibra C/ Carona Modelo: RHZ/(9.0) (Máscara Dupla+Válvula de Máscara)',
    categories: [ProductCategory.BOMBEIRO],
    description:
      "Aparelho de respiração autônoma com máscara facial completa, proteção antiembaçante e antirreflexo. Válvula de gás compacta com grande fluxo. Placa traseira em fibra de carbono leve e resistente. Redutor de pressão com válvula de segurança integrada. Manômetro à prova d'água e choque. Modelo com carona, inclui cilindro de fibra de carbono 9.0L para maior autonomia.",
    descriptionHTML:
      '<strong>Características</strong><br><br>' +
      '• Máscara facial confortável com antiembaçante, antirreflexo, amplo campo de visão, boa vedação e confortável de usar<br>' +
      '• A válvula de fornecimento de gás é pequena, possui grande capacidade de fornecimento de gás e não afeta o campo de visão durante o uso<br>' +
      '• Placa traseira de fibra de carbono, leve e de alta resistência, projetada para ser mais confortável e prática de usar<br>' +
      '• Redutor de pressão com válvula de segurança embutida, sem dispositivo de ajuste e isento de manutenção<br>' +
      "• Possui uma interface de reserva. Medidor de pressão leve com display à prova d'água, à prova de choque, luminoso e com alarme preciso<br>" +
      '• A válvula da garrafa possui um dispositivo de trava tipo catraca para evitar fechamentos acidentais durante o uso<br><br>' +
      '<strong>Acessórios</strong><br><br>' +
      '• 02 Máscara facial completa<br>' +
      '• 01 Conexão "Y" para carona do aparelho de respiração<br>' +
      '• 01 Cilindro de Fibra de Carbono 9L 300 PSI com Válvula reguladora de Pressão e Manômetro<br>' +
      '• 01 Arnês (Suporte para o cilindro) com Manômetro<br>' +
      '• 02 Válvula de demanda com mangueira reguladora<br>' +
      '• 01 Caixa para armazenamento e transporte<br><br>' +
      '<strong>Aplicação</strong><br><br>' +
      'Indicado para bombeiros ou trabalhadores de resgate em ambientes com gases tóxicos ou nocivos, contendo substâncias prejudiciais, como fumaça e oxigênio, entre outros. Proporciona proteção respiratória eficaz para os usuários<br><br>' +
      '<strong>Área de Uso</strong><br><br>' +
      'É amplamente utilizado em setores como combate a incêndios, energia elétrica, química, naval, metalurgia, armazenamento, laboratórios, mineração e outros<br><br>' +
      '<strong>Especificações</strong><br><br>' +
      '• Campo visual da máscara de gás > 96%<br>' +
      '• Inalação: 30 L/min<br>' +
      '• Material interno do cilindro: Fibra de carbono<br>' +
      '• Capacidade do cilindro: 2700 L (9,0L)<br>' +
      '• Tempo de Uso: 90 min<br>' +
      '• Resistência à exalação: < 1000 Pa<br>' +
      '• Resistência à inalação: < 500 Pa<br>' +
      '• Temperatura de operação: -30°C a 60°C<br>' +
      '• Pressão do alarme: 5.5 MPa<br>' +
      '• Pressão de trabalho: 300 Pa<br>' +
      '• Som do alarme: 90 dB<br>' +
      '• Peso: 18 kg<br>' +
      '• Embalagem: Caixa plástica (preta ou laranja)<br><br>' +
      '<strong>Certificação</strong><br><br>' +
      '• EN 137:2006, EN 136:1998<br>' +
      '• Certificado de Aprovação – C.A nº 52.013',
    details: {
      'Campo visual da máscara': '> 96%',
      Inalação: '30 L/min',
      'Material do cilindro': 'Fibra de Carbono',
      'Capacidade do cilindro': '2700L (9,0L)',
      'Tempo de Uso': '90 min',
      'Resistência à exalação': '< 1000 Pa',
      'Resistência à inalação': '< 500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Pressão do alarme': '5.5 MPa',
      'Pressão de trabalho': '300 Pa',
      'Som do alarme': '90 dB',
      Peso: '18 kg',
      Embalagem: 'Caixa plástica (preta ou laranja)',
      'EN 137:2006': '',
      'EN 136:1998': '',
      'Certificado de Aprovação': 'C.A nº 52.013',
    },
    price: 0,
    images: [baseImagePath + 'cilindro-90.png'],
  },
  {
    slug: 'cilindro-rhzk',
    active: true,
    title:
      'Aparelho de Respiração Autônoma 9.0L Fibras S/ Carona Modelo: RHZ/(9.0)',
    categories: [ProductCategory.BOMBEIRO],
    description:
      "Aparelho de respiração autônoma com máscara facial completa, proteção antiembaçante e antirreflexo. Válvula de gás compacta com grande fluxo. Placa traseira em fibra de carbono leve e resistente. Redutor de pressão com válvula de segurança integrada. Manômetro à prova d'água e choque. Modelo sem carona, inclui cilindro de fibra de carbono 9.0L para maior autonomia.",
    descriptionHTML:
      '<strong>Características</strong><br><br>' +
      '• Máscara facial confortável com antiembaçante, antirreflexo, amplo campo de visão, boa vedação e confortável de usar<br>' +
      '• A válvula de fornecimento de gás é pequena, possui grande capacidade de fornecimento de gás e não afeta o campo de visão durante o uso<br>' +
      '• Placa traseira de fibra de carbono, leve e de alta resistência, projetada para ser mais confortável e prática de usar<br>' +
      '• Redutor de pressão com válvula de segurança embutida, sem dispositivo de ajuste e isento de manutenção<br>' +
      '• Possui uma interface de reserva<br>' +
      "• Medidor de pressão leve com display à prova d'água, à prova de choque, luminoso e com alarme preciso<br>" +
      '• A válvula da garrafa possui um dispositivo de trava tipo catraca para evitar fechamentos acidentais durante o uso<br><br>' +
      '<strong>Acessórios</strong><br><br>' +
      '• 01 Máscara facial completa<br>' +
      '• 01 Cilindro de Fibra de Carbono 9L 300 PSI com Válvula reguladora de Pressão e Manômetro<br>' +
      '• 01 Arnês (Suporte para o cilindro) com Manômetro<br>' +
      '• 01 Válvula de demanda com mangueira reguladora<br>' +
      '• 01 Caixa para armazenamento e transporte<br><br>' +
      '<strong>Aplicação</strong><br><br>' +
      'Indicado para bombeiros ou trabalhadores de resgate em ambientes com gases tóxicos ou nocivos, contendo substâncias prejudiciais, como fumaça e oxigênio, entre outros. Proporciona proteção respiratória eficaz para os usuários<br><br>' +
      '<strong>Área de Uso</strong><br><br>' +
      'É amplamente utilizado em setores como combate a incêndios, energia elétrica, química, naval, metalurgia, armazenamento, laboratórios, mineração e outros<br><br>' +
      '<strong>Especificações</strong><br><br>' +
      '• Campo visual da máscara de gás > 96%<br>' +
      '• Inalação: 30 L/min<br>' +
      '• Material interno do cilindro: Fibra de carbono<br>' +
      '• Capacidade do cilindro: 2700 L (9,0L)<br>' +
      '• Tempo de Uso: 90 min<br>' +
      '• Resistência à exalação: < 1000 Pa<br>' +
      '• Resistência à inalação: < 500 Pa<br>' +
      '• Temperatura de operação: -30°C a 60°C<br>' +
      '• Pressão do alarme: 5.5 MPa<br>' +
      '• Pressão de trabalho: 300 Pa<br>' +
      '• Som do alarme: 90 dB<br>' +
      '• Peso: 18 kg<br>' +
      '• Embalagem: Caixa plástica (preta ou laranja)<br><br>' +
      '<strong>Certificação</strong><br><br>' +
      '• EN 137:2006, EN 136:1998<br>' +
      '• Certificado de Aprovação – C.A nº 52.013',
    details: {
      'Campo visual da máscara': '> 96%',
      Inalação: '30 L/min',
      'Material do cilindro': 'Fibra de Carbono',
      'Capacidade do cilindro': '2700L (9,0L)',
      'Tempo de Uso': '90 min',
      'Resistência à exalação': '< 1000 Pa',
      'Resistência à inalação': '< 500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Pressão do alarme': '5.5 MPa',
      'Pressão de trabalho': '300 Pa',
      'Som do alarme': '90 dB',
      Peso: '18 kg',
      Embalagem: 'Caixa plástica (preta ou laranja)',
      Certificação: 'EN 137:2006, EN 136:1998, C.A nº 52.013',
    },
    price: 0,
    images: [baseImagePath + 'cilindro-rhzk.png'],
  },
  {
    slug: 'cilindro-fibra-carbono-68l',
    active: true,
    title:
      'Cilindro de Fibra de Carbono 6.8L com Válvula para Aparelho de Respiração Autônoma',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Cilindro desenvolvido para aparelhos de respiração com acabamento revolucionário, sendo de exigente importância para aplicações em ambientes tóxicos, alta resistência, sendo adequado para alta temperatura de uso.',
    descriptionHTML: '',
    details: {
      Capacidade: '6.8 Litros',
      'Pressão de trabalho': '300 bar (4350 PSI)',
      'Material do cilindro': 'Fibra de Carbono de Alta Performance',
      'Revestimento externo': 'Fibra de Vidro',
      'Acabamento interno': 'Liso',
      Rosca: 'M18 x 1,5',
      'Material da válvula': 'Alumínio',
      'Peso aproximado': '3,2 kg',
      'Dimensões aproximadas': '560mm x 140mm',
      'Pressão de teste': '450 bar',
      Certificação: 'Inmetro/CE',
      'Vida útil': '15 anos',
    },
    price: 0,
    images: [
      baseImagePath +
        'cilindro_scuba_leao_modelismo_fibra_carbono_300_bar_6_8l_1919_5_1905104432a512c165d63d67518d8b54_20210729171920 1.png',
    ],
  },
  {
    slug: 'valvula-cilindro',
    active: true,
    title: 'Válvula para Cilindro',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Válvula para Cilindro ON/OFF de Compressão - Suporte DIN. Conecta e desconecta com indicação do lado fechado. Possui chave para manuseio das conexões, facilitando a conexão com RPCA, a através o empregado determinando em caso tanto lugar três posições.',
    descriptionHTML: '',
    details: {
      Tipo: 'ON/OFF de Compressão',
      Suporte: 'DIN',
      'Material do corpo': 'Liga metálica cromada',
      'Punho/Volante': 'Polímero de alta resistência',
      'Rosca de entrada': 'M18 x 1,5',
      'Rosca de saída': 'Fêmea / Macho conforme especificação',
      'Pressão de trabalho': '300 bar',
      'Temperatura de operação': '-30°C a +60°C',
      Certificação: 'Normas DIN',
      'Peso aproximado': '280g',
      Aplicação: 'Cilindros de respiração autônoma',
    },
    price: 0,
    images: [
      baseImagePath + 'Image (2).png',
      baseImagePath + 'img-0518-photoroom.png',
      baseImagePath + 'img-0520-photoroom.png',
    ],
  },
  {
    slug: 'marreta-tatica-75cm',
    active: true,
    title: 'Marreta Tática 75cm',
    categories: [ProductCategory.POLICIAL],
    description:
      'A Marreta Tática causa danos extremos com precisão, sendo ideal para operações policiais que exigem força de impacto direcionado. Equipamento desenvolvido especificamente para arrombar portas internas, quebrar fechaduras, dobradiças, cadeados e romper obstáculos diversos. Versão estendida de 75cm oferece maior alavancagem e força de impacto. Construída em aço temperado de alta qualidade com acabamento em pintura eletrostática preta. A empunhadura ergonômica em nylon proporciona isolamento elétrico, aderência superior e características anti-fagulha.',
    descriptionHTML: '',
    details: {
      'Fabricado em': 'Aço temperado',
      Comprimento: '75cm',
      'Diâmetro da empunhadura': '3,7cm',
      'Peso aproximado': '6,2kg',
      Acabamento: 'Pintura eletrostática preta',
      Empunhadura: 'Nylon ergonômico',
      'Força cinética': 'Superior a 180kg',
      'Isolamento elétrico': 'Sim',
      'Anti-fagulha': 'Sim',
      Aplicação: 'Operações policiais táticas',
    },
    price: 0,
    images: [baseImagePath + 'Image (3).png'],
  },
  {
    slug: 'mochila-flexivel-costal-anti-incendio',
    active: true,
    title: 'Mochila Flexível Costal Anti-Incêndio',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Mochila costal flexível para transporte de água lisoa para combate a incêndios florestais. Equipamento leve, flexível e resistente com alta durabilidade. Sustagem anti-furico para vedação segura e maior vida útil. Tanque ergométrico para alta entrega para facilidade de carregamento. Alças ajustáveis, válvula de alívio de pressão. Duplo reflete na base do tanque para maior durabilidade. Faixas refletivas para identificação do operador.',
    descriptionHTML: '',
    details: {
      Material: 'PVC flexível de alta resistência',
      Capacidade: '20 litros',
      'Peso vazio': 'Aproximadamente 2,5kg',
      Dimensões: '50cm x 35cm x 15cm',
      'Sistema de enchimento':
        'Bocal de enchimento com tampa plástica rígida e anel de rosca',
      Mangueira:
        'Flexível com 1,50m, válvula de gatilho interno em latão com gatilho',
      Sustagem: 'Anti-furico para vedação segura',
      Alças: 'Ergonômicas e ajustáveis',
      'Válvula de alívio': 'Para controle de pressão',
      Base: 'Duplo reforço para maior durabilidade',
      Faixas: 'Refletivas para identificação',
      'Peso líquido máximo': '20kg',
      Aplicação: 'Combate a incêndios florestais',
    },
    price: 0,
    images: [
      baseImagePath + 'Image (4).png',
      baseImagePath + '61wzQRjaH5L._AC_SL1200_.png',
      baseImagePath + '61Jn6vP069L._AC_SL1200_.png',
      baseImagePath + '51mv8GYkRXL._AC_SL1200_.png',
    ],
  },
  {
    slug: 'lifebelt-flutuador-xpe',
    active: true,
    title: 'Lifebelt/ flutuador XPE',
    categories: [ProductCategory.RESGATE],
    description:
      'Flutuador de alta performance desenvolvido com bolsas de espuma EVA/espuma XPE e revestimento almofadado moldado, aplicado para salvamento aquático. Equipamento de segurança Equipado com rebocador integrado em nylon resistente de flutuação, garantindo acelerações flutuação conforme para instruções de resgate.',
    descriptionHTML: '',
    details: {
      Material: 'Espuma XPE com revestimento almofadado',
      'Dimensões do flutuador': '101 cm x 18 cm x 8 cm',
      Modelo: 'Espuma encapsulada de polietileno reticulado (XPE)',
      Resistência: 'Material durável, resistente a rasgos e à água salgada',
      'Cinta interna':
        'Polipropileno TPU 25 mm, com 110 cm de comprimento e 17 cm de cada lado para conforto de colocação rápida',
      Fechamento: 'Zíper na lateral TPU 15 cm com 18 cm de fechamento',
      'Material da corda': 'Polipropileno',
      Argolas: 'Aço inox, 26 mm de diâmetro interno',
      Acessórios: 'Incluídos cino algo cinto',
      'Comprimento da corda': '25 m de nylon 8 mm com 240 m de comprimento',
      'Resistência da corda':
        'Entre variação 35 mm com revestimento em Neoprene',
      Costuras: 'Reforçadas para maior resistência',
      Flutuação: 'Espuma XPE de alta densidade',
      'Peso total': '1300 kg',
      'Cores disponíveis': 'Vermelho e Amarelo',
    },
    price: 0,
    images: [baseImagePath + 'sled.fw_-1024x406 1.png'],
  },
  {
    slug: 'lifebelt-flutuador-srb',
    active: true,
    title: 'Lifebelt/ flutuador SRB',
    categories: [ProductCategory.RESGATE],
    description:
      'Lifebelt SRB é um equipamento de segurança flutuante de alta performance, projetado com materiais resistentes à água salgada e desenvolvido para reforçar equipe em operações aquáticas. Com bolsas de espuma SRB encapsulada e estrutura reforçada, garante eficiência máxima para resgate e flutuação avançada em situações de emergência.',
    descriptionHTML: '',
    details: {
      Modelo:
        'Lifebelt SRB com equipamento de segurança flutuante de alta performance',
      'Revestimento externo': 'Equipamento resistente a água salgada',
      Dimensões: '86 cm(C) x 16 cm(L) x 7 cm (A)',
      Resistência: 'Material durável de navegação de 1kg poliuticas',
      'Peso total': '1800 kg',
      'Cinta interna': 'Polipropileno 25 mm com cargo de kit E kit',
      'Comprimento da cinta': '95 cm com 15 cm de cada lado',
      'Cinta na extremidade':
        'Poliéster 24 mm e 6h de cargo, 2,085m de comprimento',
      'Cinta traseira':
        'Poliéster 50 mm e 6h de cargo, 125cm de comprimento com revestimento quadrinicos em',
      'Alça de resgate': 'Neoprene',
      Argolas: 'Aço Inox 35mm de diâmetro',
      Material: 'Polipropileno em cgo fluê',
      Costuras: 'Reforçadas',
      'Tubos internos': 'Siliconados para reforço dos cintos',
      Fechamento: 'Zíper resistente e sistema',
      Garantia: '3 meses contra defeitos de fabricação',
    },
    price: 0,
    images: [baseImagePath + 'sled.fw_-1024x406 1.png'],
  },
  {
    slug: 'aparelho-respiracao-autonoma-60l-aco',
    active: true,
    title: 'Aparelho de Respiração Autônoma 6.0L Aço S/Carona',
    categories: [ProductCategory.BOMBEIRO],
    description:
      "Aparelho de respiração autônoma com máscara facial completa, proteção antiembaçante e antirreflexo. Válvula de gás pequena e pequena para grande fornecimento de gás, não afeta a visão durante o uso. Placa traseira leve possível deploy à prova d'água e choque, luminoso e alarme preciso. Adequado para bombeiros ou equipes de resgate em ambientes tóxicos ou prejudiciais, contendo substâncias nocivas como fumaça e em locais com baixo teor de oxigênio. Oferece proteção respiratória eficaz aos usuários.",
    descriptionHTML:
      '<strong>Características</strong><br><br>' +
      '• Com antiembaçante, antirreflexo, ampla visão, boa estanqueidade da ar e máscara facial confortável<br>' +
      '• A válvula de fornecimento de gás é pequena e pequena para grande fornecimento de gás, não afeta a visão durante o uso<br>' +
      '• Placa traseira de fibra de carbono, leve e de alta resistência, projetada para uso mais confortável e confortável<br>' +
      '• O regulador de pressão uma válvula de segurança embutida, sem dispositivo de ajuste e livre de manutenção. Tem uma interface de reserva<br>' +
      "• Regulador de pressão de peso leve possível deploy à prova d'água e à prova de choque, luminoso e alarme preciso<br>" +
      '• Válvula da garrafa é equipada com um dispositivo de verificação contra alavanca para evitar o fechamento involuntário durante o uso<br><br>' +
      '<strong>Acessórios</strong><br><br>' +
      '• 01 Máscara facial completa<br>' +
      '• 01 Cilindro de aço Boa 300 PSI com Válvula reguladora de Pressão e Manômetro<br>' +
      '• 01 Válvula de demanda com mangueira reguladora<br>' +
      '• 01 Caixa para armazenamento e transporte<br><br>' +
      '<strong>Aplicação</strong><br><br>' +
      'Adequado para bombeiros ou equipes de resgate em ambientes tóxicos ou prejudiciais, contendo substâncias nocivas como fumaça e em locais com baixo teor de oxigênio. Oferece proteção respiratória eficaz aos usuários<br><br>' +
      '<strong>Área de Uso</strong><br><br>' +
      'Bombeiros, eletricidade, indústria química, navegação, metalurgia, armazéns, laboratórios, mineração e outros setores<br><br>' +
      '<strong>Especificações</strong><br><br>' +
      '• Campo visual da máscara de gás ≥ 96%<br>' +
      '• Inalação: 30 L/min<br>' +
      '• Material interno do cilindro: Aço<br>' +
      '• Capacidade do cilindro: Ru<br>' +
      '• Resistência à exalação: < 1000 Pa<br>' +
      '• Resistência à inalação: < 500 Pa<br>' +
      '• Temperatura de operação: -30°C a 60°C<br>' +
      '• Máximo sonoro: 55 bar<br>' +
      '• Tempo de serviço: 50 - 60 min<br>' +
      '• Alarme de abertura: 8.5 MPa<br>' +
      '• Peso: 15 kg<br>' +
      '• Embalagem: Meleta de plástico preto ou laranja<br>' +
      '• Procedimentos: importado<br><br>' +
      '<strong>Certificação</strong><br><br>' +
      '• EN 137:2006, EN 136:1998<br>' +
      '• Certificado de Aprovação – C.A nº 52.013',
    details: {
      'Campo visual da máscara': '≥ 96%',
      Inalação: '30 L/min',
      'Material interno do cilindro': 'Aço',
      'Capacidade do cilindro': 'Ru',
      'Resistência à exalação': '< 1000 Pa',
      'Resistência à inalação': '< 500 Pa',
      'Temperatura de operação': '-30°C a 60°C',
      'Máximo sonoro': '55 bar',
      'Tempo de serviço': '50 - 60 min',
      'Alarme de abertura': '8.5 MPa',
      Peso: '15 kg',
      Embalagem: 'Meleta de plástico preto ou laranja',
      Procedimentos: 'importado',
      Certificação: 'EN 137:2006, EN 136:1998',
      CE: 'EN 137:2006',
      'Certificado de Aprovação': 'C.A nº 52.013',
    },
    price: 0,
    images: [baseImagePath + 'aparelho-respiracao-autonoma-60l-aco.png'],
  },
];

export const products = baseProducts.filter((x) => x.active);
