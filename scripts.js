// ══════════════════════════════════════════════
// ── Translations (EN default, FR available) ──
// ══════════════════════════════════════════════
const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.tag": "Open to opportunities",
    "hero.title": "Hi, I'm <em>Aymeric</em>—<br>CS Student & AI enthusiast.",
    "hero.desc": "Passionate about Machine Learning, Deep Learning, and building technology that solves real-world problems.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Get in touch",

    "about.label": "About me",
    "about.title": "Turning ideas into<br>intelligent systems.",
    "about.p1": "I'm Issika Aymeric Théophile Cokanh Kouamé, a computer science student specialising in AI, Machine Learning, and Deep Learning.",
    "about.p2": "I'm passionate about leveraging technology to solve real-world problems and love collaborating with entrepreneurs and tech innovators on ambitious projects.",
    "about.cta": "See my work",

    "fact.repos": "Public repositories",
    "fact.tech": "Technologies",
    "fact.langs": "Languages (FR / EN)",
    "fact.curiosity": "Curiosity",

    "projects.label": "What I've built",
    "projects.title": "Projects",
    "projects.filter.all": "All",
    "projects.filter.fullstack": "Full-Stack",
    "projects.filter.ai": "IA & Machine Learning",
    "projects.filter.mobile": "Mobile",
    "projects.count.suffix": "works",
    "projects.footnote.text": "39 public repositories in total — see the full profile on",
    "projects.footnote.link": " GitHub →",

    "project.cvsubmission.desc": "Job application form with automatic CV classification into 5 job categories, Cloudinary storage, and an admin dashboard.",
    "project.kanban.desc": "Real-time Kanban board with drag-and-drop, authentication, and optimistic updates — deployed in production.",
    "project.scraper.desc": "Asynchronous scraping pipeline combining concurrent I/O (aiohttp) with CPU-bound parsing, using SQLAlchemy upserts to avoid duplicates.",
    "project.medicareai.desc": "Health conversational assistant combining a React frontend and FastAPI backend, powered by Transformer models (Hugging Face).",
    "project.codeeditor.desc": "Online code editor supporting 8 languages with syntax highlighting (Ace Editor) and live preview.",
    "project.agroconnect.desc": "Multi-page showcase website for a digital marketplace aimed at Ivorian farmers.",
    "project.facerecognition.desc": "Real-time facial verification system: webcam feed compared against a reference image via DeepFace, using threading for smooth performance.",
    "project.digits.desc": "Handwritten digit recognition (MNIST) using Random Forest, with an interactive drawing interface built in Gradio.",
    "project.stock.desc": "Classification model predicting the daily movement (up/down) of Apple's stock price from historical data.",
    "project.gold.desc": "Comparison of two approaches — linear regression and a deep neural network — for predicting gold prices.",
    "project.car.desc": "Car price prediction pipeline comparing linear regression and deep learning, with residual visualization.",
    "project.tennis.desc": "Real-time object detection on images and video with YOLOv8, trained on a Roboflow dataset.",
    "project.nnscratch.desc": "Feedforward neural network (1 and 2 layers) implemented purely with NumPy, no ML library — for educational purposes.",
    "project.moviedb.desc": "Android app for searching and browsing movies, natively developed in Kotlin.",

    "skills.label": "What I know",
    "skills.title": "Skills",
    "skill.ai": "Artificial Intelligence",
    "skill.problemsolving": "Problem Solving",

    "resume.label": "My resume",
    "resume.title": "Want to know more about me?",
    "resume.desc": "Download my resume or view it directly in your browser.",
    "resume.view": "View Resume",
    "resume.download": "Download PDF",

    "connect.label": "Find me online",
    "connect.title": "Connect with me",

    "contact.label": "Let's talk",
    "contact.title": "Get in Touch",
    "contact.name.label": "Your Name",
    "contact.name.placeholder": "Your Name",
    "contact.email.label": "Your Email",
    "contact.subject.label": "Subject",
    "contact.subject.placeholder": "Project collaboration...",
    "contact.message.label": "Message",
    "contact.message.placeholder": "Tell me about your project or idea...",
    "contact.success": "✅ Message sent! I'll get back to you soon.",
    "contact.send": "Send Message",
    "contact.sending": "Sending…",
    "contact.error": "Something went wrong sending your message — please email me directly at issikathereal@gmail.com.",
    "contact.fillrequired": "Please fill in your name, email, and message.",

    "footer.text": "© 2026 Issika Aymeric Kouamé. Crafted with care."
  },

  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    "hero.tag": "Ouvert aux opportunités",
    "hero.title": "Salut, je suis <em>Aymeric</em>—<br>Étudiant en informatique & passionné d'IA.",
    "hero.desc": "Passionné par le Machine Learning, le Deep Learning, et la création de technologies qui résolvent des problèmes concrets.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",

    "about.label": "À propos de moi",
    "about.title": "Transformer des idées en<br>systèmes intelligents.",
    "about.p1": "Je suis Issika Aymeric Théophile Cokanh Kouamé, étudiant en informatique spécialisé en IA, Machine Learning et Deep Learning.",
    "about.p2": "Je suis passionné par l'utilisation de la technologie pour résoudre des problèmes concrets, et j'aime collaborer avec des entrepreneurs et innovateurs tech sur des projets ambitieux.",
    "about.cta": "Découvrir mon travail",

    "fact.repos": "Dépôts publics",
    "fact.tech": "Technologies",
    "fact.langs": "Langues (FR / EN)",
    "fact.curiosity": "Curiosité",

    "projects.label": "Ce que j'ai créé",
    "projects.title": "Projets",
    "projects.filter.all": "Tous",
    "projects.filter.fullstack": "Full-Stack",
    "projects.filter.ai": "IA & Machine Learning",
    "projects.filter.mobile": "Mobile",
    "projects.count.suffix": "réalisations",
    "projects.footnote.text": "39 dépôts publics au total — voir le profil complet sur",
    "projects.footnote.link": " GitHub →",

    "project.cvsubmission.desc": "Formulaire de dépôt de candidature avec classification automatique des CVs en 5 catégories métier, stockage Cloudinary et tableau de bord admin.",
    "project.kanban.desc": "Tableau Kanban temps réel avec glisser-déposer, authentification et mises à jour optimistes — déployé en production.",
    "project.scraper.desc": "Pipeline de scraping asynchrone combinant I/O concurrente (aiohttp) et parsing CPU-bound, avec upsert SQLAlchemy pour éviter les doublons.",
    "project.medicareai.desc": "Assistant conversationnel santé combinant un frontend React et un backend FastAPI, propulsé par des modèles Transformers (Hugging Face).",
    "project.codeeditor.desc": "Éditeur de code en ligne supportant 8 langages avec coloration syntaxique (Ace Editor) et prévisualisation en direct.",
    "project.agroconnect.desc": "Site vitrine multi-pages pour une place de marché numérique destinée aux agriculteurs ivoiriens.",
    "project.facerecognition.desc": "Système de vérification faciale en temps réel : flux webcam comparé à une image de référence via DeepFace, avec threading pour la fluidité.",
    "project.digits.desc": "Reconnaissance de chiffres manuscrits (MNIST) via Random Forest, avec interface de dessin interactive construite en Gradio.",
    "project.stock.desc": "Modèle de classification prédisant le mouvement journalier (hausse/baisse) du cours de l'action Apple à partir de données historiques.",
    "project.gold.desc": "Comparaison de deux approches — régression linéaire et réseau de neurones profond — pour prédire le cours de l'or.",
    "project.car.desc": "Pipeline de prédiction de prix automobile comparant régression linéaire et deep learning, avec visualisation des résidus.",
    "project.tennis.desc": "Détection d'objets en temps réel sur images et vidéos avec YOLOv8, entraîné sur un dataset Roboflow.",
    "project.nnscratch.desc": "Réseau de neurones feedforward (1 et 2 couches) implémenté uniquement avec NumPy, sans bibliothèque ML — à but pédagogique.",
    "project.moviedb.desc": "Application Android de recherche et consultation de films, développée nativement en Kotlin.",

    "skills.label": "Ce que je maîtrise",
    "skills.title": "Compétences",
    "skill.ai": "Intelligence Artificielle",
    "skill.problemsolving": "Résolution de problèmes",

    "resume.label": "Mon CV",
    "resume.title": "Envie d'en savoir plus sur moi ?",
    "resume.desc": "Téléchargez mon CV ou consultez-le directement dans votre navigateur.",
    "resume.view": "Voir le CV",
    "resume.download": "Télécharger le PDF",

    "connect.label": "Me retrouver en ligne",
    "connect.title": "Restons connectés",

    "contact.label": "Discutons",
    "contact.title": "Me contacter",
    "contact.name.label": "Votre nom",
    "contact.name.placeholder": "Votre nom",
    "contact.email.label": "Votre email",
    "contact.subject.label": "Sujet",
    "contact.subject.placeholder": "Collaboration sur un projet...",
    "contact.message.label": "Message",
    "contact.message.placeholder": "Parlez-moi de votre projet ou de votre idée...",
    "contact.success": "✅ Message envoyé ! Je vous répondrai bientôt.",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi…",
    "contact.error": "Une erreur est survenue lors de l'envoi — écrivez-moi directement à issikathereal@gmail.com.",
    "contact.fillrequired": "Merci de renseigner votre nom, votre email et votre message.",

    "footer.text": "© 2026 Issika Aymeric Kouamé. Conçu avec soin."
  }
};

