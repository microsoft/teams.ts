import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import { LearningProvidersClient } from './learningProviders';

/**
 * /employeeExperience
 */
export class EmployeeExperienceClient {
  protected baseUrl = '/employeeExperience';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/employeeExperience/learningProviders`
   *
   * Provides operations to manage the learningProviders property of the microsoft.graph.employeeExperience entity.
   */
  get learningProviders() {
    return new LearningProvidersClient(this.http);
  }
}
