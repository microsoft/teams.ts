export * as events from './events';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendars/{calendar-id}': Operation<'/me/calendars/{calendar-id}', 'delete'>;
  'GET /me/calendars': Operation<'/me/calendars', 'get'>;
  'GET /me/calendars/{calendar-id}': Operation<'/me/calendars/{calendar-id}', 'get'>;
  'PATCH /me/calendars/{calendar-id}': Operation<'/me/calendars/{calendar-id}', 'patch'>;
  'POST /me/calendars': Operation<'/me/calendars', 'post'>;
  'GET /me/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions',
    'get'
  >;
  'POST /me/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions',
    'post'
  >;
  'GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /me/calendars/{calendar-id}/calendarView': Operation<
    '/me/calendars/{calendar-id}/calendarView',
    'get'
  >;
  'POST /me/calendars/{calendar-id}/getSchedule': Operation<
    '/me/calendars/{calendar-id}/getSchedule',
    'post'
  >;
  'POST /me/calendars/{calendar-id}/permanentDelete': Operation<
    '/me/calendars/{calendar-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/calendars/{calendar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/calendars/{calendar-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/calendars/{calendar-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['calendar-id'],
    },
    params,
  };
}

/**
 * `GET /me/calendars`
 *
 * Get all the user&#x27;s calendars (/calendars navigation property), get the calendars from the default calendar group or from a specific calendar group.
 */
export function list(
  params?: IEndpoints['GET /me/calendars']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendars']['response']> {
  return {
    method: 'get',
    path: '/me/calendars',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}`
 *
 * The user&#x27;s calendars. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendars/{calendar-id}']['response']> {
  return {
    method: 'get',
    path: '/me/calendars/{calendar-id}',
    paramDefs: {
      path: ['calendar-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/calendars/{calendar-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendars/{calendar-id}']['body'],
  params?: IEndpoints['PATCH /me/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/calendars/{calendar-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/calendars/{calendar-id}',
    paramDefs: {
      path: ['calendar-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/calendars`
 *
 * Create a new calendar for a user.
 */
export function create(
  body: IEndpoints['POST /me/calendars']['body']
): EndpointRequest<IEndpoints['POST /me/calendars']['response']> {
  return {
    method: 'post',
    path: '/me/calendars',
    body,
  };
}

export const calendarPermissions = {
  /**
   * `GET /me/calendars/{calendar-id}/calendarPermissions`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  list: function list(
    params?: IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions']['response']
  > {
    return {
      method: 'get',
      path: '/me/calendars/{calendar-id}/calendarPermissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['calendar-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/calendars/{calendar-id}/calendarPermissions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['response']
  > {
    return {
      method: 'post',
      path: '/me/calendars/{calendar-id}/calendarPermissions',
      paramDefs: {
        path: ['calendar-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  get: function get(
    params?: IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['calendar-id', 'calendarPermission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['body'],
    params?: IEndpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        path: ['calendar-id', 'calendarPermission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['calendar-id', 'calendarPermission-id'],
      },
      params,
    };
  },
};

export const calendarView = {
  /**
   * `GET /me/calendars/{calendar-id}/calendarView`
   *
   * The calendar view for the calendar. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/calendars/{calendar-id}/calendarView']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/calendars/{calendar-id}/calendarView']['response']> {
    return {
      method: 'get',
      path: '/me/calendars/{calendar-id}/calendarView',
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
        path: ['calendar-id'],
      },
      params,
    };
  },
};

export const getSchedule = {
  /**
   * `POST /me/calendars/{calendar-id}/getSchedule`
   *
   * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
   */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/getSchedule']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/getSchedule']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/calendars/{calendar-id}/getSchedule']['response']> {
    return {
      method: 'post',
      path: '/me/calendars/{calendar-id}/getSchedule',
      paramDefs: {
        path: ['calendar-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/calendars/{calendar-id}/permanentDelete`
   *
   * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure deleted item retention and recoverable items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/calendars/{calendar-id}/permanentDelete']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/calendars/{calendar-id}/permanentDelete']['response']> {
    return {
      method: 'post',
      path: '/me/calendars/{calendar-id}/permanentDelete',
      paramDefs: {
        path: ['calendar-id'],
      },
      params,
    };
  },
};
