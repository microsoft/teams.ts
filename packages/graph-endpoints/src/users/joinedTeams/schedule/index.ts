export * as timeCards from './timeCards';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule',
    'get'
  >;
  'PUT /users/{user-id}/joinedTeams/{team-id}/schedule': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule',
    'put'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'delete'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/share': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/share',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/shifts': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'team-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule`
 *
 * The schedule of shifts for this team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule',
    paramDefs: {
      path: ['user-id', 'team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /users/{user-id}/joinedTeams/{team-id}/schedule`
 *
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/schedule']['body'],
  params?: IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /users/{user-id}/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'put',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule',
    paramDefs: {
      path: ['user-id', 'team-id'],
    },
    params,
    body,
  };
}

export const dayNotes = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes`
   *
   * The day notes in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   * The day notes in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'dayNote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'dayNote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'dayNote-id'],
      },
      params,
    };
  },
};

export const offerShiftRequests = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests`
   *
   * The offer requests for shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   * The offer requests for shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'offerShiftRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'offerShiftRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'offerShiftRequest-id'],
      },
      params,
    };
  },
};

export const openShiftChangeRequests = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
   *
   * The open shift requests in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   * The open shift requests in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'openShiftChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'openShiftChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'openShiftChangeRequest-id'],
      },
      params,
    };
  },
};

export const openShifts = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts`
   *
   * The set of open shifts in a scheduling group in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * The set of open shifts in a scheduling group in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'openShift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'openShift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'openShift-id'],
      },
      params,
    };
  },
};

export const schedulingGroups = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups`
   *
   * The logical grouping of users in the schedule (usually by role).
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * The logical grouping of users in the schedule (usually by role).
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'schedulingGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'schedulingGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'schedulingGroup-id'],
      },
      params,
    };
  },
};

export const share = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/share`
   *
   * Share a schedule time range with schedule members. This action makes the collections of shift, openshift and timeOff items in the specified time range of the schedule viewable by the specified team members, including employees and managers. Each shift, openshift and timeOff instance in a schedule supports a draft version and a shared version of the item. The draft version is viewable by only managers, and the shared version is viewable by employees and managers. For each shift, openshift and timeOff instance in the specified time range, the share action updates the shared version from the draft version, so that in addition to managers, employees can also view the most current information about the item. The notifyTeam parameter further specifies which employees can view the item.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/share']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/share']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/share']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/share',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};

export const shifts = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts`
   *
   * The shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/shifts`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/shifts']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/shifts']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/shifts']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
   *
   * The shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'shift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'shift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'shift-id'],
      },
      params,
    };
  },
};

export const swapShiftsChangeRequests = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   * The swap requests for shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   * The swap requests for shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
    };
  },
};

export const timeOffReasons = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons`
   *
   * The set of reasons for a time off in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * The set of reasons for a time off in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'timeOffReason-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'timeOffReason-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'timeOffReason-id'],
      },
      params,
    };
  },
};

export const timeOffRequests = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests`
   *
   * The time off requests in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   * The time off requests in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'timeOffRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'timeOffRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'timeOffRequest-id'],
      },
      params,
    };
  },
};

export const timesOff = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff`
   *
   * The instances of times off in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * The instances of times off in the schedule.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id', 'timeOff-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        path: ['user-id', 'team-id', 'timeOff-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'team-id', 'timeOff-id'],
      },
      params,
    };
  },
};
