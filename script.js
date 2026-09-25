document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  fr: {
    portfolio: "Portfolio",
    role: "Développeur backend junior<br>.NET · C# · Java",
    nav_profil: "Profil",
    nav_competences: "Compétences",
    nav_projets: "Projets",
    nav_parcours: "Parcours",
    nav_contact: "Contact",
    location: "Montigny-le-Tilleul, Belgique",
    hero_title: "La logique d’abord. <em>L’interface ensuite.</em>",    
    cta_projects: "Voir mes projets",
    cta_contact: "Me contacter",
    section_profil: "Profil",
    profil_text: "Bachelier en informatique, orientation développement d'applications, avec une première expérience concrète en .NET acquise chez EVS Broadcast Equipment. À l'aise en C# et en Java, avec une préférence claire pour le backend — la logique métier, les protocoles, la façon dont les systèmes communiquent entre eux — plutôt que l'interface qui les affiche. Je recherche un premier poste de développeur pour continuer à monter en compétences sur des projets techniques concrets.",
    hl1_title: "Backend first",
    hl1_desc: "APIs, protocoles, logique métier",
    hl2_title: ".NET & Java",
    hl2_desc: "Stack principale solide",
    hl3_title: "Prêt à apprendre",
    hl3_desc: "Premier poste, motivation forte",
    section_competences: "Compétences",
    skill_lang: "Langages",
    skill_web: "Web",
    skill_data: "Données",
    skill_tools: "Outils",
    skill_methods: "Méthodes",
    section_projets: "Projets",
    proj1_title: "Intégration serveur - suite IPDirector",
    proj1_meta: "EVS Broadcast Equipment · Travail de fin d'études · 2026",
    proj1_desc: "Implémentation en .NET des protocoles de contrôle des serveurs Next-Gen EVS en remote IP. Intégration de la gestion distante d'un nouveau type de serveur dans la suite IPDirector, avec consommation d'une API REST et d'un WebSocket pour le contrôle et le suivi d'activité du serveur.",
    proj2_title: "TakeAway - application de livraison",
    proj2_meta: "Projet scolaire",
    proj2_desc: "Application web de commande et de livraison de repas, développée en ASP.NET Core MVC : gestion des produits, des commandes et des utilisateurs, du front à la base de données.",
    proj3_title: "Gestion d'un club cycliste",
    proj3_meta: "Projet scolaire",
    proj3_desc: "Application desktop pour la numérisation et la gestion administrative d'un club de vélo, membres, cotisations, suivi avec une interface construite sous WindowBuilder.",
    proj4_title: "Liste de cadeaux - application JEE",
    proj4_meta: "Projet scolaire",
    proj4_desc: "Application web complète en architecture client-serveur pour créer et gérer des listes de cadeaux, avec une interface développée en JSP côté client.",
    section_parcours: "Parcours",
    exp1_title: "EVS Broadcast Equipment - Liège",
    exp1_desc: "Stage de 15 semaines. Sujet de TFE : implémentation en .NET des protocoles de contrôle des serveurs Next-Gen EVS en remote IP pour la suite IPDirector.",
    exp2_title: "Technofutur - Chef de projet",
    exp2_desc: "Gestion de 16 étudiants lors d'un exercice de configuration de pare-feu CheckPoint, routeurs et postes de travail. Certificat Technofutur Labo Réseaux et CheckPoint.",
    exp3_title: "Hackathon MIC - Mons",
    exp3_desc: "Méthode Scrum, technologies Microsoft. Livraison d'un prototype fonctionnel en 48 heures.",
    exp4_title: "HEPH Condorcet - Bachelier en informatique",
    exp4_desc: "Orientation développement d'applications.",
    section_contact: "Contact",
    contact_text: "Disponible pour un premier poste de développeur backend. N'hésite pas à me contacter."
  },
  en: {
    portfolio: "Portfolio",
    role: "Junior Backend Developer<br>.NET · C# · Java",
    nav_profil: "About",
    nav_competences: "Skills",
    nav_projets: "Projects",
    nav_parcours: "Experience",
    nav_contact: "Contact",
    location: "Montigny-le-Tilleul, Belgium",
    hero_title: "Logic first. <em>Interface second.</em>",   
    cta_projects: "View my projects",
    cta_contact: "Get in touch",
    section_profil: "About",
    profil_text: "Bachelor's degree in computer science, application development track, with hands-on .NET experience gained at EVS Broadcast Equipment. Comfortable with C# and Java, with a clear preference for backend — business logic, protocols, and how systems talk to each other — rather than the interface that displays them. Looking for a first developer role to keep growing on real technical projects.",
    hl1_title: "Backend first",
    hl1_desc: "APIs, protocols, business logic",
    hl2_title: ".NET & Java",
    hl2_desc: "Solid main stack",
    hl3_title: "Eager to learn",
    hl3_desc: "First role, strong motivation",
    section_competences: "Skills",
    skill_lang: "Languages",
    skill_web: "Web",
    skill_data: "Data",
    skill_tools: "Tools",
    skill_methods: "Methods",
    section_projets: "Projects",
    proj1_title: "Server integration - IPDirector suite",
    proj1_meta: "EVS Broadcast Equipment · Final-year project · 2026",
    proj1_desc: "Implemented .NET control protocols for EVS Next-Gen servers over remote IP. Integrated remote management of a new server type into the IPDirector suite, consuming a REST API and WebSocket for control and activity monitoring.",
    proj2_title: "TakeAway - delivery app",
    proj2_meta: "School project",
    proj2_desc: "Web application for meal ordering and delivery built with ASP.NET Core MVC: product, order and user management, from front-end to database.",
    proj3_title: "Cycling club management",
    proj3_meta: "School project",
    proj3_desc: "Desktop application for digitising and managing a cycling club members, fees, tracking with a UI built using WindowBuilder.",
    proj4_title: "Gift list - JEE application",
    proj4_meta: "School project",
    proj4_desc: "Full client-server web application to create and manage gift lists, with a JSP-based client interface.",
    section_parcours: "Experience",
    exp1_title: "EVS Broadcast Equipment - Liège",
    exp1_desc: "15-week internship. Final-year project: .NET implementation of control protocols for EVS Next-Gen servers over remote IP for the IPDirector suite.",
    exp2_title: "Technofutur - Project lead",
    exp2_desc: "Managed 16 students during a CheckPoint firewall, router and workstation configuration exercise. Technofutur Networks Lab & CheckPoint certificate.",
    exp3_title: "MIC Hackathon - Mons",
    exp3_desc: "Scrum methodology, Microsoft technologies. Delivered a working prototype in 48 hours.",
    exp4_title: "HEPH Condorcet - Bachelor in Computer Science",
    exp4_desc: "Application development track.",
    section_contact: "Contact",
    contact_text: "Available for a first backend developer role. Feel free to reach out."
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(currentLang);

const sections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

sections.forEach(section => sectionObserver.observe(section));

const navLinks = document.querySelectorAll('.nav a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
      });
    }
  });
}, {
  rootMargin: '-20% 0px -35% 0px',
  threshold: 0
});

sections.forEach(section => navObserver.observe(section));

window.addEventListener('scroll', () => {
  const scrollBottom = window.innerHeight + window.scrollY;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= docHeight - 80) {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#contact');
    });
  }
}, { passive: true });