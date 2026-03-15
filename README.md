# Paulo Mateus Portfolio

Portfólio pessoal reconstruído com `Next.js`, `React`, `TypeScript` e `Tailwind CSS`.

## Stack

- `Next.js` com App Router
- `TypeScript`
- `Tailwind CSS`
- `next-themes` para dark/light mode
- i18n client-side com seletor de idioma no header

## Estrutura

- `src/app`: layout global, página inicial e estilos globais
- `src/components`: componentes reutilizáveis da interface
- `src/data`: conteúdo centralizado para projetos, experiências, certificados e traduções
- `public`: imagens e currículos usados pelo novo site

## Rodando localmente

```bash
npm install
npm run dev
```

## Próximos ajustes fáceis

- adicionar novos projetos em `src/data/catalog.ts`
- ajustar textos e traduções em `src/data/site-content.ts`
- trocar imagens e currículos em `public/`

## Observação

O ambiente atual não tem `node`/`npm` instalados, então a base foi montada e organizada, mas não foi possível validar `build` ou `lint` localmente nesta sessão.
