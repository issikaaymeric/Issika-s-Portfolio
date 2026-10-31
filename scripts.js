// ══════════════════════════════════════════════
// ── Translations (EN default, FR available) ──
// ══════════════════════════════════════════════
const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.security": "Security",
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
    "projects.filter.ai": "AI & Machine Learning",
    "projects.count.suffix": "works",
    "projects.footnote.text": "39 public repositories in total — see the full profile on",
    "projects.footnote.link": " GitHub →",

    "project.source": "View Source",

    "project.grader.sub": "Rubric-agnostic automated assignment evaluation.",
    "project.grader.b1": "Grades submissions against any rubric and returns structured, criterion-level feedback.",
    "project.grader.b2": "Every model output is validated against Pydantic schemas before reaching the user.",
    "project.grader.b3": "Authentication and prompt-injection defenses protect grading integrity.",

    "project.susie.sub": "AI coding assistant for VS Code.",
    "project.susie.b1": "VS Code extension backed by a Fastify service that streams DeepSeek responses over WebSockets in real time.",
    "project.susie.b2": "Per-install authentication secures API access and isolates user sessions.",

    "project.agent.sub": "Desktop and CLI assistant that keeps its memory local.",
    "project.agent.b1": "Persistent SQLite memory with automatic fallback between LLM providers (DeepSeek, Groq).",
    "project.agent.b2": "Human-in-the-loop approval gate before any sensitive command runs.",
    "project.agent.b3": "Whisper voice input, with a desktop (PySide6) and CLI interface.",

    "project.scraper.sub": "Concurrent crawler with a price-tracking dashboard.",
    "project.scraper.b1": "Configurable concurrency limits, retry logic, and robots.txt-compliant crawling.",
    "project.scraper.b2": "Playwright handles JavaScript-rendered pages.",
    "project.scraper.b3": "Extraction, normalization, and deduplication feed a Streamlit dashboard with CSV export.",

    "project.stock.sub": "Time-series classification with leakage-safe validation.",
    "project.stock.b1": "Chronological holdout and expanding-window cross-validation prevent look-ahead bias.",
    "project.stock.b2": "Benchmarked against a naive baseline; the write-up reports that no model showed meaningful predictive skill.",

    "project.game.sub": "Game-logic fundamentals.",
    "project.game.b1": "Algorithmic movement, collision detection, and core game loop logic.",

    "security.label": "Cybersecurity",
    "security.title": "Security labs & CTF",
    "security.lead": "Hands-on practice from the CompTIA Security+ (SY0-701) preparation track. I carry the same habits into my applications: authentication, input validation, and prompt-injection defense.",
    "security.wazuh.sub": "Endpoint monitoring, malware and vulnerability detection.",
    "security.wazuh.b1": "Wazuh manager and Windows agent with Sysmon telemetry and real-time file integrity monitoring on System32 (MD5/SHA-256 hashes).",
    "security.wazuh.b2": "VirusTotal integration validated end to end: FIM (rule 550) and VirusTotal (rule 87105) alerts correlated on an EICAR test file.",
    "security.wazuh.b3": "Vulnerability Detector against NVD/CVE data, triaged by CVSS severity, software version, and binary path.",
    "security.fw.sub": "Default-deny host firewall with iptables.",
    "security.fw.b1": "Stateful rules with INPUT policy DROP and explicit allows for loopback, SSH, HTTP, HTTPS, and DNS.",
    "security.fw.b2": "MySQL (port 3306) restricted to a single trusted source IP; ICMP echo disabled.",
    "security.fw.b3": "LOG rules ahead of the final DROP, with rules persisted across reboots via netfilter-persistent.",
    "security.net.sub": "Campus network design in Cisco Packet Tracer.",
    "security.net.b1": "Three switches and one router with six VLANs and router-on-a-stick inter-VLAN routing.",
    "security.net.b2": "Per-VLAN DHCP pools; guest Wi-Fi and servers isolated on dedicated segments over 802.1Q trunks.",
    "security.profile": "View Profile",
    "security.thm.sub": "28 rooms completed, 7 badges.",
    "security.thm.b1": "13 CTF and exploitation rooms covering web exploitation, privilege escalation, hash cracking, and service misconfiguration.",
    "security.thm.b2": "Foundations in Active Directory, cryptography, networking, and writing pentest reports.",

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
    "nav.security": "Sécurité",
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
    "projects.count.suffix": "réalisations",
    "projects.footnote.text": "39 dépôts publics au total — voir le profil complet sur",
    "projects.footnote.link": " GitHub →",

    "project.source": "Voir le code",

    "project.grader.sub": "Évaluation automatisée de travaux, indépendante de la grille.",
    "project.grader.b1": "Évalue les travaux selon n'importe quelle grille et renvoie un retour structuré par critère.",
    "project.grader.b2": "Chaque sortie du modèle est validée par des schémas Pydantic avant d'atteindre l'utilisateur.",
    "project.grader.b3": "Authentification et protections contre l'injection de prompt pour garantir l'intégrité des notes.",

    "project.susie.sub": "Assistant de codage IA pour VS Code.",
    "project.susie.b1": "Extension VS Code reliée à un service Fastify qui diffuse les réponses DeepSeek en temps réel via WebSockets.",
    "project.susie.b2": "Authentification par installation pour sécuriser l'API et isoler les sessions utilisateur.",

    "project.agent.sub": "Assistant bureau et CLI dont la mémoire reste en local.",
    "project.agent.b1": "Mémoire SQLite persistante, avec basculement automatique entre fournisseurs LLM (DeepSeek, Groq).",
    "project.agent.b2": "Validation humaine avant l'exécution de toute commande sensible.",
    "project.agent.b3": "Saisie vocale Whisper, avec interface bureau (PySide6) et CLI.",

    "project.scraper.sub": "Crawler concurrent avec tableau de bord de suivi des prix.",
    "project.scraper.b1": "Limites de concurrence configurables, logique de nouvelle tentative et respect du robots.txt.",
    "project.scraper.b2": "Playwright pour les pages rendues en JavaScript.",
    "project.scraper.b3": "Extraction, normalisation et déduplication alimentent un tableau de bord Streamlit avec export CSV.",

    "project.stock.sub": "Classification de séries temporelles avec validation sans fuite.",
    "project.stock.b1": "Holdout chronologique et validation croisée à fenêtre extensible pour éviter le biais d'anticipation.",
    "project.stock.b2": "Comparé à une baseline naïve ; le rapport conclut qu'aucun modèle ne montre de pouvoir prédictif significatif.",

    "project.game.sub": "Fondamentaux de la logique de jeu.",
    "project.game.b1": "Déplacements algorithmiques, détection de collisions et boucle de jeu.",

    "security.label": "Cybersécurité",
    "security.title": "Labos sécurité & CTF",
    "security.lead": "Pratique issue du parcours de préparation CompTIA Security+ (SY0-701). J'applique les mêmes réflexes dans mes applications : authentification, validation des données et protection contre l'injection de prompt.",
    "security.wazuh.sub": "Supervision des postes, détection de malwares et de vulnérabilités.",
    "security.wazuh.b1": "Manager Wazuh et agent Windows avec télémétrie Sysmon et surveillance d'intégrité des fichiers en temps réel sur System32 (hash MD5/SHA-256).",
    "security.wazuh.b2": "Intégration VirusTotal validée de bout en bout : alertes FIM (règle 550) et VirusTotal (règle 87105) corrélées sur un fichier de test EICAR.",
    "security.wazuh.b3": "Vulnerability Detector sur les données NVD/CVE, trié par gravité CVSS, version logicielle et chemin du binaire.",
    "security.fw.sub": "Pare-feu hôte en refus par défaut avec iptables.",
    "security.fw.b1": "Règles stateful avec politique INPUT en DROP et autorisations explicites : loopback, SSH, HTTP, HTTPS et DNS.",
    "security.fw.b2": "MySQL (port 3306) limité à une seule IP source de confiance ; écho ICMP désactivé.",
    "security.fw.b3": "Règles LOG avant le DROP final, avec persistance des règles au redémarrage via netfilter-persistent.",
    "security.net.sub": "Conception d'un réseau de campus dans Cisco Packet Tracer.",
    "security.net.b1": "Trois commutateurs et un routeur, six VLAN et routage inter-VLAN en router-on-a-stick.",
    "security.net.b2": "Pools DHCP par VLAN ; Wi-Fi invité et serveurs isolés sur des segments dédiés via trunks 802.1Q.",
    "security.profile": "Voir le profil",
    "security.thm.sub": "28 salles complétées, 7 badges.",
    "security.thm.b1": "13 salles CTF et d'exploitation : exploitation web, élévation de privilèges, cracking de hash et abus de mauvaises configurations.",
    "security.thm.b2": "Bases en Active Directory, cryptographie, réseaux et rédaction de rapports de pentest.",

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

