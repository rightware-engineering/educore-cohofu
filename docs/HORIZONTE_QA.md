# Horizonte do Futuro — QA «Caminhos para o Futuro»

**Data:** 21/10/2026  
**Branch:** `main`  
**Deployment:** não executado.

## Direção visual aplicada

A identidade anterior com anéis, círculos gigantes, blobs, medalhões e “HF” decorativo foi removida da experiência pública do Horizonte. A nova assinatura deriva do logótipo oficial através de:

- linha de horizonte longa e linear;
- caminho em perspetiva com margens angulares convergentes;
- facetas de livro aberto em planos geométricos;
- azul-marinho, azul de apoio, dourado e branco-quente;
- ícones lineares com barras douradas, sem medalhões circulares;
- botões e cartões com cantos moderados, sem aparência de pills excessivas.

O círculo que pertence ao logótipo oficial foi preservado apenas dentro do próprio logo.

## Validação técnica

- `npm ci --prefix frontend` — concluído.
- `npm run build --prefix frontend` — passou; avisos de dependências com `use client` permanecem informativos.
- `npm test --prefix frontend` — passou: 3 ficheiros, 8 testes.
- `npm run lint --prefix frontend` — 0 erros; avisos Fast Refresh legados documentados quando aplicável.
- `git diff --check` — passou.
- Atribuição `Powered by EduCore` flutuante removida; a atribuição institucional permanece no rodapé da landing.
- O login mantém os oito perfis: Aluno, Encarregado, Professor, Pedagogia, Receção, Secretaria, Finanças e Direcção.
- A entrada `/` e `/login` carregam com media versionada e sem referências a `hero.webp`, `hero-mobile.webp`, `staircase.webp`, `corridor.webp` ou `favicon.svg` inexistentes.
- A referência fornecida não é carregada pelo runtime.

## Screenshots finais

Capturas reais produzidas com Chromium headless contra o frontend local:

| Área | 1536 | 1440 | 1024 | 768 | 390 | 375 | 320 |
|---|---|---|---|---|---|---|---|
| Landing | [PNG](qa-screenshots/caminhos-landing-1536.png) | [PNG](qa-screenshots/caminhos-landing-1440.png) | [PNG](qa-screenshots/caminhos-landing-1024.png) | [PNG](qa-screenshots/caminhos-landing-768.png) | [PNG](qa-screenshots/caminhos-landing-390.png) | [PNG](qa-screenshots/caminhos-landing-375.png) | [PNG](qa-screenshots/caminhos-landing-320.png) |
| Login | [PNG](qa-screenshots/caminhos-login-1536.png) | [PNG](qa-screenshots/caminhos-login-1440.png) | [PNG](qa-screenshots/caminhos-login-1024.png) | [PNG](qa-screenshots/caminhos-login-768.png) | [PNG](qa-screenshots/caminhos-login-390.png) | [PNG](qa-screenshots/caminhos-login-375.png) | [PNG](qa-screenshots/caminhos-login-320.png) |

**Referência lado a lado:** [referencia-landing-desktop-caminhos.png](design-reference/referencia-landing-desktop-caminhos.png).

## Comparação visual

A hierarquia da referência foi preservada: header branco, logo oficial, navegação, CTA, título de alto contraste, dois CTAs, faixa de valores e galeria. A solução agora é deliberadamente Horizonte e não “Páscoa azul”: em vez de arcos/círculos, o hero mostra um caminho angular, uma linha de horizonte e uma composição de páginas abertas; a transição para os valores é linear e diagonal.

A galeria mantém o princípio editorial, mas usa apenas previews efetivamente versionados e contidos. Não apresenta texto de desenvolvimento, “preview”, “Espaço para fotografia” ou instruções técnicas ao visitante. Nenhuma fotografia do screenshot de inspiração foi apropriada como conteúdo real.

## Critérios de aceitação verificados

- Sem ornamentos circulares/anéis/blobs no Horizonte landing/login.
- Logo oficial preservado e usado com proporção original.
- Sem `HF` decorativo.
- Sem medalhões circulares para ícones.
- Sem atribuição técnica flutuante.
- Sem overflow horizontal observado na matriz mobile.
- CTAs tocáveis e título legível em 390, 375 e 320px.
- Menu mobile mantém `aria-expanded`, `aria-controls`, estado visível e anchors navegáveis.
- Media ativos respondem HTTP 200 com MIME adequado.
- Assets HD e autorizações de imagens de menores continuam registados como pendentes.

## Limitações e próxima aprovação

As fotografias HD oficiais, direitos de uso, favicon/variantes oficiais e conteúdo institucional final continuam pendentes. A aprovação visual humana deve ocorrer antes de qualquer deployment. O deployment não foi feito.
