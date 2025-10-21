export type TranslatedText = {
  en?: string;
  ru?: string;
  uz?: string;
  original?: string;
};

export type Client = {
  id: string;
  name: string | TranslatedText;
  phone: string;
  email: string;
  notes?: string | TranslatedText;
  lastVisit?: string;
  upcomingAppointment?: string;
  avatar?: string;
  createdAt: string;
  totalVisits: number;
};

export type Service = {
  id: string;
  name: string | TranslatedText;
  description: string | TranslatedText;
  duration: number;
  price: number;
  category: string;
};

export type Appointment = {
  id: string;
  clientId: string;
  clientName: string | TranslatedText;
  clientPhone?: string;
  clientEmail?: string;
  serviceId: string;
  serviceName: string | TranslatedText;
  servicePrice: number;
  date: string;
  startTime: string;
  endTime: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed' | 'no-show';
  notes?: string | TranslatedText;
  createdAt: string;
  updatedAt: string;
  bookingSource: 'direct' | 'bronapp' | 'phone' | 'walk-in';
};

export type AppNotification = {
  id: string;
  type: 'new_appointment' | 'appointment_changed' | 'appointment_cancelled';
  title: string;
  message: string;
  clientName: string;
  appointmentId?: string;
  timestamp: string;
  isRead: boolean;
};

export type PortfolioItem = {
  id: string;
  imageUrl: string;
  description: string | TranslatedText;
  serviceCategory: string;
  date: string;
};

export type BusinessProfileExceptions = {
  closedDates: string[];
  shortDays: Array<{
    date: string;
    openTime: string;
    closeTime: string;
  }>;
};

export type BusinessProfile = {
  id: string;
  name: string | TranslatedText;
  address: string | TranslatedText;
  phone: string;
  email: string;
  workingHours: {
    [key: string]: {
      isOpen: boolean;
      openTime: string;
      closeTime: string;
    };
  };
  exceptions?: BusinessProfileExceptions;
  bio: string | TranslatedText;
  profileImage?: string;
  coverPhotos?: string[];
  mainCoverPhotoIndex?: number;
  website?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    telegram?: string;
    youtube?: string;
    tiktok?: string;
  };
  businessType: string;
  serviceType?: string;
  employees?: string[];
  isAcceptingBookings: boolean;
  bookingSettings: {
    advanceBookingDays: number;
    cancellationPolicy: string;
    requiresConfirmation: boolean;
  };
  createdAt: string;
  updatedAt: string;
};

export type BookingRequest = {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
};

export type TimeSlot = {
  time: string;
  available: boolean;
  appointmentId?: string;
};

export type AvailabilityResponse = {
  date: string;
  slots: TimeSlot[];
};

export type Review = {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
  reply?: string;
  replyDate?: string;
};