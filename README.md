# CorretoraFlor — Site institucional

Site institucional de uma página (one-page) para a corretora **CorretoraFlor** — *Transformando sonhos em endereços*.

Estética: preto fosco, dourado metálico, branco, glassmorphism leve, tipografia serifada sofisticada (Cormorant Garamond) e ícones dourados. Site 100% estático (HTML, CSS e JavaScript puros), pronto para **GitHub + Vercel**, sem build e sem dependências.

---

## 📁 Estrutura

```
corretoraflor/
├── index.html              ← página única (todas as seções)
├── vercel.json             ← configuração de deploy
├── .gitignore
├── README.md
└── assets/
    ├── css/styles.css      ← todo o design
    ├── js/main.js          ← dados, filtros, carrossel, formulário
    └── img/
        ├── logo-original.png         ← seu logo enviado (uso livre)
        ├── fabiola.jpg               ← foto da seção "Sobre"
        ├── credencial-estagiario.png ← credencial CRECI (referência)
        └── favicon.svg
```

---

## ⚙️ Personalização rápida

Quase tudo que muda no dia a dia está em **`assets/js/main.js`**, no topo do arquivo:

```js
const CONFIG = {
  whatsapp: "5511900000000",          // 55 + DDD + número (só dígitos)
  whatsappDisplay: "(11) 90000-0000", // como aparece escrito
  whatsappMsg: "Olá! Vim pelo site...",
  instagram: "https://www.instagram.com/acorretoraflor/",
  email: "contato@corretoraflor.com.br",
};
```

> **Importante:** o número de WhatsApp está como **placeholder**. Troque pelo número real antes de publicar.

### Imóveis
Edite a lista `PROPERTIES` em `main.js`. Cada item aceita o campo opcional `img:` — se você apontar para uma foto (ex.: `img: "assets/img/vila-boulevard.jpg"`), ela substitui o fundo decorativo do card. Os links já apontam para as páginas reais em `comprarseuap.com.br/corretoraflor`.

### Depoimentos, Blog e Instagram
Listas `TESTIMONIALS`, `ARTICLES` e `POSTS` em `main.js`.

### Foto da seção "Sobre"
Substitua `assets/img/fabiola.jpg` mantendo o nome (ou ajuste no `index.html`).

### Foto de fundo do Hero (opcional)
O hero usa um fundo decorativo em CSS. Para usar uma foto real (cidade/condomínio de alto padrão), adicione em `assets/css/styles.css`, dentro de `.hero-bg::before`, algo como:
`background-image: url('../img/hero.jpg');` com um overlay escuro por cima.

---

## 📸 Instagram ao vivo (opcional)
A seção do Instagram exibe uma galeria elegante que leva ao perfil **@acorretoraflor**. Para mostrar os posts reais e atualizados automaticamente, use um widget gratuito de feed (ex.: SnapWidget, Behold ou Elfsight): gere o embed e cole o `<iframe>`/script no lugar do `<div class="insta-grid">` em `index.html`.

---

## 📝 Formulário de contato
Por ser um site estático (sem servidor), o botão **"Enviar mensagem"** monta a mensagem e abre o **WhatsApp** já preenchido — funciona imediatamente.
Se quiser receber por e-mail, crie uma conta gratuita no [Formspree](https://formspree.io) e troque a lógica de envio em `initForm()`.

---

## 🚀 Publicar (GitHub + Vercel)

**1. Subir para o GitHub**
```bash
cd corretoraflor
git init
git add .
git commit -m "Site CorretoraFlor"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/corretoraflor.git
git push -u origin main
```

**2. Publicar na Vercel**
1. Acesse [vercel.com](https://vercel.com) e entre com o GitHub.
2. **Add New → Project** e selecione o repositório `corretoraflor`.
3. Framework Preset: **Other** · Build Command: *(vazio)* · Output Directory: *(vazio / raiz)*.
4. **Deploy**. Em segundos o site estará no ar com HTTPS.

Para domínio próprio (ex.: `corretoraflor.com.br`): **Settings → Domains** na Vercel e aponte o DNS.

> Alternativa sem terminal: na Vercel, **Add New → Project → Deploy** e arraste a pasta inteira.

---

## ✅ Recursos incluídos
- Hero com headline, subtítulo e 3 CTAs (Comprar / Vender / WhatsApp)
- Seção "Sobre" com foto, números e 4 pilares
- Imóveis em destaque com filtros (Comprar/Alugar/Casas/Apartamentos/Terrenos) e 6 empreendimentos reais
- Serviços com ícones dourados
- "Por que escolher" (4 blocos)
- Depoimentos em carrossel automático
- Galeria do Instagram com link para o perfil
- Blog com artigos para SEO
- Contato com mapa, dados e formulário → WhatsApp
- Rodapé com a identificação de estagiário CRECI-SP
- Botão flutuante de WhatsApp
- Responsivo, acessível (foco visível, `prefers-reduced-motion`) e com animações suaves

---

© CorretoraFlor. Identificação CRECI-SP exibida no rodapé conforme a credencial fornecida.

---

## Atualizações desta versão

- **Logo do topo:** apenas o wordmark `corretoraflor`, em tamanho maior.
- **Favicon:** flor enviada (`assets/img/favicon.png`).
- **Hero:** foto de fundo real (`assets/img/background_principal.png`) com leve escurecimento à esquerda para legibilidade do texto.
- **Bloco do hero:** mantido apenas “Atendimento Personalizado”.
- **Ícones:** Serviços e Sobre usam as imagens douradas enviadas (`assets/img/*_outlines-golden.png`).
- **Imóveis:** cada card carrega a **imagem oficial do empreendimento** direto do site da Plano&Plano. Se alguma não carregar (rede/bloqueio), o card mostra automaticamente um fundo decorativo elegante. Para garantir 100% de exibição, você pode baixar a foto de cada empreendimento e salvar em `assets/img/`, trocando o campo `img` no `assets/js/main.js`.
- **Depoimentos:** carrossel com setas, indicadores, arrasto no celular e troca automática a cada 6s.

## Instagram — feed real e automático (opcional)

A grade atual usa imagens reais dos empreendimentos e leva ao perfil **@acorretoraflor**.
Para exibir os **posts reais e atualizados sozinhos**, use um widget gratuito:

1. Acesse **snapwidget.com** (ou **behold.so** / **elfsight.com**) e crie um widget de grade do Instagram.
2. Conecte o perfil `@acorretoraflor` e copie o código (um `<iframe>`).
3. No `index.html`, substitua o conteúdo da `<div id="instaGrid">` por esse `<iframe>`.

Pronto — o site passa a mostrar os posts reais automaticamente.
