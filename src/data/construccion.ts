import type { Ley } from './types';

// ============================================================
// RD 1627/1997 — Seguridad en obras de construcción
// ============================================================

export const construccion: Ley = {
  id: 'construccion',
  codigo: 'RD 1627/1997',
  titulo: 'Seguridad en Obras de Construcción',
  subtitulo: 'Disposiciones mínimas de seguridad y salud en las obras de construcción',
  fecha: '24 de octubre de 1997',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-22614',
  color: '#ef4444',
  icono: '🏗️',
  capitulos: [
    {
      id: 'const-cap1',
      numero: 'I',
      titulo: 'Disposiciones Generales',
      articulos: [
        {
          id: 'const-art1',
          numero: '1',
          titulo: 'Objeto',
          texto: 'El presente Real Decreto establece, en el marco de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales, las disposiciones mínimas de seguridad y de salud aplicables a las obras de construcción.',
          badge: 'tecnico',
          tags: ['construcción', 'disposiciones mínimas', 'objeto'],
        },
        {
          id: 'const-art2',
          numero: '2',
          titulo: 'Definiciones',
          texto: 'A efectos del presente Real Decreto, se entenderá por:\n"obra de construcción": cualquier obra pública o privada en la que se efectúen trabajos de construcción o ingeniería civil.\n"promotor": cualquier persona física o jurídica por cuenta de la cual se realice una obra.\n"contratista": la persona física o jurídica que asume contractualmente ante el promotor la ejecución de la totalidad o parte de las obras.\n"subcontratista": la persona física o jurídica que asume contractualmente ante el contratista el compromiso de realizar determinadas partes de la obra.',
          badge: 'tecnico',
          tags: ['definiciones', 'promotor', 'contratista', 'subcontratista'],
        },
      ],
    },
    {
      id: 'const-cap2',
      numero: 'II',
      titulo: 'Obligaciones de los Agentes que Intervienen en la Obra',
      articulos: [
        {
          id: 'const-art3',
          numero: '3',
          titulo: 'Designación de los coordinadores en materia de seguridad y salud',
          texto: 'En las obras incluidas en el ámbito de aplicación del presente Real Decreto, cuando en la elaboración del proyecto de obra intervengan varios proyectistas, el promotor designará un coordinador en materia de seguridad y de salud durante la elaboración del proyecto de obra. Cuando en la ejecución de la obra intervenga más de una empresa, o una empresa y trabajadores autónomos o diversos trabajadores autónomos, el promotor, antes del inicio de los trabajos o tan pronto como se constate dicha circunstancia, designará un coordinador en materia de seguridad y salud durante la ejecución de la obra.',
          badge: 'tecnico',
          tags: ['coordinador', 'CSS obra', 'diseño', 'ejecución', 'promotor'],
        },
        {
          id: 'const-art4',
          numero: '4',
          titulo: 'Obligaciones del promotor',
          texto: 'El promotor estará obligado a que en la fase de redacción del proyecto se elabore un estudio de seguridad y salud en los proyectos de obras en que se den alguno de los supuestos previstos. En los proyectos de obras no incluidos en los supuestos previstos en el apartado anterior, el promotor estará obligado a que en la fase de redacción del proyecto se elabore un estudio básico de seguridad y salud.',
          badge: 'tecnico',
          tags: ['promotor', 'estudio de seguridad', 'estudio básico', 'proyecto'],
        },
        {
          id: 'const-art5',
          numero: '5',
          titulo: 'Estudio de seguridad y salud',
          texto: 'El estudio de seguridad y salud deberá elaborarse en los proyectos de obras en que se den alguno de los siguientes supuestos: Presupuesto de ejecución por contrata incluido en el proyecto sea igual o superior a 450.759 euros; Duración estimada superior a 30 días laborables; Volumen de mano de obra estimada, entendida como la suma de los días de trabajo del total de los trabajadores en la obra, sea superior a 500; Las obras de túneles, galerías, conducciones subterráneas y presas.',
          badge: 'tecnico',
          tags: ['ESS', 'estudio de seguridad completo', 'umbrales', '450.759€', '30 días'],
        },
        {
          id: 'const-art6',
          numero: '6',
          titulo: 'Estudio básico de seguridad y salud',
          texto: 'El promotor estará obligado a que en la fase de redacción del proyecto se elabore un estudio básico de seguridad y salud cuando no se den los supuestos del artículo 5. El estudio básico precisará las normas de seguridad y salud aplicables a la obra, contemplando la identificación de los riesgos laborales que puedan ser evitados.',
          badge: 'tecnico',
          tags: ['EBSS', 'estudio básico', 'obras menores'],
        },
        {
          id: 'const-art7',
          numero: '7',
          titulo: 'Plan de seguridad y salud en el trabajo',
          texto: 'En aplicación del estudio de seguridad y salud o, en su caso, del estudio básico, cada contratista elaborará un plan de seguridad y salud en el trabajo en el que se analicen, estudien, desarrollen y complementen las previsiones contenidas en el estudio o estudio básico, en función de su propio sistema de ejecución de la obra. En el plan se incluirán, en su caso, las propuestas de medidas alternativas de prevención que el contratista proponga.',
          badge: 'tecnico',
          tags: ['PSS', 'plan de seguridad', 'contratista', 'medidas alternativas'],
        },
        {
          id: 'const-art9',
          numero: '9',
          titulo: 'Obligaciones del coordinador en materia de seguridad y de salud durante la ejecución de la obra',
          texto: 'El coordinador en materia de seguridad y de salud durante la ejecución de la obra deberá desarrollar las siguientes funciones: Coordinar la aplicación de los principios generales de prevención y de seguridad; Coordinar las actividades de la obra para garantizar que los contratistas y los subcontratistas y los trabajadores autónomos apliquen de manera coherente los principios del artículo 15 de la Ley 31/1995.',
          badge: 'tecnico',
          tags: ['coordinador seguridad', 'CSS ejecución', 'funciones', 'libro de incidencias'],
        },
      ],
    },
    {
      id: 'const-cap3',
      numero: 'III',
      titulo: 'Derechos de los Trabajadores',
      articulos: [
        {
          id: 'const-art12',
          numero: '12',
          titulo: 'Información y formación',
          texto: 'El contratista y los subcontratistas deberán garantizar que los trabajadores reciban una información adecuada de todas las medidas que hayan de adoptarse en lo que se refiere a su seguridad y su salud en la obra. La información deberá ser comprensible para los trabajadores afectados. Los contratistas y los subcontratistas deberán garantizar que los trabajadores reciban una formación adecuada y pertinente en materia de seguridad y salud, en particular en forma de instrucciones precisas.',
          badge: 'divulgativo',
          tags: ['formación', 'información', 'trabajadores construcción', 'instrucciones'],
        },
        {
          id: 'const-art13',
          numero: '13',
          titulo: 'Obligaciones de los trabajadores autónomos',
          texto: 'Los trabajadores autónomos estarán obligados a: Aplicar los principios de la acción preventiva que se recogen en el artículo 15 de la Ley 31/1995; Cumplir las disposiciones mínimas de seguridad y salud establecidas en el anexo IV durante la ejecución de la obra; Ajustar su actuación en la obra conforme a los deberes de coordinación de actividades empresariales.',
          badge: 'divulgativo',
          tags: ['autónomos', 'obligaciones', 'principios preventivos'],
        },
      ],
    },
  ],
};
