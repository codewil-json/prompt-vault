<template>
  <section class="space-y-10">
    <div class="grid gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
      <div class="space-y-6">
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-400">Plataforma SaaS</p>
        <h2 class="max-w-3xl text-4xl font-semibold text-slate-100 sm:text-5xl">Organize, busque e reutilize prompts de IA com velocidade.</h2>
        <p class="max-w-2xl text-lg text-slate-300">
          Prompt Vault ajuda profissionais de marketing, desenvolvedores, criadores de conteúdo e equipes a manter uma biblioteca inteligente de prompts com categorias, favoritos e estatísticas em tempo real.
        </p>
      </div>
      <div class="rounded-4xl border border-slate-800 bg-slate-900/95 p-6 shadow-soft">
        <p class="text-sm uppercase tracking-[0.31em] text-slate-400">Status rápido</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-3">
          <div class="rounded-3xl bg-slate-950/80 p-4 text-center">
            <p class="text-2xl font-semibold text-slate-100">{{ stats.total }}</p>
            <p class="mt-2 text-sm text-slate-400">Prompts</p>
          </div>
          <div class="rounded-3xl bg-slate-950/80 p-4 text-center">
            <p class="text-2xl font-semibold text-slate-100">{{ stats.favorites }}</p>
            <p class="mt-2 text-sm text-slate-400">Favoritos</p>
          </div>
          <div class="rounded-3xl bg-slate-950/80 p-4 text-center">
            <p class="text-2xl font-semibold text-slate-100">{{ stats.categories }}</p>
            <p class="mt-2 text-sm text-slate-400">Categorias</p>
          </div>
        </div>
      </div>
    </div>

    <PromptFilters />

    <DashboardStats />

    <div>
      <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 class="text-2xl font-semibold text-slate-100">Biblioteca de prompts</h3>
          <p class="text-slate-400">Filtre e encontre prompts usando categorias ou palavras-chave.</p>
        </div>
        <p class="text-sm text-slate-500">Persistência local salva seus favoritos automaticamente.</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <PromptCard
          v-for="prompt in visiblePrompts"
          :key="prompt.id"
          :prompt="prompt"
        />
      </div>

      <p v-if="visiblePrompts.length === 0" class="rounded-3xl border border-dashed border-slate-700 bg-slate-900/90 p-8 text-center text-slate-400">
        Nenhum prompt encontrado. Ajuste a busca ou selecione outra categoria.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePromptStore } from '../store/promptStore'
import PromptFilters from '../components/PromptFilters.vue'
import PromptCard from '../components/PromptCard.vue'
import DashboardStats from '../components/DashboardStats.vue'

const store = usePromptStore()

const visiblePrompts = computed(() => {
  const list = store.selectedTab === 'favorites' ? store.favoritePrompts : store.filteredPrompts
  return list
})

const stats = store.stats
</script>
