'use client';

import { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Plus, 
  Search, 
  Crown, 
  Medal, 
  Target,
  Clock,
  CheckCircle2,
  TrendingUp,
  Lock,
  Globe,
  ChevronRight,
  Award,
  Flame,
  Star
} from 'lucide-react';

export default function ArenaArea() {
  const [view, setView] = useState<'list' | 'create' | 'group'>('list');
  const [selectedGroup, setSelectedGroup] = useState<any>(null);

  // Grupos mockados
  const grupos = [
    {
      id: '1',
      nome: 'Guerreiros da PRF 2024',
      membros: 45,
      tipo: 'publico',
      concurso: 'PRF',
      modalidades: ['horas_totais', 'questoes_resolvidas', 'percentual_acertos'],
    },
    {
      id: '2',
      nome: 'Rumo à PF',
      membros: 28,
      tipo: 'privado',
      concurso: 'PF',
      modalidades: ['horas_semanais', 'media_diaria'],
    },
    {
      id: '3',
      nome: 'Tribunais 2024',
      membros: 67,
      tipo: 'publico',
      concurso: 'TRF',
      modalidades: ['percentual_edital', 'horas_totais'],
    },
  ];

  // Rankings mockados
  const ranking = [
    { posicao: 1, nome: 'João Silva', avatar: 'JS', valor: 245, unidade: 'h' },
    { posicao: 2, nome: 'Maria Santos', avatar: 'MS', valor: 238, unidade: 'h' },
    { posicao: 3, nome: 'Pedro Costa', avatar: 'PC', valor: 221, unidade: 'h' },
    { posicao: 4, nome: 'Ana Paula', avatar: 'AP', valor: 215, unidade: 'h' },
    { posicao: 5, nome: 'Carlos Souza', avatar: 'CS', valor: 198, unidade: 'h' },
    { posicao: 6, nome: 'Você', avatar: 'JD', valor: 187, unidade: 'h', isUser: true },
  ];

  // Modalidades disponíveis
  const modalidades = [
    { id: 'percentual_edital', nome: 'Percentual do Edital', icon: Target, unidade: '%' },
    { id: 'horas_totais', nome: 'Horas Totais', icon: Clock, unidade: 'h' },
    { id: 'horas_semanais', nome: 'Horas Semanais', icon: Clock, unidade: 'h' },
    { id: 'horas_mensais', nome: 'Horas Mensais', icon: Clock, unidade: 'h' },
    { id: 'media_diaria', nome: 'Média Diária', icon: TrendingUp, unidade: 'h' },
    { id: 'questoes_resolvidas', nome: 'Questões Resolvidas', icon: CheckCircle2, unidade: 'questões' },
    { id: 'percentual_acertos', nome: 'Percentual de Acertos', icon: Target, unidade: '%' },
    { id: 'acertos_por_disciplina', nome: 'Acertos por Disciplina', icon: Award, unidade: '%' },
  ];

  // Lista de grupos
  if (view === 'list') {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Arena de Concurseiros</h2>
              <p className="text-purple-100">Compete com outros estudantes e alcance o topo do ranking</p>
            </div>
            <button
              onClick={() => setView('create')}
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Criar Grupo
            </button>
          </div>
        </div>

        {/* Buscar grupos */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar grupos..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Seus grupos */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Seus Grupos</h3>
          
          <div className="space-y-3">
            {grupos.slice(0, 2).map((grupo) => (
              <button
                key={grupo.id}
                onClick={() => {
                  setSelectedGroup(grupo);
                  setView('group');
                }}
                className="w-full p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-gray-900">{grupo.nome}</p>
                        {grupo.tipo === 'privado' ? (
                          <Lock className="w-4 h-4 text-gray-600" />
                        ) : (
                          <Globe className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {grupo.membros} membros • {grupo.concurso}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Grupos públicos */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Grupos Públicos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {grupos.map((grupo) => (
              <div
                key={grupo.id}
                className="p-4 border border-gray-200 rounded-xl hover:border-purple-300 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{grupo.nome}</p>
                      <p className="text-sm text-gray-600">{grupo.membros} membros</p>
                    </div>
                  </div>
                  {grupo.tipo === 'privado' && <Lock className="w-4 h-4 text-gray-600" />}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {grupo.modalidades.slice(0, 2).map((mod) => (
                    <span key={mod} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      {modalidades.find(m => m.id === mod)?.nome}
                    </span>
                  ))}
                  {grupo.modalidades.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      +{grupo.modalidades.length - 2}
                    </span>
                  )}
                </div>

                <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Entrar no Grupo
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Conquistas */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Suas Conquistas</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { nome: '100 Horas', icon: Clock, cor: 'from-blue-500 to-blue-600' },
              { nome: '7 Dias Seguidos', icon: Flame, cor: 'from-orange-500 to-orange-600' },
              { nome: '500 Questões', icon: CheckCircle2, cor: 'from-green-500 to-green-600' },
              { nome: '80% Acertos', icon: Target, cor: 'from-purple-500 to-purple-600' },
            ].map((conquista, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${conquista.cor} rounded-2xl flex items-center justify-center mx-auto mb-2`}>
                  <conquista.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{conquista.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Criar grupo
  if (view === 'create') {
    const [selectedModalidades, setSelectedModalidades] = useState<string[]>([]);

    const toggleModalidade = (id: string) => {
      if (selectedModalidades.includes(id)) {
        setSelectedModalidades(selectedModalidades.filter(m => m !== id));
      } else {
        setSelectedModalidades([...selectedModalidades, id]);
      }
    };

    return (
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => setView('list')}
          className="mb-6 text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Voltar
        </button>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Criar Novo Grupo</h2>

          <div className="space-y-6">
            {/* Nome do grupo */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Nome do Grupo
              </label>
              <input
                type="text"
                placeholder="Ex: Guerreiros da PRF 2024"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Descrição
              </label>
              <textarea
                placeholder="Descreva o objetivo do grupo..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Tipo */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Tipo de Grupo
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border-2 border-purple-500 bg-purple-50 rounded-xl text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <p className="font-bold text-gray-900">Público</p>
                  </div>
                  <p className="text-sm text-gray-600">Qualquer pessoa pode entrar</p>
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-xl text-left hover:border-purple-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="w-5 h-5 text-gray-600" />
                    <p className="font-bold text-gray-900">Privado</p>
                  </div>
                  <p className="text-sm text-gray-600">Apenas com convite</p>
                </button>
              </div>
            </div>

            {/* Concurso */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Concurso (opcional)
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Nenhum concurso específico</option>
                <option>PRF - Polícia Rodoviária Federal</option>
                <option>PF - Polícia Federal</option>
                <option>TRF1 - Tribunal Regional Federal</option>
              </select>
            </div>

            {/* Modalidades de ranking */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Modalidades de Ranking
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Selecione as modalidades que terão ranking no grupo
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modalidades.map((modalidade) => (
                  <button
                    key={modalidade.id}
                    onClick={() => toggleModalidade(modalidade.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedModalidades.includes(modalidade.id)
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedModalidades.includes(modalidade.id)
                          ? 'bg-purple-600'
                          : 'bg-gray-200'
                      }`}>
                        <modalidade.icon className={`w-5 h-5 ${
                          selectedModalidades.includes(modalidade.id) ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{modalidade.nome}</p>
                        <p className="text-xs text-gray-600">{modalidade.unidade}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Botão de criar */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Criar Grupo
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Visualização do grupo
  if (view === 'group' && selectedGroup) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setView('list')}
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Voltar
        </button>

        {/* Header do grupo */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold">{selectedGroup.nome}</h2>
                {selectedGroup.tipo === 'privado' ? (
                  <Lock className="w-6 h-6" />
                ) : (
                  <Globe className="w-6 h-6" />
                )}
              </div>
              <p className="text-purple-100">{selectedGroup.membros} membros • {selectedGroup.concurso}</p>
            </div>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all">
              Convidar Amigos
            </button>
          </div>
        </div>

        {/* Tabs de modalidades */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {selectedGroup.modalidades.map((mod: string) => {
              const modalidade = modalidades.find(m => m.id === mod);
              return (
                <button
                  key={mod}
                  className="px-6 py-4 border-b-2 border-purple-600 text-purple-600 font-semibold whitespace-nowrap"
                >
                  {modalidade?.nome}
                </button>
              );
            })}
          </div>

          {/* Ranking */}
          <div className="p-6">
            <div className="space-y-3">
              {ranking.map((item) => (
                <div
                  key={item.posicao}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                    item.isUser
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Posição */}
                    <div className="w-10 h-10 flex items-center justify-center">
                      {item.posicao === 1 && <Crown className="w-8 h-8 text-yellow-500" />}
                      {item.posicao === 2 && <Medal className="w-7 h-7 text-gray-400" />}
                      {item.posicao === 3 && <Medal className="w-7 h-7 text-orange-600" />}
                      {item.posicao > 3 && (
                        <span className="text-lg font-bold text-gray-600">{item.posicao}º</span>
                      )}
                    </div>

                    {/* Avatar e nome */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      item.isUser
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                        : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                    }`}>
                      {item.avatar}
                    </div>
                    <div>
                      <p className={`font-bold ${item.isUser ? 'text-purple-900' : 'text-gray-900'}`}>
                        {item.nome}
                      </p>
                      {item.isUser && (
                        <p className="text-xs text-purple-600 font-semibold">Você</p>
                      )}
                    </div>
                  </div>

                  {/* Valor */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {item.valor}
                      <span className="text-sm text-gray-600 ml-1">{item.unidade}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas do grupo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total de Membros</p>
                <p className="text-2xl font-bold text-gray-900">{selectedGroup.membros}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Média do Grupo</p>
                <p className="text-2xl font-bold text-gray-900">198h</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Sua Posição</p>
                <p className="text-2xl font-bold text-gray-900">6º</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
