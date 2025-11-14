import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export type User = {
  id: string;
  email: string;
  name: string;
  created_at: string;
  avatar_url?: string;
};

export type Concurso = {
  id: string;
  nome: string;
  orgao: string;
  area: string;
  edital_url?: string;
  data_prova?: string;
  status: 'aberto' | 'previsto' | 'encerrado';
  created_at: string;
};

export type Disciplina = {
  id: string;
  concurso_id: string;
  nome: string;
  ordem: number;
  peso?: number;
  created_at: string;
};

export type Topico = {
  id: string;
  disciplina_id: string;
  nome: string;
  ordem: number;
  status: 'pendente' | 'lido' | 'aula_assistida' | 'resumo_feito' | 'lei_seca_lida' | 'revisado' | 'questoes_feitas';
  created_at: string;
};

export type Estudo = {
  id: string;
  user_id: string;
  disciplina_id: string;
  topico_id?: string;
  tipo: 'teoria' | 'lei_seca' | 'questoes' | 'pdf' | 'video' | 'revisao' | 'resumo' | 'flashcards';
  tempo_minutos: number;
  data: string;
  observacoes?: string;
  created_at: string;
};

export type Questao = {
  id: string;
  user_id: string;
  disciplina_id: string;
  topico_id?: string;
  banca?: string;
  ano?: number;
  acertou: boolean;
  dificuldade?: 'facil' | 'medio' | 'dificil';
  data: string;
  created_at: string;
};

export type Revisao = {
  id: string;
  user_id: string;
  topico_id: string;
  tipo: '24h' | '7d' | '30d';
  data_estudo: string;
  data_revisao: string;
  concluida: boolean;
  created_at: string;
};

export type LeiSeca = {
  id: string;
  user_id: string;
  nome: string;
  numero: string;
  total_artigos: number;
  artigos_estudados: number;
  ultimo_artigo?: number;
  created_at: string;
};

export type Grupo = {
  id: string;
  nome: string;
  descricao?: string;
  criador_id: string;
  publico: boolean;
  modalidades: string[];
  created_at: string;
};

export type GrupoMembro = {
  id: string;
  grupo_id: string;
  user_id: string;
  modalidades_participando: string[];
  joined_at: string;
};

export type Meta = {
  id: string;
  user_id: string;
  tipo: 'diaria' | 'semanal' | 'mensal';
  valor_alvo: number;
  valor_atual: number;
  data_inicio: string;
  data_fim: string;
  created_at: string;
};
