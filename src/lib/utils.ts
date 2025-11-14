import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ============================================
// FORMATAÇÃO DE TEMPO
// ============================================

export function formatarTempo(segundos: number): string {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segs = segundos % 60;

  if (horas > 0) {
    return `${horas}h ${minutos}m ${segs}s`;
  } else if (minutos > 0) {
    return `${minutos}m ${segs}s`;
  } else {
    return `${segs}s`;
  }
}

export function formatarHoras(segundos: number): string {
  const horas = (segundos / 3600).toFixed(1);
  return `${horas}h`;
}

export function formatarTempoSimples(segundos: number): string {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);

  if (horas > 0) {
    return `${horas}h ${minutos}m`;
  } else {
    return `${minutos}m`;
  }
}

// ============================================
// FORMATAÇÃO DE DATA
// ============================================

export function formatarData(data: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(data);
}

export function formatarDataHora(data: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(data);
}

export function formatarDataRelativa(data: Date): string {
  const agora = new Date();
  const diff = agora.getTime() - data.getTime();
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (dias === 0) return 'Hoje';
  if (dias === 1) return 'Ontem';
  if (dias < 7) return `${dias} dias atrás`;
  if (dias < 30) return `${Math.floor(dias / 7)} semanas atrás`;
  if (dias < 365) return `${Math.floor(dias / 30)} meses atrás`;
  return `${Math.floor(dias / 365)} anos atrás`;
}

// ============================================
// FORMATAÇÃO DE NÚMEROS
// ============================================

export function formatarNumero(numero: number): string {
  return new Intl.NumberFormat('pt-BR').format(numero);
}

export function formatarPercentual(valor: number, total: number): string {
  if (total === 0) return '0%';
  const percentual = (valor / total) * 100;
  return `${percentual.toFixed(1)}%`;
}

export function formatarDinheiro(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

// ============================================
// CÁLCULOS DE ESTATÍSTICAS
// ============================================

export function calcularPercentual(valor: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((valor / total) * 100);
}

export function calcularMedia(valores: number[]): number {
  if (valores.length === 0) return 0;
  const soma = valores.reduce((acc, val) => acc + val, 0);
  return soma / valores.length;
}

export function calcularMediana(valores: number[]): number {
  if (valores.length === 0) return 0;
  const sorted = [...valores].sort((a, b) => a - b);
  const meio = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[meio - 1] + sorted[meio]) / 2;
  }
  return sorted[meio];
}

// ============================================
// GERAÇÃO DE IDs
// ============================================

export function gerarId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ============================================
// VALIDAÇÕES
// ============================================

export function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarSenha(senha: string): {
  valida: boolean;
  erros: string[];
} {
  const erros: string[] = [];

  if (senha.length < 8) {
    erros.push('Senha deve ter no mínimo 8 caracteres');
  }
  if (!/[A-Z]/.test(senha)) {
    erros.push('Senha deve conter pelo menos uma letra maiúscula');
  }
  if (!/[a-z]/.test(senha)) {
    erros.push('Senha deve conter pelo menos uma letra minúscula');
  }
  if (!/[0-9]/.test(senha)) {
    erros.push('Senha deve conter pelo menos um número');
  }

  return {
    valida: erros.length === 0,
    erros,
  };
}

// ============================================
// MANIPULAÇÃO DE ARRAYS
// ============================================

export function agruparPor<T>(
  array: T[],
  chave: keyof T
): Record<string, T[]> {
  return array.reduce((acc, item) => {
    const grupo = String(item[chave]);
    if (!acc[grupo]) {
      acc[grupo] = [];
    }
    acc[grupo].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

export function ordenarPor<T>(
  array: T[],
  chave: keyof T,
  ordem: 'asc' | 'desc' = 'asc'
): T[] {
  return [...array].sort((a, b) => {
    const valorA = a[chave];
    const valorB = b[chave];

    if (valorA < valorB) return ordem === 'asc' ? -1 : 1;
    if (valorA > valorB) return ordem === 'asc' ? 1 : -1;
    return 0;
  });
}

// ============================================
// CORES E TEMAS
// ============================================

export function obterCorPorIndice(indice: number, cores: string[]): string {
  return cores[indice % cores.length];
}

export function gerarCorAleatoria(): string {
  const cores = [
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
  return cores[Math.floor(Math.random() * cores.length)];
}

// ============================================
// STORAGE LOCAL
// ============================================

export function salvarLocal<T>(chave: string, valor: T): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(chave, JSON.stringify(valor));
  }
}

export function obterLocal<T>(chave: string): T | null {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : null;
  }
  return null;
}

export function removerLocal(chave: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(chave);
  }
}

// ============================================
// DEBOUNCE E THROTTLE
// ============================================

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ============================================
// CÁLCULOS DE XP E NÍVEL
// ============================================

export function calcularNivel(xp: number): number {
  // Fórmula: nível = floor(sqrt(xp / 100))
  return Math.floor(Math.sqrt(xp / 100)) + 1;
}

export function calcularXpProximoNivel(nivelAtual: number): number {
  // Fórmula inversa: xp = (nivel - 1)^2 * 100
  return Math.pow(nivelAtual, 2) * 100;
}

export function calcularProgressoNivel(xp: number): {
  nivelAtual: number;
  xpAtual: number;
  xpProximoNivel: number;
  percentual: number;
} {
  const nivelAtual = calcularNivel(xp);
  const xpNivelAtual = calcularXpProximoNivel(nivelAtual - 1);
  const xpProximoNivel = calcularXpProximoNivel(nivelAtual);
  const xpAtual = xp - xpNivelAtual;
  const xpNecessario = xpProximoNivel - xpNivelAtual;
  const percentual = (xpAtual / xpNecessario) * 100;

  return {
    nivelAtual,
    xpAtual,
    xpProximoNivel: xpNecessario,
    percentual: Math.min(percentual, 100),
  };
}
