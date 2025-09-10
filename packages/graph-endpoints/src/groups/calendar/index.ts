export * as events from './events';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/calendar': Operation<'/groups/{group-id}/calendar', 'get'>;
  'GET /groups/{group-id}/calendar/calendarPermissions': Operation<
    '/groups/{group-id}/calendar/calendarPermissions',
    'get'
  >;
  'POST /groups/{group-id}/calendar/calendarPermissions': Operation<
    '/groups/{group-id}/calendar/calendarPermissions',
    'post'
  >;
  'GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /groups/{group-id}/calendar/calendarView': Operation<
    '/groups/{group-id}/calendar/calendarView',
    'get'
  >;
  'POST /groups/{group-id}/calendar/getSchedule': Operation<
    '/groups/{group-id}/calendar/getSchedule',
    'post'
  >;
  'POST /groups/{group-id}/calendar/permanentDelete': Operation<
    '/groups/{group-id}/calendar/permanentDelete',
    'post'
  >;
}

/**
 * `GET /groups/{group-id}/calendar`
 *
 * The group&#x27;s calendar. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendar']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/calendar',
    paramDefs: {
      path: ['group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const calendarPermissions = {
  /**
   * `GET /groups/{group-id}/calendar/calendarPermissions`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendar/calendarPermissions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/calendar/calendarPermissions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/calendarPermissions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/calendarPermissions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/calendarPermissions']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/calendarPermissions',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'calendarPermission-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        path: ['group-id', 'calendarPermission-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'calendarPermission-id'],
      },
      params,
    };
  },
};

export const calendarView = {
  /**
   * `GET /groups/{group-id}/calendar/calendarView`
   *
   * The calendar view for the calendar. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/calendar/calendarView']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendar/calendarView']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendar/calendarView',
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
        path: ['group-id'],
      },
      params,
    };
  },
};

export const getSchedule = {
  /**
   * `POST /groups/{group-id}/calendar/getSchedule`
   *
   * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/getSchedule']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/getSchedule']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/calendar/getSchedule']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/getSchedule',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /groups/{group-id}/calendar/permanentDelete`
   *
   * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure deleted item retention and recoverable items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/calendar/permanentDelete']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/calendar/permanentDelete']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/permanentDelete',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};
