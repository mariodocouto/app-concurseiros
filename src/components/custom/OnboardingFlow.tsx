'use client';

import { useState } from 'react';
import { 
  Shield, 
  Scale, 
  Building2, 
  FileCheck, 
  Calculator, 
  Landmark, 
  Briefcase, 
  BookOpen,
  Upload,
  Search,
  ArrowRight,
  CheckCircle2,
  Clock,
  Trophy,
  Target
} from 'lucide-react';

interface OnboardingFlowProps {
  onFinish: (concurso: any) => void;
}

export default function OnboardingFlow({ onFinish }: OnboardingFlowProps) {
  const [step, setStep] = useState<'welcome' | 'select-type' | 'select-concurso' | 'select-area' | 'upload'>('welcome');
  const [selectionType, setSelectionType] = useState<'aberto' | 'previsto' | 'area' | 'upload' | null>(null);

  // Concursos com editais abertos
  const concursosAbertos = [
    { id: 'prf-2024', nome: 'PRF - Polícia Rodoviária Federal', orgao: 'PRF', banca: 'CEBRASPE', vagas: 1500, salario: 10900, area: 'policial' },
    { id: 'pcdf-2024', nome: 'PCDF - Polícia Civil DF', orgao: 'PCDF', banca: 'CESPE', vagas: 300, salario: 12500, area: 'policial' },
    { id: 'trf1-2024', nome: 'TRF1 - Analista Judiciário', orgao: 'TRF1', banca: 'FGV', vagas: 80, salario: 13900, area: 'tribunais' },
    { id: 'inss-2024', nome: 'INSS - Técnico do Seguro Social', orgao: 'INSS', banca: 'CEBRASPE', vagas: 1000, salario: 7600, area: 'inss' },
  ];

  // Concursos previstos (sem edital aberto)
  const concursosPrevistos = [
    { id: 'pf-2025', nome: 'PF - Polícia Federal', orgao: 'PF', banca: 'CEBRASPE', vagas: 1000, salario: 23700, area: 'policial', status: 'Previsto para 2025' },
    { id: 'receita-2025', nome: 'Receita Federal - Auditor Fiscal', orgao: 'RFB', banca: 'CEBRASPE', vagas: 500, salario: 21000, area: 'fiscal', status: 'Previsto para 2025' },
    { id: 'tcu-2025', nome: 'TCU - Auditor Federal', orgao: 'TCU', banca: 'CESPE', vagas: 20, salario: 19200, area: 'tribunais_contas', status: 'Previsto para 2025' },
  ];

  // Áreas de concurso
  const areas = [
    { id: 'policial', nome: 'Carreiras Policiais', icon: Shield, cor: 'from-blue-500 to-blue-600', descricao: 'PM, PC, PRF, PF, etc.' },
    { id: 'tribunais', nome: 'Tribunais', icon: Scale, cor: 'from-purple-500 to-purple-600', descricao: 'Analista e Técnico Judiciário' },
    { id: 'inss', nome: 'INSS', icon: Building2, cor: 'from-green-500 to-green-600', descricao: 'Técnico e Analista do INSS' },
    { id: 'tribunais_contas', nome: 'Tribunais de Contas', icon: FileCheck, cor: 'from-orange-500 to-orange-600', descricao: 'TCU, TCE, TCM' },
    { id: 'fiscal', nome: 'Fiscais', icon: Calculator, cor: 'from-red-500 to-red-600', descricao: 'Receita Federal, Estadual, Municipal' },
    { id: 'bancaria', nome: 'Bancários', icon: Landmark, cor: 'from-yellow-500 to-yellow-600', descricao: 'Banco do Brasil, Caixa, etc.' },
    { id: 'administrativa', nome: 'Administrativas', icon: Briefcase, cor: 'from-pink-500 to-pink-600', descricao: 'Cargos administrativos diversos' },
    { id: 'legislativa', nome: 'Legislativas', icon: BookOpen, cor: 'from-indigo-500 to-indigo-600', descricao: 'Câmara, Senado, Assembleias' },
  ];

  const handleSelectConcurso = (concurso: any) => {
    onFinish(concurso);
  };

  // Tela de boas-vindas
  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Bem-vindo ao ConcurseiroApp
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Seu sistema completo de gestão de estudos para concursos públicos. 
            Vamos começar escolhendo o concurso que você vai estudar!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">Cronômetro Inteligente</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">Sistema de Questões</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">Gamificação</p>
            </div>
          </div>

          <button
            onClick={() => setStep('select-type')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto group"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // Tela de seleção de tipo
  if (step === 'select-type') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Como você quer começar?</h2>
            <p className="text-gray-600">Escolha uma das opções abaixo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Concurso com edital aberto */}
            <button
              onClick={() => {
                setSelectionType('aberto');
                setStep('select-concurso');
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-blue-500 transition-all text-left group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Edital Aberto</h3>
              <p className="text-gray-600 mb-4">
                Escolha um dos principais concursos com edital publicado
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Ver concursos <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Concurso previsto */}
            <button
              onClick={() => {
                setSelectionType('previsto');
                setStep('select-concurso');
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-purple-500 transition-all text-left group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Concurso Previsto</h3>
              <p className="text-gray-600 mb-4">
                Estude para concursos previstos baseados no último edital
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                Ver concursos <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Por área */}
            <button
              onClick={() => {
                setSelectionType('area');
                setStep('select-area');
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-green-500 transition-all text-left group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Por Área</h3>
              <p className="text-gray-600 mb-4">
                Escolha por carreira: policial, tribunais, fiscal, etc.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                Ver áreas <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Upload de edital */}
            <button
              onClick={() => {
                setSelectionType('upload');
                setStep('upload');
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-orange-500 transition-all text-left group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Upload de Edital</h3>
              <p className="text-gray-600 mb-4">
                Faça upload do seu edital e deixe a IA organizar tudo
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                Fazer upload <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('welcome')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de seleção de concurso
  if (step === 'select-concurso') {
    const concursos = selectionType === 'aberto' ? concursosAbertos : concursosPrevistos;
    const titulo = selectionType === 'aberto' ? 'Concursos com Edital Aberto' : 'Concursos Previstos';

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{titulo}</h2>
            <p className="text-gray-600">Selecione o concurso que você vai estudar</p>
          </div>

          {/* Barra de busca */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar concurso..."
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Lista de concursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {concursos.map((concurso) => (
              <button
                key={concurso.id}
                onClick={() => handleSelectConcurso(concurso)}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {concurso.nome}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {concurso.orgao} • {concurso.banca}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-600">
                    <Trophy className="w-4 h-4" />
                    {concurso.vagas} vagas
                  </span>
                  <span className="flex items-center gap-1 text-green-600 font-semibold">
                    R$ {concurso.salario.toLocaleString('pt-BR')}
                  </span>
                </div>

                {(concurso as any).status && (
                  <div className="mt-3 inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                    {(concurso as any).status}
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('select-type')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de seleção por área
  if (step === 'select-area') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Escolha por Área</h2>
            <p className="text-gray-600">Selecione a carreira que você deseja seguir</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => {
                  // Filtrar concursos por área e mostrar
                  const concursosDaArea = [...concursosAbertos, ...concursosPrevistos].filter(
                    c => c.area === area.id
                  );
                  if (concursosDaArea.length > 0) {
                    handleSelectConcurso(concursosDaArea[0]);
                  }
                }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all text-center group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${area.cor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{area.nome}</h3>
                <p className="text-xs text-gray-600">{area.descricao}</p>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('select-type')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de upload de edital
  if (step === 'upload') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="w-9 h-9 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload de Edital</h2>
            <p className="text-gray-600">
              Faça upload do PDF do edital e nossa IA vai extrair e organizar todo o conteúdo programático
            </p>
          </div>

          {/* Área de upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Arraste o PDF aqui ou clique para selecionar
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Formatos aceitos: PDF (máx. 50MB)
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Selecionar Arquivo
            </button>
          </div>

          {/* Informações sobre o processo */}
          <div className="mt-8 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Extração Automática</p>
                <p className="text-sm text-gray-600">A IA identifica o conteúdo programático</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Organização por Disciplina</p>
                <p className="text-sm text-gray-600">Divide automaticamente em disciplinas e assuntos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Edital Verticalizado</p>
                <p className="text-sm text-gray-600">Pronto para você começar a estudar</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('select-type')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
