/* ============================================================
   CorretoraFlor — main.js
   ------------------------------------------------------------
   ⚙️  EDITE AQUI os dados de contato e WhatsApp:
   ============================================================ */
const CONFIG = {
  whatsapp: "5511976012709",
  whatsappDisplay: "(11) 97601-2709",
  whatsappMsg: "Olá! Vim pelo site da CorretoraFlor e gostaria de saber mais.",
  instagram: "https://www.instagram.com/acorretoraflor/",
  email: "facolivercorretora@gmail.com",
};

/* ---- Empreendimentos (dados + imagens reais Plano&Plano) ----
   img: imagem oficial do empreendimento (carrega do site da Plano&Plano).
   Se alguma não carregar, o card mostra o fundo decorativo automaticamente. */
const PROPERTIES = [
  {
    nome: "Vila Boulevard Mooca", cidade: "São Paulo", bairro: "Mooca",
    preco: "R$ 237.988", dorms: "1 e 2", area: "25–37 m²",
    tipo: "apartamento", status: "Lançamento",
    img: "https://www.planoeplano.com.br/estatico/2025/05/19/10/00/3616c55efeab5bcf296ee4f63265959130f019e1.webp",
    grad: "linear-gradient(150deg,#2a2418,#0f0d09)",
    link: "https://www.comprarseuap.com.br/corretoraflor/imoveis/vila-boulevard-mooca",
  },
  {
    nome: "Plano&Mais Penha", cidade: "São Paulo", bairro: "Penha",
    preco: "R$ 240.244", dorms: "1 e 2", area: "Sob consulta",
    tipo: "apartamento", status: "Em construção",
    img: "https://www.planoeplano.com.br/estatico/2025/08/08/14/10/7d866490742f69d1a4a39e8f3a8ce47cfb54553c.webp",
    grad: "linear-gradient(150deg,#241f2a,#0d0c10)",
    link: "https://www.comprarseuap.com.br/corretoraflor/imoveis/planomais-penha",
  },
  {
    nome: "Plano&Reserva da Mooca", cidade: "São Paulo", bairro: "Mooca",
    preco: "R$ 281.389", dorms: "1", area: "Sob consulta",
    tipo: "apartamento", status: "Em construção",
    img: "https://www.planoeplano.com.br/estatico/2024/06/03/17/41/2f6ee2e07e43c084874a376880ac99082379ed69.webp",
    grad: "linear-gradient(150deg,#1d2620,#0a0e0b)",
    link: "https://www.comprarseuap.com.br/corretoraflor/imoveis/planoreserva-da-mooca",
  },
  {
    nome: "Plano&Vila Ema", cidade: "São Paulo", bairro: "Vila Ema",
    preco: "R$ 241.756", dorms: "1 e 2", area: "Sob consulta",
    tipo: "apartamento", status: "Em construção",
    img: "https://www.planoeplano.com.br/estatico/2025/03/07/16/54/d7332c998410fda3ad1a66ae5a666714c57d8040.webp",
    grad: "linear-gradient(150deg,#2a2218,#100d08)",
    link: "https://www.comprarseuap.com.br/corretoraflor/imoveis/planovila-ema",
  },
  {
    nome: "Plano&Mais Belém 2", cidade: "São Paulo", bairro: "Belém / Vila Prudente",
    preco: "R$ 212.512", dorms: "1 e 2", area: "Sob consulta",
    tipo: "apartamento", status: "Em construção",
    img: "https://www.planoeplano.com.br/estatico/2024/06/18/18/23/4d0da610e7778684015ab39d5f74083db22fcf57.webp",
    grad: "linear-gradient(150deg,#22242b,#0c0d10)",
    link: "https://www.comprarseuap.com.br/corretoraflor/imoveis/planomais-belem-2",
  },
  {
    nome: "Meu Plano&São Miguel", cidade: "São Paulo", bairro: "São Miguel Paulista",
    preco: "Sob consulta", dorms: "2", area: "Sob consulta",
    tipo: "apartamento", status: "Em construção",
    img: "https://www.planoeplano.com.br/estatico/2024/11/21/18/42/87ed8c9029d17956a8a5f27ad8cbc9d6f04e7cbb.webp",
    grad: "linear-gradient(150deg,#26201b,#0e0b09)",
    link: "https://www.comprarseuap.com.br/corretoraflor/imoveis/meu-planosaomiguel",
  },
  {
    nome: "Longitude Estação Dom Bosco", cidade: "São Paulo", bairro: "Itaquera",
    preco: "Sob consulta", dorms: "Studio / 1", area: "Multidorm",
    tipo: "apartamento", status: "Lançamento",
    img: "https://cdn.longitude.com.br/2025/08/14/17/09/ed01ce5eda5f8b367b2d3d0d2d05c476292f5ff8.jpg",
    grad: "linear-gradient(150deg,#241f2a,#0d0c10)",
    link: "https://www.longitude.com.br/imoveis/sao-paulo/apartamento/estacao-dom-bosco",
  },
  {
    nome: "Longitude Estação Guaianases", cidade: "São Paulo", bairro: "Guaianases",
    preco: "Sob consulta", dorms: "Studio a 2", area: "Multidorm",
    tipo: "apartamento", status: "Em breve",
    img: "https://cdn.longitude.com.br/2026/05/14/14/28/8762d32b152eab1dee4fb1f411959253f8afc4c3.jpg",
    grad: "linear-gradient(150deg,#1d2620,#0a0e0b)",
    link: "https://www.longitude.com.br/imoveis/sao-paulo/apartamento/longitude-estacao-guaianases",
  },
];

