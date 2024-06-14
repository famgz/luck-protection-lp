export enum ProductCategory {
  BOMBEIRO = 'bombeiro',
  POLICIAL = 'policial',
  RESGATE = 'resgate',
  MERGULHO = 'mergulho',
  // ARROMBAMENTO = 'arrombamento',
}

interface ProductDetails {
  [key: string]: string;
}

export interface Product {
  slug: string;
  title: string;
  categories: ProductCategory[];
  description: string;
  details: ProductDetails;
  price: number;
  images: string[];
}

export const baseImagePath = '/products/';

export const products: Product[] = [
  {
    slug: 'abafador-eletronico',
    title: 'Abafador Eletrônico IA Earmor M20T Preto',
    categories: [ProductCategory.POLICIAL],
    description:
      'O EARMOR® M20T é um protetor auricular eletrônico intra-auricular que suprime efetivamente o ruído prejudicial acima de 82dB, ao mesmo tempo em que melhora a consciência situacional e a comunicação em ambientes barulhentos. A função Bluetooth sem fio permite ouvir música livremente, atender ou rejeitar chamadas, compartilhar comunicação e diversidade de entretenimento. Com um tempo de espera de 8 horas quando totalmente carregado, possui prompts de voz e prompts de bateria fraca para conveniência. Comparado aos protetores tácticos tradicionais, é mais leve e fácil de transportar',
    details: {
      'Fabricado em': 'Plástico',
      Carregamento: '8h',
      Bluetooth: 'Sim',
      Abafador: 'Sim',
    },
    price: 0,
    images: [baseImagePath + 'abafador-eletronico.png'],
  },
  {
    slug: 'abafador-incendio',
    title: 'Abafador de Incêndio Cabo de Madeira/Alumínio',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Ferramenta usada para o combate direto ao fogo apagando-o por abafamento. Construída de uma lâmina ("flap") de borracha, com duas lonas internas, comprimento de 40 a 50cm, largura de 30 a 40cm e espessura de 3 a 6mm, com furos ou sem, parafusada em armação de madeira ou ferro em forma de T reforçada com furação para 4 parafusos, e angulação de 45° para maior ergonomia do operador durante o combate. Cabo flexível e resistente a impactos, comprimento 1,50m e diâmetro de 28mm, peso total: de 1,5 a 2,5kg. (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Borracha',
      Comprimento: '150cm',
      Diâmetro: '2,8cm',
      Peso: '2,5kg',
    },
    price: 0,
    images: [
      baseImagePath + 'abafador-incendio.png',
      baseImagePath + 'abafador-incendio-2.png',
    ],
  },
  {
    slug: 'abafador-m31',
    title: 'Abafador Protetor Auricular Eletrônico Tático Earmor M31',
    categories: [ProductCategory.POLICIAL],
    description:
      'O fone de ouvido tático M31 MARK3 MilPro oferece proteção auditiva e melhora a consciência situacional e a comunicação. Com funções e níveis mais avançados, pode ser adaptado a diferentes missões e escutas ambientais. Com suporte substituível foi projetado para ser instalado no trilho do capacete para conveniência dos usuários. Design modular atualizado 5 modos de som ajustáveis Compatibilidade eletromagnética EMC Microfone de redução de ruído casco em ABS modificado de alta resistência Almofadas de ouvido de silicone confortáveis IP67 resistente à água Compatibilidade ambiental Cumprir com CE/RoSH/FCC. Os sons nocivos são limitados a um nível seguro de 82 dB.',
    details: {
      'Fabricado em': 'Plástico',
      'Resistente à água': 'Sim',
      Cabo: '3,5mm',
      Peso: '350g',
    },
    price: 0,
    images: [baseImagePath + 'abafador-m31.png'],
  },
  {
    slug: 'abafador-m32',
    title: 'Abafador Eletrônico Earmor M32 Verde',
    categories: [ProductCategory.POLICIAL],
    description: `O Abafador Eletrônico M32 da EARMOR com comunicador é Ideal para operadores táticos, instrutores de tiro esportivo, atiradores, esportistas, indústrias e todos que trabalham em ambientes de muito barulho. Protege a audição do usuário de forma imediata, inteligente e segura. Os microfones ambientais melhoram a consciência situacional. Atende a norma NRR e reduz 22dB. Os sons nocivos são limitados a um nível seguro de 82 dB. Os microfones montados nos protetores auriculares melhoram a consciência situacional do usuário, permitindo que ele ouça sons de ambientes próximos e proteja sua audição. Amplifica sons de baixo nível. Permite que você ouça e se comunique normalmente e até aprimore sons padrão: fala, comandos, instruções, sons do ambiente Anti-suor com a tecnologia NANO. À prova d'água padrão IPX5. Aprovado por normas internacionais.`,
    details: {
      'Fabricado em': 'Aço',
      'Resistência à água': 'Sim',
      Cabo: '84cm',
      Peso: '396g',
    },
    price: 0,
    images: [
      baseImagePath + 'abafador-m32.png',
      baseImagePath + 'abafador-m32-2.png',
    ],
  },
  {
    slug: 'alavanca-2',
    title: 'Alavanca Hooligan Pé de Cabra',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Projetada para cortar, forçar entradas, criar ou alargar aberturas, fechar condutas de gás e remover qualquer tipo de barreira, a Hooligan proporciona acesso eficaz para as equipas de emergência chegarem às vítimas.',
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
    title: 'Alavanca Hoolingan Corta Latas',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta para arrombamento tática portátil para uso exclusivo de forças especiais(Grupos Anti-Sequestro, Bombeiros, Resgatistas), corpo fabricado em aço SAE 1045 e acabamento com pintura ou galvanizada. Contendo ponteiras fabricadas em aço SAE 1075 temperado e revenido, sendo em uma das extremidades uma ponteira tipo corta latas ou pé de cabra e na outra extremidade uma ponteira tipo cunha e uma ponta arrombadora. Medindo80 cm de comprimento e 25 mm de diâmetro(corpo), pesando até 6,8 Kg, (padrão). (obs: medidas podemvariar de acordo com pedido)',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '1m',
      Diâmetro: '25mm',
      Peso: '6kg',
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
    title: 'Alavanca Tática para policial em aço',
    categories: [ProductCategory.POLICIAL],
    description:
      'A Alavanca hooligan tática foi desenvolvida exclusivamente para o uso policial, e poderá ser empregada em viaturas ou equipes especiais. Equipamento construído em aço, usinado com cortes e medidas precisas com acabamento em pintura eletrostática. O tamanho e o peso foi determinado estrategicamente para fornecer força suficiente para romper obstáculos, expandir resistências e abrir portas com sentido de abertura de dentro para fora. Este equipamento conta com um quebrador de vidros ou perfurador, uma cunha de expansão eum pé de cabra. Cor: Preto (padrão). (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '60cm',
      Diâmetro: '3,5cm',
      Peso: '4kg',
    },
    price: 0,
    images: [baseImagePath + 'alavanca.png'],
  },
  {
    slug: 'alicate-tatico',
    title: 'Alicate tático preto em aço',
    categories: [ProductCategory.POLICIAL],
    description:
      'Construído em aço temperado, usinado com cortes e medidas precisas com acabamento em pintura eletrostática. As empunhaduras de nylon, a pintura eletrostática e o tratamento térmico do metal tornam o equipamento isolado eletricamente (não condutivo e anti-fagulha). Tamanho: 60 cm; Capacidade de corte: 8mm; Peso: 2.6kg; Cor: Preto. (medidas padrão). (obs: medidas podem variar de acordo com pedido.',
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
    slug: 'ariete-tatico',
    title: 'Ariete tático 1 e 2 alças para policial',
    categories: [ProductCategory.POLICIAL],
    description:
      'Ferramenta especial para uso em operação policial, do tipo ariete tático com uma e duas alças, materia prima principal aço 1020 usinado, pintura eletrostática na cor preta, ponteiras em polipropileno (nylon),com duas alças emborrachadas e flexíveis, posicionadas e travadas na transversal do tubo, equipamento isolado eletricamente, não condutivo e anti-fagulha, com capacidade para fornecer 500 kg de força cinética(padrão). (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '75cm',
      Diâmetro: '11,5cm',
      Peso: '15kg',
    },
    price: 0,
    images: [
      baseImagePath + 'ariete-tatico.png',
      baseImagePath + 'ariete-tatico-2.png',
    ],
  },
  {
    slug: 'barco-inflavel',
    title: 'Barco Inflável de poliéster em borracha',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Barco inflável - dobrável (fundo tecido) especificações: barco inflável, material de tecido de poliéster em borracha, comprimento 4,70 m, largura externa 1,90 m, capacidade de passageiros 9, material de fundo de tecido, potência do motor 20 a 50 hphp, características quilha inflável adicional , capacidade de carga 1200 kg, acessórios par de remos, kit de reparo e foles de enchimento',
    details: {
      'Fabricado em': 'Poliéster',
      Comprimento: '4,7m',
      Passageiros: '9',
      Peso: '1,2kg',
    },
    price: 0,
    images: [baseImagePath + 'barco-inflavel.png'],
  },
  {
    slug: 'bota-neoprene',
    title: 'Bota Neopreme com forro duplo nylon',
    categories: [ProductCategory.MERGULHO],
    description:
      'Aba de proteção interna para maior vedação. Reforço de borracha no peito do pé e calcanhar. Solado vulcanizado antiderrapante. Fechamento em velcro para prevenir que o zíper desça durante o uso',
    details: {
      'Fabricado em': 'Borracha',
      Tamanhos: '34 a 37',
    },
    price: 0,
    images: [baseImagePath + 'bota-neoprene.png'],
  },
  {
    slug: 'bote-inflavel',
    title: 'Bote Inflável Capacidade 9 passageiros',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Bote inflável, material: tecido poliéster emborrachado/ pvc/ hyplon , comprimento:4,70 m, largura externa:1,90 m, capacidade passageiro:9, casco rígido, capacidade para suportar motor de popa: 50 hp, capacidade carga:1200 kg',
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
    slug: 'capuz-neoprene',
    title: 'Capuz Neoprene em borracha',
    categories: [ProductCategory.MERGULHO],
    description:
      'Capuz-01 Fun Dive, Capuz de neoprene 3 mm para mergulho pesca ou esportes aquáticos. Contorno interno em borracha selante para face',
    details: {
      'Fabricado em': 'Borracha',
      Tamanhos: 'S, M, L, XL, 2XL e 3XL',
    },
    price: 0,
    images: [baseImagePath + 'capuz-neoprene.png'],
  },
  {
    slug: 'cilindro-mergulho',
    title: 'Cilindro de mergulho alumínio',
    categories: [ProductCategory.MERGULHO, ProductCategory.RESGATE],
    description: 'Cilindro de Alumínio S80 com torneira.',
    details: {
      'Fabricado em': 'Alumínio',
      Litros: '12L',
      'Pressão de serviço': '3000',
    },
    price: 0,
    images: [baseImagePath + 'cilindro-mergulho.png'],
  },
  {
    slug: 'enxada-rastelo',
    title: 'Ferramenta combinada Enxada e Rastelo',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Ferramenta do tipo versátil combinando em uma só peça, enxada e rastelo de alta resistência. Utilizada para limpar linhas de fogo, abrindo pequenas faixas ou aceiros, para cavar pequenas valas, rastelar dentre outros, cabo de madeira com 150 cm de comprimento, Peso: 2,3 kg, 6 dentes de 9 cm. (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Madeira',
      Comprimento: '150cm',
      Peso: '2,3kg',
    },
    price: 0,
    images: [baseImagePath + 'enxada-rastelo.png'],
  },
  {
    slug: 'equipamento-respiracao',
    title: 'Equipamento de respiração com máscara autônoma',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Respirador de adução de ar tipo máscara autônoma de ar comprimido com circuito aberto de demanda com pressão positiva, usados exclusivamente para combate ao incêndio e áreas contaminadas com manômetro de fácil visualização e com alarme sonoro acoplado que é acionado, automaticamente, ao atingir 55 bar.',
    details: {
      'Fabricado em': 'Aço',
      Litros: '6L',
      'Peso Cheio': '13,5kg',
      'Peso Vazio': '11,5kg',
    },
    price: 0,
    images: [baseImagePath + 'equipamento-respiracao.png'],
  },
  {
    slug: 'gancho',
    title: 'Gancho Crock Bombeiros',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Equipamento para combate a incêndio, arrombamento, rescaldo e retirada de material (impulsão e tração). Gancho fundido e enriquecido em duro alumínio,pontiagudo e tracionante, Bastão de tubo de alumínio com diâmetro de 31.75mm revestido com borracha PU ou fibra de vidro, impregnado com resina epoxi e protegido internamente com o núcleo de poliuretano, permitindo melhor isolamento térmico e elétrico. Peça única ou articulado, comprimento 2,60 mts a 3 mts, Peso aproximado 2,0 kg (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Alumínio',
      Comprimento: '3m',
      Diâmetro: '31,75cm',
      Peso: '2kg',
    },
    price: 0,
    images: [baseImagePath + 'gancho.png'],
  },
  {
    slug: 'gorgui',
    title: 'Ferramenta Gorgui Multi-função',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta combinada para cortar, raspar, cavar e sufocar (em rescaldo). Concebida com cabo de madeira fixado por parafusos e porcas autotravantes a folha, fabricada em aço SAE 1045 e dureza 42 a 46 RC, temperada e afiada com 10° nos lados e acabamento cromatizado. Com funções individualizadas que lhe confere multifuncionalidade, sem existir a necessidade de transportar diversas ferramentas. Sendo uma boa opção para equipes helitransportadas, obtendo facilidade para remoção da folha para sua manutenção quando necessário. Funções: Rastelo, Enxada, Enxadão. Medidas: 1240x35mm (cabo),14x34cm (lâmina), Peso: 2,5 kg (Padrão). (Obs: Medidas podem variar conforme pedido solicitado)',
    details: {
      'Fabricado em': 'Madeira',
      Comprimento: '1240x35mm',
      Peso: '2,5kg',
    },
    price: 0,
    images: [baseImagePath + 'gorgui.png'],
  },
  {
    slug: 'kit-arrombamento',
    title: 'Kit de Arrombamento',
    categories: [ProductCategory.POLICIAL],
    description:
      'O kit contempla a mochila de transporte, um aríete ou a marreta, uma alavanca e um alicate (corta frio).',
    details: {
      'Fabricado em': 'Nylon',
      Peso: '1kg',
    },
    price: 0,
    images: [baseImagePath + 'kit-arrombamento.png'],
  },
  {
    slug: 'laco-cambao',
    title: 'Laço cambão confeccionado em alumínio',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Laço tipo cambão confeccionado em alumínio de alta resistência com cabo em aço encapado medindo 150 cm de comprimento e com dispositivo de travamento e soltura do laço rápido, utilizado para captura e imobilização de pequenos animais, pesando 1125 gr. (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Alumínio',
      Comprimento: '150cm',
      Peso: '1,12kg',
    },
    price: 0,
    images: [baseImagePath + 'laco-cambao.png'],
  },
  {
    slug: 'luva-neoprene',
    title: 'Luva Neoprene com forro em duplo nylon',
    categories: [ProductCategory.MERGULHO],
    description:
      'Luva para mergulho em neoprene 2 ou 3 mm com forro em duplo nylon. Palma da mão e dedos com reforço em couro sintético "Amara". Tira elástica com velcro para melhor fechamento e fixação no punho.',
    details: {
      'Fabricado em': 'Nylon',
    },
    price: 0,
    images: [baseImagePath + 'luva-neoprene.png'],
  },
  {
    slug: 'machado-picareta',
    title: 'Ferramenta combinada machado/picareta',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta forjada em aço 1075 tratado, do tipo versátil combinando machado e picareta em uma só peça, com a finalidade de cortar e picar materiais em brasa além de cavar pequenas linhas impedindo o avanço do fogo, pintada na cor vermelha ou galvanizada. Cabo de madeira com 90cm de comprimento. Peso: 2,9 kg. (padrão). (medidas podem variar de acordo com pedido).',
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
    title: 'Marreta tática construída em aço',
    categories: [ProductCategory.POLICIAL],
    description:
      'Marreta desenvolvida exclusivamente para o uso policial, e pode ser empregada no patrulhamento diário e grupos especiais. Um equipamento construído em aço, usinado com cortes e medidas precisas com acabamento em pintura eletrostática. Equipamento desenvolvido para arrombar portas (internas), fechaduras, dobradiças e auxiliar na abertura de cadeados, romper obstáculos e expandir resistências, a marreta pode entregar uma força cinética de mais de 150kg. A empunhadura de de nylon torna o equipamento isolado eletricamente (não condutivo e anti-fagulha). Tamanho: 60 cm; Diâmetro da empunhadura: 3,7cm; Peso: 5,1kg, Cor: Preta (padrão) (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '60cm',
      Diâmetro: '3,7cm',
      Peso: '5,1kg',
    },
    price: 0,
    images: [baseImagePath + 'marreta.png'],
  },
  {
    slug: 'passador-nivel',
    title: 'Passador de nível para mangueira',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description: `Equipamento fabricado em ferro, na cor preta com faixas na cor amarela para melhor visualização, utilizado para proteção da mangueira de combate a incêndio quando da necessidade de transpassá-la com o caminhão, comprimento 76 cm, largura 42 cm, altura 9 cm, vão para encaixe das mangueiras de 1 ½' e 2 ½" de aproximadamente 11 cm, possui duas alças laterais em ferro para transporte, Peso máximo de 23 kg. (obs: medidas podem variar de acordo com pedido)`,
    details: {
      'Fabricado em': 'Ferro',
      Comprimento: '76cm',
      Peso: '23kg',
    },
    price: 0,
    images: [baseImagePath + 'passador-nivel.png'],
  },
  {
    slug: 'capacete-bombeiro',
    title: 'Capacete bombeiro de  segurança',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Capacete bombeiro cav. Capacete de segurança em fiberglass, na cor vermelha, resistente a impactos e chamas, com revestimento interno, suspensão fixa, carneira tipo catraca de ajuste na parte traseira, com faixas refletivas fixadas nas laterais, aba em toda sua lateral e frontal, totalmente emborrachada. Protetor facial articulável, transparente com jugular de ajuste e aparador de suor em velcro. Protetor de nuca e ouvidos em tecido antichamas. Atende os requisitos da norma nfpa 1971 ou equivalente',
    details: {
      'Fabricado em': 'Plástico',
    },
    price: 0,
    images: [baseImagePath + 'capacete-bombeiro.png'],
  },
  {
    slug: 'rastelo',
    title: 'Rastelo para remoção de material vegetal',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Ferramenta especialmente desenhada para a remoção de material vegetal na abertura de aceiros, corta e rastela com facilidade e eficiência. Resistente e durável, é produzida em aço tratado, laminas com pequenas estrias e com acabamento em pintura ou galvanizada, possui cabo de madeira, com 150 cm de comprimento e tem peso total de 1,4 kg. (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Aço',
      Comprimento: '150cm',
      Peso: '1,4kg',
    },
    price: 0,
    images: [baseImagePath + 'rastelo.png'],
  },
  {
    slug: 'roupa-neoprene',
    title: 'Roupa Neoprene costurada e colada',
    categories: [ProductCategory.MERGULHO],
    description:
      'Roupa neoprene 5mm leve e confortável costurada e colada, impossibilitando a passagem de água pelas costuras zipper frontal ykk tamanho 10, fácil de manusear e resistente ombros texturizados em borracha para evitar desgaste por uso com colete joelheiras em supratex tamanhos: S, M, L, XL, 2XL E 3XL',
    details: {
      'Fabricado em': 'Borracha',
      Tamanhos: 'S, M, L, XL, 2XL E 3XL',
    },
    price: 0,
    images: [baseImagePath + 'roupa-neoprene.png'],
  },
  {
    slug: 'suporte-colunas',
    title: 'Suporte para colunas veicular',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Suporte para coluna veicular em ferro, complemento de soleira com encaixe para cilindros de resgate na cor amarelo. Peso 10 kg. (obs: medidas podem variar de acordo com pedido)',
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
    title: 'Suporte lanterna Propolymer 4AA 27x37',
    categories: [ProductCategory.BOMBEIRO],
    description:
      'Suporte adaptador metálico fabricado em alumínio com pintura a pó na cor preta, para uso da lanterna Propolymer 4AA LEDS stream light em capacete MSA Gallet F1 SF. Medidas:27x37 (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Alumínio',
      Comprimento: '27x37cm',
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
    title: 'Suporte para pressão - Painel',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Suporte para painel em ferro, complemento de soleira com encaixe para cilindros de resgate na cor amarelo. Peso 5 kg. (obs: medidas podem variar de acordo  com pedido)',
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
    title: 'Suporte para pressão - Teto',
    categories: [ProductCategory.BOMBEIRO, ProductCategory.RESGATE],
    description:
      'Suporte para teto em ferro, complemento de soleira com encaixe para cilindros de resgate na cor amarelo. Peso 5 kg. (obs: medidas podem variar de acordo com pedido)',
    details: {
      'Fabricado em': 'Ferro',
      Comprimento: '-',
      Peso: '5kg',
    },
    price: 0,
    images: [baseImagePath + 'suporte-teto.png'],
  },
  {
    slug: 'capacete-resgate',
    title: 'Capacete de resgate aquático',
    categories: [ProductCategory.MERGULHO, ProductCategory.RESGATE],
    description:
      'Capacete de resgate aquático de montanha com protetores de ouvido Capacete injetado em polipropileno de alta resistência. Possui ajuste interno (RATCHER), feito com dentes de travamento com controle de volume, que proporciona melhor ajuste ao cabeçote, mais segurança e conforto ao operador, Espuma de células fechadas Rebites de metal inoxidável (não enferrujam), Fitas de polipropileno, Fivelas e engates de nylon, Neoprene 1,5 mm, Velcro',
    details: {
      'Fabricado em': 'Polipropileno',
    },
    price: 0,
    images: [baseImagePath + 'capacete-resgate.png'],
  },
];
