import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './questions-types.ts';

/**
 * /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions
 * Provides operations to manage the questions property of the microsoft.graph.virtualEventRegistrationConfiguration entity.
 */
export class QuestionsClient {
  protected baseUrl =
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions';
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
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
   *
   * Delete a registration question from a webinar. The question can either be a predefined registration question or a custom registration question.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventRegistrationQuestionBase-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions`
   *
   * Get a list of all registration questions for a webinar. The list can include either predefined registration questions or custom registration questions.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
   *
   * Registration questions.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventRegistrationQuestionBase-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventRegistrationQuestionBase-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions`
   *
   * Create a registration question for a webinar. You can create either a predefined registration question or a custom registration question.
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
      [{ name: 'virtualEventWebinar-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions']['response']
      );
  }
}
