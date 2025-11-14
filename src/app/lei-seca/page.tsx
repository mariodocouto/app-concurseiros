"use client";

import { useState } from "react";
import Navbar from "@/components/custom/navbar";
import { BookOpen, Plus, CheckCircle, Circle } from "lucide-react";

export default function LeiSecaPage() {
  const [showModal, setShowModal] = useState(false);

  const leis = [
    {
      id: "1",
      nome: "Constituição Federal",
      numero: "CF/88",
      totalArtigos: 250,
      artigosEstudados: 180,
      ultimoArtigo: 180,
      progresso: 72,
    },
    {
      id: "2",
      nome: "Lei de Licitações",
      numero: "Lei 14.133/2021",
      totalArtigos: 193,
      artigosEstudados: 95,
      ultimoArtigo: 95,
      progresso: 49,
    },
    {
      id: "3",
      nome: "Código Penal",
      numero: "Decreto-Lei 2.848/1940",
      totalArtigos: 361,
      artigosEstudados: 120,
      ultimoArtigo: 120,
      progresso: 33,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Lei Seca
          </h1>
          <p className="text-gray-600">
            Organize e acompanhe o estudo das suas leis 📖
          </p>
        </div>

        {/* Botão Adicionar Lei */}
        <button
          onClick={() => setShowModal(true)}
          className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          Adicionar Nova Lei
        </button>

        {/* Lista de Leis */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leis.map((lei) => (
            <div key={lei.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{lei.nome}</h3>
                    <p className="text-sm text-gray-600">{lei.numero}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Artigos estudados:</span>
                  <span className="font-semibold text-gray-800">
                    {lei.artigosEstudados}/{lei.totalArtigos}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Último artigo:</span>
                  <span className="font-semibold text-gray-800">Art. {lei.ultimoArtigo}</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progresso</span>
                    <span className="text-sm font-bold text-purple-600">{lei.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${lei.progresso}%` }}
                    />
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Continuar Estudo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Adicionar Lei */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Adicionar Nova Lei
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Lei
                </label>
                <input
                  type="text"
                  placeholder="Ex: Constituição Federal"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número
                </label>
                <input
                  type="text"
                  placeholder="Ex: CF/88"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total de Artigos
                </label>
                <input
                  type="number"
                  placeholder="Ex: 250"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                />
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
