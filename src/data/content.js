// Todo o conteúdo textual do site fica centralizado aqui.
// Trocar uma palavra, adicionar uma trilha ou um evento novo é editar
// este arquivo — nenhum componente precisa ser tocado.

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Trilhas', href: '#trilhas' },
  { label: 'Coordenação', href: '#coordenacao' },
  { label: 'Regras', href: '#regras' },
  { label: 'FAQ', href: '#faq' },
]

export const JOIN_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc_BhfaWszOUUYV0iVOETzGGL9CniJuKefNjrB2_fDj1RQmIg/closedform' 

export const HERO = {
  eyebrowCommand: 'clube-ds ~ git log --oneline',
  title: 'Um clube para construir projetos de verdade',
  highlight: 'com método, colaboração e evolução.',
  subtitle:
    'O ClubeDS é o espaço de prática do curso técnico: oficinas semanais, trilhas progressivas e projetos que saem do repositório e vão para o ar.',
  stats: [
    { value: '3', label: 'trilhas progressivas' },
    { value: '12', label: 'ciclos por ano' },
    { value: '100%', label: 'com deploy real' },
  ],
  commits: [
    { hash: 'a1f92c3', message: 'feat: primeira oficina de Git e GitHub', tag: 'trilha-1' },
    { hash: '7e04b21', message: 'feat: layout responsivo do portfólio', tag: 'trilha-2' },
    { hash: '3dc88f0', message: 'feat: deploy do projeto final na Vercel', tag: 'trilha-3' },
  ],
}

export const HIGHLIGHTS = {
  title: 'Destaques',
  subtitle: 'O que acontece dentro do clube, toda semana.',
  items: [
    {
      title: 'Oficinas',
      description: 'Hands-on semanais',
      detail: 'Prática guiada em grupo, com mão na base de código a cada encontro.',
    },
    {
      title: 'Palestras',
      description: 'Carreira e mercado',
      detail: 'Conversas com quem já vive o dia a dia da área de tecnologia.',
    },
    {
      title: 'Projetos',
      description: 'Cases para portfólio',
      detail: 'Entregas reais que viram peça de portfólio, não exercício de gaveta.',
    },
  ],
  stats: [
    { label: 'Ciclos', value: 'Mensais' },
    { label: 'Formato', value: 'Prático' },
    { label: 'Entrega', value: 'Git + Deploy' },
  ],
  note: 'A participação completa nas atividades exige matrícula ativa.',
}

export const HOW_IT_WORKS = {
  eyebrow: 'Como o clube funciona',
  title: 'Organização simples, rotina consistente e foco no desenvolvimento do aluno.',
  steps: [
    {
      step: '01',
      title: 'Trilhas e desafios',
      description:
        'Você evolui por desafios progressivos: fundamentos, web, backend, dados e projetos integradores.',
    },
    {
      step: '02',
      title: 'Aprendizagem com prática',
      description:
        'Você aprende fazendo, com revisão de código, pair programming e boas práticas.',
    },
    {
      step: '03',
      title: 'Portfólio e vitrine',
      description:
        'Cada ciclo gera entregas reais: páginas web, APIs, dashboards, automações e apresentação final.',
    },
  ],
}

export const TRACKS = [
  {
    id: 'trilha-1',
    number: '01',
    name: 'Fundamentos',
    tagline: 'Lógica, estrutura, organização e rotina.',
    topics: ['VS Code', 'HTML semântico', 'CSS base', 'JS básico'],
  },
  {
    id: 'trilha-2',
    number: '02',
    name: 'Web + Portfólio',
    tagline: 'Páginas reais e responsivas.',
    topics: ['Layout responsivo', 'Formulários', 'Acessibilidade', 'Deploy no Vercel'],
  },
  {
    id: 'trilha-3',
    number: '03',
    name: 'Projetos e Equipe',
    tagline: 'Trabalho em grupo e práticas do mercado.',
    topics: ['Git flow simples', 'Issues e PRs', 'Revisão de código', 'Apresentação final'],
  },
]

export const UPCOMING_EVENTS = {
  title: 'Próximos encontros',
  subtitle: 'Você pode atualizar aqui manualmente (depois automatizamos com JSON).',
  events: [
    {
      type: 'Oficina',
      duration: '2h',
      title: 'Git e GitHub na prática',
      description: 'Branch, pull request e revisão com mini-projeto.',
      date: 'Data: a definir',
      cta: 'Ver todos',
    },
    {
      type: 'Palestra',
      duration: '1h',
      title: 'Portfólio que abre portas',
      description: 'O que colocar, como apresentar e como evoluir.',
      date: 'Data: a definir',
      cta: 'Receber aviso',
    },
  ],
}

export const TECHNOLOGIES = {
  eyebrow: 'Stack do clube',
  title: 'Tecnologias utilizadas',
  subtitle: 'As mesmas ferramentas do mercado, desde a primeira trilha.',
  items: [
    { name: 'HTML', role: 'estrutura' },
    { name: 'CSS', role: 'estilo' },
    { name: 'JavaScript', role: 'interatividade' },
    { name: 'React', role: 'interfaces' },
    { name: 'Git', role: 'versionamento' },
    { name: 'GitHub', role: 'colaboração' },
    { name: 'VS Code', role: 'editor' },
    { name: 'Vercel', role: 'deploy' },
  ],
}