// ── Resume files per language ──
const RESUME_FILES = {
  en: 'Resume/CV_Issika_Kouame_EN.pdf',
  fr: 'Resume/CV_Issika_Kouame_FR.pdf'
};

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

  // Point the resume buttons at the matching language version
  ['resumeView', 'resumeDownload'].forEach(id => {
    const a = document.getElementById(id);
    if (a) a.setAttribute('href', RESUME_FILES[lang]);
  });
  const previewFrame = document.getElementById('resumePreview');
  if (previewFrame) {
    const src = RESUME_FILES[lang] + '#toolbar=0&navpanes=0&view=FitH';
    if (previewFrame.getAttribute('src') !== src) previewFrame.setAttribute('src', src);
  }

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

// ── Project Preview Images (lazy) ──
// Order: img/projects/<slug>.webp  →  GitHub Open Graph image  →  GitHub logo fallback
const previewObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const box = entry.target;
    previewObserver.unobserve(box);
    const sources = [
      'img/projects/' + box.dataset.slug + '.webp',
      'https://opengraph.githubassets.com/1/issikaaymeric/' + box.dataset.repo
    ];
    const title = box.parentElement.querySelector('h3').textContent;
    const img = new Image();
    let i = 0;
    img.alt = title + ' — project preview';
    img.decoding = 'async';
    img.onload = () => box.classList.add('has-img');
    img.onerror = () => {
      if (++i < sources.length) img.src = sources[i];
      else img.remove(); // GitHub logo fallback stays visible
    };
    img.src = sources[0];
    box.insertBefore(img, box.firstChild);
  });
}, { rootMargin: '200px' });
document.querySelectorAll('.project-card-img[data-repo]').forEach(b => previewObserver.observe(b));

// ── Init ──
initLanguage();
