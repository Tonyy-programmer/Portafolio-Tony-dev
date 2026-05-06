const themeToggle = document.getElementById("themeToggle");
const langEsBtn = document.getElementById("langEs");
const langEnBtn = document.getElementById("langEn");
const filterButtons = document.querySelectorAll(".chip");
const skillCards = document.querySelectorAll(".skill-card");
const revealElements = document.querySelectorAll(".reveal");
const i18nNodes = document.querySelectorAll("[data-i18n]");

let currentLanguage = "es";

const I18N = {
    es: {
        "nav.projects": "Proyectos",
        "nav.game": "Juego",
        "nav.objective": "Objetivo",
        "nav.contact": "Contacto",
        "theme.dark": "Tema oscuro",
        "theme.light": "Tema claro",
        "hero.eyebrow": "TonyDev | Portafolio Junior",
        "hero.role": "Desarrollador junior en formacion",
        "hero.subtitle": "Tengo 13 años y me enfoco en construir experiencias web orientadas al usuario. Mi base principal es Python (incluyendo POO) y actualmente estoy consolidando frontend para avanzar después hacia backend con Python. También estoy desarrollando Empire of Luck, un juego de Roblox inspirado en Grow a Garden, con imperios, bots de IA de ayuda, lógica de IA y aprendizaje constante de Luau y Lua.",
        "hero.panel1": "Me interesa desarrollar sistemas que aporten valor real, mejoren procesos y conviertan ideas en software funcional. Aprendo construyendo proyectos practicos y mejorando con feedback.",
        "hero.panel2": "Tengo un interes muy fuerte en inteligencia artificial y quiero integrarla en sistemas utiles, asistentes y herramientas que mejoren la experiencia de usuario.",
        "hero.contact": "Contactar",
        "hero.email": "Correo",
        "hero.meta": "Remoto | Aprendiz autodidacta | Software util, UX, IA aplicada y Roblox",
        "hero.availability": "Disponible para colaboraciones, proyectos de aprendizaje y retos de desarrollo web.",
        "hero.skillsTitle": "Competencias clave",
        "radar.logic": "Logica",
        "radar.projects": "Proyectos",
        "profile.title": "Perfil profesional",
        "profile.text": "Soy un desarrollador junior en formacion con enfoque practico. Me interesa construir software util, comprender la logica de los sistemas y transformarla en experiencias claras para el usuario. Aprendo rapido, experimento con proyectos reales y mantengo un interes fuerte en IA aplicada.",
        "trait.user.title": "Enfoque en usuario",
        "trait.user.text": "Busco crear sistemas que aporten valor y mejoren la experiencia final.",
        "trait.self.title": "Aprendizaje autodidacta",
        "trait.self.text": "Aprendo rapido por cuenta propia y consolido conocimientos construyendo proyectos.",
        "trait.ai.title": "Interes en IA",
        "trait.ai.text": "Quiero integrar inteligencia artificial en herramientas y productos utiles.",
        "trait.systems.title": "Vision de sistemas",
        "trait.systems.text": "Me gusta pensar en la logica completa: frontend, backend y funcionamiento real.",
        "objective.title": "Objetivo profesional",
        "objective.subtitle": "Resumen de enfoque, interes tecnico y ruta de crecimiento como desarrollador.",
        "objective.purpose.title": "Proposito",
        "objective.purpose.text": "Crear software y sistemas que mejoren la experiencia del usuario y resuelvan necesidades reales.",
        "objective.ai.title": "Interes en IA",
        "objective.ai.text": "Me interesa demasiado la inteligencia artificial y su aplicacion practica en productos reales.",
        "objective.path.title": "Proyeccion",
        "objective.path.text": "Fortalecer frontend, pasar a backend con Python y construir APIs y microservicios.",
        "skills.title": "Detalle de habilidades",
        "skills.subtitle": "Vista por areas para mostrar en que tecnologias me estoy fortaleciendo.",
        "filter.all": "Todas",
        "filter.tools": "Herramientas",
        "skill.baseStrong": "Base fuerte",
        "skill.python.text": "Logica, funciones, estructuras, POO y resolucion de problemas.",
        "skill.js.level": "En consolidacion",
        "skill.js.text": "DOM, eventos, localStorage, animaciones y logica de interaccion.",
        "skill.htmlcss.level": "Buen nivel junior",
        "skill.htmlcss.text": "Estructura, responsive, componentes visuales y efectos.",
        "skill.ui.title": "Diseno UI",
        "skill.ui.level": "Creativo",
        "skill.ui.text": "Creacion de paginas con identidad visual y animaciones con intencion.",
        "skill.git.level": "Uso basico",
        "skill.git.text": "Control de versiones, repositorios y preparacion para publicar proyectos.",
        "skill.flask.level": "Backend inicial",
        "skill.flask.text": "API simple para chatbot y conexion frontend-backend.",
        "skill.ai.title": "IA aplicada (prototipos)",
        "skill.ai.level": "Interes alto",
        "skill.ai.text": "Integracion de IA en chatbot para consultas y exploracion de casos de uso reales.",
        "skill.roblox.level": "En aprendizaje activo",
        "skill.roblox.text": "Creacion de juegos en Roblox Studio, sistemas de imperios, bots de ayuda con IA y logica de juego separada entre backend y frontend.",
        "stack.title": "Stack favorito (TonyDev)",
        "stack.subtitle": "Tecnologias que mas me interesan para construir sistemas reales, con Python como prioridad.",
        "stack.python.title": "Python (prioridad principal)",
        "stack.python.text": "Mi lenguaje base para logica, backend, APIs y futuras arquitecturas con microservicios.",
        "stack.backend.text": "Ruta de backend que quiero fortalecer para crear servicios y APIs utiles.",
        "stack.front.text": "Base actual para interfaces, experiencia de usuario y productos interactivos.",
        "stack.aiCard.title": "Inteligencia Artificial",
        "stack.aiCard.text": "Interes fuerte en integrar IA en asistentes, automatizacion y herramientas practicas.",
        "stack.roblox.title": "Roblox Studio + Luau",
        "stack.roblox.text": "Ruta actual para crear Empire of Luck con sistemas de juego, imperios, bots de IA y logica separada entre backend y frontend.",
        "empire.eyebrow": "Juego Roblox en desarrollo",
        "empire.title": "Empire of Luck",
        "empire.text": "Empire of Luck es mi juego de Roblox inspirado en Grow a Garden, pero llevado a una experiencia de imperios, progreso y suerte. El jugador construye su camino, mejora su imperio y recibe apoyo de bots de IA pensados para guiar, asistir y hacer que la experiencia se sienta mas viva.",
        "empire.play": "Jugar en Roblox",
        "empire.projectLink": "Ver proyecto",
        "empire.feature1.title": "Imperios y progreso",
        "empire.feature1.text": "Una idea de juego basada en crecimiento, construccion y evolucion del jugador dentro de su propio imperio.",
        "empire.feature2.title": "Bots con IA",
        "empire.feature2.text": "Asistentes dentro del juego pensados para ayudar, orientar y mejorar la experiencia del jugador.",
        "empire.feature3.title": "Luau y Lua",
        "empire.feature3.text": "Proyecto actual para aprender Roblox Studio, Luau/Lua y logica de gameplay con sistemas mas organizados.",
        "empire.feature4.title": "Backend y frontend",
        "empire.feature4.text": "Estoy dividiendo el juego en partes para ordenar mejor la logica, la interfaz y los sistemas que hacen funcionar la experiencia.",
        "projects.title": "Proyectos",
        "projects.subtitle": "Proyectos que reflejan mi avance en logica, frontend, Roblox e integracion con IA.",
        "projects.featured": "Proyecto destacado",
        "proj.chat.title": "Chatbot IA para boleteria",
        "proj.chat.sub": "Consultas sobre un sistema de boleteria con backend en Python.",
        "status.prototype": "Prototipo",
        "proj.chat.desc": "Desarrolle un prototipo de chatbot que responde preguntas sobre un sistema de boleteria. Integre frontend, backend con Flask y consumo de IA para responder dudas del usuario. Este proyecto fue clave para comprender una arquitectura basica cliente-servidor y reforzo mi interes por la inteligencia artificial aplicada.",
        "proj.chat.backendTitle": "Backend y logica",
        "proj.chat.backendText": "Python, Flask, rutas, manejo de peticiones y respuestas JSON.",
        "proj.chat.frontTitle": "Frontend y UX",
        "proj.chat.frontText": "HTML, CSS y JavaScript para interfaz de chat e interaccion.",
        "project.learn.label": "Aprendizaje clave:",
        "project.improve.label": "Que mejoraria:",
        "proj.chat.learn": "Integracion frontend-backend con Flask y estructura inicial de un flujo de chat con IA.",
        "proj.chat.improve": "Manejo de errores, validaciones del backend y una interfaz de chat mas robusta.",
        "proj.propuesta.title": "Propuesta interactiva",
        "status.done": "Completado",
        "status.inProgress": "En desarrollo",
        "proj.propuesta.desc": "Pagina con animaciones, musica, mini juego, corazones, confeti y flujo interactivo.",
        "proj.propuesta.li1": "Manipulacion del DOM",
        "proj.propuesta.li2": "Animaciones CSS + JS",
        "proj.propuesta.learn": "Logica de interaccion en JavaScript, animaciones y manejo de estado en el navegador.",
        "proj.propuesta.improve": "Separar mejor la logica en modulos y optimizar mas la experiencia movil.",
        "project.demo": "Demo en vivo",
        "project.robloxDemo": "Demo en Roblox",
        "project.repo": "Ver repositorio",
        "proj.portfolio.title": "Portafolio personal",
        "status.improving": "En mejora",
        "proj.portfolio.desc": "Rediseño profesional de mi pagina de presentacion con secciones, filtros y animaciones.",
        "proj.portfolio.li1": "Diseño responsive",
        "proj.portfolio.li2": "Animaciones de entrada",
        "proj.portfolio.li3": "UI enfocada en presentacion profesional",
        "proj.portfolio.learn": "Jerarquia visual, presentacion profesional y mejor organizacion del contenido tecnico.",
        "proj.portfolio.improve": "Mantener los enlaces actualizados y agregar demos nuevas cuando publique mas proyectos.",
        "proj.empire.title": "Empire of Luck",
        "proj.empire.desc": "Juego de Roblox inspirado en Grow a Garden, pero llevado a un sistema de imperios donde bots de IA ayudan al jugador. Estoy aprendiendo Luau y Lua mientras separo la logica del juego entre backend y frontend.",
        "proj.empire.li1": "Roblox Studio + Luau/Lua",
        "proj.empire.li2": "Bots de IA como apoyo al jugador",
        "proj.empire.li3": "Arquitectura separada entre backend y frontend",
        "proj.empire.learn": "Organizar sistemas de juego, crear logica de IA y pensar el gameplay como una experiencia escalable.",
        "proj.empire.improve": "Pulir mecanicas, balancear los imperios y terminar una version jugable en un plazo estimado de 2 a 3 meses.",
        "timeline.title": "Timeline de aprendizaje",
        "timeline.subtitle": "Resumen de como he ido avanzando en mi ruta tecnica.",
        "timeline.step1.tag": "Inicio",
        "timeline.step1.title": "Python y logica",
        "timeline.step1.text": "Fortaleci bases de programacion, funciones, estructuras y POO.",
        "timeline.step2.tag": "Frontend",
        "timeline.step2.title": "HTML, CSS y JavaScript",
        "timeline.step2.text": "Desarrolle interfaces, animaciones e interacciones con enfoque en usuario.",
        "timeline.step3.tag": "Integracion",
        "timeline.step3.title": "Proyecto con IA y backend",
        "timeline.step3.text": "Integre Flask y un chatbot con IA para resolver preguntas de un sistema.",
        "timeline.step4.tag": "Siguiente etapa",
        "timeline.step4.title": "APIs y microservicios con Python",
        "timeline.step4.text": "Objetivo de crecimiento para construir sistemas mas completos y escalables.",
        "timeline.step5.tag": "Proyecto actual",
        "timeline.step5.title": "Empire of Luck en Roblox",
        "timeline.step5.text": "Estoy creando un juego de imperios con bots de IA, aprendiendo Luau/Lua y dividiendo la logica entre backend y frontend.",
        "current.title": "Proyecto actual",
        "current.tag": "En progreso",
        "current.text": "Estoy enfocado en Empire of Luck, un juego de Roblox inspirado en Grow a Garden pero con imperios y bots de IA ayudando al jugador. Lo estoy construyendo con Luau/Lua, separando backend y frontend, y estimo tener una version lista en maximo 2 o 3 meses.",
        "goals.title": "Metas 2026",
        "goals.li1": "Publicar mas proyectos en GitHub con documentacion clara.",
        "goals.li2": "Terminar Empire of Luck en Roblox en un plazo estimado de 2 a 3 meses.",
        "goals.li3": "Integrar bots de IA utiles dentro del gameplay y mejorar la estructura backend/frontend.",
        "workflow.title": "Como trabajo",
        "workflow.subtitle": "Proceso que sigo para construir proyectos y mejorar resultados.",
        "workflow.step1.title": "Entiendo el problema",
        "workflow.step1.text": "Defino que necesita el usuario y que resultado debe obtener.",
        "workflow.step2.title": "Hago prototipo",
        "workflow.step2.text": "Construyo una version funcional para validar idea e interaccion.",
        "workflow.step3.title": "Pruebo y ajusto",
        "workflow.step3.text": "Reviso errores, mejoro detalles y simplifico la experiencia.",
        "workflow.step4.title": "Mejoro el producto",
        "workflow.step4.text": "Anado funciones, organizo mejor el codigo y subo el nivel tecnico.",
        "growth.title": "Ruta de crecimiento",
        "growth.text": "Mi plan es seguir fortaleciendo frontend mientras avanzo a backend con Python para construir APIs y, posteriormente, microservicios pequenos. Mi enfoque principal es crear software util para usuarios e integrar IA en soluciones practicas.",
        "growth.li1": "Consolidar JavaScript y la estructura de proyectos frontend",
        "growth.li2": "Backend con Flask / FastAPI",
        "growth.li3": "Bases de datos y APIs REST",
        "growth.li4": "Integracion de IA en sistemas utiles",
        "growth.li5": "Primer microservicio en Python",
        "footer.title": "Disponible para colaborar en proyectos",
        "footer.emailBtn": "Email",
        "footer.line1": "Marca personal: TonyDev | Correo: anthonyparedes283839gm@gmail.com | GitHub: github.com/Tonyy-programmer",
        "footer.line2": "© 2026 Anthony Paredes. Desarrollado con HTML, CSS y JavaScript."
    },
    en: {
        "nav.projects": "Projects",
        "nav.game": "Game",
        "nav.objective": "Goal",
        "nav.contact": "Contact",
        "theme.dark": "Dark theme",
        "theme.light": "Light theme",
        "hero.eyebrow": "TonyDev | Junior Portfolio",
        "hero.role": "Junior developer in training",
        "hero.subtitle": "I am 13 years old and focused on building user-oriented web experiences. My main foundation is Python (including OOP), and I am currently strengthening frontend skills before moving deeper into Python backend development. I am also developing Empire of Luck, a Roblox game inspired by Grow a Garden, with empires, helpful AI bots, AI logic, and constant Luau and Lua learning.",
        "hero.panel1": "I am interested in building systems that create real value, improve processes, and turn ideas into functional software. I learn by building practical projects and improving through feedback.",
        "hero.panel2": "I have a strong interest in artificial intelligence and want to integrate it into useful systems, assistants, and tools that improve user experience.",
        "hero.contact": "Contact",
        "hero.email": "Email",
        "hero.meta": "Remote | Self-taught learner | Useful software, UX, applied AI, and Roblox",
        "hero.availability": "Available for collaborations, learning projects, and web development challenges.",
        "hero.skillsTitle": "Key strengths",
        "radar.logic": "Logic",
        "radar.projects": "Projects",
        "profile.title": "Professional profile",
        "profile.text": "I am a junior developer in training with a practical mindset. I like building useful software, understanding system logic, and turning it into clear user experiences. I learn fast, experiment with real projects, and maintain a strong interest in applied AI.",
        "trait.user.title": "User-focused",
        "trait.user.text": "I aim to build systems that add value and improve the final user experience.",
        "trait.self.title": "Self-taught learning",
        "trait.self.text": "I learn quickly on my own and consolidate knowledge by building projects.",
        "trait.ai.title": "AI interest",
        "trait.ai.text": "I want to integrate artificial intelligence into useful tools and products.",
        "trait.systems.title": "Systems thinking",
        "trait.systems.text": "I like thinking about the complete logic: frontend, backend, and real behavior.",
        "objective.title": "Professional goal",
        "objective.subtitle": "Summary of my focus, technical interests, and growth path as a developer.",
        "objective.purpose.title": "Purpose",
        "objective.purpose.text": "Build software and systems that improve user experience and solve real needs.",
        "objective.ai.title": "AI interest",
        "objective.ai.text": "I am highly interested in artificial intelligence and its practical application in real products.",
        "objective.path.title": "Direction",
        "objective.path.text": "Strengthen frontend, move into Python backend, and build APIs and microservices.",
        "skills.title": "Skills detail",
        "skills.subtitle": "Category view showing the technologies I am currently strengthening.",
        "filter.all": "All",
        "filter.tools": "Tools",
        "skill.baseStrong": "Strong base",
        "skill.python.text": "Logic, functions, data structures, OOP, and problem solving.",
        "skill.js.level": "Improving",
        "skill.js.text": "DOM, events, localStorage, animations, and interaction logic.",
        "skill.htmlcss.level": "Good junior level",
        "skill.htmlcss.text": "Structure, responsive design, visual components, and effects.",
        "skill.ui.title": "UI Design",
        "skill.ui.level": "Creative",
        "skill.ui.text": "Building pages with visual identity and purposeful animations.",
        "skill.git.level": "Basic usage",
        "skill.git.text": "Version control, repositories, and project publishing preparation.",
        "skill.flask.level": "Starter backend",
        "skill.flask.text": "Simple API for chatbot and frontend-backend connection.",
        "skill.ai.title": "Applied AI (prototypes)",
        "skill.ai.level": "High interest",
        "skill.ai.text": "AI integration in chatbot prototypes and real use-case exploration.",
        "skill.roblox.level": "Active learning",
        "skill.roblox.text": "Game creation in Roblox Studio, empire systems, helpful AI bots, and game logic separated between backend and frontend.",
        "stack.title": "Favorite stack (TonyDev)",
        "stack.subtitle": "Technologies I am most interested in for building real systems, with Python as priority.",
        "stack.python.title": "Python (main priority)",
        "stack.python.text": "My base language for logic, backend, APIs, and future microservice architectures.",
        "stack.backend.text": "Backend path I want to strengthen to build services and useful APIs.",
        "stack.front.text": "Current base for interfaces, user experience, and interactive products.",
        "stack.aiCard.title": "Artificial Intelligence",
        "stack.aiCard.text": "Strong interest in integrating AI into assistants, automation, and practical tools.",
        "stack.roblox.title": "Roblox Studio + Luau",
        "stack.roblox.text": "Current path for building Empire of Luck with game systems, empires, AI bots, and logic separated between backend and frontend.",
        "empire.eyebrow": "Roblox game in development",
        "empire.title": "Empire of Luck",
        "empire.text": "Empire of Luck is my Roblox game inspired by Grow a Garden, but turned into an experience about empires, progress, and luck. The player builds their path, improves their empire, and receives support from AI bots designed to guide, assist, and make the experience feel more alive.",
        "empire.play": "Play on Roblox",
        "empire.projectLink": "View project",
        "empire.feature1.title": "Empires and progress",
        "empire.feature1.text": "A game idea based on growth, building, and player evolution inside their own empire.",
        "empire.feature2.title": "AI bots",
        "empire.feature2.text": "In-game assistants designed to help, guide, and improve the player experience.",
        "empire.feature3.title": "Luau and Lua",
        "empire.feature3.text": "My current project for learning Roblox Studio, Luau/Lua, and gameplay logic with more organized systems.",
        "empire.feature4.title": "Backend and frontend",
        "empire.feature4.text": "I am dividing the game into parts to better organize the logic, interface, and systems that power the experience.",
        "projects.title": "Projects",
        "projects.subtitle": "Projects that show my progress in logic, frontend, Roblox, and AI integration.",
        "projects.featured": "Featured project",
        "proj.chat.title": "AI chatbot for ticketing",
        "proj.chat.sub": "Questions about a ticketing system with a Python backend.",
        "status.prototype": "Prototype",
        "proj.chat.desc": "I built a chatbot prototype that answers questions about a ticketing system. I integrated frontend, a Flask backend, and AI usage to answer user questions. This project helped me understand a basic client-server architecture and strengthened my interest in applied AI.",
        "proj.chat.backendTitle": "Backend and logic",
        "proj.chat.backendText": "Python, Flask, routes, request handling, and JSON responses.",
        "proj.chat.frontTitle": "Frontend and UX",
        "proj.chat.frontText": "HTML, CSS, and JavaScript for the chat interface and interaction.",
        "project.learn.label": "Key learning:",
        "project.improve.label": "What I would improve:",
        "proj.chat.learn": "Frontend-backend integration with Flask and an initial AI chat flow structure.",
        "proj.chat.improve": "Error handling, backend validations, and a more robust chat interface.",
        "proj.propuesta.title": "Interactive proposal page",
        "status.done": "Completed",
        "status.inProgress": "In development",
        "proj.propuesta.desc": "Page with animations, music, mini game, hearts, confetti, and an interactive flow.",
        "proj.propuesta.li1": "DOM manipulation",
        "proj.propuesta.li2": "CSS + JS animations",
        "proj.propuesta.learn": "JavaScript interaction logic, animations, and state handling in the browser.",
        "proj.propuesta.improve": "Better logic separation into modules and stronger mobile optimization.",
        "project.demo": "Live demo",
        "project.robloxDemo": "Roblox demo",
        "project.repo": "View repository",
        "proj.portfolio.title": "Personal portfolio",
        "status.improving": "Improving",
        "proj.portfolio.desc": "Professional redesign of my portfolio page with sections, filters, and animations.",
        "proj.portfolio.li1": "Responsive design",
        "proj.portfolio.li2": "Entry animations",
        "proj.portfolio.li3": "UI focused on professional presentation",
        "proj.portfolio.learn": "Visual hierarchy, professional presentation, and better organization of technical content.",
        "proj.portfolio.improve": "Keep links updated and add new demos whenever I publish more projects.",
        "proj.empire.title": "Empire of Luck",
        "proj.empire.desc": "A Roblox game inspired by Grow a Garden, but transformed into an empire system where AI bots help the player. I am learning Luau and Lua while separating the game logic between backend and frontend.",
        "proj.empire.li1": "Roblox Studio + Luau/Lua",
        "proj.empire.li2": "AI bots as player support",
        "proj.empire.li3": "Architecture separated between backend and frontend",
        "proj.empire.learn": "Organizing game systems, creating AI logic, and thinking about gameplay as a scalable experience.",
        "proj.empire.improve": "Polish mechanics, balance the empires, and finish a playable version in an estimated 2 to 3 months.",
        "timeline.title": "Learning timeline",
        "timeline.subtitle": "Summary of how I have progressed in my technical path.",
        "timeline.step1.tag": "Start",
        "timeline.step1.title": "Python and logic",
        "timeline.step1.text": "I strengthened programming foundations, functions, data structures, and OOP.",
        "timeline.step2.tag": "Frontend",
        "timeline.step2.title": "HTML, CSS and JavaScript",
        "timeline.step2.text": "I built interfaces, animations, and interactions with a user focus.",
        "timeline.step3.tag": "Integration",
        "timeline.step3.title": "AI + backend project",
        "timeline.step3.text": "I integrated Flask and an AI chatbot to solve questions from a system.",
        "timeline.step4.tag": "Next stage",
        "timeline.step4.title": "APIs and Python microservices",
        "timeline.step4.text": "Growth goal to build more complete and scalable systems.",
        "timeline.step5.tag": "Current project",
        "timeline.step5.title": "Empire of Luck in Roblox",
        "timeline.step5.text": "I am creating an empire game with AI bots, learning Luau/Lua, and dividing the logic between backend and frontend.",
        "current.title": "Current project focus",
        "current.tag": "In progress",
        "current.text": "I am focused on Empire of Luck, a Roblox game inspired by Grow a Garden but with empires and AI bots helping the player. I am building it with Luau/Lua, separating backend and frontend, and I estimate having a version ready in a maximum of 2 or 3 months.",
        "goals.title": "2026 goals",
        "goals.li1": "Publish more GitHub projects with clear documentation.",
        "goals.li2": "Finish Empire of Luck in Roblox within an estimated 2 to 3 months.",
        "goals.li3": "Integrate useful AI bots into gameplay and improve the backend/frontend structure.",
        "workflow.title": "How I work",
        "workflow.subtitle": "Process I follow to build projects and improve outcomes.",
        "workflow.step1.title": "Understand the problem",
        "workflow.step1.text": "I define what the user needs and what result the product should deliver.",
        "workflow.step2.title": "Build a prototype",
        "workflow.step2.text": "I build a functional version to validate the idea and interaction.",
        "workflow.step3.title": "Test and adjust",
        "workflow.step3.text": "I review errors, improve details, and simplify the experience.",
        "workflow.step4.title": "Improve the product",
        "workflow.step4.text": "I add features, organize the code better, and raise the technical level.",
        "growth.title": "Growth path",
        "growth.text": "My plan is to keep strengthening frontend while moving into Python backend to build APIs and later small microservices. My main focus is building useful software and integrating AI into practical solutions.",
        "growth.li1": "Strengthen JavaScript and frontend project structure",
        "growth.li2": "Backend with Flask / FastAPI",
        "growth.li3": "Databases and REST APIs",
        "growth.li4": "AI integration in useful systems",
        "growth.li5": "First microservice in Python",
        "footer.title": "Available to collaborate on projects",
        "footer.emailBtn": "Email",
        "footer.line1": "Personal brand: TonyDev | Email: anthonyparedes283839gm@gmail.com | GitHub: github.com/Tonyy-programmer",
        "footer.line2": "© 2026 Anthony Paredes. Built with HTML, CSS and JavaScript."
    }
};

