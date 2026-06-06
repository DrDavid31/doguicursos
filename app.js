const plans = {
  basic: {
    name: "DOGUI Awareness Basico",
    shortName: "Basico",
    tag: "Curso inicial",
    className: "basic",
    summary: "Para empresas que quieren capacitar a todo el personal por primera vez.",
    features: [
      "Curso basico para todos los empleados",
      "Evaluacion final de 5 a 10 preguntas",
      "Calificacion por empleado",
      "Reconocimiento PDF al finalizar",
      "Reporte basico para la empresa"
    ],
    recommendations: [
      "Cerrar la capacitacion inicial del 100% del personal.",
      "Reforzar phishing, contrasenas y reporte de incidentes.",
      "Activar MFA en cuentas corporativas prioritarias."
    ]
  },
  professional: {
    name: "DOGUI Awareness Profesional",
    shortName: "Profesional",
    tag: "Capacitacion continua",
    className: "professional",
    summary: "Para empresas que quieren cursos por area, microcursos mensuales y medicion por equipo.",
    features: [
      "Todo lo incluido en Basico",
      "Cursos para Finanzas, RH, Direccion y TI",
      "Microcursos mensuales de 10 a 15 minutos",
      "Score por empleado y por area",
      "Reporte mensual con recomendaciones"
    ],
    recommendations: [
      "Asignar rutas por area para reducir riesgos especificos.",
      "Programar microcursos mensuales de refuerzo.",
      "Comparar score por area contra el mes anterior."
    ]
  },
  enterprise: {
    name: "DOGUI Awareness Enterprise",
    shortName: "Enterprise",
    tag: "Medicion avanzada",
    className: "enterprise",
    summary: "Para empresas que quieren simulaciones de phishing, dashboard ejecutivo y plan de mejora.",
    features: [
      "Todo lo incluido en Profesional",
      "Simulaciones de phishing autorizadas",
      "Medicion de aperturas, clics, reportes y datos de prueba",
      "Dashboard ejecutivo de riesgo",
      "Reporte mensual avanzado y plan de mejora"
    ],
    recommendations: [
      "Ejecutar simulaciones controladas despues de cada bloque.",
      "Priorizar areas con mayor clic o menor reporte.",
      "Revisar pagos urgentes, validacion bancaria y cuentas criticas."
    ]
  }
};

const areas = {
  general: "General",
  finance: "Finanzas y Administracion",
  hr: "Recursos Humanos",
  direction: "Direccion",
  it: "TI"
};

const courses = [
  {
    id: "basic-course",
    title: "Curso basico para todos los empleados",
    audience: "general",
    duration: "60 min",
    type: "Entrada",
    plans: ["basic", "professional", "enterprise"],
    topics: [
      "Que es la ciberseguridad",
      "Phishing y correos falsos",
      "Fraudes por WhatsApp",
      "Contrasenas seguras",
      "Autenticacion multifactor",
      "Uso seguro del correo corporativo",
      "Archivos y links sospechosos",
      "Proteccion de informacion sensible",
      "Buenas practicas en redes sociales",
      "Que hacer ante un incidente"
    ]
  },
  {
    id: "finance-course",
    title: "Ruta para Finanzas y Administracion",
    audience: "finance",
    duration: "35 min",
    type: "Por area",
    plans: ["professional", "enterprise"],
    topics: [
      "Fraude de transferencias",
      "Facturas falsas",
      "Suplantacion de proveedores",
      "Correos del director",
      "Solicitudes urgentes de pago",
      "Validacion de cuentas bancarias"
    ]
  },
  {
    id: "hr-course",
    title: "Ruta para Recursos Humanos",
    audience: "hr",
    duration: "30 min",
    type: "Por area",
    plans: ["professional", "enterprise"],
    topics: [
      "CVs maliciosos",
      "Documentos falsos",
      "Robo de datos personales",
      "Ofertas laborales falsas",
      "Ingenieria social a candidatos"
    ]
  },
  {
    id: "direction-course",
    title: "Ruta para Direccion",
    audience: "direction",
    duration: "30 min",
    type: "Por area",
    plans: ["professional", "enterprise"],
    topics: [
      "Fraude CEO",
      "Deepfakes",
      "Robo de identidad",
      "Proteccion de cuentas criticas",
      "Viajes y dispositivos",
      "Toma de decisiones ante incidentes"
    ]
  },
  {
    id: "it-course",
    title: "Ruta para TI",
    audience: "it",
    duration: "40 min",
    type: "Por area",
    plans: ["professional", "enterprise"],
    topics: [
      "Gestion de accesos",
      "Hardening basico",
      "MFA",
      "Manejo de incidentes",
      "Respuesta inicial",
      "Respaldo y ransomware"
    ]
  },
  {
    id: "monthly-course",
    title: "Microcursos mensuales",
    audience: "general",
    duration: "10-15 min",
    type: "Mensual",
    plans: ["professional", "enterprise"],
    topics: [
      "Como detectar un correo falso",
      "Como identificar un link sospechoso",
      "Que hacer si recibes un WhatsApp extrano",
      "Como crear contrasenas seguras",
      "Que es MFA y por que importa",
      "Como evitar fraudes con QR",
      "Fraudes con inteligencia artificial",
      "Como reportar un incidente"
    ]
  },
  {
    id: "phishing-course",
    title: "Simulaciones de phishing",
    audience: "general",
    duration: "Campana",
    type: "Medicion",
    plans: ["enterprise"],
    topics: [
      "Factura falsa",
      "Paqueteria falsa",
      "WhatsApp falso de direccion",
      "Cambio de contrasena",
      "Alerta falsa de banco",
      "Documento falso de proveedor"
    ]
  }
];

const questions = [
  {
    text: "Recibes un correo urgente que pide tu contrasena corporativa. Que accion es correcta?",
    options: [
      "Responder para evitar bloqueo de cuenta",
      "Reportarlo y no ingresar credenciales",
      "Reenviarlo a todo el equipo"
    ],
    correct: 1
  },
  {
    text: "Para que sirve MFA?",
    options: [
      "Agregar una segunda verificacion de identidad",
      "Eliminar la necesidad de contrasenas",
      "Permitir que todos usen la misma cuenta"
    ],
    correct: 0
  },
  {
    text: "Un mensaje de WhatsApp pide una transferencia urgente de direccion. Que conviene hacer?",
    options: [
      "Pagar rapido y guardar captura",
      "Validar por un canal oficial antes de actuar",
      "Compartir datos bancarios para confirmar"
    ],
    correct: 1
  },
  {
    text: "Cual es una senal de link sospechoso?",
    options: [
      "Dominio parecido al real pero con letras cambiadas",
      "Que el correo tenga saludo personalizado",
      "Que el link venga en color azul"
    ],
    correct: 0
  },
  {
    text: "Si abriste un archivo sospechoso, que debes hacer?",
    options: [
      "Borrarlo y no avisar para evitar problemas",
      "Reportar de inmediato y seguir el protocolo interno",
      "Mandarlo a otros companeros para revisar"
    ],
    correct: 1
  }
];

const campaigns = [
  {
    id: "invoice",
    name: "Correo falso de factura",
    riskArea: "Finanzas y Administracion",
    base: { opened: 46, clicked: 22, reported: 18, submitted: 5 }
  },
  {
    id: "parcel",
    name: "Correo falso de paqueteria",
    riskArea: "General",
    base: { opened: 54, clicked: 18, reported: 23, submitted: 3 }
  },
  {
    id: "director",
    name: "WhatsApp falso de direccion",
    riskArea: "Direccion",
    base: { opened: 41, clicked: 16, reported: 14, submitted: 4 }
  },
  {
    id: "password",
    name: "Link falso de cambio de contrasena",
    riskArea: "TI",
    base: { opened: 38, clicked: 12, reported: 32, submitted: 2 }
  },
  {
    id: "bank",
    name: "Alerta falsa de banco",
    riskArea: "Finanzas y Administracion",
    base: { opened: 49, clicked: 20, reported: 19, submitted: 6 }
  },
  {
    id: "provider",
    name: "Documento falso de proveedor",
    riskArea: "Administracion",
    base: { opened: 44, clicked: 21, reported: 15, submitted: 5 }
  }
];

