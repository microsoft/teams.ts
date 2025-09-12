export * as timeCards from './timeCards';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule': Operation<
    '/groups/{group-id}/team/schedule',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule': Operation<'/groups/{group-id}/team/schedule', 'get'>;
  'PUT /groups/{group-id}/team/schedule': Operation<'/groups/{group-id}/team/schedule', 'put'>;
  'GET /groups/{group-id}/team/schedule/dayNotes': Operation<
    '/groups/{group-id}/team/schedule/dayNotes',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/dayNotes': Operation<
    '/groups/{group-id}/team/schedule/dayNotes',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}': Operation<
    '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}': Operation<
    '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}': Operation<
    '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/offerShiftRequests': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/offerShiftRequests': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/openShiftChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/openShiftChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/openShifts': Operation<
    '/groups/{group-id}/team/schedule/openShifts',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/openShifts': Operation<
    '/groups/{group-id}/team/schedule/openShifts',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}': Operation<
    '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}': Operation<
    '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}': Operation<
    '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/schedulingGroups': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/schedulingGroups': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    'delete'
  >;
  'POST /groups/{group-id}/team/schedule/share': Operation<
    '/groups/{group-id}/team/schedule/share',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/shifts': Operation<
    '/groups/{group-id}/team/schedule/shifts',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/shifts': Operation<
    '/groups/{group-id}/team/schedule/shifts',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/shifts/{shift-id}': Operation<
    '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}': Operation<
    '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}': Operation<
    '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffReasons': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/timeOffReasons': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffRequests': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/timeOffRequests': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timesOff': Operation<
    '/groups/{group-id}/team/schedule/timesOff',
    'get'
  >;
  'POST /groups/{group-id}/team/schedule/timesOff': Operation<
    '/groups/{group-id}/team/schedule/timesOff',
    'post'
  >;
  'GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}': Operation<
    '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}': Operation<
    '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}': Operation<
    '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule`
 *
 * The schedule of shifts for this team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule',
    paramDefs: {
      path: ['group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PUT /groups/{group-id}/team/schedule`
 *
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/team/schedule']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/team/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /groups/{group-id}/team/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/groups/{group-id}/team/schedule',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const dayNotes = {
  /**
   * `GET /groups/{group-id}/team/schedule/dayNotes`
   *
   * The day notes in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/dayNotes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/dayNotes`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/dayNotes']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/dayNotes']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/dayNotes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/dayNotes',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}`
   *
   * The day notes in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'dayNote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        path: ['group-id', 'dayNote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'dayNote-id'],
      },
      params,
    };
  },
};

export const offerShiftRequests = {
  /**
   * `GET /groups/{group-id}/team/schedule/offerShiftRequests`
   *
   * The offer requests for shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/offerShiftRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/offerShiftRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/offerShiftRequests']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/offerShiftRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/offerShiftRequests',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   * The offer requests for shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'offerShiftRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        path: ['group-id', 'offerShiftRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'offerShiftRequest-id'],
      },
      params,
    };
  },
};

export const openShiftChangeRequests = {
  /**
   * `GET /groups/{group-id}/team/schedule/openShiftChangeRequests`
   *
   * The open shift requests in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/openShiftChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/openShiftChangeRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/openShiftChangeRequests']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/openShiftChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/openShiftChangeRequests',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   * The open shift requests in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'openShiftChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        path: ['group-id', 'openShiftChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'openShiftChangeRequest-id'],
      },
      params,
    };
  },
};

export const openShifts = {
  /**
   * `GET /groups/{group-id}/team/schedule/openShifts`
   *
   * The set of open shifts in a scheduling group in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShifts']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/openShifts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/openShifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/openShifts`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/openShifts']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/openShifts']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/openShifts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/openShifts',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}`
   *
   * The set of open shifts in a scheduling group in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'openShift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
      paramDefs: {
        path: ['group-id', 'openShift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'openShift-id'],
      },
      params,
    };
  },
};

export const schedulingGroups = {
  /**
   * `GET /groups/{group-id}/team/schedule/schedulingGroups`
   *
   * The logical grouping of users in the schedule (usually by role).
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/schedulingGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/schedulingGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/schedulingGroups']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/schedulingGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/schedulingGroups',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * The logical grouping of users in the schedule (usually by role).
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'schedulingGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        path: ['group-id', 'schedulingGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'schedulingGroup-id'],
      },
      params,
    };
  },
};

export const share = {
  /**
   * `POST /groups/{group-id}/team/schedule/share`
   *
   * Share a schedule time range with schedule members. This action makes the collections of shift, openshift and timeOff items in the specified time range of the schedule viewable by the specified team members, including employees and managers. Each shift, openshift and timeOff instance in a schedule supports a draft version and a shared version of the item. The draft version is viewable only by managers, and the shared version is viewable by employees and managers. For each shift, openshift and timeOff instance in the specified time range, the share action updates the shared version from the draft version, so that in addition to managers, employees can also view the most current information about the item. The notifyTeam parameter further specifies which employees can view the item.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/share']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/share']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/share']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/share',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const shifts = {
  /**
   * `GET /groups/{group-id}/team/schedule/shifts`
   *
   * The shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/shifts']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/shifts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/shifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/shifts`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/shifts']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/shifts']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/shifts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/shifts',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/shifts/{shift-id}`
   *
   * The shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/shifts/{shift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/shifts/{shift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'shift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/shifts/{shift-id}',
      paramDefs: {
        path: ['group-id', 'shift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/shifts/{shift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'shift-id'],
      },
      params,
    };
  },
};

export const shiftsRoleDefinitions = {
  /**
   * `GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions`
   *
   * The definitions of the roles in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
   *
   * The definitions of the roles in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'shiftsRoleDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
      paramDefs: {
        path: ['group-id', 'shiftsRoleDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'shiftsRoleDefinition-id'],
      },
      params,
    };
  },
};

export const swapShiftsChangeRequests = {
  /**
   * `GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests`
   *
   * The swap requests for shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   * The swap requests for shifts in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'swapShiftsChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        path: ['group-id', 'swapShiftsChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'swapShiftsChangeRequest-id'],
      },
      params,
    };
  },
};

export const timeOffReasons = {
  /**
   * `GET /groups/{group-id}/team/schedule/timeOffReasons`
   *
   * The set of reasons for a time off in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/timeOffReasons',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/timeOffReasons`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffReasons']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/timeOffReasons']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timeOffReasons',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * The set of reasons for a time off in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'timeOffReason-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        path: ['group-id', 'timeOffReason-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'timeOffReason-id'],
      },
      params,
    };
  },
};

export const timeOffRequests = {
  /**
   * `GET /groups/{group-id}/team/schedule/timeOffRequests`
   *
   * The time off requests in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/timeOffRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/timeOffRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffRequests']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/timeOffRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timeOffRequests',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   * The time off requests in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'timeOffRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        path: ['group-id', 'timeOffRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'timeOffRequest-id'],
      },
      params,
    };
  },
};

export const timesOff = {
  /**
   * `GET /groups/{group-id}/team/schedule/timesOff`
   *
   * The instances of times off in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/timesOff']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/timesOff']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/timesOff',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/schedule/timesOff`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/timesOff']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timesOff']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/timesOff']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timesOff',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}`
   *
   * The instances of times off in the schedule.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'timeOff-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        path: ['group-id', 'timeOff-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'timeOff-id'],
      },
      params,
    };
  },
};
