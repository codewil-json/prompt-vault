<template>
  <section class="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-soft">
    <div>
      <label class="mb-2 block text-sm font-semibold text-slate-400">Busca em tempo real</label>
      <input
        v-model="store.search"
        type="search"
        placeholder="Buscar prompt, categoria ou palavra-chave"
        class="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      />
    </div>

    <div class="flex flex-wrap gap-3">
      <button
        v-for="category in store.categories"
        :key="category"
        @click="store.setCategory(category)
        "
        :class="[
          'rounded-full px-4 py-2 text-sm font-medium transition',
          store.selectedCategory === category
            ? 'bg-indigo-500 text-slate-950 shadow'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <div class="flex flex-wrap items-center gap-3 text-sm text-slate-400">
      <span class="font-semibold uppercase tracking-[0.25em]">Filtros rápidos</span>
      <button
        v-for="option in tabOptions"
        :key="option.value"
        @click="store.setTab(option.value)"
        :class="[
          'rounded-full px-4 py-2 transition',
          store.selectedTab === option.value
            ? 'bg-indigo-500 text-slate-950 shadow'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        ]"
      >
        {{ option.label }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { usePromptStore } from '../store/promptStore'

const store = usePromptStore()

const tabOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'favorites', label: 'Favoritos' },
]
</script>
