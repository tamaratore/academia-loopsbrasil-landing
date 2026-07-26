// cursos reais extraídos de edtutoriais.com.br/cursos/ em 21/07 (mesmo catálogo,
// nenhum dado inventado). videoId de cada curso extraído direto da própria
// página do curso em edtutoriais.com.br (25/07) - vídeo real e específico de
// cada um, confirmado por título via oembed do YouTube antes de usar.
// Campo "aprende" (o que você vai aprender) e "faq" também extraídos direto
// da página real de cada curso em edtutoriais.com.br (25/07), resumidos com
// as mesmas palavras/sentido do original, sem inventar conteúdo novo.

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface Curso {
  slug: string;
  titulo: string;
  desc: string;
  descLonga: string;
  aprende: string[];
  faq?: FaqItem[];
  preco: string;
  parcela: string | null;
  href: string;
  badge?: string;
  videoId: string;
}

export const cursos: Curso[] = [
  {
    slug: 'k8',
    titulo: 'Curso Kontakt 8 Pro',
    desc: 'Do zero ao profissional com o Kontakt 8. Arranjos realistas, timbres poderosos e total domínio da ferramenta.',
    descLonga:
      'Curso completo do Kontakt 8, do primeiro patch até arranjos realistas prontos pra entregar. Você aprende a montar bibliotecas, programar articulações, editar timbres e aplicar tudo isso direto numa produção real, no mesmo fluxo de trabalho usado pelos produtores da rede.',
    aprende: [
      'Tour completo pela nova interface do Kontakt 8',
      'Criação de instrumento Leap: timbres com camadas, modulação e efeitos visuais em tempo real',
      'Criação de instrumentos NKI: loops, one shots e instrumentos solo',
      'Como inserir efeitos diretamente no instrumento pra um som profissional',
      'Criação de knobs de efeitos personalizados',
      'Como criar um faceplate profissional e organizado',
      'Arquivos do curso liberados pra você praticar junto, em tempo real',
    ],
    faq: [
      {
        pergunta: 'O curso inclui o Kontakt 8?',
        resposta: 'Não. O curso ensina a usar o Kontakt 8, mas não fornece nem vende o software. Você precisa já ter o Kontakt 8 instalado antes de começar.',
      },
      {
        pergunta: 'O curso funciona no meu computador?',
        resposta: 'Sim, é compatível com Windows e macOS - funciona em qualquer computador onde o Kontakt 8 possa ser instalado.',
      },
      {
        pergunta: 'Preciso ter conhecimento prévio em Kontakt?',
        resposta: 'Não. O curso vai do zero ao Pro, o Eder explica tudo do começo sem pressupor conhecimento anterior.',
      },
      {
        pergunta: 'E se eu não gostar do curso?',
        resposta: 'Garantia de 7 dias: se não ficar satisfeito, é só pedir o reembolso e devolvemos 100% do valor, sem perguntas.',
      },
      {
        pergunta: 'O que são os arquivos para download?',
        resposta: 'São os mesmos arquivos usados nas aulas, liberados pra você praticar junto e acompanhar cada passo em tempo real.',
      },
    ],
    preco: 'R$497',
    parcela: 'ou 12x de R$41,42',
    href: 'https://edtutoriais.com.br/k8/',
    badge: 'Mais popular',
    videoId: 'VJ6Oj8880Ao',
  },
  {
    slug: 'produzindozero',
    titulo: 'Produzindo do Zero',
    desc: 'Monte uma produção musical completa do zero usando loops e ferramentas dos produtores de Forró, Piseiro e Sertanejo.',
    descLonga:
      'Curso pensado pra quem nunca produziu uma música inteira. Você monta uma produção completa do absoluto zero, usando loops e ferramentas reais dos produtores de Forró, Piseiro e Sertanejo, e sai com o passo a passo pra repetir isso em qualquer faixa.',
    aprende: [
      'Como montar um arranjo completo partindo do zero',
      'Uso de loops profissionais no FL Studio, Cakewalk ou outra DAW',
      'Ritmo, harmonia e melodia na prática, sem precisar de teoria',
      'Mixagem básica pra sua música soar bem desde o primeiro projeto',
      'Como exportar e entregar seu projeto final',
      'Truques que os produtores do mercado realmente usam',
    ],
    preco: 'R$197',
    parcela: 'ou 12x de R$20,37',
    href: 'https://edtutoriais.com.br/cursoproduzindo-dozero/',
    videoId: 'id0qdeMWhzc',
  },
  {
    slug: 'kontakt-6',
    titulo: 'Kontakt Prático 6',
    desc: 'Aprenda a usar o Kontakt 6 na prática. Do básico ao avançado, aplicado direto na produção musical.',
    descLonga:
      'Curso prático do Kontakt 6, sem enrolação. Do básico ao avançado, cada aula já aplica o conteúdo direto numa produção musical real, pra você sair sabendo usar a ferramenta no dia a dia, não só na teoria.',
    aprende: [
      'Interface e navegação do Kontakt 6 sem enrolação',
      'Como carregar e tocar instrumentos das principais bibliotecas',
      'Configurando o Kontakt como plugin no FL Studio e Cakewalk',
      'Editando sons: filtros, envelopes, LFO e efeitos internos',
      'Criando seus próprios patches e presets',
      'Dicas de performance e otimização de memória',
    ],
    preco: 'R$87',
    parcela: 'ou 12x de R$9,00',
    href: 'https://edtutoriais.com.br/curso-kontakt-6/',
    videoId: 'RkY03E0QYtU',
  },
  {
    slug: 'mixagem-masterizacao',
    titulo: 'Mixagem e Masterização',
    desc: 'Técnicas reais de mixagem e masterização para fazer sua música soar profissional.',
    descLonga:
      'Curso de mixagem e masterização com técnicas reais, usadas em produções que já foram pro ar. Você aprende a equilibrar frequências, dar espaço pros instrumentos e fechar o master com o som profissional que o ouvinte espera.',
    aprende: [
      'Fundamentos de mixagem: ganho, panorama e equilíbrio das faixas',
      'EQ e compressão na prática, sem enrolação',
      'Reverb, delay e efeitos de espaço usados nos estúdios',
      'Como deixar o vocal na frente da música',
      'Masterização básica: deixar sua música no volume das rádios',
      'Exportação no formato certo pra streaming e WhatsApp',
    ],
    preco: 'R$197',
    parcela: 'ou 12x de R$20,37',
    href: 'https://edtutoriais.com.br/cursomixagememasterizacao/',
    videoId: '2dJ9a1LNqdc',
  },
  {
    slug: 'guias-sertanejo',
    titulo: 'Guias Sertanejo',
    desc: 'Aprenda a criar os guias melódicos e arranjos harmônicos que definem o som do Sertanejo atual.',
    descLonga:
      'Curso focado nos guias melódicos e arranjos harmônicos que definem o som do Sertanejo de hoje. Você aprende a construir esses guias do zero e aplicar o mesmo raciocínio em qualquer faixa do gênero.',
    aprende: [
      'O que são guias e por que são essenciais no Sertanejo',
      'Como criar a progressão de acordes certa pra cada estilo',
      'Guias de violão, guitarra e teclado no estilo Sertanejo',
      'Bônus: loops e amostras prontas pra usar nos seus projetos',
      'Técnicas de arranjo que os produtores de sucesso usam',
      'Como fazer seus arranjos ficarem mais cheios e profissionais',
    ],
    preco: 'R$197',
    parcela: 'ou 12x de R$20,37',
    href: 'https://edtutoriais.com.br/curso-guias/',
    videoId: 'f3G5jxfZce8',
  },
  {
    slug: 'curso-loops',
    titulo: 'Curso Loops',
    desc: 'Aprenda a usar, editar e combinar loops profissionais para criar arranjos com som de estúdio.',
    descLonga:
      'Curso direto ao ponto sobre como usar, editar e combinar loops profissionais. Você aprende a montar arranjos com som de estúdio a partir de loops prontos, sem precisar gravar instrumento nenhum.',
    aprende: [
      'O que são loops e como funcionam no workflow de produção',
      'Como usar loops no FL Studio, Cakewalk e Kontakt',
      'Edição, corte e ajuste de andamento e tonalidade',
      'Como combinar diferentes loops pra criar um arranjo completo',
      'Onde encontrar loops de qualidade (e como usar os da ED Tutoriais)',
      'Dicas práticas pra evitar os erros mais comuns com loops',
    ],
    preco: 'R$67',
    parcela: 'ou 12x de R$6,93',
    href: 'https://edtutoriais.com.br/cursoloops/',
    videoId: 'xhXO5c-4-CI',
  },
  {
    slug: 'cakewalk',
    titulo: 'Cakewalk DAW Gratuita',
    desc: 'Produza músicas profissionais usando o Cakewalk by BandLab, a DAW mais completa e totalmente gratuita.',
    descLonga:
      'Curso do Cakewalk by BandLab, a DAW completa e totalmente gratuita. Ideal pra quem quer começar a produzir sem pagar licença nenhuma e ainda assim ter um resultado profissional.',
    aprende: [
      'Instalação e configuração do Cakewalk pra começar rápido',
      'Gravação de áudio e MIDI com qualidade profissional',
      'Uso de plugins VST e instrumentos virtuais dentro do Cakewalk',
      'Edição, corte e organização do seu projeto',
      'Mixagem básica direto na DAW',
      'Exportação no formato certo pra distribuição',
    ],
    preco: 'R$47',
    parcela: 'ou 11x de R$5,22',
    href: 'https://edtutoriais.com.br/curso-cakewalk/',
    videoId: 'JrdJPRD0pAY',
  },
  {
    slug: 'jornada-sucesso',
    titulo: 'Jornada do Sucesso',
    desc: 'Pacote completo com todos os principais cursos da ED Tutoriais. Do zero ao profissional em um só acesso.',
    descLonga:
      'O pacote completo com todos os principais cursos da ED Tutoriais reunidos num só acesso. Pra quem quer sair do zero e chegar no nível profissional sem ter que comprar curso por curso.',
    aprende: [
      'Acesso completo ao Curso Produzindo do Zero',
      'Acesso completo ao Curso Loops',
      'Acesso completo ao Curso Mixagem e Masterização',
      'Acesso completo ao Curso Prático Cakewalk',
      'Materiais bônus exclusivos pra alunos do pacote',
      'Suporte direto com o Eder via WhatsApp',
    ],
    preco: 'R$397',
    parcela: 'ou 12x de R$41,06',
    href: 'https://edtutoriais.com.br/curso-jornada-sucesso/',
    badge: 'Melhor custo-benefício',
    videoId: '5AtkCSm4An0',
  },
  {
    slug: 'grave-facil',
    titulo: 'Série em Vídeo: Grave Fácil',
    desc: 'Aprenda a gravar do jeito certo com resultado profissional. Série em vídeo 100% gratuita do Eder Machado.',
    descLonga:
      'Série em vídeo 100% gratuita, direto com o Eder Machado, sobre como gravar do jeito certo e já sair com resultado profissional. Ideal pra quem tá começando e quer entender o básico bem feito antes de investir em curso pago.',
    aprende: [
      'Como configurar sua interface de áudio pra gravar com qualidade',
      'Técnicas pra gravar vocais de forma limpa e profissional',
      'Como gravar instrumentos como violão, guitarra e teclado em casa',
      'Edição básica pra eliminar ruídos e melhorar o resultado final',
      'Dicas práticas pra ter som profissional com equipamentos simples',
      'Os erros mais comuns de quem grava em casa, e como evitá-los',
    ],
    preco: 'Grátis',
    parcela: null,
    href: 'https://edtutoriais.com.br/curso-grave-facil/',
    badge: 'Gratuito',
    videoId: 'vGAlyd3KD_U',
  },
];

export function getCurso(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug);
}
