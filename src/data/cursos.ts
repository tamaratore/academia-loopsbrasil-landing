// cursos reais extraídos de edtutoriais.com.br/cursos/ em 21/07 (mesmo catálogo,
// nenhum dado inventado). videoId por enquanto reaproveita um vídeo real já usado
// em outra landing page da rede (autorizado pela Toré em 23/07: "os videos use um
// que vc ache legal para todos ja terem um video depois substituo"). Quando ela
// mandar o vídeo específico de cada curso, trocar aqui.

export const CURSO_VIDEO_PLACEHOLDER = 'omS3D-eyAW0';

export interface Curso {
  slug: string;
  titulo: string;
  desc: string;
  descLonga: string;
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
    preco: 'R$497',
    parcela: 'ou 12x de R$41,42',
    href: 'https://edtutoriais.com.br/k8/',
    badge: 'Mais popular',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'produzindozero',
    titulo: 'Produzindo do Zero',
    desc: 'Monte uma produção musical completa do zero usando loops e ferramentas dos produtores de Forró, Piseiro e Sertanejo.',
    descLonga:
      'Curso pensado pra quem nunca produziu uma música inteira. Você monta uma produção completa do absoluto zero, usando loops e ferramentas reais dos produtores de Forró, Piseiro e Sertanejo, e sai com o passo a passo pra repetir isso em qualquer faixa.',
    preco: 'R$197',
    parcela: 'ou 12x de R$20,37',
    href: 'https://edtutoriais.com.br/cursoproduzindo-dozero/',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'kontakt-6',
    titulo: 'Contakt Prático 6',
    desc: 'Aprenda a usar o Kontakt 6 na prática. Do básico ao avançado, aplicado direto na produção musical.',
    descLonga:
      'Curso prático do Kontakt 6, sem enrolação. Do básico ao avançado, cada aula já aplica o conteúdo direto numa produção musical real, pra você sair sabendo usar a ferramenta no dia a dia, não só na teoria.',
    preco: 'R$87',
    parcela: 'ou 12x de R$9,00',
    href: 'https://edtutoriais.com.br/curso-kontakt-6/',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'mixagem-masterizacao',
    titulo: 'Mixagem e Masterização',
    desc: 'Técnicas reais de mixagem e masterização para fazer sua música soar profissional.',
    descLonga:
      'Curso de mixagem e masterização com técnicas reais, usadas em produções que já foram pro ar. Você aprende a equilibrar frequências, dar espaço pros instrumentos e fechar o master com o som profissional que o ouvinte espera.',
    preco: 'R$197',
    parcela: 'ou 12x de R$20,37',
    href: 'https://edtutoriais.com.br/cursomixagememasterizacao/',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'guias-sertanejo',
    titulo: 'Guias Sertanejo',
    desc: 'Aprenda a criar os guias melódicos e arranjos harmônicos que definem o som do Sertanejo atual.',
    descLonga:
      'Curso focado nos guias melódicos e arranjos harmônicos que definem o som do Sertanejo de hoje. Você aprende a construir esses guias do zero e aplicar o mesmo raciocínio em qualquer faixa do gênero.',
    preco: 'R$197',
    parcela: 'ou 12x de R$20,37',
    href: 'https://edtutoriais.com.br/curso-guias/',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'curso-loops',
    titulo: 'Curso Loops',
    desc: 'Aprenda a usar, editar e combinar loops profissionais para criar arranjos com som de estúdio.',
    descLonga:
      'Curso direto ao ponto sobre como usar, editar e combinar loops profissionais. Você aprende a montar arranjos com som de estúdio a partir de loops prontos, sem precisar gravar instrumento nenhum.',
    preco: 'R$67',
    parcela: 'ou 12x de R$6,93',
    href: 'https://edtutoriais.com.br/cursoloops/',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'cakewalk',
    titulo: 'Cakewalk DAW Gratuita',
    desc: 'Produza músicas profissionais usando o Cakewalk by BandLab, a DAW mais completa e totalmente gratuita.',
    descLonga:
      'Curso do Cakewalk by BandLab, a DAW completa e totalmente gratuita. Ideal pra quem quer começar a produzir sem pagar licença nenhuma e ainda assim ter um resultado profissional.',
    preco: 'R$47',
    parcela: 'ou 11x de R$5,22',
    href: 'https://edtutoriais.com.br/curso-cakewalk/',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'jornada-sucesso',
    titulo: 'Jornada do Sucesso',
    desc: 'Pacote completo com todos os principais cursos da ED Tutoriais. Do zero ao profissional em um só acesso.',
    descLonga:
      'O pacote completo com todos os principais cursos da ED Tutoriais reunidos num só acesso. Pra quem quer sair do zero e chegar no nível profissional sem ter que comprar curso por curso.',
    preco: 'R$397',
    parcela: 'ou 12x de R$41,06',
    href: 'https://edtutoriais.com.br/curso-jornada-sucesso/',
    badge: 'Melhor custo-benefício',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
  {
    slug: 'grave-facil',
    titulo: 'Série em Vídeo: Grave Fácil',
    desc: 'Aprenda a gravar do jeito certo com resultado profissional. Série em vídeo 100% gratuita do Eder Machado.',
    descLonga:
      'Série em vídeo 100% gratuita, direto com o Eder Machado, sobre como gravar do jeito certo e já sair com resultado profissional. Ideal pra quem tá começando e quer entender o básico bem feito antes de investir em curso pago.',
    preco: 'Grátis',
    parcela: null,
    href: 'https://edtutoriais.com.br/curso-grave-facil/',
    badge: 'Gratuito',
    videoId: CURSO_VIDEO_PLACEHOLDER,
  },
];

export function getCurso(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug);
}
