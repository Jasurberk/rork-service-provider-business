import { Appointment } from '@/types';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    clientId: '1',
    clientName: {
      en: 'John Smith',
      ru: 'Джон Смит',
      uz: 'Jon Smit',
      original: 'en'
    },
    clientPhone: '+1234567890',
    clientEmail: 'john.smith@email.com',
    serviceId: '1',
    serviceName: {
      en: 'Haircut & Styling',
      ru: 'Стрижка и укладка',
      uz: 'Soch olish va uslublash',
      original: 'en'
    },
    servicePrice: 45,
    date: formatDate(today),
    startTime: '10:00',
    endTime: '10:45',
    status: 'confirmed',
    notes: {
      en: 'Regular client, prefers scissors over clippers',
      ru: 'Постоянный клиент, предпочитает ножницы машинке',
      uz: 'Doimiy mijoz, mashinadan ko\'ra qaychi bilan kesishni afzal ko\'radi',
      original: 'en'
    },
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date().toISOString(),
    bookingSource: 'bronapp',
  },
  {
    id: '2',
    clientId: '2',
    clientName: {
      en: 'Michael Johnson',
      ru: 'Майкл Джонсон',
      uz: 'Maykl Jonson',
      original: 'en'
    },
    clientPhone: '+1234567891',
    clientEmail: 'michael.j@email.com',
    serviceId: '2',
    serviceName: {
      en: 'Beard Trim',
      ru: 'Стрижка бороды',
      uz: 'Soqol olish',
      original: 'en'
    },
    servicePrice: 25,
    date: formatDate(today),
    startTime: '11:00',
    endTime: '11:30',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date().toISOString(),
    bookingSource: 'direct',
  },
  {
    id: '3',
    clientId: '3',
    clientName: {
      en: 'David Williams',
      ru: 'Дэвид Уильямс',
      uz: 'Devid Vilyams',
      original: 'en'
    },
    clientPhone: '+1234567892',
    clientEmail: 'david.w@email.com',
    serviceId: '3',
    serviceName: {
      en: 'Full Service (Haircut & Beard)',
      ru: 'Полный комплекс (Стрижка и борода)',
      uz: 'To\'liq xizmat (Soch va soqol)',
      original: 'en'
    },
    servicePrice: 65,
    date: formatDate(today),
    startTime: '13:00',
    endTime: '14:00',
    status: 'pending',
    notes: {
      en: 'New client',
      ru: 'Новый клиент',
      uz: 'Yangi mijoz',
      original: 'en'
    },
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date().toISOString(),
    bookingSource: 'bronapp',
  },
  {
    id: '4',
    clientId: '4',
    clientName: {
      en: 'Robert Brown',
      ru: 'Роберт Браун',
      uz: 'Robert Braun',
      original: 'en'
    },
    clientPhone: '+1234567893',
    serviceId: '1',
    serviceName: {
      en: 'Haircut & Styling',
      ru: 'Стрижка и укладка',
      uz: 'Soch olish va uslublash',
      original: 'en'
    },
    servicePrice: 45,
    date: formatDate(tomorrow),
    startTime: '09:30',
    endTime: '10:15',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: new Date().toISOString(),
    bookingSource: 'phone',
  },
  {
    id: '5',
    clientId: '5',
    clientName: {
      en: 'James Miller',
      ru: 'Джеймс Миллер',
      uz: 'Jeyms Miller',
      original: 'en'
    },
    clientPhone: '+1234567894',
    clientEmail: 'james.miller@email.com',
    serviceId: '4',
    serviceName: {
      en: 'Hair Coloring',
      ru: 'Окрашивание волос',
      uz: 'Soch bo\'yash',
      original: 'en'
    },
    servicePrice: 85,
    date: formatDate(tomorrow),
    startTime: '14:00',
    endTime: '15:30',
    status: 'confirmed',
    notes: {
      en: 'Wants to try a new color',
      ru: 'Хочет попробовать новый цвет',
      uz: 'Yangi rang sinab ko\'rmoqchi',
      original: 'en'
    },
    createdAt: new Date(Date.now() - 432000000).toISOString(),
    updatedAt: new Date().toISOString(),
    bookingSource: 'bronapp',
  },
  {
    id: '6',
    clientId: '1',
    clientName: {
      en: 'John Smith',
      ru: 'Джон Смит',
      uz: 'Jon Smit',
      original: 'en'
    },
    clientPhone: '+1234567890',
    clientEmail: 'john.smith@email.com',
    serviceId: '2',
    serviceName: {
      en: 'Beard Trim',
      ru: 'Стрижка бороды',
      uz: 'Soqol olish',
      original: 'en'
    },
    servicePrice: 25,
    date: formatDate(dayAfterTomorrow),
    startTime: '10:00',
    endTime: '10:30',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 518400000).toISOString(),
    updatedAt: new Date().toISOString(),
    bookingSource: 'direct',
  },
  {
    id: '7',
    clientId: '6',
    clientName: {
      en: 'Thomas Davis',
      ru: 'Томас Дэвис',
      uz: 'Tomas Devis',
      original: 'en'
    },
    clientPhone: '+1234567895',
    serviceId: '5',
    serviceName: {
      en: 'Hot Towel Shave',
      ru: 'Бритьё с горячим полотенцем',
      uz: 'Issiq sochiq bilan soqol olish',
      original: 'en'
    },
    servicePrice: 35,
    date: formatDate(dayAfterTomorrow),
    startTime: '11:00',
    endTime: '11:45',
    status: 'pending',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    updatedAt: new Date().toISOString(),
    bookingSource: 'bronapp',
  },
];