const integrationTools = [
  {
    id: "moodle",
    name: "Moodle",
    product: "Dogui Cyber Academy",
    role: "Base principal LMS",
    status: "Base recomendada",
    icon: "school",
    repo: "https://github.com/moodle/moodle",
    site: "https://moodle.org/",
    summary:
      "Motor para cursos por empresa, usuarios por cliente, evaluaciones, certificados, avance por empleado y reportes para RH o TI.",
    features: [
      "Cursos y modulos por empresa",
      "Usuarios por cliente y area",
      "Cuestionarios, avance y certificados",
      "Reportes para administradores"
    ],
    doguiUse:
      "Usarlo como backend LMS cuando DOGUI deje de ser una demo estatica y necesite usuarios reales, roles, grupos y calificaciones centralizadas."
  },
  {
    id: "gophish",
    name: "Gophish",
    product: "Dogui Phishing Awareness",
    role: "Phishing simulado",
    status: "Modulo adicional",
    icon: "mail-warning",
    repo: "https://github.com/gophish/gophish",
    site: "https://getgophish.com/",
    summary:
      "Toolkit open source para ejecutar campanas de phishing educativo, plantillas, landing pages y resultados en tiempo real.",
    features: [
      "Plantillas de correo",
      "Landing pages educativas",
      "Metricas de apertura, clic y datos de prueba",
      "Reportes ejecutivos por campana"
    ],
    doguiUse:
      "Conectarlo al panel Enterprise para lanzar campanas autorizadas y traer metricas al reporte mensual de DOGUI."
  },
  {
    id: "security-shepherd",
    name: "OWASP Security Shepherd",
    product: "Dogui Cyber Labs",
    role: "Laboratorios tecnicos",
    status: "Premium tecnico",
    icon: "shield-check",
    repo: "https://github.com/OWASP/SecurityShepherd",
    site: "https://owasp.org/www-project-security-shepherd/",
    summary:
      "Plataforma de entrenamiento para seguridad web y movil, util para awareness tecnico, AppSec y practicas de pentesting.",
    features: [
      "OWASP Top 10",
      "SQL Injection y XSS",
      "Autenticacion y control de acceso",
      "Retos practicos para TI y desarrollo"
    ],
    doguiUse:
      "Ofrecerlo como paquete premium para clientes con areas de TI, desarrollo, soporte tecnico o seguridad interna."
  },
  {
    id: "juice-shop",
    name: "OWASP Juice Shop",
    product: "Dogui Cyber Labs",
    role: "Laboratorio OWASP Top 10",
    status: "Practica guiada",
    icon: "flask-conical",
    repo: "https://github.com/juice-shop/juice-shop",
    site: "https://owasp-juice.shop/",
    summary:
      "Aplicacion vulnerable controlada para entrenamientos, demostraciones, CTFs y practicas sobre vulnerabilidades reales.",
    features: [
      "Cursos practicos de OWASP Top 10",
      "Demos de vulnerabilidades",
      "Retos de seguridad aplicativa",
      "Practica segura en entorno controlado"
    ],
    doguiUse:
      "Integrarlo como laboratorio guiado para desarrolladores y equipos tecnicos que necesitan aprender con ejercicios reales."
  },
  {
    id: "juice-shop-ctf",
    name: "Juice Shop CTF Extension",
    product: "Dogui CTF Empresarial",
    role: "Eventos CTF",
    status: "Competencias tecnicas",
    icon: "flag",
    repo: "https://github.com/juice-shop/juice-shop-ctf",
    site: "https://owasp-juice.shop/",
    summary:
      "Herramienta para exportar retos de Juice Shop a frameworks CTF como CTFd, RootTheBox o FBCTF.",
    features: [
      "Eventos CTF empresariales",
      "Retos importables",
      "Marcadores y competencia por equipos",
      "Extension para programas avanzados"
    ],
    doguiUse:
      "Usarlo para vender torneos internos de ciberseguridad, semanas de awareness o capacitacion avanzada para desarrollo."
  }
];

const productRoute = [
  {
    name: "Dogui Cyber Academy",
    base: "Moodle",
    description: "Cursos, usuarios, evaluaciones, certificados, avance y reportes."
  },
  {
    name: "Dogui Phishing Awareness",
    base: "Gophish",
    description: "Campanas simuladas, plantillas, landing pages educativas y metricas."
  },
  {
    name: "Dogui Cyber Labs",
    base: "OWASP Security Shepherd + Juice Shop",
    description: "Laboratorios para OWASP Top 10, AppSec, pentesting y desarrollo seguro."
  },
  {
    name: "Dogui CTF Empresarial",
    base: "Juice Shop CTF Extension",
    description: "Eventos tipo CTF para equipos tecnicos con retos y tableros."
  }
];

const starterCourses = [
  "Fundamentos de ciberseguridad para empleados",
  "Phishing y correos sospechosos",
  "Contrasenas y MFA",
  "Uso seguro de WhatsApp, correo y nube",
  "Ingenieria social",
  "Proteccion de informacion confidencial",
  "Seguridad en home office",
  "Manejo de incidentes: que hacer si das clic",
  "Buenas practicas para directivos",
  "Curso express para nuevos ingresos"
];

const defaultState = {
  selectedPlan: "professional",
  activeAudience: "all",
  courseSearch: "",
  company: "Empresa Demo",
  employee: "Nombre del empleado",
  area: "finance",
  courseId: "finance-course",
  activeLessonIndex: 0,
  courseProgress: {},
  customCourses: [],
  courseDraft: { lessons: [], quiz: [] },
  connection: {
    mode: "local",
    apiUrl: "",
    tenant: "empresa-demo",
    token: "",
    lastSync: null
  },
  employees: 50,
  trained: 43,
  approved: 37,
  completed: false,
  answers: {},
  score: null,
  passed: false,
  campaignId: "invoice",
  simulation: { opened: 46, clicked: 22, reported: 18, submitted: 5, riskArea: "Finanzas y Administracion" }
};

const courseContent = window.DOGUI_COURSE_CONTENT || {};

let state = loadState();
let iconRenderQueued = false;

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  renderAll();
  bindEvents();
});

