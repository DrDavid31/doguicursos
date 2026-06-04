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

const defaultState = {
  selectedPlan: "professional",
  activeAudience: "all",
  company: "Empresa Demo",
  employee: "Nombre del empleado",
  area: "finance",
  courseId: "finance-course",
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

let state = loadState();

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
    "audienceTabs",
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
    "metricEmployees",
    "metricTrained",
    "metricApproval",
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

  ["companyInput", "employeeInput", "areaSelect", "courseSelect", "employeesInput"].forEach((id) => {
    elements[id].addEventListener("input", syncFormState);
    elements[id].addEventListener("change", syncFormState);
  });

  elements.completeCourseBtn.addEventListener("click", () => {
    state.completed = true;
    state.trained = clamp(Math.max(state.trained, Math.round(state.employees * 0.86)), 1, state.employees);
    saveState();
    renderTraining();
    renderOverview();
    renderReport();
  });

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
  renderCourses();
  renderForm();
  renderTraining();
  renderCertificate();
  renderCampaignSelect();
  renderSimulation();
  renderReport();
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
  const filtered = courses.filter((course) => {
    return state.activeAudience === "all" || course.audience === state.activeAudience;
  });

  elements.courseGrid.innerHTML = filtered
    .map((course) => {
      const included = course.plans.includes(state.selectedPlan);
      const topics = course.topics.slice(0, 6).map((topic) => `<li>${escapeHtml(topic)}</li>`).join("");
      return `
        <article class="course-card${included ? "" : " locked"}">
          <div>
            <div class="course-meta">
              <span class="pill">${escapeHtml(course.type)}</span>
              <span class="pill">${escapeHtml(course.duration)}</span>
              <span class="pill ${included ? "" : "lock"}">${included ? "Incluido" : "No incluido"}</span>
            </div>
          </div>
          <h3>${escapeHtml(course.title)}</h3>
          <ul class="topic-list">${topics}</ul>
        </article>
      `;
    })
    .join("");
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

  renderCourseSelect();
}

