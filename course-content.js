window.DOGUI_COURSE_CONTENT = {
  "basic-course": {
    overview:
      "Curso base para todo el personal. Ensena habitos de seguridad que reducen phishing, fraude, robo de cuentas, fuga de informacion y errores comunes en el trabajo diario.",
    lessons: [
      {
        title: "Que es la ciberseguridad",
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
  }
};
