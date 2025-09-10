export * as events from './events';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendar': Operation<'/me/calendar', 'get'>;
  'PATCH /me/calendar': Operation<'/me/calendar', 'patch'>;
  'GET /me/calendar/calendarPermissions': Operation<'/me/calendar/calendarPermissions', 'get'>;
  'POST /me/calendar/calendarPermissions': Operation<'/me/calendar/calendarPermissions', 'post'>;
  'GET /me/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendar/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /me/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendar/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'DELETE /me/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendar/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /me/calendar/calendarView': Operation<'/me/calendar/calendarView', 'get'>;
  'POST /me/calendar/getSchedule': Operation<'/me/calendar/getSchedule', 'post'>;
  'POST /me/calendar/permanentDelete': Operation<'/me/calendar/permanentDelete', 'post'>;
}

/**
  * `GET /me/calendar`
  *
  * Get the properties and relationships of a calendar object. The calendar can be one for a user,
or the default calendar of a Microsoft 365 group. There are two scenarios where an app can get another user&#x27;s calendar:
  */
export function get(
  params?: IEndpoints['GET /me/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar']['response']> {
  return {
    method: 'get',
    path: '/me/calendar',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /me/calendar`
  *
  * Update the properties of a calendar object. The calendar can be one for a user,
or the default calendar of a Microsoft 365 group.
  */
export function update(
  body: IEndpoints['PATCH /me/calendar']['body']
): EndpointRequest<IEndpoints['PATCH /me/calendar']['response']> {
  return {
    method: 'patch',
    path: '/me/calendar',
    body,
  };
}

export const calendarPermissions = {
  /**
   * `GET /me/calendar/calendarPermissions`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  list: function list(
    params?: IEndpoints['GET /me/calendar/calendarPermissions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/calendar/calendarPermissions']['response']> {
    return {
      method: 'get',
      path: '/me/calendar/calendarPermissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/calendar/calendarPermissions`
   *
   * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
   */
  create: function create(
    body: IEndpoints['POST /me/calendar/calendarPermissions']['body']
  ): EndpointRequest<IEndpoints['POST /me/calendar/calendarPermissions']['response']> {
    return {
      method: 'post',
      path: '/me/calendar/calendarPermissions',
      body,
    };
  },
  /**
   * `GET /me/calendar/calendarPermissions/{calendarPermission-id}`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  get: function get(
    params?: IEndpoints['GET /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['calendarPermission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/calendar/calendarPermissions/{calendarPermission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['body'],
    params?: IEndpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        path: ['calendarPermission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/calendar/calendarPermissions/{calendarPermission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['calendarPermission-id'],
      },
      params,
    };
  },
};

export const calendarView = {
  /**
  * `GET /me/calendar/calendarView`
  *
  * Get the occurrences, exceptions and single instances of events in a calendar view defined by a time range,
from a user&#x27;s default calendar (../me/calendarView) or some other calendar of the user&#x27;s.
  */
  get: function get(
    params?: IEndpoints['GET /me/calendar/calendarView']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/calendar/calendarView']['response']> {
    return {
      method: 'get',
      path: '/me/calendar/calendarView',
      paramDefs: {
        query: [
          'startDateTime',
          'endDateTime',
          '$top',
          '$skip',
          '$search',
          '$filter',
          '$count',
          '$orderby',
          '$select',
          '$expand',
        ],
      },
      params,
    };
  },
};

export const getSchedule = {
  /**
   * `POST /me/calendar/getSchedule`
   *
   * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
   */
  create: function create(
    body: IEndpoints['POST /me/calendar/getSchedule']['body']
  ): EndpointRequest<IEndpoints['POST /me/calendar/getSchedule']['response']> {
    return {
      method: 'post',
      path: '/me/calendar/getSchedule',
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/calendar/permanentDelete`
   *
   * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure deleted item retention and recoverable items quotas.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/calendar/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/calendar/permanentDelete',
    };
  },
};
