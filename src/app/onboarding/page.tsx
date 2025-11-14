"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Search, Briefcase, FileText, ChevronRight, Check } from "lucide-react";

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedConcurso, setSelectedConcurso] = useState<string>("");

  const concursosProntos = [
    { id: "tj", nome: "Tribunais de Justiça (TJ)", descricao: "Editais verticalizados para TJs estaduais" },
    { id: "mpu", nome: "Ministério Público da União (MPU)", descricao: "Carreiras do MPU" },
    { id: "pf", nome: "Polícia Federal (PF/PRF)", descricao: "Carreiras policiais federais" },
    { id: "inss", nome: "INSS", descricao: "Instituto Nacional do Seguro Social" },
    { id: "trf", nome: "Tribunais Regionais Federais (TRF)", descricao: "Justiça Federal" },
    { id: "tre", nome: "TSE/TRE", descricao: "Justiça Eleitoral" },
    { id: "sefaz", nome: "SEFAZ", descricao: "Secretarias de Fazenda Estaduais" },
    { id: "receita", nome: "Receita Federal", descricao: "Auditor e Analista Tributário" },
    { id: "tcu", nome: "Tribunais de Contas", descricao: "TCU, TCE e TCM" },
  ];

  const areasConcursos = [
    { id: "policiais", nome: "Carreiras Policiais", icon: "🚔" },
    { id: "administrativas", nome: "Carreiras Administrativas", icon: "📋" },
    { id: "fiscais", nome: "Carreiras Fiscais", icon: "💰" },
    { id: "tribunais", nome: "Carreiras de Tribunais", icon: "⚖️" },
    { id: "saude", nome: "Carreiras da Saúde", icon: "🏥" },
    { id: "previdenciarias", nome: "Previdenciárias (INSS)", icon: "📊" },
  ];

  const handleNext = () => {
    if (step === 1 && selectedOption) {
      setStep(2);
    } else if (step === 2 && (selectedConcurso || selectedOption === "upload")) {
      // Simular processamento e ir para dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bem-vindo ao AprovApp
          </h1>
          <p className="text-xl text-white/90">
            Vamos configurar seu perfil de estudos
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-white text-purple-600' : 'bg-white/20'}`}>
                {step > 1 ? <Check className="w-6 h-6" /> : "1"}
              </div>
              <span className="font-semibold hidden sm:inline">Escolher Método</span>
            </div>
            <ChevronRight className="text-white/50" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-white text-purple-600' : 'bg-white/20'}`}>
                2
              </div>
              <span className="font-semibold hidden sm:inline">Configurar Edital</span>
            </div>
          </div>
        </div>

        {/* Step 1: Escolher Método */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Como você quer começar?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Opção 1: Concurso Pronto */}
              <button
                onClick={() => setSelectedOption("pronto")}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 ${
                  selectedOption === "pronto" ? "ring-4 ring-white shadow-2xl" : "hover:shadow-xl"
                }`}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl w-fit mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Concurso Pronto
                </h3>
                <p className="text-gray-600">
                  Escolha entre os principais concursos nacionais com editais já verticalizados
                </p>
              </button>

              {/* Opção 2: Por Área */}
              <button
                onClick={() => setSelectedOption("area")}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 ${
                  selectedOption === "area" ? "ring-4 ring-white shadow-2xl" : "hover:shadow-xl"
                }`}
              >
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-xl w-fit mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Por Área
                </h3>
                <p className="text-gray-600">
                  Escolha uma área de atuação e veja concursos relacionados
                </p>
              </button>

              {/* Opção 3: Upload de Edital */}
              <button
                onClick={() => setSelectedOption("upload")}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 ${
                  selectedOption === "upload" ? "ring-4 ring-white shadow-2xl" : "hover:shadow-xl"
                }`}
              >
                <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-4 rounded-xl w-fit mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Meu Edital
                </h3>
                <p className="text-gray-600">
                  Faça upload do seu edital em PDF e deixe o app organizar automaticamente
                </p>
              </button>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  selectedOption
                    ? "bg-white text-purple-600 hover:scale-105 shadow-xl"
                    : "bg-white/30 text-white/50 cursor-not-allowed"
                }`}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Configurar Edital */}
        {step === 2 && (
          <div className="max-w-5xl mx-auto">
            {/* Concursos Prontos */}
            {selectedOption === "pronto" && (
              <>
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Escolha seu concurso
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {concursosProntos.map((concurso) => (
                    <button
                      key={concurso.id}
                      onClick={() => setSelectedConcurso(concurso.id)}
                      className={`bg-white/95 backdrop-blur-sm rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 ${
                        selectedConcurso === concurso.id ? "ring-4 ring-white shadow-2xl" : "hover:shadow-xl"
                      }`}
                    >
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {concurso.nome}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {concurso.descricao}
                      </p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Por Área */}
            {selectedOption === "area" && (
              <>
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Escolha sua área de interesse
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {areasConcursos.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setSelectedConcurso(area.id)}
                      className={`bg-white/95 backdrop-blur-sm rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 ${
                        selectedConcurso === area.id ? "ring-4 ring-white shadow-2xl" : "hover:shadow-xl"
                      }`}
                    >
                      <div className="text-4xl mb-3">{area.icon}</div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {area.nome}
                      </h3>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Upload de Edital */}
            {selectedOption === "upload" && (
              <>
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Faça upload do seu edital
                </h2>
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-full w-fit mx-auto mb-6">
                      <Upload className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Arraste seu edital aqui
                    </h3>
                    <p className="text-gray-600 mb-6">
                      ou clique para selecionar um arquivo PDF
                    </p>
                    <input
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      id="edital-upload"
                    />
                    <label
                      htmlFor="edital-upload"
                      className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full cursor-pointer hover:shadow-lg transition-all"
                    >
                      Selecionar Arquivo
                    </label>
                    <p className="text-sm text-gray-500 mt-4">
                      O app vai identificar automaticamente o conteúdo programático e organizar por disciplinas
                    </p>
                  </div>
                </div>
              </>
            )}

            <div className="text-center mt-8 flex gap-4 justify-center">
              <button
                onClick={() => setStep(1)}
                className="px-8 py-4 rounded-full font-bold text-lg bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
              >
                Voltar
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedConcurso && selectedOption !== "upload"}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  selectedConcurso || selectedOption === "upload"
                    ? "bg-white text-purple-600 hover:scale-105 shadow-xl"
                    : "bg-white/30 text-white/50 cursor-not-allowed"
                }`}
              >
                Finalizar Configuração
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
