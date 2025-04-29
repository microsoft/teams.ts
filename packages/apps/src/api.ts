import * as api from '@microsoft/teams.api';
import * as http from '@microsoft/teams.common/http';
import * as graph from '@microsoft/teams.graph';

export class AppClient extends api.Client {
  /**
   * app graph api client
   */
  graph: graph.Client;

  constructor(serviceUrl: string, bot: http.Client, app: http.Client) {
    super(serviceUrl, bot);
    this.graph = new graph.Client(app);
  }
}

export class ApiClient extends api.Client {
  /**
   * app graph api client
   */
  app: graph.Client;

  /**
   * user graph api client
   */
  user: graph.Client;

  constructor(serviceUrl: string, bot: http.Client, app: http.Client, user: http.Client) {
    super(serviceUrl, bot);
    this.app = new graph.Client(app);
    this.user = new graph.Client(user);
  }
}
