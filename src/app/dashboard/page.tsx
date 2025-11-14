"use client";

import { useState } from "react";
import Navbar from "@/components/custom/navbar";
import { Clock, Target, Trophy, TrendingUp, BookOpen, AlertCircle, Play, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function DashboardPage() {
  const [showCronometro, setShowCronometro] = useState(false);

  // Dados mockados para demonstração
  const progressoGeral = 42;
  const metaDiaria = { atual: 3, alvo: 5 };
  const metaSemanal = { atual: 18, alvo: 35 };

  const disciplinas = [
    { nome: "Direito Constitucional", progresso: 65, cor: "#3b82f6" },
    { nome: "Direito Administrativo", progresso: 48, cor: "#8b5cf6" },
    { nome: "Português", progresso: 72, cor: "#10b981" },
    { nome: "Raciocínio Lógico", progresso: 35, cor: "#f59e0b" },
    { nome: "Informática", progresso: 28, cor: "#ef4444" },
  ];

  const estudosSemanais = [
    { dia: "Seg", horas: 4.5 },
    { dia: "Ter", horas: 3.2 },
    { dia: "Qua", horas: 5.1 },
    { dia: "Qui", horas: 4.8 },
    { dia: "Sex", horas: 3.5 },
    { dia: "Sáb", horas: 6.2 },
    { dia: "Dom", horas: 5.5 },
  ];

  const questoesData = [
    { name: "Acertos", value: 68, color: "#10b981" },
    { name: "Erros", value: 32, color: "#ef4444" },
  ];

  const revisoesPendentes = [
    { disciplina: "Direito Constitucional", assunto: "Direitos Fundamentais", tipo: "24h", atrasado: false },
    { disciplina: "Português", assunto: "Concordância Verbal", tipo: "7d", atrasado: true },
    { disciplina: "Direito Administrativo", assunto: "Atos Administrativos", tipo: "30d", atrasado: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Acompanhe seu progresso e mantenha o foco na aprovação! 🎯
          </p>
        </div>

        {/* Cards de Estatísticas Principais */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Progresso Geral */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Progresso Geral</h3>
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{progressoGeral}%</p>
            <p className="text-xs text-gray-500 mt-1">do edital concluído</p>
          </div>

          {/* Meta Diária */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Meta Diária</h3>
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">
              {metaDiaria.atual}/{metaDiaria.alvo}h
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {Math.round((metaDiaria.atual / metaDiaria.alvo) * 100)}% concluído
            </p>
          </div>

          {/* Meta Semanal */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Meta Semanal</h3>
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">
              {metaSemanal.atual}/{metaSemanal.alvo}h
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {Math.round((metaSemanal.atual / metaSemanal.alvo) * 100)}% concluído
            </p>
          </div>

          {/* Questões */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Aproveitamento</h3>
              <Trophy className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">68%</p>
            <p className="text-xs text-gray-500 mt-1">em questões</p>
          </div>
        </div>

        {/* Botão Iniciar Estudo */}
        <div className="mb-8">
          <button
            onClick={() => setShowCronometro(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 hover:scale-105"
          >
            <Play className="w-6 h-6" />
            <span className="text-lg">Iniciar Estudo</span>
          </button>
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Progresso por Disciplina */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Progresso por Disciplina
            </h2>
            <div className="space-y-4">
              {disciplinas.map((disc, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{disc.nome}</span>
                    <span className="text-sm font-semibold text-gray-800">{disc.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${disc.progresso}%`,
                        backgroundColor: disc.cor,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revisões Pendentes */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              Revisões Pendentes
            </h2>
            <div className="space-y-3">
              {revisoesPendentes.map((revisao, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-l-4 ${
                    revisao.atrasado
                      ? "bg-red-50 border-red-500"
                      : "bg-blue-50 border-blue-500"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{revisao.disciplina}</p>
                      <p className="text-xs text-gray-600 mt-1">{revisao.assunto}</p>
                      <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${
                        revisao.atrasado
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {revisao.tipo}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-green-600 transition-colors">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Gráfico de Tempo Estudado */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Tempo Estudado (Última Semana)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={estudosSemanais}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="horas" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Questões */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Desempenho em Questões
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={questoesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {questoesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Modal Cronômetro (simplificado) */}
      {showCronometro && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Cronômetro de Estudos
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Funcionalidade completa disponível na página de Estudos
            </p>
            <button
              onClick={() => setShowCronometro(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
