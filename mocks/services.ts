import { Service } from '@/types';

export const mockServices: Service[] = [
  {
    id: '1',
    name: {
      en: 'Haircut & Styling',
      ru: 'Стрижка и укладка',
      uz: 'Soch olish va uslublash',
      original: 'en'
    },
    description: {
      en: 'Professional haircut with styling according to client preference.',
      ru: 'Профессиональная стрижка с укладкой по желанию клиента.',
      uz: 'Mijoz xohishiga ko\'ra professional soch olish va uslublash.',
      original: 'en'
    },
    duration: 45,
    price: 35,
    category: 'Hair',
  },
  {
    id: '2',
    name: {
      en: 'Beard Trim',
      ru: 'Стрижка бороды',
      uz: 'Soqol olish',
      original: 'en'
    },
    description: {
      en: 'Precision beard trimming and shaping.',
      ru: 'Точная стрижка и формирование бороды.',
      uz: 'Aniq soqol olish va shakllantirish.',
      original: 'en'
    },
    duration: 30,
    price: 20,
    category: 'Facial Hair',
  },
  {
    id: '3',
    name: {
      en: 'Full Service (Haircut & Beard)',
      ru: 'Полный комплекс (Стрижка и борода)',
      uz: 'To\'liq xizmat (Soch va soqol)',
      original: 'en'
    },
    description: {
      en: 'Complete haircut and beard trim package.',
      ru: 'Полный комплекс стрижки волос и бороды.',
      uz: 'To\'liq soch va soqol olish xizmati.',
      original: 'en'
    },
    duration: 60,
    price: 50,
    category: 'Combo',
  },
  {
    id: '4',
    name: {
      en: 'Hair Coloring',
      ru: 'Окрашивание волос',
      uz: 'Soch bo\'yash',
      original: 'en'
    },
    description: {
      en: 'Professional hair coloring service.',
      ru: 'Профессиональная услуга окрашивания волос.',
      uz: 'Professional soch bo\'yash xizmati.',
      original: 'en'
    },
    duration: 90,
    price: 75,
    category: 'Hair',
  },
  {
    id: '5',
    name: {
      en: 'Hot Towel Shave',
      ru: 'Бритьё с горячим полотенцем',
      uz: 'Issiq sochiq bilan soqol olish',
      original: 'en'
    },
    description: {
      en: 'Traditional hot towel shave with straight razor.',
      ru: 'Традиционное бритьё с горячим полотенцем опасной бритвой.',
      uz: 'An\'anaviy issiq sochiq va to\'g\'ri ustara bilan soqol olish.',
      original: 'en'
    },
    duration: 45,
    price: 40,
    category: 'Facial Hair',
  },
  {
    id: '6',
    name: {
      en: 'Kids Haircut',
      ru: 'Детская стрижка',
      uz: 'Bolalar soch olish',
      original: 'en'
    },
    description: {
      en: 'Haircut for children under 12.',
      ru: 'Стрижка для детей до 12 лет.',
      uz: '12 yoshgacha bolalar uchun soch olish.',
      original: 'en'
    },
    duration: 30,
    price: 25,
    category: 'Hair',
  },
  {
    id: '7',
    name: {
      en: 'Head Shave',
      ru: 'Бритьё головы',
      uz: 'Boshni soqol qilish',
      original: 'en'
    },
    description: {
      en: 'Complete head shave with razor.',
      ru: 'Полное бритьё головы бритвой.',
      uz: 'Ustara bilan to\'liq bosh soqol qilish.',
      original: 'en'
    },
    duration: 30,
    price: 30,
    category: 'Hair',
  },
  {
    id: '8',
    name: {
      en: 'Facial Treatment',
      ru: 'Уход за лицом',
      uz: 'Yuz parvarishi',
      original: 'en'
    },
    description: {
      en: 'Cleansing and rejuvenating facial treatment.',
      ru: 'Очищающая и омолаживающая процедура для лица.',
      uz: 'Yuzni tozalash va yoshartiruvchi muolaja.',
      original: 'en'
    },
    duration: 45,
    price: 45,
    category: 'Skin Care',
  },
];