"use client";

import Navbar from "@/components/custom/navbar";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function RevisoesPage() {
  const revisoes = {
    "24h": [
      { disciplina: "Direito Constitucional", assunto: "Direitos Fundamentais", dataEstudo: "Ontem" },
      { disciplina: "Português", assunto: "Concordância Verbal", dataEstudo: "Ontem" },
    ],
    "7d": [
      { disciplina: "Direito Administrativo", assunto: "Atos Administrativos", dataEstudo: "6 dias atrás" },
      { disciplina: "Raciocínio Lógico", assunto: "Proposições", dataEstudo: "7 dias atrás" },
      { disciplina: "Informática", assunto: "Windows", dataEstudo: "5 dias atrás" },
    ],
    "30d": [
      { disciplina: "Português", assunto: "Regência", dataEstudo: "28 dias atrás" },
      { disciplina: "Dir. Constitucional", assunto: "Organização do Estado", dataEstudo: "30 dias atrás" },
    ],
  };

  const concluidas = [
    { disciplina: "Português", assunto: "Interpretação de Texto", tipo: "24h", data: "Hoje" },
    { disciplina: "Dir. Administrativo", assunto: "Licitações", tipo: "7d", data: "Ontem" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Revisões Inteligentes
          </h1>
          <p className="text-gray-600">
            Sistema de revisão espaçada para fixação do conteúdo 🔄
          </p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Revisões 24h</h3>
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{revisoes["24h"].length}</p>
            <p className="text-xs text-gray-500 mt-1">pendentes</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Revisões 7 dias</h3>
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{revisoes["7d"].length}</p>
            <p className="text-xs text-gray-500 mt-1">pendentes</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Revisões 30 dias</h3>
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{revisoes["30d"].length}</p>
            <p className="text-xs text-gray-500 mt-1">pendentes</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Revisões Pendentes */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Revisões Pendentes
            </h2>

            {/* 24h */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Revisão de 24 horas
              </h3>
              <div className="space-y-2">
                {revisoes["24h"].map((rev, index) => (
                  <div key={index} className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">{rev.disciplina}</p>
                        <p className="text-sm text-gray-600">{rev.assunto}</p>
                        <p className="text-xs text-gray-500 mt-1">Estudado: {rev.dataEstudo}</p>
                      </div>
                      <button className="text-green-600 hover:text-green-700">
                        <CheckCircle className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7 dias */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-yellow-600 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Revisão de 7 dias
              </h3>
              <div className="space-y-2">
                {revisoes["7d"].map((rev, index) => (
                  <div key={index} className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">{rev.disciplina}</p>
                        <p className="text-sm text-gray-600">{rev.assunto}</p>
                        <p className="text-xs text-gray-500 mt-1">Estudado: {rev.dataEstudo}</p>
                      </div>
                      <button className="text-green-600 hover:text-green-700">
                        <CheckCircle className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 30 dias */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Revisão de 30 dias
              </h3>
              <div className="space-y-2">
                {revisoes["30d"].map((rev, index) => (
                  <div key={index} className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">{rev.disciplina}</p>
                        <p className="text-sm text-gray-600">{rev.assunto}</p>
                        <p className="text-xs text-gray-500 mt-1">Estudado: {rev.dataEstudo}</p>
                      </div>
                      <button className="text-green-600 hover:text-green-700">
                        <CheckCircle className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revisões Concluídas */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Revisões Concluídas Recentemente
            </h2>
            <div className="space-y-3">
              {concluidas.map((rev, index) => (
                <div key={index} className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{rev.disciplina}</p>
                      <p className="text-sm text-gray-600">{rev.assunto}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {rev.tipo}
                        </span>
                        <span className="text-xs text-gray-500">{rev.data}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
