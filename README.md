# PROFILE 2.0

![Test workflow](https://github.com/wtchnm/PROFILE/actions/workflows/test.yml/badge.svg) [![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/PROFILE/blob/main/LICENSE)

Aplicação para gerenciamento e exibição de perfis.  
Ideal para projetos que precisam organizar e apresentar informações de pessoas notáveis (ex: personalidades históricas, artistas, cientistas, ativistas).

---

## ✨ Features

- Baseado em [Vite 6](https://vitejs.dev) com [React 19](https://reactjs.org), [TypeScript 5](https://www.typescriptlang.org) e [imports absolutos](https://github.com/aleclarson/vite-tsconfig-paths).
- [Tailwind CSS v4](https://tailwindcss.com) para estilização responsiva e rápida.
- [Biome V2](https://next.biomejs.dev) para linting, formatação e ordenação automática de imports.
- Testes unitários e de integração com [Vitest 3](https://vitest.dev/) e [Testing Library 16](https://testing-library.com/).
- Testes end-to-end com [Playwright 1.52](https://playwright.dev/).
- Estrutura **JSON padronizada** para perfis, incluindo:
  - Nome
  - Biografia resumida
  - Metadados (área de atuação, nascimento, destaques etc.)
  - Imagem com autor, cor e URL

---

## 🚀 Getting started

Use este repositório como [GitHub template](https://github.com/wtchnm/PROFILE/generate) ou clone via [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit wtchnm/PROFILE#main my-profiles-app
```

Depois instale as dependências:

```bash
pnpm install
```

---

## 📜 Scripts

- `pnpm dev` - inicia o servidor de desenvolvimento com hot reload.
- `pnpm build` - build para produção (arquivos em `dist`).
- `pnpm preview` - preview local da versão de produção.
- `pnpm test` - executa testes unitários e de integração relacionados a mudanças.
- `pnpm test:ci` - executa todos os testes unitários e de integração em modo CI.
- `pnpm test:e2e` - executa testes end-to-end com Playwright.
- `pnpm test:e2e:ci` - executa todos os testes e2e em modo headless.
- `pnpm format` - formata todos os arquivos com Biome.
- `pnpm lint` - roda TypeScript + Biome.
- `pnpm validate` - roda `lint`, `test:ci` e `test:e2e:ci`.

---

## 📂 Exemplo de Estrutura de Perfil

```json
{
  "image": {
    "author": "placeholder",
    "color": "#000000",
    "url": "https://via.placeholder.com/150"
  },
  "metadata": [
    { "name": "Área", "value": "Política / Educação" },
    { "name": "Nascimento", "value": "11 de julho de 1901" },
    { "name": "Falecimento", "value": "28 de março de 1952" },
    { "name": "Destaque", "value": "Primeira mulher negra eleita no Brasil e primeira deputada estadual negra" }
  ],
  "name": "Antonieta de Barros"
}
```

---

## 📌 Roadmap

- [ ] Criar UI de cards para exibir os perfis em grid responsivo.  
- [ ] Suporte a filtros e busca por nome/área.  
- [ ] Integração com API externa de imagens (ex: Wikimedia Commons).  
- [ ] Deploy no Vercel/Netlify.  

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).