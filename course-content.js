window.DOGUI_LESSON_VIDEOS = {
  phishing: {
    youtubeId: "uhzV5-iFb5E",
    title: "Que es el phishing",
    source: "INCIBE - AprendeCiberseguridad",
    url: "https://www.youtube.com/watch?v=uhzV5-iFb5E"
  },
  ingenieria_social: {
    youtubeId: "Wp_KJVFMsEc",
    title: "Que es la ingenieria social",
    source: "INCIBE - Ciberseguridad",
    url: "https://www.youtube.com/watch?v=Wp_KJVFMsEc"
  },
  redes_sociales: {
    youtubeId: "F88S5VfeFTk",
    title: "Riesgos y fraudes en redes sociales",
    source: "Dia de Internet Segura",
    url: "https://www.youtube.com/watch?v=F88S5VfeFTk"
  },
  contrasenas: {
    youtubeId: "n0vvSJJCFbs",
    title: "Contrasenas robustas",
    source: "OSI - INCIBE",
    url: "https://www.youtube.com/watch?v=n0vvSJJCFbs"
  },
  mfa: {
    youtubeId: "YnhNJLQlYcA",
    title: "Que es el doble factor de autenticacion (2FA / MFA)",
    source: "Ciberseguridad practica",
    url: "https://www.youtube.com/watch?v=YnhNJLQlYcA"
  },
  smishing: {
    youtubeId: "i9S2K6jXYts",
    title: "Cuidate del smishing: fraudes por SMS y WhatsApp",
    source: "Concientizacion digital",
    url: "https://www.youtube.com/watch?v=i9S2K6jXYts"
  },
  ransomware: {
    youtubeId: "tDdLWN4aWh4",
    title: "Ransomware: que es, como infecta y como protegerse",
    source: "Ciberseguridad practica",
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
    source: "Formacion empresarial",
    url: "https://www.youtube.com/watch?v=EHjmxujXIaQ"
  },
  fraude_bec: {
    youtubeId: "9m9p9_t31Kc",
    title: "Que es la estafa BEC (fraude del CEO)",
    source: "Grupo de Delitos Tecnologicos",
    url: "https://www.youtube.com/watch?v=9m9p9_t31Kc"
  },
  ofertas_falsas: {
    youtubeId: "uUwARqgWrNo",
    title: "Asi estan estafando con falsas ofertas de empleo",
    source: "Periodismo de investigacion",
    url: "https://www.youtube.com/watch?v=uUwARqgWrNo"
  },
  deepfakes: {
    youtubeId: "S2IUl50Fb60",
    title: "Los deepfakes: por que son peligrosos y como detectarlos",
    source: "Alfabetizacion digital",
    url: "https://www.youtube.com/watch?v=S2IUl50Fb60"
  },
  identidad: {
    youtubeId: "hqyIjgmk0EA",
    title: "Suplantacion de identidad - casos reales",
    source: "INCIBE - Linea de Ayuda 017",
    url: "https://www.youtube.com/watch?v=hqyIjgmk0EA"
  },
  accesos_ti: {
    youtubeId: "HfWX7EF9aE0",
    title: "Gestion de accesos e identidades (IAM)",
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
    title: "Alerta por estafa de clonacion de voz con inteligencia artificial",
    source: "Alerta ciudadana",
    url: "https://www.youtube.com/watch?v=Q7aDFFXDgc8"
  },
  owasp_top10: {
    youtubeId: "vf9Waxh3I04",
    title: "Que es el OWASP Top 10 (explicado en 8 minutos)",
    source: "Diccionario de hacking etico",
    url: "https://www.youtube.com/watch?v=vf9Waxh3I04"
  }
};

