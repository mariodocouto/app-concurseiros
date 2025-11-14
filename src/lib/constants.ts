import { AreaConcurso, Concurso, Conquista, Nivel } from './types';

// ============================================
// CONCURSOS PRÉ-CADASTRADOS
// ============================================

export const CONCURSOS_ABERTOS: Concurso[] = [
  {
    id: 'prf-2024',
    nome: 'Polícia Rodoviária Federal',
    orgao: 'PRF',
    banca: 'CEBRASPE',
    area: 'policial',
    status: 'aberto',
    dataProva: new Date('2024-12-15'),
    vagas: 1500,
    salario: 10900,
    editalVerticalizado: {
      id: 'edital-prf-2024',
      concursoId: 'prf-2024',
      disciplinas: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: 'pcdf-2024',
    nome: 'Polícia Civil do Distrito Federal',
    orgao: 'PCDF',
    banca: 'CESPE',
    area: 'policial',
    status: 'aberto',
    vagas: 300,
    salario: 12500,
    editalVerticalizado: {
      id: 'edital-pcdf-2024',
      concursoId: 'pcdf-2024',
      disciplinas: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: 'trf1-2024',
    nome: 'Tribunal Regional Federal 1ª Região',
    orgao: 'TRF1',
    banca: 'FGV',
    area: 'tribunais',
    status: 'aberto',
    vagas: 80,
    salario: 13900,
    editalVerticalizado: {
      id: 'edital-trf1-2024',
      concursoId: 'trf1-2024',
      disciplinas: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

export const CONCURSOS_PREVISTOS: Concurso[] = [
  {
    id: 'pf-2025',
    nome: 'Polícia Federal',
    orgao: 'PF',
    banca: 'CEBRASPE',
    area: 'policial',
    status: 'previsto',
    vagas: 1000,
    salario: 23700,
    editalVerticalizado: {
      id: 'edital-pf-2025',
      concursoId: 'pf-2025',
      disciplinas: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: 'inss-2025',
    nome: 'Instituto Nacional do Seguro Social',
    orgao: 'INSS',
    banca: 'CEBRASPE',
    area: 'inss',
    status: 'previsto',
    vagas: 1000,
    salario: 7600,
    editalVerticalizado: {
      id: 'edital-inss-2025',
      concursoId: 'inss-2025',
      disciplinas: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

// ============================================
// ÁREAS DE CONCURSO
// ============================================

export const AREAS_CONCURSO: { value: AreaConcurso; label: string; icon: string }[] = [
  { value: 'policial', label: 'Carreiras Policiais', icon: 'Shield' },
  { value: 'tribunais', label: 'Tribunais', icon: 'Scale' },
  { value: 'inss', label: 'INSS', icon: 'Building2' },
  { value: 'tribunais_contas', label: 'Tribunais de Contas', icon: 'FileCheck' },
  { value: 'fiscal', label: 'Fiscais', icon: 'Calculator' },
  { value: 'juridica', label: 'Carreiras Jurídicas', icon: 'Gavel' },
  { value: 'bancaria', label: 'Bancários', icon: 'Landmark' },
  { value: 'administrativa', label: 'Administrativas', icon: 'Briefcase' },
  { value: 'legislativa', label: 'Legislativas', icon: 'BookOpen' },
];

// ============================================
// TIPOS DE ESTUDO
// ============================================

export const TIPOS_ESTUDO = [
  { value: 'pdf', label: 'PDF/Apostila', icon: 'FileText', color: 'from-blue-500 to-blue-600' },
  { value: 'videoaula', label: 'Videoaula', icon: 'Video', color: 'from-red-500 to-red-600' },
  { value: 'lei_seca', label: 'Lei Seca', icon: 'Scale', color: 'from-purple-500 to-purple-600' },
  { value: 'questoes', label: 'Questões', icon: 'CheckCircle2', color: 'from-green-500 to-green-600' },
  { value: 'resumo', label: 'Resumo', icon: 'FileEdit', color: 'from-yellow-500 to-yellow-600' },
  { value: 'revisao', label: 'Revisão', icon: 'RefreshCw', color: 'from-orange-500 to-orange-600' },
  { value: 'flashcard', label: 'Flashcard', icon: 'CreditCard', color: 'from-pink-500 to-pink-600' },
  { value: 'mapa_mental', label: 'Mapa Mental', icon: 'Network', color: 'from-indigo-500 to-indigo-600' },
  { value: 'simulado', label: 'Simulado', icon: 'Trophy', color: 'from-cyan-500 to-cyan-600' },
];

// ============================================
// BANCAS ORGANIZADORAS
// ============================================

export const BANCAS = [
  'CEBRASPE',
  'FGV',
  'FCC',
  'VUNESP',
  'CESPE',
  'IBFC',
  'QUADRIX',
  'AOCP',
  'IDECAN',
  'IADES',
  'CONSULPLAN',
  'FUNDATEC',
  'IBADE',
  'INSTITUTO AOCP',
  'OUTRAS',
];

// ============================================
// NÍVEIS E GAMIFICAÇÃO
// ============================================

export const NIVEIS: Nivel[] = [
  { nivel: 1, nome: 'Iniciante', xpMinimo: 0, xpMaximo: 100, cor: 'from-gray-400 to-gray-500', icone: 'Sprout' },
  { nivel: 2, nome: 'Aprendiz', xpMinimo: 101, xpMaximo: 300, cor: 'from-green-400 to-green-500', icone: 'Leaf' },
  { nivel: 3, nome: 'Estudante', xpMinimo: 301, xpMaximo: 600, cor: 'from-blue-400 to-blue-500', icone: 'BookOpen' },
  { nivel: 4, nome: 'Dedicado', xpMinimo: 601, xpMaximo: 1000, cor: 'from-purple-400 to-purple-500', icone: 'Zap' },
  { nivel: 5, nome: 'Avançado', xpMinimo: 1001, xpMaximo: 1500, cor: 'from-orange-400 to-orange-500', icone: 'Flame' },
  { nivel: 6, nome: 'Expert', xpMinimo: 1501, xpMaximo: 2500, cor: 'from-red-400 to-red-500', icone: 'Award' },
  { nivel: 7, nome: 'Mestre', xpMinimo: 2501, xpMaximo: 4000, cor: 'from-yellow-400 to-yellow-500', icone: 'Crown' },
  { nivel: 8, nome: 'Elite', xpMinimo: 4001, xpMaximo: 6000, cor: 'from-pink-400 to-pink-500', icone: 'Star' },
  { nivel: 9, nome: 'Lendário', xpMinimo: 6001, xpMaximo: 10000, cor: 'from-indigo-400 to-indigo-500', icone: 'Sparkles' },
  { nivel: 10, nome: 'Aprovado', xpMinimo: 10001, xpMaximo: 999999, cor: 'from-cyan-400 to-cyan-500', icone: 'Trophy' },
];

export const CONQUISTAS: Conquista[] = [
  // Conquistas de Horas
  { id: 'h10', nome: '10 Horas', descricao: 'Estudou 10 horas líquidas', icone: 'Clock', tipo: 'horas', requisito: 10, cor: 'from-blue-400 to-blue-500' },
  { id: 'h50', nome: '50 Horas', descricao: 'Estudou 50 horas líquidas', icone: 'Clock', tipo: 'horas', requisito: 50, cor: 'from-blue-500 to-blue-600' },
  { id: 'h100', nome: '100 Horas', descricao: 'Estudou 100 horas líquidas', icone: 'Clock', tipo: 'horas', requisito: 100, cor: 'from-purple-500 to-purple-600' },
  { id: 'h500', nome: '500 Horas', descricao: 'Estudou 500 horas líquidas', icone: 'Clock', tipo: 'horas', requisito: 500, cor: 'from-orange-500 to-orange-600' },
  { id: 'h1000', nome: '1000 Horas', descricao: 'Estudou 1000 horas líquidas', icone: 'Clock', tipo: 'horas', requisito: 1000, cor: 'from-red-500 to-red-600' },
  
  // Conquistas de Questões
  { id: 'q100', nome: '100 Questões', descricao: 'Resolveu 100 questões', icone: 'CheckCircle2', tipo: 'questoes', requisito: 100, cor: 'from-green-400 to-green-500' },
  { id: 'q500', nome: '500 Questões', descricao: 'Resolveu 500 questões', icone: 'CheckCircle2', tipo: 'questoes', requisito: 500, cor: 'from-green-500 to-green-600' },
  { id: 'q1000', nome: '1000 Questões', descricao: 'Resolveu 1000 questões', icone: 'CheckCircle2', tipo: 'questoes', requisito: 1000, cor: 'from-emerald-500 to-emerald-600' },
  { id: 'q5000', nome: '5000 Questões', descricao: 'Resolveu 5000 questões', icone: 'CheckCircle2', tipo: 'questoes', requisito: 5000, cor: 'from-teal-500 to-teal-600' },
  
  // Conquistas de Constância
  { id: 'c7', nome: '7 Dias Seguidos', descricao: 'Estudou 7 dias consecutivos', icone: 'Flame', tipo: 'constancia', requisito: 7, cor: 'from-orange-400 to-orange-500' },
  { id: 'c30', nome: '30 Dias Seguidos', descricao: 'Estudou 30 dias consecutivos', icone: 'Flame', tipo: 'constancia', requisito: 30, cor: 'from-orange-500 to-orange-600' },
  { id: 'c100', nome: '100 Dias Seguidos', descricao: 'Estudou 100 dias consecutivos', icone: 'Flame', tipo: 'constancia', requisito: 100, cor: 'from-red-500 to-red-600' },
  
  // Conquistas de Acertos
  { id: 'a70', nome: '70% de Acertos', descricao: 'Atingiu 70% de acertos', icone: 'Target', tipo: 'acertos', requisito: 70, cor: 'from-yellow-400 to-yellow-500' },
  { id: 'a80', nome: '80% de Acertos', descricao: 'Atingiu 80% de acertos', icone: 'Target', tipo: 'acertos', requisito: 80, cor: 'from-yellow-500 to-yellow-600' },
  { id: 'a90', nome: '90% de Acertos', descricao: 'Atingiu 90% de acertos', icone: 'Target', tipo: 'acertos', requisito: 90, cor: 'from-amber-500 to-amber-600' },
  
  // Conquistas Especiais
  { id: 'first', nome: 'Primeira Sessão', descricao: 'Completou sua primeira sessão de estudos', icone: 'Star', tipo: 'especial', requisito: 1, cor: 'from-pink-400 to-pink-500' },
  { id: 'edital', nome: 'Edital Completo', descricao: 'Concluiu 100% do edital', icone: 'Trophy', tipo: 'especial', requisito: 100, cor: 'from-cyan-500 to-cyan-600' },
];

// ============================================
// MODALIDADES DE RANKING
// ============================================

export const MODALIDADES_RANKING = [
  { value: 'percentual_edital', label: 'Percentual do Edital', icon: 'Percent', unidade: '%' },
  { value: 'horas_totais', label: 'Horas Totais', icon: 'Clock', unidade: 'h' },
  { value: 'horas_semanais', label: 'Horas Semanais', icon: 'Calendar', unidade: 'h' },
  { value: 'horas_mensais', label: 'Horas Mensais', icon: 'CalendarDays', unidade: 'h' },
  { value: 'media_diaria', label: 'Média Diária', icon: 'TrendingUp', unidade: 'h' },
  { value: 'questoes_resolvidas', label: 'Questões Resolvidas', icon: 'CheckCircle2', unidade: 'questões' },
  { value: 'percentual_acertos', label: 'Percentual de Acertos', icon: 'Target', unidade: '%' },
  { value: 'acertos_por_disciplina', label: 'Acertos por Disciplina', icon: 'BookOpen', unidade: '%' },
];

// ============================================
// CORES PARA DISCIPLINAS
// ============================================

export const CORES_DISCIPLINAS = [
  'from-blue-500 to-blue-600',
  'from-green-500 to-green-600',
  'from-purple-500 to-purple-600',
  'from-orange-500 to-orange-600',
  'from-pink-500 to-pink-600',
  'from-indigo-500 to-indigo-600',
  'from-red-500 to-red-600',
  'from-yellow-500 to-yellow-600',
  'from-teal-500 to-teal-600',
  'from-cyan-500 to-cyan-600',
];

// ============================================
// CONFIGURAÇÕES PADRÃO
// ============================================

export const DEFAULT_POMODORO_TIME = 25; // minutos
export const DEFAULT_BREAK_TIME = 5; // minutos
export const DEFAULT_DAILY_GOAL = 4; // horas

// ============================================
// REGRAS DE REVISÃO
// ============================================

export const REVISAO_INTERVALS = {
  primeira: 1, // 24 horas
  segunda: 7, // 7 dias
  terceira: 30, // 30 dias
};

// ============================================
// XP POR AÇÃO
// ============================================

export const XP_REWARDS = {
  sessaoEstudo: 10, // por hora
  questaoCorreta: 5,
  questaoErrada: 1,
  revisao: 15,
  diasConsecutivos: 20,
  metaDiaria: 25,
};