const TESTIMONIALS = [
  { txt: "Atendimento impecável do início ao fim. Realizei o sonho do apartamento próprio com total segurança e tranquilidade.", nome: "Juliana M.", local: "São Paulo – SP" },
  { txt: "Profissional dedicada e muito atenciosa. Encontrei o imóvel perfeito para investir e fui acompanhada em cada etapa.", nome: "Ricardo A.", local: "São Paulo – SP" },
  { txt: "Explicou toda a documentação com paciência e clareza. Comprar meu primeiro imóvel deixou de ser assustador.", nome: "Camila R.", local: "Mooca – SP" },
  { txt: "Negociação muito bem conduzida. Consegui condições que eu não imaginava. Recomendo de olhos fechados.", nome: "Eduardo S.", local: "Penha – SP" },
];

/* Galeria estilo Instagram — usa imagens reais dos empreendimentos e leva ao perfil.
   Para um feed REAL e automático, veja as instruções no README (SnapWidget). */
const POSTS = [
  { img: "https://www.planoeplano.com.br/estatico/2025/05/19/10/00/3616c55efeab5bcf296ee4f63265959130f019e1.webp", cap: "Tour pelo Vila Boulevard Mooca" },
  { img: "https://www.planoeplano.com.br/estatico/2025/08/08/14/10/7d866490742f69d1a4a39e8f3a8ce47cfb54553c.webp", cap: "Plano&Mais Penha · novidades" },
  { img: "https://www.planoeplano.com.br/estatico/2024/06/03/17/41/2f6ee2e07e43c084874a376880ac99082379ed69.webp", cap: "Reserva da Mooca por dentro" },
  { img: "https://www.planoeplano.com.br/estatico/2025/03/07/16/54/d7332c998410fda3ad1a66ae5a666714c57d8040.webp", cap: "Lazer no Plano&Vila Ema" },
  { img: "https://www.planoeplano.com.br/estatico/2024/06/18/18/23/4d0da610e7778684015ab39d5f74083db22fcf57.webp", cap: "Plano&Mais Belém 2" },
  { img: "https://www.planoeplano.com.br/estatico/2024/11/21/18/42/87ed8c9029d17956a8a5f27ad8cbc9d6f04e7cbb.webp", cap: "Entrega das chaves 🔑" },
];

const ARTICLES = [
  { tag: "Financiamento", titulo: "Como financiar um imóvel pelo Minha Casa Minha Vida", resumo: "Faixas de renda, subsídios e o passo a passo para aprovar seu crédito sem dor de cabeça." },
  { tag: "Documentação", titulo: "Documentos necessários para comprar um imóvel", resumo: "Checklist completo do comprador para uma negociação segura e sem surpresas." },
  { tag: "Investimento", titulo: "Vale a pena investir em imóvel na planta?", resumo: "Valorização, riscos e como avaliar o melhor momento para comprar antecipado." },
  { tag: "Mercado", titulo: "Tendências do mercado imobiliário em São Paulo", resumo: "Bairros em alta na Zona Leste e o que esperar dos próximos lançamentos." },
];

