<template>
  <section class="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-soft sm:grid-cols-3">
    <div class="rounded-3xl bg-slate-950/80 p-5">
      <p class="text-sm uppercase tracking-[0.24em] text-slate-400">Prompts</p>
      <p class="mt-3 text-3xl font-semibold text-slate-100">{{ stats.total }}</p>
      <p class="mt-2 text-sm text-slate-400">Itens disponíveis na biblioteca.</p>
    </div>
    <div class="rounded-3xl bg-slate-950/80 p-5">
      <p class="text-sm uppercase tracking-[0.24em] text-slate-400">Favoritos</p>
      <p class="mt-3 text-3xl font-semibold text-slate-100">{{ stats.favorites }}</p>
      <p class="mt-2 text-sm text-slate-400">Prompts guardados para reutilização rápida.</p>
    </div>
    <div class="rounded-3xl bg-slate-950/80 p-5">
      <p class="text-sm uppercase tracking-[0.24em] text-slate-400">Categorias</p>
      <p class="mt-3 text-3xl font-semibold text-slate-100">{{ stats.categories }}</p>
      <p class="mt-2 text-sm text-slate-400">Segmentos que ajudam a organizar os prompts.</p>
    </div>
  </section>
</template>

<script setup>
import { usePromptStore } from '../store/promptStore'

const store = usePromptStore()
const stats = store.stats
</script>
