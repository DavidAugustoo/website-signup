# Estudo da interface de cadastro Audaces ID

## Componentes por nível (Atomic Design)

### Átomos
- **BrandLogo** – logotipo com símbolo e wordmark.
- **TextInput** – campo de texto padrão com estados de foco/erro.
- **SelectInput** – campo `select` com estilo equivalente aos inputs.
- **Checkbox** – checkbox customizado com rótulo e suporte a links.
- **PrimaryButton** – botão de ação principal.
- **HelperText** – texto auxiliar/erro pequeno.
- **Divider** – linha separadora entre legenda informativa e redes sociais.
- **SocialIcon** – ícones individuais para Facebook, Instagram, LinkedIn e YouTube.
- **ContactLink** – link textual com ícone informativo.

### Moléculas
- **InputField** – rótulo, campo (texto ou select) e helper opcional.
- **CheckboxGroup** – conjunto de checkboxes alinhados à esquerda.
- **TermsNotice** – bloco com as duas caixas de seleção e links para termos.
- **SocialLinks** – agrupamento dos quatro SocialIcon com estados de foco/hover.
- **SupportMessage** – frase final com link de suporte.

### Organismos
- **HeroPanel** – coluna esquerda com imagem, overlay e blocos de marca + social.
- **SignupForm** – formulário com título, descrição e campos organizados em grid.
- **SignupAside** – container do formulário com sombra e plano de fundo claro.

### Template
- **SignupTemplate** – layout de duas colunas, responsivo, usando HeroPanel e SignupForm.

## Paleta de cores
- **Plano de fundo geral:** `#F4F5FB` (tons frios, muito claro).
- **Gradiente hero:** sobreposição linear `rgba(10, 22, 43, 0.75)` a `rgba(10, 22, 43, 0.35)`.
- **Cor primária (botões e detalhes):** `#2563EB`.
- **Cor secundária:** `#1E40AF` (hover do botão).
- **Texto principal:** `#0F172A`.
- **Texto secundário:** `#52667A`.
- **Bordas dos campos:** `#CBD2D9` (normal) / `#2563EB` (focus).
- **Sombras:** `rgba(15, 23, 42, 0.1)` para cartões e formulário.
- **Checkbox check:** `#2563EB`.
- **Links e ícones sociais:** cores oficiais (Facebook `#1877F2`, Instagram gradiente base `#E1306C`, LinkedIn `#0A66C2`, YouTube `#FF0000`).

## Tipografia
- Fonte sem serifa moderna (Inter) com pesos 400, 500, 600.
- Títulos em 32px/40px com peso 700.
- Texto do formulário entre 14px e 16px.

## Espaçamentos principais
- Padding geral do template: 32px.
- Espaçamento entre colunas: 48px.
- Grid do formulário: duas colunas com gap de 16px (campos nome/sobrenome).
- Campos com altura 48px.
- Botão com padding vertical 14px.

## Considerações para GovernMD
- Código modularizado por Atomic Design facilita substituição e reuso.
- Componentes com `props` tipadas (`TypeScript`).
- Classes utilitárias Tailwind mantidas curtas via composição (`clsx`) quando necessário.
- Estrutura `src` separando `components`, `app` e `styles` para exportação limpa.
- Sem dependências externas além de Next/Tailwind, garantindo facilidade de export no GovernMD.
