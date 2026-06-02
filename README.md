# Prompt Vault

Prompt Vault é uma plataforma SaaS para organizar, pesquisar, favoritar e reutilizar prompts de IA.

## Tecnologias

- Vue 3
- Vite
- Tailwind CSS
- Pinia
- Vue Router

## Funcionalidades MVP

- Biblioteca de prompts
- Busca em tempo real
- Categorias e favoritos
- Cópia rápida de prompts
- Dashboard com estatísticas de uso
- Persistência em `localStorage`

## Comandos

```bash
npm install
npm run dev
```

## Estrutura principal

- `src/main.js` – inicializa Vue, Pinia e Tailwind
- `src/App.vue` – layout principal da plataforma
- `src/router/index.js` – rotas de navegação
- `src/store/promptStore.js` – gerenciamento de prompts e persistência
- `src/components` – filtros, cards e dashboard
- `src/views` – páginas da aplicação