function bindElements() {
  [
    "planSelect",
    "planCards",
    "courseGrid",
    "courseSearch",
    "catalogCount",
    "audienceTabs",
    "learningCourseTitle",
    "learningCourseOverview",
    "courseProgressBar",
    "courseProgressText",
    "lessonList",
    "lessonCounter",
    "lessonDuration",
    "lessonStatus",
    "lessonTitle",
    "lessonBody",
    "lessonScenario",
    "lessonActions",
    "lessonTakeaways",
    "prevLessonBtn",
    "completeLessonBtn",
    "nextLessonBtn",
    "companyInput",
    "employeeInput",
    "areaSelect",
    "courseSelect",
    "employeesInput",
    "completeCourseBtn",
    "courseStatus",
    "questionList",
    "gradeQuizBtn",
    "resetDemoBtn",
    "scoreBox",
    "certEmployee",
    "certCourse",
    "certCompany",
    "certScore",
    "certFolio",
    "certificateMessage",
    "downloadCertificateBtn",
    "campaignSelect",
    "runSimulationBtn",
    "openedMetric",
    "clickedMetric",
    "reportedMetric",
    "submittedMetric",
    "reportSummary",
    "recommendationList",
    "integrationGrid",
    "productRoute",
    "starterCourses",
    "copyIntegrationUrlsBtn",
    "integrationCopyStatus",
    "integrationUrlBox",
    "customCourseForm",
    "customCourseTitle",
    "customCourseArea",
    "customCoursePlan",
    "customCourseDuration",
    "customCourseOverview",
    "customLessonTitle",
    "customLessonBody",
    "addLessonBtn",
    "customLessonList",
    "customQuestionText",
    "customOptionA",
    "customOptionB",
    "customOptionC",
    "customCorrectAnswer",
    "addQuestionBtn",
    "customQuestionList",
    "saveCustomCourseBtn",
    "clearCourseDraftBtn",
    "customCourseStatus",
    "customCoursesList",
    "storageMode",
    "apiBaseUrl",
    "apiTenant",
    "apiToken",
    "lastSync",
    "saveConnectionBtn",
    "testConnectionBtn",
    "pullCoursesBtn",
    "pushCoursesBtn",
    "connectionStatus",
    "metricEmployees",
    "metricTrained",
    "metricApproval",
    "heroActiveCourse",
    "heroConnectionStatus",
    "heroCustomCourses",
    "downloadReportBtn"
  ].forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function bindEvents() {
  elements.planSelect.addEventListener("change", (event) => {
    selectPlan(event.target.value);
  });

  elements.planCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-select-plan]");
    if (!button) return;
    selectPlan(button.dataset.selectPlan);
  });

  elements.audienceTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-audience]");
    if (!button) return;
    state.activeAudience = button.dataset.audience;
    saveState();
    renderCourses();
    renderTabs();
  });

  elements.courseSearch.addEventListener("input", (event) => {
    state.courseSearch = event.target.value;
    saveState();
    renderCourses();
  });

  elements.courseGrid.addEventListener("click", (event) => {
    const startButton = event.target.closest("[data-start-course]");
    if (startButton) {
      startCourse(startButton.dataset.startCourse, true);
      return;
    }

    const planButton = event.target.closest("[data-required-plan]");
    if (planButton) {
      selectPlan(planButton.dataset.requiredPlan);
    }
  });

  ["companyInput", "employeeInput", "areaSelect", "courseSelect", "employeesInput"].forEach((id) => {
    elements[id].addEventListener("input", syncFormState);
    elements[id].addEventListener("change", syncFormState);
  });

  elements.completeCourseBtn.addEventListener("click", () => {
    startCourse(state.courseId, true);
  });

  elements.lessonList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson-index]");
    if (!button) return;
    state.activeLessonIndex = Number(button.dataset.lessonIndex);
    saveState();
    renderLearning();
  });

  elements.prevLessonBtn.addEventListener("click", () => {
    state.activeLessonIndex = clamp(state.activeLessonIndex - 1, 0, getSelectedLessons().length - 1);
    saveState();
    renderLearning();
  });

  elements.nextLessonBtn.addEventListener("click", () => {
    state.activeLessonIndex = clamp(state.activeLessonIndex + 1, 0, getSelectedLessons().length - 1);
    saveState();
    renderLearning();
  });

  elements.completeLessonBtn.addEventListener("click", completeCurrentLesson);

  elements.questionList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-question]");
    if (!button) return;
    state.answers[button.dataset.question] = Number(button.dataset.answer);
    saveState();
    renderQuestions();
  });

  elements.gradeQuizBtn.addEventListener("click", gradeQuiz);
  elements.resetDemoBtn.addEventListener("click", resetDemo);
  elements.downloadCertificateBtn.addEventListener("click", downloadCertificatePdf);
  elements.downloadReportBtn.addEventListener("click", downloadReportPdf);
  elements.copyIntegrationUrlsBtn.addEventListener("click", copyIntegrationUrls);
  elements.addLessonBtn.addEventListener("click", addDraftLesson);
  elements.addQuestionBtn.addEventListener("click", addDraftQuestion);
  elements.saveCustomCourseBtn.addEventListener("click", saveCustomCourse);
  elements.clearCourseDraftBtn.addEventListener("click", clearCourseDraft);
  elements.saveConnectionBtn.addEventListener("click", saveConnectionConfig);
  elements.testConnectionBtn.addEventListener("click", testConnection);
  elements.pullCoursesBtn.addEventListener("click", pullCoursesFromRemote);
  elements.pushCoursesBtn.addEventListener("click", () => pushCoursesToRemote({ silent: false }));
  elements.customCoursesList.addEventListener("click", (event) => {
    const startButton = event.target.closest("[data-start-course]");
    if (startButton) {
      startCourse(startButton.dataset.startCourse, true);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-course]");
    if (deleteButton) {
      deleteCustomCourse(deleteButton.dataset.deleteCourse);
    }
  });

  elements.campaignSelect.addEventListener("change", (event) => {
    state.campaignId = event.target.value;
    const selected = campaigns.find((campaign) => campaign.id === state.campaignId);
    state.simulation = { ...selected.base, riskArea: selected.riskArea };
    saveState();
    renderSimulation();
    renderReport();
  });

  elements.runSimulationBtn.addEventListener("click", runSimulation);
}

function renderAll() {
  renderPlanSelect();
  renderPlans();
  renderTabs();
  renderForm();
  renderCourseBuilder();
  renderConnection();
  renderCourses();
  renderLearning();
  renderTraining();
  renderCertificate();
  renderCampaignSelect();
  renderSimulation();
  renderReport();
  renderIntegrations();
  renderOverview();
  renderIcons();
}

function renderPlanSelect() {
  elements.planSelect.innerHTML = Object.entries(plans)
    .map(([id, plan]) => `<option value="${id}">${escapeHtml(plan.shortName)}</option>`)
    .join("");
  elements.planSelect.value = state.selectedPlan;
}

function renderPlans() {
  elements.planCards.innerHTML = Object.entries(plans)
    .map(([id, plan]) => {
      const isActive = id === state.selectedPlan;
      const features = plan.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");
      return `
        <article class="plan-card ${plan.className}${isActive ? " active" : ""}">
          <div class="plan-top">
            <span class="plan-tag">${escapeHtml(plan.tag)}</span>
            <strong class="plan-name">${escapeHtml(plan.name)}</strong>
            <p class="plan-intro">${escapeHtml(plan.summary)}</p>
          </div>
          <ul class="feature-list">${features}</ul>
          <button class="button ${isActive ? "primary" : "ghost"}" type="button" data-select-plan="${id}">
            <i data-lucide="${isActive ? "check" : "plus"}" aria-hidden="true"></i>
            ${isActive ? "Plan activo" : "Seleccionar"}
          </button>
        </article>
      `;
    })
    .join("");
  renderIcons();
}

function renderTabs() {
  elements.audienceTabs.querySelectorAll("[data-audience]").forEach((button) => {
    button.classList.toggle("active", button.dataset.audience === state.activeAudience);
  });
}

function renderCourses() {
  elements.courseSearch.value = state.courseSearch || "";
  const query = normalizeSearch(state.courseSearch || "");
  const filtered = getAllCourses().filter((course) => {
    const audienceMatch =
      state.activeAudience === "all" ||
      (state.activeAudience === "custom" && Boolean(course.custom)) ||
      course.audience === state.activeAudience;
    if (!audienceMatch) return false;
    if (!query) return true;
    return getCourseSearchText(course).includes(query);
  });

  elements.catalogCount.textContent = `${filtered.length} ${filtered.length === 1 ? "curso visible" : "cursos visibles"}`;

  if (!filtered.length) {
    elements.courseGrid.innerHTML = `
      <article class="empty-catalog">
        <i data-lucide="search-x" aria-hidden="true"></i>
        <strong>No encontramos cursos con ese filtro.</strong>
        <span>Cambia el texto de busqueda o selecciona otra area.</span>
      </article>
    `;
    renderIcons();
    return;
  }

  elements.courseGrid.innerHTML = filtered
    .map((course) => {
      const included = course.plans.includes(state.selectedPlan);
      const progress = getCourseProgressPercent(course.id);
      const lessons = getCourseLessons(course.id);
      const topics = course.topics.slice(0, 6).map((topic) => `<li>${escapeHtml(topic)}</li>`).join("");
      const requiredPlan = course.plans.includes("professional") ? "professional" : "enterprise";
      const action = included
        ? `
          <button class="button primary full" type="button" data-start-course="${course.id}">
            <i data-lucide="${progress > 0 ? "play" : "book-open"}" aria-hidden="true"></i>
            ${progress > 0 ? "Continuar curso" : "Iniciar curso"}
          </button>
        `
        : `
          <button class="button ghost full" type="button" data-required-plan="${requiredPlan}">
            <i data-lucide="lock" aria-hidden="true"></i>
            Activar ${plans[requiredPlan].shortName}
          </button>
        `;
      return `
        <article class="course-card${included ? "" : " locked"}">
          <div>
            <div class="course-meta">
              <span class="pill">${escapeHtml(course.type)}</span>
              <span class="pill">${escapeHtml(course.duration)}</span>
              <span class="pill">${lessons.length} lecciones</span>
              ${course.custom ? '<span class="pill warn">Propio</span>' : ""}
              <span class="pill ${included ? "" : "lock"}">${included ? "Incluido" : "No incluido"}</span>
            </div>
          </div>
          <h3>${escapeHtml(course.title)}</h3>
          <ul class="topic-list">${topics}</ul>
          <div class="mini-progress" aria-label="Avance del curso">
            <span style="width: ${progress}%"></span>
          </div>
          <strong class="course-progress-label">${progress}% completado</strong>
          ${action}
        </article>
      `;
    })
    .join("");
  renderIcons();
}

