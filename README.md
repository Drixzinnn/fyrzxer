# fyrzxer

Rede social inspirada no Instagram. Next.js (App Router) + TypeScript + Tailwind + Supabase.

## Status por fase

| Fase | Conteúdo | Status |
|---|---|---|
| 0 | Base, layout responsivo, tema claro/escuro, PWA | pronta |
| 1 | Autenticação e perfil (+ schema SQL inicial com RLS) | próxima |
| 2 | Posts e feed | |
| 3 | Curtidas, comentários, seguidores | |
| 4 | Stories e Reels | |
| 5 | Mensagens em tempo real | |
| 6 | Explorar, busca e notificações | |
| 7 | Configurações, moderação e painel admin | |

## Como rodar

```bash
npm install
cp .env.example .env.local   # preencha com as chaves do seu projeto Supabase
npm run dev
```

Abra http://localhost:3000. Sem as variáveis do Supabase o app abre normalmente
(só a interface); o banco passa a ser necessário a partir da fase 1.

## Estrutura

```
src/
  app/
    layout.tsx            fontes, tema, metadados, PWA
    (app)/                rotas com navegação (feed, explore, reels, ...)
  components/
    layout/               Sidebar (desktop), BottomNav (celular), Wordmark, ThemeToggle
    ui/                   EmptyState, Skeleton
    pwa/                  registro do service worker
  lib/supabase/           clientes de navegador e de servidor
  stores/                 estado local (Zustand)
public/                   manifest, service worker, página offline, ícone
```

## Como estender

- **Nova rota com navegação:** crie `src/app/(app)/minha-rota/page.tsx` e adicione o item em `components/layout/nav-items.ts`.
- **Cores:** edite as variáveis em `src/app/globals.css` (tema claro em `:root`, escuro em `.dark`).
- **PWA:** o service worker só é registrado em produção (`npm run build && npm start`).
