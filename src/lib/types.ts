// 🎯 TIPOS COMPLETOS DO SISTEMA DE CONCURSEIROS

// ============================================
// USUÁRIO E AUTENTICAÇÃO
// ============================================

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  xp: number;
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
  pomodoroTime: number; // minutos
  breakTime: number; // minutos
  dailyGoal: number; // horas
}

// ============================================
// CONCURSOS E EDITAIS
// ============================================

export type ConcursoStatus = 'aberto' | 'previsto' | 'personalizado';
export type AreaConcurso = 
  | 'policial' 
  | 'tribunais' 
  | 'inss' 
  | 'tribunais_contas' 
  | 'fiscal' 
  | 'juridica' 
  | 'bancaria' 
  | 'administrativa' 
  | 'legislativa';

export interface Concurso {
  id: string;
  nome: string;
  orgao: string;
  banca: string;
  area: AreaConcurso;
  status: ConcursoStatus;
  dataEdital?: Date;
  dataProva?: Date;
  vagas?: number;
  salario?: number;
  editalUrl?: string;
  editalVerticalizado: EditalVerticalizado;
}

export interface EditalVerticalizado {
  id: string;
  concursoId: string;
  disciplinas: Disciplina[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Disciplina {
  id: string;
  nome: string;
  peso: number;
  prioridade: 'alta' | 'media' | 'baixa';
  cor: string;
  assuntos: Assunto[];
  horasEstudadas: number;
  percentualConcluido: number;
}

export interface Assunto {
  id: string;
  disciplinaId: string;
  nome: string;
  topicos: string[];
  concluido: boolean;
  horasEstudadas: number;
  ultimaRevisao?: Date;
  proximaRevisao?: Date;
}

// ============================================
// ESTUDOS E CRONÔMETRO
// ============================================

export type TipoEstudo = 
  | 'pdf' 
  | 'videoaula' 
  | 'lei_seca' 
  | 'questoes' 
  | 'resumo' 
  | 'revisao' 
  | 'flashcard' 
  | 'mapa_mental' 
  | 'simulado';

export interface SessaoEstudo {
  id: string;
  userId: string;
  concursoId: string;
  disciplinaId: string;
  assuntoId: string;
  tipoEstudo: TipoEstudo;
  inicio: Date;
  fim?: Date;
  duracao: number; // segundos
  pausas: Pausa[];
  concluido: boolean;
  observacoes?: string;
}

export interface Pausa {
  inicio: Date;
  fim: Date;
  duracao: number; // segundos
}

export interface EstatisticasEstudo {
  horasLiquidasHoje: number;
  horasLiquidasSemana: number;
  horasLiquidasMes: number;
  horasLiquidasTotal: number;
  mediaDiaria: number;
  diasConsecutivos: number;
  disciplinaMaisEstudada: string;
  disciplinaMenosEstudada: string;
  percentualEditalConcluido: number;
}

// ============================================
// QUESTÕES
// ============================================

export interface Questao {
  id: string;
  enunciado: string;
  alternativas: Alternativa[];
  respostaCorreta: string;
  disciplina: string;
  assunto: string;
  banca: string;
  ano: number;
  dificuldade: 'facil' | 'media' | 'dificil';
  fonte: string;
  comentario?: string;
}

export interface Alternativa {
  letra: string;
  texto: string;
}

export interface RespostaQuestao {
  id: string;
  userId: string;
  questaoId: string;
  respostaUsuario: string;
  correta: boolean;
  tempo: number; // segundos
  dataResposta: Date;
}

export interface EstatisticasQuestoes {
  totalResolvidas: number;
  totalAcertos: number;
  totalErros: number;
  percentualAcerto: number;
  porDisciplina: {
    disciplina: string;
    total: number;
    acertos: number;
    percentual: number;
  }[];
  porBanca: {
    banca: string;
    total: number;
    acertos: number;
    percentual: number;
  }[];
  evolucao: {
    data: Date;
    percentual: number;
  }[];
}

export interface FiltroQuestoes {
  disciplinas?: string[];
  assuntos?: string[];
  bancas?: string[];
  anos?: number[];
  dificuldade?: ('facil' | 'media' | 'dificil')[];
  apenasErradas?: boolean;
  apenasFavoritas?: boolean;
}

// ============================================
// GAMIFICAÇÃO E COMUNIDADE
// ============================================

export interface Grupo {
  id: string;
  nome: string;
  descricao: string;
  criadorId: string;
  tipo: 'publico' | 'privado';
  concursoId?: string;
  area?: AreaConcurso;
  modalidades: ModalidadeRanking[];
  membros: MembroGrupo[];
  createdAt: Date;
}

export type ModalidadeRanking = 
  | 'percentual_edital' 
  | 'horas_totais' 
  | 'horas_semanais' 
  | 'horas_mensais' 
  | 'media_diaria' 
  | 'questoes_resolvidas' 
  | 'percentual_acertos' 
  | 'acertos_por_disciplina';

export interface MembroGrupo {
  userId: string;
  grupoId: string;
  modalidadesParticipando: ModalidadeRanking[];
  dataEntrada: Date;
}

export interface RankingItem {
  posicao: number;
  userId: string;
  userName: string;
  avatar?: string;
  valor: number;
  unidade: string;
}

export interface Conquista {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  tipo: 'horas' | 'questoes' | 'constancia' | 'acertos' | 'especial';
  requisito: number;
  cor: string;
}

export interface ConquistaUsuario {
  userId: string;
  conquistaId: string;
  dataConquista: Date;
}

export interface Nivel {
  nivel: number;
  nome: string;
  xpMinimo: number;
  xpMaximo: number;
  cor: string;
  icone: string;
}

// ============================================
// DASHBOARD E ANALYTICS
// ============================================

export interface DashboardData {
  usuario: User;
  concursoAtual: Concurso;
  estatisticasEstudo: EstatisticasEstudo;
  estatisticasQuestoes: EstatisticasQuestoes;
  proximasRevisoes: Assunto[];
  sugestoesIA: SugestaoIA[];
  heatmap: HeatmapData[];
  graficoDisciplinas: GraficoDisciplina[];
}

export interface SugestaoIA {
  id: string;
  tipo: 'revisao' | 'estudo' | 'questoes' | 'descanso' | 'ajuste_meta';
  titulo: string;
  descricao: string;
  prioridade: 'alta' | 'media' | 'baixa';
  acao?: string;
}

export interface HeatmapData {
  data: Date;
  valor: number; // horas estudadas
  nivel: 0 | 1 | 2 | 3 | 4; // intensidade visual
}

export interface GraficoDisciplina {
  disciplina: string;
  horas: number;
  percentual: number;
  cor: string;
}

// ============================================
// PLANO DE ESTUDOS
// ============================================

export interface PlanoEstudos {
  id: string;
  userId: string;
  concursoId: string;
  dataInicio: Date;
  dataProva: Date;
  horasDiarias: number;
  diasSemana: number[];
  ciclos: CicloEstudo[];
  geradoPorIA: boolean;
}

export interface CicloEstudo {
  id: string;
  numero: number;
  dataInicio: Date;
  dataFim: Date;
  disciplinas: {
    disciplinaId: string;
    horasPlanejadas: number;
    horasRealizadas: number;
  }[];
  concluido: boolean;
}

// ============================================
// NOTIFICAÇÕES
// ============================================

export interface Notificacao {
  id: string;
  userId: string;
  tipo: 'revisao' | 'meta' | 'conquista' | 'ranking' | 'grupo' | 'sistema';
  titulo: string;
  mensagem: string;
  lida: boolean;
  acao?: string;
  createdAt: Date;
}

// ============================================
// UPLOAD E PROCESSAMENTO DE EDITAL
// ============================================

export interface UploadEdital {
  id: string;
  userId: string;
  nomeArquivo: string;
  tamanho: number;
  url: string;
  status: 'processando' | 'concluido' | 'erro';
  progresso: number;
  editalExtraido?: EditalVerticalizado;
  createdAt: Date;
}
