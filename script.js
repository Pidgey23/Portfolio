document.getElementById('year').textContent = new Date().getFullYear();

const DEFAULT_LANG = 'fr';
const SUPPORTED_LANGS = ['fr', 'en'];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const translations = {
  en: {
    meta_title: "Julien Pasque - Junior Fullstack Developer",
    meta_description: "Portfolio of Julien Pasque, junior fullstack developer specialising in C#, .NET and Java.",
    skip_link: "Skip to content",
    aria_nav: "Main navigation",
    aria_nav_mobile: "Mobile navigation",
    aria_lang: "Language selection",
    aria_theme: "Toggle theme",
    aria_menu: "Open menu",
    aria_scroll: "Scroll to profile",
    aria_code_proj2: "EasyShop source code on GitHub",
    aria_code_proj3: "Cycling club project source code on GitHub",

    nav_profil: "About",
    nav_competences: "Skills",
    nav_projets: "Projects",
    nav_parcours: "Journey",
    nav_contact: "Contact",

    status: "Available now",
    location_short: "Belgium",
    role: "Junior fullstack developer<br><strong>C# · .NET · Java</strong>",
    hero_title: "Every project is a puzzle <em>I love to solve.</em>",
    cta_projects: "View my projects",
    cta_cv: "Download my CV",

    section_profil: "About",
    profil_heading: "Understand the need, <em>then build the solution.</em>",
    profil_text: "Graduated in 2026 with a bachelor's degree in computer science, application development track. During my internship at EVS Broadcast Equipment, I integrated remote control of a new server type into the IPDirector suite in C#/.NET, through a REST API and a WebSocket, within a Scrum team.",
    profil_text2: "Comfortable with C# and Java, I work across the whole stack: business logic, APIs and system-to-system communication on the server, all the way to the client-side interface. I pick up new stacks quickly and I'm looking for a first fullstack developer role.",
    fact_lang: "Languages",
    fact_lang_val: "French (native) · English B2",
    fact_loc: "Based in",
    fact_mob: "Mobility",
    fact_mob_val: "Driving licence (B)",
    stat1: "weeks of internship at EVS Broadcast Equipment",
    stat2: "students led as project lead",
    stat3: "to deliver a prototype at the MIC hackathon",
    years_short: "yrs",
    stat4: "bachelor's degree in application development",

    section_competences: "Skills",
    skills_heading: "Back to front, <em>a stack I master</em>.",
    sk_backend_desc: "Business logic, APIs and everything that runs server-side.",
    sk_web_desc: "Interfaces and communication between client and server.",
    term_rest_api: "REST API",
    term_client_server: "Client-server",
    sk_db: "Databases",
    sk_tools: "Tools",
    sk_method: "Methods",
    sk_soft: "Soft skills",
    soft1: "Teamwork",
    soft2: "Adaptability",
    soft3: "Prioritisation",
    soft4: "Tech watch",

    section_projets: "Projects",
    projects_heading: "From server protocols <em>to complete applications</em>.",
    proj1_badge: "Final-year project · 2026",
    proj1_meta: "<a href=\"https://evs.com/\" target=\"_blank\" rel=\"noopener\">EVS Broadcast Equipment</a> · 15-week internship",
    proj1_title: "Server integration into the IPDirector suite",
    proj1_desc: "Implementation of control protocols for EVS Next-Gen servers over remote IP using .NET. Integrated remote management of a new server type into the IPDirector suite, consuming a REST API and a WebSocket for server control and activity monitoring.",
    proj1_p1: "From designing a proof of concept to integrating it",
    proj1_p2: "Agile Scrum team, Jira, Confluence, Bitbucket",
    proj2_meta: "School project · Web",
    proj2_title: "EasyShop",
    proj2_desc: "Web application for ordering and collecting purchases at a pickup point, built with ASP.NET Core MVC: management of products, orders and users, from the front end to the database.",
    proj3_meta: "School project · Desktop",
    proj3_title: "Cycling club management",
    proj3_desc: "Desktop application for digitising and managing the administration of a cycling club: members, membership fees and tracking, with an interface built using WindowBuilder.",
    proj4_meta: "School project · Web",
    proj4_title: "JEE gift list",
    proj4_desc: "Full client-server web application for creating and managing gift lists, with a client interface developed using JSP.",
    see_code: "View code",
    more_github: "All source code on GitHub",

    section_parcours: "Journey",
    path_heading: "Experience &amp; <em>education</em>.",
    path_exp: "Experience",
    path_edu: "Education",
    exp1_title: "<a href=\"https://evs.com/\" target=\"_blank\" rel=\"noopener\">EVS Broadcast Equipment</a>, Liège",
    exp1_role: "Development internship · 15 weeks",
    exp1_desc: "Final-year project: .NET implementation of control protocols for EVS Next-Gen servers over remote IP for the IPDirector suite, within an Agile Scrum team.",
    exp2_title: "<a href=\"https://technofuturtic.be\" target=\"_blank\" rel=\"noopener\">Technofutur TIC</a> · Networks Lab",
    exp2_role: "Project lead",
    exp2_desc: "Led 16 students through configuring Check Point firewalls, routers and workstations. Technofutur Networks Lab and Check Point certificate.",
    exp3_title: "<a href=\"https://www.mic-belgique.be\" target=\"_blank\" rel=\"noopener\">MIC</a> Hackathon, Mons",
    exp3_role: "Teamwork",
    exp3_desc: "Scrum methodology and Microsoft technologies. Delivered a working prototype within 48 hours.",
    edu1_role: "Bachelor's degree in Computer Science",
    edu1_desc: "Application development track.",
    edu2_role: "Secondary education",
    edu2_desc: "Business economics track.",
    interests_title: "Beyond code",
    int1: "Sports",
    int2: "Chess &amp; puzzles",
    int3: "Video games",

    section_contact: "Contact",
    contact_heading: "Let’s build something <em>solid</em>.",
    contact_text: "Available now for a first fullstack developer role. Feel free to get in touch.",
    copy: "Copy",
    cv_short: "CV (PDF)",
    footer_note: "Static site · HTML, CSS &amp; JavaScript · GitHub Pages",
    to_top: "Back to top ↑"
  }
};

