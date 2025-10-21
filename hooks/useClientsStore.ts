import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { mockClients } from '@/mocks/clients';
import { Client } from '@/types';
import { translateText } from '@/lib/translation-utils';

interface ClientsState {
  clients: Client[];
  isLoading: boolean;
  addClient: (client: Client, autoTranslate?: boolean) => Promise<void>;
  updateClient: (id: string, updatedClient: Partial<Client>, autoTranslate?: boolean) => Promise<void>;
  deleteClient: (id: string) => void;
  getClientById: (id: string) => Client | undefined;
}

export const useClientsStore = create<ClientsState>()(
  persist(
    (set, get) => ({
      clients: mockClients,
      isLoading: false,
      addClient: async (client, autoTranslate = true) => {
        let finalClient = client;
        
        if (autoTranslate) {
          const translations: Partial<Client> = {};
          
          if (typeof client.name === 'string') {
            translations.name = await translateText(client.name);
          }
          
          if (client.notes && typeof client.notes === 'string') {
            translations.notes = await translateText(client.notes);
          }
          
          finalClient = { ...client, ...translations };
        }
        
        set((state) => ({
          clients: [...state.clients, finalClient],
        }));
      },
      updateClient: async (id, updatedClient, autoTranslate = true) => {
        let finalUpdate = updatedClient;
        
        if (autoTranslate) {
          const translations: Partial<Client> = {};
          
          if (updatedClient.name && typeof updatedClient.name === 'string') {
            translations.name = await translateText(updatedClient.name);
          }
          
          if (updatedClient.notes && typeof updatedClient.notes === 'string') {
            translations.notes = await translateText(updatedClient.notes);
          }
          
          finalUpdate = { ...updatedClient, ...translations };
        }
        
        set((state) => ({
          clients: state.clients.map((client) => 
            client.id === id 
              ? { ...client, ...finalUpdate } 
              : client
          ),
        }));
      },
      deleteClient: (id) => 
        set((state) => ({
          clients: state.clients.filter((client) => client.id !== id),
        })),
      getClientById: (id) => {
        return get().clients.find((client) => client.id === id);
      },
    }),
    {
      name: 'clients-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);