const DEFAULT_LANG = 'en';
let currentLang = DEFAULT_LANG;

// ── Apply a language across the page ──
function applyLanguage(lang) {
  if (!translations[lang]) lang = DEFAULT_LANG;
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-apply the live project count with the correct language suffix
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  applyFilter(activeFilterBtn ? activeFilterBtn.dataset.filter : 'all');

  try { localStorage.setItem('preferredLang', lang); } catch (e) { /* ignore */ }
}

function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('preferredLang'); } catch (e) { /* ignore */ }
  const initial = (saved === 'en' || saved === 'fr') ? saved : DEFAULT_LANG;
  applyLanguage(initial);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// ── Mobile Nav ──
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Progress Bars (animate on scroll into view) ──
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
const progressList = document.getElementById('progressList');
if (progressList) progressObserver.observe(progressList);

// ── Contact Form (sends to issikathereal@gmail.com via FormSubmit) ──
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert(translations[currentLang]['contact.fillrequired']);
    return;
  }

  const btn = this.querySelector('button[type="submit"]');
  const originalLabel = translations[currentLang]['contact.send'];
  btn.textContent = translations[currentLang]['contact.sending'];
  btn.disabled = true;

  fetch('https://formsubmit.co/ajax/issikathereal@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      subject: subject || 'New portfolio contact form message',
      message: message
    })
  })
    .then(res => res.json())
    .then(() => {
      document.getElementById('successMsg').style.display = 'block';
      this.reset();
    })
    .catch(() => {
      alert(translations[currentLang]['contact.error']);
    })
    .finally(() => {
      btn.textContent = originalLabel;
      btn.disabled = false;
    });
});

// ── Active Nav Highlight on Scroll ──
const sections = document.querySelectorAll('section[id], header');
const navA = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navA.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
}, { passive: true });

// ── Project Filter Tabs ──
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-cat]');
const projectsCountEl = document.getElementById('projectsCount');
function applyFilter(cat) {
  let visible = 0;
  projectCards.forEach(card => {
    const match = cat === 'all' || card.dataset.cat === cat;
    card.classList.toggle('is-hidden', !match);
    if (match) visible++;
  });
  if (projectsCountEl) {
    const suffix = translations[currentLang]['projects.count.suffix'];
    projectsCountEl.textContent = String(visible).padStart(2, '0') + ' ' + suffix;
  }
}
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

// ── Init ──
initLanguage();