export const PEDAGOGY = {
  title: 'O ClubeDS é um ambiente pedagógico e didático',
  subtitle:
    'Criado para fortalecer a aprendizagem no curso técnico por meio de projetos, cultura de colaboração e desenvolvimento contínuo.',
  routine: [
    'Rotina de prática com entregas',
    'Comunidade e apoio entre alunos',
    'Visão de mercado e carreira',
    'Qualidade: código limpo e organização',
  ],
  delivery: {
    title: 'Entrega do aluno',
    subtitle: 'Ao longo do ciclo, você sai com:',
    items: [
      'Repositório no GitHub bem organizado',
      'Deploy no Vercel (site no ar)',
      'Projeto com README e evidências',
      'Apresentação final (pitch técnico)',
    ],
  },
}

export const COORDINATION = {
  eyebrow: 'Coordenação e suporte',
  title: 'Quem sustenta o clube no dia a dia',
  subtitle:
    'Dois professores acompanham cada ciclo de perto — da matrícula até a apresentação final.',
  team: [
    {
      name: 'Prof. Celso Barreto',
      role: 'Presidência e coordenação pedagógica',
      bio: 'Acompanha o planejamento das trilhas e das oficinas, e é o ponto de apoio para dúvidas sobre matrícula e participação.',
      initials: 'CB',
      photo: '/assets/celso.jpg',
    },
    {
      name: 'Prof. Anildo Mattos',
      role: 'Presidência e suporte técnico',
      bio: 'Apoia revisões de código, dúvidas técnicas dos projetos e a preparação das apresentações finais.',
      initials: 'AM',
      photo: '/assets/anildo.jpeg',
    },
    {
      name: 'Diretoria',
      role: 'Diretoria (alunos)',
      bio: 'Composta por alunos matriculados, eleita a cada 12 meses para apoiar a organização interna do clube.',
      initials: 'DS',
      photo: null,
    },
  ],
}

export const FAQ = {
  eyebrow: 'Dúvidas comuns',
  title: 'Perguntas frequentes',
  subtitle: 'Respostas rápidas para dúvidas comuns.',
  items: [
    {
      question: 'Preciso estar matriculado para participar?',
      answer:
        'Para acesso completo às atividades, sim. Você pode acompanhar comunicados, mas a participação integral exige matrícula ativa.',
    },
    {
      question: 'Como funcionam as eleições da diretoria?',
      answer:
        'A cada 12 meses. Apenas alunos matriculados podem participar do processo e ocupar cargos.',
    },
    {
      question: 'Vou aprender do zero?',
      answer:
        'Sim. As trilhas começam do básico e evoluem por projetos, sem pular fundamentos.',
    },
    {
      question: 'O que eu ganho no final?',
      answer:
        'Um portfólio com projetos publicados (deploy), repositórios organizados e vivência de práticas do mercado.',
    },
  ],
  closing: {
    title: 'Pronto para entrar?',
    subtitle: 'Faça seu cadastro e receba as próximas datas de oficinas e palestras.',
    buttonLabel: 'Cadastrar agora',
  },
}

export const RULES = {
  title: 'Regras de participação',
  subtitle: 'Transparência e organização para o clube rodar bem durante o ano.',
  items: [
    {
      title: 'Matrícula ativa',
      description:
        'Para ter acesso a todas as atividades (oficinas, trilhas e projetos), o membro precisa estar devidamente matriculado.',
    },
    {
      title: 'Diretoria e eleições',
      description:
        'Haverá eleições para a diretoria a cada 12 meses. Somente alunos matriculados podem participar e ocupar cargos.',
    },
    {
      title: 'Presidência',
      description:
        'A presidência será ocupada pelos docentes Celso e Anildo, informados de todas as ações do clube. Em caso de desistência, haverá substituição conforme regra interna.',
    },
    {
      title: 'Conduta',
      description:
        'Respeito, colaboração e compromisso com entregas. O clube é um ambiente de aprendizado e desenvolvimento humano e técnico.',
    },
  ],
}

export const JOIN_CTA = {
  title: 'Cadastro de membro',
  subtitle: 'Preencha para receber o calendário e entrar na lista do clube.',
  buttonLabel: 'Clique aqui para realizar o cadastro',
  image: '/assets/cadastro.gif',
  after: {
    title: 'O que acontece depois?',
    steps: [
      'Você entra na lista do clube',
      'Recebe datas e comunicados',
      'Participa de oficinas e projetos',
      'Constrói portfólio com orientação',
    ],
  },
  quickRules: {
    title: 'Regras rápidas',
    items: [
      'Matrícula ativa para acesso completo',
      'Eleições da diretoria a cada 12 meses',
      'Presidência: docentes Celso e Anildo',
    ],
  },
}

export const FOOTER = {
  year: new Date().getFullYear(),
  brand: 'ClubeDS',
  tagline: 'Clube de Programação',
  description:
    'Um ambiente pedagógico e didático focado no desenvolvimento prático dos alunos.',
  logo: '/assets/logo-icon.png',
  columns: [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '#inicio' },
        { label: 'Como funciona', href: '#como-funciona' },
        { label: 'Trilhas', href: '#trilhas' },
        { label: 'Coordenação', href: '#coordenacao' },
      ],
    },
    {
      title: 'Clube',
      links: [
        { label: 'Atividades', href: '#trilhas' },
        { label: 'Eventos', href: '#eventos' },
        { label: 'Cadastro', href: '#cadastro' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
  ],
}