function t(key) {
    return I18N[currentLanguage]?.[key] ?? I18N.es[key] ?? key;
}

function updateThemeButtonLabel() {
    if (!themeToggle) return;
    const isLight = document.body.classList.contains("tema-claro");
    themeToggle.textContent = isLight ? t("theme.dark") : t("theme.light");
}

function applyTheme(theme) {
    const isLight = theme === "claro";
    document.body.classList.toggle("tema-claro", isLight);
    updateThemeButtonLabel();
}

function initTheme() {
    if (!themeToggle) return;
    const savedTheme = localStorage.getItem("tema_portafolio_v2");
    applyTheme(savedTheme === "claro" ? "claro" : "oscuro");

    themeToggle.addEventListener("click", () => {
        const currentIsLight = document.body.classList.contains("tema-claro");
        const nextTheme = currentIsLight ? "oscuro" : "claro";
        applyTheme(nextTheme);
        localStorage.setItem("tema_portafolio_v2", nextTheme);
    });
}

function applyLanguage(lang) {
    currentLanguage = lang === "en" ? "en" : "es";
    document.documentElement.lang = currentLanguage;

    i18nNodes.forEach((node) => {
        const key = node.dataset.i18n;
        if (!key) return;
        node.textContent = t(key);
    });

    if (langEsBtn && langEnBtn) {
        langEsBtn.classList.toggle("is-active", currentLanguage === "es");
        langEnBtn.classList.toggle("is-active", currentLanguage === "en");
    }

    updateThemeButtonLabel();
    localStorage.setItem("idioma_portafolio_v1", currentLanguage);
}

