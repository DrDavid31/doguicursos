window.DOGUI_COURSE_CONTENT = {
  "basic-course": {
    overview:
      "Curso de entrada para que cualquier empleado aprenda a detectar riesgos comunes, proteger cuentas y reportar incidentes a tiempo.",
    lessons: [
      {
        title: "Que es la ciberseguridad",
        duration: "8 min",
        body:
          "La ciberseguridad protege cuentas, equipos, informacion y procesos de negocio. En una empresa, el riesgo no depende solo de tecnologia: tambien depende de decisiones diarias como abrir archivos, responder mensajes, usar contrasenas o compartir informacion.",
        scenario:
          "Un empleado recibe un correo que parece interno y pide abrir un archivo para revisar una politica nueva. El mensaje tiene urgencia, pero no viene de un canal habitual.",
        actions: [
          "Revisa remitente, dominio y contexto antes de abrir archivos.",
          "No entregues usuarios, contrasenas ni codigos MFA por correo o chat.",
          "Reporta cualquier mensaje sospechoso al canal definido por la empresa."
        ],
        takeaways: [
          "La ciberseguridad es responsabilidad de todos.",
          "La urgencia es una senal comun en fraudes.",
          "Reportar rapido reduce el impacto."
        ]
      },
      {
        title: "Phishing, links y archivos sospechosos",
        duration: "12 min",
        body:
          "El phishing busca que una persona de clic, descargue un archivo o entregue datos. Puede llegar por correo, WhatsApp, redes sociales o plataformas de colaboracion. Un link sospechoso puede usar dominios parecidos, acortadores o mensajes de premio, bloqueo o pago urgente.",
        scenario:
          "Llega una supuesta notificacion de paqueteria con un link para pagar una tarifa pequena. El sitio pide usuario corporativo para continuar.",
        actions: [
          "Pasa el cursor sobre links antes de abrirlos.",
          "Abre servicios importantes escribiendo la direccion oficial en el navegador.",
          "Si abriste un archivo raro, desconecta la red si tu politica lo indica y reporta de inmediato."
        ],
        takeaways: [
          "No todos los correos falsos tienen errores de ortografia.",
          "Un archivo puede ser malicioso aunque parezca factura, CV o PDF.",
          "Reportar es mejor que borrar en silencio."
        ]
      },
      {
        title: "Contrasenas y autenticacion multifactor",
        duration: "10 min",
        body:
          "Una contrasena segura debe ser larga, unica y dificil de adivinar. MFA agrega una segunda validacion, como una app, llave fisica o codigo. MFA no reemplaza una buena contrasena, pero reduce el riesgo si la contrasena se filtra.",
        scenario:
          "Un atacante obtiene una contrasena filtrada de otro sitio. Si la persona la reutiliza en el correo corporativo y no hay MFA, el acceso puede quedar expuesto.",
        actions: [
          "Usa frases largas y diferentes para cada servicio.",
          "Activa MFA en correo, nube, bancos y cuentas criticas.",
          "Nunca apruebes una solicitud MFA que no iniciaste."
        ],
        takeaways: [
          "La reutilizacion de contrasenas es un riesgo alto.",
          "MFA debe estar activo en cuentas criticas.",
          "Una solicitud MFA inesperada se debe reportar."
        ]
      },
      {
        title: "Informacion sensible y redes sociales",
        duration: "10 min",
        body:
          "La informacion sensible incluye datos personales, datos financieros, contratos, credenciales, procesos internos y archivos de clientes. Compartir demasiada informacion en redes sociales puede facilitar suplantaciones, fraudes o ataques dirigidos.",
        scenario:
          "Una persona publica en LinkedIn que estara de viaje y etiqueta a su equipo. Un atacante usa esa informacion para simular una solicitud urgente.",
        actions: [
          "Comparte informacion interna solo por canales autorizados.",
          "Evita publicar viajes, organigramas, sistemas o procesos internos.",
          "Valida permisos antes de enviar archivos con datos personales."
        ],
        takeaways: [
          "La informacion sensible tambien puede estar en capturas o chats.",
          "Las redes sociales ayudan a preparar ataques dirigidos.",
          "Menos exposicion publica significa menos oportunidades de fraude."
        ]
      },
      {
        title: "Que hacer ante un incidente",
        duration: "8 min",
        body:
          "Un incidente puede ser un clic en un link falso, un archivo sospechoso, perdida de equipo, envio de informacion por error o acceso no reconocido. Lo importante es reportar rapido, conservar evidencia y no intentar ocultarlo.",
        scenario:
          "Un empleado ingreso sus datos en una pagina falsa y despues se dio cuenta de que el dominio no era oficial.",
        actions: [
          "Reporta hora, canal, evidencia y acciones realizadas.",
          "No borres correos, mensajes ni archivos relacionados.",
          "Cambia contrasenas solo siguiendo instrucciones de TI o seguridad."
        ],
        takeaways: [
          "El tiempo de respuesta cambia el impacto.",
          "La evidencia ayuda a contener el incidente.",
          "Reportar no es culpar: es proteger a la empresa."
        ]
      }
    ],
    quiz: [
      {
        text: "Que debes hacer si recibes un correo urgente que pide tu contrasena?",
        options: ["Responder rapido", "Reportarlo y no entregar datos", "Reenviarlo a proveedores"],
        correct: 1
      },
      {
        text: "Cual es una senal de posible phishing?",
        options: ["Urgencia y link sospechoso", "Logo de la empresa", "Un saludo formal"],
        correct: 0
      },
      {
        text: "Para que sirve MFA?",
        options: ["Para compartir cuentas", "Para agregar una segunda verificacion", "Para eliminar reportes"],
        correct: 1
      },
      {
        text: "Que informacion puede ser sensible?",
        options: ["Solo contrasenas", "Datos personales, contratos y procesos internos", "Solo archivos cifrados"],
        correct: 1
      },
      {
        text: "Si abriste un archivo sospechoso, que conviene hacer?",
        options: ["Reportar de inmediato", "Ocultarlo", "Mandarlo al equipo"],
        correct: 0
      }
    ]
  },
  "finance-course": {
    overview:
      "Ruta para reducir fraudes de pago, suplantacion de proveedores, facturas falsas y solicitudes urgentes dirigidas a Finanzas.",
    lessons: [
      {
        title: "Fraude de transferencias",
        duration: "9 min",
        body:
          "Los fraudes de transferencia explotan prisa, autoridad o cambios de cuenta. El atacante intenta que Finanzas ejecute un pago sin validar el origen real de la solicitud.",
        scenario:
          "Un supuesto director pide por correo una transferencia urgente antes del cierre bancario. El tono es presionante y pide discrecion.",
        actions: [
          "Valida solicitudes de pago por un segundo canal oficial.",
          "No ejecutes pagos por instrucciones recibidas solo por correo o chat.",
          "Documenta aprobaciones y excepciones."
        ],
        takeaways: [
          "La urgencia no reemplaza el proceso.",
          "La doble validacion protege dinero y reputacion.",
          "Las excepciones deben quedar registradas."
        ]
      },
      {
        title: "Facturas falsas y proveedores",
        duration: "10 min",
        body:
          "Los atacantes pueden enviar facturas falsas, modificar datos bancarios o suplantar proveedores reales. A veces usan cadenas de correo comprometidas para parecer confiables.",
        scenario:
          "Un proveedor conocido envia una nueva cuenta bancaria. El correo viene de una direccion parecida, pero no coincide exactamente con el dominio oficial.",
        actions: [
          "Confirma cambios de cuenta con contactos previamente registrados.",
          "Verifica dominio, RFC, orden de compra y datos bancarios.",
          "No uses telefonos o datos incluidos en el mensaje sospechoso para validar."
        ],
        takeaways: [
          "Un proveedor real tambien puede ser suplantado.",
          "El cambio de cuenta bancaria es una alerta critica.",
          "La validacion debe usar datos confiables previos."
        ]
      },
      {
        title: "Correos del director y pagos urgentes",
        duration: "8 min",
        body:
          "El fraude CEO usa autoridad para saltarse controles. Puede venir por correo, llamada, WhatsApp o incluso audio generado con IA. El objetivo es presionar para pagar, comprar tarjetas o revelar informacion.",
        scenario:
          "Un mensaje dice: 'Estoy en junta, no puedo hablar. Necesito que pagues esto ahora y me confirmes'.",
        actions: [
          "Sigue el flujo de autorizacion aunque el mensaje parezca venir de direccion.",
          "Pregunta por un canal alterno conocido.",
          "Escala cualquier solicitud fuera de politica."
        ],
        takeaways: [
          "La autoridad es una herramienta comun de ingenieria social.",
          "Los controles existen para momentos de presion.",
          "Direccion tambien debe seguir procesos."
        ]
      },
      {
        title: "Checklist de validacion bancaria",
        duration: "8 min",
        body:
          "Un checklist reduce errores cuando hay presion. Antes de pagar, valida identidad, monto, cuenta, concepto, aprobacion y evidencia. Si algo no coincide, pausa.",
        scenario:
          "La factura coincide con el proveedor, pero el monto y la cuenta bancaria cambiaron respecto a pagos anteriores.",
        actions: [
          "Confirma cuenta bancaria contra registros internos.",
          "Revisa historial de pagos y condiciones del proveedor.",
          "Marca como riesgo cualquier cambio inesperado de cuenta, urgencia o confidencialidad."
        ],
        takeaways: [
          "Pausar un pago sospechoso es una decision correcta.",
          "El historial ayuda a detectar anomalias.",
          "El checklist hace medible el control."
        ]
      }
    ],
    quiz: [
      {
        text: "Que debe hacerse ante una solicitud urgente de transferencia por correo?",
        options: ["Pagar y avisar despues", "Validar por otro canal oficial", "Responder con datos bancarios"],
        correct: 1
      },
      {
        text: "Que cambio de proveedor debe tratarse como alerta critica?",
        options: ["Cambio de logo", "Cambio de cuenta bancaria", "Cambio de asunto del correo"],
        correct: 1
      },
      {
        text: "Que busca el fraude CEO?",
        options: ["Saltar controles usando autoridad", "Actualizar antivirus", "Capacitar al personal"],
        correct: 0
      },
      {
        text: "Que dato NO conviene usar para validar un pago sospechoso?",
        options: ["Contacto registrado previamente", "Telefono incluido en el correo sospechoso", "Registro interno"],
        correct: 1
      },
      {
        text: "Cuando algo no coincide en una factura, que accion es mejor?",
        options: ["Pausar y validar", "Pagar por urgencia", "Eliminar el correo"],
        correct: 0
      }
    ]
  },
  "hr-course": {
    overview:
      "Ruta para Recursos Humanos enfocada en CVs maliciosos, documentos falsos, datos personales y fraudes a candidatos.",
    lessons: [
      {
        title: "CVs y archivos maliciosos",
        duration: "8 min",
        body:
          "RH recibe archivos de personas externas todos los dias. Un CV, portafolio o carta puede incluir macros, links maliciosos o adjuntos comprimidos peligrosos.",
        scenario:
          "Un candidato envia un archivo comprimido con contrasena y pide abrirlo rapido porque tiene otra oferta.",
        actions: [
          "Prefiere formatos seguros y plataformas autorizadas.",
          "No habilites macros en documentos de candidatos.",
          "Reporta archivos comprimidos, ejecutables o con contrasena inesperada."
        ],
        takeaways: [
          "Un CV puede ser el inicio de un ataque.",
          "Las macros no deben habilitarse por solicitud externa.",
          "La prisa de un candidato tambien puede ser una tecnica de presion."
        ]
      },
      {
        title: "Documentos falsos y validacion",
        duration: "8 min",
        body:
          "Documentos de identidad, comprobantes y cartas pueden falsificarse. RH debe validar con procesos definidos y evitar compartir copias sin control.",
        scenario:
          "Un candidato envia una identificacion que no coincide con los datos de su solicitud.",
        actions: [
          "Valida identidad con el proceso oficial.",
          "Evita almacenar documentos en carpetas personales.",
          "Limita acceso a expedientes de empleados y candidatos."
        ],
        takeaways: [
          "La validacion reduce fraude laboral.",
          "Los documentos personales requieren control de acceso.",
          "Las inconsistencias deben escalarse."
        ]
      },
      {
        title: "Proteccion de datos personales",
        duration: "9 min",
        body:
          "RH maneja datos personales sensibles: identificaciones, domicilios, salarios, evaluaciones, incapacidades y expedientes. Una fuga puede afectar a personas y a la empresa.",
        scenario:
          "Un jefe solicita por chat una lista completa de datos personales de empleados para revisarla fuera del sistema.",
        actions: [
          "Comparte solo los datos necesarios y por canales autorizados.",
          "Aplica permisos por rol y evita archivos abiertos a toda la empresa.",
          "Reporta envios incorrectos de informacion personal."
        ],
        takeaways: [
          "Menos datos compartidos significa menos riesgo.",
          "El canal importa tanto como el archivo.",
          "Los errores de envio tambien son incidentes."
        ]
      },
      {
        title: "Ofertas falsas e ingenieria social",
        duration: "7 min",
        body:
          "Atacantes pueden usar procesos de reclutamiento para obtener informacion interna, nombres, organigramas, herramientas usadas o datos de empleados.",
        scenario:
          "Un supuesto candidato insiste en conocer nombres de directores, herramientas internas y procesos de pago antes de una entrevista.",
        actions: [
          "No compartas informacion interna innecesaria con candidatos.",
          "Usa correos y plataformas oficiales de reclutamiento.",
          "Verifica perfiles sospechosos antes de avanzar."
        ],
        takeaways: [
          "Reclutamiento tambien es una puerta de entrada.",
          "La informacion operativa puede ser usada contra la empresa.",
          "Las ofertas falsas danan a candidatos y marca empleadora."
        ]
      }
    ],
    quiz: [
      {
        text: "Que archivo de candidato es mas riesgoso?",
        options: ["PDF normal", "Ejecutable o comprimido con contrasena", "Texto en correo"],
        correct: 1
      },
      {
        text: "Que debe hacerse con macros en documentos externos?",
        options: ["Habilitarlas", "No habilitarlas y reportar si es sospechoso", "Pedir otra macro"],
        correct: 1
      },
      {
        text: "Que tipo de dato maneja RH?",
        options: ["Datos personales y expedientes", "Solo inventario", "Solo contrasenas de TI"],
        correct: 0
      },
      {
        text: "Como compartir informacion de empleados?",
        options: ["Por cualquier chat", "Solo por canales autorizados y con minimo necesario", "En carpetas publicas"],
        correct: 1
      },
      {
        text: "Que puede buscar un atacante en reclutamiento?",
        options: ["Organigramas y procesos internos", "Colores de marca", "Horarios publicos"],
        correct: 0
      }
    ]
  },
  "direction-course": {
    overview:
      "Ruta ejecutiva para prevenir fraude CEO, deepfakes, robo de identidad y tomar mejores decisiones durante incidentes.",
    lessons: [
      {
        title: "Fraude CEO y autoridad",
        duration: "8 min",
        body:
          "Los atacantes suplantan a directores para ordenar pagos, cambios de cuenta o entrega de informacion. La autoridad y la confidencialidad son parte del ataque.",
        scenario:
          "Un colaborador recibe una instruccion supuestamente confidencial para hacer un pago sin pasar por Finanzas.",
        actions: [
          "Refuerza que direccion tambien respeta controles.",
          "Evita pedir pagos o datos fuera de proceso.",
          "Promueve que el equipo pueda validar sin miedo."
        ],
        takeaways: [
          "El liderazgo marca el comportamiento de seguridad.",
          "La confidencialidad falsa es una senal de fraude.",
          "Validar instrucciones ejecutivas debe ser normal."
        ]
      },
      {
        title: "Deepfakes y robo de identidad",
        duration: "9 min",
        body:
          "La IA puede clonar voces, generar imagenes o simular mensajes. Un audio o video ya no es prueba suficiente para aprobar pagos o compartir informacion critica.",
        scenario:
          "Una llamada con voz parecida a un directivo pide confirmar un codigo MFA para resolver un bloqueo urgente.",
        actions: [
          "Usa frases o canales de verificacion previamente acordados.",
          "Nunca compartas codigos MFA por llamada.",
          "Confirma decisiones sensibles por canales internos oficiales."
        ],
        takeaways: [
          "Voz y video pueden ser falsificados.",
          "Los codigos MFA nunca se comparten.",
          "Las decisiones criticas requieren validacion adicional."
        ]
      },
      {
        title: "Cuentas criticas, viajes y dispositivos",
        duration: "8 min",
        body:
          "Direccion suele tener acceso a informacion sensible. Viajes, redes publicas, dispositivos personales y cuentas sin MFA aumentan el riesgo.",
        scenario:
          "Durante un viaje, un directivo se conecta a Wi-Fi publico y revisa documentos confidenciales en un equipo sin bloqueo automatico.",
        actions: [
          "Activa MFA y bloqueo automatico en todos los dispositivos.",
          "Evita Wi-Fi publico para operaciones sensibles.",
          "Reporta perdida o robo de equipo de inmediato."
        ],
        takeaways: [
          "Las cuentas ejecutivas son objetivo prioritario.",
          "Los viajes requieren controles adicionales.",
          "Un equipo perdido puede convertirse en incidente."
        ]
      },
      {
        title: "Decision ejecutiva ante incidentes",
        duration: "8 min",
        body:
          "Ante un incidente, direccion debe priorizar contencion, comunicacion, continuidad y evidencia. Las decisiones improvisadas pueden aumentar impacto legal, operativo y reputacional.",
        scenario:
          "La empresa detecta posible ransomware. Un area pide pagar rapido y otra quiere apagar todo sin coordinar.",
        actions: [
          "Activa el plan de respuesta y roles definidos.",
          "Centraliza comunicaciones internas y externas.",
          "Conserva evidencia y coordina con TI, legal y direccion."
        ],
        takeaways: [
          "La calma ejecutiva reduce el dano.",
          "El plan debe practicarse antes de una crisis.",
          "Comunicacion y evidencia son claves."
        ]
      }
    ],
    quiz: [
      {
        text: "Que senal es comun en fraude CEO?",
        options: ["Solicitud urgente y confidencial", "Capacitacion programada", "Reporte mensual"],
        correct: 0
      },
      {
        text: "Que se debe hacer ante una llamada con voz clonada que pide un codigo MFA?",
        options: ["Compartir el codigo", "No compartir y validar por canal oficial", "Publicarlo en chat"],
        correct: 1
      },
      {
        text: "Por que las cuentas ejecutivas son criticas?",
        options: ["Tienen informacion y autoridad sensible", "Tienen menos correos", "No usan sistemas"],
        correct: 0
      },
      {
        text: "Que debe activar direccion ante un incidente?",
        options: ["El plan de respuesta", "Un rumor interno", "Una compra urgente"],
        correct: 0
      },
      {
        text: "Que ayuda a reducir dano reputacional?",
        options: ["Comunicacion coordinada", "Ocultar evidencia", "Improvisar mensajes"],
        correct: 0
      }
    ]
  },
  "it-course": {
    overview:
      "Ruta para TI con controles base de accesos, MFA, hardening, respaldo, ransomware y respuesta inicial.",
    lessons: [
      {
        title: "Gestion de accesos",
        duration: "9 min",
        body:
          "TI debe asegurar que cada persona tenga solo los accesos necesarios. Altas, bajas, cambios de rol y cuentas privilegiadas requieren control y evidencia.",
        scenario:
          "Un empleado cambia de area, pero conserva permisos administrativos de su puesto anterior.",
        actions: [
          "Aplica minimo privilegio y revisiones periodicas.",
          "Desactiva cuentas al terminar relacion laboral.",
          "Registra aprobaciones para accesos privilegiados."
        ],
        takeaways: [
          "El acceso excesivo aumenta impacto.",
          "Las bajas tardias son un riesgo comun.",
          "Privilegios deben revisarse con frecuencia."
        ]
      },
      {
        title: "Hardening basico y MFA",
        duration: "10 min",
        body:
          "Hardening significa reducir superficie de ataque: parches, configuraciones seguras, bloqueo de servicios innecesarios, MFA y politicas de contrasenas.",
        scenario:
          "Un servidor expone un servicio remoto sin MFA y con cuentas antiguas activas.",
        actions: [
          "Aplica MFA en accesos remotos y administrativos.",
          "Elimina servicios innecesarios.",
          "Mantiene sistemas actualizados y monitoreados."
        ],
        takeaways: [
          "MFA es obligatorio en accesos criticos.",
          "Menos servicios expuestos significa menos riesgo.",
          "Parches reducen vulnerabilidades conocidas."
        ]
      },
      {
        title: "Respaldo y ransomware",
        duration: "10 min",
        body:
          "El respaldo debe ser recuperable, probado y protegido. Ransomware busca cifrar datos y tambien respaldos conectados.",
        scenario:
          "Un equipo se cifra y el respaldo mas reciente tambien estaba conectado al mismo entorno.",
        actions: [
          "Mantiene copias offline o inmutables cuando sea posible.",
          "Prueba restauracion periodicamente.",
          "Define tiempos objetivo de recuperacion."
        ],
        takeaways: [
          "Un respaldo no probado es una suposicion.",
          "Ransomware tambien ataca respaldos.",
          "Restaurar rapido depende de practica previa."
        ]
      },
      {
        title: "Respuesta inicial",
        duration: "9 min",
        body:
          "La respuesta inicial debe contener, preservar evidencia y escalar. Actuar sin coordinacion puede borrar rastros o expandir el incidente.",
        scenario:
          "Se detecta actividad anomala en una cuenta administrativa fuera de horario.",
        actions: [
          "Aisla sistemas afectados siguiendo el playbook.",
          "Preserva logs y evidencia.",
          "Escala a responsables y documenta decisiones."
        ],
        takeaways: [
          "Contener no es lo mismo que borrar.",
          "Los logs son evidencia critica.",
          "La documentacion ayuda a aprender y responder."
        ]
      }
    ],
    quiz: [
      {
        text: "Que principio debe guiar los accesos?",
        options: ["Minimo privilegio", "Todos administradores", "Acceso permanente"],
        correct: 0
      },
      {
        text: "Donde debe aplicarse MFA con prioridad?",
        options: ["Accesos remotos y administrativos", "Solo redes sociales", "Solo cuentas sin uso"],
        correct: 0
      },
      {
        text: "Que respaldo es mas confiable?",
        options: ["El que se prueba", "El que nadie revisa", "El conectado siempre al mismo equipo"],
        correct: 0
      },
      {
        text: "Que debe preservarse en respuesta inicial?",
        options: ["Logs y evidencia", "Rumores", "Mensajes borrados"],
        correct: 0
      },
      {
        text: "Que riesgo hay con cuentas antiguas activas?",
        options: ["Acceso no autorizado", "Menos auditoria", "Mas capacitacion"],
        correct: 0
      }
    ]
  },
  "monthly-course": {
    overview:
      "Capsulas mensuales de 10 a 15 minutos para reforzar habitos sin interrumpir la operacion.",
    lessons: [
      {
        title: "Correo falso en 5 senales",
        duration: "10 min",
        body:
          "Un correo falso puede tener urgencia, remitente parecido, link extrano, adjunto inesperado o peticion de datos. No necesitas encontrar todas las senales: una sola puede bastar para reportar.",
        scenario: "Un correo de 'soporte' pide validar tu buzon antes de 30 minutos.",
        actions: ["Revisa dominio", "No ingreses datos", "Reporta el mensaje"],
        takeaways: ["La urgencia es sospechosa", "Los dominios parecidos confunden", "Reportar ayuda a otros"]
      },
      {
        title: "Links y QR sospechosos",
        duration: "10 min",
        body:
          "Los QR pueden llevar a sitios falsos igual que un link. Antes de ingresar datos, confirma que el dominio sea correcto.",
        scenario: "Un cartel con QR promete reembolso de estacionamiento y pide correo corporativo.",
        actions: ["Verifica dominio", "Evita capturar credenciales desde QR desconocidos", "Usa sitios oficiales"],
        takeaways: ["QR no significa seguro", "El dominio manda", "Los acortadores reducen visibilidad"]
      },
      {
        title: "WhatsApp extrano",
        duration: "10 min",
        body:
          "Fraudes por WhatsApp usan identidad falsa, urgencia y peticiones de dinero o codigos. Valida siempre por canales oficiales.",
        scenario: "Un supuesto jefe pide comprar tarjetas de regalo para una reunion.",
        actions: ["No compres por instruccion informal", "Valida por llamada o canal oficial", "Reporta la conversacion"],
        takeaways: ["WhatsApp no valida identidad", "Codigos no se comparten", "La presion es una senal"]
      },
      {
        title: "Contrasenas seguras",
        duration: "10 min",
        body:
          "Una frase larga, unica y guardada en un administrador de contrasenas es mas fuerte que una palabra corta con cambios obvios.",
        scenario: "Una persona usa la misma contrasena para correo, banca y redes.",
        actions: ["Usa contrasenas unicas", "Activa MFA", "Cambia claves filtradas"],
        takeaways: ["Largo supera complejo corto", "No reutilices", "MFA suma proteccion"]
      },
      {
        title: "Fraudes con inteligencia artificial",
        duration: "12 min",
        body:
          "La IA puede generar mensajes convincentes, voces falsas o imagenes manipuladas. La validacion por proceso es mas importante que confiar en apariencia.",
        scenario: "Un audio con voz conocida pide transferir dinero urgentemente.",
        actions: ["Valida por canal alterno", "No compartas MFA", "Escala solicitudes sensibles"],
        takeaways: ["La voz puede ser falsa", "El proceso protege", "La IA mejora la apariencia del fraude"]
      },
      {
        title: "Como reportar un incidente",
        duration: "10 min",
        body:
          "Reportar debe ser facil: que paso, cuando paso, por que canal llego y que accion tomaste. La evidencia permite contener mas rapido.",
        scenario: "Diste clic a un enlace y cerraste la pagina al darte cuenta.",
        actions: ["Reporta hora y link", "No borres el mensaje", "Sigue instrucciones de TI"],
        takeaways: ["Rapidez gana", "Evidencia importa", "No ocultes errores"]
      }
    ],
    quiz: [
      {
        text: "Que senal basta para reportar un correo?",
        options: ["Una senal sospechosa", "Que tenga color rojo", "Que sea largo"],
        correct: 0
      },
      {
        text: "Que debes revisar antes de ingresar datos desde un QR?",
        options: ["El dominio", "El color del QR", "El tamano del cartel"],
        correct: 0
      },
      {
        text: "Que hacer si WhatsApp pide un pago urgente?",
        options: ["Validar por canal oficial", "Pagar de inmediato", "Ignorar politicas"],
        correct: 0
      },
      {
        text: "Que mejora una contrasena?",
        options: ["Que sea unica y larga", "Usarla en todos lados", "Compartirla con el equipo"],
        correct: 0
      },
      {
        text: "Que debes conservar al reportar un incidente?",
        options: ["Evidencia", "Rumores", "Solo capturas editadas"],
        correct: 0
      }
    ]
  },
  "phishing-course": {
    overview:
      "Modulo Enterprise para aprender como funcionan campanas simuladas y como interpretar resultados sin recolectar credenciales reales.",
    lessons: [
      {
        title: "Objetivo de una simulacion",
        duration: "8 min",
        body:
          "Una simulacion de phishing mide habitos y areas de riesgo. Su objetivo es educar, no castigar. Debe estar autorizada y comunicada con responsables.",
        scenario: "Se planea una campana de factura falsa para medir riesgo en Finanzas.",
        actions: ["Define objetivo", "Aprueba alcance", "Prepara aprendizaje posterior"],
        takeaways: ["Medir permite mejorar", "No se deben capturar contrasenas reales", "La campana debe ser autorizada"]
      },
      {
        title: "Plantillas seguras",
        duration: "9 min",
        body:
          "Las plantillas simulan escenarios comunes: factura, paqueteria, banco, proveedor o cambio de contrasena. Deben evitar dano, verguenza publica o recoleccion real de datos.",
        scenario: "Una plantilla pide usuario y contrasena para medir quien cae.",
        actions: ["Usa campos de prueba", "Muestra aprendizaje al final", "Evita datos reales"],
        takeaways: ["Simular no es enganar sin control", "La seguridad psicologica importa", "El aprendizaje debe ser inmediato"]
      },
      {
        title: "Metricas clave",
        duration: "8 min",
        body:
          "Las metricas utiles son apertura, clic, reporte e ingreso de datos de prueba. El dato mas valioso no siempre es el clic: tambien importa quien reporta.",
        scenario: "Un area tiene clic alto, pero tambien reporta rapido. Otra area no reporta nada.",
        actions: ["Mide por area", "Compara contra meses previos", "Refuerza donde hay menor reporte"],
        takeaways: ["Reportar es comportamiento positivo", "El score debe verse por area", "La tendencia importa mas que un evento aislado"]
      },
      {
        title: "Retroalimentacion y refuerzo",
        duration: "8 min",
        body:
          "Despues de la simulacion se debe explicar que senales habia, como reportar y que controles ayudan. La retroalimentacion convierte la medicion en cambio de conducta.",
        scenario: "Despues de una campana, varios empleados preguntan si seran sancionados.",
        actions: ["Enfoca el mensaje en aprendizaje", "Comparte senales del ejemplo", "Asigna microcurso de refuerzo"],
        takeaways: ["La confianza mejora reportes", "La retroalimentacion debe ser clara", "El refuerzo cierra el ciclo"]
      }
    ],
    quiz: [
      {
        text: "Cual es el objetivo principal de una simulacion?",
        options: ["Educar y medir riesgo", "Castigar publicamente", "Recolectar contrasenas reales"],
        correct: 0
      },
      {
        text: "Que dato no debe recolectarse?",
        options: ["Contrasenas reales", "Clics", "Reportes"],
        correct: 0
      },
      {
        text: "Que metrica positiva conviene medir?",
        options: ["Quien reporto", "Quien fue avergonzado", "Quien no recibio curso"],
        correct: 0
      },
      {
        text: "Que debe pasar despues de la simulacion?",
        options: ["Retroalimentacion y refuerzo", "Silencio total", "Bloqueo inmediato de todos"],
        correct: 0
      },
      {
        text: "Como debe verse el riesgo?",
        options: ["Por area y tendencia", "Solo por nombre publico", "Sin contexto"],
        correct: 0
      }
    ]
  }
};
