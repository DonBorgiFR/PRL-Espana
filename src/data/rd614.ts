import type { Ley } from './types';

// ============================================================
// RD 614/2001 — Disposiciones mínimas para la protección
// frente al riesgo eléctrico
// ============================================================

export const rd614: Ley = {
  id: 'rd614',
  codigo: 'RD 614/2001',
  titulo: 'Disposiciones Mínimas para la Protección de la Salud y Seguridad frente al Riesgo Eléctrico',
  subtitulo: 'RD 614/2001 — Protección frente a riesgo por contacto eléctrico, instalaciones y trabajos con electricidad',
  fecha: '8 de junio de 2001',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881',
  color: '#06b6d4',
  icono: '⚡',
  capitulos: [
    {
      id: 'rd614-cap1',
      numero: 'I',
      titulo: 'Disposiciones Generales',
      articulos: [
        {
          id: 'rd614-art1',
          numero: '1',
          titulo: 'Objeto y ámbito de aplicación',
          texto: 'El presente Real Decreto establece las disposiciones mínimas de seguridad para la protección de los trabajadores frente a los riesgos derivados de la presencia de energía eléctrica en los lugares de trabajo. Será de aplicación en todos los lugares de trabajo en los que existan instalaciones eléctricas o en los que se realicen trabajos que impliquen riesgo eléctrico. Se aplica con carácter supletorio respecto de otras normativas sectoriales que regulen riesgos eléctricos específicos.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a1',
          tags: ['riesgo eléctrico', 'ámbito de aplicación', 'instalaciones eléctricas', 'energía eléctrica'],
        },
        {
          id: 'rd614-art2',
          numero: '2',
          titulo: 'Definiciones — Conceptos clave de riesgo eléctrico',
          texto: 'A efectos de este Real Decreto se entenderá por: Riesgo eléctrico: riesgo originado por la energía eléctrica. Quedan incluidos los riesgos de choque eléctrico por contacto con elementos en tensión o con masas accidentalmente en tensión, quemaduras por choque eléctrico o por arco eléctrico, caídas o golpes como consecuencia de choque o arco eléctrico, incendios o explosiones originados por la electricidad. Zona de trabajo: espacio en el que se encuentran los trabajadores afectados por el riesgo eléctrico. Alta tensión (AT): tensión nominal superior a 1.000 V en corriente alterna o 1.500 V en corriente continua. Baja tensión (BT): tensión nominal igual o inferior a 1.000 V en corriente alterna o 1.500 V en corriente continua.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a2',
          tags: ['definiciones', 'choque eléctrico', 'contacto eléctrico', 'alta tensión', 'baja tensión', 'arco eléctrico'],
        },
        {
          id: 'rd614-art3',
          numero: '3',
          titulo: 'Obligaciones generales del empresario',
          texto: 'El empresario adoptará las medidas necesarias para que de la utilización, la manipulación y el mantenimiento de las instalaciones y equipos eléctricos no se deriven riesgos para la seguridad y salud de los trabajadores. Para ello, tendrá en cuenta los principios generales de prevención establecidos en la Ley 31/1995. Las medidas de seguridad deberán adecuarse a las características específicas de cada instalación y trabajo. Ningún trabajador realizará trabajos eléctricos sin haber recibido la formación e información adecuadas sobre los riesgos y medidas preventivas correspondientes. Sólo los trabajadores acreditados y autorizados podrán realizar trabajos en tensión.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a3',
          tags: ['obligaciones empresario', 'formación eléctrica', 'acreditación', 'trabajos en tensión', 'mantenimiento eléctrico'],
        },
      ],
    },
    {
      id: 'rd614-cap2',
      numero: 'II',
      titulo: 'Instalaciones Eléctricas — Protección y Mantenimiento',
      articulos: [
        {
          id: 'rd614-art4',
          numero: '4',
          titulo: 'Técnicas de protección en instalaciones eléctricas',
          texto: 'Las instalaciones eléctricas de los lugares de trabajo se diseñarán, realizarán, verificarán y mantendrán de conformidad con la normativa electrotécnica vigente (Reglamento Electrotécnico de Baja Tensión, REBT). Para proteger a los trabajadores frente a los contactos eléctricos directos se utilizarán técnicas de aislamiento de partes activas, interposición de obstáculos o barreras, colocación de partes activas fuera del alcance, instalación de dispositivos de corriente diferencial-residual (diferenciales). Para proteger frente a contactos indirectos: puesta a tierra, uso de equipos con doble aislamiento (clase II), transformadores de separación, e interruptores diferenciales de alta sensibilidad.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a4',
          tags: ['contacto eléctrico', 'contacto directo', 'contacto indirecto', 'puesta a tierra', 'diferencial', 'aislamiento', 'REBT'],
        },
        {
          id: 'rd614-art5',
          numero: '5',
          titulo: 'Instalaciones de alta tensión — Requisitos específicos',
          texto: 'Las instalaciones de alta tensión (AT, superior a 1.000 V en alterna) requieren medidas de protección reforzadas. Deberán disponer de enclavamientos que impidan el acceso a zonas de tensión sin haber procedido al seccionamiento, verificación de ausencia de tensión y puesta a tierra y en cortocircuito. El acceso a celdas de AT estará restringido exclusivamente a personal autorizado. La distancia mínima de seguridad en AT varía según el nivel de tensión y se establece en el Anexo I. Los trabajos en AT únicamente podrán realizarse mediante procedimientos de trabajo en tensión (PET) homologados o con la instalación desenergizada, seccionada y convenientemente consignada.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a5',
          tags: ['alta tensión', 'consignación', 'seccionamiento', 'puesta a tierra', 'PET', 'distancia de seguridad', 'enclavamiento'],
        },
      ],
    },
    {
      id: 'rd614-cap3',
      numero: 'III',
      titulo: 'Trabajos Eléctricos — Procedimientos y EPI',
      articulos: [
        {
          id: 'rd614-art6',
          numero: '6',
          titulo: 'Trabajos en tensión — Condiciones y requisitos',
          texto: 'Los trabajos en tensión sólo podrán realizarse cuando así lo requiera el proceso productivo y con las medidas de protección adecuadas. Se realizarán por trabajadores formados y acreditados específicamente para ello. Deberán utilizarse herramientas aislantes adecuadas, equipos de protección individual (EPI) eléctricos certificados y procedimientos de trabajo escritos. Los trabajos en tensión en alta tensión requieren autorización del propietario de la instalación y procedimientos específicos homologados. En baja tensión, los trabajos en tensión se realizarán con herramientas aislantes de categoría CAT IV y guantes aislantes probados a la tensión correspondiente.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a6',
          tags: ['trabajos en tensión', 'herramientas aislantes', 'EPI eléctrico', 'guantes aislantes', 'formación eléctrica', 'procedimiento PET'],
        },
        {
          id: 'rd614-art7',
          numero: '7',
          titulo: 'Trabajos sin tensión — Los 5 pasos de seguridad (Regla de Oro)',
          texto: 'Los trabajos sin tensión se realizarán después de haber tomado las medidas necesarias para asegurarse de que la instalación no puede ponerse en tensión accidentalmente. Para ello se seguirán las cinco fases de la Regla de Oro eléctrica: 1. Desconectar la instalación abriendo todos los elementos de corte necesarios. 2. Bloquear en posición de apertura los elementos de corte (consignación con candados). 3. Verificar la ausencia de tensión con equipo de medida adecuado. 4. Poner a tierra y en cortocircuito todas las partes que puedan quedar en tensión (incluidas las baterías de condensadores). 5. Señalizar y delimitar la zona de trabajo con señalización de seguridad. Solo tras completar todos los pasos puede iniciarse el trabajo.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a7',
          tags: ['trabajo sin tensión', 'regla de oro', 'consignación', 'bloqueo', 'verificación ausencia tensión', 'puesta a tierra en cortocircuito', '5 fases'],
        },
        {
          id: 'rd614-art8',
          numero: 'Anexo I',
          titulo: 'Distancias de seguridad y zonas de trabajo eléctrico',
          texto: 'El Anexo I del RD 614/2001 establece las distancias mínimas de seguridad a las partes en tensión, según el nivel de tensión: ZONA DE PELIGRO (D-P): en BT, D-P = 0,50 m; en AT, varía desde 0,70 m (1-13 kV) hasta 6,00 m (más de 400 kV). ZONA DE PROXIMIDAD (D-L): doble de la zona de peligro en AT. ZONA DE TRABAJOS EN TENSIÓN (D-V): específica para cada método de trabajo. Los trabajadores que deban trabajar próximos a instalaciones en tensión deben: conocer las distancias de seguridad, disponer de formación acreditada, utilizar los EPI adecuados al nivel de tensión y actuar siempre un mínimo de dos personas en AT.',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881',
          tags: ['distancias de seguridad', 'zona de peligro', 'zona de proximidad', 'kilovoltios', 'kV', 'baja tensión', 'alta tensión'],
        },
      ],
    },
  ],
};
