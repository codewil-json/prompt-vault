<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-indigo-400">Prompt Vault</p>
          <h1 class="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Centralize seus prompts de IA</h1>
        </div>
        <nav class="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <router-link class="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 transition hover:border-indigo-500 hover:text-white" to="/">Biblioteca</router-link>
          <router-link class="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 transition hover:border-indigo-500 hover:text-white" to="/about">Sobre</router-link>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-8">
      <router-view />
    </main>

    <footer class="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
      © 2026 Prompt Vault — Organização e reutilização de prompts de IA.
    </footer>
  </div>
</template>
