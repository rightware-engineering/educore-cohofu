# Horizonte do Futuro — QA visual e funcional

**Data:** 21/10/2026  
**Branch:** `main`  
**Deployment:** não executado.

## Validação técnica

- `npm ci --prefix frontend` — concluído.
- `npm run build --prefix frontend` — passou; apenas avisos de bundling de dependências com diretivas `use client` e aviso de chunk grande do Vite.
- `npm test --prefix frontend` — passou: 3 ficheiros, 8 testes.
- `npm run lint --prefix frontend` — 0 erros; 9 avisos legados `react-refresh/only-export-components` em componentes/UI e contexts.
- `git diff --check` — passou.
- HTTP 200 e MIME verificados para `logo-horizonte.webp`, `campus.webp`, `students.webp`, `classroom.webp`, `facilities.webp` e `horizon-graphic.svg`.
- Metadata, favicon, apple touch icon e OG/Twitter apontam para o asset oficial versionado `logo-horizonte.webp`.
- A entrada pública `/` e `/login` carregaram no browser local; o menu mobile tem botão com `aria-expanded`, `aria-controls` e links funcionais.
- Os oito perfis continuam declarados, com rotas próprias, navegação desktop/mobile e guards existentes; a experiência de Receção foi smoke-tested em `/app/reception/dashboard` sem alterar dados reais.

## Screenshots finais

Os screenshots foram produzidos com Chromium headless contra o frontend local. Desktop usa 1024px de altura; mobile usa 900px. A referência original foi guardada apenas em documentação, nunca é carregada pelo runtime.

| Área | 1536 | 1440 | 1024 | 768 | 390 | 375 | 320 |
|---|---|---|---|---|---|---|---|
| Landing | [PNG](qa-screenshots/horizonte-landing-1536.png) | [PNG](qa-screenshots/horizonte-landing-1440.png) | [PNG](qa-screenshots/horizonte-landing-1024.png) | [PNG](qa-screenshots/horizonte-landing-768.png) | [PNG](qa-screenshots/horizonte-landing-390.png) | [PNG](qa-screenshots/horizonte-landing-375.png) | [PNG](qa-screenshots/horizonte-landing-320.png) |
| Login | [PNG](qa-screenshots/horizonte-login-1536.png) | [PNG](qa-screenshots/horizonte-login-1440.png) | [PNG](qa-screenshots/horizonte-login-1024.png) | [PNG](qa-screenshots/horizonte-login-768.png) | [PNG](qa-screenshots/horizonte-login-390.png) | [PNG](qa-screenshots/horizonte-login-375.png) | [PNG](qa-screenshots/horizonte-login-320.png) |

**Referência fornecida:** [referencia-landing-desktop.png](design-reference/referencia-landing-desktop.png).
**Logo fornecido integrado:** [logo-horizonte.webp](../frontend/public/school/logo-horizonte.webp).

## Comparação visual com a referência

Implementado com fidelidade estrutural e de linguagem visual:

- Header branco com logo oficial, navegação `Início`, `Sobre Nós`, `O Colégio`, `Galeria`, `Contacto` e CTA laranja `Aceder ao EduCore`.
- Hero com headline branco/laranja, fundo azul-marinho, CTA duplo, composição direita, círculos gráficos e curva orgânica laranja/azul/branca em SVG.
- Faixa de quatro pilares com ícones lineares, separadores suaves e títulos azul-escuro.
- Galeria de três cards com gradiente, ícone circular dourado, títulos sobrepostos e cantos arredondados.
- Continuidade de cores e marca no login, com oito perfis preservados e campos acessíveis.
- Header compacto, menu mobile, CTAs tocáveis e hero empilhado sem overflow nas larguras 390, 375 e 320px.

Diferenças deliberadas e não regressões:

1. As fotografias de fachada, alunos e instalações que aparecem no mockup não foram tratadas como fotografias oficiais nem copiadas para o runtime. O hero usa uma moldura editorial com preview provisório contido e indicação de slot para fotografia institucional.
2. Os três cards usam os previews existentes contidos e documentados; não são apresentados como originais HD e não são ampliados para um fundo full-width.
3. O texto de referência sobre qualidade, disciplina, valores e liderança permanece copy demonstrativa pendente de validação institucional, conforme os handoffs.

## Limitações conhecidas

- A matriz de screenshots comprova os viewports pedidos, mas a aprovação visual final continua a exigir revisão humana contra os materiais oficiais.
- Os avisos de lint são herdados e não foram introduzidos pelas alterações desta fase.
- Os dados dos dashboards são demonstrativos; não há persistência real nem integração com ERP nesta entrega.

## Próxima aprovação

Receber fotografias HD originais e autorizadas, validar textos institucionais e substituir os previews sem alterar a composição. Só depois fazer aprovação visual humana e decidir deployment.
