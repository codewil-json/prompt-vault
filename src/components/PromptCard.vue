<template>
  <article class="group rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-indigo-500/30">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.24em] text-indigo-400">{{ prompt.category }}</p>
        <h3 class="mt-3 text-lg font-semibold text-slate-100">{{ prompt.title }}</h3>
      </div>
      <button
        type="button"
        @click="toggleFavorite"
        class="rounded-full border border-slate-700 px-3 py-2 text-sm transition hover:border-indigo-500 hover:text-indigo-300"
      >
        <span v-if="isFavorite">★ Favorito</span>
        <span v-else>☆ Favoritar</span>
      </button>
    </div>

    <pre class="mt-5 overflow-x-auto rounded-3xl bg-slate-950 p-4 text-sm leading-6 text-slate-200">
{{ prompt.prompt }}
    </pre>

    <div class="mt-5 flex flex-wrap items-center gap-3">
      <button
        type="button"
        @click="copyPromptText"
        class="rounded-2xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-indigo-400"
      >
        {{ copied ? 'Copiado' : 'Copiar prompt' }}
      </button>
      <span class="text-sm text-slate-400">{{ prompt.prompt.length }} caracteres</span>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePromptStore } from '../store/promptStore'

const props = defineProps({
  prompt: {
    type: Object,
    required: true,
  },
})

const store = usePromptStore()
const copied = ref(false)

const isFavorite = computed(() => store.favorites.includes(props.prompt.id))

function toggleFavorite() {
  store.toggleFavorite(props.prompt.id)
}

async function copyPromptText() {
  const success = await store.copyPrompt(props.prompt.prompt)
  copied.value = success
  if (success) {
    window.setTimeout(() => {
      copied.value = false
    }, 1800)
  }
}
</script>
