import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { OfferShiftRequestsClient } from './offerShiftRequests';
import { OpenShiftChangeRequestsClient } from './openShiftChangeRequests';
import { OpenShiftsClient } from './openShifts';
import { SchedulingGroupsClient } from './schedulingGroups';
import { ShareClient } from './share';
import { ShiftsClient } from './shifts';
import { SwapShiftsChangeRequestsClient } from './swapShiftsChangeRequests';
import { TimeOffReasonsClient } from './timeOffReasons';
import { TimeOffRequestsClient } from './timeOffRequests';
import { TimesOffClient } from './timesOff';

/**
 * /teams/{team-id}/schedule
 * Provides operations to manage the schedule property of the microsoft.graph.team entity.
 */
export class ScheduleClient {
  protected baseUrl = '/teams/{team-id}/schedule';
  protected http: http.Client;

  constructor(
    protected readonly teamId: string,
    options?: http.Client | http.ClientOptions
  ) {
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
   * `/teams/{team-id}/schedule/offerShiftRequests`
   *
   * Provides operations to manage the offerShiftRequests property of the microsoft.graph.schedule entity.
   */
  get offerShiftRequests() {
    return new OfferShiftRequestsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/openShiftChangeRequests`
   *
   * Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity.
   */
  get openShiftChangeRequests() {
    return new OpenShiftChangeRequestsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/openShifts`
   *
   * Provides operations to manage the openShifts property of the microsoft.graph.schedule entity.
   */
  get openShifts() {
    return new OpenShiftsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/schedulingGroups`
   *
   * Provides operations to manage the schedulingGroups property of the microsoft.graph.schedule entity.
   */
  get schedulingGroups() {
    return new SchedulingGroupsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/share`
   *
   * Provides operations to call the share method.
   */
  get share() {
    return new ShareClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/shifts`
   *
   * Provides operations to manage the shifts property of the microsoft.graph.schedule entity.
   */
  get shifts() {
    return new ShiftsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
   */
  get swapShiftsChangeRequests() {
    return new SwapShiftsChangeRequestsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/timeOffReasons`
   *
   * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
   */
  get timeOffReasons() {
    return new TimeOffReasonsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/timeOffRequests`
   *
   * Provides operations to manage the timeOffRequests property of the microsoft.graph.schedule entity.
   */
  get timeOffRequests() {
    return new TimeOffRequestsClient(this.http);
  }

  /**
   * `/teams/{team-id}/schedule/timesOff`
   *
   * Provides operations to manage the timesOff property of the microsoft.graph.schedule entity.
   */
  get timesOff() {
    return new TimesOffClient(this.http);
  }

  /**
   * `DELETE /teams/{team-id}/schedule`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/schedule']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /teams/{team-id}/schedule']['response']);
  }

  /**
   * `GET /teams/{team-id}/schedule`
   *
   * Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).
When clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the provisionStatus property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the provisionStatusCode property. Clients can also inspect the configuration of the schedule.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/schedule']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/schedule',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/schedule']['response']);
  }

  /**
   * `PUT /teams/{team-id}/schedule`
   *
   * Create or replace a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).
When clients use the PUT method, if the schedule is provisioned, the operation replaces the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the provisionStatus property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the provisionStatusCode property. Clients can also inspect the configuration of the schedule.
   */
  async set(
    body: Endpoints['PUT /teams/{team-id}/schedule']['body'],
    params?: Endpoints['PUT /teams/{team-id}/schedule']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}/schedule', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
      'team-id': this.teamId,
    });

    return this.http
      .put(url, body, config)
      .then((res) => res.data as Endpoints['PUT /teams/{team-id}/schedule']['response']);
  }
}
