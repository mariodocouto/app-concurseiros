"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/custom/navbar";
import { Play, Pause, Square, Clock, BookOpen, Target, Save } from "lucide-react";

export default function EstudosPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [selectedDisciplina, setSelectedDisciplina] = useState("");
  const [selectedAssunto, setSelectedAssunto] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [showSaveModal, setShowSaveModal] = useState(false);

  const disciplinas = [
    "Direito Constitucional",
    "Direito Administrativo",
    "Português",
    "Raciocínio Lógico",
    "Informática",
  ];

  const assuntos = {
    "Direito Constitucional": ["Direitos Fundamentais", "Organização do Estado", "Poder Legislativo"],
    "Direito Administrativo": ["Atos Administrativos", "Licitações", "Contratos"],
    "Português": ["Concordância Verbal", "Regência", "Interpretação de Texto"],
    "Raciocínio Lógico": ["Proposições", "Tabela Verdade", "Diagramas"],
    "Informática": ["Windows", "Excel", "Segurança da Informação"],
  };

  const tiposEstudo = [
    "Teoria",
    "Lei Seca",
    "Questões",
    "PDF/Apostila",
    "Vídeo-aula",
    "Revisão",
    "Resumo",
    "Flashcards",
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    if (!selectedDisciplina || !selectedAssunto || !selectedTipo) {
      alert("Por favor, selecione disciplina, assunto e tipo de estudo antes de iniciar!");
      return;
    }
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    if (time > 0) {
      setShowSaveModal(true);
    }
  };

  const handleSave = () => {
    // Aqui seria salvo no Supabase
    console.log({
      disciplina: selectedDisciplina,
      assunto: selectedAssunto,
      tipo: selectedTipo,
      tempo: Math.floor(time / 60), // em minutos
      observacoes,
      data: new Date().toISOString(),
    });
    
    // Reset
    setTime(0);
    setSelectedDisciplina("");
    setSelectedAssunto("");
    setSelectedTipo("");
    setObservacoes("");
    setShowSaveModal(false);
    
    alert("Estudo registrado com sucesso! ✅");
  };

  const handleCancel = () => {
    setTime(0);
    setShowSaveModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Área de Estudos
          </h1>
          <p className="text-gray-600">
            Configure seu estudo e inicie o cronômetro ⏱️
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuração do Estudo */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Configurar Estudo
            </h2>

            <div className="space-y-4">
              {/* Disciplina */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Disciplina *
                </label>
                <select
                  value={selectedDisciplina}
                  onChange={(e) => {
                    setSelectedDisciplina(e.target.value);
                    setSelectedAssunto("");
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  disabled={isRunning}
                >
                  <option value="">Selecione uma disciplina</option>
                  {disciplinas.map((disc) => (
                    <option key={disc} value={disc}>
                      {disc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Assunto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  value={selectedAssunto}
                  onChange={(e) => setSelectedAssunto(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  disabled={!selectedDisciplina || isRunning}
                >
                  <option value="">Selecione um assunto</option>
                  {selectedDisciplina &&
                    assuntos[selectedDisciplina as keyof typeof assuntos]?.map((assunto) => (
                      <option key={assunto} value={assunto}>
                        {assunto}
                      </option>
                    ))}
                </select>
              </div>

              {/* Tipo de Estudo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Estudo *
                </label>
                <select
                  value={selectedTipo}
                  onChange={(e) => setSelectedTipo(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  disabled={isRunning}
                >
                  <option value="">Selecione o tipo</option>
                  {tiposEstudo.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observações (opcional)
                </label>
                <textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                  rows={3}
                  placeholder="Adicione anotações sobre este estudo..."
                  disabled={isRunning}
                />
              </div>
            </div>
          </div>

          {/* Cronômetro */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-md p-8 text-white">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              Cronômetro
            </h2>

            {/* Display do Tempo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold font-mono mb-4">
                  {formatTime(time)}
                </div>
                <div className="text-lg opacity-90">
                  {Math.floor(time / 60)} minutos
                </div>
              </div>
            </div>

            {/* Informações do Estudo Atual */}
            {selectedDisciplina && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span className="font-semibold">Disciplina:</span>
                    <span>{selectedDisciplina}</span>
                  </div>
                  {selectedAssunto && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-semibold">Assunto:</span>
                      <span>{selectedAssunto}</span>
                    </div>
                  )}
                  {selectedTipo && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">Tipo:</span>
                      <span>{selectedTipo}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Controles */}
            <div className="flex gap-4">
              {!isRunning ? (
                <button
                  onClick={handleStart}
                  className="flex-1 bg-white text-purple-600 font-semibold py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Iniciar
                </button>
              ) : (
                <button
                  onClick={handlePause}
                  className="flex-1 bg-yellow-500 text-white font-semibold py-4 rounded-lg hover:bg-yellow-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Pause className="w-5 h-5" />
                  Pausar
                </button>
              )}
              <button
                onClick={handleStop}
                disabled={time === 0}
                className="flex-1 bg-red-500 text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Square className="w-5 h-5" />
                Parar
              </button>
            </div>
          </div>
        </div>

        {/* Histórico Recente */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Histórico de Hoje
          </h2>
          <div className="text-center text-gray-500 py-8">
            Nenhum estudo registrado hoje. Inicie seu primeiro estudo! 🚀
          </div>
        </div>
      </div>

      {/* Modal de Salvar */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Save className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Salvar Estudo?
              </h3>
              <p className="text-gray-600">
                Você estudou por {Math.floor(time / 60)} minutos
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm">
              <div className="space-y-2">
                <div><strong>Disciplina:</strong> {selectedDisciplina}</div>
                <div><strong>Assunto:</strong> {selectedAssunto}</div>
                <div><strong>Tipo:</strong> {selectedTipo}</div>
                <div><strong>Tempo:</strong> {formatTime(time)}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
