"use client";

import { useState } from "react";
import Navbar from "@/components/custom/navbar";
import { Target, Plus, TrendingUp, CheckCircle, XCircle, BarChart3 } from "lucide-react";

export default function QuestoesPage() {
  const [modo, setModo] = useState<"registrar" | "propor">("registrar");
  const [showModal, setShowModal] = useState(false);

  // Dados mockados
  const estatisticas = {
    total: 1247,
    acertos: 847,
    erros: 400,
    percentualGeral: 68,
  };

  const porDisciplina = [
    { nome: "Direito Constitucional", total: 320, acertos: 245, percentual: 77 },
    { nome: "Direito Administrativo", total: 280, acertos: 182, percentual: 65 },
    { nome: "Português", total: 350, acertos: 273, percentual: 78 },
    { nome: "Raciocínio Lógico", total: 197, acertos: 98, percentual: 50 },
    { nome: "Informática", total: 100, acertos: 49, percentual: 49 },
  ];

  const historicoRecente = [
    { disciplina: "Português", assunto: "Concordância", acertou: true, data: "Hoje, 14:30" },
    { disciplina: "Dir. Constitucional", assunto: "Direitos Fundamentais", acertou: true, data: "Hoje, 13:15" },
    { disciplina: "Raciocínio Lógico", assunto: "Proposições", acertou: false, data: "Hoje, 11:45" },
    { disciplina: "Dir. Administrativo", assunto: "Licitações", acertou: true, data: "Ontem, 16:20" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Controle de Questões
          </h1>
          <p className="text-gray-600">
            Acompanhe seu desempenho e evolução 📊
          </p>
        </div>

        {/* Seletor de Modo */}
        <div className="bg-white rounded-xl shadow-md p-2 mb-8 inline-flex">
          <button
            onClick={() => setModo("registrar")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              modo === "registrar"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Registrar Minhas Questões
          </button>
          <button
            onClick={() => setModo("propor")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              modo === "propor"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            App Propõe Questões
          </button>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total de Questões</h3>
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{estatisticas.total}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Acertos</h3>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{estatisticas.acertos}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Erros</h3>
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{estatisticas.erros}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Aproveitamento</h3>
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{estatisticas.percentualGeral}%</p>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Desempenho por Disciplina */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Desempenho por Disciplina
            </h2>
            <div className="space-y-4">
              {porDisciplina.map((disc, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{disc.nome}</h4>
                      <p className="text-sm text-gray-600">
                        {disc.acertos} acertos de {disc.total} questões
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${
                        disc.percentual >= 70 ? "text-green-600" :
                        disc.percentual >= 50 ? "text-yellow-600" :
                        "text-red-600"
                      }`}>
                        {disc.percentual}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        disc.percentual >= 70 ? "bg-green-500" :
                        disc.percentual >= 50 ? "bg-yellow-500" :
                        "bg-red-500"
                      }`}
                      style={{ width: `${disc.percentual}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Histórico Recente */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Histórico Recente
            </h2>
            <div className="space-y-3">
              {historicoRecente.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-l-4 ${
                    item.acertou
                      ? "bg-green-50 border-green-500"
                      : "bg-red-50 border-red-500"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{item.disciplina}</p>
                      <p className="text-xs text-gray-600 mt-1">{item.assunto}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.data}</p>
                    </div>
                    {item.acertou ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão de Ação */}
        <div className="mt-8">
          {modo === "registrar" ? (
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 hover:scale-105"
            >
              <Plus className="w-6 h-6" />
              <span className="text-lg">Registrar Nova Questão</span>
            </button>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Modo: App Propõe Questões
              </h3>
              <p className="text-gray-600 mb-6">
                Funcionalidade em desenvolvimento. Em breve você poderá resolver questões propostas pelo app com base em seu edital e desempenho! 🚀
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg">
                Em Breve
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Registrar Questão */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Registrar Questão
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Disciplina
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                  <option>Selecione...</option>
                  <option>Direito Constitucional</option>
                  <option>Direito Administrativo</option>
                  <option>Português</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                  <option>Selecione...</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resultado
                </label>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-50 font-semibold">
                    ✓ Acertei
                  </button>
                  <button className="flex-1 py-3 border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 font-semibold">
                    ✗ Errei
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
