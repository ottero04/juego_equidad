// Este archivo contiene todos los datos del juego: escenarios, situaciones y decisiones
const scenarios = [
  {
    id: "escuela",
    name: "Escuela",
    description: "Un entorno educativo donde se forman los valores y relaciones sociales desde temprana edad.",
    situations: [
      {
        description:
          "En tu clase hay un estudiante nuevo que viene de otro país y habla con acento. Algunos compañeros se burlan de él durante el recreo.",
        decisions: [
          {
            text: "Intervenir directamente, defender al estudiante y explicar a tus compañeros por qué su comportamiento es inapropiado.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu intervención directa no solo protege al estudiante de la discriminación inmediata, sino que también establece un precedente de respeto en el grupo. Al explicar por qué las burlas son inapropiadas, contribuyes a crear conciencia sobre la diversidad cultural y el respeto mutuo.",
          },
          {
            text: "Acercarte al estudiante nuevo después y ofrecerle tu amistad, sin confrontar directamente a quienes se burlaban.",
            equityImpact: 5,
            reputationImpact: 10,
            explanation:
              "Tu apoyo ayuda al estudiante a sentirse menos aislado y le brinda un aliado en un entorno desconocido. Sin embargo, al no confrontar el comportamiento negativo, las burlas podrían continuar, manteniendo un ambiente hostil para él y otros estudiantes diversos en el futuro.",
          },
          {
            text: "No intervenir para evitar problemas, pensando que no es tu responsabilidad.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu silencio se convierte en complicidad. El estudiante nuevo se siente aislado y sin apoyo, reforzando la idea de que ser diferente es motivo de exclusión. Este tipo de inacción permite que los comportamientos discriminatorios se normalicen en el entorno escolar.",
          },
        ],
      },
      {
        description:
          "La escuela está organizando un evento deportivo, pero notas que una compañera con discapacidad motriz no ha sido considerada para participar en ninguna actividad.",
        decisions: [
          {
            text: "Hablar con los profesores para sugerir actividades inclusivas donde todos puedan participar según sus capacidades.",
            equityImpact: 15,
            reputationImpact: 10,
            explanation:
              "Tu iniciativa promueve un cambio estructural en cómo se organizan los eventos escolares. Al sugerir actividades inclusivas, no solo beneficias a tu compañera actual, sino que estableces un precedente para futuros eventos, creando un entorno más equitativo para todos los estudiantes con diferentes capacidades.",
          },
          {
            text: "Invitar personalmente a la compañera a unirse a tu equipo, adaptando las reglas para que pueda participar.",
            equityImpact: 10,
            reputationImpact: 5,
            explanation:
              "Tu acción directa permite que tu compañera participe y se sienta incluida en esta ocasión específica. Sin embargo, al no abordar el problema a nivel institucional, la exclusión podría repetirse en futuros eventos si tú no estás presente para intervenir.",
          },
          {
            text: "Pensar que es mejor así para no exponer a la compañera a una situación incómoda o difícil.",
            equityImpact: -10,
            reputationImpact: -10,
            explanation:
              "Aunque crees proteger a tu compañera, en realidad estás reforzando su exclusión. Esta decisión perpetúa la idea errónea de que las personas con discapacidad no pueden o no deben participar en actividades regulares, negándole la oportunidad de integrarse y disfrutar como los demás.",
          },
        ],
      },
      {
        description:
          "Durante un trabajo en grupo, un compañero de origen indígena propone una idea brillante, pero el resto del grupo la ignora. Minutos después, otro estudiante propone la misma idea y todos la aplauden.",
        decisions: [
          {
            text: "Señalar inmediatamente que la idea original vino del compañero indígena y que merece el reconocimiento.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu intervención corrige una injusticia en tiempo real y visibiliza un patrón discriminatorio que muchas veces pasa desapercibido. Al reconocer públicamente la autoría de la idea, no solo defiendes a tu compañero, sino que también educas al grupo sobre la importancia de escuchar y valorar todas las voces por igual.",
          },
          {
            text: "Hablar en privado con el compañero indígena para expresarle que notaste lo sucedido y que valoras sus aportes.",
            equityImpact: 5,
            reputationImpact: 10,
            explanation:
              "Tu apoyo privado brinda consuelo a tu compañero y le muestra que no está solo, lo cual es valioso. Sin embargo, al no corregir la situación públicamente, se pierde la oportunidad de educar al grupo y se permite que continúe el patrón de invisibilización de sus contribuciones.",
          },
          {
            text: "No decir nada, pensando que quizás no entendiste bien la situación o que no es tan importante.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu silencio normaliza la discriminación sutil. Tu compañero experimenta no solo la frustración de ver su idea apropiada por otro, sino también la sensación de que nadie nota o le importa esta injusticia, reforzando sentimientos de exclusión y desvalorización de sus aportes.",
          },
        ],
      },
    ],
  },
  {
    id: "trabajo",
    name: "Entorno Laboral",
    description:
      "Una oficina donde las dinámicas de poder y las relaciones profesionales ponen a prueba tus valores éticos.",
    situations: [
      {
        description:
          "Eres parte del comité que debe decidir a quién promover a un puesto de gerencia. Hay dos candidatos: un hombre con menos experiencia pero muy carismático, y una mujer más calificada pero menos extrovertida.",
        decisions: [
          {
            text: "Defender objetivamente las calificaciones de la candidata mujer y argumentar que la experiencia debe pesar más que el carisma.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu defensa basada en criterios objetivos ayuda a contrarrestar sesgos inconscientes que a menudo perjudican a las mujeres en entornos laborales. Al priorizar la experiencia y calificaciones, contribuyes a crear un proceso de selección más justo que valora el mérito por encima de características subjetivas como el carisma.",
          },
          {
            text: "Proponer un proceso de evaluación más estructurado que minimice los sesgos subjetivos.",
            equityImpact: 10,
            reputationImpact: 10,
            explanation:
              "Tu propuesta aborda el problema de manera sistémica, lo que puede beneficiar no solo a esta candidata sino a futuros procesos de selección. Al implementar evaluaciones estructuradas, ayudas a reducir la influencia de sesgos inconscientes que suelen favorecer a ciertos perfiles sobre otros por razones no relacionadas con sus capacidades reales.",
          },
          {
            text: "Apoyar al candidato hombre porque crees que su carisma lo hace mejor para un puesto de liderazgo.",
            equityImpact: -15,
            reputationImpact: -5,
            explanation:
              "Tu decisión perpetúa estereotipos de género que asocian el liderazgo con características tradicionalmente masculinas como el carisma y la extroversión. La candidata mujer pierde una oportunidad merecida, reforzando el 'techo de cristal' que dificulta el avance profesional de las mujeres en posiciones de liderazgo.",
          },
        ],
      },
      {
        description:
          "Escuchas a un compañero hacer comentarios inapropiados sobre la orientación sexual de otro colega cuando éste no está presente.",
        decisions: [
          {
            text: "Confrontar a tu compañero en el momento, explicando por qué sus comentarios son ofensivos e inapropiados.",
            equityImpact: 15,
            reputationImpact: 0,
            explanation:
              "Tu intervención inmediata envía un mensaje claro de que los comentarios discriminatorios no son aceptables en el entorno laboral. Aunque pueda generar tensión momentánea, contribuyes a crear un ambiente de trabajo más seguro y respetuoso para todos, especialmente para personas LGBTQ+ que a menudo enfrentan microagresiones similares.",
          },
          {
            text: "Cambiar de tema sutilmente y luego hablar en privado con tu compañero sobre el respeto en el lugar de trabajo.",
            equityImpact: 5,
            reputationImpact: 5,
            explanation:
              "Tu enfoque evita la confrontación pública pero aún aborda el problema. La conversación privada puede ser efectiva para educar a tu compañero sin avergonzarlo, aunque el impacto inmediato es menor y otros presentes podrían interpretar tu cambio de tema como una aceptación tácita de los comentarios.",
          },
          {
            text: "No decir nada para evitar conflictos, pensando que no es tu problema.",
            equityImpact: -10,
            reputationImpact: -10,
            explanation:
              "Tu silencio permite que continúe la discriminación. El colega ausente seguirá siendo objeto de comentarios despectivos, y el ambiente laboral se vuelve hostil para personas LGBTQ+. Al no intervenir, te conviertes en cómplice pasivo de la creación de un entorno de trabajo tóxico e irrespetuoso.",
          },
        ],
      },
      {
        description:
          "En una reunión importante, notas que las ideas de tus compañeras mujeres son constantemente interrumpidas o ignoradas, mientras que las de los hombres reciben atención inmediata.",
        decisions: [
          {
            text: "Intervenir diciendo: 'Creo que [nombre de la compañera] estaba haciendo un punto importante que no terminamos de escuchar' y cederle la palabra.",
            equityImpact: 15,
            reputationImpact: 10,
            explanation:
              "Tu intervención directa interrumpe el patrón de silenciamiento y visibiliza un problema común que enfrentan las mujeres en entornos profesionales. Al redirigir la atención hacia tu compañera, no solo le das la oportunidad de ser escuchada en ese momento, sino que también modelas un comportamiento más inclusivo para todos los presentes.",
          },
          {
            text: "Hablar con el líder de la reunión después para señalar el patrón que observaste y sugerir técnicas más inclusivas.",
            equityImpact: 10,
            reputationImpact: 5,
            explanation:
              "Tu enfoque busca un cambio estructural en cómo se conducen las reuniones. Aunque no corrige la situación inmediata, puede tener un impacto positivo a largo plazo si el líder implementa prácticas más equitativas. Sin embargo, tus compañeras siguen experimentando la frustración de no ser escuchadas en esa reunión específica.",
          },
          {
            text: "No decir nada, pensando que cada quien debe aprender a hacerse escuchar por sus propios medios.",
            equityImpact: -15,
            reputationImpact: -10,
            explanation:
              "Tu inacción perpetúa un ambiente laboral inequitativo. Las compañeras continúan enfrentando barreras sistemáticas para contribuir, lo que no solo afecta su desarrollo profesional y reconocimiento, sino que también priva al equipo de valiosas perspectivas e ideas que podrían enriquecer el proyecto o la discusión.",
          },
        ],
      },
    ],
  },
  {
    id: "transporte",
    name: "Transporte Público",
    description: "Un espacio compartido donde se manifiestan actitudes y comportamientos sociales cotidianos.",
    situations: [
      {
        description:
          "En un autobús lleno, ves a una mujer embarazada de pie mientras un joven ocupa un asiento preferencial mirando su teléfono.",
        decisions: [
          {
            text: "Acercarte al joven y pedirle amablemente que ceda su asiento a la mujer embarazada.",
            equityImpact: 10,
            reputationImpact: 5,
            explanation:
              "Tu intervención directa y respetuosa resuelve una situación de inequidad inmediata. La mujer embarazada obtiene el asiento que necesita, y el joven toma conciencia de la importancia de respetar los asientos preferenciales. Tu acción también modela un comportamiento cívico para otros pasajeros presentes.",
          },
          {
            text: "Ofrecer tu propio asiento a la mujer embarazada, aunque no estés en un asiento preferencial.",
            equityImpact: 5,
            reputationImpact: 10,
            explanation:
              "Tu gesto personal resuelve la necesidad inmediata de la mujer embarazada, mostrando empatía y consideración. Sin embargo, no aborda el problema de fondo: el mal uso de los asientos preferenciales. El joven continúa sin tomar conciencia de su responsabilidad en estos espacios compartidos.",
          },
          {
            text: "No hacer nada, pensando que seguramente alguien más intervendrá.",
            equityImpact: -5,
            reputationImpact: -5,
            explanation:
              "Tu inacción contribuye al fenómeno conocido como 'difusión de responsabilidad', donde todos esperan que alguien más actúe. La mujer embarazada sigue de pie, enfrentando incomodidad y potenciales riesgos para su salud, mientras el uso inadecuado de los asientos preferenciales se normaliza.",
          },
        ],
      },
      {
        description:
          "Observas que un grupo de pasajeros está haciendo comentarios despectivos sobre una persona de otra etnia que acaba de subir al transporte.",
        decisions: [
          {
            text: "Intervenir directamente, señalando que esos comentarios son racistas e inapropiados.",
            equityImpact: 15,
            reputationImpact: 0,
            explanation:
              "Tu intervención directa desafía el racismo en el momento que ocurre, enviando un mensaje claro de que tales comportamientos no son aceptables en espacios públicos. La persona afectada siente que no está sola frente a la discriminación, y los agresores reciben una retroalimentación inmediata sobre lo inapropiado de sus acciones.",
          },
          {
            text: "Acercarte a la persona afectada para mostrar apoyo y hacer que se sienta menos aislada.",
            equityImpact: 10,
            reputationImpact: 5,
            explanation:
              "Tu gesto de solidaridad proporciona apoyo emocional directo a la persona que sufre la discriminación, mitigando en parte el impacto negativo de la experiencia. Sin embargo, al no confrontar a los agresores, el comportamiento racista continúa sin ser cuestionado públicamente.",
          },
          {
            text: "Mantener la distancia para evitar problemas, pensando que la situación podría escalar.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu silencio por temor a las consecuencias permite que la discriminación continúe sin oposición. La persona afectada experimenta no solo los comentarios racistas directos, sino también la dolorosa realidad de que nadie a su alrededor está dispuesto a defenderla, intensificando su sensación de vulnerabilidad y aislamiento.",
          },
        ],
      },
      {
        description:
          "Una persona con discapacidad visual intenta subir al transporte con su perro guía, pero el conductor le dice que no se permiten animales.",
        decisions: [
          {
            text: "Explicar respetuosamente al conductor que los perros guía están legalmente autorizados a acompañar a personas con discapacidad visual en el transporte público.",
            equityImpact: 15,
            reputationImpact: 10,
            explanation:
              "Tu intervención informada defiende los derechos legales de la persona con discapacidad visual y educa al conductor sobre las excepciones importantes a las reglas generales. Esta acción no solo resuelve la situación inmediata, sino que también puede prevenir incidentes similares en el futuro con este conductor.",
          },
          {
            text: "Sugerir a la persona con discapacidad que muestre alguna identificación o documentación de su perro guía.",
            equityImpact: 0,
            reputationImpact: 0,
            explanation:
              "Tu sugerencia, aunque bien intencionada, pone la carga de la justificación en la persona con discapacidad, quien legalmente no está obligada a llevar documentación especial para su perro guía. Esta situación añade una barrera adicional y potencialmente humillante para alguien que ya enfrenta desafíos diarios para su movilidad.",
          },
          {
            text: "No intervenir, pensando que no es tu lugar meterte en la aplicación de las reglas del transporte.",
            equityImpact: -15,
            reputationImpact: -10,
            explanation:
              "Tu inacción permite la discriminación contra una persona con discapacidad y la violación de sus derechos legales. La persona podría verse obligada a esperar otro transporte o buscar alternativas menos convenientes, enfrentando una barrera injusta para su movilidad e independencia.",
          },
        ],
      },
    ],
  },
  {
    id: "redSocial",
    name: "Red Social",
    description: "Un espacio virtual donde las interacciones pueden tener un impacto real en la vida de las personas.",
    situations: [
      {
        description:
          "Eres moderador de un grupo en redes sociales y notas una publicación que contiene desinformación sobre un grupo minoritario.",
        decisions: [
          {
            text: "Eliminar la publicación, explicar las razones y compartir información verificada sobre el tema.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu acción decisiva evita la propagación de desinformación dañina y proporciona contexto educativo para todos los miembros del grupo. Al compartir información verificada, no solo eliminas el contenido problemático sino que también contribuyes a una comprensión más precisa y respetuosa sobre el grupo minoritario en cuestión.",
          },
          {
            text: "Mantener la publicación pero añadir una nota aclarando que contiene información incorrecta.",
            equityImpact: 5,
            reputationImpact: 0,
            explanation:
              "Tu enfoque intenta equilibrar la libertad de expresión con la responsabilidad de la precisión. Sin embargo, la desinformación sigue visible y puede seguir influyendo en las percepciones, incluso con tu nota aclaratoria. Algunos miembros del grupo minoritario podrían sentirse desprotegidos al ver que contenido dañino sobre ellos permanece publicado.",
          },
          {
            text: "No intervenir, argumentando que todos tienen derecho a expresar sus opiniones.",
            equityImpact: -15,
            reputationImpact: -10,
            explanation:
              "Tu inacción permite la difusión de información falsa que daña la imagen y perpetúa prejuicios contra un grupo ya vulnerable. Confundir desinformación con opinión legitima narrativas potencialmente peligrosas y crea un ambiente hostil para los miembros de ese grupo minoritario en tu comunidad virtual.",
          },
        ],
      },
      {
        description:
          "Un amigo comparte en su perfil un meme que se burla de personas con discapacidad. Varios de tus contactos lo han compartido riéndose.",
        decisions: [
          {
            text: "Comentar públicamente explicando por qué el contenido es ofensivo y pedir que lo eliminen.",
            equityImpact: 10,
            reputationImpact: -5,
            explanation:
              "Tu comentario público crea un momento educativo que puede generar conciencia entre múltiples personas. Al explicar por qué el humor a costa de personas con discapacidad es dañino, desafías normas sociales problemáticas y defiendes la dignidad de un grupo frecuentemente ridiculizado, aunque puedas enfrentar resistencia o críticas por 'arruinar la diversión'.",
          },
          {
            text: "Enviar un mensaje privado a tu amigo explicándole el impacto negativo de ese tipo de humor.",
            equityImpact: 5,
            reputationImpact: 5,
            explanation:
              "Tu enfoque privado puede ser efectivo para educar a tu amigo sin avergonzarlo públicamente, aumentando las probabilidades de que reciba tu mensaje con apertura. Sin embargo, los demás contactos que compartieron el meme continúan sin comprender por qué ese contenido es problemático.",
          },
          {
            text: "Ignorarlo, pensando que es solo un chiste y no vale la pena crear conflicto.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu silencio normaliza el humor discriminatorio. Las personas con discapacidad que ven este contenido experimentan no solo la ofensa del meme original, sino también el dolor de ver cuántas personas, incluidas aquellas que podrían ser sus aliadas, consideran que burlarse de sus condiciones es aceptable y divertido.",
          },
        ],
      },
      {
        description:
          "Descubres un grupo privado donde se comparten fotos de mujeres de tu comunidad sin su consentimiento, con comentarios sexualizados.",
        decisions: [
          {
            text: "Reportar el grupo a la plataforma, documentar la evidencia y alertar a las mujeres afectadas si las conoces.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu acción decisiva aborda el problema desde múltiples ángulos: busca eliminar el contenido dañino, crea un registro de la violación, y empodera a las afectadas con información. Esta respuesta integral reconoce la gravedad de la violación de privacidad y el acoso sexual, tratándolo como un problema serio que requiere intervención inmediata.",
          },
          {
            text: "Abandonar silenciosamente el grupo y bloquearlo para no ver ese contenido.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu salida silenciosa te protege de ver contenido perturbador, pero deja a las mujeres afectadas sin defensa. El grupo continúa operando, más fotos pueden ser compartidas, y las víctimas permanecen sin conocimiento de que sus imágenes están siendo utilizadas de manera inapropiada, perpetuando un ciclo de violación de privacidad y objetificación.",
          },
          {
            text: "Confrontar a los administradores del grupo exigiendo que eliminen el contenido inapropiado.",
            equityImpact: 5,
            reputationImpact: 0,
            explanation:
              "Tu confrontación directa muestra oposición al comportamiento inapropiado, pero puede ser insuficiente frente a la magnitud del problema. Los administradores podrían ignorarte, expulsarte del grupo, o incluso si eliminan algunas fotos, el grupo probablemente continuará con sus prácticas dañinas sin consecuencias reales.",
          },
        ],
      },
    ],
  },
  {
    id: "emergencias",
    name: "Sala de Emergencias",
    description: "Un entorno médico donde las decisiones rápidas pueden verse influenciadas por sesgos inconscientes.",
    situations: [
      {
        description:
          "Eres médico de guardia y llegan simultáneamente dos pacientes con síntomas similares que requieren atención urgente: un ejecutivo bien vestido y una persona sin hogar.",
        decisions: [
          {
            text: "Evaluar objetivamente la gravedad médica de ambos casos sin considerar su apariencia o estatus social.",
            equityImpact: 15,
            reputationImpact: 10,
            explanation:
              "Tu enfoque basado exclusivamente en criterios médicos garantiza que ambos pacientes reciban la atención que necesitan según su condición, no según quiénes son. Esta decisión refleja el principio fundamental de la ética médica de tratar a todos los pacientes con igual consideración y respeto, independientemente de su situación socioeconómica.",
          },
          {
            text: "Atender primero al ejecutivo pensando que probablemente tenga seguro médico y sea más fácil de tratar.",
            equityImpact: -15,
            reputationImpact: -10,
            explanation:
              "Tu decisión basada en prejuicios socioeconómicos podría tener consecuencias graves para la persona sin hogar, cuya condición podría deteriorarse mientras espera. Esta discriminación en la atención médica perpetúa desigualdades en salud que ya afectan desproporcionadamente a las poblaciones vulnerables.",
          },
          {
            text: "Atender primero a la persona sin hogar asumiendo que tiene menos acceso regular a atención médica.",
            equityImpact: 5,
            reputationImpact: 0,
            explanation:
              "Aunque tu intención es compensar desigualdades sistémicas en el acceso a la salud, basar decisiones médicas urgentes en suposiciones sobre el acceso previo a atención médica en lugar de la gravedad actual podría poner en riesgo al otro paciente. La equidad en emergencias debe basarse primero en la necesidad médica inmediata.",
          },
        ],
      },
      {
        description:
          "Un paciente de edad avanzada llega a emergencias con su cuidador, pero el personal médico se dirige exclusivamente al cuidador ignorando al paciente.",
        decisions: [
          {
            text: "Intervenir y recordar al personal que deben dirigirse directamente al paciente y respetar su autonomía.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu intervención defiende la dignidad y autonomía del paciente mayor, recordando al equipo médico que la edad no disminuye el derecho a ser tratado con respeto y a participar en las decisiones sobre su propia salud. Esta acción no solo beneficia al paciente actual sino que también puede influir positivamente en cómo el personal trata a futuros pacientes mayores.",
          },
          {
            text: "Hablar tú mismo directamente con el paciente, dando ejemplo al resto del personal.",
            equityImpact: 10,
            reputationImpact: 10,
            explanation:
              "Tu modelado de comportamiento respetuoso proporciona un ejemplo práctico de cómo debe ser la interacción apropiada. El paciente mayor experimenta al menos una interacción digna, aunque el problema sistémico persiste si el resto del personal no cambia su enfoque.",
          },
          {
            text: "No intervenir, pensando que es más eficiente hablar con el cuidador.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu inacción refuerza el edadismo en la atención médica. El paciente mayor se siente invisible e infantilizado, lo que puede afectar negativamente su bienestar emocional, su confianza en el sistema de salud, y potencialmente incluso la calidad de la atención que recibe al no ser consultado directamente sobre sus síntomas y experiencias.",
          },
        ],
      },
      {
        description:
          "Una mujer de origen inmigrante con dominio limitado del idioma local llega con dolor intenso, pero el personal parece frustrado por la barrera del idioma y está demorando su atención.",
        decisions: [
          {
            text: "Buscar activamente un intérprete o utilizar una aplicación de traducción para facilitar la comunicación con la paciente.",
            equityImpact: 15,
            reputationImpact: 10,
            explanation:
              "Tu iniciativa para superar la barrera lingüística garantiza que la paciente pueda comunicar sus síntomas y recibir atención adecuada. Esta acción reconoce que el acceso equitativo a la atención médica incluye la comunicación efectiva, y que la responsabilidad de facilitar esta comunicación recae en el sistema de salud, no en la paciente.",
          },
          {
            text: "Sugerir que la paciente regrese cuando venga acompañada de alguien que pueda traducir.",
            equityImpact: -15,
            reputationImpact: -15,
            explanation:
              "Tu sugerencia niega atención médica urgente a alguien que está sufriendo dolor intenso, poniendo en riesgo su salud. Esta decisión discrimina directamente a la paciente por su origen y capacidad lingüística, violando principios básicos de ética médica y potencialmente agravando su condición médica.",
          },
          {
            text: "Atenderla con gestos y lenguaje simplificado, asumiendo que entenderá lo suficiente para un tratamiento básico.",
            equityImpact: 0,
            reputationImpact: 0,
            explanation:
              "Tu intento de comunicación, aunque mejor que ignorarla, es insuficiente para una atención médica adecuada. La paciente puede no entender completamente su diagnóstico, tratamiento o instrucciones de seguimiento, lo que puede llevar a complicaciones médicas. La atención médica efectiva requiere comunicación clara y comprensible.",
          },
        ],
      },
    ],
  },
  {
    id: "familia",
    name: "Entorno Familiar",
    description:
      "El núcleo social primario donde se forman valores y se establecen dinámicas que influyen en nuestra visión del mundo.",
    situations: [
      {
        description:
          "Durante una reunión familiar, un pariente mayor hace comentarios despectivos sobre las personas LGBTQ+ sin saber que tu primo adolescente, que está presente, está cuestionando su identidad sexual.",
        decisions: [
          {
            text: "Intervenir respetuosamente, expresando que esos comentarios pueden ser hirientes y que es importante respetar la diversidad de identidades.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu intervención crea un espacio más seguro para tu primo y envía un mensaje claro de que los comentarios discriminatorios no son aceptables, incluso de personas mayores o respetadas. Esta acción puede ser especialmente significativa para tu primo, que ve que tiene aliados en la familia durante su proceso de autodescubrimiento.",
          },
          {
            text: "Cambiar de tema para evitar tensión y luego hablar en privado con tu primo para ofrecerle apoyo.",
            equityImpact: 5,
            reputationImpact: 10,
            explanation:
              "Tu apoyo privado es valioso para tu primo, pero al no confrontar los comentarios discriminatorios, estos quedan sin cuestionar en el espacio familiar. El mensaje implícito es que tales opiniones son aceptables en público mientras se ofrezca consuelo en privado, lo que puede reforzar la idea de que ciertas identidades deben mantenerse ocultas.",
          },
          {
            text: "No decir nada para respetar la autoridad del pariente mayor y evitar conflictos en la reunión familiar.",
            equityImpact: -15,
            reputationImpact: -10,
            explanation:
              "Tu silencio valida implícitamente los comentarios discriminatorios y deja a tu primo sin apoyo en un momento vulnerable. Esta inacción por 'respeto' a la jerarquía familiar perpetúa ciclos intergeneracionales de prejuicio y puede causar daño psicológico significativo a tu primo, que recibe el mensaje de que su identidad no merece defensa ni siquiera de sus seres queridos.",
          },
        ],
      },
      {
        description:
          "Notas que en tu hogar las tareas domésticas están distribuidas de manera desigual según el género, con las mujeres asumiendo la mayor parte del trabajo no remunerado.",
        decisions: [
          {
            text: "Proponer una redistribución equitativa de las tareas basada en disponibilidad y capacidades, no en género.",
            equityImpact: 15,
            reputationImpact: 10,
            explanation:
              "Tu propuesta desafía directamente los roles de género tradicionales y busca crear un sistema más justo que valore el tiempo y esfuerzo de todos los miembros de la familia por igual. Este cambio estructural puede tener un impacto positivo duradero en las dinámicas familiares y en cómo los más jóvenes entienden la igualdad de género.",
          },
          {
            text: "Asumir personalmente más tareas para aliviar la carga, sin cuestionar abiertamente el sistema establecido.",
            equityImpact: 5,
            reputationImpact: 15,
            explanation:
              "Tu acción individual alivia parte de la inequidad inmediata, pero no aborda el problema sistémico ni desafía las expectativas basadas en género. Aunque tu esfuerzo personal es valioso, sin una conversación abierta sobre la distribución desigual, los patrones subyacentes permanecen intactos y pueden perpetuarse en el futuro.",
          },
          {
            text: "Aceptar la distribución tradicional, pensando que cada familia tiene derecho a organizarse según sus propias costumbres.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu aceptación pasiva perpetúa la desigualdad de género en el ámbito doméstico. Las mujeres de la familia continúan asumiendo una carga desproporcionada de trabajo no reconocido ni remunerado, lo que puede afectar sus oportunidades profesionales, tiempo personal y bienestar general, mientras normaliza estos desequilibrios para las generaciones más jóvenes.",
          },
        ],
      },
      {
        description:
          "Tu hermano menor está siendo presionado por tus padres para seguir una carrera 'respetable' (medicina, derecho) cuando él ha expresado su pasión por las artes.",
        decisions: [
          {
            text: "Hablar con tus padres sobre la importancia de apoyar las pasiones e intereses auténticos de tu hermano para su felicidad y éxito.",
            equityImpact: 15,
            reputationImpact: 5,
            explanation:
              "Tu defensa reconoce el derecho de tu hermano a la autodeterminación y desafía expectativas familiares restrictivas. Al abogar por el respeto a sus intereses genuinos, contribuyes a crear un entorno familiar que valora la diversidad de talentos y caminos, no solo los tradicionalmente prestigiosos o lucrativos.",
          },
          {
            text: "Sugerir a tu hermano que estudie una carrera 'práctica' pero que mantenga el arte como pasatiempo.",
            equityImpact: 0,
            reputationImpact: 5,
            explanation:
              "Tu consejo busca un compromiso, pero implícitamente refuerza la jerarquía que valora ciertas profesiones sobre otras. Tu hermano recibe el mensaje de que su pasión artística es secundaria y no merece ser tomada en serio como opción profesional, lo que puede llevarlo a seguir un camino que no le brinda satisfacción personal.",
          },
          {
            text: "Apoyar la posición de tus padres, explicando a tu hermano que las preocupaciones económicas son realistas y debe ser práctico.",
            equityImpact: -10,
            reputationImpact: -5,
            explanation:
              "Tu postura refuerza presiones sociales que devalúan las artes y limitan la libertad individual. Tu hermano se siente incomprendido y sin apoyo en su entorno familiar, lo que puede llevarlo a reprimir sus verdaderos intereses y talentos, afectando negativamente su bienestar emocional y realización personal a largo plazo.",
          },
        ],
      },
    ],
  },
];