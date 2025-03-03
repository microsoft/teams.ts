import { WindowClient } from '../window-client';
import { Location } from '../types';

export class LocationClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async get(allowChooseLocation = false, showMap = false) {
    const [res] = await this.window.send<[Location]>('location.getLocation', {
      allowChooseLocation,
      showMap,
    });

    return res;
  }

  async show(location: Location) {
    await this.window.send('location.showLocation', location);
  }
}