function initLanguage() {
    const savedLanguage = localStorage.getItem("idioma_portafolio_v1");
    applyLanguage(savedLanguage === "en" ? "en" : "es");

    if (langEsBtn) {
        langEsBtn.addEventListener("click", () => applyLanguage("es"));
    }
    if (langEnBtn) {
        langEnBtn.addEventListener("click", () => applyLanguage("en"));
    }
}

function filterSkills(filter) {
    skillCards.forEach((card) => {
        if (filter === "all") {
            card.classList.remove("is-hidden");
            return;
        }

        const categories = (card.dataset.category || "").split(/\s+/);
        const match = categories.includes(filter);
        card.classList.toggle("is-hidden", !match);
    });
}

function initSkillFilters() {
    if (!filterButtons.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("is-active"));
            button.classList.add("is-active");
            filterSkills(button.dataset.filter || "all");
        });
    });
}

function initRevealOnScroll() {
    if (!revealElements.length) return;

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el, index) => {
        el.style.transitionDelay = `${Math.min(index * 60, 260)}ms`;
        observer.observe(el);
    });
}

function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;
            const target = document.querySelector(targetId);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function init() {
    initLanguage();
    initTheme();
    initSkillFilters();
    initRevealOnScroll();
    initSmoothAnchors();
    filterSkills("all");
}

document.addEventListener("DOMContentLoaded", init);
