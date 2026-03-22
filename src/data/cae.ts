import type { Ley } from './types';

// ============================================================
// RD 171/2004 — Coordinación de Actividades Empresariales (CAE)
// ============================================================

export const cae: Ley = {
  id: 'cae',
  codigo: 'RD 171/2004',
  titulo: 'Coordinación de Actividades Empresariales',
  subtitulo: 'CAE — Obligaciones cuando concurren varias empresas en un mismo centro de trabajo',
  fecha: '30 de enero de 2004',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-2153',
  color: '#f59e0b',
  icono: '🤝',
  capitulos: [
    {
      id: 'cae-cap1',
      numero: 'I',
      titulo: 'Disposiciones Generales',
      articulos: [
        {
          id: 'cae-art1',
          numero: '1',
          titulo: 'Objeto',
          texto: 'El presente Real Decreto tiene por objeto el desarrollo del artículo 24 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales, en materia de coordinación de actividades empresariales.',
          badge: 'tecnico',
          tags: ['objeto', 'CAE', 'art. 24 LPRL'],
        },
        {
          id: 'cae-art2',
          numero: '2',
          titulo: 'Definiciones',
          texto: 'A los efectos del presente Real Decreto, se entenderá por:\na) "Centro de trabajo": cualquier área, edificada o no, en la que los trabajadores deban permanecer o a la que deban acceder por razón de su trabajo.\nb) "Empresario titular del centro de trabajo": la persona que tiene la capacidad de poner a disposición y gestionar el centro de trabajo.\nc) "Empresario principal": el empresario que contrata o subcontrata con otros la realización de obras o servicios correspondientes a la propia actividad de aquél y que se desarrollan en su propio centro de trabajo.',
          badge: 'tecnico',
          tags: ['definiciones', 'centro de trabajo', 'empresario titular', 'empresario principal'],
        },
        {
          id: 'cae-art3',
          numero: '3',
          titulo: 'Concurrencia de trabajadores de varias empresas en un mismo centro de trabajo',
          texto: 'Cuando en un mismo centro de trabajo desarrollen actividades trabajadores de dos o más empresas, éstas deberán cooperar en la aplicación de la normativa sobre prevención de riesgos laborales. El deber de cooperación será de aplicación a todas las empresas y trabajadores autónomos concurrentes en el centro de trabajo, existan o no relaciones jurídicas entre ellos.',
          badge: 'divulgativo',
          tags: ['concurrencia', 'cooperación', 'deber de cooperación'],
        },
      ],
    },
    {
      id: 'cae-cap2',
      numero: 'II',
      titulo: 'Obligaciones derivadas de la Concurrencia',
      articulos: [
        {
          id: 'cae-art4',
          numero: '4',
          titulo: 'Deber de cooperación',
          texto: 'Las empresas concurrentes en el centro de trabajo deberán informarse recíprocamente sobre los riesgos específicos de las actividades que desarrollen en el centro de trabajo que puedan afectar a los trabajadores de las otras empresas concurrentes en el centro, en particular sobre aquellos que puedan verse agravados o modificados por circunstancias derivadas de la concurrencia de actividades.',
          badge: 'tecnico',
          tags: ['información recíproca', 'riesgos específicos', 'cooperación'],
        },
        {
          id: 'cae-art5',
          numero: '5',
          titulo: 'Deber de información',
          texto: 'Antes del inicio de las actividades, y cuando se produzca un cambio en les actividades desarrolladas que sea relevante a efectos preventivos, el empresario titular del centro de trabajo deberá informar a los otros empresarios concurrentes sobre: los riesgos propios del centro de trabajo que puedan afectar a las actividades por ellos desarrolladas; las medidas referidas a la prevención de tales riesgos; las medidas de emergencia que se deben aplicar.',
          badge: 'tecnico',
          tags: ['información empresario titular', 'antes del inicio', 'riesgos propios'],
        },
        {
          id: 'cae-art6',
          numero: '6',
          titulo: 'Deber de instrucciones',
          texto: 'El empresario titular del centro de trabajo adoptará las medidas necesarias para que aquellos otros empresarios que desarrollen actividades en su centro de trabajo reciban la información y las instrucciones adecuadas, en relación con los riesgos existentes en el centro de trabajo y con las medidas de protección y prevención correspondientes.',
          badge: 'tecnico',
          tags: ['instrucciones', 'medidas de protección', 'empresario titular'],
        },
        {
          id: 'cae-art7',
          numero: '7',
          titulo: 'Obligaciones del empresario principal',
          texto: 'El empresario principal exigirá a las empresas contratistas y subcontratistas que le acrediten por escrito que han realizado, para las obras y servicios contratados, la evaluación de riesgos y la planificación de su actividad preventiva. El empresario principal exigirá a las empresas contratistas y subcontratistas que le acrediten por escrito que han cumplido sus obligaciones en materia de información y formación respecto de los trabajadores que vayan a prestar sus servicios en el centro de trabajo.',
          badge: 'tecnico',
          tags: ['empresario principal', 'subcontratistas', 'acreditación documental', 'vigilancia'],
        },
      ],
    },
    {
      id: 'cae-cap3',
      numero: 'III',
      titulo: 'Medios de Coordinación',
      articulos: [
        {
          id: 'cae-art11',
          numero: '11',
          titulo: 'Medios de coordinación',
          texto: 'Para el cumplimiento del deber de coordinación, las empresas concurrentes en el centro de trabajo establecerán los medios de coordinación que resulten necesarios, algunos de los cuales son: el intercambio de información y de comunicaciones entre las empresas concurrentes; la celebración de reuniones periódicas entre las empresas concurrentes; la impartición de instrucciones; el establecimiento conjunto de medidas específicas de prevención de los riesgos existentes en el centro de trabajo.',
          badge: 'tecnico',
          tags: ['medios de coordinación', 'reuniones', 'instrucciones conjuntas'],
        },
        {
          id: 'cae-art13',
          numero: '13',
          titulo: 'Coordinador de actividades preventivas',
          texto: 'La designación de una o más personas para actuar como coordinadores de las actividades preventivas será un medio de coordinación preferente cuando concurran dos o más de las siguientes condiciones: Que en el centro de trabajo se realicen, por una de las empresas concurrentes, actividades o procesos reglamentariamente considerados como peligrosos o con riesgos especiales; que exista especial dificultad para controlar las interacciones de las diferentes actividades.',
          badge: 'tecnico',
          tags: ['coordinador', 'actividades preventivas', 'designación', 'peligrosas'],
        },
        {
          id: 'cae-art14',
          numero: '14',
          titulo: 'Funciones del coordinador de actividades preventivas',
          texto: 'El coordinador de actividades preventivas tendrá las siguientes funciones: Favorecer el cumplimiento de los objetivos previstos en el artículo 3; Servir de cauce para el intercambio de las informaciones que, en virtud de lo establecido en el presente Real Decreto, deben intercambiarse las empresas concurrentes en el centro de trabajo; Cualesquiera otras encomendadas por el empresario titular del centro de trabajo.',
          badge: 'tecnico',
          tags: ['funciones coordinador', 'intercambio información', 'cauce'],
        },
      ],
    },
  ],
};
