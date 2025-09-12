export * as events from './events';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'delete'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars',
    'get'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'get'
  >;
  'PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'patch'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars',
    'post'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    'get'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    'post'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView',
    'get'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule',
    'post'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/permanentDelete': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/permanentDelete',
    'post'
  >;
}

/**
 * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['calendarGroup-id', 'calendar-id'],
    },
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars`
 *
 * Retrieve a list of calendars belonging to a calendar group.
 */
export function list(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars',
    paramDefs: {
      path: ['calendarGroup-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 * The calendars in the calendar group. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: {
      path: ['calendarGroup-id', 'calendar-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['body'],
  params?: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: {
      path: ['calendarGroup-id', 'calendar-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/calendarGroups/{calendarGroup-id}/calendars`
 *
 * Use this API to create a new calendar in a calendar group for a user.
 */
export function create(
  body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['body'],
  params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars',
    paramDefs: {
      path: ['calendarGroup-id'],
    },
    params,
    body,
  };
}

export const calendarPermissions = {
  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  list: function list(
    params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['calendarGroup-id', 'calendar-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['body'],
    params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
      paramDefs: {
        path: ['calendarGroup-id', 'calendar-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  get: function get(
    params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['calendarGroup-id', 'calendar-id', 'calendarPermission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['body'],
    params?: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        path: ['calendarGroup-id', 'calendar-id', 'calendarPermission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['calendarGroup-id', 'calendar-id', 'calendarPermission-id'],
      },
      params,
    };
  },
};

export const calendarView = {
  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView`
   *
   * The calendar view for the calendar. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView',
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
        path: ['calendarGroup-id', 'calendar-id'],
      },
      params,
    };
  },
};

export const getSchedule = {
  /**
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule`
   *
   * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
   */
  create: function create(
    body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule']['body'],
    params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule',
      paramDefs: {
        path: ['calendarGroup-id', 'calendar-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/permanentDelete`
   *
   * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/permanentDelete',
      paramDefs: {
        path: ['calendarGroup-id', 'calendar-id'],
      },
      params,
    };
  },
};
