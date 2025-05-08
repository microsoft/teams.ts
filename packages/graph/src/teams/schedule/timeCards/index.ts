import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ClockInClient } from './clockIn';
import { ClockOutClient } from './clockOut';
import { ConfirmClient } from './confirm';
import { EndBreakClient } from './endBreak';
import { StartBreakClient } from './startBreak';

/**
 * /teams/{team-id}/schedule/timeCards
 * Provides operations to manage the timeCards property of the microsoft.graph.schedule entity.
 */
export class TimeCardsClient {
  protected baseUrl = '/teams/{team-id}/schedule/timeCards';
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
   * `/teams/{team-id}/schedule/timeCards/clockIn`
   *
   * Provides operations to call the clockIn method.
   */
  get clockIn() {
    return new ClockInClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut`
   *
   * Provides operations to call the clockOut method.
   */
  clockOut(timeCardId: string) {
    return new ClockOutClient(timeCardId, this.http);
  }

  /**
   * `/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm`
   *
   * Provides operations to call the confirm method.
   */
  confirm(timeCardId: string) {
    return new ConfirmClient(timeCardId, this.http);
  }

  /**
   * `/teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak`
   *
   * Provides operations to call the endBreak method.
   */
  endBreak(timeCardId: string) {
    return new EndBreakClient(timeCardId, this.http);
  }

  /**
   * `/teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak`
   *
   * Provides operations to call the startBreak method.
   */
  startBreak(timeCardId: string) {
    return new StartBreakClient(timeCardId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}`
   *
   * Delete a timeCard instance in a schedule.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'timeCard-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/schedule/timeCards`
   *
   * Retrieve a list of timeCard entries in a schedule.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/schedule/timeCards']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeCards',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/schedule/timeCards']['response']);
  }

  /**
   * `GET /teams/{team-id}/schedule/timeCards/{timeCard-id}`
   *
   * The time cards in the schedule.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'timeCard-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'timeCard-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/schedule/timeCards`
   *
   * Create a timeCard instance in a schedule.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/schedule/timeCards']['body'],
    params?: Endpoints['POST /teams/{team-id}/schedule/timeCards']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule/timeCards',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/schedule/timeCards']['response']);
  }
}
