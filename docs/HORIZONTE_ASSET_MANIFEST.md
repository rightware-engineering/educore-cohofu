# Horizonte do Futuro — Manifesto de assets

**Auditoria:** 21/10/2026  
**Repositório:** `rightware-engineering/educore-cohofu`  
**Branch:** `main`  
**Estado:** manifesto atualizado com o logótipo fornecido no briefing; as fotografias HD autorizadas ainda estão pendentes.

## Assets atualmente versionados

| Ficheiro | Localização | Resolução / formato | Tamanho | Finalidade atual | Classificação | Estado |
|---|---|---:|---:|---|---|---|
| `campus.webp` | `frontend/public/school/campus.webp` | 460 × 259, WebP | 4.800 B | Preview de apoio visual | Preview de baixa resolução; não adequado para hero full-width premium | Provisório |
| `students.webp` | `frontend/public/school/students.webp` | 400 × 192, WebP | 2.952 B | Preview de apoio visual | Preview de baixa resolução; não adequado para apresentação nítida | Provisório |
| `classroom.webp` | `frontend/public/school/classroom.webp` | 320 × 126, WebP | 2.194 B | Card de espaço na landing de referência | Preview de baixa resolução | Provisório |
| `facilities.webp` | `frontend/public/school/facilities.webp` | 320 × 119, WebP | 1.732 B | Card de espaço na landing de referência | Preview de baixa resolução | Provisório |
| `logo.webp` | `frontend/public/school/logo.webp` | 100 × 100, WebP | 2.010 B | Material herdado | Preview não oficial | Não usar no runtime ativo |
| `logo-horizonte.webp` | `frontend/public/school/logo-horizonte.webp` | 1080 × 1080, WebP | 63.912 B | Logo oficial fornecido: header, login, assinaturas, favicon e metadata | Asset binário fornecido pelo utilizador; proporção preservada | Integrado |
| `logotipo-horizonte.webp` | `frontend/public/school/originals/logotipo-horizonte.webp` | 1080 × 1080, WebP | 63.912 B | Preservação do original recebido | Original preservado byte a byte | Integrado |
| `favicon.svg` | `frontend/public/school/favicon.svg` | SVG | 710 B | Marca provisória herdada | Não equivale ao logótipo oficial | Legado, fora do runtime ativo |
| `horizon-graphic.svg` | `frontend/public/school/horizon-graphic.svg` | SVG | 805 B | Grafismo editorial herdado | Ilustração vetorial, não fotografia nem logótipo | Disponível para referência |

## Referências no código

- `frontend/src/pages/public/HorizonteLanding.tsx` usa o logótipo oficial e previews contidos até chegarem fotografias autorizadas.
- `frontend/src/pages/auth/GenericTenantLogin.tsx` usa o branding do tenant, agora apontado para `logo-horizonte.webp`.
- `frontend/src/data/tenants.ts` aponta `logo`, `mark` e `favicon` para `logo-horizonte.webp`.
- `frontend/index.html` usa `logo-horizonte.webp` para favicon, apple touch icon e Open Graph/Twitter.
- `frontend/src/pages/public/GenericTenantLanding.tsx` contém a composição de referência da landing pública e será mantida sem usar o screenshot como media.

## Critérios de qualidade

O logótipo `logo-horizonte.webp` foi recebido no briefing e preservado no diretório `originals/`. Nenhuma fotografia atualmente versionada foi verificada como original HD autorizado do Colégio Horizonte do Futuro. Os ficheiros fotográficos WebP são pequenos previews e não devem ser ampliados artificialmente para ocupar um hero de alta qualidade. A interface usa composição editorial, cor, tipografia e slots contidos enquanto os originais não chegam; não inventa fotografias reais nem usa assets de outra escola.

## Assets pendentes

1. Favicon e ícones oficiais derivados/autorizados, incluindo variantes para fundos claros e escuros.
2. Fotografia original da fachada/campus, sem arte de flyer e com autorização de uso.
3. Fotografia original de alunos, sem arte de flyer e com autorização para menores.
4. Fotografia original de salas/professores e instalações.
5. Fotografia original de atividades/vida escolar.
6. Eventuais vídeos/Reels originais autorizados para poster e web.
7. Identidade corporativa confirmada: cores, tipografia e regras de uso de marca.
8. Evidência de autorização de uso das imagens.
9. Conteúdo institucional validado: contactos, morada, níveis de ensino, matrículas, preços e campanhas.

## Procedimento de integração futura

1. Receber os ficheiros fornecidos pelo colégio ou arquivo autorizado e documentar a fonte e a permissão.
2. Guardar os originais sem alteração em `frontend/public/school/originals/`.
3. Criar variantes de apresentação com dimensões adequadas ao uso, mantendo nitidez e sem compressão destrutiva excessiva.
4. Atualizar esta tabela com resolução, tamanho, finalidade, direitos e estado de cada variante.
5. Atualizar landing, login, tenant branding, favicon, Open Graph e apple touch icon.
6. Validar HTTP 200, MIME, carregamento, enquadramento e performance antes de considerar os assets prontos.

## Identidade proibida

Não integrar, reutilizar ou publicar imagens, logótipos, fotografias ou grafismos de EUNIJOPA, Páscoa, Deus Connosco, COLUS ou qualquer outra escola neste repositório.
