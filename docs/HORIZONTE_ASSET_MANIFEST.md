# Horizonte do Futuro — Manifesto de assets

**Auditoria:** 21/10/2026  
**Repositório:** `rightware-engineering/educore-cohofu`  
**Branch:** `main`  
**Estado:** identidade visual «Caminhos para o Futuro» integrada; fotografias HD autorizadas continuam pendentes.

## Assets atualmente versionados

| Ficheiro | Localização | Resolução / formato | Finalidade atual | Classificação | Estado |
|---|---|---:|---|---|---|
| `campus.webp` | `frontend/public/school/campus.webp` | 460 × 259, WebP | Media contida no hero/login | Preview de baixa resolução; não adequado para full-width | Provisório |
| `students.webp` | `frontend/public/school/students.webp` | 400 × 192, WebP | Secção institucional | Preview de baixa resolução; apresentado contido | Provisório |
| `classroom.webp` | `frontend/public/school/classroom.webp` | 320 × 126, WebP | Card editorial de galeria | Preview de baixa resolução; não ampliado como hero | Provisório |
| `facilities.webp` | `frontend/public/school/facilities.webp` | 320 × 119, WebP | Cards editoriais de galeria | Preview de baixa resolução; não ampliado como hero | Provisório |
| `logo-horizonte.webp` | `frontend/public/school/logo-horizonte.webp` | 1080 × 1080, WebP | Header, login, favicon e metadata | Logo oficial fornecido; proporção preservada | Integrado |
| `logotipo-horizonte.webp` | `frontend/public/school/originals/logotipo-horizonte.webp` | 1080 × 1080, WebP | Preservação do original recebido | Original preservado byte a byte | Integrado |
| `horizon-graphic.svg` | `frontend/public/school/horizon-graphic.svg` | SVG | Asset legado disponível | Não usado na nova identidade; assinatura atual é inline e autoral | Legado |

## Identidade «Caminhos para o Futuro»

A interface deriva do logótipo oficial sem o redesenhar: linhas longas de horizonte, caminho em perspetiva com margens angulares e facetas de livro aberto. A assinatura é composta em SVG inline e CSS responsivo, sem círculos, anéis, blobs, “HF” decorativo ou medalhões.

- Tokens de interface: azul-marinho `#082B56`, azul profundo `#041C3C`, azul apoio `#174A78`, dourado `#F4A51C`, realce `#FFCC55`, branco-quente `#FAF8F3` e cinza `#5B6B7B`.
- Os quatro valores usam ícones lineares e barras verticais douradas, sem fundos circulares.
- O hero e o login usam caminhos e planos angulares; a única forma circular preservada é a que pertence ao logótipo oficial.
- O rodapé mantém a atribuição EduCore no lugar institucional apropriado, sem badges flutuantes sobre o conteúdo.

## Referências no código

- `frontend/src/pages/public/GenericTenantLanding.tsx` é a composição pública ativa e usa apenas media que existem no repositório.
- `frontend/src/pages/public/HorizonteLanding.tsx` é a entrada do tenant.
- `frontend/src/pages/auth/GenericTenantLogin.tsx` mantém os oito papéis e usa a mesma gramática de caminho/páginas.
- `frontend/src/data/tenants.ts` aponta logo, mark e favicon para `logo-horizonte.webp`.
- `frontend/index.html` aponta favicon, apple touch icon e metadata social para `logo-horizonte.webp`.

## Critérios de qualidade

Não foram recebidas fotografias HD originais autorizadas no pacote atual. Os previews fotográficos permanecem contidos em molduras editoriais e não são apresentados como fotografias oficiais de alta resolução. A referência visual fornecida não é carregada pelo runtime e nenhuma imagem do screenshot é apropriada como conteúdo da escola.

## Assets pendentes

1. Fotografias originais HD da fachada/campus, alunos, salas e instalações.
2. Autorizações de uso de fotografias, especialmente imagens de menores.
3. Favicon e variantes oficiais para fundos claros/escuros, caso o colégio as forneça.
4. Tipografia, cores e regras formais de uso da marca validadas pelo colégio.
5. Conteúdo institucional validado: contactos, morada, níveis de ensino, matrículas, preços e campanhas.

## Identidade proibida

Não integrar, reutilizar ou publicar imagens, logótipos, fotografias ou grafismos de EUNIJOPA, Páscoa, Deus Connosco, COLUS ou qualquer outra escola neste repositório.
