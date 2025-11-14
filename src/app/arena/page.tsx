"use client";

import { useState } from "react";
import Navbar from "@/components/custom/navbar";
import { Trophy, Users, Plus, TrendingUp, Clock, Target, Award } from "lucide-react";

export default function ArenaPage() {
  const [showModal, setShowModal] = useState(false);
  const [participacaoPublica, setParticipacaoPublica] = useState(false);

  const rankingGeral = [
    { posicao: 1, nome: "João Silva", horas: 245, questoes: 1850, aproveitamento: 78 },
    { posicao: 2, nome: "Maria Santos", horas: 238, questoes: 1720, aproveitamento: 82 },
    { posicao: 3, nome: "Você", horas: 215, questoes: 1650, aproveitamento: 68 },
    { posicao: 4, nome: "Pedro Costa", horas: 198, questoes: 1580, aproveitamento: 71 },
    { posicao: 5, nome: "Ana Lima", horas: 187, questoes: 1420, aproveitamento: 75 },
  ];

  const meusGrupos = [
    {
      id: "1",
      nome: "Rumo ao TJ-RS 2025",
      membros: 12,
      modalidades: ["horas_semanais", "questoes", "aproveitamento"],
      minhaPos icao: 3,
    },
    {
      id: "2",
      nome: "Carreiras Policiais",
      membros: 8,
      modalidades: ["horas_totais", "percentual_edital"],
      minhaPosicao: 2,
    },
  ];

  const modalidades = [
    { id: "horas_totais", label: "Horas Líquidas Totais", icon: Clock },
    { id: "horas_semanais", label: "Horas Semanais", icon: TrendingUp },
    { id: "horas_mensais", label: "Horas Mensais", icon: TrendingUp },
    { id: "media_diaria", label: "Média Diária", icon: Target },
    { id: "percentual_edital", label: "% do Edital", icon: Target },
    { id: "questoes", label: "Quantidade de Questões", icon: Target },
    { id: "aproveitamento", label: "% de Acertos", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Arena & Comunidades
          </h1>
          <p className="text-gray-600">
            Compita, motive-se e conquiste seus objetivos em comunidade! 🏆
          </p>
        </div>

        {/* Configuração de Participação */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Configurações de Participação
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Participação Pública</p>
              <p className="text-sm text-gray-600">
                Seus resultados serão visíveis para todos os usuários no ranking geral
              </p>
            </div>
            <button
              onClick={() => setParticipacaoPublica(!participacaoPublica)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                participacaoPublica ? "bg-green-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  participacaoPublica ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 hover:scale-105"
          >
            <Plus className="w-6 h-6" />
            Criar Nova Comunidade
          </button>
          <button className="bg-white border-2 border-purple-600 text-purple-600 font-semibold py-4 rounded-xl hover:bg-purple-50 transition-all duration-200 flex items-center justify-center gap-3">
            <Users className="w-6 h-6" />
            Buscar Comunidades
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ranking Geral */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-600" />
              Ranking Geral
            </h2>
            <div className="space-y-3">
              {rankingGeral.map((user) => (
                <div
                  key={user.posicao}
                  className={`p-4 rounded-lg border-2 ${
                    user.nome === "Você"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        user.posicao === 1
                          ? "bg-yellow-400 text-yellow-900"
                          : user.posicao === 2
                          ? "bg-gray-300 text-gray-700"
                          : user.posicao === 3
                          ? "bg-orange-400 text-orange-900"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {user.posicao}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{user.nome}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-gray-600">
                        <span>{user.horas}h estudadas</span>
                        <span>{user.questoes} questões</span>
                        <span>{user.aproveitamento}% acertos</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minhas Comunidades */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Minhas Comunidades
            </h2>
            <div className="space-y-4">
              {meusGrupos.map((grupo) => (
                <div key={grupo.id} className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800">{grupo.nome}</h3>
                      <p className="text-sm text-gray-600">{grupo.membros} membros</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-purple-600">#{grupo.minhaPosicao}</span>
                      <p className="text-xs text-gray-600">sua posição</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {grupo.modalidades.map((mod) => {
                      const modalidade = modalidades.find((m) => m.id === mod);
                      return (
                        <span
                          key={mod}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                        >
                          {modalidade?.label}
                        </span>
                      );
                    })}
                  </div>
                  <button className="w-full mt-3 bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Ver Ranking
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Criar Comunidade */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full my-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Criar Nova Comunidade
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Comunidade
                </label>
                <input
                  type="text"
                  placeholder="Ex: Rumo ao TJ-RS 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição (opcional)
                </label>
                <textarea
                  placeholder="Descreva o objetivo da comunidade..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Modalidades de Competição
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {modalidades.map((mod) => {
                    const Icon = mod.icon;
                    return (
                      <label
                        key={mod.id}
                        className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer transition-colors"
                      >
                        <input type="checkbox" className="w-5 h-5 text-purple-600" />
                        <Icon className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">{mod.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Comunidade Pública</span>
                </label>
                <p className="text-xs text-gray-500 mt-2 ml-8">
                  Qualquer usuário poderá encontrar e participar desta comunidade
                </p>
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
                Criar Comunidade
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