/* ============================================================ HELPERS */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.whatsappMsg)}`;

const buildingSVG = `<svg viewBox="0 0 64 48" fill="none" stroke="rgba(201,162,75,.55)" stroke-width="1.1" stroke-linejoin="round"><path d="M6 44V18l8-6 8 6v26"/><path d="M22 44V8l8-4 8 4v40"/><path d="M38 44V22h8v22"/><path d="M2 44h50"/><path d="M10 22h2M16 22h2M27 12h2M33 12h2M27 20h2M33 20h2M41 28h2M41 34h2"/></svg>`;

/* ============================================================ IMÓVEIS */
function renderProperties(filter = "all") {
  const grid = $("#cardsGrid");
  const empty = $("#emptyState");
  const list = PROPERTIES.filter(p => {
    if (filter === "all") return true;
    if (filter === "alugar") return p.aluguel === true;
    return p.tipo === filter;
  });

  empty.hidden = list.length > 0;
  grid.innerHTML = list.map(p => `
    <article class="prop-card">
      <div class="prop-media">
        <div class="ph" style="background:${p.grad}">${buildingSVG}<span class="ph-label">${p.bairro}</span></div>
        ${p.img ? `<img class="prop-img" src="${p.img}" alt="${p.nome}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
        <span class="badge badge-type">Apartamento</span>
        <span class="badge badge-status">${p.status}</span>
        <button class="fav" aria-label="Favoritar" onclick="this.classList.toggle('on')">
          <svg viewBox="0 0 24 24" width="17" height="17"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/></svg>
        </button>
      </div>
      <div class="prop-body">
        <h3 class="prop-title">${p.nome}</h3>
        <p class="prop-loc"><svg viewBox="0 0 24 24" width="13" height="13"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z"/><circle cx="12" cy="11" r="2" fill="currentColor"/></svg>${p.bairro}, ${p.cidade}</p>
        <div class="prop-specs">
          <span><svg viewBox="0 0 24 24" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M3 18v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5M3 18h18M3 18v2M21 18v2M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>${p.dorms} dorm.</span>
          <span><svg viewBox="0 0 24 24" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M4 4h16v16H4zM4 9h5V4M15 4v5h5M9 20v-5h6v5"/></svg>${p.area}</span>
        </div>
        <div class="prop-foot">
          <div class="prop-price"><small>A partir de</small><strong>${p.preco}</strong></div>
          <a class="btn btn-gold" href="${p.link}" target="_blank" rel="noopener">Ver imóvel</a>
        </div>
      </div>
    </article>`).join("");
}

/* ============================================================ DEPOIMENTOS */
let depoIndex = 0, perView = 2;
function renderTestimonials() {
  $("#depoTrack").innerHTML = TESTIMONIALS.map(t => `
    <article class="depo-card">
      <div class="stars">★★★★★</div>
      <p class="depo-text">“${t.txt}”</p>
      <div class="depo-author">
        <span class="depo-avatar">${t.nome.charAt(0)}</span>
        <div><strong>${t.nome}</strong><small>${t.local}</small></div>
      </div>
    </article>`).join("");
  buildDots();
  updateCarousel();
}
function pages() { return Math.max(1, TESTIMONIALS.length - perView + 1); }
function buildDots() {
  $("#depoDots").innerHTML = Array.from({ length: pages() }, (_, i) =>
    `<button data-i="${i}" class="${i === 0 ? "on" : ""}" aria-label="Ir para depoimento ${i + 1}"></button>`).join("");
  $$("#depoDots button").forEach(b => b.onclick = () => { depoIndex = +b.dataset.i; updateCarousel(); });
}
function updateCarousel() {
  const newPer = window.innerWidth <= 760 ? 1 : 2;
  if (newPer !== perView) { perView = newPer; buildDots(); }
  depoIndex = Math.min(Math.max(0, depoIndex), pages() - 1);
  const track = $("#depoTrack");
  const card = track.querySelector(".depo-card");
  if (!card) return;
  const gap = parseFloat(getComputedStyle(track).gap) || 24;
  track.style.transform = `translateX(-${(card.offsetWidth + gap) * depoIndex}px)`;
  $$("#depoDots button").forEach((d, i) => d.classList.toggle("on", i === depoIndex));
}

/* ============================================================ INSTAGRAM */
function renderInstagram() {
  $("#instaGrid").innerHTML = POSTS.map(p => `
    <a class="insta-tile" href="${CONFIG.instagram}" target="_blank" rel="noopener">
      <img src="${p.img}" alt="${p.cap}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
      <span class="ig-hover"><svg viewBox="0 0 24 24" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/></svg></span>
      <span class="ig-cap">${p.cap}</span>
    </a>`).join("");
}

