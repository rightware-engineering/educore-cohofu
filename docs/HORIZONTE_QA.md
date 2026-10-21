# Horizonte do Futuro — QA visual e funcional

**Data:** 21/10/2026  
**Branch:** `main`  
**Deployment:** não executado.

## Validação técnica

- `npm run build --prefix frontend` — passou.
- `npm test --prefix frontend` — passou: 3 ficheiros, 8 testes.
- `npm run lint --prefix frontend` — 0 erros; 9 avisos legados `react-refresh/only-export-components` em componentes/UI e contexts.
- Assets públicos auditados com HTTP 200 e MIME correto para `campus.webp`, `students.webp`, `logo.webp`, `favicon.svg` e `horizon-graphic.svg`.
- Scan da landing, login, tenant e metadata ativos — sem referências públicas a EUNIJOPA, Páscoa, Deus Connosco ou COLUS.
- Os oito perfis mantêm entradas próprias, incluindo a zona separada de Receção; o smoke test de browser confirmou `/app/reception/dashboard`.

## Viewports capturados

Cada screenshot foi produzido com Chromium headless contra o frontend local, com a largura pedida e altura de 1000px para desktop/tablet ou 900px para mobile.

| Área | 1440 | 1024 | 768 | 390 | 375 | 320 |
|---|---|---|---|---|---|---|
| Landing | [PNG](qa-screenshots/horizonte-landing-1440.png) | [PNG](qa-screenshots/horizonte-landing-1024.png) | [PNG](qa-screenshots/horizonte-landing-768.png) | [PNG](qa-screenshots/horizonte-landing-390.png) | [PNG](qa-screenshots/horizonte-landing-375.png) | [PNG](qa-screenshots/horizonte-landing-320.png) |
| Login | [PNG](qa-screenshots/horizonte-login-1440.png) | [PNG](qa-screenshots/horizonte-login-1024.png) | [PNG](qa-screenshots/horizonte-login-768.png) | [PNG](qa-screenshots/horizonte-login-390.png) | [PNG](qa-screenshots/horizonte-login-375.png) | [PNG](qa-screenshots/horizonte-login-320.png) |

## Observações

A composição editorial foi desenhada para não transformar os previews de poucos KB em fundos fotográficos full-width. Os previews aparecem apenas em molduras contidas, enquanto o hero e o ritmo visual são construídos com gradientes, círculos e tipografia própria do conceito “Um horizonte de possibilidades”.

A landing e o login foram verificados no browser; a navegação de login para Receção abriu o dashboard protegido e separado. Os dados dos dashboards continuam demonstrativos e não representam operações reais.

O lint não apresenta erros introduzidos nesta fase. Os nove avisos são preexistentes e correspondem à regra de Fast Refresh em ficheiros partilhados.

## Pendências para aprovação visual

- Receber e integrar os originais HD do colégio, logótipo oficial e favicons autorizados.
- Confirmar autorização para fotografias, especialmente imagens de menores.
- Validar conteúdo institucional, contactos, morada, níveis e campanhas diretamente com o colégio.
- Fazer aprovação visual humana antes de qualquer deployment.
