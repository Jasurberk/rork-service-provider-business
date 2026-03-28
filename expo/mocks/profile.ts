import { BusinessProfile } from '@/types';

export const mockProfile: BusinessProfile = {
  id: 'business-1',
  name: {
    en: 'Elite Barber Shop',
    ru: 'Элитная Барбершоп',
    uz: 'Elit Barbershop',
    original: 'en'
  },
  address: {
    en: '123 Main Street, Anytown, USA',
    ru: '123 Главная улица, Энитаун, США',
    uz: '123 Asosiy ko\'cha, Enitaun, AQSh',
    original: 'en'
  },
  phone: '(555) 123-4567',
  email: 'contact@elitebarbershop.com',
  workingHours: {
    monday: {
      isOpen: true,
      openTime: '09:00',
      closeTime: '18:00',
    },
    tuesday: {
      isOpen: true,
      openTime: '09:00',
      closeTime: '18:00',
    },
    wednesday: {
      isOpen: true,
      openTime: '09:00',
      closeTime: '18:00',
    },
    thursday: {
      isOpen: true,
      openTime: '09:00',
      closeTime: '20:00',
    },
    friday: {
      isOpen: true,
      openTime: '09:00',
      closeTime: '20:00',
    },
    saturday: {
      isOpen: true,
      openTime: '10:00',
      closeTime: '16:00',
    },
    sunday: {
      isOpen: false,
      openTime: '',
      closeTime: '',
    },
  },
  bio: {
    en: 'Elite Barber Shop has been providing premium grooming services since 2010. Our team of skilled barbers specializes in classic and modern styles, beard grooming, and premium shaving services.',
    ru: 'Elite Barber Shop предоставляет премиальные услуги по уходу с 2010 года. Наша команда опытных барберов специализируется на классических и современных стилях, уходе за бородой и премиальных услугах бритья.',
    uz: 'Elite Barber Shop 2010 yildan beri yuqori sifatli parvarish xizmatlarini taqdim etmoqda. Bizning tajribali sartaroshlar jamoamiz klassik va zamonaviy uslublar, soqol parvarishi va yuqori sifatli soqol olish xizmatlarida ixtisoslashgan.',
    original: 'en'
  },
  profileImage: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b',
  coverPhotos: [
    'https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1622286346003-c2d4e2e8b8b8?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop',
  ],
  website: 'https://elitebarbershop.com',
  socialMedia: {
    instagram: 'https://instagram.com/elitebarbershop',
    facebook: 'https://facebook.com/EliteBarberShop',
    telegram: 'https://t.me/elitebarbershop',
    youtube: '',
    tiktok: 'https://tiktok.com/@elitebarbershop',
    twitter: '',
  },
  businessType: 'Barber Shop',
  serviceType: 'Hair & Grooming Services',
  employees: ['John Smith - Master Barber', 'Mike Johnson - Senior Barber', 'Alex Brown - Barber'],
  isAcceptingBookings: true,
  bookingSettings: {
    advanceBookingDays: 30,
    cancellationPolicy: 'Cancellations must be made at least 24 hours in advance.',
    requiresConfirmation: true,
  },
  createdAt: '2023-01-01T00:00:00.000Z',
  updatedAt: new Date().toISOString(),
};

// Keep the old export for backward compatibility
export const mockBusinessProfile = mockProfile;