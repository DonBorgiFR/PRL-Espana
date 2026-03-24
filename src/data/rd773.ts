import type { Ley } from './types';

// ============================================================
// RD 773/1997 — Disposiciones mínimas de seguridad y salud
// relativas a la utilización por los trabajadores de
// Equipos de Protección Individual (EPI)
// ============================================================

export const rd773: Ley = {
  id: 'rd773',
  codigo: 'RD 773/1997',
  titulo: 'Disposiciones Mínimas de Seguridad y Salud para la Utilización de Equipos de Protección Individual',
  subtitulo: 'RD 773/1997 — EPI: selección, uso obligatorio, categorías, mantenimiento y obligaciones de empresa y trabajador',
  fecha: '30 de mayo de 1997',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735',
  color: '#ec4899',
  icono: '🦺',
  capitulos: [
    {
      id: 'rd773-cap1',
      numero: 'I',
      titulo: 'Disposiciones Generales — EPI y su Posición en la Jerarquía Preventiva',
      articulos: [
        {
          id: 'rd773-art1',
          numero: '1',
          titulo: 'Objeto y ámbito — Definición de EPI',
          texto: 'El presente Real Decreto establece las disposiciones mínimas de seguridad y de salud para la elección, uso y mantenimiento de los equipos de protección individual (EPI). A efectos del presente Real Decreto se entenderá por equipo de protección individual cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud en el trabajo, así como cualquier complemento o accesorio destinado a tal fin. No tendrán consideración de EPI: la ropa de trabajo ordinaria, el material de primeros auxilios, los equipos de los servicios de socorro y salvamento, los EPI de los militares/policía/orden público. El uso de EPI es siempre la última medida de la jerarquía de controles del art. 15 LPRL, tras el intento de eliminación, sustitución y protección colectiva.',
          badge: 'ambos',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735#a1',
          tags: ['EPI', 'equipo de protección individual', 'definición', 'jerarquía preventiva', 'protección colectiva', 'ámbito de aplicación'],
        },
      ],
    },
    {
      id: 'rd773-cap2',
      numero: 'II',
      titulo: 'Obligaciones del Empresario — Selección, Entrega y Formación',
      articulos: [
        {
          id: 'rd773-art3',
          numero: '3',
          titulo: 'Obligaciones generales del empresario',
          texto: 'El empresario está obligado a determinar los puestos de trabajo en que deba recurrirse a la protección individual y precisar, para cada uno de estos puestos, el riesgo o riesgos frente a los que debe ofrecerse protección, las partes del cuerpo a proteger y el tipo de equipo o equipos de protección individual que deberán utilizarse. El empresario deberá proporcionar gratuitamente a los trabajadores los EPI adecuados y velar por el uso efectivo de los mismos. En ningún caso puede repercutirse el coste de los EPI a los trabajadores (art. 14.5 LPRL). El empresario garantizará que los EPI se utilicen cuando sea necesario, y no solo cuando el trabajador lo estime conveniente. Los EPI proporcionados deben mantener el marcado CE.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735#a3',
          tags: ['obligaciones empresario', 'EPI gratuito', 'marcado CE', 'evaluación EPI', 'puestos de trabajo', 'uso efectivo'],
        },
        {
          id: 'rd773-art4',
          numero: '4',
          titulo: 'Condiciones de idoneidad del EPI — Selección correcta',
          texto: 'Para que un EPI sea adecuado al riesgo existente debe cumplir: 1) Responder a los riesgos existentes, sin suponer por sí mismo un riesgo mayor. 2) Corresponder a las condiciones existentes en el lugar de trabajo. 3) Tener en cuenta las condiciones anatómicas y fisiológicas y el estado de salud del trabajador. 4) Adecuarse al portador, tras los ajustes necesarios. El marcado CE del EPI debe corresponder a la categoría apropiada. Categoría I (riesgos mínimos, ej. guantes para fríos moderados). Categoría II (riesgos intermedios, ej. cascos, mascarillas FFP). Categoría III (riesgos mortales o irreversibles, ej. arneses anticaída, equipos SCBA, protecciones eléctricas AT): requieren organismo notificado y certificado de examen CE de tipo. La correcta selección debe documentarse y justificarse en la evaluación de riesgos.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735#a4',
          tags: ['selección EPI', 'categoría EPI', 'categoría I', 'categoría II', 'categoría III', 'marcado CE', 'organismo notificado', 'arnés', 'SCBA'],
        },
        {
          id: 'rd773-art5',
          numero: '5',
          titulo: 'Formación e información sobre el uso de EPI',
          texto: 'El empresario garantizará que los trabajadores reciban formación y que dispongan de información adecuada sobre: los riesgos contra los cuales el EPI les protege; las condiciones en que debe utilizarse, incluyendo las indicaciones del fabricante; el correcto almacenamiento, uso, limpieza, mantenimiento, reparación e indicaciones de reposición. La información deberá ser comprensible para los trabajadores. La formación práctica en el uso correcto del EPI debe realizarse antes de la primera utilización y cada vez que se incorpore un equipo nuevo. Especial atención a los EPI de Categoría III: ensayo del arnés, verificación de la máscara facial, etc.',
          badge: 'ambos',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735#a5',
          tags: ['formación EPI', 'información', 'almacenamiento', 'mantenimiento EPI', 'vida útil', 'reposición', 'categoría III'],
        },
      ],
    },
    {
      id: 'rd773-cap3',
      numero: 'III',
      titulo: 'Obligaciones de los Trabajadores y Mantenimiento de EPI',
      articulos: [
        {
          id: 'rd773-art6',
          numero: '6',
          titulo: 'Obligaciones de los trabajadores en materia de EPI',
          texto: 'Los trabajadores deberán utilizar y cuidar correctamente los EPI, colocarse y quitarse el EPI conforme a las instrucciones, así como informar de inmediato al empresario o a sus representantes de cualquier defecto, anomalía o daño apreciado en el EPI utilizado que, a su juicio, pueda entrañar una pérdida de su eficacia protectora. Está prohibido modificar el EPI o neutralizar su función protectora. El incumplimiento del uso obligatorio de EPI puede constituir infracción grave desde el punto de vista disciplinario y reducir las indemnizaciones en caso de accidente por imprudencia temeraria del trabajador (art. 29 LPRL). Un EPI dañado o expirado debe comunicarse al responsable para su sustitución inmediata.',
          badge: 'ambos',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735#a6',
          tags: ['obligaciones trabajador', 'uso correcto EPI', 'notificación defecto', 'sustitución', 'infracción', 'art. 29 LPRL'],
        },
        {
          id: 'rd773-art7',
          numero: '7',
          titulo: 'Mantenimiento, limpieza, desinfección y vida útil del EPI',
          texto: 'Los EPI deben mantenerse en buen estado de higiene y funcionamiento mediante revisiones periódicas. Antes de utilizarlos se comprobará la ausencia de defectos y el correcto funcionamiento (p. ej. sistema anticaída: comprobar costuras, hebillas, amortiguador; máscara: prueba de ajuste facial y estanqueidad). El EPI tiene fecha de caducidad o criterio de retirada basado en: fecha estampada por el fabricante (cinturones anticaída, filtros respiratorios), estado visual (cascos con golpe, guantes con corte, calzado con suela desgastada), o historial de uso (registrar el número de caídas detenidas por un arnés). El empresario deberá llevar un registro de entrega de EPI por trabajador, con indicación de la fecha, equipo entregado y firma de recepción. Este registro tiene valor probatorio ante la Inspección de Trabajo.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735#a7',
          tags: ['mantenimiento EPI', 'vida útil', 'caducidad EPI', 'registro de entrega', 'inspección de trabajo', 'revisión periódica', 'anticaída', 'filtro respiratorio'],
        },
      ],
    },
    {
      id: 'rd773-cap4',
      numero: 'IV — Anexos',
      titulo: 'Anexos — Lista indicativa de EPI por riesgo y actividad',
      articulos: [
        {
          id: 'rd773-anexo1',
          numero: 'Anexo I',
          titulo: 'Lista indicativa de actividades y sectores que requieren EPI',
          texto: 'El Anexo I del RD 773/1997 establece una lista orientativa de actividades y circunstancias que pueden requerir el uso de EPI por partes del cuerpo: CABEZA: trabajos con riesgo de caída de objetos → casco de seguridad. OJOS/CARA: trabajos con proyecciones, radiaciones, salpicaduras → gafas, pantallas faciales. VÍAS RESPIRATORIAS: trabajos con gases, vapores, polvo → mascarillas, equipos SCBA. OÍDOS: trabajos con ruido >80 dB(A) → tapones, orejeras. BRAZOS/MANOS: trabajos mecánicos, químicos, térmicos → guantes adecuados por categoría. PIES: riesgos de aplastamiento, punción, deslizamiento → calzado de seguridad (norma EN ISO 20345 S1-S3). PIEL: trabajos con agentes químicos → cremas barrera, ropa de protección química. CUERPO ENTERO: trabajos en altura; trabajos con sustancias peligrosas → arneses anticaída (cat. III), trajes de protección.',
          badge: 'ambos',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735',
          tags: ['lista EPI', 'casco', 'guantes', 'calzado de seguridad', 'arnés anticaída', 'mascarilla', 'orejeras', 'protección auditiva', 'protección química', 'S1 S2 S3'],
        },
        {
          id: 'rd773-anexo3',
          numero: 'Anexo III',
          titulo: 'Guía de selección de EPI — Coincidencia riesgo / protección',
          texto: 'El Anexo III define la correspondencia entre los riesgos identificados en la evaluación y el tipo de EPI a seleccionar. Principios clave de selección: 1. Identificar riesgos residuales tras aplicar medidas colectivas. 2. Determinar las partes del cuerpo expuestas. 3. Seleccionar el tipo de EPI que protege frente al riesgo específico con el nivel de protección adecuado. 4. Verificar compatibilidad entre EPI cuando se usen varios simultáneamente (ej. casco + orejeras + pantalla facial deben ser compatibles). 5. Verificar marcado CE y categoría. 6. Documentar la elección en la evaluación de riesgos. 7. Registrar la entrega con firma del trabajador. Con la Directiva UE 2016/425 y el Reglamento 2016/425, los EPI de Categoría III requieren revisión periódica del organismo notificado para la vigilancia de la producción.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735',
          tags: ['selección EPI', 'compatibilidad EPI', 'Directiva EPI', 'Reglamento 2016/425', 'riesgos residuales', 'protección colectiva', 'documentación EPI'],
        },
      ],
    },
  ],
};