function renderLearning() {
  const course = getSelectedCourse();
  const content = getCourseContent(course.id);
  const lessons = getCourseLessons(course.id);
  const progress = ensureCourseProgress(course.id);
  state.activeLessonIndex = clamp(state.activeLessonIndex || 0, 0, lessons.length - 1);
  const lesson = lessons[state.activeLessonIndex];
  const isCompleted = progress.completedLessons.includes(state.activeLessonIndex);
  const percent = getCourseProgressPercent(course.id);

  elements.learningCourseTitle.textContent = course.title;
  elements.learningCourseOverview.textContent = content.overview || "Curso DOGUI Awareness.";
  elements.courseProgressBar.style.width = `${percent}%`;
  elements.courseProgressText.textContent = `${percent}% completado`;

  elements.lessonList.innerHTML = lessons
    .map((item, index) => {
      const done = progress.completedLessons.includes(index);
      const active = index === state.activeLessonIndex;
      return `
        <button class="lesson-nav-item${active ? " active" : ""}${done ? " done" : ""}" type="button" data-lesson-index="${index}">
          <span>${done ? "OK" : String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.duration || "Leccion")}</small>
        </button>
      `;
    })
    .join("");

  elements.lessonCounter.textContent = `Leccion ${state.activeLessonIndex + 1} de ${lessons.length}`;
  elements.lessonDuration.textContent = lesson.duration || course.duration;
  elements.lessonStatus.textContent = isCompleted ? "Completada" : "Pendiente";
  elements.lessonStatus.classList.toggle("complete", isCompleted);
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonBody.textContent = lesson.body;
  elements.lessonScenario.textContent = lesson.scenario || "Aplica este tema a una situacion real de tu empresa.";
  elements.lessonActions.innerHTML = (lesson.actions || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  elements.lessonTakeaways.innerHTML = (lesson.takeaways || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  elements.prevLessonBtn.disabled = state.activeLessonIndex === 0;
  elements.nextLessonBtn.disabled = state.activeLessonIndex === lessons.length - 1;
  elements.completeLessonBtn.disabled = isCompleted;
  elements.completeLessonBtn.innerHTML = `
    <i data-lucide="${isCompleted ? "check" : "check-circle"}" aria-hidden="true"></i>
    ${isCompleted ? "Leccion completada" : "Completar leccion"}
  `;

  renderIcons();
}

function renderForm() {
  elements.companyInput.value = state.company;
  elements.employeeInput.value = state.employee;
  elements.employeesInput.value = state.employees;

  elements.areaSelect.innerHTML = Object.entries(areas)
    .map(([id, area]) => `<option value="${id}">${escapeHtml(area)}</option>`)
    .join("");
  elements.areaSelect.value = state.area;
  elements.customCourseArea.innerHTML = Object.entries(areas)
    .map(([id, area]) => `<option value="${id}">${escapeHtml(area)}</option>`)
    .join("");

  renderCourseSelect();
}

function renderCourseSelect() {
  const available = getAvailableCourses();
  if (!available.some((course) => course.id === state.courseId)) {
    state.courseId = available[0].id;
    state.activeLessonIndex = getNextLessonIndex(state.courseId);
    state.completed = false;
    state.answers = {};
    state.score = null;
    state.passed = false;
  }

  elements.courseSelect.innerHTML = available
    .map((course) => `<option value="${course.id}">${escapeHtml(course.title)}</option>`)
    .join("");
  elements.courseSelect.value = state.courseId;
}

function renderTraining() {
  const selectedCourse = getSelectedCourse();
  const percent = getCourseProgressPercent(selectedCourse.id);
  const complete = isCourseComplete(selectedCourse.id);
  state.completed = complete;
  elements.courseStatus.textContent = complete
    ? `Curso completado: ${selectedCourse.title}`
    : `Curso asignado: ${selectedCourse.title} (${percent}% completado)`;
  elements.gradeQuizBtn.disabled = !complete;
  renderQuestions();
  renderScore();
}

function renderQuestions() {
  const activeQuestions = getActiveQuizQuestions();
  const locked = !isCourseComplete(state.courseId);
  elements.questionList.innerHTML = activeQuestions
    .map((question, questionIndex) => {
      const options = question.options
        .map((option, optionIndex) => {
          const selected = state.answers[questionIndex] === optionIndex;
          return `
            <button class="${selected ? "selected" : ""}" type="button" data-question="${questionIndex}" data-answer="${optionIndex}" ${locked ? "disabled" : ""}>
              ${escapeHtml(option)}
            </button>
          `;
        })
        .join("");
      return `
        <article class="question-item">
          <strong>${questionIndex + 1}. ${escapeHtml(question.text)}</strong>
          <div class="answer-row">${options}</div>
        </article>
      `;
    })
    .join("");
}

function renderScore() {
  const scoreBox = elements.scoreBox;
  scoreBox.classList.remove("pass", "fail");

  if (!isCourseComplete(state.courseId)) {
    scoreBox.innerHTML = `
      <strong>Curso en progreso</strong>
      <span>Completa todas las lecciones del aula para desbloquear la evaluacion.</span>
    `;
    renderCertificate();
    return;
  }

  if (state.score === null) {
    scoreBox.innerHTML = `
      <strong>Sin calificacion</strong>
      <span>Curso completado. Responde la evaluacion para liberar el reconocimiento.</span>
    `;
    renderCertificate();
    return;
  }

  scoreBox.classList.add(state.passed ? "pass" : "fail");
  scoreBox.innerHTML = `
    <strong>${state.score}%</strong>
    <span>${state.passed ? "Aprobado. Reconocimiento disponible." : "No aprobado. Refuerza el curso y vuelve a calificar."}</span>
  `;
  renderCertificate();
}

function renderCertificate() {
  const course = getSelectedCourse();
  const folio = getFolio();
  const canIssue = state.passed && isCourseComplete(course.id);
  elements.certEmployee.textContent = state.employee || "Empleado";
  elements.certCourse.textContent = course.title;
  elements.certCompany.textContent = state.company || "Empresa";
  elements.certScore.textContent = state.score === null ? "Calificacion pendiente" : `Calificacion ${state.score}%`;
  elements.certFolio.textContent = folio;

  elements.downloadCertificateBtn.disabled = !canIssue;
  elements.certificateMessage.textContent = canIssue
    ? `Reconocimiento listo para ${state.employee || "el empleado"}.`
    : "El reconocimiento se activa al completar el curso y aprobar con 80% o mas.";
}

function renderCampaignSelect() {
  elements.campaignSelect.innerHTML = campaigns
    .map((campaign) => `<option value="${campaign.id}">${escapeHtml(campaign.name)}</option>`)
    .join("");
  elements.campaignSelect.value = state.campaignId;
}

function renderSimulation() {
  const isEnterprise = state.selectedPlan === "enterprise";
  elements.runSimulationBtn.disabled = !isEnterprise;
  elements.campaignSelect.disabled = !isEnterprise;
  elements.openedMetric.textContent = `${state.simulation.opened}%`;
  elements.clickedMetric.textContent = `${state.simulation.clicked}%`;
  elements.reportedMetric.textContent = `${state.simulation.reported}%`;
  elements.submittedMetric.textContent = `${state.simulation.submitted}%`;
}

function renderReport() {
  const trainedPct = percentage(state.trained, state.employees);
  const approvalPct = percentage(state.approved, Math.max(state.trained, 1));
  const course = getSelectedCourse();
  const courseProgress = getCourseProgressPercent(course.id);
  const plan = plans[state.selectedPlan];
  const simulationText =
    state.selectedPlan === "enterprise"
      ? `La simulacion activa presenta una tasa de clic del ${state.simulation.clicked}% y un reporte del ${state.simulation.reported}%.`
      : "Las simulaciones avanzadas se activan en el plan Enterprise.";

  elements.reportSummary.innerHTML = `
    <div class="summary-card">
      <strong>${escapeHtml(state.company)}</strong><br />
      Durante el mes se capacito al ${trainedPct}% del personal. La aprobacion actual es de ${approvalPct}% y el curso activo es ${escapeHtml(course.title)} con ${courseProgress}% de avance.
      ${escapeHtml(simulationText)}
    </div>
    <div class="summary-card">
      <strong>Area con mayor riesgo:</strong> ${escapeHtml(state.simulation.riskArea)}<br />
      <strong>Plan activo:</strong> ${escapeHtml(plan.name)}
    </div>
  `;

  elements.recommendationList.innerHTML = plan.recommendations
    .map((recommendation) => `<article>${escapeHtml(recommendation)}</article>`)
    .join("");
}

function renderIntegrations() {
  elements.integrationGrid.innerHTML = integrationTools
    .map((tool) => {
      const features = tool.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");
      return `
        <article class="integration-card">
          <div class="integration-card-top">
            <span class="integration-icon"><i data-lucide="${tool.icon}" aria-hidden="true"></i></span>
            <div>
              <span class="plan-tag">${escapeHtml(tool.status)}</span>
              <h3>${escapeHtml(tool.name)}</h3>
              <p>${escapeHtml(tool.role)} para ${escapeHtml(tool.product)}</p>
            </div>
          </div>

          <p class="integration-summary-text">${escapeHtml(tool.summary)}</p>

          <ul class="topic-list">${features}</ul>

          <div class="dogui-use">
            <strong>Uso en DOGUI</strong>
            <span>${escapeHtml(tool.doguiUse)}</span>
          </div>

          <div class="integration-actions">
            <a class="button ghost" href="${tool.repo}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="github" aria-hidden="true"></i>
              GitHub
            </a>
            <a class="button primary" href="${tool.site}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="external-link" aria-hidden="true"></i>
              Sitio
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  elements.productRoute.innerHTML = productRoute
    .map(
      (item, index) => `
        <article class="route-item">
          <span>${index + 1}</span>
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <small>Base: ${escapeHtml(item.base)}</small>
            <p>${escapeHtml(item.description)}</p>
          </div>
        </article>
      `
    )
    .join("");

  elements.starterCourses.innerHTML = starterCourses
    .map((course) => `<article>${escapeHtml(course)}</article>`)
    .join("");

  renderIcons();
}

function renderOverview() {
  const selectedCourse = getSelectedCourse();
  elements.metricEmployees.textContent = Number(state.employees).toLocaleString("es-MX");
  elements.metricTrained.textContent = `${percentage(state.trained, state.employees)}%`;
  elements.metricApproval.textContent = `${percentage(state.approved, Math.max(state.trained, 1))}%`;
  elements.heroActiveCourse.textContent = selectedCourse?.title || "Sin curso";
  elements.heroConnectionStatus.textContent = isRemoteEnabled() ? "API remota" : "Local";
  elements.heroCustomCourses.textContent = String(state.customCourses.length);
}

function syncFormState() {
  const previousCourseId = state.courseId;
  state.company = elements.companyInput.value.trim() || "Empresa Demo";
  state.employee = elements.employeeInput.value.trim() || "Nombre del empleado";
  state.area = elements.areaSelect.value;
  state.courseId = elements.courseSelect.value;
  if (state.courseId !== previousCourseId) {
    state.activeLessonIndex = getNextLessonIndex(state.courseId);
    state.answers = {};
    state.score = null;
    state.passed = false;
    state.completed = isCourseComplete(state.courseId);
  }
  state.employees = clamp(Number(elements.employeesInput.value) || 1, 1, 5000);
  state.trained = clamp(state.trained, 0, state.employees);
  state.approved = clamp(state.approved, 0, state.trained);
  saveState();
  renderCourses();
  renderLearning();
  renderTraining();
  renderCertificate();
  renderOverview();
  renderReport();
}

function selectPlan(planId) {
  if (!plans[planId]) return;
  state.selectedPlan = planId;
  state.answers = {};
  state.score = null;
  state.passed = false;
  state.completed = false;
  renderCourseSelect();
  state.completed = isCourseComplete(state.courseId);
  saveState();
  renderPlanSelect();
  renderPlans();
  renderCourses();
  renderLearning();
  renderTraining();
  renderSimulation();
  renderReport();
  renderCertificate();
}

function gradeQuiz() {
  const activeQuestions = getActiveQuizQuestions();
  if (!isCourseComplete(state.courseId)) {
    elements.scoreBox.classList.remove("pass", "fail");
    elements.scoreBox.innerHTML = `
      <strong>Curso en progreso</strong>
      <span>Completa todas las lecciones antes de calificar.</span>
    `;
    return;
  }

  const answered = Object.keys(state.answers).length;
  if (answered < activeQuestions.length) {
    elements.scoreBox.classList.remove("pass", "fail");
    elements.scoreBox.innerHTML = `
      <strong>Evaluacion incompleta</strong>
      <span>Responde las ${activeQuestions.length} preguntas antes de calificar.</span>
    `;
    return;
  }

  const correct = activeQuestions.reduce((total, question, index) => {
    return total + (state.answers[index] === question.correct ? 1 : 0);
  }, 0);

  state.score = Math.round((correct / activeQuestions.length) * 100);
  state.passed = state.score >= 80;
  state.completed = true;
  if (state.passed) {
    state.trained = clamp(Math.max(state.trained, Math.round(state.employees * 0.86)), 1, state.employees);
    state.approved = clamp(Math.max(state.approved, Math.round(state.trained * 0.91)), 0, state.trained);
  }
  saveState();
  renderTraining();
  renderOverview();
  renderReport();
}

function runSimulation() {
  if (state.selectedPlan !== "enterprise") return;
  const selected = campaigns.find((campaign) => campaign.id === state.campaignId);
  const variation = () => Math.floor(Math.random() * 9) - 4;
  state.simulation = {
    opened: clamp(selected.base.opened + variation(), 10, 75),
    clicked: clamp(selected.base.clicked + variation(), 2, 42),
    reported: clamp(selected.base.reported + variation(), 4, 58),
    submitted: clamp(selected.base.submitted + Math.floor(Math.random() * 5) - 2, 0, 18),
    riskArea: selected.riskArea
  };
  saveState();
  renderSimulation();
  renderReport();
}

function resetDemo() {
  const customCourses = structuredClone(state.customCourses || []);
  const courseDraft = structuredClone(ensureCourseDraft());
  state = structuredClone(defaultState);
  state.customCourses = customCourses;
  state.courseDraft = courseDraft;
  saveState();
  renderAll();
}

function renderCourseBuilder() {
  const draft = ensureCourseDraft();
  elements.customLessonList.innerHTML = draft.lessons.length
    ? draft.lessons
        .map(
          (lesson, index) => `
            <article class="draft-item">
              <span>${index + 1}</span>
              <div>
                <strong>${escapeHtml(lesson.title)}</strong>
                <p>${escapeHtml(lesson.body.slice(0, 120))}${lesson.body.length > 120 ? "..." : ""}</p>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="empty-state">Aun no agregas lecciones.</p>';

  elements.customQuestionList.innerHTML = draft.quiz.length
    ? draft.quiz
        .map(
          (question, index) => `
            <article class="draft-item">
              <span>${index + 1}</span>
              <div>
                <strong>${escapeHtml(question.text)}</strong>
                <p>Correcta: ${escapeHtml(question.options[question.correct])}</p>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="empty-state">Aun no agregas preguntas.</p>';

  elements.customCoursesList.innerHTML = state.customCourses.length
    ? state.customCourses
        .map(
          (course) => `
            <article class="custom-course-item">
              <div>
                <strong>${escapeHtml(course.title)}</strong>
                <span>${escapeHtml(areas[course.audience] || "General")} | ${course.lessons.length} lecciones | ${course.quiz.length} preguntas</span>
              </div>
              <div class="custom-course-actions">
                <button class="button primary" type="button" data-start-course="${course.id}">
                  <i data-lucide="play" aria-hidden="true"></i>
                  Iniciar
                </button>
                <button class="button ghost" type="button" data-delete-course="${course.id}">
                  <i data-lucide="trash-2" aria-hidden="true"></i>
                  Eliminar
                </button>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="empty-state">Cuando guardes cursos propios apareceran aqui y en el catalogo.</p>';

  renderIcons();
}

function addDraftLesson() {
  const title = elements.customLessonTitle.value.trim();
  const body = elements.customLessonBody.value.trim();
  if (!title || !body) {
    setCustomCourseStatus("Escribe titulo y contenido para la leccion.");
    return;
  }

  ensureCourseDraft().lessons.push({
    title,
    duration: "8 min",
    body,
    scenario: "Caso creado por DOGUI para practicar este tema dentro de la empresa.",
    actions: ["Analiza el riesgo", "Aplica el proceso interno", "Reporta dudas o incidentes"],
    takeaways: ["La practica reduce errores", "El criterio del empleado es parte del control"]
  });

  elements.customLessonTitle.value = "";
  elements.customLessonBody.value = "";
  setCustomCourseStatus("Leccion agregada.");
  saveState();
  renderCourseBuilder();
}

function addDraftQuestion() {
  const text = elements.customQuestionText.value.trim();
  const options = [
    elements.customOptionA.value.trim(),
    elements.customOptionB.value.trim(),
    elements.customOptionC.value.trim()
  ];
  const correct = Number(elements.customCorrectAnswer.value);

  if (!text || options.some((option) => !option)) {
    setCustomCourseStatus("Escribe la pregunta y sus 3 opciones.");
    return;
  }

  ensureCourseDraft().quiz.push({ text, options, correct });
  elements.customQuestionText.value = "";
  elements.customOptionA.value = "";
  elements.customOptionB.value = "";
  elements.customOptionC.value = "";
  elements.customCorrectAnswer.value = "0";
  setCustomCourseStatus("Pregunta agregada.");
  saveState();
  renderCourseBuilder();
}

function saveCustomCourse() {
  const title = elements.customCourseTitle.value.trim();
  const audience = elements.customCourseArea.value;
  const planId = elements.customCoursePlan.value;
  const duration = elements.customCourseDuration.value.trim() || "30 min";
  const overview =
    elements.customCourseOverview.value.trim() ||
    "Curso propio creado en DOGUI Awareness para capacitar al personal de la empresa.";
  const draft = ensureCourseDraft();

  if (!title) {
    setCustomCourseStatus("Escribe el nombre del curso.");
    return;
  }

  if (!draft.lessons.length || !draft.quiz.length) {
    setCustomCourseStatus("Agrega al menos una leccion y una pregunta.");
    return;
  }

  const course = {
    id: `custom-${Date.now()}`,
    custom: true,
    title,
    audience,
    duration,
    type: "Propio",
    plans: getPlanAccess(planId),
    topics: draft.lessons.map((lesson) => lesson.title),
    overview,
    lessons: structuredClone(draft.lessons),
    quiz: structuredClone(draft.quiz)
  };

  state.customCourses.push(course);
  state.courseDraft = { lessons: [], quiz: [] };
  state.courseId = course.id;
  state.activeLessonIndex = 0;
  state.answers = {};
  state.score = null;
  state.passed = false;
  state.completed = false;
  if (!course.plans.includes(state.selectedPlan)) {
    state.selectedPlan = planId;
  }

  elements.customCourseTitle.value = "";
  elements.customCourseDuration.value = "";
  elements.customCourseOverview.value = "";
  setCustomCourseStatus("Curso guardado. Ya aparece en Mis cursos y en el aula.");
  saveState();
  renderAll();
  pushCoursesToRemote({ silent: true });
  document.getElementById("aula")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearCourseDraft() {
  state.courseDraft = { lessons: [], quiz: [] };
  elements.customCourseTitle.value = "";
  elements.customCourseDuration.value = "";
  elements.customCourseOverview.value = "";
  elements.customLessonTitle.value = "";
  elements.customLessonBody.value = "";
  elements.customQuestionText.value = "";
  elements.customOptionA.value = "";
  elements.customOptionB.value = "";
  elements.customOptionC.value = "";
  setCustomCourseStatus("Borrador limpio.");
  saveState();
  renderCourseBuilder();
}

function deleteCustomCourse(courseId) {
  state.customCourses = state.customCourses.filter((course) => course.id !== courseId);
  delete state.courseProgress[courseId];
  if (state.courseId === courseId) {
    state.courseId = getAvailableCourses()[0]?.id || "basic-course";
    state.activeLessonIndex = 0;
    state.answers = {};
    state.score = null;
    state.passed = false;
    state.completed = false;
  }
  setCustomCourseStatus("Curso eliminado.");
  saveState();
  renderAll();
  pushCoursesToRemote({ silent: true });
}

function setCustomCourseStatus(message) {
  elements.customCourseStatus.textContent = message;
}

function renderConnection() {
  ensureConnection();
  elements.storageMode.value = state.connection.mode;
  elements.apiBaseUrl.value = state.connection.apiUrl;
  elements.apiTenant.value = state.connection.tenant;
  elements.apiToken.value = state.connection.token;
  elements.lastSync.value = state.connection.lastSync
    ? new Date(state.connection.lastSync).toLocaleString("es-MX")
    : "Sin sincronizar";

  const isApi = isRemoteEnabled();
  elements.testConnectionBtn.disabled = !isApi;
  elements.pullCoursesBtn.disabled = !isApi;
  elements.pushCoursesBtn.disabled = !isApi;
  elements.connectionStatus.textContent = isApi
    ? `API configurada para ${state.connection.tenant}. Cursos propios locales: ${state.customCourses.length}.`
    : `Modo local activo. Cursos propios guardados en este navegador: ${state.customCourses.length}.`;
}

function saveConnectionConfig() {
  state.connection = {
    mode: elements.storageMode.value,
    apiUrl: elements.apiBaseUrl.value.trim(),
    tenant: elements.apiTenant.value.trim() || "empresa-demo",
    token: elements.apiToken.value.trim(),
    lastSync: state.connection?.lastSync || null
  };
  saveState();
  renderConnection();
  renderOverview();
  setConnectionStatus(isRemoteEnabled() ? "Conexion guardada. Puedes probar o sincronizar." : "Modo local guardado.");
}

async function testConnection() {
  saveConnectionConfig();
  if (!isRemoteEnabled()) return;
  setConnectionStatus("Probando conexion...");
  try {
    const response = await fetch(getCoursesEndpoint(), {
      method: "GET",
      headers: getApiHeaders()
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    setConnectionStatus("Conexion correcta. El API respondio.");
  } catch (error) {
    setConnectionStatus(`No se pudo conectar: ${error.message}. Revisa URL, CORS, token o endpoint.`);
  }
}

async function pullCoursesFromRemote() {
  saveConnectionConfig();
  if (!isRemoteEnabled()) return;
  setConnectionStatus("Descargando cursos remotos...");
  try {
    const response = await fetch(getCoursesEndpoint(), {
      method: "GET",
      headers: getApiHeaders()
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    const remoteCourses = Array.isArray(payload) ? payload : payload.courses;
    if (!Array.isArray(remoteCourses)) {
      throw new Error("La respuesta no incluye courses.");
    }

    state.customCourses = normalizeRemoteCourses(remoteCourses);
    state.connection.lastSync = new Date().toISOString();
    if (!getAllCourses().some((course) => course.id === state.courseId)) {
      state.courseId = getAvailableCourses()[0]?.id || "basic-course";
    }
    saveState();
    renderAll();
    setConnectionStatus(`Cursos descargados: ${state.customCourses.length}.`);
  } catch (error) {
    setConnectionStatus(`No se pudieron descargar cursos: ${error.message}.`);
  }
}

async function pushCoursesToRemote({ silent = false } = {}) {
  if (!isRemoteEnabled()) return;
  if (!silent) setConnectionStatus("Subiendo cursos al API...");
  try {
    const body = JSON.stringify({
      tenant: state.connection.tenant,
      courses: state.customCourses,
      updatedAt: new Date().toISOString()
    });
    let response = await fetch(getCoursesEndpoint(), {
      method: "PUT",
      headers: getApiHeaders(),
      body
    });

    if (response.status === 404 || response.status === 405) {
      response = await fetch(getCoursesEndpoint(), {
        method: "POST",
        headers: getApiHeaders(),
        body
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    state.connection.lastSync = new Date().toISOString();
    saveState();
    renderConnection();
    if (!silent) setConnectionStatus(`Cursos subidos: ${state.customCourses.length}.`);
  } catch (error) {
    setConnectionStatus(`No se pudieron subir cursos: ${error.message}.`);
  }
}

function getCoursesEndpoint() {
  const base = state.connection.apiUrl.replace(/\/+$/, "");
  return `${base}/courses?tenant=${encodeURIComponent(state.connection.tenant)}`;
}

function getApiHeaders() {
  const headers = { "Content-Type": "application/json" };
  if (state.connection.token) {
    headers.Authorization = `Bearer ${state.connection.token}`;
  }
  return headers;
}

function isRemoteEnabled() {
  ensureConnection();
  return state.connection.mode === "api" && Boolean(state.connection.apiUrl);
}

function ensureConnection() {
  if (!state.connection) {
    state.connection = structuredClone(defaultState.connection);
  }
  state.connection.mode = state.connection.mode || "local";
  state.connection.apiUrl = state.connection.apiUrl || "";
  state.connection.tenant = state.connection.tenant || "empresa-demo";
  state.connection.token = state.connection.token || "";
  return state.connection;
}

function normalizeRemoteCourses(remoteCourses) {
  return remoteCourses
    .filter((course) => course && course.title)
    .map((course, index) => ({
      id: course.id || `remote-${Date.now()}-${index}`,
      custom: true,
      title: String(course.title),
      audience: areas[course.audience] ? course.audience : "general",
      duration: course.duration || "30 min",
      type: "Propio",
      plans: Array.isArray(course.plans) && course.plans.length ? course.plans : ["professional", "enterprise"],
      topics: Array.isArray(course.topics) && course.topics.length
        ? course.topics
        : (course.lessons || []).map((lesson) => lesson.title).filter(Boolean),
      overview: course.overview || "Curso propio sincronizado desde API.",
      lessons: Array.isArray(course.lessons) && course.lessons.length
        ? course.lessons
        : [
            {
              title: "Leccion inicial",
              duration: "8 min",
              body: "Contenido pendiente por completar.",
              scenario: "Caso pendiente.",
              actions: ["Completar contenido"],
              takeaways: ["Completar aprendizaje"]
            }
          ],
      quiz: Array.isArray(course.quiz) && course.quiz.length
        ? course.quiz
        : [
            {
              text: "Pregunta pendiente por configurar",
              options: ["Opcion A", "Opcion B", "Opcion C"],
              correct: 0
            }
          ]
    }));
}

function setConnectionStatus(message) {
  elements.connectionStatus.textContent = message;
}

function startCourse(courseId, shouldScroll = false) {
  const course = getAllCourses().find((item) => item.id === courseId);
  if (!course || !course.plans.includes(state.selectedPlan)) return;
  state.courseId = courseId;
  state.activeLessonIndex = getNextLessonIndex(courseId);
  state.completed = isCourseComplete(courseId);
  state.answers = {};
  state.score = null;
  state.passed = false;
  ensureCourseProgress(courseId).status = "in-progress";
  saveState();
  renderCourseSelect();
  renderCourses();
  renderLearning();
  renderTraining();
  renderCertificate();
  renderReport();
  if (shouldScroll) {
    document.getElementById("aula")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function completeCurrentLesson() {
  const course = getSelectedCourse();
  const progress = ensureCourseProgress(course.id);
  if (!progress.completedLessons.includes(state.activeLessonIndex)) {
    progress.completedLessons.push(state.activeLessonIndex);
    progress.completedLessons.sort((a, b) => a - b);
  }

  progress.status = isCourseComplete(course.id) ? "completed" : "in-progress";
  progress.updatedAt = new Date().toISOString();
  state.completed = isCourseComplete(course.id);
  if (!state.completed) {
    state.activeLessonIndex = getNextLessonIndex(course.id);
  }

  saveState();
  renderCourses();
  renderLearning();
  renderTraining();
  renderCertificate();
  renderReport();
}

function getAvailableCourses() {
  return getAllCourses().filter((course) => course.plans.includes(state.selectedPlan));
}

function getAllCourses() {
  return [...courses, ...(state.customCourses || [])];
}

function getCourseSearchText(course) {
  return normalizeSearch(
    [
      course.title,
      course.type,
      areas[course.audience],
      ...(course.topics || []),
      ...(getCourseLessons(course.id) || []).map((lesson) => lesson.title)
    ].join(" ")
  );
}

function normalizeSearch(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getSelectedCourse() {
  return getAllCourses().find((course) => course.id === state.courseId) || getAvailableCourses()[0];
}

function ensureCourseDraft() {
  if (!state.courseDraft || !Array.isArray(state.courseDraft.lessons) || !Array.isArray(state.courseDraft.quiz)) {
    state.courseDraft = { lessons: [], quiz: [] };
  }
  return state.courseDraft;
}

function getPlanAccess(planId) {
  if (planId === "basic") return ["basic", "professional", "enterprise"];
  if (planId === "professional") return ["professional", "enterprise"];
  return ["enterprise"];
}

function getCourseContent(courseId) {
  const course = getAllCourses().find((item) => item.id === courseId);
  if (course?.custom) {
    return {
      overview: course.overview,
      lessons: course.lessons,
      quiz: course.quiz
    };
  }
  const content = courseContent[courseId];
  if (content) return content;

  return {
    overview: course ? `Curso enfocado en ${course.title}.` : "Curso DOGUI Awareness.",
    lessons: (course?.topics || []).map((topic) => ({
      title: topic,
      duration: "8 min",
      body: `Aprende a aplicar buenas practicas sobre ${topic.toLowerCase()} en el trabajo diario.`,
      scenario: "Analiza una situacion real y decide como actuar de forma segura.",
      actions: ["Valida el contexto", "Reporta dudas", "Sigue el proceso interno"],
      takeaways: ["La prevencion reduce incidentes", "El reporte oportuno ayuda a todos"]
    })),
    quiz: questions
  };
}

function getCourseLessons(courseId) {
  return getCourseContent(courseId).lessons || [];
}

function getSelectedLessons() {
  return getCourseLessons(getSelectedCourse().id);
}

function getActiveQuizQuestions() {
  return getCourseContent(state.courseId).quiz || questions;
}

function ensureCourseProgress(courseId) {
  if (!state.courseProgress || Array.isArray(state.courseProgress)) {
    state.courseProgress = {};
  }

  if (!state.courseProgress[courseId]) {
    state.courseProgress[courseId] = {
      completedLessons: [],
      status: "not-started",
      updatedAt: null
    };
  }

  if (!Array.isArray(state.courseProgress[courseId].completedLessons)) {
    state.courseProgress[courseId].completedLessons = [];
  }

  return state.courseProgress[courseId];
}

function getCourseProgressPercent(courseId) {
  const lessons = getCourseLessons(courseId);
  if (!lessons.length) return 0;
  const completed = ensureCourseProgress(courseId).completedLessons.filter((index) => index < lessons.length).length;
  return Math.round((completed / lessons.length) * 100);
}

function isCourseComplete(courseId) {
  return getCourseProgressPercent(courseId) === 100;
}

function getNextLessonIndex(courseId) {
  const lessons = getCourseLessons(courseId);
  const progress = ensureCourseProgress(courseId);
  const nextIndex = lessons.findIndex((_, index) => !progress.completedLessons.includes(index));
  return nextIndex === -1 ? Math.max(lessons.length - 1, 0) : nextIndex;
}

function getFolio() {
  const compactName = `${state.employee}-${state.company}-${state.courseId}`
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "")
    .slice(0, 10);
  return `DOGUI-${compactName || "AWARE"}-${state.score || "000"}`;
}

function downloadCertificatePdf() {
  const course = getSelectedCourse();
  if (!state.passed || !isCourseComplete(course.id)) return;
  const lines = [
    { text: "DOGUI Awareness", x: 72, y: 690, size: 24, font: "F2" },
    { text: "Reconocimiento de participacion", x: 72, y: 645, size: 28, font: "F2" },
    { text: "Se otorga a:", x: 72, y: 590, size: 14, font: "F1" },
    { text: state.employee, x: 72, y: 555, size: 24, font: "F2" },
    { text: "Por completar satisfactoriamente el curso:", x: 72, y: 505, size: 14, font: "F1" },
    { text: course.title, x: 72, y: 475, size: 18, font: "F2" },
    { text: `Empresa: ${state.company}`, x: 72, y: 420, size: 13, font: "F1" },
    { text: `Plan: ${plans[state.selectedPlan].name}`, x: 72, y: 398, size: 13, font: "F1" },
    { text: `Calificacion: ${state.score}%`, x: 72, y: 376, size: 13, font: "F1" },
    { text: `Folio: ${getFolio()}`, x: 72, y: 354, size: 13, font: "F1" },
    { text: `Fecha: ${new Date().toLocaleDateString("es-MX")}`, x: 72, y: 332, size: 13, font: "F1" },
    { text: "DOGUI Awareness | Concientizacion en ciberseguridad", x: 72, y: 120, size: 12, font: "F2" }
  ];
  downloadPdf("dogui-awareness-reconocimiento.pdf", buildPdf(lines, "certificate"));
}

function downloadReportPdf() {
  const trainedPct = percentage(state.trained, state.employees);
  const approvalPct = percentage(state.approved, Math.max(state.trained, 1));
  const course = getSelectedCourse();
  const courseProgress = getCourseProgressPercent(course.id);
  const lines = [
    { text: "DOGUI Awareness", x: 72, y: 700, size: 24, font: "F2" },
    { text: "Reporte ejecutivo mensual", x: 72, y: 660, size: 24, font: "F2" },
    { text: `Empresa: ${state.company}`, x: 72, y: 608, size: 13, font: "F1" },
    { text: `Plan activo: ${plans[state.selectedPlan].name}`, x: 72, y: 586, size: 13, font: "F1" },
    { text: `Empleados registrados: ${state.employees}`, x: 72, y: 552, size: 13, font: "F1" },
    { text: `Personal capacitado: ${trainedPct}%`, x: 72, y: 530, size: 13, font: "F1" },
    { text: `Aprobacion: ${approvalPct}%`, x: 72, y: 508, size: 13, font: "F1" },
    { text: `Curso activo: ${course.title}`, x: 72, y: 474, size: 13, font: "F1" },
    { text: `Avance del curso activo: ${courseProgress}%`, x: 72, y: 452, size: 13, font: "F1" },
    { text: `Area con mayor riesgo: ${state.simulation.riskArea}`, x: 72, y: 430, size: 13, font: "F1" },
    { text: `Phishing simulado - apertura ${state.simulation.opened}%, clic ${state.simulation.clicked}%, reporte ${state.simulation.reported}%`, x: 72, y: 408, size: 12, font: "F1" },
    { text: "Recomendaciones:", x: 72, y: 382, size: 15, font: "F2" },
    ...plans[state.selectedPlan].recommendations.map((item, index) => ({
      text: `${index + 1}. ${item}`,
      x: 88,
      y: 354 - index * 24,
      size: 12,
      font: "F1"
    }))
  ];
  downloadPdf("dogui-awareness-reporte-mensual.pdf", buildPdf(lines, "report"));
}

async function copyIntegrationUrls() {
  const urls = integrationTools
    .flatMap((tool) => [
      `${tool.name} GitHub: ${tool.repo}`,
      `${tool.name} sitio oficial: ${tool.site}`
    ])
    .join("\n");

  elements.integrationUrlBox.hidden = true;
  elements.integrationUrlBox.value = urls;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(urls);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = urls;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    elements.integrationCopyStatus.textContent = "URLs copiadas";
  } catch {
    elements.integrationUrlBox.hidden = false;
    elements.integrationUrlBox.focus();
    elements.integrationUrlBox.select();
    elements.integrationCopyStatus.textContent = "URLs listas para copiar";
  }

  setTimeout(() => {
    if (elements.integrationUrlBox.hidden) {
      elements.integrationCopyStatus.textContent = "";
    }
  }, 2800);
}

function buildPdf(lines, variant) {
  const borderColor = variant === "certificate" ? "0.03 0.45 0.40" : "0.15 0.19 0.18";
  const fillColor = variant === "certificate" ? "0.93 0.98 0.96" : "0.96 0.97 0.96";
  const content = [
    `${fillColor} rg 0 0 612 792 re f\n`,
    `${borderColor} RG 2 w 42 42 528 708 re S\n`,
    `0.65 0.78 0.26 rg 72 728 110 8 re f\n`,
    `0.95 0.65 0.21 rg 72 714 70 8 re f\n`,
    ...lines.map((line) => pdfText(line.text, line.x, line.y, line.size, line.font)),
    `0.03 0.45 0.40 rg 448 104 70 70 re f\n`,
    `1 1 1 rg 456 112 14 14 re f 484 112 14 14 re f 502 130 10 10 re f 456 148 18 18 re f 486 152 18 18 re f\n`,
    pdfText("Validacion", 444, 88, 10, "F2")
  ].join("");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>\nendobj\n",
    `4 0 obj\n<< /Length ${content.length} >>\nstream\n${content}\nendstream\nendobj\n`,
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    "6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n"
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object) => {
    offsets.push(pdf.length);
    pdf += object;
  });

  const xrefPosition = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPosition}\n%%EOF`;
  return pdf;
}

function pdfText(text, x, y, size, font) {
  return `0.07 0.13 0.12 rg BT /${font} ${size} Tf ${x} ${y} Td (${escapePdfText(text)}) Tj ET\n`;
}

function escapePdfText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, " ")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .slice(0, 92);
}

function downloadPdf(filename, pdfTextValue) {
  const blob = new Blob([pdfTextValue], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function loadState() {
  try {
    const stored = localStorage.getItem("doguiAwarenessState");
    return normalizeState(stored ? { ...structuredClone(defaultState), ...JSON.parse(stored) } : structuredClone(defaultState));
  } catch {
    return normalizeState(structuredClone(defaultState));
  }
}

function saveState() {
  localStorage.setItem("doguiAwarenessState", JSON.stringify(state));
}

function normalizeState(nextState) {
  if (!Array.isArray(nextState.customCourses)) {
    nextState.customCourses = [];
  }
  if (!nextState.courseDraft || !Array.isArray(nextState.courseDraft.lessons) || !Array.isArray(nextState.courseDraft.quiz)) {
    nextState.courseDraft = { lessons: [], quiz: [] };
  }
  if (!nextState.courseProgress || Array.isArray(nextState.courseProgress)) {
    nextState.courseProgress = {};
  }
  if (!nextState.connection) {
    nextState.connection = structuredClone(defaultState.connection);
  }
  nextState.connection.mode = nextState.connection.mode || "local";
  nextState.connection.apiUrl = nextState.connection.apiUrl || "";
  nextState.connection.tenant = nextState.connection.tenant || "empresa-demo";
  nextState.connection.token = nextState.connection.token || "";
  nextState.connection.lastSync = nextState.connection.lastSync || null;
  return nextState;
}

function percentage(value, total) {
  return Math.round((Number(value) / Math.max(Number(total), 1)) * 100);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderIcons() {
  if (!window.lucide || iconRenderQueued) {
    return;
  }
  iconRenderQueued = true;
  requestAnimationFrame(() => {
    window.lucide.createIcons();
    iconRenderQueued = false;
  });
}
