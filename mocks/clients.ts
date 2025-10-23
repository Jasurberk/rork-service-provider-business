import { Client } from '@/types';

export const mockClients: Client[] = [
  {
    id: '1',
    name: {
      en: 'John Smith',
      ru: 'Джон Смит',
      uz: 'Jon Smit',
      original: 'en'
    },
    phone: '(555) 123-4567',
    email: 'john.smith@example.com',
    notes: {
      en: 'Prefers appointments in the morning. Likes classic styles.',
      ru: 'Предпочитает записи на утро. Любит классические стили.',
      uz: 'Ertalabki uchrashuv vaqtlarini afzal ko\'radi. Klassik uslublarni yaxshi ko\'radi.',
      original: 'en'
    },
    lastVisit: '2025-07-01',
    upcomingAppointment: '2025-07-13',
    createdAt: '2024-01-15T10:00:00.000Z',
    totalVisits: 12,
  },
  {
    id: '2',
    name: {
      en: 'Michael Johnson',
      ru: 'Майкл Джонсон',
      uz: 'Maykl Jonson',
      original: 'en'
    },
    phone: '(555) 234-5678',
    email: 'michael.johnson@example.com',
    notes: {
      en: 'Sensitive scalp, use gentle products.',
      ru: 'Чувствительная кожа головы, используйте мягкие средства.',
      uz: 'Sezgir bosh terisi, yumshoq mahsulotlarni ishlating.',
      original: 'en'
    },
    lastVisit: '2025-06-15',
    upcomingAppointment: '2025-07-13',
    createdAt: '2024-02-20T10:00:00.000Z',
    totalVisits: 8,
  },
  {
    id: '3',
    name: {
      en: 'David Williams',
      ru: 'Дэвид Уильямс',
      uz: 'Devid Vilyams',
      original: 'en'
    },
    phone: '(555) 345-6789',
    email: 'david.williams@example.com',
    notes: {
      en: 'New client, referred by John Smith.',
      ru: 'Новый клиент, рекомендован Джоном Смитом.',
      uz: 'Yangi mijoz, Jon Smit tavsiyasi.',
      original: 'en'
    },
    upcomingAppointment: '2025-07-13',
    createdAt: '2025-07-01T10:00:00.000Z',
    totalVisits: 1,
  },
  {
    id: '4',
    name: {
      en: 'Robert Brown',
      ru: 'Роберт Браун',
      uz: 'Robert Braun',
      original: 'en'
    },
    phone: '(555) 456-7890',
    email: 'robert.brown@example.com',
    lastVisit: '2025-06-30',
    upcomingAppointment: '2025-07-14',
    createdAt: '2024-03-10T10:00:00.000Z',
    totalVisits: 6,
  },
  {
    id: '5',
    name: {
      en: 'James Miller',
      ru: 'Джеймс Миллер',
      uz: 'Jeyms Miller',
      original: 'en'
    },
    phone: '(555) 567-8901',
    email: 'james.miller@example.com',
    notes: {
      en: 'Likes to experiment with different styles and colors.',
      ru: 'Любит экспериментировать с разными стилями и цветами.',
      uz: 'Turli uslublar va ranglar bilan tajriba qilishni yaxshi ko\'radi.',
      original: 'en'
    },
    lastVisit: '2025-06-20',
    upcomingAppointment: '2025-07-14',
    createdAt: '2024-04-05T10:00:00.000Z',
    totalVisits: 5,
  },
  {
    id: '6',
    name: {
      en: 'Thomas Davis',
      ru: 'Томас Дэвис',
      uz: 'Tomas Devis',
      original: 'en'
    },
    phone: '(555) 678-9012',
    email: 'thomas.davis@example.com',
    lastVisit: '2025-06-10',
    upcomingAppointment: '2025-07-15',
    createdAt: '2024-05-12T10:00:00.000Z',
    totalVisits: 4,
  },
  {
    id: '7',
    name: {
      en: 'Daniel Wilson',
      ru: 'Дэниел Уилсон',
      uz: 'Deniyel Vilson',
      original: 'en'
    },
    phone: '(555) 789-0123',
    email: 'daniel.wilson@example.com',
    notes: {
      en: 'Prefers evening appointments.',
      ru: 'Предпочитает вечерние записи.',
      uz: 'Kechki uchrashuv vaqtlarini afzal ko\'radi.',
      original: 'en'
    },
    lastVisit: '2025-06-05',
    createdAt: '2024-06-01T10:00:00.000Z',
    totalVisits: 3,
  },
  {
    id: '8',
    name: {
      en: 'Matthew Taylor',
      ru: 'Мэттью Тейлор',
      uz: 'Metyyu Teylor',
      original: 'en'
    },
    phone: '(555) 890-1234',
    email: 'matthew.taylor@example.com',
    lastVisit: '2025-05-25',
    createdAt: '2024-07-15T10:00:00.000Z',
    totalVisits: 2,
  },
  {
    id: '9',
    name: {
      en: 'Christopher Anderson',
      ru: 'Кристофер Андерсон',
      uz: 'Kristofer Anderson',
      original: 'en'
    },
    phone: '(555) 901-2345',
    email: 'christopher.anderson@example.com',
    notes: {
      en: 'Allergic to certain hair products. Check before using new products.',
      ru: 'Аллергия на некоторые средства для волос. Проверяйте перед использованием новых продуктов.',
      uz: 'Ba\'zi soch mahsulotlariga allergiya. Yangi mahsulotlarni ishlatishdan oldin tekshiring.',
      original: 'en'
    },
    lastVisit: '2025-05-15',
    createdAt: '2024-08-20T10:00:00.000Z',
    totalVisits: 2,
  },
  {
    id: '10',
    name: {
      en: 'Anthony Thomas',
      ru: 'Энтони Томас',
      uz: 'Entoni Tomas',
      original: 'en'
    },
    phone: '(555) 012-3456',
    email: 'anthony.thomas@example.com',
    lastVisit: '2025-05-10',
    createdAt: '2024-09-10T10:00:00.000Z',
    totalVisits: 1,
  },
];