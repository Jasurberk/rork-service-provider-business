import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { mockServices } from '@/mocks/services';
import { Service } from '@/types';
import { translateText } from '@/lib/translation-utils';

interface ServicesState {
  services: Service[];
  isLoading: boolean;
  addService: (service: Service, autoTranslate?: boolean) => Promise<void>;
  updateService: (id: string, updatedService: Partial<Service>, autoTranslate?: boolean) => Promise<void>;
  deleteService: (id: string) => void;
  getServiceById: (id: string) => Service | undefined;
  getServicesByCategory: (category: string) => Service[];
}

export const useServicesStore = create<ServicesState>()(
  persist(
    (set, get) => ({
      services: mockServices,
      isLoading: false,
      addService: async (service, autoTranslate = true) => {
        let finalService = service;
        
        if (autoTranslate) {
          const translations: Partial<Service> = {};
          
          if (typeof service.name === 'string') {
            translations.name = await translateText(service.name);
          }
          
          if (typeof service.description === 'string') {
            translations.description = await translateText(service.description);
          }
          
          finalService = { ...service, ...translations };
        }
        
        set((state) => ({
          services: [...state.services, finalService],
        }));
      },
      updateService: async (id, updatedService, autoTranslate = true) => {
        let finalUpdate = updatedService;
        
        if (autoTranslate) {
          const translations: Partial<Service> = {};
          
          if (updatedService.name && typeof updatedService.name === 'string') {
            translations.name = await translateText(updatedService.name);
          }
          
          if (updatedService.description && typeof updatedService.description === 'string') {
            translations.description = await translateText(updatedService.description);
          }
          
          finalUpdate = { ...updatedService, ...translations };
        }
        
        set((state) => ({
          services: state.services.map((service) => 
            service.id === id 
              ? { ...service, ...finalUpdate } 
              : service
          ),
        }));
      },
      deleteService: (id) => 
        set((state) => ({
          services: state.services.filter((service) => service.id !== id),
        })),
      getServiceById: (id) => {
        return get().services.find((service) => service.id === id);
      },
      getServicesByCategory: (category) => {
        return get().services.filter((service) => service.category === category);
      },
    }),
    {
      name: 'services-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);