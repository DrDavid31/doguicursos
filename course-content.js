window.DOGUI_LESSON_VIDEOS = {
  phishing: {
    youtubeId: "uhzV5-iFb5E",
    title: "Qué es el phishing",
    source: "INCIBE - AprendeCiberseguridad",
    url: "https://www.youtube.com/watch?v=uhzV5-iFb5E"
  },
  ingenieria_social: {
    youtubeId: "Wp_KJVFMsEc",
    title: "Qué es la ingeniería social",
    source: "INCIBE - Ciberseguridad",
    url: "https://www.youtube.com/watch?v=Wp_KJVFMsEc"
  },
  redes_sociales: {
    youtubeId: "F88S5VfeFTk",
    title: "Riesgos y fraudes en redes sociales",
    source: "Día de Internet Segura",
    url: "https://www.youtube.com/watch?v=F88S5VfeFTk"
  },
  contrasenas: {
    youtubeId: "n0vvSJJCFbs",
    title: "Contraseñas robustas",
    source: "OSI - INCIBE",
    url: "https://www.youtube.com/watch?v=n0vvSJJCFbs"
  },
  mfa: {
    youtubeId: "YnhNJLQlYcA",
    title: "Qué es el doble factor de autenticación (2FA / MFA)",
    source: "Ciberseguridad práctica",
    url: "https://www.youtube.com/watch?v=YnhNJLQlYcA"
  },
  smishing: {
    youtubeId: "i9S2K6jXYts",
    title: "Cuidate del smishing: fraudes por SMS y WhatsApp",
    source: "Concientización digital",
    url: "https://www.youtube.com/watch?v=i9S2K6jXYts"
  },
  ransomware: {
    youtubeId: "tDdLWN4aWh4",
    title: "Ransomware: que es, como infecta y como protegerse",
    source: "Ciberseguridad práctica",
    url: "https://www.youtube.com/watch?v=tDdLWN4aWh4"
  },
  proteger_empresa: {
    youtubeId: "5uCi_5u0fWI",
    title: "INCIBE ayuda a proteger a tu empresa",
    source: "INCIBE",
    url: "https://www.youtube.com/watch?v=5uCi_5u0fWI"
  },
  ciberseguridad_empresa: {
    youtubeId: "EHjmxujXIaQ",
    title: "Ciberseguridad para la empresa",
    source: "Formación empresarial",
    url: "https://www.youtube.com/watch?v=EHjmxujXIaQ"
  },
  fraude_bec: {
    youtubeId: "9m9p9_t31Kc",
    title: "Qué es la estafa BEC (fraude del CEO)",
    source: "Grupo de Delitos Tecnológicos",
    url: "https://www.youtube.com/watch?v=9m9p9_t31Kc"
  },
  ofertas_falsas: {
    youtubeId: "uUwARqgWrNo",
    title: "Así están estafando con falsas ofertas de empleo",
    source: "Periodismo de investigación",
    url: "https://www.youtube.com/watch?v=uUwARqgWrNo"
  },
  deepfakes: {
    youtubeId: "S2IUl50Fb60",
    title: "Los deepfakes: por qué son peligrosos y como detectarlos",
    source: "Alfabetización digital",
    url: "https://www.youtube.com/watch?v=S2IUl50Fb60"
  },
  identidad: {
    youtubeId: "hqyIjgmk0EA",
    title: "Suplantación de identidad - casos reales",
    source: "INCIBE - Linea de Ayuda 017",
    url: "https://www.youtube.com/watch?v=hqyIjgmk0EA"
  },
  accesos_ti: {
    youtubeId: "HfWX7EF9aE0",
    title: "Gestión de accesos e identidades (IAM)",
    source: "Cybersec Cluster",
    url: "https://www.youtube.com/watch?v=HfWX7EF9aE0"
  },
  qr_fraude: {
    youtubeId: "Pybjt9jNXnQ",
    title: "Quishing: evita ser victima de estafa mediante un QR",
    source: "Segmento RPP",
    url: "https://www.youtube.com/watch?v=Pybjt9jNXnQ"
  },
  ia_fraude: {
    youtubeId: "Q7aDFFXDgc8",
    title: "Alerta por estafa de clonación de voz con inteligencia artificial",
    source: "Alerta ciudadana",
    url: "https://www.youtube.com/watch?v=Q7aDFFXDgc8"
  },
  owasp_top10: {
    youtubeId: "vf9Waxh3I04",
    title: "Qué es el OWASP Top 10 (explicado en 8 minutos)",
    source: "Diccionario de hacking etico",
    url: "https://www.youtube.com/watch?v=vf9Waxh3I04"
  }
};