const uiStrings = {
  fr: { copied: 'Adresse copiée ✓', copyFail: 'Impossible de copier', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu' },
  en: { copied: 'Email copied ✓', copyFail: 'Could not copy', menuOpen: 'Open menu', menuClose: 'Close menu' }
};

const cvFiles = { fr: 'FR-PASQUE-JULIEN-CV.pdf', en: 'EN-PASQUE-JULIEN-CV.pdf' };

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch {} }
};

const textNodes = [...document.querySelectorAll('[data-i18n]')].map(el => ({
  el, key: el.dataset.i18n, original: el.innerHTML.trim()
}));

const attrNodes = [...document.querySelectorAll('[data-i18n-attr]')].flatMap(el =>
  el.dataset.i18nAttr.split(';').map(pair => {
    const [attr, key] = pair.split(':').map(part => part.trim());
    return { el, attr, key, original: el.getAttribute(attr) };
  })
);

function translate(key, lang, fallback) {
  if (lang === DEFAULT_LANG) return fallback;
  const value = translations[lang] && translations[lang][key];
  return value !== undefined ? value : fallback;
}

function resolveInitialLang() {
  let fromUrl = null;
  try { fromUrl = new URLSearchParams(location.search).get('lang'); } catch {}
  const candidate = fromUrl || storage.get('portfolio-lang');
  return SUPPORTED_LANGS.includes(candidate) ? candidate : DEFAULT_LANG;
}

function syncUrl(lang) {
  try {
    const url = new URL(location.href);
    if (lang === DEFAULT_LANG) url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  } catch {}
}

