'use client';

import { useState } from 'react';
import { 
  CheckCircle2, 
  X, 
  Target, 
  TrendingUp, 
  Filter, 
  Search,
  BarChart3,
  Clock,
  Award,
  ChevronRight,
  Play,
  BookOpen
} from 'lucide-react';

export default function QuestionsArea() {
  const [mode, setMode] = useState<'select' | 'manual' | 'automatic' | 'solving'>('select');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Questão mockada
  const questaoExemplo = {
    id: '1',
    enunciado: 'Segundo a Constituição Federal de 1988, são direitos sociais, EXCETO:',
    alternativas: [
      { letra: 'A', texto: 'Educação, saúde e alimentação' },
      { letra: 'B', texto: 'Trabalho, moradia e transporte' },
      { letra: 'C', texto: 'Lazer, segurança e previdência social' },
      { letra: 'D', texto: 'Propriedade privada e livre iniciativa' },
      { letra: 'E', texto: 'Proteção à maternidade e à infância' },
    ],
    respostaCorreta: 'D',
    disciplina: 'Direito Constitucional',
    assunto: 'Direitos Sociais',
    banca: 'CEBRASPE',
    ano: 2023,
  };

  // Estatísticas mockadas
  const stats = {
    totalResolvidas: 1247,
    acertos: 972,
    erros: 275,
    percentualAcerto: 78,
    porDisciplina: [
      { nome: 'Direito Constitucional', total: 320, acertos: 256, percentual: 80 },
      { nome: 'Direito Administrativo', total: 280, acertos: 210, percentual: 75 },
      { nome: 'Português', total: 350, acertos: 280, percentual: 80 },
      { nome: 'Raciocínio Lógico', total: 297, acertos: 226, percentual: 76 },
    ],
  };

  // Tela de seleção de modo
  if (mode === 'select') {
    return (
      <div className="space-y-6">
        {/* Estatísticas gerais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Resolvidas</p>
            <p className="text-3xl font-bold text-gray-900">{stats.totalResolvidas}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Acertos</p>
            <p className="text-3xl font-bold text-green-600">{stats.acertos}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Erros</p>
            <p className="text-3xl font-bold text-red-600">{stats.erros}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Taxa de Acerto</p>
            <p className="text-3xl font-bold text-purple-600">{stats.percentualAcerto}%</p>
          </div>
        </div>

        {/* Escolha do modo */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Como você quer resolver questões?</h2>
          <p className="text-blue-100">Escolha entre controle manual ou propostas automáticas da IA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Controle Manual */}
          <button
            onClick={() => setMode('manual')}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-blue-500 transition-all text-left group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Controle Manual</h3>
            <p className="text-gray-600 mb-4">
              Registre manualmente as questões que você resolver em outros sites ou materiais
            </p>
            <div className="flex items-center text-blue-600 font-semibold">
              Registrar questões <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Propostas Automáticas */}
          <button
            onClick={() => setMode('automatic')}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all text-left group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Propostas Automáticas</h3>
            <p className="text-gray-600 mb-4">
              Deixe a IA propor questões personalizadas baseadas no seu desempenho e edital
            </p>
            <div className="flex items-center text-purple-600 font-semibold">
              Resolver questões <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Desempenho por Disciplina */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Desempenho por Disciplina</h3>
          
          <div className="space-y-4">
            {stats.porDisciplina.map((disciplina, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{disciplina.nome}</p>
                    <p className="text-sm text-gray-600">
                      {disciplina.acertos} acertos de {disciplina.total} questões
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{disciplina.percentual}%</p>
                  </div>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${disciplina.percentual}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evolução */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Evolução (Últimos 7 dias)</h3>
          
          <div className="flex items-end justify-between gap-2 h-48">
            {[72, 75, 73, 78, 76, 80, 78].map((percentual, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden" style={{ height: '100%' }}>
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all duration-500"
                    style={{ height: `${percentual}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-600">{percentual}%</span>
                <span className="text-xs text-gray-500">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Modo de controle manual
  if (mode === 'manual') {
    return (
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => setMode('select')}
          className="mb-6 text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Voltar
        </button>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Registrar Questões Manualmente</h2>

          <div className="space-y-6">
            {/* Disciplina */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Disciplina
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Direito Constitucional</option>
                <option>Direito Administrativo</option>
                <option>Português</option>
                <option>Raciocínio Lógico</option>
              </select>
            </div>

            {/* Assunto */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Assunto
              </label>
              <input
                type="text"
                placeholder="Ex: Controle de Constitucionalidade"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Quantidade e Acertos */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Questões Resolvidas
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Acertos
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Banca e Fonte */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Banca
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>CEBRASPE</option>
                  <option>FGV</option>
                  <option>FCC</option>
                  <option>VUNESP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Fonte
                </label>
                <input
                  type="text"
                  placeholder="Ex: QConcursos, PDF, etc"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Botão de salvar */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Registrar Questões
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Modo automático - filtros
  if (mode === 'automatic') {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setMode('select')}
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Voltar
        </button>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Questões Personalizadas</h2>
          <p className="text-purple-100">Configure os filtros e deixe a IA selecionar as melhores questões para você</p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Filtros</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Disciplina */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Disciplina
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Todas</option>
                <option>Direito Constitucional</option>
                <option>Direito Administrativo</option>
                <option>Português</option>
                <option>Raciocínio Lógico</option>
              </select>
            </div>

            {/* Banca */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Banca
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Todas</option>
                <option>CEBRASPE</option>
                <option>FGV</option>
                <option>FCC</option>
                <option>VUNESP</option>
              </select>
            </div>

            {/* Dificuldade */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Dificuldade
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Todas</option>
                <option>Fácil</option>
                <option>Média</option>
                <option>Difícil</option>
              </select>
            </div>

            {/* Quantidade */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Quantidade de Questões
              </label>
              <input
                type="number"
                defaultValue={10}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Opções adicionais */}
          <div className="mt-6 space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" />
              <span className="text-gray-900">Apenas questões que eu errei</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" />
              <span className="text-gray-900">Focar nos meus pontos fracos</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" />
              <span className="text-gray-900">Questões recentes (últimos 3 anos)</span>
            </label>
          </div>

          <button 
            onClick={() => setMode('solving')}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-6 h-6" />
            Começar a Resolver
          </button>
        </div>

        {/* Filtros Salvos */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Filtros Salvos</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <p className="font-semibold text-gray-900 mb-1">Constitucional CESPE</p>
              <p className="text-sm text-gray-600">Direito Constitucional • CEBRASPE • Média</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <p className="font-semibold text-gray-900 mb-1">Português Difícil</p>
              <p className="text-sm text-gray-600">Português • Todas • Difícil</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Modo de resolução
  if (mode === 'solving') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMode('automatic')}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Voltar
              </button>
              <div>
                <p className="text-sm text-gray-600">Questão {currentQuestion + 1} de 10</p>
                <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                    style={{ width: `${((currentQuestion + 1) / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-bold text-gray-900">02:34</span>
            </div>
          </div>

          {/* Informações da questão */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {questaoExemplo.disciplina}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
              {questaoExemplo.banca}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
              {questaoExemplo.ano}
            </span>
          </div>

          {/* Enunciado */}
          <div className="mb-8">
            <p className="text-lg text-gray-900 leading-relaxed">
              {questaoExemplo.enunciado}
            </p>
          </div>

          {/* Alternativas */}
          <div className="space-y-3 mb-8">
            {questaoExemplo.alternativas.map((alt) => (
              <button
                key={alt.letra}
                onClick={() => setSelectedAnswer(alt.letra)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  selectedAnswer === alt.letra
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                    selectedAnswer === alt.letra
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {alt.letra}
                  </div>
                  <p className="text-gray-900 flex-1">{alt.texto}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Botões de ação */}
          <div className="flex items-center gap-4">
            <button
              disabled={!selectedAnswer}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmar Resposta
            </button>
            <button className="px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-gray-400 transition-all">
              Pular
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
