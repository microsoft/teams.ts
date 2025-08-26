import type { CallOptions, EndpointRequest } from './common';
import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import { AppCatalogsClient } from './appCatalogs';
import { AppRoleAssignmentsClient } from './appRoleAssignments';
import { ApplicationTemplatesClient } from './applicationTemplates';
import { ApplicationsClient } from './applications';
import { ChatsClient } from './chats';
import { CommunicationsClient } from './communications';
import { EmployeeExperienceClient } from './employeeExperience';
import { MeClient } from './me';
import { SitesClient } from './sites';
import { SolutionsClient } from './solutions';
import { TeamsClient } from './teams';
import { TeamsTemplatesClient } from './teamsTemplates';
import { TeamworkClient } from './teamwork';
import { UsersClient } from './users';

/**
 * /
 * Provides operations to manage the collection of application entities.
 */
export class Client {
  protected baseUrl = '/';
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
   * Executes a Graph API endpoint function with optional HTTP configuration
   *
   * @param func - The endpoint function to execute
   * @param args - Arguments for the endpoint function, optionally followed by {@link CallConfig}
   * @returns Promise resolving to the endpoint's response data
   *
   * @example
   * ```typescript
   * // Simple call
   * const user = await client.call(endpoints.users.get, 'user-id');
   *
   * // With HTTP configuration
   * const user = await client.call(endpoints.users.get, 'user-id', {
   *   requestConfig: {
   *     timeout: 5000
   *   }
   * });
   * ```
   */
  async call<
    F extends (...args: any[]) => EndpointRequest<any>,
    R = ReturnType<F> extends EndpointRequest<infer T> ? T : never,
  >(func: F, ...args: [...Parameters<F>, CallOptions?]): Promise<R> {
    // Check if last arg is a config object
    const lastArg = args[args.length - 1];
    const hasOptions =
      args.length > func.length &&
      lastArg &&
      typeof lastArg === 'object' &&
      'requestConfig' in lastArg;

    // Extract function arguments
    const funcArgs = hasOptions ? args.slice(0, -1) : args;

    const requestConfig = hasOptions ? (lastArg as CallOptions).requestConfig : undefined;

    const { method, path, paramDefs, params, body } = func(...(funcArgs as any[]));
    const url = getInjectedUrl(path, paramDefs, params || {});

    switch (method) {
      case 'delete':
      case 'get':
        return (await this.http[method](url, requestConfig)).data as R;
      case 'patch':
      case 'post':
      case 'put':
        return (await this.http[method](url, body, requestConfig)).data as R;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }

  /**
   * `/appCatalogs`
   *
   * Provides operations to manage the appCatalogs singleton.
   */
  get appCatalogs() {
    return new AppCatalogsClient(this.http);
  }

  /**
   * `/appRoleAssignments`
   *
   * Provides operations to manage the collection of appRoleAssignment entities.
   */
  get appRoleAssignments() {
    return new AppRoleAssignmentsClient(this.http);
  }

  /**
   * `/applicationTemplates`
   *
   * Provides operations to manage the collection of applicationTemplate entities.
   */
  get applicationTemplates() {
    return new ApplicationTemplatesClient(this.http);
  }

  /**
   * `/applications`
   *
   * Provides operations to manage the collection of application entities.
   */
  get applications() {
    return new ApplicationsClient(this.http);
  }

  /**
   * `/chats`
   *
   * Provides operations to manage the collection of chat entities.
   */
  get chats() {
    return new ChatsClient(this.http);
  }

  /**
   * `/communications`
   *
   * Provides operations to manage the cloudCommunications singleton.
   */
  get communications() {
    return new CommunicationsClient(this.http);
  }

  /**
   * `/employeeExperience`
   *
   */
  get employeeExperience() {
    return new EmployeeExperienceClient(this.http);
  }

  /**
   * `/me`
   *
   * Provides operations to manage the user singleton.
   */
  get me() {
    return new MeClient(this.http);
  }

  /**
   * `/sites`
   *
   * Provides operations to manage the collection of site entities.
   */
  get sites() {
    return new SitesClient(this.http);
  }

  /**
   * `/solutions`
   *
   * Provides operations to manage the solutionsRoot singleton.
   */
  get solutions() {
    return new SolutionsClient(this.http);
  }

  /**
   * `/teams`
   *
   * Provides operations to manage the collection of team entities.
   */
  get teams() {
    return new TeamsClient(this.http);
  }

  /**
   * `/teamsTemplates`
   *
   * Provides operations to manage the collection of teamsTemplate entities.
   */
  get teamsTemplates() {
    return new TeamsTemplatesClient(this.http);
  }

  /**
   * `/teamwork`
   *
   * Provides operations to manage the teamwork singleton.
   */
  get teamwork() {
    return new TeamworkClient(this.http);
  }

  /**
   * `/users`
   *
   * Provides operations to manage the collection of user entities.
   */
  get users() {
    return new UsersClient(this.http);
  }
}
