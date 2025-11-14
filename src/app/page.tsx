"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Target, Trophy, Users, Clock, TrendingUp, Award, Zap } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            AprovApp
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Sua jornada rumo à aprovação começa aqui. Sistema completo de gestão de estudos para concurseiros.
          </p>
        </div>

        {/* Cards de Diferenciais */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {/* Card 1 - Editais Verticalizados */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Editais Verticalizados
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Editais prontos dos principais concursos ou faça upload do seu. Organize por disciplinas, assuntos e acompanhe seu progresso.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Controle Completo */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Controle Total de Estudos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cronômetro integrado, registro automático de tempo, metas diárias e semanais. Tudo sincronizado com seu edital.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Sistema de Questões */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-4 rounded-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Sistema Inteligente de Questões
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Registre suas questões ou deixe o app propor. Análise detalhada de desempenho por disciplina e assunto.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Gamificação */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Arena & Gamificação
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Crie grupos, compita com amigos, conquiste medalhas e suba no ranking. Motivação em comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção "Tudo que você precisa" */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-white/90 text-lg">
              Recursos completos para sua jornada rumo à aprovação
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                <Clock className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold text-lg mb-2">
                  Cronômetro Integrado
                </h4>
                <p className="text-white/80 text-sm">
                  Registre cada minuto de estudo automaticamente
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                <Zap className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold text-lg mb-2">
                  Revisões Inteligentes
                </h4>
                <p className="text-white/80 text-sm">
                  Sistema SRS com revisões de 24h, 7 e 30 dias
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                <BookOpen className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold text-lg mb-2">
                  Lei Seca Organizada
                </h4>
                <p className="text-white/80 text-sm">
                  Cadastre leis, marque artigos e acompanhe progresso
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                <Award className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-white font-semibold text-lg mb-2">
                  Dashboard Inteligente
                </h4>
                <p className="text-white/80 text-sm">
                  Visualize seu desempenho e evolução em tempo real
                </p>
              </div>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="text-center mt-10">
            <button 
              onClick={() => router.push('/onboarding')}
              className="bg-white text-purple-600 font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