let currentLang = resolveInitialLang();

function setLanguage(lang, { updateUrl = true } = {}) {
  currentLang = lang;
  storage.set('portfolio-lang', lang);
  document.documentElement.lang = lang;

  textNodes.forEach(({ el, key, original }) => { el.innerHTML = translate(key, lang, original); });
  attrNodes.forEach(({ el, attr, key, original }) => { el.setAttribute(attr, translate(key, lang, original)); });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  document.querySelectorAll('.cv-link').forEach(link => { link.href = cvFiles[lang]; });

  if (updateUrl) syncUrl(lang);
  document.documentElement.classList.remove('i18n-pending');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const themeToggle = document.querySelector('.theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeMeta) themeMeta.setAttribute('content', theme === 'light' ? '#ece5d8' : '#13110f');
}
applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(next);
  storage.set('portfolio-theme', next);
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', uiStrings[currentLang][open ? 'menuClose' : 'menuOpen']);
  document.body.classList.toggle('menu-open', open);
  if (open) {
    mobileMenu.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => mobileMenu.classList.add('open')));
  } else {
    mobileMenu.classList.remove('open');
    setTimeout(() => { if (!mobileMenu.classList.contains('open')) mobileMenu.hidden = true; }, 350);
  }
}

menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileMenu.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 921px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

const topbar = document.querySelector('.topbar');
const progress = document.querySelector('.scroll-progress span');
let ticking = false;

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  topbar.classList.toggle('scrolled', y > 20);
  progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
  if (window.innerHeight + y >= document.documentElement.scrollHeight - 80) setActiveNav('#contact');
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
      const index = Math.max(0, siblings.indexOf(el));
      el.style.transitionDelay = `${Math.min(index, 6) * 70}ms`;
      el.classList.add('in');
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

const navLinks = document.querySelectorAll('.nav a');
function setActiveNav(href) {
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === href;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`); });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
document.querySelectorAll('main section[id]').forEach(s => navObserver.observe(s));

const counters = document.querySelectorAll('[data-count]');
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      el.textContent = '0';
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => counterObserver.observe(c));
}

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (finePointer) {
  document.querySelectorAll('.spotlight').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  if (!prefersReducedMotion) {
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });

    const visual = document.querySelector('.system-card');
    const hero = document.querySelector('.hero');
    if (visual && hero) {
      hero.addEventListener('pointermove', e => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        visual.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
      });
      hero.addEventListener('pointerleave', () => { visual.style.transform = ''; });
      visual.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
    }
  }
}

const log = document.querySelector('[data-log]');
if (log && !prefersReducedMotion) {
  const lines = [
    '<span class="log-t">→</span> GET <span class="log-k">/status</span> <span class="log-ok">200</span>',
    '<span class="log-t">⇄</span> ws <span class="log-k">connected</span>',
    '<span class="log-t">←</span> event <span class="log-k">activity.update</span>',
    '<span class="log-t">→</span> POST <span class="log-k">/command</span> <span class="log-ok">202</span>',
    '<span class="log-t">←</span> event <span class="log-k">state.changed</span>',
    '<span class="log-t">→</span> GET <span class="log-k">/config</span> <span class="log-ok">200</span>',
    '<span class="log-t">⇄</span> ws <span class="log-k">heartbeat</span>'
  ];
  let i = 3;
  setInterval(() => {
    if (document.hidden) return;
    const li = document.createElement('li');
    li.innerHTML = lines[i % lines.length];
    log.appendChild(li);
    if (log.children.length > 3) log.firstElementChild.remove();
    i++;
  }, 2200);
}

const toast = document.querySelector('.toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      showToast(uiStrings[currentLang].copied);
    } catch {
      showToast(uiStrings[currentLang].copyFail);
    }
  });
});

setLanguage(currentLang, { updateUrl: false });
onScroll();
