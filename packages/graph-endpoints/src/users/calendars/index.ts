export * as events from './events';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/calendars/{calendar-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendars': Operation<'/users/{user-id}/calendars', 'get'>;
  'GET /users/{user-id}/calendars/{calendar-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendars/{calendar-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}',
    'patch'
  >;
  'POST /users/{user-id}/calendars': Operation<'/users/{user-id}/calendars', 'post'>;
  'GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/users/{user-id}/calendars/{calendar-id}/calendarPermissions',
    'get'
  >;
  'POST /users/{user-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/users/{user-id}/calendars/{calendar-id}/calendarPermissions',
    'post'
  >;
  'GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendars/{calendar-id}/calendarView': Operation<
    '/users/{user-id}/calendars/{calendar-id}/calendarView',
    'get'
  >;
  'POST /users/{user-id}/calendars/{calendar-id}/getSchedule': Operation<
    '/users/{user-id}/calendars/{calendar-id}/getSchedule',
    'post'
  >;
  'POST /users/{user-id}/calendars/{calendar-id}/permanentDelete': Operation<
    '/users/{user-id}/calendars/{calendar-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/calendars/{calendar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/calendars/{calendar-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/calendars/{calendar-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'calendar-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/calendars`
 *
 * The user&#x27;s calendars. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/calendars']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendars']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/calendars',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/calendars/{calendar-id}`
 *
 * The user&#x27;s calendars. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendars/{calendar-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/calendars/{calendar-id}',
    paramDefs: {
      path: ['user-id', 'calendar-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendars/{calendar-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/calendars/{calendar-id}',
    paramDefs: {
      path: ['user-id', 'calendar-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/calendars`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendars']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendars']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/calendars']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/calendars',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const calendarPermissions = {
  /**
   * `GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/calendars/{calendar-id}/calendarPermissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'calendar-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/calendars/{calendar-id}/calendarPermissions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/calendarPermissions']['body'],
    params?: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/calendarPermissions']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/calendars/{calendar-id}/calendarPermissions',
      paramDefs: {
        path: ['user-id', 'calendar-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'calendar-id', 'calendarPermission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        path: ['user-id', 'calendar-id', 'calendarPermission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'calendar-id', 'calendarPermission-id'],
      },
      params,
    };
  },
};

export const calendarView = {
  /**
   * `GET /users/{user-id}/calendars/{calendar-id}/calendarView`
   *
   * The calendar view for the calendar. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/calendarView']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/calendarView']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/calendars/{calendar-id}/calendarView',
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
        path: ['user-id', 'calendar-id'],
      },
      params,
    };
  },
};

export const getSchedule = {
  /**
   * `POST /users/{user-id}/calendars/{calendar-id}/getSchedule`
   *
   * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/getSchedule']['body'],
    params?: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/getSchedule']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/getSchedule']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/calendars/{calendar-id}/getSchedule',
      paramDefs: {
        path: ['user-id', 'calendar-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/calendars/{calendar-id}/permanentDelete`
   *
   * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure deleted item retention and recoverable items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/calendars/{calendar-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'calendar-id'],
      },
      params,
    };
  },
};
