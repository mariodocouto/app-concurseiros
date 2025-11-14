"use client";

import { useState } from "react";
import { 
  BookOpen, Target, Trophy, Clock, CheckCircle2, TrendingUp, 
  Bell, Play, BarChart3, Calendar, Award, Zap, FileText,
  ChevronRight, AlertCircle, Home, Settings, LogOut
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  // Dados simulados
  const progressoGeral = 42;
  const horasEstudadas = 24;
  const questoesResolvidas = 342;
  const taxaAcerto = 78;
  const metaDiaria = 4;
  const horasHoje = 2.5;

  const disciplinas = [
    { nome: "Direito Constitucional", progresso: 65, cor: "blue" },
    { nome: "Direito Administrativo", progresso: 45, cor: "purple" },
    { nome: "Português", progresso: 80, cor: "green" },
    { nome: "Raciocínio Lógico", progresso: 30, cor: "orange" },
    { nome: "Informática", progresso: 55, cor: "cyan" },
    { nome: "Legislação", progresso: 20, cor: "pink" },
  ];

  const revisoesHoje = [
    { disciplina: "Direito Constitucional", assunto: "Princípios Fundamentais", tipo: "24h" },
    { disciplina: "Português", assunto: "Concordância Verbal", tipo: "7 dias" },
    { disciplina: "Raciocínio Lógico", assunto: "Proposições", tipo: "30 dias" },
  ];

  const conteudoAtrasado = [
    { disciplina: "Legislação", assunto: "Lei 8.112/90 - Arts. 1-20", dias: 3 },
    { disciplina: "Raciocínio Lógico", assunto: "Lógica de Argumentação", dias: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AprovApp
            </h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="text-gray-700 font-medium hidden sm:inline">Concurseiro</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen hidden lg:block">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab("home")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "home" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("edital")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "edital" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Edital</span>
            </button>
            <button
              onClick={() => setActiveTab("estudos")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "estudos" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Play className="w-5 h-5" />
              <span className="font-medium">Estudos</span>
            </button>
            <button
              onClick={() => setActiveTab("questoes")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "questoes" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Questões</span>
            </button>
            <button
              onClick={() => setActiveTab("leiseca")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "leiseca" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Lei Seca</span>
            </button>
            <button
              onClick={() => setActiveTab("revisoes")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "revisoes" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Zap className="w-5 h-5" />
              <span className="font-medium">Revisões</span>
            </button>
            <button
              onClick={() => setActiveTab("arena")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "arena" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span className="font-medium">Arena</span>
            </button>
            <button
              onClick={() => setActiveTab("historico")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "historico" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Histórico</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {/* HOME/DASHBOARD */}
          {activeTab === "home" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Progresso Geral</p>
                      <p className="text-2xl font-bold text-gray-800">{progressoGeral}%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Horas Estudadas</p>
                      <p className="text-2xl font-bold text-gray-800">{horasEstudadas}h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Questões</p>
                      <p className="text-2xl font-bold text-gray-800">{questoesResolvidas}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Taxa de Acerto</p>
                      <p className="text-2xl font-bold text-gray-800">{taxaAcerto}%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão Iniciar Estudo */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Pronto para estudar?</h2>
                    <p className="text-white/90">Meta diária: {horasHoje}/{metaDiaria}h</p>
                  </div>
                  <button 
                    onClick={() => setActiveTab("estudos")}
                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Iniciar Estudo
                  </button>
                </div>
              </div>

              {/* Alertas e Revisões */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Revisões Pendentes */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-bold text-gray-800">Revisões de Hoje</h3>
                    <span className="ml-auto bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {revisoesHoje.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {revisoesHoje.map((revisao, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{revisao.disciplina}</p>
                          <p className="text-gray-600 text-xs">{revisao.assunto}</p>
                        </div>
                        <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                          {revisao.tipo}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conteúdo Atrasado */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h3 className="text-lg font-bold text-gray-800">Conteúdo Atrasado</h3>
                    <span className="ml-auto bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {conteudoAtrasado.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {conteudoAtrasado.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{item.disciplina}</p>
                          <p className="text-gray-600 text-xs">{item.assunto}</p>
                        </div>
                        <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full font-semibold">
                          {item.dias}d atrás
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progresso por Disciplina */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Progresso por Disciplina</h3>
                <div className="space-y-4">
                  {disciplinas.map((disc, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-gray-700">{disc.nome}</span>
                        <span className="font-bold text-gray-800">{disc.progresso}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r from-${disc.cor}-400 to-${disc.cor}-600 h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${disc.progresso}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gráficos */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Desempenho em Questões</h3>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <BarChart3 className="w-16 h-16" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Tempo Estudado (7 dias)</h3>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <Calendar className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EDITAL */}
          {activeTab === "edital" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">Edital Verticalizado</h2>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Progresso Geral</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {progressoGeral}%
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {disciplinas.map((disc, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-800">{disc.nome}</h3>
                      </div>
                      <span className="text-lg font-bold text-gray-800">{disc.progresso}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                        style={{ width: `${disc.progresso}%` }}
                      ></div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">12 assuntos</span>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">8 concluídos</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">3 em andamento</span>
                      <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">1 atrasado</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ESTUDOS */}
          {activeTab === "estudos" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Área de Estudos</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Iniciar Novo Estudo</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Disciplina</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Selecione...</option>
                      {disciplinas.map((d, i) => (
                        <option key={i}>{d.nome}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Selecione...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Estudo</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Teoria</option>
                      <option>Lei Seca</option>
                      <option>Questões</option>
                      <option>PDF/Apostila</option>
                      <option>Vídeo-aula</option>
                      <option>Revisão</option>
                      <option>Resumo</option>
                      <option>Flashcards</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Iniciar Cronômetro
                </button>
              </div>

              {/* Cronômetro Ativo (simulado) */}
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <div className="inline-block bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-8 mb-6">
                  <Clock className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">00:00:00</h3>
                <p className="text-gray-600 mb-6">Cronômetro pausado</p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors">
                    Iniciar
                  </button>
                  <button className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors">
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* QUESTÕES */}
          {activeTab === "questoes" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Sistema de Questões</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all">
                  <div className="bg-blue-500 p-4 rounded-full w-fit mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Registrar Minhas Questões</h3>
                  <p className="text-gray-600">
                    Registre manualmente as questões que você resolve e acompanhe seu desempenho
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all">
                  <div className="bg-purple-500 p-4 rounded-full w-fit mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Questões Propostas</h3>
                  <p className="text-gray-600">
                    Deixe o app propor questões por disciplina, assunto e dificuldade
                  </p>
                </div>
              </div>

              {/* Estatísticas */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Estatísticas Gerais</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">{questoesResolvidas}</p>
                    <p className="text-sm text-gray-600">Total de Questões</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">{taxaAcerto}%</p>
                    <p className="text-sm text-gray-600">Taxa de Acerto</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-3xl font-bold text-purple-600">267</p>
                    <p className="text-sm text-gray-600">Acertos</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-3xl font-bold text-red-600">75</p>
                    <p className="text-sm text-gray-600">Erros</p>
                  </div>
                </div>
              </div>

              {/* Desempenho por Disciplina */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Desempenho por Disciplina</h3>
                <div className="space-y-3">
                  {disciplinas.map((disc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{disc.nome}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">45 questões</span>
                        <span className="font-bold text-green-600">82%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* LEI SECA */}
          {activeTab === "leiseca" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">Lei Seca</h2>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                  + Cadastrar Lei
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Lei 8.112/90", "CF/88", "Lei 9.784/99", "Código Penal", "Código Civil", "Lei 8.666/93"].map((lei, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-800">{lei}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progresso</span>
                        <span className="font-bold text-gray-800">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                      <div className="flex gap-2 text-xs mt-3">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">23 arts. lidos</span>
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">28 pendentes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REVISÕES */}
          {activeTab === "revisoes" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Revisões Inteligentes (SRS)</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-yellow-500 p-3 rounded-full">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">24 Horas</h3>
                      <p className="text-sm text-gray-600">Revisão imediata</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-yellow-600 mb-2">3</p>
                  <p className="text-sm text-gray-600">conteúdos pendentes</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">7 Dias</h3>
                      <p className="text-sm text-gray-600">Revisão semanal</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-orange-600 mb-2">5</p>
                  <p className="text-sm text-gray-600">conteúdos pendentes</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 p-3 rounded-full">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">30 Dias</h3>
                      <p className="text-sm text-gray-600">Revisão mensal</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-red-600 mb-2">8</p>
                  <p className="text-sm text-gray-600">conteúdos pendentes</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Revisões de Hoje</h3>
                <div className="space-y-3">
                  {revisoesHoje.map((rev, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div>
                        <p className="font-semibold text-gray-800">{rev.disciplina}</p>
                        <p className="text-sm text-gray-600">{rev.assunto}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
                          {rev.tipo}
                        </span>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors">
                          Revisar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ARENA */}
          {activeTab === "arena" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">Arena - Gamificação</h2>
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                  + Criar Grupo
                </button>
              </div>

              {/* Ranking */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Ranking Geral</h3>
                <div className="space-y-3">
                  {[
                    { pos: 1, nome: "João Silva", pontos: 2450, avatar: "🥇", horas: 45 },
                    { pos: 2, nome: "Maria Santos", pontos: 2380, avatar: "🥈", horas: 42 },
                    { pos: 3, nome: "Pedro Costa", pontos: 2310, avatar: "🥉", horas: 40 },
                    { pos: 4, nome: "Ana Oliveira", pontos: 2180, avatar: "👤", horas: 38 },
                    { pos: 12, nome: "Você", pontos: 1890, avatar: "👤", horas: 24, destaque: true },
                  ].map((user) => (
                    <div
                      key={user.pos}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                        user.destaque
                          ? "bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 shadow-lg"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{user.avatar}</span>
                        <div>
                          <p className="font-bold text-gray-800">{user.nome}</p>
                          <p className="text-sm text-gray-600">Posição #{user.pos}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-600">{user.pontos} pts</p>
                        <p className="text-sm text-gray-600">{user.horas}h estudadas</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grupos */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Meus Grupos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Rumo ao TJ-RS", "Concurseiros 2025"].map((grupo, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-6 h-6 text-purple-600" />
                        <h4 className="font-bold text-gray-800">{grupo}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">12 membros ativos</p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Horas semanais</span>
                        <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">% do edital</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conquistas */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Conquistas</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {["🏆", "⭐", "🔥", "💪", "🎯", "⚡", "🌟", "🥇"].map((emoji, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-2">{emoji}</div>
                      <p className="text-xs font-semibold text-gray-700">Conquista {idx + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* HISTÓRICO */}
          {activeTab === "historico" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Histórico Completo</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-800 mb-1">{horasEstudadas}h</p>
                  <p className="text-sm text-gray-600">Total de Horas</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-800 mb-1">156</p>
                  <p className="text-sm text-gray-600">Sessões de Estudo</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-800 mb-1">3.2h</p>
                  <p className="text-sm text-gray-600">Média Diária</p>
                </div>
              </div>

              {/* Heatmap */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Atividade dos Últimos 30 Dias</h3>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 30 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`aspect-square rounded ${
                        idx % 3 === 0 ? "bg-green-500" : idx % 2 === 0 ? "bg-green-300" : "bg-gray-200"
                      }`}
                      title={`Dia ${idx + 1}`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Tempo por Disciplina */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tempo por Disciplina</h3>
                <div className="space-y-3">
                  {disciplinas.map((disc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{disc.nome}</span>
                      <span className="font-bold text-blue-600">4.5h</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
