"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Upload, Search, ChevronRight } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedConcurso, setSelectedConcurso] = useState<string | null>(null);

  const concursosAbertos = [
    { id: "tj-sp", nome: "TJ-SP - Escrevente", orgao: "Tribunal de Justiça de São Paulo", area: "Tribunais" },
    { id: "pf", nome: "Polícia Federal - Agente", orgao: "Polícia Federal", area: "Policiais" },
    { id: "inss", nome: "INSS - Técnico", orgao: "Instituto Nacional do Seguro Social", area: "Previdenciárias" },
    { id: "receita", nome: "Receita Federal - Auditor", orgao: "Receita Federal", area: "Fiscais" },
  ];

  const areas = [
    { id: "policiais", nome: "Carreiras Policiais", icon: "🚔" },
    { id: "administrativas", nome: "Carreiras Administrativas", icon: "📋" },
    { id: "fiscais", nome: "Carreiras Fiscais", icon: "💰" },
    { id: "tribunais", nome: "Carreiras de Tribunais", icon: "⚖️" },
    { id: "saude", nome: "Carreiras da Saúde", icon: "🏥" },
    { id: "previdenciarias", nome: "Previdenciárias (INSS)", icon: "🏛️" },
  ];

  const handleConcursoSelect = (id: string) => {
    setSelectedConcurso(id);
  };

  const handleContinue = () => {
    if (step === 1 && selectedConcurso) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bem-vindo ao AprovApp! 🎯
            </h1>
            <p className="text-xl text-white/90">
              Vamos configurar seu caminho rumo à aprovação
            </p>
          </div>

          {/* Step 1: Escolher Concurso */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Escolha seu concurso alvo
              </h2>

              {/* Concursos com Edital Aberto */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Concursos com Edital Aberto
                </h3>
                <div className="grid gap-3">
                  {concursosAbertos.map((concurso) => (
                    <button
                      key={concurso.id}
                      onClick={() => handleConcursoSelect(concurso.id)}
                      className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedConcurso === concurso.id
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{concurso.nome}</h4>
                          <p className="text-sm text-gray-600">{concurso.orgao}</p>
                          <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            Edital Aberto
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Escolher por Área */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Ou escolha por área
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => handleConcursoSelect(area.id)}
                      className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedConcurso === area.id
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{area.icon}</span>
                        <span className="font-medium text-gray-800">{area.nome}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload de Edital */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-orange-600" />
                  Ou faça upload do seu edital
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-all cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-2">
                    Clique para fazer upload do PDF do edital
                  </p>
                  <p className="text-sm text-gray-500">
                    O app irá processar e criar seu edital verticalizado automaticamente
                  </p>
                </div>
              </div>

              {/* Botão Continuar */}
              <button
                onClick={handleContinue}
                disabled={!selectedConcurso}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  selectedConcurso
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continuar para o Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