window.DOGUI_COURSE_CONTENT = {
  "basic-course": {
    overview:
      "Curso base para todo el personal. Ensena habitos de seguridad que reducen phishing, fraude, robo de cuentas, fuga de informacion y errores comunes en el trabajo diario.",
    lessons: [
      {
        title: "Que es la ciberseguridad",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "La ciberseguridad protege cuentas, dispositivos, informacion, sistemas y procesos de negocio contra accesos no autorizados, fraude, perdida de datos y operaciones interrumpidas. En una empresa no depende solo de TI: cada persona participa cuando decide si abre un archivo, comparte datos, usa una contrasena o reporta algo sospechoso. El objetivo no es trabajar con miedo, sino reconocer senales de riesgo y actuar con criterio.",
        scenario:
          "Un colaborador recibe un correo que parece interno y pide abrir un documento para revisar una nueva politica. El mensaje presiona para hacerlo hoy, pero el remitente no coincide con el dominio habitual.",
        actions: [
          "Identifica que informacion, cuenta o proceso podria estar en riesgo antes de actuar.",
          "Verifica remitente, dominio, contexto y canal cuando una solicitud sea inesperada.",
          "Reporta mensajes, archivos o comportamientos raros por el canal definido por la empresa."
        ],
        takeaways: [
          "La seguridad es una responsabilidad compartida.",
          "Muchas amenazas empiezan con una decision cotidiana.",
          "Reportar temprano reduce impacto operativo, legal y financiero."
        ]
      },
      {
        title: "Phishing y correos falsos",
        video: "phishing",
        duration: "10 min",
        body:
          "El phishing intenta convencerte de dar clic, abrir un archivo, transferir dinero o entregar datos. Puede imitar bancos, paqueterias, proveedores, herramientas internas o directivos. Los correos modernos pueden tener buen diseno, logos correctos y texto sin errores. Por eso hay que revisar la intencion del mensaje: urgencia, amenaza, premio, confidencialidad, solicitud fuera de proceso o cambios inesperados.",
        scenario:
          "Llega un correo de 'Microsoft 365' avisando que tu buzon sera bloqueado. Incluye un boton de validacion y pide iniciar sesion antes de 30 minutos.",
        actions: [
          "Pasa el cursor sobre los enlaces y revisa el dominio real antes de abrir.",
          "No ingreses credenciales desde enlaces recibidos por correo; entra escribiendo la direccion oficial.",
          "Usa el boton o correo de reporte cuando algo parezca sospechoso."
        ],
        takeaways: [
          "Un buen diseno no garantiza que el correo sea real.",
          "La urgencia artificial es una senal de fraude.",
          "El reporte ayuda a proteger a otros empleados."
        ]
      },
      {
        title: "Fraudes por WhatsApp y mensajeria",
        video: "smishing",
        duration: "8 min",
        body:
          "Los fraudes por WhatsApp, SMS o chats corporativos usan identidad falsa, presion y cercania. Un atacante puede hacerse pasar por un jefe, proveedor, companero o familiar. Tambien puede pedir codigos, compras urgentes, transferencias, cambio de cuenta bancaria o datos internos. El canal de mensajeria facilita el engano porque parece directo y personal.",
        scenario:
          "Un numero nuevo escribe con foto de un directivo: 'Estoy en reunion, no puedo contestar llamadas. Compra tarjetas de regalo y mandame los codigos ahora'.",
        actions: [
          "Desconfia de numeros nuevos que pidan dinero, codigos o informacion sensible.",
          "Valida por un canal oficial previamente conocido, no por el contacto que llego en el mensaje.",
          "Captura evidencia y reporta la conversacion antes de bloquear o borrar."
        ],
        takeaways: [
          "WhatsApp no prueba identidad.",
          "Los codigos, pagos y datos internos nunca deben pedirse por canales informales.",
          "La verificacion por canal alterno rompe el fraude."
        ]
      },
      {
        title: "Contrasenas seguras",
        video: "contrasenas",
        duration: "8 min",
        body:
          "Una contrasena segura debe ser larga, unica y dificil de adivinar. Las frases de paso funcionan mejor que palabras cortas con sustituciones obvias. El mayor riesgo es reutilizar la misma clave en correo, nube, bancos, redes y herramientas de trabajo. Si un sitio externo se filtra, esa contrasena puede probarse contra cuentas corporativas.",
        scenario:
          "Un empleado usa la misma contrasena en una tienda en linea y en su correo corporativo. La tienda sufre una filtracion y los atacantes prueban esa clave en otros servicios.",
        actions: [
          "Usa una contrasena unica por servicio.",
          "Prefiere frases largas y memorables o un administrador de contrasenas autorizado.",
          "Cambia credenciales si sospechas que fueron expuestas o reutilizadas."
        ],
        takeaways: [
          "La longitud importa mas que cambios predecibles como '123' o '@'.",
          "Reutilizar contrasenas convierte una filtracion externa en riesgo interno.",
          "Un administrador de contrasenas reduce errores humanos."
        ]
      },
      {
        title: "Autenticacion multifactor",
        video: "mfa",
        duration: "7 min",
        body:
          "La autenticacion multifactor, o MFA, agrega una segunda verificacion ademas de la contrasena. Puede ser una app, llave fisica, notificacion, codigo temporal o biometria. MFA reduce el riesgo si una contrasena se filtra, pero no se debe aprobar una solicitud que no iniciaste. Si recibes aprobaciones repetidas, podria ser un ataque de fatiga MFA.",
        scenario:
          "A medianoche llegan varias notificaciones para aprobar inicio de sesion. La persona no esta intentando entrar a ningun sistema.",
        actions: [
          "Rechaza solicitudes MFA que no hayas iniciado.",
          "Reporta intentos repetidos o codigos recibidos sin razon.",
          "Activa MFA en correo, nube, VPN, banca, administradores y cuentas criticas."
        ],
        takeaways: [
          "MFA protege, pero solo si no apruebas solicitudes falsas.",
          "Los codigos MFA son secretos y no se comparten.",
          "Cuentas criticas deben tener MFA obligatorio."
        ]
      },
      {
        title: "Uso seguro del correo corporativo",
        video: "ingenieria_social",
        duration: "9 min",
        body:
          "El correo corporativo concentra informacion sensible, accesos, contactos y conversaciones de negocio. Un correo comprometido permite suplantar identidad, resetear contrasenas, enviar fraudes y leer datos confidenciales. Usarlo de forma segura implica separar lo personal de lo laboral, evitar reenvios no autorizados y revisar destinatarios antes de enviar informacion.",
        scenario:
          "Alguien envia una hoja con datos de clientes a una direccion parecida, pero externa, por autocompletado del correo.",
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
          "Los archivos maliciosos pueden llegar como facturas, CVs, contratos, reportes, comprobantes, archivos comprimidos o supuestos PDF. Algunos piden habilitar macros, instalar complementos o escribir una contrasena para abrir. Los enlaces pueden usar dominios parecidos, acortadores, errores pequenos o paginas clonadas.",
        scenario:
          "Un proveedor manda una factura en archivo ZIP con contrasena y dice que es urgente pagar hoy. El archivo no venia por el portal habitual.",
        actions: [
          "No habilites macros ni ejecutes archivos recibidos sin validacion.",
          "Desconfia de adjuntos comprimidos, protegidos con contrasena o inesperados.",
          "Escanea o reporta archivos sospechosos segun el proceso interno."
        ],
        takeaways: [
          "Un archivo comun puede esconder malware.",
          "La contrasena en un adjunto puede evadir controles automaticos.",
          "Validar por el canal oficial evita infecciones y fraudes."
        ]
      },
      {
        title: "Proteccion de informacion sensible",
        video: "proteger_empresa",
        duration: "8 min",
        body:
          "La informacion sensible incluye datos personales, financieros, contratos, expedientes, precios, credenciales, reportes internos, datos de clientes y estrategias. Protegerla exige clasificarla, compartir solo lo necesario, usar permisos adecuados y evitar copias innecesarias. La seguridad tambien aplica a capturas de pantalla, impresiones, notas y conversaciones.",
        scenario:
          "Un archivo con datos personales de empleados se sube a una carpeta abierta para toda la organizacion porque era mas rapido compartir el enlace.",
        actions: [
          "Comparte informacion bajo el principio de minimo necesario.",
          "Usa carpetas, permisos y canales autorizados para datos sensibles.",
          "Reporta accesos excesivos, enlaces publicos o envios incorrectos."
        ],
        takeaways: [
          "La informacion sensible no siempre parece tecnica.",
          "Los permisos abiertos son una fuga esperando ocurrir.",
          "La privacidad tambien es parte de la ciberseguridad."
        ]
      },
      {
        title: "Buenas practicas en redes sociales",
        video: "redes_sociales",
        duration: "7 min",
        body:
          "Las redes sociales ayudan a atacantes a preparar fraudes personalizados. Publicaciones sobre viajes, cargos, organigramas, proveedores, herramientas, eventos internos o credenciales visibles en fotos pueden usarse para suplantacion e ingenieria social. La regla es compartir con criterio y cuidar la informacion que revela contexto interno.",
        scenario:
          "Una persona publica que el director financiero esta de viaje. Ese mismo dia llega un correo falso solicitando un pago urgente porque 'no puede tomar llamadas'.",
        actions: [
          "Evita publicar informacion operativa, ubicaciones sensibles o procesos internos.",
          "Revisa fotos antes de subirlas para no mostrar pantallas, gafetes o pizarrones.",
          "Separa perfiles personales de comunicaciones oficiales de la empresa."
        ],
        takeaways: [
          "La informacion publica puede alimentar ataques dirigidos.",
          "Una foto puede filtrar mas de lo que parece.",
          "La discrecion protege a personas y procesos."
        ]
      },
      {
        title: "Que hacer ante un incidente",
        video: "identidad",
        duration: "8 min",
        body:
          "Un incidente puede ser dar clic en un enlace falso, abrir un archivo sospechoso, perder un dispositivo, enviar informacion por error, notar accesos no reconocidos o recibir una solicitud fraudulenta. Lo mas importante es reportar rapido, conservar evidencia y seguir instrucciones. Ocultar el evento aumenta el impacto y retrasa la contencion.",
        scenario:
          "Una persona ingreso su usuario y contrasena en una pagina que parecia corporativa. Despues noto que el dominio tenia una letra cambiada.",
        actions: [
          "Reporta que paso, cuando paso, por que canal llego y que accion tomaste.",
          "No borres mensajes, archivos, enlaces ni capturas relacionadas.",
          "Cambia contrasenas o desconecta equipos solo si el procedimiento interno lo indica."
        ],
        takeaways: [
          "Reportar no es culpar: es contener.",
          "La evidencia permite investigar y proteger a otros.",
          "La velocidad de respuesta puede reducir mucho el dano."
        ]
      }
    ],
    quiz: [
      {
        text: "Cual es el objetivo principal de la ciberseguridad en una empresa?",
        options: ["Proteger informacion, cuentas, dispositivos y procesos", "Eliminar todos los correos", "Evitar que los empleados usen internet"],
        correct: 0
      },
      {
        text: "Que senal es comun en un correo de phishing?",
        options: ["Urgencia, amenaza o solicitud fuera de proceso", "Que incluya un saludo", "Que tenga un logotipo"],
        correct: 0
      },
      {
        text: "Que debes hacer si un numero nuevo de WhatsApp pide un pago urgente?",
        options: ["Validar por un canal oficial conocido", "Pagar para evitar problemas", "Enviar codigos para confirmar"],
        correct: 0
      },
      {
        text: "Que practica reduce el riesgo de contrasenas filtradas?",
        options: ["Usar una contrasena unica por servicio", "Reutilizar la clave mas facil", "Compartir la clave con el equipo"],
        correct: 0
      },
      {
        text: "Que debes hacer si recibes una solicitud MFA que no iniciaste?",
        options: ["Rechazarla y reportarla", "Aprobarla por si acaso", "Ignorar todas las notificaciones"],
        correct: 0
      },
      {
        text: "Que riesgo tiene el autocompletado de correo?",
        options: ["Enviar informacion a un destinatario incorrecto", "Mejorar siempre la seguridad", "Bloquear todos los adjuntos"],
        correct: 0
      },
      {
        text: "Que archivo merece especial cuidado?",
        options: ["Un ZIP con contrasena enviado de forma inesperada", "Un archivo interno validado", "Un documento del portal oficial"],
        correct: 0
      },
      {
        text: "Como se debe compartir informacion sensible?",
        options: ["Solo con minimo necesario y canales autorizados", "Con enlaces publicos para ahorrar tiempo", "Por cualquier chat personal"],
        correct: 0
      },
      {
        text: "Por que cuidar redes sociales ayuda a la seguridad?",
        options: ["Porque reduce informacion util para ataques dirigidos", "Porque elimina la necesidad de MFA", "Porque impide recibir correos"],
        correct: 0
      },
      {
        text: "Que conviene hacer si diste clic en un enlace falso?",
        options: ["Reportar rapido y conservar evidencia", "Borrar todo y no decir nada", "Mandar el enlace a mas personas"],
        correct: 0
      }
    ]
  },
  "finance-course": {
    overview:
      "Ruta para Finanzas y Administracion enfocada en prevenir fraude de transferencias, facturas falsas, suplantacion de proveedores y solicitudes urgentes de pago.",
    lessons: [
      {
        title: "Fraude de transferencias",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "El fraude de transferencias intenta que una persona autorice o ejecute un pago sin validacion suficiente. El atacante puede usar correos falsos, cuentas comprometidas, llamadas, mensajes de WhatsApp o documentos alterados. Las senales mas importantes son urgencia, confidencialidad, cambio de cuenta, presion de autoridad y solicitud fuera del flujo normal.",
        scenario:
          "Un correo supuestamente enviado por direccion pide transferir hoy a una cuenta nueva porque 'se cierra una negociacion confidencial'.",
        actions: [
          "Valida toda transferencia fuera de rutina por un segundo canal autorizado.",
          "Deten pagos con urgencia injustificada, confidencialidad inusual o datos bancarios nuevos.",
          "Documenta aprobaciones, excepciones y evidencia de validacion."
        ],
        takeaways: [
          "La urgencia no reemplaza el proceso financiero.",
          "Las transferencias requieren trazabilidad.",
          "Una pausa de validacion puede evitar una perdida irreversible."
        ]
      },
      {
        title: "Facturas falsas",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "Las facturas falsas pueden usar datos reales de proveedores, importes parecidos, folios creibles y diseno profesional. Tambien pueden llegar como respuesta dentro de una cadena de correo comprometida. El objetivo es que se pague una factura que no corresponde o se descargue un archivo malicioso.",
        scenario:
          "Llega una factura con el nombre de un proveedor conocido, pero la orden de compra no existe y el archivo viene en un formato no usado por la empresa.",
        actions: [
          "Cruza factura contra orden de compra, contrato, recepcion de servicio y datos fiscales.",
          "Desconfia de adjuntos comprimidos, macros o enlaces para descargar facturas.",
          "Confirma inconsistencias con el contacto registrado previamente."
        ],
        takeaways: [
          "Una factura visualmente correcta puede ser falsa.",
          "La validacion documental evita pagos indebidos.",
          "Las cadenas de correo tambien pueden estar comprometidas."
        ]
      },
      {
        title: "Suplantacion de proveedores",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "La suplantacion de proveedores ocurre cuando alguien imita a un proveedor real o usa una cuenta comprometida para pedir pagos, cambios de cuenta o informacion. Este fraude suele ser convincente porque el atacante conoce nombres, proyectos, montos y conversaciones previas.",
        scenario:
          "Un proveedor habitual solicita cambiar su cuenta bancaria. El correo parece normal, pero el dominio tiene una letra diferente.",
        actions: [
          "Valida cambios de datos bancarios con contactos registrados antes del cambio.",
          "No uses telefonos, enlaces o contactos incluidos en el mensaje sospechoso.",
          "Actualiza datos de proveedor solo despues de aprobacion y evidencia."
        ],
        takeaways: [
          "El cambio de cuenta bancaria es una alerta critica.",
          "Un proveedor real puede ser suplantado.",
          "La validacion debe usar informacion confiable previa."
        ]
      },
      {
        title: "Correos del director",
        video: "fraude_bec",
        duration: "7 min",
        body:
          "El fraude del director, o fraude CEO, explota jerarquia para saltarse controles. Puede pedir pagos, compra de tarjetas, adelantos, informacion fiscal o cambio de prioridad. A veces incluye frases como 'no puedo hablar', 'es confidencial' o 'hazlo ahora'. La cultura de seguridad debe permitir validar instrucciones ejecutivas.",
        scenario:
          "Un supuesto director escribe desde su celular que necesita comprar tarjetas de regalo para clientes y pide enviarle los codigos.",
        actions: [
          "Valida cualquier instruccion ejecutiva fuera de proceso.",
          "Rechaza solicitudes de codigos, tarjetas o pagos por canales informales.",
          "Escala intentos de presion o confidencialidad inusual."
        ],
        takeaways: [
          "La autoridad puede ser usada como herramienta de engano.",
          "Validar al liderazgo debe ser parte normal del control.",
          "Las tarjetas de regalo son un metodo comun de fraude."
        ]
      },
      {
        title: "Solicitudes urgentes de pago",
        video: "phishing",
        duration: "7 min",
        body:
          "La urgencia reduce pensamiento critico. En pagos, una solicitud urgente debe activar mas controles, no menos. Un atacante busca que Finanzas ignore autorizaciones, salte revisiones o pague antes de confirmar datos. Los mejores procesos definen rutas de emergencia con validacion clara.",
        scenario:
          "A cinco minutos del cierre bancario llega una solicitud de pago con amenaza de penalizacion si no se ejecuta de inmediato.",
        actions: [
          "Usa una ruta de emergencia aprobada y documentada.",
          "Confirma monto, beneficiario, cuenta, autorizador y justificacion.",
          "No aceptes instrucciones de 'no consultar a nadie' cuando hay dinero en riesgo."
        ],
        takeaways: [
          "Una urgencia real tambien puede validarse.",
          "La confidencialidad que bloquea controles es sospechosa.",
          "El proceso protege a Finanzas de presiones indebidas."
        ]
      },
      {
        title: "Validacion de cuentas bancarias",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "La validacion bancaria debe ser un control formal. Antes de pagar a una cuenta nueva o modificada, Finanzas debe comparar registros internos, contratos, informacion fiscal, historial de pagos y confirmacion por contacto confiable. El control debe aplicarse aunque el proveedor sea conocido.",
        scenario:
          "La cuenta bancaria de una factura no coincide con los pagos historicos. El mensaje insiste en que el cambio aplica desde hoy.",
        actions: [
          "Confirma datos bancarios con el contacto registrado en el alta original.",
          "Requiere aprobacion adicional para cuentas nuevas o cambios recientes.",
          "Bloquea pagos hasta resolver discrepancias de cuenta, titular o banco."
        ],
        takeaways: [
          "La cuenta bancaria es el dato mas critico antes de pagar.",
          "El historial de pagos ayuda a detectar anomalias.",
          "Sin validacion documentada, el pago debe esperar."
        ]
      }
    ],
    quiz: [
      {
        text: "Que senal debe detener una transferencia para validacion?",
        options: ["Cambio de cuenta bancaria con urgencia", "Factura con orden validada", "Pago aprobado en sistema"],
        correct: 0
      },
      {
        text: "Como validar un cambio de cuenta de proveedor?",
        options: ["Con un contacto previamente registrado", "Con el telefono incluido en el correo sospechoso", "Respondiendo el mismo correo"],
        correct: 0
      },
      {
        text: "Que busca el fraude CEO?",
        options: ["Saltar controles usando autoridad", "Mejorar conciliacion", "Actualizar datos fiscales de forma segura"],
        correct: 0
      },
      {
        text: "Que debe hacerse con una factura que no coincide con la orden de compra?",
        options: ["Pausar y validar", "Pagar por si acaso", "Eliminar la evidencia"],
        correct: 0
      },
      {
        text: "Que frase es especialmente sospechosa en una solicitud de pago?",
        options: ["No consultes a nadie, es confidencial", "Adjunto aprobacion del sistema", "Programemos revision"],
        correct: 0
      },
      {
        text: "Que metodo es comun en fraudes de directivos falsos?",
        options: ["Compra de tarjetas y envio de codigos", "Uso de folios internos validos", "Mesa formal de aprobacion"],
        correct: 0
      },
      {
        text: "Que debe incluir la evidencia de validacion?",
        options: ["Aprobaciones, canal usado y resultado", "Solo el monto", "Una captura sin contexto"],
        correct: 0
      },
      {
        text: "Cuando una cuenta bancaria no coincide con historico, que procede?",
        options: ["Bloquear pago hasta confirmar", "Pagar antes del cierre", "Actualizar sin evidencia"],
        correct: 0
      }
    ]
  },
  "hr-course": {
    overview:
      "Ruta para Recursos Humanos orientada a prevenir archivos maliciosos, documentos falsos, robo de datos personales y ataques de ingenieria social durante reclutamiento.",
    lessons: [
      {
        title: "CVs maliciosos",
        video: "ransomware",
        duration: "8 min",
        body:
          "RH recibe documentos de personas externas todos los dias. Un CV, portafolio o carta puede incluir macros, enlaces a sitios falsos, archivos comprimidos, ejecutables o contenido que intenta robar credenciales. La presion de un proceso de reclutamiento no debe llevar a abrir formatos no autorizados.",
        scenario:
          "Un candidato envia un archivo ZIP con contrasena diciendo que contiene su portafolio y que necesita respuesta antes de terminar el dia.",
        actions: [
          "Acepta documentos solo en formatos y plataformas autorizadas.",
          "No habilites macros ni ejecutes archivos enviados por candidatos.",
          "Reporta adjuntos comprimidos, protegidos con contrasena o inusuales."
        ],
        takeaways: [
          "Un CV puede ser vector de ataque.",
          "Las macros de documentos externos son un riesgo alto.",
          "El reclutamiento tambien requiere controles de seguridad."
        ]
      },
      {
        title: "Documentos falsos",
        video: "identidad",
        duration: "7 min",
        body:
          "Identificaciones, comprobantes, diplomas, constancias y referencias pueden falsificarse o alterarse. RH debe validar con procesos definidos, conservar evidencia de revision y limitar quien puede acceder a expedientes. La validacion protege a la empresa y a las personas involucradas.",
        scenario:
          "Un comprobante de domicilio tiene datos que no coinciden con la solicitud y la imagen parece editada.",
        actions: [
          "Aplica el proceso oficial de validacion documental.",
          "Registra inconsistencias y escalalas al responsable correspondiente.",
          "Evita almacenar documentos personales en carpetas sin permisos."
        ],
        takeaways: [
          "Las inconsistencias pequenas pueden indicar fraude.",
          "La validacion debe ser consistente para todos.",
          "Los expedientes requieren acceso limitado."
        ]
      },
      {
        title: "Robo de datos personales",
        video: "proteger_empresa",
        duration: "9 min",
        body:
          "RH maneja datos de alto valor: identificaciones, domicilios, telefonos, salarios, evaluaciones, incapacidades, datos bancarios y expedientes laborales. Una fuga puede causar fraude, extorsion, dano reputacional y obligaciones legales. El principio central es compartir solo lo necesario, con permisos correctos y por canales autorizados.",
        scenario:
          "Un gerente pide por chat una hoja completa de datos personales para revisarla desde su correo personal.",
        actions: [
          "Comparte solo campos necesarios para la finalidad autorizada.",
          "Usa repositorios corporativos con permisos por rol.",
          "Reporta envios incorrectos, enlaces abiertos o accesos excesivos."
        ],
        takeaways: [
          "Los datos personales son informacion sensible.",
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
          "Un candidato pregunta si es real una oferta que pide pago por examen medico y envio de documentos por WhatsApp.",
        actions: [
          "Publica vacantes solo en canales autorizados.",
          "Aclara que la empresa no cobra por procesos de seleccion.",
          "Reporta perfiles, correos o paginas que usen la marca de forma fraudulenta."
        ],
        takeaways: [
          "Las ofertas falsas tambien son un riesgo de seguridad.",
          "La comunicacion oficial protege a candidatos.",
          "La marca de la empresa puede ser suplantada."
        ]
      },
      {
        title: "Ingenieria social a candidatos y RH",
        video: "ingenieria_social",
        duration: "8 min",
        body:
          "La ingenieria social busca obtener informacion a traves de confianza, curiosidad o presion. En RH puede aparecer como candidatos que piden datos internos, supuestos reclutadores externos, llamadas de verificacion o solicitudes de organigramas. Informacion como nombres de directivos, tecnologias usadas o procesos internos puede alimentar fraudes posteriores.",
        scenario:
          "Un supuesto candidato insiste en saber que banco usa la empresa, quien aprueba nomina y que software de correo tienen antes de avanzar en entrevista.",
        actions: [
          "Comparte solo informacion necesaria para el proceso de seleccion.",
          "Verifica identidades de agencias, candidatos y referencias cuando algo no cuadre.",
          "Escala preguntas inusuales sobre procesos internos, pagos o herramientas."
        ],
        takeaways: [
          "La curiosidad excesiva puede ser recoleccion de informacion.",
          "RH es una fuente valiosa para atacantes.",
          "La informacion operativa debe manejarse con criterio."
        ]
      }
    ],
    quiz: [
      {
        text: "Que adjunto de candidato debe tratarse con mayor cuidado?",
        options: ["ZIP con contrasena o ejecutable", "PDF del portal autorizado", "Formulario interno validado"],
        correct: 0
      },
      {
        text: "Que se debe hacer con macros en documentos externos?",
        options: ["No habilitarlas y reportar si es sospechoso", "Habilitarlas para ver el contenido", "Pedir al candidato mas macros"],
        correct: 0
      },
      {
        text: "Que tipo de informacion maneja RH?",
        options: ["Datos personales y expedientes laborales", "Solo publicaciones publicas", "Solo inventario de oficina"],
        correct: 0
      },
      {
        text: "Como compartir datos personales de empleados?",
        options: ["Con minimo necesario y canal autorizado", "Por correo personal", "En carpeta abierta para todos"],
        correct: 0
      },
      {
        text: "Que debe comunicar RH sobre ofertas laborales?",
        options: ["Que no se cobra por procesos de seleccion", "Que todo tramite es por WhatsApp", "Que se pagan accesos para entrevista"],
        correct: 0
      },
      {
        text: "Que puede indicar ingenieria social en reclutamiento?",
        options: ["Preguntas inusuales sobre bancos, procesos o herramientas", "Enviar disponibilidad para entrevista", "Preguntar por prestaciones publicadas"],
        correct: 0
      },
      {
        text: "Que hacer con una oferta falsa que usa la marca de la empresa?",
        options: ["Reportarla y escalarla", "Ignorarla siempre", "Copiarla para atraer candidatos"],
        correct: 0
      }
    ]
  },
  "direction-course": {
    overview:
      "Ruta ejecutiva para reducir fraude CEO, deepfakes, robo de identidad, exposicion en viajes y errores de decision durante incidentes.",
    lessons: [
      {
        title: "Fraude CEO",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "El fraude CEO usa el nombre, tono o autoridad de una persona directiva para ordenar pagos, cambios de cuenta o entrega de informacion. El atacante intenta que el equipo no valide por miedo, presion o confidencialidad. La mejor defensa es que la direccion comunique claramente que los controles se respetan incluso en urgencias.",
        scenario:
          "Una persona de Finanzas recibe una instruccion supuestamente confidencial de direccion para pagar a un proveedor no registrado.",
        actions: [
          "Define que ninguna solicitud ejecutiva salta autorizaciones financieras.",
          "Promueve que el equipo valide instrucciones sin miedo a represalias.",
          "Usa canales formales para pagos, datos sensibles y cambios de prioridad."
        ],
        takeaways: [
          "El liderazgo determina si los controles se cumplen.",
          "La confidencialidad falsa es una senal de fraude.",
          "Validar instrucciones ejecutivas protege a todos."
        ]
      },
      {
        title: "Deepfakes y suplantacion con IA",
        video: "deepfakes",
        duration: "8 min",
        body:
          "La inteligencia artificial puede generar textos convincentes, clonar voces, crear imagenes y simular videos. Por eso una voz conocida o un mensaje bien redactado ya no bastan para aprobar acciones criticas. Los procesos deben depender de verificacion, no de apariencia.",
        scenario:
          "Durante una videollamada breve, una voz parecida a un directivo pide aprobar una transferencia y evitar preguntas por confidencialidad.",
        actions: [
          "Usa metodos de verificacion acordados para decisiones criticas.",
          "Confirma solicitudes sensibles por canales internos oficiales.",
          "No compartas codigos MFA, claves ni accesos durante llamadas."
        ],
        takeaways: [
          "Audio y video pueden ser manipulados.",
          "La verificacion formal supera la confianza visual.",
          "Los codigos MFA nunca se comparten."
        ]
      },
      {
        title: "Robo de identidad ejecutiva",
        video: "identidad",
        duration: "7 min",
        body:
          "Las cuentas ejecutivas son objetivos de alto valor porque combinan autoridad, acceso y reputacion. El robo de identidad puede iniciar fraudes, divulgar informacion sensible o afectar negociaciones. Cuidar correo, redes sociales, dispositivos y cuentas personales conectadas es parte de la responsabilidad ejecutiva.",
        scenario:
          "Una cuenta personal de un directivo se compromete y se usa para contactar a colaboradores con solicitudes urgentes.",
        actions: [
          "Activa MFA en cuentas corporativas y personales de alto impacto.",
          "Separa comunicaciones personales de instrucciones de negocio.",
          "Monitorea accesos no reconocidos, cambios de reglas y reenvios."
        ],
        takeaways: [
          "La identidad ejecutiva puede ser usada contra la empresa.",
          "Las cuentas personales tambien pueden afectar operaciones.",
          "La reputacion es un activo que debe protegerse."
        ]
      },
      {
        title: "Proteccion de cuentas criticas",
        video: "mfa",
        duration: "7 min",
        body:
          "Las cuentas criticas incluyen correo ejecutivo, banca, nube, administradores, sistemas financieros, dominios, redes sociales oficiales y herramientas de colaboracion. Deben tener MFA, contrasenas unicas, recuperacion segura, monitoreo y usuarios de respaldo bien definidos.",
        scenario:
          "La cuenta de redes sociales de la empresa usa una contrasena compartida y no tiene MFA. Varias personas conocen el acceso.",
        actions: [
          "Elimina cuentas compartidas cuando sea posible y asigna permisos por usuario.",
          "Configura MFA fuerte y opciones de recuperacion controladas.",
          "Revisa periodicamente propietarios, accesos y dispositivos conectados."
        ],
        takeaways: [
          "Las cuentas compartidas reducen trazabilidad.",
          "MFA debe ser obligatorio en cuentas criticas.",
          "La recuperacion de cuenta tambien debe protegerse."
        ]
      },
      {
        title: "Viajes y dispositivos",
        video: "proteger_empresa",
        duration: "7 min",
        body:
          "Los viajes aumentan riesgos: redes publicas, perdida de equipo, conversaciones expuestas, revisiones fisicas y carga en puertos desconocidos. Un directivo puede llevar informacion sensible en laptop, telefono, correo o mensajeria. Prepararse antes de viajar reduce exposicion.",
        scenario:
          "En un aeropuerto, un directivo deja la laptop abierta mientras atiende una llamada y esta conectado a una red publica.",
        actions: [
          "Usa bloqueo automatico, cifrado y MFA antes de viajar.",
          "Evita Wi-Fi publico para operaciones sensibles o usa controles corporativos aprobados.",
          "Reporta perdida, robo o revision sospechosa de dispositivos inmediatamente."
        ],
        takeaways: [
          "Los viajes requieren controles adicionales.",
          "Un equipo perdido puede convertirse en incidente mayor.",
          "La privacidad fisica tambien importa."
        ]
      },
      {
        title: "Toma de decisiones ante incidentes",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "En un incidente, direccion debe ayudar a contener, priorizar continuidad, coordinar comunicacion y preservar evidencia. Las decisiones apresuradas pueden borrar rastros, aumentar dano legal o generar mensajes contradictorios. Un plan de respuesta define roles, criterios, escalamiento y comunicacion antes de la crisis.",
        scenario:
          "Se detecta posible ransomware. Un equipo quiere apagar todo; otro propone pagar de inmediato; clientes empiezan a preguntar que ocurre.",
        actions: [
          "Activa el plan de respuesta y el equipo responsable.",
          "Coordina a TI, legal, comunicacion, operaciones y direccion.",
          "Centraliza mensajes y conserva evidencia antes de tomar acciones irreversibles."
        ],
        takeaways: [
          "La calma ejecutiva reduce el impacto.",
          "El plan debe practicarse antes del incidente.",
          "Comunicacion, continuidad y evidencia se gestionan juntas."
        ]
      }
    ],
    quiz: [
      {
        text: "Que busca el fraude CEO?",
        options: ["Usar autoridad para saltar controles", "Hacer auditorias formales", "Reducir pagos urgentes"],
        correct: 0
      },
      {
        text: "Por que los deepfakes cambian la forma de validar?",
        options: ["Porque voz y video pueden ser falsos", "Porque eliminan los correos", "Porque sustituyen MFA"],
        correct: 0
      },
      {
        text: "Que debe hacer un directivo con solicitudes criticas?",
        options: ["Usar canales y procesos oficiales", "Pedir discrecion para saltar controles", "Aprobar por mensaje informal"],
        correct: 0
      },
      {
        text: "Que cuenta debe considerarse critica?",
        options: ["Correo ejecutivo o banca", "Una cuenta sin uso", "Un perfil de prueba sin permisos"],
        correct: 0
      },
      {
        text: "Que problema generan cuentas compartidas?",
        options: ["Menor trazabilidad", "Mas control individual", "Mejor auditoria"],
        correct: 0
      },
      {
        text: "Que hacer ante perdida de dispositivo en viaje?",
        options: ["Reportar inmediatamente", "Esperar al regreso", "Pedir a alguien que adivine la clave"],
        correct: 0
      },
      {
        text: "Que debe activar direccion ante un incidente mayor?",
        options: ["El plan de respuesta", "Una cadena de rumores", "Un comunicado improvisado sin validar"],
        correct: 0
      },
      {
        text: "Que debe preservarse durante un incidente?",
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
        title: "Gestion de accesos",
        video: "accesos_ti",
        duration: "8 min",
        body:
          "La gestion de accesos asegura que cada persona tenga los permisos correctos durante el tiempo correcto. Altas, bajas, cambios de puesto, cuentas privilegiadas y accesos de terceros deben tener aprobacion, trazabilidad y revision periodica. El principio rector es minimo privilegio.",
        scenario:
          "Un empleado cambia de area, pero mantiene permisos administrativos del puesto anterior y acceso a carpetas financieras.",
        actions: [
          "Aplica minimo privilegio y permisos por rol.",
          "Automatiza o documenta altas, bajas y cambios de puesto.",
          "Revisa accesos privilegiados y de terceros de forma periodica."
        ],
        takeaways: [
          "El acceso excesivo aumenta el impacto de un incidente.",
          "Las bajas tardias son una causa comun de exposicion.",
          "La revision periodica mantiene los permisos alineados al negocio."
        ]
      },
      {
        title: "Hardening basico",
        video: "accesos_ti",
        duration: "9 min",
        body:
          "Hardening es reducir superficie de ataque mediante configuraciones seguras. Incluye desactivar servicios innecesarios, aplicar parches, cerrar puertos, usar configuraciones recomendadas, restringir administracion remota, asegurar endpoints y registrar eventos relevantes. No es una accion unica: debe mantenerse.",
        scenario:
          "Un servidor expone administracion remota a internet, tiene cuentas antiguas activas y no recibe parches desde hace meses.",
        actions: [
          "Elimina servicios, cuentas y puertos que no sean necesarios.",
          "Aplica parches con prioridad segun criticidad y exposicion.",
          "Usa guias base de configuracion y verifica desviaciones."
        ],
        takeaways: [
          "Menos superficie expuesta reduce oportunidades de ataque.",
          "Parches atienden vulnerabilidades conocidas.",
          "La configuracion segura debe auditarse."
        ]
      },
      {
        title: "MFA para TI y administradores",
        video: "mfa",
        duration: "8 min",
        body:
          "MFA debe ser obligatorio en accesos administrativos, VPN, correo, nube, herramientas de soporte, consolas y cuentas de emergencia. Para perfiles de TI, una cuenta comprometida puede permitir movimiento lateral, cambios de configuracion o acceso a datos masivos. MFA fuerte y monitoreo reducen el riesgo.",
        scenario:
          "Una cuenta administrativa sin MFA inicia sesion desde una ubicacion inusual fuera de horario.",
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
          "Un incidente requiere roles claros, criterios de severidad, comunicacion y bitacora. TI debe distinguir entre evento, alerta e incidente, y saber cuando escalar. La improvisacion puede borrar evidencia o extender el dano. El playbook guia acciones de contencion, erradicacion y recuperacion.",
        scenario:
          "El sistema de monitoreo alerta inicios de sesion fallidos masivos y un inicio exitoso desde un pais inesperado.",
        actions: [
          "Clasifica severidad y alcance usando criterios definidos.",
          "Registra tiempos, evidencias, decisiones y responsables.",
          "Escala segun el playbook y conserva registros."
        ],
        takeaways: [
          "No toda alerta es incidente, pero toda alerta importante debe triagearse.",
          "La bitacora reduce perdida de contexto.",
          "Los playbooks evitan decisiones improvisadas."
        ]
      },
      {
        title: "Respuesta inicial",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "La respuesta inicial busca contener sin destruir evidencia. Puede incluir aislar un equipo, revocar sesiones, bloquear indicadores, preservar logs, suspender credenciales y coordinar comunicacion. Las acciones deben hacerse con orden y registro para no perder capacidad de investigacion.",
        scenario:
          "Un usuario reporta que ejecuto un archivo sospechoso y el equipo empezo a comportarse de forma extrana.",
        actions: [
          "Aisla el equipo siguiendo el procedimiento, sin apagarlo si la politica indica preservar memoria.",
          "Recolecta datos basicos: usuario, hora, archivo, origen, red y sintomas.",
          "Bloquea o revoca accesos asociados cuando exista riesgo de compromiso."
        ],
        takeaways: [
          "Contener no significa borrar todo.",
          "Los primeros minutos definen la investigacion.",
          "Preservar evidencia permite entender alcance."
        ]
      },
      {
        title: "Respaldo y ransomware",
        video: "ransomware",
        duration: "9 min",
        body:
          "Ransomware cifra datos y tambien intenta afectar respaldos. Una estrategia de respaldo debe incluir copias separadas, proteccion contra borrado, pruebas de restauracion, prioridades de sistemas y tiempos objetivo de recuperacion. El respaldo solo sirve si se puede restaurar a tiempo.",
        scenario:
          "Un servidor de archivos queda cifrado y el respaldo mas reciente estaba conectado con permisos de escritura desde el mismo entorno.",
        actions: [
          "Mantiene copias offline, inmutables o separadas cuando sea posible.",
          "Prueba restauraciones periodicas y documenta tiempos reales.",
          "Define sistemas criticos, dependencias y orden de recuperacion."
        ],
        takeaways: [
          "Un respaldo no probado es una suposicion.",
          "Ransomware tambien apunta a respaldos.",
          "La recuperacion se disena antes de la crisis."
        ]
      }
    ],
    quiz: [
      {
        text: "Que principio guia la gestion de accesos?",
        options: ["Minimo privilegio", "Acceso total por comodidad", "Permisos permanentes"],
        correct: 0
      },
      {
        text: "Que debe pasar cuando alguien cambia de puesto?",
        options: ["Revisar y ajustar permisos", "Conservar todos los accesos anteriores", "Crear cuentas compartidas"],
        correct: 0
      },
      {
        text: "Que accion forma parte del hardening?",
        options: ["Desactivar servicios innecesarios", "Abrir puertos sin control", "Usar cuentas antiguas"],
        correct: 0
      },
      {
        text: "Donde debe ser prioritario MFA?",
        options: ["Cuentas administrativas y accesos remotos", "Solo redes sociales personales", "Solo usuarios sin permisos"],
        correct: 0
      },
      {
        text: "Que mejora la trazabilidad en TI?",
        options: ["Cuentas nominativas", "Cuentas compartidas", "Claves enviadas por chat"],
        correct: 0
      },
      {
        text: "Que debe incluir la bitacora de incidente?",
        options: ["Tiempos, evidencia, decisiones y responsables", "Solo comentarios informales", "Datos inventados para cerrar rapido"],
        correct: 0
      },
      {
        text: "Que debe evitarse en respuesta inicial?",
        options: ["Destruir evidencia sin registro", "Documentar acciones", "Contener con playbook"],
        correct: 0
      },
      {
        text: "Que respaldo es realmente util?",
        options: ["El que se prueba y puede restaurarse", "El conectado siempre con permisos totales", "El que nadie conoce"],
        correct: 0
      }
    ]
  },
  "monthly-course": {
    overview:
      "Biblioteca de microcursos de 10 a 15 minutos para reforzar un habito por mes sin interrumpir la operacion. Cada capsula puede asignarse como refuerzo despues de evaluaciones o simulaciones.",
    lessons: [
      {
        title: "Como detectar un correo falso",
        video: "phishing",
        duration: "10 min",
        body:
          "Para detectar un correo falso, revisa remitente, dominio, tono, urgencia, enlaces, adjuntos y solicitud. No necesitas encontrar muchas senales: una sola inconsistencia puede justificar reporte. Los correos falsos actuales pueden estar bien escritos y usar logos reales.",
        scenario:
          "Un correo de soporte pide validar tu buzon hoy. El enlace parece corporativo, pero el dominio termina en una direccion desconocida.",
        actions: [
          "Revisa el dominio real del remitente y de los enlaces.",
          "No descargues adjuntos ni ingreses contrasenas desde el correo.",
          "Reporta el mensaje con el canal oficial."
        ],
        takeaways: [
          "El logo no confirma autenticidad.",
          "Una sola senal de alerta basta para pausar.",
          "Reportar protege al resto del equipo."
        ]
      },
      {
        title: "Como identificar un link sospechoso",
        video: "phishing",
        duration: "10 min",
        body:
          "Un link sospechoso puede usar dominios parecidos, letras cambiadas, subdominios confusos, acortadores o palabras que intentan sonar oficiales. Antes de ingresar datos, revisa la direccion completa. En servicios criticos, entra escribiendo la URL oficial o desde favoritos corporativos.",
        scenario:
          "Recibes un enlace que dice facturacion-empresa.com.seguro-login.net. Parece mencionar a la empresa, pero el dominio principal es otro.",
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
        title: "Que hacer si recibes un WhatsApp extrano",
        video: "smishing",
        duration: "10 min",
        body:
          "Un WhatsApp extrano puede pedir pagos, codigos, documentos o acciones urgentes. Aunque use foto y nombre conocidos, debes validar. Los atacantes tambien pueden decir que cambiaron de numero o que no pueden recibir llamadas.",
        scenario:
          "Un supuesto jefe escribe desde un numero nuevo y pide transferir dinero a una cuenta personal.",
        actions: [
          "No compartas codigos ni hagas pagos por instrucciones informales.",
          "Valida con un canal oficial conocido.",
          "Reporta la conversacion con capturas y numero de origen."
        ],
        takeaways: [
          "El numero nuevo es una alerta.",
          "La foto de perfil no prueba identidad.",
          "Validar no es desconfiar: es proteger."
        ]
      },
      {
        title: "Como crear contrasenas seguras",
        video: "contrasenas",
        duration: "10 min",
        body:
          "Una buena contrasena es larga, unica y dificil de adivinar. Evita fechas, nombres, equipos favoritos, patrones de teclado y cambios obvios. Un administrador de contrasenas permite usar claves fuertes sin memorizarlas todas.",
        scenario:
          "Una persona usa Empresa2026! para varios sistemas porque cumple con mayuscula, numero y simbolo.",
        actions: [
          "Crea frases largas no relacionadas con datos personales.",
          "Usa una clave distinta para cada servicio.",
          "Guarda credenciales en una herramienta autorizada."
        ],
        takeaways: [
          "Cumplir complejidad minima no siempre significa seguridad.",
          "La reutilizacion es el mayor problema.",
          "Una frase larga suele ser mas resistente."
        ]
      },
      {
        title: "Que es MFA y por que importa",
        video: "mfa",
        duration: "10 min",
        body:
          "MFA agrega una capa de proteccion si una contrasena se filtra. Sin MFA, una clave robada puede bastar para entrar. Con MFA, el atacante necesita un segundo factor. Aun asi, las solicitudes no iniciadas deben rechazarse y reportarse.",
        scenario:
          "Recibes una notificacion de aprobacion mientras no estas iniciando sesion.",
        actions: [
          "Rechaza solicitudes no iniciadas.",
          "Reporta notificaciones repetidas o sospechosas.",
          "Usa MFA en cuentas de correo, nube, bancos y administracion."
        ],
        takeaways: [
          "MFA reduce robo de cuentas.",
          "Aprobar por cansancio es peligroso.",
          "Los codigos MFA no se comparten."
        ]
      },
      {
        title: "Como evitar fraudes con QR",
        video: "qr_fraude",
        duration: "10 min",
        body:
          "Los codigos QR pueden llevar a paginas falsas, cobros fraudulentos o formularios para robar credenciales. Son utiles, pero no son automaticamente seguros. Antes de ingresar datos, revisa la URL que abre el QR y valida que pertenezca al servicio esperado.",
        scenario:
          "En una recepcion aparece un QR para 'validar acceso Wi-Fi corporativo' y pide usuario y contrasena de correo.",
        actions: [
          "Revisa la URL antes de escribir datos.",
          "No ingreses credenciales corporativas en QR no autorizados.",
          "Usa redes y portales oficiales de la empresa."
        ],
        takeaways: [
          "Un QR puede ocultar un link falso.",
          "Las credenciales corporativas no deben usarse en formularios desconocidos.",
          "La ubicacion fisica de un QR no garantiza que sea confiable."
        ]
      },
      {
        title: "Que hacer si abriste un archivo sospechoso",
        video: "ransomware",
        duration: "10 min",
        body:
          "Abrir un archivo sospechoso no siempre significa infeccion, pero si requiere accion rapida. No intentes resolverlo solo ni borres evidencia. Reporta que abriste, de donde venia, que viste y si ingresaste datos o habilitaste contenido.",
        scenario:
          "Abriste una supuesta factura y el documento pidio habilitar macros para ver el contenido.",
        actions: [
          "No habilites macros ni vuelvas a abrir el archivo.",
          "Reporta el archivo, remitente, hora y accion realizada.",
          "Sigue instrucciones de TI sobre aislamiento o analisis."
        ],
        takeaways: [
          "Reportar rapido es mas importante que sentir pena.",
          "La evidencia ayuda a revisar alcance.",
          "No se debe enviar el archivo a mas personas."
        ]
      },
      {
        title: "Como proteger informacion confidencial",
        video: "proteger_empresa",
        duration: "10 min",
        body:
          "La informacion confidencial debe compartirse con minimo necesario, permisos adecuados y canales autorizados. Antes de enviar un archivo, revisa destinatarios, permisos, clasificacion y si realmente todos necesitan acceso. Tambien cuida impresiones y capturas.",
        scenario:
          "Un reporte de clientes se comparte por enlace publico para que todos puedan abrirlo sin pedir permisos.",
        actions: [
          "Usa permisos por persona o grupo autorizado.",
          "Evita enlaces publicos para datos internos o personales.",
          "Retira accesos cuando la colaboracion termine."
        ],
        takeaways: [
          "Compartir rapido no debe significar compartir abierto.",
          "Los permisos deben revisarse.",
          "La confidencialidad aplica a archivos, fotos, pantallas e impresiones."
        ]
      },
      {
        title: "Fraudes con inteligencia artificial",
        video: "ia_fraude",
        duration: "12 min",
        body:
          "La IA permite crear mensajes mas convincentes, voces falsas, imagenes manipuladas y perfiles creibles. Esto aumenta la calidad del engano, pero no cambia la defensa: validar identidad, seguir procesos, no compartir codigos y reportar solicitudes raras.",
        scenario:
          "Un audio con voz parecida a un directivo pide autorizar un pago y dice que no puede confirmar por otro canal.",
        actions: [
          "Confirma por un canal alterno ya conocido.",
          "No compartas codigos MFA, claves ni datos bancarios por llamada.",
          "Escala solicitudes sensibles que usen urgencia o excepciones."
        ],
        takeaways: [
          "La voz puede ser falsa.",
          "El proceso protege cuando la apariencia engana.",
          "La IA vuelve mas importante la validacion."
        ]
      },
      {
        title: "Como reportar un incidente",
        video: "identidad",
        duration: "10 min",
        body:
          "Un buen reporte incluye que paso, cuando, por que canal llego, que accion tomaste, que datos se compartieron y que evidencia existe. No necesitas investigar por tu cuenta. El equipo responsable se encarga de analizar y contener.",
        scenario:
          "Ingresaste datos en una pagina falsa y luego cerraste el navegador al darte cuenta.",
        actions: [
          "Reporta hora, enlace, usuario afectado y datos ingresados.",
          "Conserva correos, mensajes, capturas y archivos relacionados.",
          "Sigue el proceso interno antes de cambiar o borrar cosas."
        ],
        takeaways: [
          "El reporte temprano reduce dano.",
          "No se espera que el empleado investigue solo.",
          "La evidencia permite proteger a otros."
        ]
      }
    ],
    quiz: [
      {
        text: "Que basta para reportar un correo?",
        options: ["Una senal sospechosa", "Cinco errores ortograficos", "Que no tenga logo"],
        correct: 0
      },
      {
        text: "Que parte de un link debes revisar?",
        options: ["El dominio principal", "Solo el texto azul", "El tamano del boton"],
        correct: 0
      },
      {
        text: "Que hacer ante un WhatsApp de numero nuevo que pide dinero?",
        options: ["Validar por canal oficial", "Pagar para ayudar", "Enviar codigos de confirmacion"],
        correct: 0
      },
      {
        text: "Que hace segura una contrasena?",
        options: ["Que sea larga y unica", "Que use el nombre de la empresa", "Que se comparta con el jefe"],
        correct: 0
      },
      {
        text: "Que hacer con una notificacion MFA no iniciada?",
        options: ["Rechazar y reportar", "Aprobar rapido", "Enviar el codigo por chat"],
        correct: 0
      },
      {
        text: "Que riesgo tiene un QR desconocido?",
        options: ["Puede llevar a una pagina falsa", "Siempre bloquea malware", "Verifica identidad automaticamente"],
        correct: 0
      },
      {
        text: "Que hacer si abriste un archivo sospechoso?",
        options: ["Reportar y conservar evidencia", "Mandarlo a mas companeros", "Borrarlo todo sin avisar"],
        correct: 0
      },
      {
        text: "Como compartir informacion confidencial?",
        options: ["Con permisos adecuados y minimo necesario", "Con enlaces publicos", "Por cuentas personales"],
        correct: 0
      },
      {
        text: "Que cambia con fraudes de IA?",
        options: ["La apariencia puede ser mas convincente", "Ya no se necesita validar", "MFA deja de servir"],
        correct: 0
      },
      {
        text: "Que debe incluir un reporte de incidente?",
        options: ["Que paso, cuando, canal y evidencia", "Solo una opinion", "Nada hasta estar seguro al 100%"],
        correct: 0
      }
    ]
  },
  "phishing-course": {
    overview:
      "Modulo Enterprise para planear, ejecutar y medir simulaciones de phishing educativo sin recolectar credenciales reales y con enfoque de mejora continua.",
    lessons: [
      {
        title: "Objetivo de una simulacion",
        video: "phishing",
        duration: "7 min",
        body:
          "Una simulacion de phishing mide habitos y prepara al personal para detectar ataques reales. Su objetivo es educar y mejorar controles, no avergonzar. Debe tener autorizacion, alcance definido, criterios de medicion y una experiencia de aprendizaje posterior.",
        scenario:
          "La empresa quiere medir riesgo en Finanzas usando una simulacion de factura falsa despues del curso de pagos seguros.",
        actions: [
          "Define objetivo, poblacion, fecha, escenario y aprobadores.",
          "Aclara que no se recolectaran contrasenas reales.",
          "Prepara material de retroalimentacion para quienes interactuen."
        ],
        takeaways: [
          "Medir permite mejorar capacitacion y controles.",
          "La simulacion debe estar autorizada.",
          "El enfoque educativo genera confianza."
        ]
      },
      {
        title: "Correo falso de factura",
        video: "fraude_bec",
        duration: "8 min",
        body:
          "La factura falsa es un escenario comun porque Finanzas, Compras y Administracion reciben documentos externos. La simulacion puede evaluar si los usuarios revisan proveedor, dominio, orden de compra, adjunto y urgencia antes de abrir o pagar.",
        scenario:
          "Se envia una supuesta factura vencida con enlace a descarga y asunto de urgencia de pago.",
        actions: [
          "Incluye senales medibles como dominio parecido, urgencia o enlace externo.",
          "Evita archivos reales con codigo o contenido danino.",
          "Muestra una pagina educativa si el usuario hace clic."
        ],
        takeaways: [
          "Las facturas son pretexto comun de ataque.",
          "El clic debe llevar a aprendizaje, no a castigo.",
          "Las senales deben alinearse al curso."
        ]
      },
      {
        title: "Correo falso de paqueteria",
        video: "phishing",
        duration: "7 min",
        body:
          "Los mensajes de paqueteria aprovechan curiosidad y expectativa de entrega. Pueden pedir pagos pequenos, direccion, telefono o credenciales. En simulacion, ayudan a entrenar revision de dominio y evitar formularios falsos.",
        scenario:
          "Un correo informa que hay un paquete retenido y pide pagar una tarifa para liberarlo.",
        actions: [
          "Mide apertura, clic y reporte del mensaje.",
          "Usa marcas genericas o autorizadas para evitar conflictos.",
          "Incluye retroalimentacion sobre pagos pequenos y enlaces externos."
        ],
        takeaways: [
          "Los montos pequenos tambien pueden ser fraude.",
          "La paqueteria falsa busca rapidez y curiosidad.",
          "El reporte temprano puede alertar a toda la empresa."
        ]
      },
      {
        title: "WhatsApp falso de direccion",
        video: "smishing",
        duration: "7 min",
        body:
          "La simulacion por mensajeria debe manejarse con especial cuidado y autorizacion. Puede entrenar validacion de identidad, rechazo de codigos y control de pagos informales. Debe evitar recolectar datos reales y debe explicar inmediatamente las senales de alerta.",
        scenario:
          "Un mensaje simulado de direccion pide comprar tarjetas y enviar codigos, alegando que esta en una junta.",
        actions: [
          "Define reglas eticas y legales antes de usar mensajeria.",
          "No recolectes codigos, documentos ni datos personales reales.",
          "Mide si el usuario valida por canal oficial o reporta."
        ],
        takeaways: [
          "La mensajeria informal es un canal de fraude frecuente.",
          "La simulacion debe proteger privacidad y confianza.",
          "Validar por otro canal es el comportamiento esperado."
        ]
      },
      {
        title: "Link falso de cambio de contrasena",
        video: "phishing",
        duration: "8 min",
        body:
          "Este escenario entrena a los empleados para no ingresar credenciales desde enlaces. La pagina de simulacion debe usar campos de prueba o detenerse antes de pedir contrasenas reales. Tambien puede ensenar a entrar al portal oficial escribiendo la direccion.",
        scenario:
          "Un correo avisa que la contrasena vence hoy y ofrece un enlace para renovarla.",
        actions: [
          "Nunca captures contrasenas reales en una simulacion.",
          "Mide clic, inicio de formulario de prueba y reporte.",
          "Explica como validar portales oficiales de la empresa."
        ],
        takeaways: [
          "Las credenciales reales no deben capturarse.",
          "El cambio de contrasena es un pretexto comun.",
          "El entrenamiento debe reforzar uso de portales oficiales."
        ]
      },
      {
        title: "Alerta falsa de banco",
        video: "phishing",
        duration: "7 min",
        body:
          "Las alertas falsas de banco usan miedo y urgencia: cargos no reconocidos, bloqueo de cuenta, token vencido o validacion inmediata. En una simulacion, este escenario sirve para entrenar a empleados a no usar enlaces de mensajes financieros y a validar desde canales oficiales.",
        scenario:
          "Un correo simulado avisa que la cuenta empresarial sera bloqueada por actividad sospechosa y pide entrar a un enlace para confirmar datos.",
        actions: [
          "Usa dominios y marcas de prueba o autorizadas para evitar confusion legal.",
          "No solicites numeros reales de tarjeta, tokens, NIP, contrasenas ni datos bancarios.",
          "Explica que las validaciones bancarias se hacen desde canales oficiales ya conocidos."
        ],
        takeaways: [
          "El miedo a perder acceso financiero acelera decisiones.",
          "Los enlaces bancarios en correos o SMS deben validarse con cuidado.",
          "La simulacion debe educar sin recolectar datos sensibles."
        ]
      },
      {
        title: "Documento falso de proveedor",
        video: "fraude_bec",
        duration: "7 min",
        body:
          "El documento falso de proveedor entrena a Compras, Administracion y Finanzas a revisar adjuntos, dominios y cambios de informacion. Puede simular una orden de compra, contrato, comprobante fiscal o actualizacion de cuenta bancaria, siempre sin entregar malware ni archivos peligrosos.",
        scenario:
          "Un proveedor simulado envia un documento de actualizacion bancaria y pide procesarlo antes del cierre del mes.",
        actions: [
          "Usa archivos inofensivos o paginas educativas en lugar de adjuntos ejecutables.",
          "Mide clic, descarga simulada, reporte y validacion por canal oficial.",
          "Refuerza el proceso de confirmacion de proveedores y cuentas bancarias."
        ],
        takeaways: [
          "Los proveedores son un pretexto frecuente en fraudes empresariales.",
          "Cambios de cuenta bancaria requieren validacion formal.",
          "La simulacion puede conectar awareness con controles de pago."
        ]
      },
      {
        title: "Metricas y reporte ejecutivo",
        video: "ciberseguridad_empresa",
        duration: "8 min",
        body:
          "Las metricas clave son tasa de apertura, clic, reporte, datos de prueba ingresados, tiempo de reporte y riesgo por area. El reporte ejecutivo debe mostrar tendencia, no solo culpables. La meta es decidir refuerzos: microcursos, cambios de proceso, MFA, validaciones o nuevas campanas.",
        scenario:
          "Finanzas tiene 22% de clic en factura falsa, pero tambien fue el area con mas reportes en los primeros 15 minutos.",
        actions: [
          "Compara resultados por area y contra meses anteriores.",
          "Distingue comportamientos de riesgo y comportamientos positivos como reportar.",
          "Recomienda acciones concretas y medibles para el siguiente mes."
        ],
        takeaways: [
          "Reportar es una metrica positiva.",
          "La tendencia importa mas que una foto aislada.",
          "El reporte ejecutivo convierte capacitacion en decision."
        ]
      }
    ],
    quiz: [
      {
        text: "Cual es el objetivo correcto de una simulacion de phishing?",
        options: ["Educar y medir riesgo", "Avergonzar empleados", "Recolectar contrasenas reales"],
        correct: 0
      },
      {
        text: "Que debe existir antes de una campana?",
        options: ["Autorizacion y alcance definido", "Improvisacion total", "Publicacion de nombres vulnerables"],
        correct: 0
      },
      {
        text: "Que escenario ayuda a Finanzas?",
        options: ["Factura falsa", "Cambio de fondo de pantalla", "Encuesta de cafeteria"],
        correct: 0
      },
      {
        text: "Que debe hacer una landing educativa?",
        options: ["Explicar senales de alerta", "Instalar software", "Pedir contrasenas reales"],
        correct: 0
      },
      {
        text: "Que regla aplica a simulaciones por WhatsApp?",
        options: ["No recolectar datos reales y contar con autorizacion", "Pedir codigos reales", "Usar cualquier numero sin control"],
        correct: 0
      },
      {
        text: "Que no se debe capturar en una simulacion?",
        options: ["Contrasenas reales", "Clics", "Reportes"],
        correct: 0
      },
      {
        text: "Que metrica es positiva?",
        options: ["Quien reporto", "Quien fue exhibido", "Quien no recibio capacitacion"],
        correct: 0
      },
      {
        text: "Que debe incluir el reporte ejecutivo?",
        options: ["Tendencia, riesgo por area y recomendaciones", "Solo nombres para castigo", "Datos sin contexto"],
        correct: 0
      }
    ]
  },
  "onboarding-course": {
    overview:
      "Curso expres para nuevos ingresos. En cinco lecciones cortas aprendes lo esencial para trabajar seguro desde tu primera semana: identidad digital, correo y mensajeria, dispositivos y como reportar cualquier duda.",
    lessons: [
      {
        title: "Bienvenida a la seguridad DOGUI",
        video: "ciberseguridad_empresa",
        duration: "6 min",
        body:
          "Bienvenido. Durante tu primera semana vas a recibir accesos, correos, invitaciones y herramientas nuevas, y eso te vuelve un objetivo comun para intentos de fraude porque todavia no conoces los procesos internos. La seguridad no depende de memorizar reglas complicadas: depende de reconocer que algo no cuadra y preguntar antes de actuar. Nadie espera que sepas todo el primer dia, pero si que reportes cualquier duda.",
        scenario:
          "El segundo dia recibes un correo de 'Recursos Humanos' pidiendo confirmar tus datos bancarios en un formulario externo para procesar tu primer pago.",
        actions: [
          "Antes de tu primera semana, guarda el contacto oficial de tu jefe directo y de RH.",
          "Si algo te presiona a actuar rapido o parece fuera de lo normal, preguntale a tu jefe directo o a RH por un canal ya conocido.",
          "Nunca te sientas mal por preguntar dos veces si algo no te queda claro."
        ],
        takeaways: [
          "Ser nuevo no es una debilidad, es una razon para verificar mas.",
          "Los procesos reales de la empresa no dan miedo ni presionan.",
          "Preguntar a tiempo es parte normal de integrarte."
        ]
      },
      {
        title: "Tu identidad digital en la empresa",
        video: "contrasenas",
        duration: "7 min",
        body:
          "Tu cuenta corporativa es la llave de todo: correo, sistemas, documentos y en muchos casos datos de clientes. Desde el primer dia debes usar una contrasena unica para tus accesos de trabajo, distinta a la de tus redes sociales o servicios personales, y activar la autenticacion multifactor si tu equipo de TI la ofrece. Nunca debes compartir tu usuario o contrasena con nadie, ni siquiera con un companero que 'solo necesita entrar un momento'.",
        scenario:
          "Un companero de otro equipo te pide tu contrasena porque 'el sistema no le deja entrar' y tiene prisa por terminar un reporte.",
        actions: [
          "Crea una contrasena larga y unica para tus accesos de trabajo desde el primer dia.",
          "Activa MFA en cuanto tu equipo de TI te lo indique.",
          "Nunca compartas tu contrasena; si alguien la necesita, esa persona debe pedir su propio acceso a TI."
        ],
        takeaways: [
          "Tu contrasena es personal e intransferible, sin excepciones.",
          "MFA protege tu cuenta aunque alguien mas conozca tu contrasena.",
          "Compartir accesos rompe la trazabilidad de quien hizo que."
        ]
      },
      {
        title: "Correo, chat y videollamadas seguras",
        video: "phishing",
        duration: "8 min",
        body:
          "En tus primeras semanas vas a recibir muchos correos e invitaciones de gente que todavia no conoces, lo que hace mas dificil detectar un mensaje falso. Revisa siempre el dominio del remitente, desconfia de enlaces o archivos inesperados, y valida invitaciones a videollamada que no reconozcas antes de entrar. Si un mensaje te pide una accion urgente o secreta, es una senal de alerta, sin importar quien diga ser el remitente.",
        scenario:
          "Recibes un correo de un supuesto proveedor de TI pidiendo que instales una herramienta 'para configurar tu equipo' antes de tu induccion oficial.",
        actions: [
          "Revisa el dominio real del remitente antes de abrir enlaces o adjuntos.",
          "No instales software que no venga de tu equipo de TI por el canal oficial.",
          "Confirma con tu jefe directo si un mensaje inesperado dice ser parte de tu proceso de induccion."
        ],
        takeaways: [
          "No conocer todavia a todo el equipo no significa confiar en cualquier mensaje.",
          "La instalacion de software siempre debe pasar por TI.",
          "La induccion real no depende de enlaces externos urgentes."
        ]
      },
      {
        title: "Dispositivos y accesos del primer dia",
        video: "accesos_ti",
        duration: "7 min",
        body:
          "Tu equipo de computo, credenciales, gafete y accesos fisicos son parte de tu responsabilidad desde el primer momento. Bloquea tu pantalla cuando te alejes, no conectes memorias USB desconocidas, y reporta de inmediato si pierdes tu laptop, telefono de trabajo o gafete. Si trabajas desde casa, cuida que tu red y tu espacio de trabajo tambien protejan la informacion de la empresa.",
        scenario:
          "Dejas tu laptop desbloqueada en una sala de juntas mientras vas por un cafe, y alguien que no conoces esta sentado cerca.",
        actions: [
          "Bloquea tu equipo cada vez que te alejes, aunque sea por poco tiempo.",
          "No conectes USB o dispositivos desconocidos a tu equipo de trabajo.",
          "Reporta de inmediato la perdida o robo de cualquier dispositivo o credencial."
        ],
        takeaways: [
          "Un equipo desbloqueado es una puerta abierta a toda tu cuenta.",
          "Los dispositivos desconocidos pueden contener malware.",
          "Reportar rapido una perdida reduce el riesgo para toda la empresa."
        ]
      },
      {
        title: "A quien y como reportar",
        video: "identidad",
        duration: "7 min",
        body:
          "Saber a quien reportar es tan importante como identificar el riesgo. Cada empresa tiene un canal definido: puede ser un correo, un chat de TI o seguridad, o tu jefe directo. Reportar no te mete en problemas ni te hace ver mal; al contrario, ayuda a proteger a todo el equipo. Entre mas rapido se reporte algo sospechoso, mas facil es contenerlo antes de que cause dano real.",
        scenario:
          "Diste clic sin pensar en un enlace de un correo que despues te parecio raro, y no sabes si debes decir algo.",
        actions: [
          "Guarda desde tu primera semana el canal oficial de reporte de seguridad.",
          "Reporta cualquier duda, aunque no estes seguro si es grave.",
          "No borres el mensaje o evidencia antes de reportar."
        ],
        takeaways: [
          "Reportar siempre es la decision correcta, incluso si resulta no ser nada.",
          "Nadie espera que un nuevo ingreso identifique todo perfecto.",
          "La rapidez del reporte importa mas que tener certeza total."
        ]
      }
    ],
    quiz: [
      {
        text: "Por que las personas de nuevo ingreso son un objetivo comun de fraude?",
        options: ["Porque todavia no conocen los procesos internos", "Porque tienen mas privilegios que nadie", "Porque no usan correo electronico"],
        correct: 0
      },
      {
        text: "Que debes hacer si un companero te pide tu contrasena?",
        options: ["Negarte y decirle que pida su propio acceso a TI", "Compartirla si tiene prisa", "Cambiarla despues de prestarla"],
        correct: 0
      },
      {
        text: "Que senal debe hacerte dudar de un correo de induccion?",
        options: ["Que pida instalar software fuera del canal oficial de TI", "Que venga de Recursos Humanos", "Que tenga el logo de la empresa"],
        correct: 0
      },
      {
        text: "Que debes hacer al alejarte de tu equipo de computo?",
        options: ["Bloquear la pantalla", "Dejarlo abierto si vuelves pronto", "Apagar solo el monitor"],
        correct: 0
      },
      {
        text: "Que pasa si reportas algo sospechoso y al final no era nada grave?",
        options: ["Fue la decision correcta de todas formas", "Te vas a meter en problemas", "Debiste estar 100% seguro antes de reportar"],
        correct: 0
      }
    ]
  },
  "sales-course": {
    overview:
      "Ruta para Ventas y Atencion a Clientes enfocada en proteger datos de clientes en el CRM, detectar vishing e ingenieria social, y cerrar ventas validando canales oficiales.",
    lessons: [
      {
        title: "Proteccion de datos de clientes en el CRM",
        video: "proteger_empresa",
        duration: "7 min",
        body:
          "El CRM concentra datos de contacto, historial de compras, preferencias y a veces informacion financiera de tus clientes. Exportar reportes completos a tu correo personal, a una hoja de calculo suelta o a un USB parece practico, pero multiplica el riesgo de fuga. El acceso al CRM debe limitarse a lo necesario para tu trabajo, y cualquier exportacion masiva deberia tener una razon de negocio clara.",
        scenario:
          "Antes de un viaje, exportas toda tu cartera de clientes a una hoja de calculo y la guardas en tu correo personal 'por si acaso' no tienes internet.",
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
          "Los equipos de ventas y atencion reciben muchas llamadas de numeros desconocidos, lo que los vuelve un blanco frecuente de vishing: llamadas donde alguien se hace pasar por un cliente, proveedor o directivo para pedir descuentos indebidos, cambios de cuenta o informacion confidencial. Con inteligencia artificial, hoy es posible imitar voces conocidas con solo unos segundos de audio, asi que la voz por si sola ya no es prueba suficiente de identidad.",
        scenario:
          "Una llamada con voz muy parecida a la de un cliente frecuente pide con urgencia cambiar la cuenta de facturacion antes de que 'se cierre el trimestre'.",
        actions: [
          "Valida cambios de datos de facturacion o pago por un canal ya conocido, no por la misma llamada.",
          "Desconfia de solicitudes urgentes que buscan saltarse el proceso normal.",
          "Reporta llamadas sospechosas al equipo de seguridad, aunque parezcan menores."
        ],
        takeaways: [
          "Una voz conocida ya no garantiza que la persona sea quien dice ser.",
          "Los cambios de cuenta o pago siempre deben validarse por un segundo canal.",
          "La presion de urgencia es una senal, no una razon para saltarse el proceso."
        ]
      },
      {
        title: "Ingenieria social en redes profesionales",
        video: "ingenieria_social",
        duration: "7 min",
        body:
          "LinkedIn y otras redes profesionales son una fuente comun de reconocimiento para atacantes: revisan tu puesto, tus clientes, tus conexiones y tus publicaciones para preparar mensajes creibles. Un supuesto reclutador, cliente potencial o socio puede iniciar una conversacion amistosa que termina pidiendo informacion interna, acceso a un documento o una reunion fuera del canal oficial de la empresa.",
        scenario:
          "Un perfil que dice ser de un cliente importante te escribe por LinkedIn pidiendo la lista de precios especiales y el nombre de tu contacto interno de finanzas.",
        actions: [
          "Verifica identidad y contexto antes de compartir informacion comercial sensible por redes sociales.",
          "Mueve conversaciones de negocio reales a canales corporativos verificados.",
          "Evita publicar detalles operativos de clientes o procesos internos en tu perfil."
        ],
        takeaways: [
          "Las redes profesionales tambien son un vector de ingenieria social.",
          "La informacion publica en tu perfil puede usarse para hacer un engano mas creible.",
          "El negocio real se confirma en canales corporativos, no en mensajes directos."
        ]
      },
      {
        title: "Pagos y datos financieros de clientes",
        video: "fraude_bec",
        duration: "7 min",
        body:
          "Cuando ventas involucra cobros, anticipos o datos de tarjeta, el manejo debe seguir el proceso autorizado por la empresa: enlaces de pago oficiales, terminal certificada o el area de cobranza, nunca capturar numeros de tarjeta por chat, correo o nota. Un cambio de cuenta bancaria para recibir un pago, o una solicitud de descuento fuera de politica con urgencia, son senales clasicas de fraude financiero dirigido a ventas.",
        scenario:
          "Un cliente pide que le mandes el link de pago a una cuenta 'nueva' porque la anterior tuvo un problema, y quiere cerrar hoy mismo.",
        actions: [
          "Usa unicamente los metodos de cobro autorizados por la empresa.",
          "Nunca guardes ni envies datos completos de tarjeta por chat o correo.",
          "Valida cualquier cambio de cuenta de cobro con el area financiera antes de proceder."
        ],
        takeaways: [
          "El manejo de pagos no se improvisa por conveniencia del cierre.",
          "Un cambio de cuenta de ultima hora siempre debe validarse.",
          "Proteger los datos de pago del cliente protege tambien tu reputacion como vendedor."
        ]
      },
      {
        title: "Suplantacion de tu marca ante clientes",
        video: "identidad",
        duration: "7 min",
        body:
          "Los atacantes pueden crear perfiles, sitios o cuentas de mensajeria que imitan a la empresa para enganar a tus clientes: ofertas falsas, solicitudes de pago a nombre tuyo o de tu equipo, o soporte tecnico falso. Esto no solo afecta al cliente, tambien dana la confianza en tu marca personal y en la empresa. Si un cliente te reporta un mensaje raro 'de parte tuya' que tu no enviaste, es una alerta que debe escalarse de inmediato.",
        scenario:
          "Un cliente te escribe agradeciendo la 'promocion especial' que le mandaste por WhatsApp, pero tu nunca enviaste ese mensaje.",
        actions: [
          "Escala de inmediato cualquier reporte de suplantacion de tu marca o tu nombre.",
          "Avisa a tus clientes por un canal oficial si detectas una campana de suplantacion activa.",
          "Manten actualizados tus canales oficiales para que los clientes puedan verificarlos."
        ],
        takeaways: [
          "La suplantacion de marca es un ataque tanto al cliente como a la empresa.",
          "Escalar rapido limita cuantos clientes son enganados.",
          "La confianza del cliente se protege siendo transparente sobre el incidente."
        ]
      },
      {
        title: "Cierre de venta seguro",
        video: "phishing",
        duration: "6 min",
        body:
          "En el cierre de una venta importante, la prisa y el entusiasmo pueden bajar la guardia. Antes de firmar, cobrar o entregar acceso, confirma que los documentos, correos y contactos correspondan a canales verificados. Un contrato, factura o solicitud de firma que llega por un canal inusual, con cambios de ultima hora, merece una validacion extra antes de continuar.",
        scenario:
          "Llega un contrato para firma electronica desde un dominio parecido al del cliente, con una clausula de pago distinta a lo acordado en la reunion.",
        actions: [
          "Confirma cualquier documento de cierre por el canal y dominio oficial ya conocido.",
          "Compara condiciones finales contra lo acordado antes de firmar o cobrar.",
          "Reporta discrepancias de ultimo momento antes de continuar con el cierre."
        ],
        takeaways: [
          "El entusiasmo de cerrar una venta no debe saltarse la validacion.",
          "Los cambios de ultima hora en documentos son una senal de alerta.",
          "Verificar antes de firmar protege el trato y a ambas partes."
        ]
      }
    ],
    quiz: [
      {
        text: "Por que exportar el CRM completo a un correo personal es riesgoso?",
        options: ["Multiplica el riesgo de fuga de datos de clientes", "Mejora la seguridad de respaldo", "Es la unica forma de trabajar sin internet"],
        correct: 0
      },
      {
        text: "Que hacer ante una llamada urgente que pide cambiar datos de facturacion?",
        options: ["Validar por un canal ya conocido antes de actuar", "Cambiarlo de inmediato para no perder al cliente", "Pedir que lo repita para confirmar la voz"],
        correct: 0
      },
      {
        text: "Que riesgo representan las redes profesionales como LinkedIn?",
        options: ["Pueden usarse para preparar ingenieria social dirigida", "Eliminan la necesidad de verificar identidad", "Son un canal oficial de cobranza"],
        correct: 0
      },
      {
        text: "Como se deben capturar los datos de pago de un cliente?",
        options: ["Solo con los metodos de cobro autorizados por la empresa", "Por chat para agilizar el cierre", "Guardados en una nota personal"],
        correct: 0
      },
      {
        text: "Que debes hacer si un cliente reporta un mensaje 'tuyo' que no enviaste?",
        options: ["Escalarlo de inmediato", "Ignorarlo si el cliente no perdio dinero", "Responder tu mismo sin avisar a nadie"],
        correct: 0
      },
      {
        text: "Que senal de alerta aparece en un cierre de venta riesgoso?",
        options: ["Cambios de ultima hora en el documento o canal", "Que el cliente confirme por escrito", "Que el contrato llegue del dominio conocido"],
        correct: 0
      }
    ]
  },
  "legal-course": {
    overview:
      "Ruta para Legal y Cumplimiento sobre proteccion de datos personales, respuesta a brechas, clausulas de seguridad con proveedores y riesgo legal de IA y deepfakes.",
    lessons: [
      {
        title: "Proteccion de datos personales: fundamentos",
        video: "proteger_empresa",
        duration: "8 min",
        body:
          "La proteccion de datos personales exige informar a las personas para que sirven sus datos, pedir su consentimiento cuando corresponde, y limitar el uso a esas finalidades. Ademas, las personas tienen derechos de acceso, rectificacion, cancelacion y oposicion sobre su informacion. El area legal debe asegurar que exista un aviso de privacidad claro y que otras areas conozcan que datos pueden recolectar y como deben tratarlos.",
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
          "Los derechos de las personas sobre sus datos deben poder ejercerse facilmente."
        ]
      },
      {
        title: "Que hacer ante una brecha de datos",
        video: "identidad",
        duration: "8 min",
        body:
          "Ante una posible brecha de datos, legal debe coordinarse rapido con TI, seguridad y comunicacion para entender el alcance, contener el incidente y evaluar si existe obligacion de notificar a las personas afectadas o a la autoridad correspondiente, y en que plazo. Actuar tarde o sin documentar las decisiones aumenta el riesgo legal y reputacional, incluso si el incidente tecnico ya fue contenido.",
        scenario:
          "TI confirma que una base de datos con informacion de clientes estuvo expuesta por error durante varias horas antes de corregirse.",
        actions: [
          "Activa el protocolo de respuesta a incidentes con TI, seguridad y comunicacion.",
          "Evalua el alcance real, los datos involucrados y las obligaciones de notificacion.",
          "Documenta cada decision, plazo y accion tomada durante la respuesta."
        ],
        takeaways: [
          "La velocidad y la documentacion de la respuesta importan tanto como la contencion tecnica.",
          "No toda exposicion requiere el mismo tipo de notificacion; el analisis legal es clave.",
          "Una respuesta ordenada reduce el riesgo legal, aunque el incidente ya haya ocurrido."
        ]
      },
      {
        title: "Clausulas de seguridad con proveedores",
        video: "accesos_ti",
        duration: "7 min",
        body:
          "Cuando un proveedor procesa datos o tiene acceso a sistemas de la empresa, el contrato debe incluir obligaciones claras de seguridad: confidencialidad, medidas minimas de proteccion, notificacion de incidentes y, cuando aplique, derecho de auditoria. Sin estas clausulas, un incidente en el proveedor puede convertirse en un problema legal para tu empresa sin herramientas contractuales para exigir responsabilidad.",
        scenario:
          "Un proveedor de nomina sufre un incidente de seguridad y la empresa se entera por redes sociales, no por el proveedor.",
        actions: [
          "Incluye clausulas de notificacion de incidentes con plazos definidos en los contratos con proveedores.",
          "Exige medidas minimas de seguridad y confidencialidad para quien procese datos de la empresa.",
          "Revisa periodicamente el cumplimiento de proveedores criticos."
        ],
        takeaways: [
          "Un buen contrato es una herramienta de seguridad, no solo un tramite legal.",
          "La notificacion de incidentes debe ser una obligacion contractual explicita.",
          "El riesgo de un proveedor puede volverse un riesgo legal propio."
        ]
      },
      {
        title: "Conservacion y destruccion segura de documentos",
        video: "proteger_empresa",
        duration: "7 min",
        body:
          "Guardar informacion para siempre 'por si se necesita' aumenta el riesgo sin necesidad: entre mas datos acumulados, mayor es el impacto de una fuga. Legal debe definir cuanto tiempo se conserva cada tipo de documento o dato personal, y asegurar que al vencer ese plazo se elimine de forma segura, no solo se mueva a otra carpeta. La destruccion debe dejar evidencia de que realmente ocurrio.",
        scenario:
          "Se descubren expedientes de exempleados de hace mas de diez anos guardados sin ninguna razon de negocio vigente.",
        actions: [
          "Define periodos de conservacion claros por tipo de documento o dato.",
          "Elimina de forma segura la informacion que ya cumplio su plazo o finalidad.",
          "Deja evidencia documentada de los procesos de destruccion."
        ],
        takeaways: [
          "Guardar informacion indefinidamente no es una practica segura, es un riesgo acumulado.",
          "La destruccion segura debe ser verificable, no solo asumida.",
          "Menos datos guardados sin razon significa menos exposicion futura."
        ]
      },
      {
        title: "Riesgo legal de IA y deepfakes",
        video: "deepfakes",
        duration: "8 min",
        body:
          "El uso de inteligencia artificial trae preguntas legales nuevas: quien es responsable si una herramienta de IA usa datos personales sin base legal, o si un deepfake se usa para suplantar a un directivo, danar la reputacion de la empresa o cometer fraude. Legal debe participar en la adopcion de herramientas de IA dentro de la empresa y ayudar a definir como actuar y que evidencia conservar si la empresa es victima de un fraude con deepfake.",
        scenario:
          "Circula un video manipulado donde parece que el director general anuncia una decision que nunca tomo.",
        actions: [
          "Define un protocolo de respuesta legal y de comunicacion ante contenido falso generado con IA.",
          "Involucra a legal antes de adoptar herramientas de IA que usen datos personales o de clientes.",
          "Conserva evidencia tecnica y cronologica si la empresa es victima de un deepfake."
        ],
        takeaways: [
          "La IA generativa crea riesgos legales nuevos que antes no existian.",
          "La velocidad de respuesta importa tanto en un deepfake como en cualquier otro incidente.",
          "Legal debe ser parte de las decisiones sobre adopcion de IA, no solo reaccionar despues."
        ]
      }
    ],
    quiz: [
      {
        text: "Para que deben usarse los datos personales de un cliente?",
        options: ["Solo para las finalidades informadas y consentidas", "Para cualquier campana futura sin restriccion", "Solo si el cliente lo pregunta"],
        correct: 0
      },
      {
        text: "Que debe pasar primero ante una posible brecha de datos?",
        options: ["Activar el protocolo de respuesta y evaluar el alcance", "Esperar a que alguien mas lo reporte", "Borrar los registros para evitar confusion"],
        correct: 0
      },
      {
        text: "Que debe incluir un contrato con un proveedor que maneja datos de la empresa?",
        options: ["Clausulas de seguridad y notificacion de incidentes", "Solo el precio y tiempo de entrega", "Ninguna obligacion adicional de seguridad"],
        correct: 0
      },
      {
        text: "Que riesgo tiene guardar documentos sin limite de tiempo?",
        options: ["Aumenta el impacto de una fuga si algo falla", "Ninguno, mas informacion siempre es mejor", "Solo afecta el espacio de almacenamiento"],
        correct: 0
      },
      {
        text: "Que debe hacer legal ante un posible deepfake que afecta a la empresa?",
        options: ["Activar un protocolo de respuesta y conservar evidencia", "Ignorarlo hasta que se vuelva viral", "Responder de inmediato sin validar los hechos"],
        correct: 0
      }
    ]
  },
  "devsecure-course": {
    overview:
      "Ruta de desarrollo seguro para TI sobre OWASP Top 10, inyeccion, gestion de credenciales, seguridad en repositorios, control de acceso en aplicaciones y dependencias en CI/CD.",
    lessons: [
      {
        title: "OWASP Top 10: panorama general",
        video: "owasp_top10",
        duration: "8 min",
        body:
          "El OWASP Top 10 resume los riesgos mas comunes y de mayor impacto en aplicaciones web: perdida de control de acceso, fallas criptograficas, inyeccion, errores de diseno, mala configuracion, componentes vulnerables, fallas de autenticacion, entre otros. No es una lista teorica: describe los patrones que mas se explotan en incidentes reales. Conocerla ayuda a priorizar que revisar primero en el diseno y revision de codigo.",
        scenario:
          "Un equipo va a lanzar una funcionalidad nueva y quiere saber por donde empezar la revision de seguridad antes de salir a produccion.",
        actions: [
          "Usa el OWASP Top 10 como checklist minimo antes de lanzar funcionalidad nueva.",
          "Prioriza revisar control de acceso, validacion de entradas y manejo de credenciales.",
          "Actualiza el conocimiento del equipo cuando OWASP publique una version nueva."
        ],
        takeaways: [
          "La mayoria de incidentes de aplicaciones repiten un numero pequeno de patrones conocidos.",
          "Conocer el Top 10 no sustituye una revision completa, pero ordena las prioridades.",
          "La seguridad en desarrollo empieza en el diseno, no solo en produccion."
        ]
      },
      {
        title: "Inyeccion y validacion de entradas",
        video: "owasp_top10",
        duration: "8 min",
        body:
          "La inyeccion ocurre cuando datos que vienen del usuario se interpretan como parte de un comando o consulta, como en SQL injection o cross-site scripting. La defensa principal es nunca confiar en la entrada del usuario: usar consultas parametrizadas en vez de construir texto directamente, validar formato y longitud, y escapar la salida antes de mostrarla en una pagina.",
        scenario:
          "Un formulario de busqueda arma la consulta a la base de datos concatenando directamente el texto que escribe el usuario.",
        actions: [
          "Usa consultas parametrizadas o un ORM en vez de concatenar texto de usuario.",
          "Valida y limita el formato esperado de cada campo de entrada.",
          "Escapa la salida al mostrar contenido generado por usuarios en una pagina."
        ],
        takeaways: [
          "Toda entrada de usuario debe tratarse como potencialmente maliciosa.",
          "La inyeccion sigue siendo una de las fallas mas explotadas y mas prevenibles.",
          "Validar en el cliente no reemplaza validar tambien en el servidor."
        ]
      },
      {
        title: "Gestion segura de credenciales y secretos",
        video: "contrasenas",
        duration: "7 min",
        body:
          "Las credenciales, llaves de API y tokens nunca deben quedar escritas directamente en el codigo ni subirse a un repositorio, ni siquiera en un commit que despues se borra, porque el historial de Git conserva ese registro. Lo correcto es usar variables de entorno o un gestor de secretos, rotarlas periodicamente, y limitar quien puede verlas segun el principio de minimo privilegio.",
        scenario:
          "Un desarrollador sube por error una llave de API valida a un repositorio publico dentro de un archivo de configuracion.",
        actions: [
          "Nunca incluyas credenciales o llaves directamente en el codigo fuente.",
          "Usa un gestor de secretos o variables de entorno fuera del repositorio.",
          "Si una credencial se expone, rotala de inmediato en vez de solo borrar el commit."
        ],
        takeaways: [
          "El historial de Git conserva lo que se subio, aunque se borre despues.",
          "Rotar una credencial expuesta es mas seguro que confiar en que nadie la vio.",
          "Menos personas y sistemas con acceso a un secreto significa menos riesgo."
        ]
      },
      {
        title: "Seguridad en repositorios y control de versiones",
        video: "accesos_ti",
        duration: "7 min",
        body:
          "El repositorio de codigo es tan sensible como cualquier otro sistema critico. Las ramas principales deben protegerse para exigir revision antes de fusionar cambios, los permisos deben asignarse por rol, y las cuentas de exempleados o colaboradores externos deben revocarse a tiempo. Revisar el codigo de otra persona no es solo buscar errores logicos: tambien es una oportunidad para detectar riesgos de seguridad antes de que lleguen a produccion.",
        scenario:
          "Un exdesarrollador contratista sigue teniendo acceso de escritura al repositorio principal meses despues de terminar su contrato.",
        actions: [
          "Protege las ramas principales con revision obligatoria antes de fusionar.",
          "Revoca accesos de repositorio en cuanto termine una colaboracion externa o interna.",
          "Incluye revision de seguridad basica dentro del proceso normal de revision de codigo."
        ],
        takeaways: [
          "Un repositorio sin control de accesos es tan riesgoso como un servidor sin contrasena.",
          "La revocacion de accesos debe ser parte del proceso de baja, no un pendiente.",
          "La revision de codigo es tambien una capa de seguridad."
        ]
      },
      {
        title: "Autenticacion y control de acceso en aplicaciones",
        video: "mfa",
        duration: "8 min",
        body:
          "Una aplicacion segura no solo verifica quien eres al iniciar sesion, tambien debe verificar en cada accion que tengas permiso para hacerla. Los errores de control de acceso ocurren cuando la aplicacion confia en datos que el usuario puede manipular, como un identificador en la URL, para decidir que informacion mostrar. El diseno debe aplicar minimo privilegio y validar permisos en el servidor, no solo ocultar opciones en la interfaz.",
        scenario:
          "Un usuario cambia el numero de una factura en la URL y logra ver el documento de otro cliente distinto al suyo.",
        actions: [
          "Valida permisos en el servidor para cada solicitud, no solo en la interfaz.",
          "Nunca confies en identificadores que el usuario puede modificar sin verificar propiedad.",
          "Ofrece MFA como opcion o requisito para cuentas con datos sensibles."
        ],
        takeaways: [
          "Ocultar un boton en la interfaz no es lo mismo que proteger el acceso real.",
          "Cada solicitud al servidor debe validar que el usuario tiene permiso sobre ese dato especifico.",
          "El control de acceso roto es uno de los riesgos mas comunes y mas daninos."
        ]
      },
      {
        title: "Dependencias y seguridad en CI/CD",
        video: "owasp_top10",
        duration: "8 min",
        body:
          "Cada libreria externa que usas es codigo que no escribiste pero que corre con los mismos permisos que tu aplicacion. Mantener dependencias actualizadas, revisar alertas de vulnerabilidades conocidas y evitar paquetes sin mantenimiento reduce ese riesgo. El pipeline de CI/CD tambien necesita proteccion: los secretos usados para desplegar no deben quedar visibles en logs, y solo cambios revisados deberian poder llegar a produccion.",
        scenario:
          "Una alerta automatica reporta una vulnerabilidad conocida en una libreria que el proyecto usa desde hace mas de un ano sin actualizar.",
        actions: [
          "Revisa y atiende alertas de vulnerabilidades en dependencias con prioridad segun severidad.",
          "Evita agregar librerias sin mantenimiento activo o de origen desconocido.",
          "Protege los secretos del pipeline de CI/CD y evita que se impriman en logs."
        ],
        takeaways: [
          "Una dependencia vulnerable es una puerta trasera involuntaria a tu aplicacion.",
          "Actualizar librerias es mantenimiento de seguridad, no solo de funcionalidad.",
          "El pipeline que despliega tu aplicacion tambien es parte de la superficie de ataque."
        ]
      }
    ],
    quiz: [
      {
        text: "Para que sirve el OWASP Top 10?",
        options: ["Prioriza los riesgos mas comunes en aplicaciones web", "Reemplaza cualquier revision de seguridad", "Aplica solo a bases de datos"],
        correct: 0
      },
      {
        text: "Cual es la mejor defensa contra inyeccion?",
        options: ["Consultas parametrizadas y validacion de entradas", "Confiar en la validacion del lado del cliente", "Aumentar el tamano del campo de texto"],
        correct: 0
      },
      {
        text: "Que hacer si una credencial se expone en un repositorio?",
        options: ["Rotarla de inmediato", "Borrar el commit y no decir nada", "Esperar a ver si alguien la usa"],
        correct: 0
      },
      {
        text: "Que debe pasar antes de fusionar cambios a la rama principal?",
        options: ["Una revision obligatoria de codigo", "Nada, cualquiera puede fusionar directo", "Solo una prueba manual rapida"],
        correct: 0
      },
      {
        text: "Donde debe validarse el permiso sobre un dato sensible?",
        options: ["En el servidor, en cada solicitud", "Solo ocultando el boton en la interfaz", "Solo al iniciar sesion"],
        correct: 0
      },
      {
        text: "Que riesgo tiene una dependencia sin actualizar?",
        options: ["Puede tener vulnerabilidades conocidas explotables", "Ninguno si el proyecto funciona bien", "Solo afecta el tiempo de compilacion"],
        correct: 0
      }
    ]
  }
};
