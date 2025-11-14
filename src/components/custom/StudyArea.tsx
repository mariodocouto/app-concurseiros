'use client';

import { useState } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Clock, 
  BookOpen, 
  FileText, 
  Video, 
  Scale, 
  CheckCircle2,
  FileEdit,
  RefreshCw,
  CreditCard,
  Network,
  Trophy,
  Target,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface StudyAreaProps {
  concurso: any;
}

export default function StudyArea({ concurso }: StudyAreaProps) {
  const [isStudying, setIsStudying] = useState(false);
  const [selectedDisciplina, setSelectedDisciplina] = useState<string | null>(null);
  const [selectedAssunto, setSelectedAssunto] = useState<string | null>(null);
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Disciplinas mockadas
  const disciplinas = [
    { 
      id: '1', 
      nome: 'Direito Constitucional', 
      cor: 'from-blue-500 to-blue-600',
      assuntos: [
        'Princípios Fundamentais',
        'Direitos e Garantias Fundamentais',
        'Organização do Estado',
        'Controle de Constitucionalidade',
        'Poder Legislativo',
      ]
    },
    { 
      id: '2', 
      nome: 'Direito Administrativo', 
      cor: 'from-purple-500 to-purple-600',
      assuntos: [
        'Princípios da Administração',
        'Atos Administrativos',
        'Licitações e Contratos',
        'Servidores Públicos',
        'Responsabilidade Civil',
      ]
    },
    { 
      id: '3', 
      nome: 'Português', 
      cor: 'from-green-500 to-green-600',
      assuntos: [
        'Interpretação de Texto',
        'Ortografia',
        'Sintaxe',
        'Concordância',
        'Regência',
      ]
    },
    { 
      id: '4', 
      nome: 'Raciocínio Lógico', 
      cor: 'from-orange-500 to-orange-600',
      assuntos: [
        'Lógica Proposicional',
        'Lógica de Argumentação',
        'Diagramas Lógicos',
        'Raciocínio Sequencial',
        'Probabilidade',
      ]
    },
  ];

  // Tipos de estudo
  const tiposEstudo = [
    { id: 'pdf', nome: 'PDF/Apostila', icon: FileText, cor: 'from-blue-500 to-blue-600' },
    { id: 'videoaula', nome: 'Videoaula', icon: Video, cor: 'from-red-500 to-red-600' },
    { id: 'lei_seca', nome: 'Lei Seca', icon: Scale, cor: 'from-purple-500 to-purple-600' },
    { id: 'questoes', nome: 'Questões', icon: CheckCircle2, cor: 'from-green-500 to-green-600' },
    { id: 'resumo', nome: 'Resumo', icon: FileEdit, cor: 'from-yellow-500 to-yellow-600' },
    { id: 'revisao', nome: 'Revisão', icon: RefreshCw, cor: 'from-orange-500 to-orange-600' },
    { id: 'flashcard', nome: 'Flashcard', icon: CreditCard, cor: 'from-pink-500 to-pink-600' },
    { id: 'mapa_mental', nome: 'Mapa Mental', icon: Network, cor: 'from-indigo-500 to-indigo-600' },
  ];

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStudy = () => {
    if (!selectedDisciplina || !selectedAssunto || !selectedTipo) {
      alert('Selecione disciplina, assunto e tipo de estudo');
      return;
    }
    setIsStudying(true);
    // Aqui iniciaria o cronômetro real
  };

  const handleFinishStudy = () => {
    setIsStudying(false);
    setTimer(0);
    setIsPaused(false);
    // Aqui salvaria os dados no banco
    alert(`Estudo registrado com sucesso! ${formatTime(timer)} de estudo.`);
  };

  // Se está estudando, mostra o cronômetro
  if (isStudying) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          {/* Informações do estudo */}
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <p className="text-sm font-semibold text-blue-600">
                {disciplinas.find(d => d.id === selectedDisciplina)?.nome}
              </p>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {disciplinas.find(d => d.id === selectedDisciplina)?.assuntos.find((_, i) => i.toString() === selectedAssunto)}
            </h2>
            <p className="text-gray-600">
              {tiposEstudo.find(t => t.id === selectedTipo)?.nome}
            </p>
          </div>

          {/* Cronômetro */}
          <div className="text-center mb-8">
            <div className="inline-block p-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-4 border-blue-200 mb-6">
              <p className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {formatTime(timer)}
              </p>
            </div>

            {/* Botões de controle */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-xl transition-all hover:scale-110"
              >
                {isPaused ? <Play className="w-8 h-8" /> : <Pause className="w-8 h-8" />}
              </button>

              <button
                onClick={handleFinishStudy}
                className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:shadow-xl transition-all hover:scale-110"
              >
                <Square className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Estatísticas da sessão */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Pausas</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Tempo Líquido</p>
              <p className="text-2xl font-bold text-gray-900">{formatTime(timer)}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Meta Diária</p>
              <p className="text-2xl font-bold text-gray-900">4h</p>
            </div>
          </div>

          {/* Modo Pomodoro (opcional) */}
          <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Modo Pomodoro</p>
                  <p className="text-sm text-gray-600">25 min estudo + 5 min pausa</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Ativar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela de seleção de estudo
  return (
    <div className="space-y-6">
      {/* Botão de início rápido */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Pronto para estudar?</h2>
            <p className="text-blue-100">Selecione o que você vai estudar e comece agora</p>
          </div>
          <button
            onClick={handleStartStudy}
            disabled={!selectedDisciplina || !selectedAssunto || !selectedTipo}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
          >
            <Play className="w-6 h-6" />
            Iniciar Estudo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Seleção de Disciplina */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">1. Selecione a Disciplina</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {disciplinas.map((disciplina) => (
            <button
              key={disciplina.id}
              onClick={() => {
                setSelectedDisciplina(disciplina.id);
                setSelectedAssunto(null);
              }}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                selectedDisciplina === disciplina.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${disciplina.cor} rounded-lg mb-3`} />
              <p className="font-semibold text-gray-900 text-sm">{disciplina.nome}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Seleção de Assunto */}
      {selectedDisciplina && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">2. Selecione o Assunto</h3>
          <div className="space-y-2">
            {disciplinas.find(d => d.id === selectedDisciplina)?.assuntos.map((assunto, index) => (
              <button
                key={index}
                onClick={() => setSelectedAssunto(index.toString())}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center justify-between group ${
                  selectedAssunto === index.toString()
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="font-medium text-gray-900">{assunto}</span>
                <ChevronRight className={`w-5 h-5 transition-all ${
                  selectedAssunto === index.toString() ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                }`} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Seleção de Tipo de Estudo */}
      {selectedAssunto && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">3. Como você vai estudar?</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tiposEstudo.map((tipo) => (
              <button
                key={tipo.id}
                onClick={() => setSelectedTipo(tipo.id)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  selectedTipo === tipo.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tipo.cor} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <tipo.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{tipo.nome}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Próximas Revisões */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Próximas Revisões</h3>
          <span className="text-sm text-orange-600 font-semibold">3 pendentes</span>
        </div>

        <div className="space-y-3">
          {[
            { disciplina: 'Direito Constitucional', assunto: 'Controle de Constitucionalidade', dias: 2 },
            { disciplina: 'Português', assunto: 'Interpretação de Texto', dias: 5 },
            { disciplina: 'Raciocínio Lógico', assunto: 'Lógica Proposicional', dias: 7 },
          ].map((revisao, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
              <div>
                <p className="font-semibold text-gray-900">{revisao.disciplina}</p>
                <p className="text-sm text-gray-600">{revisao.assunto}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-orange-600">Em {revisao.dias} dias</p>
                <button className="text-xs text-blue-600 hover:underline">Revisar agora</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
