import type { Ley } from './types';

// ============================================================
// RD 1215/1997 — Disposiciones mínimas de seguridad
// y salud para la utilización de los equipos de trabajo
// ============================================================

export const rd1215: Ley = {
  id: 'rd1215',
  codigo: 'RD 1215/1997',
  titulo: 'Disposiciones Mínimas de Seguridad y Salud para la Utilización de los Equipos de Trabajo',
  subtitulo: 'RD 1215/1997 — Requisitos de seguridad en máquinas, herramientas y equipos: formación, mantenimiento, resguardos y marcado CE',
  fecha: '18 de julio de 1997',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501',
  color: '#a855f7',
  icono: '🔧',
  capitulos: [
    {
      id: 'rd1215-cap1',
      numero: 'I',
      titulo: 'Disposiciones Generales y Ámbito de Aplicación',
      articulos: [
        {
          id: 'rd1215-art1',
          numero: '1',
          titulo: 'Objeto y definiciones — Equipo de trabajo y uso previsto',
          texto: 'A efectos del presente Real Decreto, se entenderá por: Equipo de trabajo: cualquier máquina, aparato, instrumento o instalación utilizado en el trabajo. Uso previsto: el uso de un equipo de trabajo de acuerdo con la información facilitada por el fabricante y en las condiciones normales previsibles de utilización. Zona peligrosa: cualquier zona situada en el interior o alrededor del equipo en la que la presencia de un trabajador suponga un riesgo para su seguridad o su salud. Trabajador expuesto: todo trabajador que se encuentre total o parcialmente en una zona peligrosa. Operador: el trabajador encargado de la utilización de un equipo de trabajo. El Real Decreto se aplica a todos los equipos de trabajo utilizados en el trabajo, con independencia de la fecha de su comercialización.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501#a1',
          tags: ['equipo de trabajo', 'máquina', 'definiciones', 'zona peligrosa', 'operador', 'uso previsto', 'marcado CE'],
        },
        {
          id: 'rd1215-art3',
          numero: '3',
          titulo: 'Comprobación de los equipos de trabajo',
          texto: 'El empresario adoptará las medidas necesarias para que los equipos de trabajo que se pongan a disposición de los trabajadores sean adecuados al trabajo que deba realizarse y estén convenientemente adaptados para ello. Cuando la utilización de un equipo de trabajo pueda presentar un riesgo específico para la seguridad o la salud de los trabajadores, el empresario tomará las medidas necesarias para que la utilización de dicho equipo quede reservada a los encargados de dicha utilización. Los trabajos de reparación, transformación, mantenimiento o conservación serán realizados por los trabajadores específicamente capacitados para ello. Los equipos de trabajo cuya seguridad dependa de sus condiciones de instalación se someterán a un examen inicial (tras la instalación y antes de la puesta en marcha por primera vez) y a un nuevo examen después de cada montaje en un lugar o emplazamiento diferente.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501#a3',
          tags: ['comprobación equipos', 'instalación', 'examen inicial', 'puesta en marcha', 'reparación', 'mantenimiento', 'capacitación'],
        },
      ],
    },
    {
      id: 'rd1215-cap2',
      numero: 'II',
      titulo: 'Obligaciones del Empresario — Formación, Información y Uso',
      articulos: [
        {
          id: 'rd1215-art4',
          numero: '4',
          titulo: 'Formación e información sobre equipos de trabajo',
          texto: 'El empresario adoptará las medidas necesarias para que los trabajadores encargados de la utilización de equipos de trabajo reciban una formación adecuada. La información y formación deberán incluir las condiciones de utilización de los equipos de trabajo, las situaciones anormales previsibles y la experiencia adquirida. Los trabajadores que utilicen equipos de trabajo deberán tener acceso a la información, preferiblemente escrita, sobre las condiciones de utilización. Esta información debe estar comprensible para los usuarios. Los manuales originales de instrucciones del fabricante están disponibles para consulta. Son especialmente relevantes los riesgos de atrapamiento por partes móviles, proyección de materiales, ruido, vibración y posturas forzadas.',
          badge: 'ambos',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501#a4',
          tags: ['formación equipos de trabajo', 'información', 'manual de instrucciones', 'atrapamiento', 'proyección', 'condiciones de uso'],
        },
        {
          id: 'rd1215-art5',
          numero: '5',
          titulo: 'Consulta y participación de los trabajadores',
          texto: 'En la adquisición y designación de los equipos de trabajo deberá consultarse a los representantes de los trabajadores. Los trabajadores podrán presentar propuestas de mejora de los resultados de la evaluación de los equipos y de las modificaciones a introducir en los puestos de trabajo. Antes de utilizar un equipo, los trabajadores con funciones de mantenimiento o inspección deberán recibir la formación e instrucciones específicas para cada equipo. Se registrarán los controles periódicos de equipos en el Libro de Registro de Equipos de Trabajo que el empresario deberá mantener.',
          badge: 'ambos',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501#a5',
          tags: ['consulta trabajadores', 'participación', 'representantes', 'libro de registro', 'controles periódicos'],
        },
      ],
    },
    {
      id: 'rd1215-cap3',
      numero: 'III',
      titulo: 'Requisitos Mínimos de Seguridad — Anexo I',
      articulos: [
        {
          id: 'rd1215-anexo1-a',
          numero: 'Anexo I.A',
          titulo: 'Órganos de accionamiento y parada de emergencia',
          texto: 'Los órganos de accionamiento de un equipo de trabajo que tengan incidencia en la seguridad deberán ser claramente visibles e identificables, en su caso mediante señalización adecuada. Los órganos de accionamiento deberán estar situados fuera de las zonas peligrosas. Su accionamiento no deberá acarrear riesgos adicionales. Los equipos de trabajo deberán estar provistos de un órgano de accionamiento que permita su parada total en condiciones de seguridad. La orden de parada del equipo tendrá prioridad sobre las órdenes de puesta en marcha. El equipo deberá estar provisto de un dispositivo de parada de emergencia cuando sea necesario para proteger a los trabajadores frente a riesgos de puesta en marcha no prevista. Los dispositivos de parada de emergencia (setas de emergencia) deberán ser claramente identificables, de color rojo sobre fondo amarillo, y de acción directa.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501',
          tags: ['órganos de accionamiento', 'parada de emergencia', 'seta de emergencia', 'puesta en marcha', 'parada total', 'dispositivos de seguridad'],
        },
        {
          id: 'rd1215-anexo1-b',
          numero: 'Anexo I.B',
          titulo: 'Resguardos y dispositivos de protección',
          texto: 'Los equipos de trabajo deberán estar equipados con resguardos y/o dispositivos de protección en todos los puntos peligrosos: partes en movimiento, zonas de transmisión, herramientas expuestas, etc. Los resguardos y los dispositivos de protección deben ser de construcción robusta y estar firmemente sujetos. No deberán ocasionar riesgos suplementarios. Su desmontaje para tareas de mantenimiento solo se realizará con el equipo parado y consignado. Los dispositivos de protección tipo resguardo interbloquado (retiran la alimentación al abrir el resguardo) son preferibles a los puramente fijos cuando el acceso frecuente es necesario. Está prohibida la anulación o puenteado de los dispositivos de seguridad.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501',
          tags: ['resguardos', 'dispositivos de protección', 'interbloqueo', 'partes en movimiento', 'anulación', 'consignación', 'seguridad máquinas'],
        },
        {
          id: 'rd1215-anexo1-c',
          numero: 'Anexo I.C',
          titulo: 'Trabajos de mantenimiento — Consignación y LOTO',
          texto: 'Los trabajos de mantenimiento, limpieza o ajuste de equipos de trabajo deben realizarse con el equipo parado. Cuando no sea posible, deberán tomarse medidas apropiadas para la protección de los trabajadores. Procedimiento de consignación (LOTO — Lock Out/Tag Out): 1. Notificar a los afectados del inicio de trabajos de mantenimiento. 2. Identificar todas las fuentes de energía (eléctrica, neumática, hidráulica, gravitatoria). 3. Aislar y desconectar todas las fuentes de energía. 4. Bloquear con candado personal los elementos de corte. 5. Purgar y liberar energías residuales (condensadores, acumuladores, muelles). 6. Verificar la ausencia de energía antes de comenzar. 7. Al finalizar: retirar bloqueos en orden inverso, notificar y rearmar. Cada trabajador que realiza el mantenimiento debe colocar su propio candado.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501',
          tags: ['mantenimiento', 'consignación', 'LOTO', 'lock out tag out', 'energías residuales', 'bloqueo', 'candado', 'energía cero'],
        },
        {
          id: 'rd1215-anexo2',
          numero: 'Anexo II',
          titulo: 'Equipos de trabajo móviles y para elevación de cargas',
          texto: 'Los equipos de trabajo móviles autopropulsados solo podrán ser conducidos por trabajadores que hayan recibido una formación específica. El empresario tomará medidas para evitar que los equipos estén presentes en zonas donde puedan estar trabajadores a pie. Si un equipo de trabajo debe circular por una zona de trabajo, se establecerán vías de circulación apropiadas y se señalizarán convenientemente. Para la elevación de cargas: los equipos están diseñados para la carga máxima indicada (no sobrecargar). La carga debe estar estabilizada antes de elevarse. Prohibido circular con cargas suspendidas sobre personas. Los ganchos deben disponer de seguro anti-apertura. Las eslingas y cadenas de elevación deben inspeccionarse antes de cada uso y retirarse si presentan deformaciones, cortes o desgaste.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-17501',
          tags: ['equipos móviles', 'elevación de cargas', 'carretilla elevadora', 'eslinga', 'gancho', 'carga máxima', 'cargas suspendidas', 'vías de circulación'],
        },
      ],
    },
  ],
};
