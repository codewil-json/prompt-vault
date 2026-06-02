import { defineStore } from 'pinia'

const STORAGE_KEY = 'prompt-vault-state'

const initialPrompts = [
  {
    id: 'p1',
    title: 'Copywriting para lançamento de produto',
    category: 'Marketing',
    prompt:
      'Crie uma sequência de e-mails de lançamento para um novo software de automação de marketing, enfatizando benefícios, escassez e prova social.',
  },
  {
    id: 'p2',
    title: 'Resumo técnico para desenvolvedores',
    category: 'Desenvolvimento',
    prompt:
      'Resuma a arquitetura de microsserviços para uma equipe de desenvolvedores com foco em escalabilidade e observabilidade.',
  },
  {
    id: 'p3',
    title: 'Roteiro de vídeo social',
    category: 'Conteúdo',
    prompt:
      'Escreva um roteiro de vídeo curto para Instagram Reels sobre dicas para aumentar o engajamento orgânico.',
  },
  {
    id: 'p4',
    title: 'Post para LinkedIn',
    category: 'Empresas',
    prompt:
      'Crie um post para LinkedIn posicionando uma consultoria de transformação digital como referência para médias empresas.',
  },
  {
    id: 'p5',
    title: 'Análise de performance de campanha',
    category: 'IA',
    prompt:
      'Liste métricas-chave para avaliar o desempenho de uma campanha de anúncios usando ferramentas de IA.',
  },
]

const persistedState = ({ store }) => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      store.$state.favorites = parsed.favorites || []
      store.$state.selectedCategory = parsed.selectedCategory || 'Todos'
      store.$state.selectedTab = parsed.selectedTab || 'all'
    } catch (error) {
      console.warn('Não foi possível carregar o estado salvo:', error)
    }
  }

  store.$subscribe(() => {
    const payload = {
      favorites: store.$state.favorites,
      selectedCategory: store.$state.selectedCategory,
      selectedTab: store.$state.selectedTab,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  })
}

export const usePromptStore = defineStore('prompt', {
  state: () => ({
    search: '',
    selectedCategory: 'Todos',
    selectedTab: 'all',
    prompts: initialPrompts,
    favorites: [],
  }),
  getters: {
    categories(state) {
      const categories = Array.from(new Set(state.prompts.map((prompt) => prompt.category)))
      return ['Todos', ...categories]
    },
    filteredPrompts(state) {
      const query = state.search.trim().toLowerCase()
      return state.prompts.filter((prompt) => {
        const matchesCategory = state.selectedCategory === 'Todos' || prompt.category === state.selectedCategory
        const matchesQuery =
          !query ||
          prompt.title.toLowerCase().includes(query) ||
          prompt.prompt.toLowerCase().includes(query) ||
          prompt.category.toLowerCase().includes(query)
        return matchesCategory && matchesQuery
      })
    },
    favoritePrompts(state) {
      return state.prompts.filter((prompt) => state.favorites.includes(prompt.id))
    },
    stats(state) {
      return {
        total: state.prompts.length,
        favorites: state.favorites.length,
        categories: Array.from(new Set(state.prompts.map((prompt) => prompt.category))).length,
        activeCategory: state.selectedCategory,
      }
    },
  },
  actions: {
    toggleFavorite(promptId) {
      if (this.favorites.includes(promptId)) {
        this.favorites = this.favorites.filter((id) => id !== promptId)
      } else {
        this.favorites = [...this.favorites, promptId]
      }
    },
    setSearch(value) {
      this.search = value
    },
    setCategory(value) {
      this.selectedCategory = value
    },
    setTab(value) {
      this.selectedTab = value
    },
    async copyPrompt(text) {
      if (!text) return false
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (error) {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        return true
      }
    },
  },
})

export { persistedState }
