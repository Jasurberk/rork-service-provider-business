import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { mockBusinessProfile } from '@/mocks/profile';
import { BusinessProfile } from '@/types';
import { translateText } from '@/lib/translation-utils';

interface BusinessState {
  profile: BusinessProfile;
  isLoading: boolean;
  updateProfile: (updatedProfile: Partial<BusinessProfile>, autoTranslate?: boolean) => Promise<void>;
}

export const useBusinessStore = create<BusinessState>()(
  persist(
    (set) => ({
      profile: mockBusinessProfile,
      isLoading: false,
      updateProfile: async (updatedProfile, autoTranslate = true) => {
        let finalUpdate = updatedProfile;
        
        if (autoTranslate) {
          const translations: Partial<BusinessProfile> = {};
          
          if (updatedProfile.name && typeof updatedProfile.name === 'string') {
            translations.name = await translateText(updatedProfile.name);
          }
          
          if (updatedProfile.address && typeof updatedProfile.address === 'string') {
            translations.address = await translateText(updatedProfile.address);
          }
          
          if (updatedProfile.bio && typeof updatedProfile.bio === 'string') {
            translations.bio = await translateText(updatedProfile.bio);
          }
          
          finalUpdate = { ...updatedProfile, ...translations };
        }
        
        set((state) => ({
          profile: { ...state.profile, ...finalUpdate },
        }));
      },
    }),
    {
      name: 'business-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);