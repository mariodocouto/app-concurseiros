"use client";

import { useState } from "react";
import Navbar from "@/components/custom/navbar";
import { FileText, ChevronDown, ChevronRight, CheckCircle, Circle } from "lucide-react";

export default function EditalPage() {
  const [expandedDisciplinas, setExpandedDisciplinas] = useState<string[]>(["disc-1"]);

  const edital = [
    {
      id: "disc-1",
      nome: "Direito Constitucional",
      progresso: 65,
      topicos: [
        { id: "top-1", nome: "Direitos Fundamentais", status: "revisado" },
        { id: "top-2", nome: "Organização do Estado", status: "lido" },
        { id: "top-3", nome: "Poder Legislativo", status: "pendente" },
      ],
    },
    {
      id: "disc-2",
      nome: "Direito Administrativo",
      progresso: 48,
      topicos: [
        { id: "top-4", nome: "Atos Administrativos", status: "aula_assistida" },
        { id: "top-5", nome: "Licitações", status: "resumo_feito" },
        { id: "top-6", nome: "Contratos", status: "pendente" },
      ],
    },
    {
      id: "disc-3",
      nome: "Português",
      progresso: 72,
      topicos: [
        { id: "top-7", nome: "Concordância Verbal", status: "questoes_feitas" },
        { id: "top-8", nome: "Regência", status: "revisado" },
        { id: "top-9", nome: "Interpretação de Texto", status: "lido" },
      ],
    },
  ];

  const statusLabels: Record<string, { label: string; color: string }> = {
    pendente: { label: "Pendente", color: "bg-gray-200 text-gray-700" },
    lido: { label: "Lido", color: "bg-blue-100 text-blue-700" },
    aula_assistida: { label: "Aula Assistida", color: "bg-purple-100 text-purple-700" },
    resumo_feito: { label: "Resumo Feito", color: "bg-yellow-100 text-yellow-700" },
    lei_seca_lida: { label: "Lei Seca Lida", color: "bg-orange-100 text-orange-700" },
    revisado: { label: "Revisado", color: "bg-green-100 text-green-700" },
    questoes_feitas: { label: "Questões Feitas", color: "bg-emerald-100 text-emerald-700" },
  };

  const toggleDisciplina = (id: string) => {
    setExpandedDisciplinas((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Edital Verticalizado
          </h1>
          <p className="text-gray-600">
            Acompanhe seu progresso em cada disciplina e assunto 📋
          </p>
        </div>

        {/* Progresso Geral */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Progresso Geral do Edital</h2>
            <span className="text-3xl font-bold text-purple-600">42%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500"
              style={{ width: "42%" }}
            />
          </div>
        </div>

        {/* Lista de Disciplinas */}
        <div className="space-y-4">
          {edital.map((disciplina) => {
            const isExpanded = expandedDisciplinas.includes(disciplina.id);
            return (
              <div key={disciplina.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Header da Disciplina */}
                <button
                  onClick={() => toggleDisciplina(disciplina.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    )}
                    <FileText className="w-6 h-6 text-blue-600" />
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{disciplina.nome}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex-1 max-w-xs">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${disciplina.progresso}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                          {disciplina.progresso}%
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Tópicos */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6">
                    <div className="space-y-3">
                      {disciplina.topicos.map((topico) => {
                        const statusInfo = statusLabels[topico.status];
                        return (
                          <div
                            key={topico.id}
                            className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 flex-1">
                                {topico.status === "pendente" ? (
                                  <Circle className="w-5 h-5 text-gray-400" />
                                ) : (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                <span className="font-medium text-gray-800">{topico.nome}</span>
                              </div>
                              <span className={`text-xs px-3 py-1 rounded-full ${statusInfo.color}`}>
                                {statusInfo.label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