function renderCourseSelect() {
  const available = getAvailableCourses();
  if (!available.some((course) => course.id === state.courseId)) {
    state.courseId = available[0].id;
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
  elements.courseStatus.textContent = state.completed
    ? `Curso completado: ${selectedCourse.title}`
    : `Curso asignado: ${selectedCourse.title}`;
  renderQuestions();
  renderScore();
}

function renderQuestions() {
  elements.questionList.innerHTML = questions
    .map((question, questionIndex) => {
      const options = question.options
        .map((option, optionIndex) => {
          const selected = state.answers[questionIndex] === optionIndex;
          return `
            <button class="${selected ? "selected" : ""}" type="button" data-question="${questionIndex}" data-answer="${optionIndex}">
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

  if (state.score === null) {
    scoreBox.innerHTML = `
      <strong>Sin calificacion</strong>
      <span>Completa la evaluacion para liberar el reconocimiento.</span>
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
  elements.certEmployee.textContent = state.employee || "Empleado";
  elements.certCourse.textContent = course.title;
  elements.certCompany.textContent = state.company || "Empresa";
  elements.certScore.textContent = state.score === null ? "Calificacion pendiente" : `Calificacion ${state.score}%`;
  elements.certFolio.textContent = folio;

  elements.downloadCertificateBtn.disabled = !state.passed;
  elements.certificateMessage.textContent = state.passed
    ? `Reconocimiento listo para ${state.employee || "el empleado"}.`
    : "El reconocimiento se activa con 80% o mas en la evaluacion.";
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
  const plan = plans[state.selectedPlan];
  const simulationText =
    state.selectedPlan === "enterprise"
      ? `La simulacion activa presenta una tasa de clic del ${state.simulation.clicked}% y un reporte del ${state.simulation.reported}%.`
      : "Las simulaciones avanzadas se activan en el plan Enterprise.";

  elements.reportSummary.innerHTML = `
    <div class="summary-card">
      <strong>${escapeHtml(state.company)}</strong><br />
      Durante el mes se capacito al ${trainedPct}% del personal. La aprobacion actual es de ${approvalPct}% y el curso activo es ${escapeHtml(course.title)}.
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

function renderOverview() {
  elements.metricEmployees.textContent = Number(state.employees).toLocaleString("es-MX");
  elements.metricTrained.textContent = `${percentage(state.trained, state.employees)}%`;
  elements.metricApproval.textContent = `${percentage(state.approved, Math.max(state.trained, 1))}%`;
}

function syncFormState() {
  state.company = elements.companyInput.value.trim() || "Empresa Demo";
  state.employee = elements.employeeInput.value.trim() || "Nombre del empleado";
  state.area = elements.areaSelect.value;
  state.courseId = elements.courseSelect.value;
  state.employees = clamp(Number(elements.employeesInput.value) || 1, 1, 5000);
  state.trained = clamp(state.trained, 0, state.employees);
  state.approved = clamp(state.approved, 0, state.trained);
  saveState();
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
  saveState();
  renderPlanSelect();
  renderPlans();
  renderCourses();
  renderTraining();
  renderSimulation();
  renderReport();
  renderCertificate();
}

function gradeQuiz() {
  const answered = Object.keys(state.answers).length;
  if (answered < questions.length) {
    elements.scoreBox.classList.remove("pass", "fail");
    elements.scoreBox.innerHTML = `
      <strong>Evaluacion incompleta</strong>
      <span>Responde las ${questions.length} preguntas antes de calificar.</span>
    `;
    return;
  }

  const correct = questions.reduce((total, question, index) => {
    return total + (state.answers[index] === question.correct ? 1 : 0);
  }, 0);

  state.score = Math.round((correct / questions.length) * 100);
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
  state = structuredClone(defaultState);
  localStorage.removeItem("doguiAwarenessState");
  renderAll();
}

function getAvailableCourses() {
  return courses.filter((course) => course.plans.includes(state.selectedPlan));
}

function getSelectedCourse() {
  return courses.find((course) => course.id === state.courseId) || getAvailableCourses()[0];
}

function getFolio() {
  const compactName = `${state.employee}-${state.company}-${state.courseId}`
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "")
    .slice(0, 10);
  return `DOGUI-${compactName || "AWARE"}-${state.score || "000"}`;
}

function downloadCertificatePdf() {
  if (!state.passed) return;
  const course = getSelectedCourse();
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
  const lines = [
    { text: "DOGUI Awareness", x: 72, y: 700, size: 24, font: "F2" },
    { text: "Reporte ejecutivo mensual", x: 72, y: 660, size: 24, font: "F2" },
    { text: `Empresa: ${state.company}`, x: 72, y: 608, size: 13, font: "F1" },
    { text: `Plan activo: ${plans[state.selectedPlan].name}`, x: 72, y: 586, size: 13, font: "F1" },
    { text: `Empleados registrados: ${state.employees}`, x: 72, y: 552, size: 13, font: "F1" },
    { text: `Personal capacitado: ${trainedPct}%`, x: 72, y: 530, size: 13, font: "F1" },
    { text: `Aprobacion: ${approvalPct}%`, x: 72, y: 508, size: 13, font: "F1" },
    { text: `Curso activo: ${getSelectedCourse().title}`, x: 72, y: 474, size: 13, font: "F1" },
    { text: `Area con mayor riesgo: ${state.simulation.riskArea}`, x: 72, y: 452, size: 13, font: "F1" },
    { text: `Phishing simulado - apertura ${state.simulation.opened}%, clic ${state.simulation.clicked}%, reporte ${state.simulation.reported}%`, x: 72, y: 430, size: 12, font: "F1" },
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
    return stored ? { ...structuredClone(defaultState), ...JSON.parse(stored) } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("doguiAwarenessState", JSON.stringify(state));
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
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
