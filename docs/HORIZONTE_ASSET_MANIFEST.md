# Horizonte do Futuro — Manifesto de assets

**Auditoria:** 21/10/2026  
**Repositório:** `rightware-engineering/educore-cohofu`  
**Branch:** `main`  
**Estado:** inventário inicial; os originais HD do colégio ainda não foram fornecidos.

## Assets atualmente versionados

| Ficheiro | Localização | Resolução / formato | Tamanho | Finalidade atual | Classificação | Estado |
|---|---|---:|---:|---|---|---|
| `campus.webp` | `frontend/public/school/campus.webp` | 460 × 259, WebP | 4.800 B | Imagem de fundo do hero e imagem social/OG | Preview de baixa resolução; não adequado para hero full-width premium | Ativo como fallback temporário |
| `students.webp` | `frontend/public/school/students.webp` | 400 × 192, WebP | 2.952 B | Secção “Vida escolar” | Preview de baixa resolução; não adequado para apresentação nítida | Ativo como fallback temporário |
| `classroom.webp` | `frontend/public/school/classroom.webp` | 320 × 126, WebP | 2.194 B | Referência da landing genérica herdada | Preview de baixa resolução | Não usado pela landing Horizonte ativa |
| `facilities.webp` | `frontend/public/school/facilities.webp` | 320 × 119, WebP | 1.732 B | Referência da landing genérica herdada | Preview de baixa resolução | Não usado pela landing Horizonte ativa |
| `logo.webp` | `frontend/public/school/logo.webp` | 100 × 100, WebP | 2.010 B | Branding do tenant, metadata, apple touch icon e landing genérica | Preview; não confirmado como logótipo oficial de resolução útil | Ativo como marca provisória |
| `favicon.svg` | `frontend/public/school/favicon.svg` | SVG, 710 B | 710 B | Marca provisória na landing Horizonte | Ilustração/marca provisória; não equivale ao logótipo oficial | Ativo como fallback de marca |
| `horizon-graphic.svg` | `frontend/public/school/horizon-graphic.svg` | SVG, 805 B | 805 B | Recurso gráfico editorial da landing genérica | Ilustração vetorial; não é fotografia nem logótipo oficial | Disponível, sem uso público confirmado na experiência Horizonte ativa |

## Referências no código

- `frontend/src/pages/public/HorizonteLanding.tsx` usa `campus.webp`, `students.webp` e `favicon.svg`.
- `frontend/src/pages/auth/GenericTenantLogin.tsx` usa `campus.webp` como imagem de apoio do login.
- `frontend/src/data/tenants.ts` aponta `logo`, `mark` e `favicon` para `logo.webp`.
- `frontend/index.html` usa `logo.webp` para favicon e apple touch icon e `campus.webp` para Open Graph/Twitter.
- `frontend/src/pages/public/GenericTenantLanding.tsx` referencia também `classroom.webp`, `facilities.webp`, `horizon-graphic.svg` e os previews comuns; essa landing não deve substituir a entrada ativa de Horizonte sem decisão explícita.

## Critérios de qualidade

Nenhuma fotografia atualmente versionada foi verificada como original HD do Colégio Horizonte do Futuro. Os ficheiros WebP são pequenos previews e não devem ser ampliados artificialmente para ocupar um hero de alta qualidade. O redesign pode usar composição editorial, cor, tipografia e grafismos próprios enquanto os originais não chegam, mas não deve inventar fotografias reais nem usar assets de outra escola.

Os previews atuais não contêm, nesta auditoria, uma variante original preservada em `frontend/public/school/originals/`. Quando os materiais forem fornecidos, os bytes originais devem ser guardados nessa pasta e as variantes web devem ser geradas separadamente em `frontend/public/school/`, sem substituir os originais.

## Assets pendentes

1. Logótipo oficial original em resolução útil, idealmente SVG autorizado ou PNG com transparência.
2. Favicon e ícones oficiais, incluindo variantes para fundo claro e escuro.
3. Fotografia original da fachada/campus, sem arte de flyer e com autorização de uso.
4. Fotografia original de alunos, sem arte de flyer e com autorização para menores.
5. Fotografia original de salas/professores e instalações.
6. Fotografia original de atividades/vida escolar.
7. Eventuais vídeos/Reels originais autorizados para poster e web.
8. Identidade corporativa confirmada: cores, tipografia e regras de uso de marca.
9. Evidência de autorização de uso das imagens.
10. Conteúdo institucional validado: contactos, morada, níveis de ensino, matrículas, preços e campanhas.

## Procedimento de integração futura

1. Receber os ficheiros fornecidos pelo colégio ou arquivo autorizado e documentar a fonte e a permissão.
2. Guardar os originais sem alteração em `frontend/public/school/originals/`.
3. Criar variantes de apresentação com dimensões adequadas ao uso, mantendo nitidez e sem compressão destrutiva excessiva.
4. Atualizar esta tabela com resolução, tamanho, finalidade, direitos e estado de cada variante.
5. Atualizar landing, login, tenant branding, favicon, Open Graph e apple touch icon.
6. Validar HTTP 200, MIME, carregamento, enquadramento e performance antes de considerar os assets prontos.

## Identidade proibida

Não integrar, reutilizar ou publicar imagens, logótipos, fotografias ou grafismos de EUNIJOPA, Páscoa, Deus Connosco, COLUS ou qualquer outra escola neste repositório.