window.DOGUI_COURSE_CONTENT = {
  "basic-course": {
    overview:
      "Curso base para todo el personal. Ensena habitos de seguridad que reducen phishing, fraude, robo de cuentas, fuga de información y errores comunes en el trabajo diario.",
    lessons: [
      {
        title: "Qué es la ciberseguridad",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "La ciberseguridad protege cuentas, dispositivos, información, sistemas y procesos de negocio contra accesos no autorizados, fraude, pérdida de datos y operaciones interrumpidas. En una empresa no depende solo de TI: cada persona participa cuando decide si abre un archivo, comparte datos, usa una contraseña o reporta algo sospechoso. El objetivo no es trabajar con miedo, sino reconocer señales de riesgo y actuar con criterio.",
        scenario:
          "Un colaborador recibe un correo que parece interno y pide abrir un documento para revisar una nueva política. El mensaje presiona para hacerlo hoy, pero el remitente no coincide con el dominio habitual.",
        actions: [
          "Identifica que información, cuenta o proceso podría estar en riesgo antes de actuar.",
          "Verifica remitente, dominio, contexto y canal cuando una solicitud sea inesperada.",
          "Reporta mensajes, archivos o comportamientos raros por el canal definido por la empresa."
        ],
        takeaways: [
          "La seguridad es una responsabilidad compartida.",
          "Muchas amenazas empiezan con una decisión cotidiana.",
          "Reportar temprano reduce impacto operativo, legal y financiero."
        ]
      },
      {
        title: "Phishing y correos falsos",
        video: "phishing",
        duration: "10 min",
        body:
          "El phishing intenta convencerte de dar clic, abrir un archivo, transferir dinero o entregar datos. Puede imitar bancos, paqueterias, proveedores, herramientas internas o directivos. Los correos modernos pueden tener buen diseño, logos correctos y texto sin errores. Por eso hay que revisar la intención del mensaje: urgencia, amenaza, premio, confidencialidad, solicitud fuera de proceso o cambios inesperados.",
        scenario:
          "Llega un correo de 'Microsoft 365' avisando que tu buzón será bloqueado. Incluye un boton de validación y pide iniciar sesión antes de 30 minutos.",
        actions: [
          "Pasa el cursor sobre los enlaces y revisa el dominio real antes de abrir.",
          "No ingreses credenciales desde enlaces recibidos por correo; entra escribiendo la dirección oficial.",
          "Usa el boton o correo de reporte cuando algo parezca sospechoso."
        ],
        takeaways: [
          "Un buen diseño no garantiza que el correo sea real.",
          "La urgencia artificial es una señal de fraude.",
          "El reporte ayuda a proteger a otros empleados."
        ]
      },
      {
        title: "Fraudes por WhatsApp y mensajería",
        video: "smishing",
        duration: "8 min",
        body:
          "Los fraudes por WhatsApp, SMS o chats corporativos usan identidad falsa, presión y cercanía. Un atacante puede hacerse pasar por un jefe, proveedor, compañero o familiar. También puede pedir códigos, compras urgentes, transferencias, cambio de cuenta bancaria o datos internos. El canal de mensajería facilita el engano porque parece directo y personal.",
        scenario:
          "Un número nuevo escribe con foto de un directivo: 'Estoy en reunión, no puedo contestar llamadas. Compra tarjetas de regalo y mandame los códigos ahora'.",
        actions: [
          "Desconfia de números nuevos que pidan dinero, códigos o información sensible.",
          "Valida por un canal oficial previamente conocido, no por el contacto que llegó en el mensaje.",
          "Captura evidencia y reporta la conversación antes de bloquear o borrar."
        ],
        takeaways: [
          "WhatsApp no prueba identidad.",
          "Los códigos, pagos y datos internos nunca deben pedirse por canales informales.",
          "La verificación por canal alterno rompe el fraude."
        ]
      },
      {
        title: "Contraseñas seguras",
        video: "contrasenas",
        duration: "8 min",
        body:
          "Una contraseña segura debe ser larga, única y difícil de adivinar. Las frases de paso funcionan mejor que palabras cortas con sustituciones obvias. El mayor riesgo es reutilizar la misma clave en correo, nube, bancos, redes y herramientas de trabajo. Si un sitio externo se filtra, esa contraseña puede probarse contra cuentas corporativas.",
        scenario:
          "Un empleado usa la misma contraseña en una tienda en linea y en su correo corporativo. La tienda sufre una filtración y los atacantes prueban esa clave en otros servicios.",
        actions: [
          "Usa una contraseña única por servicio.",
          "Prefiere frases largas y memorables o un administrador de contraseñas autorizado.",
          "Cambia credenciales si sospechas que fueron expuestas o reutilizadas."
        ],
        takeaways: [
          "La longitud importa más que cambios predecibles como '123' o '@'.",
          "Reutilizar contraseñas convierte una filtración externa en riesgo interno.",
          "Un administrador de contraseñas reduce errores humanos."
        ]
      },
      {
        title: "Autenticación multifactor",
        video: "mfa",
        duration: "7 min",
        body:
          "La autenticación multifactor, o MFA, agrega una segunda verificación además de la contraseña. Puede ser una app, llave fisica, notificación, código temporal o biometría. MFA reduce el riesgo si una contraseña se filtra, pero no se debe aprobar una solicitud que no iniciaste. Si recibes aprobaciones repetidas, podría ser un ataque de fatiga MFA.",
        scenario:
          "A medianoche llegan varias notificaciones para aprobar inicio de sesión. La persona no está intentando entrar a ningún sistema.",
        actions: [
          "Rechaza solicitudes MFA que no hayas iniciado.",
          "Reporta intentos repetidos o códigos recibidos sin razón.",
          "Activa MFA en correo, nube, VPN, banca, administradores y cuentas críticas."
        ],
        takeaways: [
          "MFA protege, pero solo si no apruebas solicitudes falsas.",
          "Los códigos MFA son secretos y no se comparten.",
          "Cuentas críticas deben tener MFA obligatorio."
        ]
      },
      {
        title: "Uso seguro del correo corporativo",
        video: "ingenieria_social",
        duration: "9 min",
        body:
          "El correo corporativo concentra información sensible, accesos, contactos y conversaciones de negocio. Un correo comprometido permite suplantar identidad, resetear contraseñas, enviar fraudes y leer datos confidenciales. Usarlo de forma segura implica separar lo personal de lo laboral, evitar reenvios no autorizados y revisar destinatarios antes de enviar información.",
        scenario:
          "Alguien envía una hoja con datos de clientes a una dirección parecida, pero externa, por autocompletado del correo.",
        actions: [
          "Revisa destinatarios, archivos adjuntos y permisos antes de enviar.",
          "No uses el correo corporativo para registros personales o sitios no autorizados.",
          "Reporta reglas de reenvio, respuestas automaticas o actividad que no reconozcas."
        ],
        takeaways: [
          "El autocompletado puede provocar fugas por error.",
          "Una cuenta de correo comprometida afecta a toda la empresa.",
          "Los reenvios externos deben estar autorizados."
        ]
      },
      {
        title: "Archivos y links sospechosos",
        video: "ransomware",
        duration: "9 min",
        body:
          "Los archivos maliciosos pueden llegar como facturas, CVs, contratos, reportes, comprobantes, archivos comprimidos o supuestos PDF. Algunos piden habilitar macros, instalar complementos o escribir una contraseña para abrir. Los enlaces pueden usar dominios parecidos, acortadores, errores pequenos o páginas clonadas.",
        scenario:
          "Un proveedor manda una factura en archivo ZIP con contraseña y dice que es urgente pagar hoy. El archivo no venía por el portal habitual.",
        actions: [
          "No habilites macros ni ejecutes archivos recibidos sin validación.",
          "Desconfia de adjuntos comprimidos, protegidos con contraseña o inesperados.",
          "Escanea o reporta archivos sospechosos según el proceso interno."
        ],
        takeaways: [
          "Un archivo comun puede esconder malware.",
          "La contraseña en un adjunto puede evadir controles automaticos.",
          "Validar por el canal oficial evita infecciones y fraudes."
        ]
      },
      {
        title: "Protección de información sensible",
        video: "proteger_empresa",
        duration: "8 min",
        body:
          "La información sensible incluye datos personales, financieros, contratos, expedientes, precios, credenciales, reportes internos, datos de clientes y estrategias. Protegerla exige clasificarla, compartir solo lo necesario, usar permisos adecuados y evitar copias innecesarias. La seguridad también aplica a capturas de pantalla, impresiones, notas y conversaciones.",
        scenario:
          "Un archivo con datos personales de empleados se sube a una carpeta abierta para toda la organización porque era más rápido compartir el enlace.",
        actions: [
          "Comparte información bajo el principio de mínimo necesario.",
          "Usa carpetas, permisos y canales autorizados para datos sensibles.",
          "Reporta accesos excesivos, enlaces públicos o envios incorrectos."
        ],
        takeaways: [
          "La información sensible no siempre parece técnica.",
          "Los permisos abiertos son una fuga esperando ocurrir.",
          "La privacidad también es parte de la ciberseguridad."
        ]
      },
      {
        title: "Buenas prácticas en redes sociales",
        video: "redes_sociales",
        duration: "7 min",
        body:
          "Las redes sociales ayudan a atacantes a preparar fraudes personalizados. Publicaciones sobre viajes, cargos, organigramas, proveedores, herramientas, eventos internos o credenciales visibles en fotos pueden usarse para suplantación e ingeniería social. La regla es compartir con criterio y cuidar la información que revela contexto interno.",
        scenario:
          "Una persona pública que el director financiero está de viaje. Ese mismo día llega un correo falso solicitando un pago urgente porque 'no puede tomar llamadas'.",
        actions: [
          "Evita publicar información operativa, ubicaciones sensibles o procesos internos.",
          "Revisa fotos antes de subirlas para no mostrar pantallas, gafetes o pizarrones.",
          "Separa perfiles personales de comunicaciones oficiales de la empresa."
        ],
        takeaways: [
          "La información pública puede alimentar ataques dirigidos.",
          "Una foto puede filtrar más de lo que parece.",
          "La discreción protege a personas y procesos."
        ]
      },
      {
        title: "Qué hacer ante un incidente",
        video: "identidad",
        duration: "8 min",
        body:
          "Un incidente puede ser dar clic en un enlace falso, abrir un archivo sospechoso, perder un dispositivo, enviar información por error, notar accesos no reconocidos o recibir una solicitud fraudulenta. Lo más importante es reportar rápido, conservar evidencia y seguir instrucciones. Ocultar el evento aumenta el impacto y retrasa la contención.",
        scenario:
          "Una persona ingresó su usuario y contraseña en una página que parecía corporativa. Después notó que el dominio tenía una letra cambiada.",
        actions: [
          "Reporta qué pasó, cuándo pasó, por qué canal llegó y qué acción tomaste.",
          "No borres mensajes, archivos, enlaces ni capturas relacionadas.",
          "Cambia contraseñas o desconecta equipos solo si el procedimiento interno lo indica."
        ],
        takeaways: [
          "Reportar no es culpar: es contener.",
          "La evidencia permite investigar y proteger a otros.",
          "La velocidad de respuesta puede reducir mucho el daño."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Cuál es el objetivo principal de la ciberseguridad en una empresa?",
        options: ["Proteger información, cuentas, dispositivos y procesos", "Eliminar todos los correos", "Evitar que los empleados usen internet"],
        correct: 0
      },
      {
        text: "¿Qué señal es comun en un correo de phishing?",
        options: ["Urgencia, amenaza o solicitud fuera de proceso", "Qué incluya un saludo", "Qué tenga un logotipo"],
        correct: 0
      },
      {
        text: "¿Qué debes hacer si un número nuevo de WhatsApp pide un pago urgente?",
        options: ["Validar por un canal oficial conocido", "Pagar para evitar problemas", "Enviar códigos para confirmar"],
        correct: 0
      },
      {
        text: "¿Qué práctica reduce el riesgo de contraseñas filtradas?",
        options: ["Usar una contraseña única por servicio", "Reutilizar la clave más fácil", "Compartir la clave con el equipo"],
        correct: 0
      },
      {
        text: "¿Qué debes hacer si recibes una solicitud MFA que no iniciaste?",
        options: ["Rechazarla y reportarla", "Aprobarla por si acaso", "Ignorar todas las notificaciones"],
        correct: 0
      },
      {
        text: "¿Qué riesgo tiene el autocompletado de correo?",
        options: ["Enviar información a un destinatario incorrecto", "Mejorar siempre la seguridad", "Bloquear todos los adjuntos"],
        correct: 0
      },
      {
        text: "¿Qué archivo merece especial cuidado?",
        options: ["Un ZIP con contraseña enviado de forma inesperada", "Un archivo interno validado", "Un documento del portal oficial"],
        correct: 0
      },
      {
        text: "¿Cómo se debe compartir información sensible?",
        options: ["Solo con mínimo necesario y canales autorizados", "Con enlaces públicos para ahorrar tiempo", "Por cualquier chat personal"],
        correct: 0
      },
      {
        text: "¿Por qué cuidar redes sociales ayuda a la seguridad?",
        options: ["Porque reduce información util para ataques dirigidos", "Porque elimina la necesidad de MFA", "Porque impide recibir correos"],
        correct: 0
      },
      {
        text: "¿Qué conviene hacer si diste clic en un enlace falso?",
        options: ["Reportar rápido y conservar evidencia", "Borrar todo y no decir nada", "Mandar el enlace a más personas"],
        correct: 0
      }
    ]
  },
  "finance-course": {
    overview:
      "Ruta para Finanzas y Administración enfocada en prevenir fraude de transferencias, facturas falsas, suplantación de proveedores y solicitudes urgentes de pago.",
    lessons: [
      {
        title: "Fraude de transferencias",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "El fraude de transferencias intenta que una persona autorice o ejecute un pago sin validación suficiente. El atacante puede usar correos falsos, cuentas comprometidas, llamadas, mensajes de WhatsApp o documentos alterados. Las señales más importantes son urgencia, confidencialidad, cambio de cuenta, presión de autoridad y solicitud fuera del flujo normal.",
        scenario:
          "Un correo supuestamente enviado por dirección pide transferir hoy a una cuenta nueva porque 'se cierra una negociación confidencial'.",
        actions: [
          "Valida toda transferencia fuera de rutina por un segundo canal autorizado.",
          "Deten pagos con urgencia injustificada, confidencialidad inusual o datos bancarios nuevos.",
          "Documenta aprobaciones, excepciones y evidencia de validación."
        ],
        takeaways: [
          "La urgencia no reemplaza el proceso financiero.",
          "Las transferencias requieren trazabilidad.",
          "Una pausa de validación puede evitar una pérdida irreversible."
        ]
      },
      {
        title: "Facturas falsas",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "Las facturas falsas pueden usar datos reales de proveedores, importes parecidos, folios creibles y diseño profesional. También pueden llegar como respuesta dentro de una cadena de correo comprometida. El objetivo es que se pague una factura que no corresponde o se descargue un archivo malicioso.",
        scenario:
          "Llega una factura con el nombre de un proveedor conocido, pero la orden de compra no existe y el archivo viene en un formato no usado por la empresa.",
        actions: [
          "Cruza factura contra orden de compra, contrato, recepción de servicio y datos fiscales.",
          "Desconfia de adjuntos comprimidos, macros o enlaces para descargar facturas.",
          "Confirma inconsistencias con el contacto registrado previamente."
        ],
        takeaways: [
          "Una factura visualmente correcta puede ser falsa.",
          "La validación documental evita pagos indebidos.",
          "Las cadenas de correo también pueden estar comprometidas."
        ]
      },
      {
        title: "Suplantación de proveedores",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "La suplantación de proveedores ocurre cuando alguien imita a un proveedor real o usa una cuenta comprometida para pedir pagos, cambios de cuenta o información. Este fraude suele ser convincente porque el atacante conoce nombres, proyectos, montos y conversaciones previas.",
        scenario:
          "Un proveedor habitual solicita cambiar su cuenta bancaria. El correo parece normal, pero el dominio tiene una letra diferente.",
        actions: [
          "Valida cambios de datos bancarios con contactos registrados antes del cambio.",
          "No uses telefonos, enlaces o contactos incluidos en el mensaje sospechoso.",
          "Actualiza datos de proveedor solo después de aprobación y evidencia."
        ],
        takeaways: [
          "El cambio de cuenta bancaria es una alerta crítica.",
          "Un proveedor real puede ser suplantado.",
          "La validación debe usar información confiable previa."
        ]
      },
      {
        title: "Correos del director",
        video: "fraude_bec",
        duration: "7 min",
        body:
          "El fraude del director, o fraude CEO, explota jerarquía para saltarse controles. Puede pedir pagos, compra de tarjetas, adelantos, información fiscal o cambio de prioridad. A veces incluye frases como 'no puedo hablar', 'es confidencial' o 'hazlo ahora'. La cultura de seguridad debe permitir validar instrucciones ejecutivas.",
        scenario:
          "Un supuesto director escribe desde su celular que necesita comprar tarjetas de regalo para clientes y pide enviarle los códigos.",
        actions: [
          "Valida cualquier instrucción ejecutiva fuera de proceso.",
          "Rechaza solicitudes de códigos, tarjetas o pagos por canales informales.",
          "Escala intentos de presión o confidencialidad inusual."
        ],
        takeaways: [
          "La autoridad puede ser usada como herramienta de engano.",
          "Validar al liderazgo debe ser parte normal del control.",
          "Las tarjetas de regalo son un método comun de fraude."
        ]
      },
      {
        title: "Solicitudes urgentes de pago",
        video: "phishing",
        duration: "7 min",
        body:
          "La urgencia reduce pensamiento crítico. En pagos, una solicitud urgente debe activar más controles, no menos. Un atacante busca que Finanzas ignore autorizaciones, salte revisiones o pague antes de confirmar datos. Los mejores procesos definen rutas de emergencia con validación clara.",
        scenario:
          "A cinco minutos del cierre bancario llega una solicitud de pago con amenaza de penalización si no se ejecuta de inmediato.",
        actions: [
          "Usa una ruta de emergencia aprobada y documentada.",
          "Confirma monto, beneficiario, cuenta, autorizador y justificación.",
          "No aceptes instrucciones de 'no consultar a nadie' cuando hay dinero en riesgo."
        ],
        takeaways: [
          "Una urgencia real también puede validarse.",
          "La confidencialidad que bloquea controles es sospechosa.",
          "El proceso protege a Finanzas de presiones indebidas."
        ]
      },
      {
        title: "Validación de cuentas bancarias",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "La validación bancaria debe ser un control formal. Antes de pagar a una cuenta nueva o modificada, Finanzas debe comparar registros internos, contratos, información fiscal, historial de pagos y confirmación por contacto confiable. El control debe aplicarse aunque el proveedor sea conocido.",
        scenario:
          "La cuenta bancaria de una factura no coincide con los pagos historicos. El mensaje insiste en que el cambio aplica desde hoy.",
        actions: [
          "Confirma datos bancarios con el contacto registrado en el alta original.",
          "Requiere aprobación adicional para cuentas nuevas o cambios recientes.",
          "Bloquea pagos hasta resolver discrepancias de cuenta, titular o banco."
        ],
        takeaways: [
          "La cuenta bancaria es el dato más crítico antes de pagar.",
          "El historial de pagos ayuda a detectar anomalias.",
          "Sin validación documentada, el pago debe esperar."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Qué señal debe detener una transferencia para validación?",
        options: ["Cambio de cuenta bancaria con urgencia", "Factura con orden validada", "Pago aprobado en sistema"],
        correct: 0
      },
      {
        text: "¿Cómo validar un cambio de cuenta de proveedor?",
        options: ["Con un contacto previamente registrado", "Con el telefono incluido en el correo sospechoso", "Respondiendo el mismo correo"],
        correct: 0
      },
      {
        text: "¿Qué busca el fraude CEO?",
        options: ["Saltar controles usando autoridad", "Mejorar conciliación", "Actualizar datos fiscales de forma segura"],
        correct: 0
      },
      {
        text: "¿Qué debe hacerse con una factura que no coincide con la orden de compra?",
        options: ["Pausar y validar", "Pagar por si acaso", "Eliminar la evidencia"],
        correct: 0
      },
      {
        text: "¿Qué frase es especialmente sospechosa en una solicitud de pago?",
        options: ["No consultes a nadie, es confidencial", "Adjunto aprobación del sistema", "Programemos revisión"],
        correct: 0
      },
      {
        text: "¿Qué método es comun en fraudes de directivos falsos?",
        options: ["Compra de tarjetas y envío de códigos", "Uso de folios internos validos", "Mesa formal de aprobación"],
        correct: 0
      },
      {
        text: "¿Qué debe incluir la evidencia de validación?",
        options: ["Aprobaciones, canal usado y resultado", "Solo el monto", "Una captura sin contexto"],
        correct: 0
      },
      {
        text: "¿Cuando una cuenta bancaria no coincide con histórico, qué procede?",
        options: ["Bloquear pago hasta confirmar", "Pagar antes del cierre", "Actualizar sin evidencia"],
        correct: 0
      }
    ]
  },
  "hr-course": {
    overview:
      "Ruta para Recursos Humanos orientada a prevenir archivos maliciosos, documentos falsos, robo de datos personales y ataques de ingeniería social durante reclutamiento.",
    lessons: [
      {
        title: "CVs maliciosos",
        video: "ransomware",
        duration: "8 min",
        body:
          "RH recibe documentos de personas externas todos los días. Un CV, portafolio o carta puede incluir macros, enlaces a sitios falsos, archivos comprimidos, ejecutables o contenido que intenta robar credenciales. La presión de un proceso de reclutamiento no debe llevar a abrir formatos no autorizados.",
        scenario:
          "Un candidato envía un archivo ZIP con contraseña diciendo que contiene su portafolio y que necesita respuesta antes de terminar el día.",
        actions: [
          "Acepta documentos solo en formatos y plataformas autorizadas.",
          "No habilites macros ni ejecutes archivos enviados por candidatos.",
          "Reporta adjuntos comprimidos, protegidos con contraseña o inusuales."
        ],
        takeaways: [
          "Un CV puede ser vector de ataque.",
          "Las macros de documentos externos son un riesgo alto.",
          "El reclutamiento también requiere controles de seguridad."
        ]
      },
      {
        title: "Documentos falsos",
        video: "identidad",
        duration: "7 min",
        body:
          "Identificaciones, comprobantes, diplomas, constancias y referencias pueden falsificarse o alterarse. RH debe validar con procesos definidos, conservar evidencia de revisión y limitar quien puede acceder a expedientes. La validación protege a la empresa y a las personas involucradas.",
        scenario:
          "Un comprobante de domicilio tiene datos que no coinciden con la solicitud y la imagen parece editada.",
        actions: [
          "Aplica el proceso oficial de validación documental.",
          "Registra inconsistencias y escalalas al responsable correspondiente.",
          "Evita almacenar documentos personales en carpetas sin permisos."
        ],
        takeaways: [
          "Las inconsistencias pequenas pueden indicar fraude.",
          "La validación debe ser consistente para todos.",
          "Los expedientes requieren acceso limitado."
        ]
      },
      {
        title: "Robo de datos personales",
        video: "proteger_empresa",
        duration: "9 min",
        body:
          "RH maneja datos de alto valor: identificaciones, domicilios, telefonos, salarios, evaluaciones, incapacidades, datos bancarios y expedientes laborales. Una fuga puede causar fraude, extorsión, daño reputacional y obligaciones legales. El principio central es compartir solo lo necesario, con permisos correctos y por canales autorizados.",
        scenario:
          "Un gerente pide por chat una hoja completa de datos personales para revisarla desde su correo personal.",
        actions: [
          "Comparte solo campos necesarios para la finalidad autorizada.",
          "Usa repositorios corporativos con permisos por rol.",
          "Reporta envios incorrectos, enlaces abiertos o accesos excesivos."
        ],
        takeaways: [
          "Los datos personales son información sensible.",
          "El canal personal no es adecuado para expedientes.",
          "Menos datos compartidos significa menos impacto si algo falla."
        ]
      },
      {
        title: "Ofertas laborales falsas",
        video: "ofertas_falsas",
        duration: "7 min",
        body:
          "Atacantes pueden usar el nombre de la empresa para publicar ofertas falsas, cobrar por procesos, pedir documentos o enganar candidatos. Esto dana a las personas y a la marca empleadora. RH debe mantener canales oficiales claros y monitorear reportes de ofertas sospechosas.",
        scenario:
          "Un candidato pregunta si es real una oferta que pide pago por examen médico y envío de documentos por WhatsApp.",
        actions: [
          "Pública vacantes solo en canales autorizados.",
          "Aclara que la empresa no cobra por procesos de selección.",
          "Reporta perfiles, correos o páginas que usen la marca de forma fraudulenta."
        ],
        takeaways: [
          "Las ofertas falsas también son un riesgo de seguridad.",
          "La comunicación oficial protege a candidatos.",
          "La marca de la empresa puede ser suplantada."
        ]
      },
      {
        title: "Ingeniería social a candidatos y RH",
        video: "ingenieria_social",
        duration: "8 min",
        body:
          "La ingeniería social busca obtener información a través de confianza, curiosidad o presión. En RH puede aparecer como candidatos que piden datos internos, supuestos reclutadores externos, llamadas de verificación o solicitudes de organigramas. Información como nombres de directivos, tecnologías usadas o procesos internos puede alimentar fraudes posteriores.",
        scenario:
          "Un supuesto candidato insiste en saber que banco usa la empresa, quien aprueba nomina y que software de correo tienen antes de avanzar en entrevista.",
        actions: [
          "Comparte solo información necesaria para el proceso de selección.",
          "Verifica identidades de agencias, candidatos y referencias cuando algo no cuadre.",
          "Escala preguntas inusuales sobre procesos internos, pagos o herramientas."
        ],
        takeaways: [
          "La curiosidad excesiva puede ser recolección de información.",
          "RH es una fuente valiosa para atacantes.",
          "La información operativa debe manejarse con criterio."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Qué adjunto de candidato debe tratarse con mayor cuidado?",
        options: ["ZIP con contraseña o ejecutable", "PDF del portal autorizado", "Formulario interno validado"],
        correct: 0
      },
      {
        text: "¿Qué se debe hacer con macros en documentos externos?",
        options: ["No habilitarlas y reportar si es sospechoso", "Habilitarlas para ver el contenido", "Pedir al candidato más macros"],
        correct: 0
      },
      {
        text: "¿Qué tipo de información maneja RH?",
        options: ["Datos personales y expedientes laborales", "Solo publicaciones públicas", "Solo inventario de oficina"],
        correct: 0
      },
      {
        text: "¿Cómo compartir datos personales de empleados?",
        options: ["Con mínimo necesario y canal autorizado", "Por correo personal", "En carpeta abierta para todos"],
        correct: 0
      },
      {
        text: "¿Qué debe comunicar RH sobre ofertas laborales?",
        options: ["Qué no se cobra por procesos de selección", "Qué todo tramite es por WhatsApp", "Qué se pagan accesos para entrevista"],
        correct: 0
      },
      {
        text: "¿Qué puede indicar ingeniería social en reclutamiento?",
        options: ["Preguntas inusuales sobre bancos, procesos o herramientas", "Enviar disponibilidad para entrevista", "Preguntar por prestaciones publicadas"],
        correct: 0
      },
      {
        text: "¿Qué hacer con una oferta falsa que usa la marca de la empresa?",
        options: ["Reportarla y escalarla", "Ignorarla siempre", "Copiarla para atraer candidatos"],
        correct: 0
      }
    ]
  },
  "direction-course": {
    overview:
      "Ruta ejecutiva para reducir fraude CEO, deepfakes, robo de identidad, exposición en viajes y errores de decisión durante incidentes.",
    lessons: [
      {
        title: "Fraude CEO",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "El fraude CEO usa el nombre, tono o autoridad de una persona directiva para ordenar pagos, cambios de cuenta o entrega de información. El atacante intenta que el equipo no valide por miedo, presión o confidencialidad. La mejor defensa es que la dirección comunique claramente que los controles se respetan incluso en urgencias.",
        scenario:
          "Una persona de Finanzas recibe una instrucción supuestamente confidencial de dirección para pagar a un proveedor no registrado.",
        actions: [
          "Define que ninguna solicitud ejecutiva salta autorizaciones financieras.",
          "Promueve que el equipo valide instrucciones sin miedo a represalias.",
          "Usa canales formales para pagos, datos sensibles y cambios de prioridad."
        ],
        takeaways: [
          "El liderazgo determina si los controles se cumplen.",
          "La confidencialidad falsa es una señal de fraude.",
          "Validar instrucciones ejecutivas protege a todos."
        ]
      },
      {
        title: "Deepfakes y suplantación con IA",
        video: "deepfakes",
        duration: "8 min",
        body:
          "La inteligencia artificial puede generar textos convincentes, clonar voces, crear imagenes y simular videos. Por eso una voz conocida o un mensaje bien redactado ya no bastan para aprobar acciones críticas. Los procesos deben depender de verificación, no de apariencia.",
        scenario:
          "Durante una videollamada breve, una voz parecida a un directivo pide aprobar una transferencia y evitar preguntas por confidencialidad.",
        actions: [
          "Usa métodos de verificación acordados para decisiones críticas.",
          "Confirma solicitudes sensibles por canales internos oficiales.",
          "No compartas códigos MFA, claves ni accesos durante llamadas."
        ],
        takeaways: [
          "Audio y video pueden ser manipulados.",
          "La verificación formal supera la confianza visual.",
          "Los códigos MFA nunca se comparten."
        ]
      },
      {
        title: "Robo de identidad ejecutiva",
        video: "identidad",
        duration: "7 min",
        body:
          "Las cuentas ejecutivas son objetivos de alto valor porque combinan autoridad, acceso y reputación. El robo de identidad puede iniciar fraudes, divulgar información sensible o afectar negociaciones. Cuidar correo, redes sociales, dispositivos y cuentas personales conectadas es parte de la responsabilidad ejecutiva.",
        scenario:
          "Una cuenta personal de un directivo se compromete y se usa para contactar a colaboradores con solicitudes urgentes.",
        actions: [
          "Activa MFA en cuentas corporativas y personales de alto impacto.",
          "Separa comunicaciones personales de instrucciones de negocio.",
          "Monitorea accesos no reconocidos, cambios de reglas y reenvios."
        ],
        takeaways: [
          "La identidad ejecutiva puede ser usada contra la empresa.",
          "Las cuentas personales también pueden afectar operaciones.",
          "La reputación es un activo que debe protegerse."
        ]
      },
      {
        title: "Protección de cuentas críticas",
        video: "mfa",
        duration: "7 min",
        body:
          "Las cuentas críticas incluyen correo ejecutivo, banca, nube, administradores, sistemas financieros, dominios, redes sociales oficiales y herramientas de colaboración. Deben tener MFA, contraseñas únicas, recuperación segura, monitoreo y usuarios de respaldo bien definidos.",
        scenario:
          "La cuenta de redes sociales de la empresa usa una contraseña compartida y no tiene MFA. Varias personas conocen el acceso.",
        actions: [
          "Elimina cuentas compartidas cuando sea posible y asigna permisos por usuario.",
          "Configura MFA fuerte y opciones de recuperación controladas.",
          "Revisa periódicamente propietarios, accesos y dispositivos conectados."
        ],
        takeaways: [
          "Las cuentas compartidas reducen trazabilidad.",
          "MFA debe ser obligatorio en cuentas críticas.",
          "La recuperación de cuenta también debe protegerse."
        ]
      },
      {
        title: "Viajes y dispositivos",
        video: "proteger_empresa",
        duration: "7 min",
        body:
          "Los viajes aumentan riesgos: redes públicas, pérdida de equipo, conversaciones expuestas, revisiones fisicas y carga en puertos desconocidos. Un directivo puede llevar información sensible en laptop, telefono, correo o mensajería. Prepararse antes de viajar reduce exposición.",
        scenario:
          "En un aeropuerto, un directivo deja la laptop abierta mientras atiende una llamada y está conectado a una red pública.",
        actions: [
          "Usa bloqueo automático, cifrado y MFA antes de viajar.",
          "Evita Wi-Fi público para operaciones sensibles o usa controles corporativos aprobados.",
          "Reporta pérdida, robo o revisión sospechosa de dispositivos inmediatamente."
        ],
        takeaways: [
          "Los viajes requieren controles adicionales.",
          "Un equipo perdido puede convertirse en incidente mayor.",
          "La privacidad fisica también importa."
        ]
      },
      {
        title: "Toma de decisiones ante incidentes",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "En un incidente, dirección debe ayudar a contener, priorizar continuidad, coordinar comunicación y preservar evidencia. Las decisiones apresuradas pueden borrar rastros, aumentar daño legal o generar mensajes contradictorios. Un plan de respuesta define roles, criterios, escalamiento y comunicación antes de la crisis.",
        scenario:
          "Se detecta posible ransomware. Un equipo quiere apagar todo; otro propone pagar de inmediato; clientes empiezan a preguntar que ocurre.",
        actions: [
          "Activa el plan de respuesta y el equipo responsable.",
          "Coordina a TI, legal, comunicación, operaciones y dirección.",
          "Centraliza mensajes y conserva evidencia antes de tomar acciones irreversibles."
        ],
        takeaways: [
          "La calma ejecutiva reduce el impacto.",
          "El plan debe practicarse antes del incidente.",
          "Comunicación, continuidad y evidencia se gestionan juntas."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Qué busca el fraude CEO?",
        options: ["Usar autoridad para saltar controles", "Hacer auditorias formales", "Reducir pagos urgentes"],
        correct: 0
      },
      {
        text: "¿Por qué los deepfakes cambian la forma de validar?",
        options: ["Porque voz y video pueden ser falsos", "Porque eliminan los correos", "Porque sustituyen MFA"],
        correct: 0
      },
      {
        text: "¿Qué debe hacer un directivo con solicitudes críticas?",
        options: ["Usar canales y procesos oficiales", "Pedir discreción para saltar controles", "Aprobar por mensaje informal"],
        correct: 0
      },
      {
        text: "¿Qué cuenta debe considerarse crítica?",
        options: ["Correo ejecutivo o banca", "Una cuenta sin uso", "Un perfil de prueba sin permisos"],
        correct: 0
      },
      {
        text: "¿Qué problema generan cuentas compartidas?",
        options: ["Menor trazabilidad", "Más control individual", "Mejor auditoría"],
        correct: 0
      },
      {
        text: "¿Qué hacer ante pérdida de dispositivo en viaje?",
        options: ["Reportar inmediatamente", "Esperar al regreso", "Pedir a alguien que adivine la clave"],
        correct: 0
      },
      {
        text: "¿Qué debe activar dirección ante un incidente mayor?",
        options: ["El plan de respuesta", "Una cadena de rumores", "Un comunicado improvisado sin validar"],
        correct: 0
      },
      {
        text: "¿Qué debe preservarse durante un incidente?",
        options: ["Evidencia y registros", "Mensajes borrados", "Solo opiniones"],
        correct: 0
      }
    ]
  },
  "it-course": {
    overview:
      "Ruta para equipos de TI con controles esenciales de accesos, hardening, MFA, respuesta inicial, respaldo y ransomware.",
    lessons: [
      {
        title: "Gestión de accesos",
        video: "accesos_ti",
        duration: "8 min",
        body:
          "La gestión de accesos asegura que cada persona tenga los permisos correctos durante el tiempo correcto. Altas, bajas, cambios de puesto, cuentas privilegiadas y accesos de terceros deben tener aprobación, trazabilidad y revisión periodica. El principio rector es mínimo privilegio.",
        scenario:
          "Un empleado cambia de área, pero mantiene permisos administrativos del puesto anterior y acceso a carpetas financieras.",
        actions: [
          "Aplica mínimo privilegio y permisos por rol.",
          "Automatiza o documenta altas, bajas y cambios de puesto.",
          "Revisa accesos privilegiados y de terceros de forma periodica."
        ],
        takeaways: [
          "El acceso excesivo aumenta el impacto de un incidente.",
          "Las bajas tardias son una causa comun de exposición.",
          "La revisión periodica mantiene los permisos alineados al negocio."
        ]
      },
      {
        title: "Hardening básico",
        video: "accesos_ti",
        duration: "9 min",
        body:
          "Hardening es reducir superficie de ataque mediante configuraciones seguras. Incluye desactivar servicios innecesarios, aplicar parches, cerrar puertos, usar configuraciones recomendadas, restringir administración remota, asegurar endpoints y registrar eventos relevantes. No es una acción única: debe mantenerse.",
        scenario:
          "Un servidor expone administración remota a internet, tiene cuentas antiguas activas y no recibe parches desde hace meses.",
        actions: [
          "Elimina servicios, cuentas y puertos que no sean necesarios.",
          "Aplica parches con prioridad según criticidad y exposición.",
          "Usa guias base de configuración y verifica desviaciones."
        ],
        takeaways: [
          "Menos superficie expuesta reduce oportunidades de ataque.",
          "Parches atienden vulnerabilidades conocidas.",
          "La configuración segura debe auditarse."
        ]
      },
      {
        title: "MFA para TI y administradores",
        video: "mfa",
        duration: "8 min",
        body:
          "MFA debe ser obligatorio en accesos administrativos, VPN, correo, nube, herramientas de soporte, consolas y cuentas de emergencia. Para perfiles de TI, una cuenta comprometida puede permitir movimiento lateral, cambios de configuración o acceso a datos masivos. MFA fuerte y monitoreo reducen el riesgo.",
        scenario:
          "Una cuenta administrativa sin MFA inicia sesión desde una ubicación inusual fuera de horario.",
        actions: [
          "Exige MFA en cuentas privilegiadas y accesos remotos.",
          "Evita compartir cuentas administrativas; usa cuentas nominativas.",
          "Monitorea aprobaciones MFA sospechosas y accesos imposibles."
        ],
        takeaways: [
          "Las cuentas de TI son objetivos prioritarios.",
          "MFA sin monitoreo puede sufrir fatiga de aprobaciones.",
          "Las cuentas nominativas mejoran trazabilidad."
        ]
      },
      {
        title: "Manejo de incidentes",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "Un incidente requiere roles claros, criterios de severidad, comunicación y bitacora. TI debe distinguir entre evento, alerta e incidente, y saber cuando escalar. La improvisación puede borrar evidencia o extender el daño. El playbook guía acciones de contención, erradicación y recuperación.",
        scenario:
          "El sistema de monitoreo alerta inicios de sesión fallidos masivos y un inicio exitoso desde un pais inesperado.",
        actions: [
          "Clasifica severidad y alcance usando criterios definidos.",
          "Registra tiempos, evidencias, decisiones y responsables.",
          "Escala según el playbook y conserva registros."
        ],
        takeaways: [
          "No toda alerta es incidente, pero toda alerta importante debe triagearse.",
          "La bitacora reduce pérdida de contexto.",
          "Los playbooks evitan decisiones improvisadas."
        ]
      },
      {
        title: "Respuesta inicial",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "La respuesta inicial busca contener sin destruir evidencia. Puede incluir aislar un equipo, revocar sesiones, bloquear indicadores, preservar logs, suspender credenciales y coordinar comunicación. Las acciones deben hacerse con orden y registro para no perder capacidad de investigación.",
        scenario:
          "Un usuario reporta que ejecutó un archivo sospechoso y el equipo empezó a comportarse de forma extraña.",
        actions: [
          "Aisla el equipo siguiendo el procedimiento, sin apagarlo si la política indica preservar memoria.",
          "Recolecta datos básicos: usuario, hora, archivo, origen, red y sintomas.",
          "Bloquea o revoca accesos asociados cuando exista riesgo de compromiso."
        ],
        takeaways: [
          "Contener no significa borrar todo.",
          "Los primeros minutos definen la investigación.",
          "Preservar evidencia permite entender alcance."
        ]
      },
      {
        title: "Respaldo y ransomware",
        video: "ransomware",
        duration: "9 min",
        body:
          "Ransomware cifra datos y también intenta afectar respaldos. Una estrategia de respaldo debe incluir copias separadas, protección contra borrado, pruebas de restauración, prioridades de sistemas y tiempos objetivo de recuperación. El respaldo solo sirve si se puede restaurar a tiempo.",
        scenario:
          "Un servidor de archivos queda cifrado y el respaldo más reciente estaba conectado con permisos de escritura desde el mismo entorno.",
        actions: [
          "Mantiene copias offline, inmutables o separadas cuando sea posible.",
          "Prueba restauraciones periodicas y documenta tiempos reales.",
          "Define sistemas críticos, dependencias y orden de recuperación."
        ],
        takeaways: [
          "Un respaldo no probado es una suposición.",
          "Ransomware también apunta a respaldos.",
          "La recuperación se disena antes de la crisis."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Qué principio guía la gestión de accesos?",
        options: ["Mínimo privilegio", "Acceso total por comodidad", "Permisos permanentes"],
        correct: 0
      },
      {
        text: "¿Qué debe pasar cuando alguien cambia de puesto?",
        options: ["Revisar y ajustar permisos", "Conservar todos los accesos anteriores", "Crear cuentas compartidas"],
        correct: 0
      },
      {
        text: "¿Qué acción forma parte del hardening?",
        options: ["Desactivar servicios innecesarios", "Abrir puertos sin control", "Usar cuentas antiguas"],
        correct: 0
      },
      {
        text: "¿Dónde debe ser prioritario MFA?",
        options: ["Cuentas administrativas y accesos remotos", "Solo redes sociales personales", "Solo usuarios sin permisos"],
        correct: 0
      },
      {
        text: "¿Qué mejora la trazabilidad en TI?",
        options: ["Cuentas nominativas", "Cuentas compartidas", "Claves enviadas por chat"],
        correct: 0
      },
      {
        text: "¿Qué debe incluir la bitacora de incidente?",
        options: ["Tiempos, evidencia, decisiones y responsables", "Solo comentarios informales", "Datos inventados para cerrar rápido"],
        correct: 0
      },
      {
        text: "¿Qué debe evitarse en respuesta inicial?",
        options: ["Destruir evidencia sin registro", "Documentar acciones", "Contener con playbook"],
        correct: 0
      },
      {
        text: "¿Qué respaldo es realmente util?",
        options: ["El que se prueba y puede restaurarse", "El conectado siempre con permisos totales", "El que nadie conoce"],
        correct: 0
      }
    ]
  },
  "monthly-course": {
    overview:
      "Biblioteca de microcursos de 10 a 15 minutos para reforzar un habito por mes sin interrumpir la operación. Cada capsula puede asignarse como refuerzo después de evaluaciones o simulaciones.",
    lessons: [
      {
        title: "Cómo detectar un correo falso",
        video: "phishing",
        duration: "10 min",
        body:
          "Para detectar un correo falso, revisa remitente, dominio, tono, urgencia, enlaces, adjuntos y solicitud. No necesitas encontrar muchas señales: una sola inconsistencia puede justificar reporte. Los correos falsos actuales pueden estar bien escritos y usar logos reales.",
        scenario:
          "Un correo de soporte pide validar tu buzon hoy. El enlace parece corporativo, pero el dominio termina en una dirección desconocida.",
        actions: [
          "Revisa el dominio real del remitente y de los enlaces.",
          "No descargues adjuntos ni ingreses contraseñas desde el correo.",
          "Reporta el mensaje con el canal oficial."
        ],
        takeaways: [
          "El logo no confirma autenticidad.",
          "Una sola señal de alerta basta para pausar.",
          "Reportar protege al resto del equipo."
        ]
      },
      {
        title: "Cómo identificar un link sospechoso",
        video: "phishing",
        duration: "10 min",
        body:
          "Un link sospechoso puede usar dominios parecidos, letras cambiadas, subdominios confusos, acortadores o palabras que intentan sonar oficiales. Antes de ingresar datos, revisa la dirección completa. En servicios críticos, entra escribiendo la URL oficial o desde favoritos corporativos.",
        scenario:
          "Recibes un enlace que dice facturación-empresa.com.seguro-login.net. Parece mencionar a la empresa, pero el dominio principal es otro.",
        actions: [
          "Identifica cual es el dominio principal antes de hacer clic.",
          "Evita ingresar credenciales en enlaces acortados o inesperados.",
          "Usa marcadores o direcciones oficiales para servicios importantes."
        ],
        takeaways: [
          "Los subdominios pueden confundir.",
          "El dominio principal es lo que importa.",
          "El enlace visible puede ser diferente al destino real."
        ]
      },
      {
        title: "Qué hacer si recibes un WhatsApp extraño",
        video: "smishing",
        duration: "10 min",
        body:
          "Un WhatsApp extraño puede pedir pagos, códigos, documentos o acciones urgentes. Aunque use foto y nombre conocidos, debes validar. Los atacantes también pueden decir que cambiaron de número o que no pueden recibir llamadas.",
        scenario:
          "Un supuesto jefe escribe desde un número nuevo y pide transferir dinero a una cuenta personal.",
        actions: [
          "No compartas códigos ni hagas pagos por instrucciones informales.",
          "Valida con un canal oficial conocido.",
          "Reporta la conversación con capturas y número de origen."
        ],
        takeaways: [
          "El número nuevo es una alerta.",
          "La foto de perfil no prueba identidad.",
          "Validar no es desconfiar: es proteger."
        ]
      },
      {
        title: "Cómo crear contraseñas seguras",
        video: "contrasenas",
        duration: "10 min",
        body:
          "Una buena contraseña es larga, única y difícil de adivinar. Evita fechas, nombres, equipos favoritos, patrones de teclado y cambios obvios. Un administrador de contraseñas permite usar claves fuertes sin memorizarlas todas.",
        scenario:
          "Una persona usa Empresa2026! para varios sistemas porque cumple con mayuscula, número y simbolo.",
        actions: [
          "Crea frases largas no relacionadas con datos personales.",
          "Usa una clave distinta para cada servicio.",
          "Guarda credenciales en una herramienta autorizada."
        ],
        takeaways: [
          "Cumplir complejidad mínima no siempre significa seguridad.",
          "La reutilización es el mayor problema.",
          "Una frase larga suele ser más resistente."
        ]
      },
      {
        title: "Qué es MFA y por qué importa",
        video: "mfa",
        duration: "10 min",
        body:
          "MFA agrega una capa de protección si una contraseña se filtra. Sin MFA, una clave robada puede bastar para entrar. Con MFA, el atacante necesita un segundo factor. Aun así, las solicitudes no iniciadas deben rechazarse y reportarse.",
        scenario:
          "Recibes una notificación de aprobación mientras no estás iniciando sesión.",
        actions: [
          "Rechaza solicitudes no iniciadas.",
          "Reporta notificaciones repetidas o sospechosas.",
          "Usa MFA en cuentas de correo, nube, bancos y administración."
        ],
        takeaways: [
          "MFA reduce robo de cuentas.",
          "Aprobar por cansancio es peligroso.",
          "Los códigos MFA no se comparten."
        ]
      },
      {
        title: "Cómo evitar fraudes con QR",
        video: "qr_fraude",
        duration: "10 min",
        body:
          "Los códigos QR pueden llevar a páginas falsas, cobros fraudulentos o formularios para robar credenciales. Son utiles, pero no son automáticamente seguros. Antes de ingresar datos, revisa la URL que abre el QR y valida que pertenezca al servicio esperado.",
        scenario:
          "En una recepción aparece un QR para 'validar acceso Wi-Fi corporativo' y pide usuario y contraseña de correo.",
        actions: [
          "Revisa la URL antes de escribir datos.",
          "No ingreses credenciales corporativas en QR no autorizados.",
          "Usa redes y portales oficiales de la empresa."
        ],
        takeaways: [
          "Un QR puede ocultar un link falso.",
          "Las credenciales corporativas no deben usarse en formularios desconocidos.",
          "La ubicación fisica de un QR no garantiza que sea confiable."
        ]
      },
      {
        title: "Qué hacer si abriste un archivo sospechoso",
        video: "ransomware",
        duration: "10 min",
        body:
          "Abrir un archivo sospechoso no siempre significa infección, pero si requiere acción rápida. No intentes resolverlo solo ni borres evidencia. Reporta que abriste, de donde venía, que viste y si ingresaste datos o habilitaste contenido.",
        scenario:
          "Abriste una supuesta factura y el documento pidió habilitar macros para ver el contenido.",
        actions: [
          "No habilites macros ni vuelvas a abrir el archivo.",
          "Reporta el archivo, remitente, hora y acción realizada.",
          "Sigue instrucciones de TI sobre aislamiento o análisis."
        ],
        takeaways: [
          "Reportar rápido es más importante que sentir pena.",
          "La evidencia ayuda a revisar alcance.",
          "No se debe enviar el archivo a más personas."
        ]
      },
      {
        title: "Cómo proteger información confidencial",
        video: "proteger_empresa",
        duration: "10 min",
        body:
          "La información confidencial debe compartirse con mínimo necesario, permisos adecuados y canales autorizados. Antes de enviar un archivo, revisa destinatarios, permisos, clasificación y si realmente todos necesitan acceso. También cuida impresiones y capturas.",
        scenario:
          "Un reporte de clientes se comparte por enlace público para que todos puedan abrirlo sin pedir permisos.",
        actions: [
          "Usa permisos por persona o grupo autorizado.",
          "Evita enlaces públicos para datos internos o personales.",
          "Retira accesos cuando la colaboración termine."
        ],
        takeaways: [
          "Compartir rápido no debe significar compartir abierto.",
          "Los permisos deben revisarse.",
          "La confidencialidad aplica a archivos, fotos, pantallas e impresiones."
        ]
      },
      {
        title: "Fraudes con inteligencia artificial",
        video: "ia_fraude",
        duration: "12 min",
        body:
          "La IA permite crear mensajes más convincentes, voces falsas, imagenes manipuladas y perfiles creibles. Esto aumenta la calidad del engano, pero no cambia la defensa: validar identidad, seguir procesos, no compartir códigos y reportar solicitudes raras.",
        scenario:
          "Un audio con voz parecida a un directivo pide autorizar un pago y dice que no puede confirmar por otro canal.",
        actions: [
          "Confirma por un canal alterno ya conocido.",
          "No compartas códigos MFA, claves ni datos bancarios por llamada.",
          "Escala solicitudes sensibles que usen urgencia o excepciones."
        ],
        takeaways: [
          "La voz puede ser falsa.",
          "El proceso protege cuando la apariencia engana.",
          "La IA vuelve más importante la validación."
        ]
      },
      {
        title: "Cómo reportar un incidente",
        video: "identidad",
        duration: "10 min",
        body:
          "Un buen reporte incluye qué pasó, cuándo, por qué canal llegó, qué acción tomaste, qué datos se compartieron y qué evidencia existe. No necesitas investigar por tu cuenta. El equipo responsable se encarga de analizar y contener.",
        scenario:
          "Ingresaste datos en una página falsa y luego cerraste el navegador al darte cuenta.",
        actions: [
          "Reporta hora, enlace, usuario afectado y datos ingresados.",
          "Conserva correos, mensajes, capturas y archivos relacionados.",
          "Sigue el proceso interno antes de cambiar o borrar cosas."
        ],
        takeaways: [
          "El reporte temprano reduce daño.",
          "No se espera que el empleado investigue solo.",
          "La evidencia permite proteger a otros."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Qué basta para reportar un correo?",
        options: ["Una señal sospechosa", "Cinco errores ortograficos", "Qué no tenga logo"],
        correct: 0
      },
      {
        text: "¿Qué parte de un link debes revisar?",
        options: ["El dominio principal", "Solo el texto azul", "El tamaño del boton"],
        correct: 0
      },
      {
        text: "¿Qué hacer ante un WhatsApp de número nuevo que pide dinero?",
        options: ["Validar por canal oficial", "Pagar para ayudar", "Enviar códigos de confirmación"],
        correct: 0
      },
      {
        text: "¿Qué hace segura una contraseña?",
        options: ["Qué sea larga y única", "Qué use el nombre de la empresa", "Qué se comparta con el jefe"],
        correct: 0
      },
      {
        text: "¿Qué hacer con una notificación MFA no iniciada?",
        options: ["Rechazar y reportar", "Aprobar rápido", "Enviar el código por chat"],
        correct: 0
      },
      {
        text: "¿Qué riesgo tiene un QR desconocido?",
        options: ["Puede llevar a una página falsa", "Siempre bloquea malware", "Verifica identidad automáticamente"],
        correct: 0
      },
      {
        text: "¿Qué hacer si abriste un archivo sospechoso?",
        options: ["Reportar y conservar evidencia", "Mandarlo a más compañeros", "Borrarlo todo sin avisar"],
        correct: 0
      },
      {
        text: "¿Cómo compartir información confidencial?",
        options: ["Con permisos adecuados y mínimo necesario", "Con enlaces públicos", "Por cuentas personales"],
        correct: 0
      },
      {
        text: "¿Qué cambia con fraudes de IA?",
        options: ["La apariencia puede ser más convincente", "Ya no se necesita validar", "MFA deja de servir"],
        correct: 0
      },
      {
        text: "¿Qué debe incluir un reporte de incidente?",
        options: ["Qué pasó, cuándo, canal y evidencia", "Solo una opinión", "Nada hasta estar seguro al 100%"],
        correct: 0
      }
    ]
  },
  "phishing-course": {
    overview:
      "Modulo Enterprise para planear, ejecutar y medir simulaciones de phishing educativo sin recolectar credenciales reales y con enfoque de mejora continua.",
    lessons: [
      {
        title: "Objetivo de una simulación",
        video: "phishing",
        duration: "7 min",
        body:
          "Una simulación de phishing mide habitos y prepara al personal para detectar ataques reales. Su objetivo es educar y mejorar controles, no avergonzar. Debe tener autorización, alcance definido, criterios de medición y una experiencia de aprendizaje posterior.",
        scenario:
          "La empresa quiere medir riesgo en Finanzas usando una simulación de factura falsa después del curso de pagos seguros.",
        actions: [
          "Define objetivo, población, fecha, escenario y aprobadores.",
          "Aclara que no se recolectaran contraseñas reales.",
          "Prepara material de retroalimentación para quienes interactuen."
        ],
        takeaways: [
          "Medir permite mejorar capacitación y controles.",
          "La simulación debe estar autorizada.",
          "El enfoque educativo genera confianza."
        ]
      },
      {
        title: "Correo falso de factura",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "La factura falsa es un escenario comun porque Finanzas, Compras y Administración reciben documentos externos. La simulación puede evaluar si los usuarios revisan proveedor, dominio, orden de compra, adjunto y urgencia antes de abrir o pagar.",
        scenario:
          "Se envía una supuesta factura vencida con enlace a descarga y asunto de urgencia de pago.",
        actions: [
          "Incluye señales medibles como dominio parecido, urgencia o enlace externo.",
          "Evita archivos reales con código o contenido dañino.",
          "Muestra una página educativa si el usuario hace clic."
        ],
        takeaways: [
          "Las facturas son pretexto comun de ataque.",
          "El clic debe llevar a aprendizaje, no a castigo.",
          "Las señales deben alinearse al curso."
        ]
      },
      {
        title: "Correo falso de paquetería",
        video: "phishing",
        duration: "7 min",
        body:
          "Los mensajes de paquetería aprovechan curiosidad y expectativa de entrega. Pueden pedir pagos pequenos, dirección, telefono o credenciales. En simulación, ayudan a entrenar revisión de dominio y evitar formularios falsos.",
        scenario:
          "Un correo informa que hay un paquete retenido y pide pagar una tarifa para liberarlo.",
        actions: [
          "Mide apertura, clic y reporte del mensaje.",
          "Usa marcas genericas o autorizadas para evitar conflictos.",
          "Incluye retroalimentación sobre pagos pequenos y enlaces externos."
        ],
        takeaways: [
          "Los montos pequenos también pueden ser fraude.",
          "La paquetería falsa busca rapidez y curiosidad.",
          "El reporte temprano puede alertar a toda la empresa."
        ]
      },
      {
        title: "WhatsApp falso de dirección",
        video: "smishing",
        duration: "7 min",
        body:
          "La simulación por mensajería debe manejarse con especial cuidado y autorización. Puede entrenar validación de identidad, rechazo de códigos y control de pagos informales. Debe evitar recolectar datos reales y debe explicar inmediatamente las señales de alerta.",
        scenario:
          "Un mensaje simulado de dirección pide comprar tarjetas y enviar códigos, alegando que está en una junta.",
        actions: [
          "Define reglas eticas y legales antes de usar mensajería.",
          "No recolectes códigos, documentos ni datos personales reales.",
          "Mide si el usuario valida por canal oficial o reporta."
        ],
        takeaways: [
          "La mensajería informal es un canal de fraude frecuente.",
          "La simulación debe proteger privacidad y confianza.",
          "Validar por otro canal es el comportamiento esperado."
        ]
      },
      {
        title: "Link falso de cambio de contraseña",
        video: "phishing",
        duration: "8 min",
        body:
          "Este escenario entrena a los empleados para no ingresar credenciales desde enlaces. La página de simulación debe usar campos de prueba o detenerse antes de pedir contraseñas reales. También puede ensenar a entrar al portal oficial escribiendo la dirección.",
        scenario:
          "Un correo avisa que la contraseña vence hoy y ofrece un enlace para renovarla.",
        actions: [
          "Nunca captures contraseñas reales en una simulación.",
          "Mide clic, inicio de formulario de prueba y reporte.",
          "Explica como validar portales oficiales de la empresa."
        ],
        takeaways: [
          "Las credenciales reales no deben capturarse.",
          "El cambio de contraseña es un pretexto comun.",
          "El entrenamiento debe reforzar uso de portales oficiales."
        ]
      },
      {
        title: "Alerta falsa de banco",
        video: "phishing",
        duration: "7 min",
        body:
          "Las alertas falsas de banco usan miedo y urgencia: cargos no reconocidos, bloqueo de cuenta, token vencido o validación inmediata. En una simulación, este escenario sirve para entrenar a empleados a no usar enlaces de mensajes financieros y a validar desde canales oficiales.",
        scenario:
          "Un correo simulado avisa que la cuenta empresarial será bloqueada por actividad sospechosa y pide entrar a un enlace para confirmar datos.",
        actions: [
          "Usa dominios y marcas de prueba o autorizadas para evitar confusión legal.",
          "No solicites números reales de tarjeta, tokens, NIP, contraseñas ni datos bancarios.",
          "Explica que las validaciones bancarias se hacen desde canales oficiales ya conocidos."
        ],
        takeaways: [
          "El miedo a perder acceso financiero acelera decisiones.",
          "Los enlaces bancarios en correos o SMS deben validarse con cuidado.",
          "La simulación debe educar sin recolectar datos sensibles."
        ]
      },
      {
        title: "Documento falso de proveedor",
        video: "fraude_bec",
        duration: "7 min",
        body:
          "El documento falso de proveedor entrena a Compras, Administración y Finanzas a revisar adjuntos, dominios y cambios de información. Puede simular una orden de compra, contrato, comprobante fiscal o actualización de cuenta bancaria, siempre sin entregar malware ni archivos peligrosos.",
        scenario:
          "Un proveedor simulado envía un documento de actualización bancaria y pide procesarlo antes del cierre del mes.",
        actions: [
          "Usa archivos inofensivos o páginas educativas en lugar de adjuntos ejecutables.",
          "Mide clic, descarga simulada, reporte y validación por canal oficial.",
          "Refuerza el proceso de confirmación de proveedores y cuentas bancarias."
        ],
        takeaways: [
          "Los proveedores son un pretexto frecuente en fraudes empresariales.",
          "Cambios de cuenta bancaria requieren validación formal.",
          "La simulación puede conectar awareness con controles de pago."
        ]
      },
      {
        title: "Metricas y reporte ejecutivo",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "Las metricas clave son tasa de apertura, clic, reporte, datos de prueba ingresados, tiempo de reporte y riesgo por área. El reporte ejecutivo debe mostrar tendencia, no solo culpables. La meta es decidir refuerzos: microcursos, cambios de proceso, MFA, validaciones o nuevas campanas.",
        scenario:
          "Finanzas tiene 22% de clic en factura falsa, pero también fue el área con más reportes en los primeros 15 minutos.",
        actions: [
          "Compara resultados por área y contra meses anteriores.",
          "Distingue comportamientos de riesgo y comportamientos positivos como reportar.",
          "Recomienda acciones concretas y medibles para el siguiente mes."
        ],
        takeaways: [
          "Reportar es una metrica positiva.",
          "La tendencia importa más que una foto aislada.",
          "El reporte ejecutivo convierte capacitación en decisión."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Cuál es el objetivo correcto de una simulación de phishing?",
        options: ["Educar y medir riesgo", "Avergonzar empleados", "Recolectar contraseñas reales"],
        correct: 0
      },
      {
        text: "¿Qué debe existir antes de una campana?",
        options: ["Autorización y alcance definido", "Improvisación total", "Publicación de nombres vulnerables"],
        correct: 0
      },
      {
        text: "¿Qué escenario ayuda a Finanzas?",
        options: ["Factura falsa", "Cambio de fondo de pantalla", "Encuesta de cafetería"],
        correct: 0
      },
      {
        text: "¿Qué debe hacer una landing educativa?",
        options: ["Explicar señales de alerta", "Instalar software", "Pedir contraseñas reales"],
        correct: 0
      },
      {
        text: "¿Qué regla aplica a simulaciones por WhatsApp?",
        options: ["No recolectar datos reales y contar con autorización", "Pedir códigos reales", "Usar cualquier número sin control"],
        correct: 0
      },
      {
        text: "¿Qué no se debe capturar en una simulación?",
        options: ["Contraseñas reales", "Clics", "Reportes"],
        correct: 0
      },
      {
        text: "¿Qué metrica es positiva?",
        options: ["Quién reportó", "Quién fue exhibido", "Quién no recibió capacitación"],
        correct: 0
      },
      {
        text: "¿Qué debe incluir el reporte ejecutivo?",
        options: ["Tendencia, riesgo por área y recomendaciones", "Solo nombres para castigo", "Datos sin contexto"],
        correct: 0
      }
    ]
  },
  "onboarding-course": {
    overview:
      "Curso expres para nuevos ingresos. En cinco lecciones cortas aprendes lo esencial para trabajar seguro desde tu primera semana: identidad digital, correo y mensajería, dispositivos y como reportar cualquier duda.",
    lessons: [
      {
        title: "Bienvenida a la seguridad DOGUI",
        video: "ciberseguridad_empresa",
        duration: "6 min",
        body:
          "Bienvenido. Durante tu primera semana vas a recibir accesos, correos, invitaciones y herramientas nuevas, y eso te vuelve un objetivo comun para intentos de fraude porque todavía no conoces los procesos internos. La seguridad no depende de memorizar reglas complicadas: depende de reconocer que algo no cuadra y preguntar antes de actuar. Nadie espera que sepas todo el primer día, pero si que reportes cualquier duda.",
        scenario:
          "El segundo día recibes un correo de 'Recursos Humanos' pidiendo confirmar tus datos bancarios en un formulario externo para procesar tu primer pago.",
        actions: [
          "Antes de tu primera semana, guarda el contacto oficial de tu jefe directo y de RH.",
          "Si algo te presiona a actuar rápido o parece fuera de lo normal, preguntale a tu jefe directo o a RH por un canal ya conocido.",
          "Nunca te sientas mal por preguntar dos veces si algo no te queda claro."
        ],
        takeaways: [
          "Ser nuevo no es una debilidad, es una razón para verificar más.",
          "Los procesos reales de la empresa no dan miedo ni presionan.",
          "Preguntar a tiempo es parte normal de integrarte."
        ]
      },
      {
        title: "Tu identidad digital en la empresa",
        video: "contrasenas",
        duration: "7 min",
        body:
          "Tu cuenta corporativa es la llave de todo: correo, sistemas, documentos y en muchos casos datos de clientes. Desde el primer día debes usar una contraseña única para tus accesos de trabajo, distinta a la de tus redes sociales o servicios personales, y activar la autenticación multifactor si tu equipo de TI la ofrece. Nunca debes compartir tu usuario o contraseña con nadie, ni siquiera con un compañero que 'solo necesita entrar un momento'.",
        scenario:
          "Un compañero de otro equipo te pide tu contraseña porque 'el sistema no le deja entrar' y tiene prisa por terminar un reporte.",
        actions: [
          "Crea una contraseña larga y única para tus accesos de trabajo desde el primer día.",
          "Activa MFA en cuanto tu equipo de TI te lo indique.",
          "Nunca compartas tu contraseña; si alguien la necesita, esa persona debe pedir su propio acceso a TI."
        ],
        takeaways: [
          "Tu contraseña es personal e intransferible, sin excepciones.",
          "MFA protege tu cuenta aunque alguien más conozca tu contraseña.",
          "Compartir accesos rompe la trazabilidad de quien hizo que."
        ]
      },
      {
        title: "Correo, chat y videollamadas seguras",
        video: "phishing",
        duration: "8 min",
        body:
          "En tus primeras semanas vas a recibir muchos correos e invitaciones de gente que todavía no conoces, lo que hace más difícil detectar un mensaje falso. Revisa siempre el dominio del remitente, desconfía de enlaces o archivos inesperados, y valida invitaciones a videollamada que no reconozcas antes de entrar. Si un mensaje te pide una acción urgente o secreta, es una señal de alerta, sin importar quien diga ser el remitente.",
        scenario:
          "Recibes un correo de un supuesto proveedor de TI pidiendo que instales una herramienta 'para configurar tu equipo' antes de tu inducción oficial.",
        actions: [
          "Revisa el dominio real del remitente antes de abrir enlaces o adjuntos.",
          "No instales software que no venga de tu equipo de TI por el canal oficial.",
          "Confirma con tu jefe directo si un mensaje inesperado dice ser parte de tu proceso de inducción."
        ],
        takeaways: [
          "No conocer todavía a todo el equipo no significa confiar en cualquier mensaje.",
          "La instalación de software siempre debe pasar por TI.",
          "La inducción real no depende de enlaces externos urgentes."
        ]
      },
      {
        title: "Dispositivos y accesos del primer día",
        video: "accesos_ti",
        duration: "7 min",
        body:
          "Tu equipo de computo, credenciales, gafete y accesos fisicos son parte de tu responsabilidad desde el primer momento. Bloquea tu pantalla cuando te alejes, no conectes memorias USB desconocidas, y reporta de inmediato si pierdes tu laptop, telefono de trabajo o gafete. Si trabajas desde casa, cuida que tu red y tu espacio de trabajo también protejan la información de la empresa.",
        scenario:
          "Dejas tu laptop desbloqueada en una sala de juntas mientras vas por un cafe, y alguien que no conoces está sentado cerca.",
        actions: [
          "Bloquea tu equipo cada vez que te alejes, aunque sea por poco tiempo.",
          "No conectes USB o dispositivos desconocidos a tu equipo de trabajo.",
          "Reporta de inmediato la pérdida o robo de cualquier dispositivo o credencial."
        ],
        takeaways: [
          "Un equipo desbloqueado es una puerta abierta a toda tu cuenta.",
          "Los dispositivos desconocidos pueden contener malware.",
          "Reportar rápido una pérdida reduce el riesgo para toda la empresa."
        ]
      },
      {
        title: "A quien y como reportar",
        video: "identidad",
        duration: "7 min",
        body:
          "Saber a quien reportar es tan importante como identificar el riesgo. Cada empresa tiene un canal definido: puede ser un correo, un chat de TI o seguridad, o tu jefe directo. Reportar no te mete en problemas ni te hace ver mal; al contrario, ayuda a proteger a todo el equipo. Entre más rápido se reporte algo sospechoso, más fácil es contenerlo antes de que cause daño real.",
        scenario:
          "Diste clic sin pensar en un enlace de un correo que después te parecio raro, y no sabes si debes decir algo.",
        actions: [
          "Guarda desde tu primera semana el canal oficial de reporte de seguridad.",
          "Reporta cualquier duda, aunque no estes seguro si es grave.",
          "No borres el mensaje o evidencia antes de reportar."
        ],
        takeaways: [
          "Reportar siempre es la decisión correcta, incluso si resulta no ser nada.",
          "Nadie espera que un nuevo ingreso identifique todo perfecto.",
          "La rapidez del reporte importa más que tener certeza total."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Por qué las personas de nuevo ingreso son un objetivo comun de fraude?",
        options: ["Porque todavía no conocen los procesos internos", "Porque tienen más privilegios que nadie", "Porque no usan correo electrónico"],
        correct: 0
      },
      {
        text: "¿Qué debes hacer si un compañero te pide tu contraseña?",
        options: ["Negarte y decirle que pida su propio acceso a TI", "Compartirla si tiene prisa", "Cambiarla después de prestarla"],
        correct: 0
      },
      {
        text: "¿Qué señal debe hacerte dudar de un correo de inducción?",
        options: ["Qué pida instalar software fuera del canal oficial de TI", "Qué venga de Recursos Humanos", "Qué tenga el logo de la empresa"],
        correct: 0
      },
      {
        text: "¿Qué debes hacer al alejarte de tu equipo de computo?",
        options: ["Bloquear la pantalla", "Dejarlo abierto si vuelves pronto", "Apagar solo el monitor"],
        correct: 0
      },
      {
        text: "¿Qué pasa si reportas algo sospechoso y al final no era nada grave?",
        options: ["Fue la decisión correcta de todas formas", "Te vas a meter en problemas", "Debiste estar 100% seguro antes de reportar"],
        correct: 0
      }
    ]
  },
  "sales-course": {
    overview:
      "Ruta para Ventas y Atención a Clientes enfocada en proteger datos de clientes en el CRM, detectar vishing e ingeniería social, y cerrar ventas validando canales oficiales.",
    lessons: [
      {
        title: "Protección de datos de clientes en el CRM",
        video: "proteger_empresa",
        duration: "7 min",
        body:
          "El CRM concentra datos de contacto, historial de compras, preferencias y a veces información financiera de tus clientes. Exportar reportes completos a tu correo personal, a una hoja de cálculo suelta o a un USB parece práctico, pero multiplica el riesgo de fuga. El acceso al CRM debe limitarse a lo necesario para tu trabajo, y cualquier exportación masiva debería tener una razón de negocio clara.",
        scenario:
          "Antes de un viaje, exportas toda tu cartera de clientes a una hoja de cálculo y la guardas en tu correo personal 'por si acaso' no tienes internet.",
        actions: [
          "Evita exportar datos de clientes fuera de las herramientas autorizadas.",
          "Usa el CRM desde dispositivos y cuentas corporativas, nunca cuentas personales.",
          "Solicita acceso solo a los clientes o territorios que realmente manejas."
        ],
        takeaways: [
          "Un CRM exportado sin control es una base de datos filtrada esperando a ocurrir.",
          "La comodidad personal no vale el riesgo de exponer a un cliente.",
          "Menos acceso innecesario significa menos impacto si algo falla."
        ]
      },
      {
        title: "Llamadas fraudulentas a ventas y soporte",
        video: "ia_fraude",
        duration: "8 min",
        body:
          "Los equipos de ventas y atención reciben muchas llamadas de números desconocidos, lo que los vuelve un blanco frecuente de vishing: llamadas donde alguien se hace pasar por un cliente, proveedor o directivo para pedir descuentos indebidos, cambios de cuenta o información confidencial. Con inteligencia artificial, hoy es posible imitar voces conocidas con solo unos segundos de audio, así que la voz por si sola ya no es prueba suficiente de identidad.",
        scenario:
          "Una llamada con voz muy parecida a la de un cliente frecuente pide con urgencia cambiar la cuenta de facturación antes de que 'se cierre el trimestre'.",
        actions: [
          "Valida cambios de datos de facturación o pago por un canal ya conocido, no por la misma llamada.",
          "Desconfia de solicitudes urgentes que buscan saltarse el proceso normal.",
          "Reporta llamadas sospechosas al equipo de seguridad, aunque parezcan menores."
        ],
        takeaways: [
          "Una voz conocida ya no garantiza que la persona sea quien dice ser.",
          "Los cambios de cuenta o pago siempre deben validarse por un segundo canal.",
          "La presión de urgencia es una señal, no una razón para saltarse el proceso."
        ]
      },
      {
        title: "Ingeniería social en redes profesionales",
        video: "ingenieria_social",
        duration: "7 min",
        body:
          "LinkedIn y otras redes profesionales son una fuente comun de reconocimiento para atacantes: revisan tu puesto, tus clientes, tus conexiones y tus publicaciones para preparar mensajes creibles. Un supuesto reclutador, cliente potencial o socio puede iniciar una conversación amistosa que termina pidiendo información interna, acceso a un documento o una reunión fuera del canal oficial de la empresa.",
        scenario:
          "Un perfil que dice ser de un cliente importante te escribe por LinkedIn pidiendo la lista de precios especiales y el nombre de tu contacto interno de finanzas.",
        actions: [
          "Verifica identidad y contexto antes de compartir información comercial sensible por redes sociales.",
          "Mueve conversaciones de negocio reales a canales corporativos verificados.",
          "Evita publicar detalles operativos de clientes o procesos internos en tu perfil."
        ],
        takeaways: [
          "Las redes profesionales también son un vector de ingeniería social.",
          "La información pública en tu perfil puede usarse para hacer un engano más creible.",
          "El negocio real se confirma en canales corporativos, no en mensajes directos."
        ]
      },
      {
        title: "Pagos y datos financieros de clientes",
        video: "fraude_bec",
        duration: "7 min",
        body:
          "Cuando ventas involucra cobros, anticipos o datos de tarjeta, el manejo debe seguir el proceso autorizado por la empresa: enlaces de pago oficiales, terminal certificada o el área de cobranza, nunca capturar números de tarjeta por chat, correo o nota. Un cambio de cuenta bancaria para recibir un pago, o una solicitud de descuento fuera de política con urgencia, son señales clasicas de fraude financiero dirigido a ventas.",
        scenario:
          "Un cliente pide que le mandes el link de pago a una cuenta 'nueva' porque la anterior tuvo un problema, y quiere cerrar hoy mismo.",
        actions: [
          "Usa únicamente los métodos de cobro autorizados por la empresa.",
          "Nunca guardes ni envies datos completos de tarjeta por chat o correo.",
          "Valida cualquier cambio de cuenta de cobro con el área financiera antes de proceder."
        ],
        takeaways: [
          "El manejo de pagos no se improvisa por conveniencia del cierre.",
          "Un cambio de cuenta de última hora siempre debe validarse.",
          "Proteger los datos de pago del cliente protege también tu reputación como vendedor."
        ]
      },
      {
        title: "Suplantación de tu marca ante clientes",
        video: "identidad",
        duration: "7 min",
        body:
          "Los atacantes pueden crear perfiles, sitios o cuentas de mensajería que imitan a la empresa para enganar a tus clientes: ofertas falsas, solicitudes de pago a nombre tuyo o de tu equipo, o soporte técnico falso. Esto no solo afecta al cliente, también dana la confianza en tu marca personal y en la empresa. Si un cliente te reporta un mensaje raro 'de parte tuya' que tu no enviaste, es una alerta que debe escalarse de inmediato.",
        scenario:
          "Un cliente te escribe agradeciendo la 'promoción especial' que le mandaste por WhatsApp, pero tu nunca enviaste ese mensaje.",
        actions: [
          "Escala de inmediato cualquier reporte de suplantación de tu marca o tu nombre.",
          "Avisa a tus clientes por un canal oficial si detectas una campana de suplantación activa.",
          "Manten actualizados tus canales oficiales para que los clientes puedan verificarlos."
        ],
        takeaways: [
          "La suplantación de marca es un ataque tanto al cliente como a la empresa.",
          "Escalar rápido limita cuantos clientes son enganados.",
          "La confianza del cliente se protege siendo transparente sobre el incidente."
        ]
      },
      {
        title: "Cierre de venta seguro",
        video: "phishing",
        duration: "6 min",
        body:
          "En el cierre de una venta importante, la prisa y el entusiasmo pueden bajar la guardia. Antes de firmar, cobrar o entregar acceso, confirma que los documentos, correos y contactos correspondan a canales verificados. Un contrato, factura o solicitud de firma que llega por un canal inusual, con cambios de última hora, merece una validación extra antes de continuar.",
        scenario:
          "Llega un contrato para firma electrónica desde un dominio parecido al del cliente, con una cláusula de pago distinta a lo acordado en la reunión.",
        actions: [
          "Confirma cualquier documento de cierre por el canal y dominio oficial ya conocido.",
          "Compara condiciones finales contra lo acordado antes de firmar o cobrar.",
          "Reporta discrepancias de último momento antes de continuar con el cierre."
        ],
        takeaways: [
          "El entusiasmo de cerrar una venta no debe saltarse la validación.",
          "Los cambios de última hora en documentos son una señal de alerta.",
          "Verificar antes de firmar protege el trato y a ambas partes."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Por qué exportar el CRM completo a un correo personal es riesgoso?",
        options: ["Multiplica el riesgo de fuga de datos de clientes", "Mejora la seguridad de respaldo", "Es la única forma de trabajar sin internet"],
        correct: 0
      },
      {
        text: "¿Qué hacer ante una llamada urgente que pide cambiar datos de facturación?",
        options: ["Validar por un canal ya conocido antes de actuar", "Cambiarlo de inmediato para no perder al cliente", "Pedir que lo repita para confirmar la voz"],
        correct: 0
      },
      {
        text: "¿Qué riesgo representan las redes profesionales como LinkedIn?",
        options: ["Pueden usarse para preparar ingeniería social dirigida", "Eliminan la necesidad de verificar identidad", "Son un canal oficial de cobranza"],
        correct: 0
      },
      {
        text: "¿Cómo se deben capturar los datos de pago de un cliente?",
        options: ["Solo con los métodos de cobro autorizados por la empresa", "Por chat para agilizar el cierre", "Guardados en una nota personal"],
        correct: 0
      },
      {
        text: "¿Qué debes hacer si un cliente reporta un mensaje 'tuyo' que no enviaste?",
        options: ["Escalarlo de inmediato", "Ignorarlo si el cliente no perdio dinero", "Responder tu mismo sin avisar a nadie"],
        correct: 0
      },
      {
        text: "¿Qué señal de alerta aparece en un cierre de venta riesgoso?",
        options: ["Cambios de última hora en el documento o canal", "Qué el cliente confirme por escrito", "Qué el contrato llegue del dominio conocido"],
        correct: 0
      }
    ]
  },
  "legal-course": {
    overview:
      "Ruta para Legal y Cumplimiento sobre protección de datos personales, respuesta a brechas, cláusulas de seguridad con proveedores y riesgo legal de IA y deepfakes.",
    lessons: [
      {
        title: "Protección de datos personales: fundamentos",
        video: "proteger_empresa",
        duration: "8 min",
        body:
          "La protección de datos personales exige informar a las personas para que sirven sus datos, pedir su consentimiento cuando corresponde, y limitar el uso a esas finalidades. Además, las personas tienen derechos de acceso, rectificación, cancelación y oposición sobre su información. El área legal debe asegurar que exista un aviso de privacidad claro y que otras áreas conozcan que datos pueden recolectar y como deben tratarlos.",
        scenario:
          "Marketing quiere usar la base de clientes para una campana nueva que no estaba contemplada en el aviso de privacidad original.",
        actions: [
          "Verifica que cualquier nuevo uso de datos personales sea compatible con el aviso de privacidad vigente.",
          "Documenta las finalidades y bases legales de cada tratamiento de datos.",
          "Atiende solicitudes de derechos ARCO dentro de los plazos establecidos."
        ],
        takeaways: [
          "Los datos personales solo deben usarse para lo que se informo a la persona.",
          "Un aviso de privacidad desactualizado es un riesgo legal real.",
          "Los derechos de las personas sobre sus datos deben poder ejercerse fácilmente."
        ]
      },
      {
        title: "Qué hacer ante una brecha de datos",
        video: "identidad",
        duration: "8 min",
        body:
          "Ante una posible brecha de datos, legal debe coordinarse rápido con TI, seguridad y comunicación para entender el alcance, contener el incidente y evaluar si existe obligación de notificar a las personas afectadas o a la autoridad correspondiente, y en que plazo. Actuar tarde o sin documentar las decisiones aumenta el riesgo legal y reputacional, incluso si el incidente técnico ya fue contenido.",
        scenario:
          "TI confirma que una base de datos con información de clientes estuvo expuesta por error durante varias horas antes de corregirse.",
        actions: [
          "Activa el protocolo de respuesta a incidentes con TI, seguridad y comunicación.",
          "Evalua el alcance real, los datos involucrados y las obligaciones de notificación.",
          "Documenta cada decisión, plazo y acción tomada durante la respuesta."
        ],
        takeaways: [
          "La velocidad y la documentación de la respuesta importan tanto como la contención técnica.",
          "No toda exposición requiere el mismo tipo de notificación; el análisis legal es clave.",
          "Una respuesta ordenada reduce el riesgo legal, aunque el incidente ya haya ocurrido."
        ]
      },
      {
        title: "Cláusulas de seguridad con proveedores",
        video: "accesos_ti",
        duration: "7 min",
        body:
          "Cuando un proveedor procesa datos o tiene acceso a sistemas de la empresa, el contrato debe incluir obligaciones claras de seguridad: confidencialidad, medidas mínimas de protección, notificación de incidentes y, cuando aplique, derecho de auditoría. Sin estas cláusulas, un incidente en el proveedor puede convertirse en un problema legal para tu empresa sin herramientas contractuales para exigir responsabilidad.",
        scenario:
          "Un proveedor de nomina sufre un incidente de seguridad y la empresa se entera por redes sociales, no por el proveedor.",
        actions: [
          "Incluye cláusulas de notificación de incidentes con plazos definidos en los contratos con proveedores.",
          "Exige medidas mínimas de seguridad y confidencialidad para quien procese datos de la empresa.",
          "Revisa periódicamente el cumplimiento de proveedores críticos."
        ],
        takeaways: [
          "Un buen contrato es una herramienta de seguridad, no solo un tramite legal.",
          "La notificación de incidentes debe ser una obligación contractual explicita.",
          "El riesgo de un proveedor puede volverse un riesgo legal propio."
        ]
      },
      {
        title: "Conservación y destrucción segura de documentos",
        video: "proteger_empresa",
        duration: "7 min",
        body:
          "Guardar información para siempre 'por si se necesita' aumenta el riesgo sin necesidad: entre más datos acumulados, mayor es el impacto de una fuga. Legal debe definir cuanto tiempo se conserva cada tipo de documento o dato personal, y asegurar que al vencer ese plazo se elimine de forma segura, no solo se mueva a otra carpeta. La destrucción debe dejar evidencia de que realmente ocurrió.",
        scenario:
          "Se descubren expedientes de exempleados de hace más de diez años guardados sin ninguna razón de negocio vigente.",
        actions: [
          "Define periodos de conservación claros por tipo de documento o dato.",
          "Elimina de forma segura la información que ya cumplio su plazo o finalidad.",
          "Deja evidencia documentada de los procesos de destrucción."
        ],
        takeaways: [
          "Guardar información indefinidamente no es una práctica segura, es un riesgo acumulado.",
          "La destrucción segura debe ser verificable, no solo asumida.",
          "Menos datos guardados sin razón significa menos exposición futura."
        ]
      },
      {
        title: "Riesgo legal de IA y deepfakes",
        video: "deepfakes",
        duration: "8 min",
        body:
          "El uso de inteligencia artificial trae preguntas legales nuevas: quien es responsable si una herramienta de IA usa datos personales sin base legal, o si un deepfake se usa para suplantar a un directivo, danar la reputación de la empresa o cometer fraude. Legal debe participar en la adopción de herramientas de IA dentro de la empresa y ayudar a definir como actuar y que evidencia conservar si la empresa es victima de un fraude con deepfake.",
        scenario:
          "Circula un video manipulado donde parece que el director general anuncia una decisión que nunca tomó.",
        actions: [
          "Define un protocolo de respuesta legal y de comunicación ante contenido falso generado con IA.",
          "Involucra a legal antes de adoptar herramientas de IA que usen datos personales o de clientes.",
          "Conserva evidencia técnica y cronologica si la empresa es victima de un deepfake."
        ],
        takeaways: [
          "La IA generativa crea riesgos legales nuevos que antes no existian.",
          "La velocidad de respuesta importa tanto en un deepfake como en cualquier otro incidente.",
          "Legal debe ser parte de las decisiones sobre adopción de IA, no solo reaccionar después."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Para que deben usarse los datos personales de un cliente?",
        options: ["Solo para las finalidades informadas y consentidas", "Para cualquier campana futura sin restricción", "Solo si el cliente lo pregunta"],
        correct: 0
      },
      {
        text: "¿Qué debe pasar primero ante una posible brecha de datos?",
        options: ["Activar el protocolo de respuesta y evaluar el alcance", "Esperar a que alguien más lo reporte", "Borrar los registros para evitar confusión"],
        correct: 0
      },
      {
        text: "¿Qué debe incluir un contrato con un proveedor que maneja datos de la empresa?",
        options: ["Cláusulas de seguridad y notificación de incidentes", "Solo el precio y tiempo de entrega", "Ninguna obligación adicional de seguridad"],
        correct: 0
      },
      {
        text: "¿Qué riesgo tiene guardar documentos sin límite de tiempo?",
        options: ["Aumenta el impacto de una fuga si algo falla", "Ninguno, más información siempre es mejor", "Solo afecta el espacio de almacenamiento"],
        correct: 0
      },
      {
        text: "¿Qué debe hacer legal ante un posible deepfake que afecta a la empresa?",
        options: ["Activar un protocolo de respuesta y conservar evidencia", "Ignorarlo hasta que se vuelva viral", "Responder de inmediato sin validar los hechos"],
        correct: 0
      }
    ]
  },
  "devsecure-course": {
    overview:
      "Ruta de desarrollo seguro para TI sobre OWASP Top 10, inyección, gestión de credenciales, seguridad en repositorios, control de acceso en aplicaciones y dependencias en CI/CD.",
    lessons: [
      {
        title: "OWASP Top 10: panorama general",
        video: "owasp_top10",
        duration: "8 min",
        body:
          "El OWASP Top 10 resume los riesgos más comunes y de mayor impacto en aplicaciones web: pérdida de control de acceso, fallas criptograficas, inyección, errores de diseño, mala configuración, componentes vulnerables, fallas de autenticación, entre otros. No es una lista teorica: describe los patrones que más se explotan en incidentes reales. Conocerla ayuda a priorizar que revisar primero en el diseño y revisión de código.",
        scenario:
          "Un equipo va a lanzar una funcionalidad nueva y quiere saber por donde empezar la revisión de seguridad antes de salir a producción.",
        actions: [
          "Usa el OWASP Top 10 como checklist mínimo antes de lanzar funcionalidad nueva.",
          "Prioriza revisar control de acceso, validación de entradas y manejo de credenciales.",
          "Actualiza el conocimiento del equipo cuando OWASP publique una versión nueva."
        ],
        takeaways: [
          "La mayoría de incidentes de aplicaciones repiten un número pequeño de patrones conocidos.",
          "Conocer el Top 10 no sustituye una revisión completa, pero ordena las prioridades.",
          "La seguridad en desarrollo empieza en el diseño, no solo en producción."
        ]
      },
      {
        title: "Inyección y validación de entradas",
        video: "owasp_top10",
        duration: "8 min",
        body:
          "La inyección ocurre cuando datos que vienen del usuario se interpretan como parte de un comando o consulta, como en SQL injection o cross-site scripting. La defensa principal es nunca confiar en la entrada del usuario: usar consultas parametrizadas en vez de construir texto directamente, validar formato y longitud, y escapar la salida antes de mostrarla en una página.",
        scenario:
          "Un formulario de busqueda arma la consulta a la base de datos concatenando directamente el texto que escribe el usuario.",
        actions: [
          "Usa consultas parametrizadas o un ORM en vez de concatenar texto de usuario.",
          "Valida y limita el formato esperado de cada campo de entrada.",
          "Escapa la salida al mostrar contenido generado por usuarios en una página."
        ],
        takeaways: [
          "Toda entrada de usuario debe tratarse como potencialmente maliciosa.",
          "La inyección sigue siendo una de las fallas más explotadas y más prevenibles.",
          "Validar en el cliente no reemplaza validar también en el servidor."
        ]
      },
      {
        title: "Gestión segura de credenciales y secretos",
        video: "contrasenas",
        duration: "7 min",
        body:
          "Las credenciales, llaves de API y tokens nunca deben quedar escritas directamente en el código ni subirse a un repositorio, ni siquiera en un commit que después se borra, porque el historial de Git conserva ese registro. Lo correcto es usar variables de entorno o un gestor de secretos, rotarlas periódicamente, y limitar quien puede verlas según el principio de mínimo privilegio.",
        scenario:
          "Un desarrollador sube por error una llave de API valida a un repositorio público dentro de un archivo de configuración.",
        actions: [
          "Nunca incluyas credenciales o llaves directamente en el código fuente.",
          "Usa un gestor de secretos o variables de entorno fuera del repositorio.",
          "Si una credencial se expone, rotala de inmediato en vez de solo borrar el commit."
        ],
        takeaways: [
          "El historial de Git conserva lo que se subio, aunque se borre después.",
          "Rotar una credencial expuesta es más seguro que confiar en que nadie la vio.",
          "Menos personas y sistemas con acceso a un secreto significa menos riesgo."
        ]
      },
      {
        title: "Seguridad en repositorios y control de versiones",
        video: "accesos_ti",
        duration: "7 min",
        body:
          "El repositorio de código es tan sensible como cualquier otro sistema crítico. Las ramas principales deben protegerse para exigir revisión antes de fusionar cambios, los permisos deben asignarse por rol, y las cuentas de exempleados o colaboradores externos deben revocarse a tiempo. Revisar el código de otra persona no es solo buscar errores logicos: también es una oportunidad para detectar riesgos de seguridad antes de que lleguen a producción.",
        scenario:
          "Un exdesarrollador contratista sigue teniendo acceso de escritura al repositorio principal meses después de terminar su contrato.",
        actions: [
          "Protege las ramas principales con revisión obligatoria antes de fusionar.",
          "Revoca accesos de repositorio en cuanto termine una colaboración externa o interna.",
          "Incluye revisión de seguridad básica dentro del proceso normal de revisión de código."
        ],
        takeaways: [
          "Un repositorio sin control de accesos es tan riesgoso como un servidor sin contraseña.",
          "La revocación de accesos debe ser parte del proceso de baja, no un pendiente.",
          "La revisión de código es también una capa de seguridad."
        ]
      },
      {
        title: "Autenticación y control de acceso en aplicaciones",
        video: "mfa",
        duration: "8 min",
        body:
          "Una aplicación segura no solo verifica quien eres al iniciar sesión, también debe verificar en cada acción que tengas permiso para hacerla. Los errores de control de acceso ocurren cuando la aplicación confía en datos que el usuario puede manipular, como un identificador en la URL, para decidir que información mostrar. El diseño debe aplicar mínimo privilegio y validar permisos en el servidor, no solo ocultar opciones en la interfaz.",
        scenario:
          "Un usuario cambia el número de una factura en la URL y logra ver el documento de otro cliente distinto al suyo.",
        actions: [
          "Valida permisos en el servidor para cada solicitud, no solo en la interfaz.",
          "Nunca confies en identificadores que el usuario puede modificar sin verificar propiedad.",
          "Ofrece MFA como opción o requisito para cuentas con datos sensibles."
        ],
        takeaways: [
          "Ocultar un boton en la interfaz no es lo mismo que proteger el acceso real.",
          "Cada solicitud al servidor debe validar que el usuario tiene permiso sobre ese dato específico.",
          "El control de acceso roto es uno de los riesgos más comunes y más daninos."
        ]
      },
      {
        title: "Dependencias y seguridad en CI/CD",
        video: "owasp_top10",
        duration: "8 min",
        body:
          "Cada librería externa que usas es código que no escribiste pero que corre con los mismos permisos que tu aplicación. Mantener dependencias actualizadas, revisar alertas de vulnerabilidades conocidas y evitar paquetes sin mantenimiento reduce ese riesgo. El pipeline de CI/CD también necesita protección: los secretos usados para desplegar no deben quedar visibles en logs, y solo cambios revisados deberían poder llegar a producción.",
        scenario:
          "Una alerta automática reporta una vulnerabilidad conocida en una librería que el proyecto usa desde hace más de un año sin actualizar.",
        actions: [
          "Revisa y atiende alertas de vulnerabilidades en dependencias con prioridad según severidad.",
          "Evita agregar librerias sin mantenimiento activo o de origen desconocido.",
          "Protege los secretos del pipeline de CI/CD y evita que se impriman en logs."
        ],
        takeaways: [
          "Una dependencia vulnerable es una puerta trasera involuntaria a tu aplicación.",
          "Actualizar librerias es mantenimiento de seguridad, no solo de funcionalidad.",
          "El pipeline que despliega tu aplicación también es parte de la superficie de ataque."
        ]
      }
    ],
    quiz: [
      {
        text: "¿Para que sirve el OWASP Top 10?",
        options: ["Prioriza los riesgos más comunes en aplicaciones web", "Reemplaza cualquier revisión de seguridad", "Aplica solo a bases de datos"],
        correct: 0
      },
      {
        text: "¿Cuál es la mejor defensa contra inyección?",
        options: ["Consultas parametrizadas y validación de entradas", "Confiar en la validación del lado del cliente", "Aumentar el tamaño del campo de texto"],
        correct: 0
      },
      {
        text: "¿Qué hacer si una credencial se expone en un repositorio?",
        options: ["Rotarla de inmediato", "Borrar el commit y no decir nada", "Esperar a ver si alguien la usa"],
        correct: 0
      },
      {
        text: "¿Qué debe pasar antes de fusionar cambios a la rama principal?",
        options: ["Una revisión obligatoria de código", "Nada, cualquiera puede fusionar directo", "Solo una prueba manual rápida"],
        correct: 0
      },
      {
        text: "¿Dónde debe validarse el permiso sobre un dato sensible?",
        options: ["En el servidor, en cada solicitud", "Solo ocultando el boton en la interfaz", "Solo al iniciar sesión"],
        correct: 0
      },
      {
        text: "¿Qué riesgo tiene una dependencia sin actualizar?",
        options: ["Puede tener vulnerabilidades conocidas explotables", "Ninguno si el proyecto funciona bien", "Solo afecta el tiempo de compilación"],
        correct: 0
      }
    ]
  }
};
