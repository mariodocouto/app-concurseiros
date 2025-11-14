'use client';

import { Clock, TrendingUp, Award, Flame, Trophy, Target, BookOpen, CheckCircle2, Calendar, BarChart3 } from 'lucide-react';

interface DashboardOverviewProps {
  stats: {
    horasHoje: number;
    horasSemana: number;
    horasMes: number;
    mediaDiaria: number;
    questoesResolvidas: number;
    percentualAcertos: number;
    diasConsecutivos: number;
    percentualEdital: number;
    nivel: number;
    xp: number;
    xpProximoNivel: number;
  };
}

export default function DashboardOverview({ stats }: DashboardOverviewProps) {
  // Dados mockados de disciplinas
  const disciplinas = [
    { nome: 'Direito Constitucional', horas: 45, percentual: 65, cor: 'from-blue-500 to-blue-600' },
    { nome: 'Direito Administrativo', horas: 38, percentual: 52, cor: 'from-purple-500 to-purple-600' },
    { nome: 'Português', horas: 32, percentual: 48, cor: 'from-green-500 to-green-600' },
    { nome: 'Raciocínio Lógico', horas: 28, percentual: 40, cor: 'from-orange-500 to-orange-600' },
    { nome: 'Informática', horas: 22, percentual: 35, cor: 'from-pink-500 to-pink-600' },
  ];

  // Conquistas recentes
  const conquistasRecentes = [
    { nome: '100 Horas', icone: Clock, cor: 'from-blue-500 to-blue-600' },
    { nome: '7 Dias Seguidos', icone: Flame, cor: 'from-orange-500 to-orange-600' },
    { nome: '500 Questões', icone: CheckCircle2, cor: 'from-green-500 to-green-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Cards de estatísticas principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Horas Hoje */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +12%
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">Horas Hoje</p>
          <p className="text-3xl font-bold text-gray-900">{stats.horasHoje}h</p>
        </div>

        {/* Horas na Semana */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +8%
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">Horas na Semana</p>
          <p className="text-3xl font-bold text-gray-900">{stats.horasSemana}h</p>
        </div>

        {/* Questões Resolvidas */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {stats.percentualAcertos}%
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">Questões</p>
          <p className="text-3xl font-bold text-gray-900">{stats.questoesResolvidas}</p>
        </div>

        {/* Dias Consecutivos */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Recorde!
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">Dias Seguidos</p>
          <p className="text-3xl font-bold text-gray-900">{stats.diasConsecutivos}</p>
        </div>
      </div>

      {/* Progresso do Edital e Conquistas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progresso do Edital */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Progresso do Edital</h3>
            <span className="text-2xl font-bold text-blue-600">{stats.percentualEdital}%</span>
          </div>

          {/* Barra de progresso geral */}
          <div className="mb-6">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${stats.percentualEdital}%` }}
              />
            </div>
          </div>

          {/* Disciplinas */}
          <div className="space-y-4">
            {disciplinas.map((disciplina, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${disciplina.cor}`} />
                    <span className="text-sm font-medium text-gray-900">{disciplina.nome}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-600">{disciplina.horas}h</span>
                    <span className="text-sm font-semibold text-gray-900">{disciplina.percentual}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${disciplina.cor} rounded-full transition-all duration-500`}
                    style={{ width: `${disciplina.percentual}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conquistas Recentes */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Conquistas Recentes</h3>
          
          <div className="space-y-4">
            {conquistasRecentes.map((conquista, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${conquista.cor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <conquista.icone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{conquista.nome}</p>
                  <p className="text-xs text-gray-600">Desbloqueada hoje</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 font-semibold rounded-xl hover:shadow-md transition-all border border-purple-200">
            Ver Todas
          </button>
        </div>
      </div>

      {/* Gráfico de Horas e Sugestões da IA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de Horas */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Horas de Estudo (Últimos 7 dias)</h3>
          
          {/* Gráfico de barras simples */}
          <div className="flex items-end justify-between gap-2 h-48">
            {[3.2, 4.5, 3.8, 5.2, 4.1, 3.5, 4.8].map((horas, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden" style={{ height: '100%' }}>
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500"
                    style={{ height: `${(horas / 6) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-600">{horas}h</span>
                <span className="text-xs text-gray-500">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sugestões da IA */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Sugestões IA</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Revisar Constitucional</p>
              <p className="text-xs text-gray-600">Última revisão há 8 dias</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Foco em Administrativo</p>
              <p className="text-xs text-gray-600">Apenas 52% concluído</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Resolver mais questões</p>
              <p className="text-xs text-gray-600">Meta: 50 questões/dia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap de Estudos */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Mapa de Calor - Últimos 90 dias</h3>
        
        <div className="grid grid-cols-13 gap-1">
          {Array.from({ length: 91 }).map((_, index) => {
            const intensity = Math.floor(Math.random() * 5);
            const colors = ['bg-gray-100', 'bg-blue-200', 'bg-blue-400', 'bg-blue-600', 'bg-blue-800'];
            return (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-sm ${colors[intensity]} hover:scale-150 transition-transform cursor-pointer`}
                title={`${intensity * 2}h estudadas`}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-end gap-2 mt-4">
          <span className="text-xs text-gray-600">Menos</span>
          <div className="w-3 h-3 rounded-sm bg-gray-100" />
          <div className="w-3 h-3 rounded-sm bg-blue-200" />
          <div className="w-3 h-3 rounded-sm bg-blue-400" />
          <div className="w-3 h-3 rounded-sm bg-blue-600" />
          <div className="w-3 h-3 rounded-sm bg-blue-800" />
          <span className="text-xs text-gray-600">Mais</span>
        </div>
      </div>
    </div>
  );
}
