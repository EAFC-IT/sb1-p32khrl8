import { WasteType, CollectionDate, PostponedDate } from './types';

export const wasteTypes: WasteType[] = [
  {
    id: 1,
    name: 'PMC',
    color: 'blue',
    description: 'Plastiques, Métaux et Cartons à boissons',
    rules: [
      'Bouteilles et flacons en plastique',
      'Emballages métalliques',
      'Cartons à boissons',
      'Bien vider et aplatir les emballages'
    ]
  },
  {
    id: 2,
    name: 'Déchets organiques',
    color: 'green',
    description: 'Déchets biodégradables de cuisine et de jardin',
    rules: [
      'Restes de repas',
      'Épluchures de fruits et légumes',
      'Marc de café et sachets de thé',
      'Petits déchets de jardin'
    ]
  },
  {
    id: 3,
    name: 'Déchets résiduels',
    color: '#abaf7e',
    description: 'Déchets non recyclables et non organiques',
    rules: [
      'Emballages souillés',
      'Articles d\'hygiène',
      'Objets composés de plusieurs matériaux',
      'Déchets non recyclables'
    ]
  },
  {
    id: 4,
    name: 'Cartons',
    color: 'brown',
    description: 'Cartons et papiers',
    rules: [
      'Cartons propres et pliés',
      'Papiers non souillés',
      'Journaux et magazines',
      'Boîtes en carton'
    ]
  }
];

export const collectionDates: CollectionDate[] = [
  // PMC (Sacs bleus) - ID: 1
  ...['09', '23'].map(day => ({ date: `2025-01-${day}`, wasteTypeId: 1 })),
  ...['06', '20'].map(day => ({ date: `2025-02-${day}`, wasteTypeId: 1 })),
  ...['06', '20'].map(day => ({ date: `2025-03-${day}`, wasteTypeId: 1 })),
  ...['03', '17'].map(day => ({ date: `2025-04-${day}`, wasteTypeId: 1 })),
  ...['02', '15', '30'].map(day => ({ date: `2025-05-${day}`, wasteTypeId: 1 })),
  ...['13', '26'].map(day => ({ date: `2025-06-${day}`, wasteTypeId: 1 })),
  ...['10', '25'].map(day => ({ date: `2025-07-${day}`, wasteTypeId: 1 })),
  ...['07', '21'].map(day => ({ date: `2025-08-${day}`, wasteTypeId: 1 })),
  ...['04', '18'].map(day => ({ date: `2025-09-${day}`, wasteTypeId: 1 })),
  ...['02', '16', '30'].map(day => ({ date: `2025-10-${day}`, wasteTypeId: 1 })),
  ...['14', '27'].map(day => ({ date: `2025-11-${day}`, wasteTypeId: 1 })),
  ...['11', '26'].map(day => ({ date: `2025-12-${day}`, wasteTypeId: 1 })),

  // Cartons (Sacs bruns) - ID: 4
  ...['09', '23'].map(day => ({ date: `2025-01-${day}`, wasteTypeId: 4 })),
  ...['06', '20'].map(day => ({ date: `2025-02-${day}`, wasteTypeId: 4 })),
  ...['06', '20'].map(day => ({ date: `2025-03-${day}`, wasteTypeId: 4 })),
  ...['03', '17'].map(day => ({ date: `2025-04-${day}`, wasteTypeId: 4 })),
  ...['02', '15', '30'].map(day => ({ date: `2025-05-${day}`, wasteTypeId: 4 })),
  ...['13', '26'].map(day => ({ date: `2025-06-${day}`, wasteTypeId: 4 })),
  ...['10', '25'].map(day => ({ date: `2025-07-${day}`, wasteTypeId: 4 })),
  ...['07', '21'].map(day => ({ date: `2025-08-${day}`, wasteTypeId: 4 })),
  ...['04', '18'].map(day => ({ date: `2025-09-${day}`, wasteTypeId: 4 })),
  ...['02', '16', '30'].map(day => ({ date: `2025-10-${day}`, wasteTypeId: 4 })),
  ...['14', '27'].map(day => ({ date: `2025-11-${day}`, wasteTypeId: 4 })),
  ...['11', '26'].map(day => ({ date: `2025-12-${day}`, wasteTypeId: 4 })),

  // Déchets organiques (Sacs verts) - ID: 2
  ...['09', '16', '23', '30'].map(day => ({ date: `2025-01-${day}`, wasteTypeId: 2 })),
  ...['06', '13', '20', '27'].map(day => ({ date: `2025-02-${day}`, wasteTypeId: 2 })),
  ...['06', '13', '20', '27'].map(day => ({ date: `2025-03-${day}`, wasteTypeId: 2 })),
  ...['03', '10', '17', '25'].map(day => ({ date: `2025-04-${day}`, wasteTypeId: 2 })),
  ...['02', '08', '15', '22', '30'].map(day => ({ date: `2025-05-${day}`, wasteTypeId: 2 })),
  ...['05', '13', '19', '26'].map(day => ({ date: `2025-06-${day}`, wasteTypeId: 2 })),
  ...['03', '10', '17', '25', '31'].map(day => ({ date: `2025-07-${day}`, wasteTypeId: 2 })),
  ...['07', '14', '21', '28'].map(day => ({ date: `2025-08-${day}`, wasteTypeId: 2 })),
  ...['04', '11', '18', '25'].map(day => ({ date: `2025-09-${day}`, wasteTypeId: 2 })),
  ...['02', '09', '16', '23', '30'].map(day => ({ date: `2025-10-${day}`, wasteTypeId: 2 })),
  ...['06', '14', '20', '27'].map(day => ({ date: `2025-11-${day}`, wasteTypeId: 2 })),
  ...['05', '11', '18', '26'].map(day => ({ date: `2025-12-${day}`, wasteTypeId: 2 })),

  // Déchets résiduels (Sacs moka) - ID: 3
  ...['09', '23'].map(day => ({ date: `2025-01-${day}`, wasteTypeId: 3 })),
  ...['06', '20'].map(day => ({ date: `2025-02-${day}`, wasteTypeId: 3 })),
  ...['06', '20'].map(day => ({ date: `2025-03-${day}`, wasteTypeId: 3 })),
  ...['03', '17'].map(day => ({ date: `2025-04-${day}`, wasteTypeId: 3 })),
  ...['02', '15', '30'].map(day => ({ date: `2025-05-${day}`, wasteTypeId: 3 })),
  ...['13', '26'].map(day => ({ date: `2025-06-${day}`, wasteTypeId: 3 })),
  ...['10', '25'].map(day => ({ date: `2025-07-${day}`, wasteTypeId: 3 })),
  ...['07', '21'].map(day => ({ date: `2025-08-${day}`, wasteTypeId: 3 })),
  ...['04', '18'].map(day => ({ date: `2025-09-${day}`, wasteTypeId: 3 })),
  ...['02', '16', '30'].map(day => ({ date: `2025-10-${day}`, wasteTypeId: 3 })),
  ...['14', '27'].map(day => ({ date: `2025-11-${day}`, wasteTypeId: 3 })),
  ...['11', '26'].map(day => ({ date: `2025-12-${day}`, wasteTypeId: 3 }))
];

