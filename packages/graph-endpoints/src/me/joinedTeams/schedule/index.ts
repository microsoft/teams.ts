export * as timeCards from './timeCards';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule': Operation<
    '/me/joinedTeams/{team-id}/schedule',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule': Operation<'/me/joinedTeams/{team-id}/schedule', 'get'>;
  'PUT /me/joinedTeams/{team-id}/schedule': Operation<'/me/joinedTeams/{team-id}/schedule', 'put'>;
  'GET /me/joinedTeams/{team-id}/schedule/dayNotes': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/dayNotes': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/openShifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/schedulingGroups': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/schedulingGroups': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'delete'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/share': Operation<
    '/me/joinedTeams/{team-id}/schedule/share',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/shifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/shifts': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeOffReasons': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeOffRequests': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timesOff': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule`
 *
 * The schedule of shifts for this team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /me/joinedTeams/{team-id}/schedule`
 *
 */
export function set(
  body: IEndpoints['PUT /me/joinedTeams/{team-id}/schedule']['body'],
  params?: IEndpoints['PUT /me/joinedTeams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /me/joinedTeams/{team-id}/schedule']['response']> {
  return {
    method: 'put',
    path: '/me/joinedTeams/{team-id}/schedule',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const dayNotes = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/dayNotes`
   *
   * The day notes in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/dayNotes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/dayNotes`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/dayNotes']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/dayNotes']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/dayNotes']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/dayNotes',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   * The day notes in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'dayNote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        path: ['team-id', 'dayNote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'dayNote-id'],
      },
      params,
    };
  },
};

export const offerShiftRequests = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests`
   *
   * The offer requests for shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/offerShiftRequests']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   * The offer requests for shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'offerShiftRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        path: ['team-id', 'offerShiftRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'offerShiftRequest-id'],
      },
      params,
    };
  },
};

export const openShiftChangeRequests = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
   *
   * The open shift requests in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   * The open shift requests in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'openShiftChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        path: ['team-id', 'openShiftChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'openShiftChangeRequest-id'],
      },
      params,
    };
  },
};

export const openShifts = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/openShifts`
   *
   * The set of open shifts in a scheduling group in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/openShifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/openShifts`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShifts']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShifts']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/openShifts']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/openShifts',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * The set of open shifts in a scheduling group in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'openShift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        path: ['team-id', 'openShift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'openShift-id'],
      },
      params,
    };
  },
};

export const schedulingGroups = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/schedulingGroups`
   *
   * The logical grouping of users in the schedule (usually by role).
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/schedulingGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/schedulingGroups']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/schedulingGroups']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * The logical grouping of users in the schedule (usually by role).
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'schedulingGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        path: ['team-id', 'schedulingGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'schedulingGroup-id'],
      },
      params,
    };
  },
};

export const share = {
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/share`
   *
   * Share a schedule time range with schedule members. This action makes the collections of shift, openshift and timeOff items in the specified time range of the schedule viewable by the specified team members, including employees and managers. Each shift, openshift and timeOff instance in a schedule supports a draft version and a shared version of the item. The draft version is viewable by only managers, and the shared version is viewable by employees and managers. For each shift, openshift and timeOff instance in the specified time range, the share action updates the shared version from the draft version, so that in addition to managers, employees can also view the most current information about the item. The notifyTeam parameter further specifies which employees can view the item.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/share']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/share']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/share']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/share',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const shifts = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/shifts`
   *
   * The shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/shifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/shifts`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/shifts']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/shifts']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/shifts']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/shifts',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
   *
   * The shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'shift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        path: ['team-id', 'shift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/shifts/{shift-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'shift-id'],
      },
      params,
    };
  },
};

export const swapShiftsChangeRequests = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   * The swap requests for shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   * The swap requests for shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        path: ['team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
    };
  },
};

export const timeOffReasons = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/timeOffReasons`
   *
   * The set of reasons for a time off in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timeOffReasons`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffReasons']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffReasons']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * The set of reasons for a time off in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'timeOffReason-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        path: ['team-id', 'timeOffReason-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'timeOffReason-id'],
      },
      params,
    };
  },
};

export const timeOffRequests = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/timeOffRequests`
   *
   * The time off requests in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timeOffRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffRequests']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeOffRequests']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   * The time off requests in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'timeOffRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        path: ['team-id', 'timeOffRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'timeOffRequest-id'],
      },
      params,
    };
  },
};

export const timesOff = {
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/timesOff`
   *
   * The instances of times off in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff']['response']> {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/timesOff',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timesOff`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timesOff']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timesOff']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timesOff']['response']> {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timesOff',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * The instances of times off in the schedule.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'timeOff-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        path: ['team-id', 'timeOff-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'timeOff-id'],
      },
      params,
    };
  },
};
