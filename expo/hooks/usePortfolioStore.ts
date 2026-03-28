import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { mockPortfolio } from '@/mocks/portfolio';
import { PortfolioItem } from '@/types';
import { translateText } from '@/lib/translation-utils';

interface PortfolioState {
  portfolioItems: PortfolioItem[];
  isLoading: boolean;
  addPortfolioItem: (item: PortfolioItem, autoTranslate?: boolean) => Promise<void>;
  updatePortfolioItem: (id: string, updatedItem: Partial<PortfolioItem>, autoTranslate?: boolean) => Promise<void>;
  deletePortfolioItem: (id: string) => void;
  getPortfolioItemsByCategory: (category: string) => PortfolioItem[];
}

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set, get) => ({
      portfolioItems: mockPortfolio,
      isLoading: false,
      addPortfolioItem: async (item, autoTranslate = true) => {
        let finalItem = item;
        
        if (autoTranslate && typeof item.description === 'string') {
          const translatedDescription = await translateText(item.description);
          finalItem = { ...item, description: translatedDescription };
        }
        
        set((state) => ({
          portfolioItems: [...state.portfolioItems, finalItem],
        }));
      },
      updatePortfolioItem: async (id, updatedItem, autoTranslate = true) => {
        let finalUpdate = updatedItem;
        
        if (autoTranslate && updatedItem.description && typeof updatedItem.description === 'string') {
          const translatedDescription = await translateText(updatedItem.description);
          finalUpdate = { ...updatedItem, description: translatedDescription };
        }
        
        set((state) => ({
          portfolioItems: state.portfolioItems.map((item) => 
            item.id === id 
              ? { ...item, ...finalUpdate } 
              : item
          ),
        }));
      },
      deletePortfolioItem: (id) => 
        set((state) => ({
          portfolioItems: state.portfolioItems.filter((item) => item.id !== id),
        })),
      getPortfolioItemsByCategory: (category) => {
        return get().portfolioItems.filter((item) => item.serviceCategory === category);
      },
    }),
    {
      name: 'portfolio-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);