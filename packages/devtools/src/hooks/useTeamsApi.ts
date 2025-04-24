import { Client } from '@microsoft/teams.api';

let api: Client | null = null;

const useTeamsApi = () => {
  if (!api) {
    api = new Client('', {
      headers: { 'x-teams-devtools': 'true' },
    });
  }

  return api;
};

export default useTeamsApi;
