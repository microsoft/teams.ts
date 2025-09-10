export * as events from './events';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/calendar': Operation<'/users/{user-id}/calendar', 'get'>;
  'PATCH /users/{user-id}/calendar': Operation<'/users/{user-id}/calendar', 'patch'>;
  'GET /users/{user-id}/calendar/calendarPermissions': Operation<
    '/users/{user-id}/calendar/calendarPermissions',
    'get'
  >;
  'POST /users/{user-id}/calendar/calendarPermissions': Operation<
    '/users/{user-id}/calendar/calendarPermissions',
    'post'
  >;
  'GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendar/calendarView': Operation<
    '/users/{user-id}/calendar/calendarView',
    'get'
  >;
  'POST /users/{user-id}/calendar/getSchedule': Operation<
    '/users/{user-id}/calendar/getSchedule',
    'post'
  >;
  'POST /users/{user-id}/calendar/permanentDelete': Operation<
    '/users/{user-id}/calendar/permanentDelete',
    'post'
  >;
}

/**
 * `GET /users/{user-id}/calendar`
 *
 * The user&#x27;s primary calendar. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendar']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendar`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendar']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/calendar']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/calendar',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const calendarPermissions = {
  /**
   * `GET /users/{user-id}/calendar/calendarPermissions`
   *
   * Get the specified permissions object of a user or group calendar that has been shared.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/calendar/calendarPermissions']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/calendar/calendarPermissions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/calendar/calendarPermissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/calendar/calendarPermissions`
   *
   * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/calendar/calendarPermissions']['body'],
    params?: IEndpoints['POST /users/{user-id}/calendar/calendarPermissions']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/calendar/calendarPermissions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/calendar/calendarPermissions',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}`
   *
   * Get the specified permissions object of a user or group calendar that has been shared.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'calendarPermission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}`
   *
   * Update the permissions assigned to an existing share recipient or delegate, through the corresponding calendarPermission object for a calendar.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        path: ['user-id', 'calendarPermission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}`
   *
   * Delete calendarPermission.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'calendarPermission-id'],
      },
      params,
    };
  },
};

export const calendarView = {
  /**
   * `GET /users/{user-id}/calendar/calendarView`
   *
   * The calendar view for the calendar. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/calendar/calendarView']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/calendar/calendarView']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/calendar/calendarView',
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
        path: ['user-id'],
      },
      params,
    };
  },
};

export const getSchedule = {
  /**
   * `POST /users/{user-id}/calendar/getSchedule`
   *
   * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/calendar/getSchedule']['body'],
    params?: IEndpoints['POST /users/{user-id}/calendar/getSchedule']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/calendar/getSchedule']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/calendar/getSchedule',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/calendar/permanentDelete`
   *
   * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/calendar/permanentDelete']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/calendar/permanentDelete']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/calendar/permanentDelete',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};