/* ============================================================ BLOG */
function renderBlog() {
  const grid = $("#blogGrid");
  if (!grid) return;
  grid.innerHTML = ARTICLES.map(a => `
    <article class="blog-card">
      <div class="blog-media" style="background:linear-gradient(150deg,#211d16,#0d0b08)">
        <svg viewBox="0 0 120 120" fill="none" stroke="rgba(201,162,75,.5)" stroke-width="1.3" width="46%"><circle cx="60" cy="60" r="6"/><path d="M60 60C60 38 46 30 46 30M60 60C74 38 90 32 90 32M60 60C66 84 60 110 60 110M60 60C38 72 30 96 30 96M60 60C86 76 96 96 96 96"/></svg>
        <span class="blog-tag">${a.tag}</span>
      </div>
      <div class="blog-body">
        <h3>${a.titulo}</h3>
        <p>${a.resumo}</p>
        <span class="blog-read">Ler artigo
          <svg viewBox="0 0 24 24" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </span>
      </div>
    </article>`).join("");
}

/* ============================================================ INTERAÇÕES */
function initWhatsApp() {
  $$("[data-wa]").forEach(el => { el.href = waLink(); el.target = "_blank"; el.rel = "noopener"; });
  $$("[data-wa-display]").forEach(el => el.textContent = CONFIG.whatsappDisplay);
}
function initHeader() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  const toggle = $("#navToggle"), nav = $("#nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false);
  }));
}
function initFilters() {
  $$(".chip").forEach(chip => chip.addEventListener("click", () => {
    $$(".chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderProperties(chip.dataset.filter);
    initReveal();
  }));
}
function initCarousel() {
  $("#depoNext").onclick = () => { depoIndex++; updateCarousel(); };
  $("#depoPrev").onclick = () => { depoIndex--; updateCarousel(); };
  let auto;
  const startAuto = () => { auto = setInterval(() => { depoIndex = depoIndex >= pages() - 1 ? 0 : depoIndex + 1; updateCarousel(); }, 6000); };
  const stopAuto = () => clearInterval(auto);
  startAuto();
  const car = $(".depo-carousel");
  car.addEventListener("mouseenter", stopAuto);
  car.addEventListener("mouseleave", startAuto);
  // swipe
  let x0 = null;
  const track = $("#depoTrack");
  track.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
  track.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { depoIndex += dx < 0 ? 1 : -1; updateCarousel(); }
    x0 = null;
  });
  window.addEventListener("resize", updateCarousel);
}
function initForm() {
  const form = $("#contactForm"), note = $("#formNote");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nome = $("#f-nome").value.trim(), email = $("#f-email").value.trim();
    const tel = $("#f-tel").value.trim(), msg = $("#f-msg").value.trim();
    if (!nome || !tel) {
      note.hidden = false; note.style.color = "#e0a3a3";
      note.textContent = "Por favor, preencha ao menos seu nome e telefone.";
      return;
    }
    const texto = `Olá! Me chamo ${nome}.%0A` + (email ? `E-mail: ${email}%0A` : "") +
      `Telefone: ${tel}%0A` + (msg ? `%0A${msg}` : "%0AGostaria de saber mais sobre os imóveis.");
    note.hidden = false; note.style.color = "";
    note.textContent = "Abrindo o WhatsApp para enviar sua mensagem…";
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${texto}`, "_blank", "noopener");
    form.reset();
  });
}
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ============================================================ HERO SLIDESHOW */
function initHeroSlideshow() {
  const slides = $$(".hero-slide");
  if (!slides.length) return;
  let current = Math.floor(Math.random() * slides.length);
  slides[current].classList.add("is-active");
  if (slides.length < 2) return;
  setInterval(() => {
    let next;
    do { next = Math.floor(Math.random() * slides.length); } while (next === current);
    slides[current].classList.remove("is-active");
    slides[next].classList.add("is-active");
    current = next;
  }, 5000);
}

/* ============================================================ INIT */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderProperties();
  renderTestimonials();
  renderInstagram();
  renderBlog();
  initWhatsApp();
  initHeader();
  initHeroSlideshow();
  initFilters();
  initCarousel();
  initForm();
  initReveal();
});
