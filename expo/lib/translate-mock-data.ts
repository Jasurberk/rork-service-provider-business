import { translateText } from './translation-utils';
import { mockServices } from '@/mocks/services';
import { mockClients } from '@/mocks/clients';
import { mockPortfolio } from '@/mocks/portfolio';
import { mockAppointments } from '@/mocks/appointments';
import { mockProfile } from '@/mocks/profile';

export async function translateMockData() {
  console.log('Starting mock data translation...');
  
  const translatedServices = [];
  for (const service of mockServices) {
    const serviceName = typeof service.name === 'string' ? service.name : service.name.en || '';
    console.log(`Translating service: ${serviceName}`);
    const translatedName = typeof service.name === 'string' ? await translateText(service.name) : service.name;
    const translatedDescription = typeof service.description === 'string' ? await translateText(service.description) : service.description;
    translatedServices.push({
      ...service,
      name: translatedName,
      description: translatedDescription,
    });
  }
  
  const translatedClients = [];
  for (const client of mockClients) {
    const clientName = typeof client.name === 'string' ? client.name : client.name.en || '';
    console.log(`Translating client: ${clientName}`);
    const translatedName = typeof client.name === 'string' ? await translateText(client.name) : client.name;
    let translatedNotes = client.notes;
    if (client.notes && typeof client.notes === 'string') {
      translatedNotes = await translateText(client.notes);
    }
    translatedClients.push({
      ...client,
      name: translatedName,
      notes: translatedNotes,
    });
  }
  
  const translatedPortfolio = [];
  for (const item of mockPortfolio) {
    const itemDesc = typeof item.description === 'string' ? item.description : item.description.en || '';
    console.log(`Translating portfolio item: ${itemDesc}`);
    const translatedDescription = typeof item.description === 'string' ? await translateText(item.description) : item.description;
    translatedPortfolio.push({
      ...item,
      description: translatedDescription,
    });
  }
  
  const translatedAppointments = [];
  for (const appointment of mockAppointments) {
    console.log(`Translating appointment: ${appointment.id}`);
    const translatedClientName = typeof appointment.clientName === 'string' ? await translateText(appointment.clientName) : appointment.clientName;
    const translatedServiceName = typeof appointment.serviceName === 'string' ? await translateText(appointment.serviceName) : appointment.serviceName;
    let translatedNotes = appointment.notes;
    if (appointment.notes && typeof appointment.notes === 'string') {
      translatedNotes = await translateText(appointment.notes);
    }
    translatedAppointments.push({
      ...appointment,
      clientName: translatedClientName,
      serviceName: translatedServiceName,
      notes: translatedNotes,
    });
  }
  
  console.log('Translating profile...');
  const translatedProfile = {
    ...mockProfile,
    name: typeof mockProfile.name === 'string' ? await translateText(mockProfile.name) : mockProfile.name,
    address: typeof mockProfile.address === 'string' ? await translateText(mockProfile.address) : mockProfile.address,
    bio: typeof mockProfile.bio === 'string' ? await translateText(mockProfile.bio) : mockProfile.bio,
  };
  
  console.log('Mock data translation completed!');
  
  return {
    services: translatedServices,
    clients: translatedClients,
    portfolio: translatedPortfolio,
    appointments: translatedAppointments,
    profile: translatedProfile,
  };
}