export const postponedDates: PostponedDate[] = [
  // Déchets organiques (Sacs verts)
  { originalDate: '2025-07-24', newDate: '2025-07-25', wasteTypeId: 2 },
  { originalDate: '2025-05-01', newDate: '2025-05-02', wasteTypeId: 2 },
  { originalDate: '2025-05-29', newDate: '2025-05-30', wasteTypeId: 2 },
  { originalDate: '2025-06-12', newDate: '2025-06-13', wasteTypeId: 2 },
  { originalDate: '2025-12-25', newDate: '2025-12-26', wasteTypeId: 2 },

  // Déchets résiduels (Sacs moka)
  { originalDate: '2025-07-24', newDate: '2025-07-25', wasteTypeId: 3 },
  { originalDate: '2025-05-01', newDate: '2025-05-02', wasteTypeId: 3 },
  { originalDate: '2025-05-29', newDate: '2025-05-30', wasteTypeId: 3 },
  { originalDate: '2025-06-12', newDate: '2025-06-13', wasteTypeId: 3 },

  // PMC (Sacs bleus)
  { originalDate: '2025-07-24', newDate: '2025-07-25', wasteTypeId: 1 },
  { originalDate: '2025-11-13', newDate: '2025-11-14', wasteTypeId: 1 },
  { originalDate: '2025-12-25', newDate: '2025-12-26', wasteTypeId: 1 },

  // Cartons
  { originalDate: '2025-07-24', newDate: '2025-07-25', wasteTypeId: 4 },
  { originalDate: '2025-11-13', newDate: '2025-11-14', wasteTypeId: 4 },
  { originalDate: '2025-12-25', newDate: '2025-12-26', wasteTypeId: 4 }
];