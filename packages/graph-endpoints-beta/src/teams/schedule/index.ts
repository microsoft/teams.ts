export * as timeCards from './timeCards';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule': Operation<'/teams/{team-id}/schedule', 'delete'>;
  'GET /teams/{team-id}/schedule': Operation<'/teams/{team-id}/schedule', 'get'>;
  'PUT /teams/{team-id}/schedule': Operation<'/teams/{team-id}/schedule', 'put'>;
  'GET /teams/{team-id}/schedule/dayNotes': Operation<'/teams/{team-id}/schedule/dayNotes', 'get'>;
  'POST /teams/{team-id}/schedule/dayNotes': Operation<
    '/teams/{team-id}/schedule/dayNotes',
    'post'
  >;
  'GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/offerShiftRequests': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests',
    'get'
  >;
  'POST /teams/{team-id}/schedule/offerShiftRequests': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests',
    'post'
  >;
  'GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}': Operation<
    '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests',
    'get'
  >;
  'POST /teams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests',
    'post'
  >;
  'GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/openShifts': Operation<
    '/teams/{team-id}/schedule/openShifts',
    'get'
  >;
  'POST /teams/{team-id}/schedule/openShifts': Operation<
    '/teams/{team-id}/schedule/openShifts',
    'post'
  >;
  'GET /teams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/schedulingGroups': Operation<
    '/teams/{team-id}/schedule/schedulingGroups',
    'get'
  >;
  'POST /teams/{team-id}/schedule/schedulingGroups': Operation<
    '/teams/{team-id}/schedule/schedulingGroups',
    'post'
  >;
  'GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'delete'
  >;
  'POST /teams/{team-id}/schedule/share': Operation<'/teams/{team-id}/schedule/share', 'post'>;
  'GET /teams/{team-id}/schedule/shifts': Operation<'/teams/{team-id}/schedule/shifts', 'get'>;
  'POST /teams/{team-id}/schedule/shifts': Operation<'/teams/{team-id}/schedule/shifts', 'post'>;
  'GET /teams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/teams/{team-id}/schedule/shifts/{shift-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/teams/{team-id}/schedule/shifts/{shift-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/teams/{team-id}/schedule/shifts/{shift-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/shiftsRoleDefinitions': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions',
    'get'
  >;
  'POST /teams/{team-id}/schedule/shiftsRoleDefinitions': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions',
    'post'
  >;
  'GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests',
    'get'
  >;
  'POST /teams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests',
    'post'
  >;
  'GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timeOffReasons': Operation<
    '/teams/{team-id}/schedule/timeOffReasons',
    'get'
  >;
  'POST /teams/{team-id}/schedule/timeOffReasons': Operation<
    '/teams/{team-id}/schedule/timeOffReasons',
    'post'
  >;
  'GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timeOffRequests': Operation<
    '/teams/{team-id}/schedule/timeOffRequests',
    'get'
  >;
  'POST /teams/{team-id}/schedule/timeOffRequests': Operation<
    '/teams/{team-id}/schedule/timeOffRequests',
    'post'
  >;
  'GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timesOff': Operation<'/teams/{team-id}/schedule/timesOff', 'get'>;
  'POST /teams/{team-id}/schedule/timesOff': Operation<
    '/teams/{team-id}/schedule/timesOff',
    'post'
  >;
  'GET /teams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id'],
    },
    params,
  };
}

/**
  * `GET /teams/{team-id}/schedule`
  *
  * Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).
When clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the provisionStatus property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the provisionStatusCode property. Clients can also inspect the configuration of the schedule.
  */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PUT /teams/{team-id}/schedule`
  *
  * Create or replace a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).
When clients use the PUT method, if the schedule is provisioned, the operation replaces the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the provisionStatus property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the provisionStatusCode property. Clients can also inspect the configuration of the schedule.
  */
export function set(
  body: IEndpoints['PUT /teams/{team-id}/schedule']['body'],
  params?: IEndpoints['PUT /teams/{team-id}/schedule']['parameters']
): EndpointRequest<IEndpoints['PUT /teams/{team-id}/schedule']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/teams/{team-id}/schedule',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const dayNotes = {
  /**
   * `GET /teams/{team-id}/schedule/dayNotes`
   *
   * The day notes in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/dayNotes']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/dayNotes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/dayNotes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/dayNotes`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/dayNotes']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/dayNotes']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/dayNotes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/dayNotes',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   * The day notes in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'dayNote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   * Update the properties of a day note.
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
      paramDefs: {
        path: ['team-id', 'dayNote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
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
   * `GET /teams/{team-id}/schedule/offerShiftRequests`
   *
   * Retrieve the properties and relationships of all offerShiftRequest objects in a team.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/offerShiftRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/offerShiftRequests`
   *
   * Create an instance of an offerShiftRequest.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/offerShiftRequests']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/offerShiftRequests']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/offerShiftRequests']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/offerShiftRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   * Retrieve the properties and relationships of an offerShiftRequest object.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'offerShiftRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
      paramDefs: {
        path: ['team-id', 'offerShiftRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}',
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
   * `GET /teams/{team-id}/schedule/openShiftChangeRequests`
   *
   * Retrieve a list of openShiftChangeRequest objects in a team.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/openShiftChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/openShiftChangeRequests`
   *
   * Create instance of an openShiftChangeRequest object.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/openShiftChangeRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   * Retrieve the properties and relationships of an openShiftChangeRequest object.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'openShiftChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
      paramDefs: {
        path: ['team-id', 'openShiftChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
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
   * `GET /teams/{team-id}/schedule/openShifts`
   *
   * List openshift objects in a team.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/openShifts']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/openShifts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/openShifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/openShifts`
   *
   * Create an instance of an openShift object.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/openShifts']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/openShifts']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/openShifts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/openShifts',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * Retrieve the properties and relationships of an openshift object.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'openShift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * Update the properties of an openShift object.
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/openShifts/{openShift-id}',
      paramDefs: {
        path: ['team-id', 'openShift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}`
   *
   * Delete an openShift object.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/openShifts/{openShift-id}',
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
   * `GET /teams/{team-id}/schedule/schedulingGroups`
   *
   * Get the list of schedulingGroups in this schedule.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/schedulingGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/schedulingGroups`
   *
   * Create a new schedulingGroup.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/schedulingGroups']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/schedulingGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/schedulingGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/schedulingGroups',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * Retrieve the properties and relationships of a schedulingGroup by ID.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'schedulingGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
   *
   * Replace an existing schedulingGroup. If the specified schedulingGroup doesn&#x27;t exist, this method returns 404 Not found.
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
      paramDefs: {
        path: ['team-id', 'schedulingGroup-id'],
      },
      params,
      body,
    };
  },
  /**
  * `DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
  *
  * Mark a schedulingGroup as inactive by setting its isActive property.
This method does not remove the schedulingGroup from the schedule. Existing shift instances assigned to the scheduling group remain part of the group.
  */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
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
   * `POST /teams/{team-id}/schedule/share`
   *
   * Share a schedule time range with schedule members. This action makes the collections of shift, openshift and timeOff items in the specified time range of the schedule viewable by the specified team members, including employees and managers. Each shift, openshift and timeOff instance in a schedule supports a draft version and a shared version of the item. The draft version is viewable only by managers, and the shared version is viewable by employees and managers. For each shift, openshift and timeOff instance in the specified time range, the share action updates the shared version from the draft version, so that in addition to managers, employees can also view the most current information about the item. The notifyTeam parameter further specifies which employees can view the item.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/share']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/share']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/share']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/share',
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
   * `GET /teams/{team-id}/schedule/shifts`
   *
   * The shifts in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/shifts']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/shifts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/shifts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/shifts`
   *
   * Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/shifts']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/shifts']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/shifts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/shifts',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/shifts/{shift-id}`
   *
   * Retrieve the properties and relationships of a shift object by ID.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/shifts/{shift-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'shift-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/shifts/{shift-id}`
   *
   * Replace an existing shift. If the specified shift doesn&#x27;t exist, this method returns 404 Not found. The duration of a shift can&#x27;t be less than 1 minute or longer than 24 hours.
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        path: ['team-id', 'shift-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/shifts/{shift-id}`
   *
   * Delete a shift from the schedule.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/shifts/{shift-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/schedule/shifts/{shift-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/shifts/{shift-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'shift-id'],
      },
      params,
    };
  },
};

export const shiftsRoleDefinitions = {
  /**
   * `GET /teams/{team-id}/schedule/shiftsRoleDefinitions`
   *
   * The definitions of the roles in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/shiftsRoleDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/shiftsRoleDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/shiftsRoleDefinitions']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/shiftsRoleDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/shiftsRoleDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/shiftsRoleDefinitions',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
   *
   * The definitions of the roles in the schedule.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'shiftsRoleDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
      paramDefs: {
        path: ['team-id', 'shiftsRoleDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'shiftsRoleDefinition-id'],
      },
      params,
    };
  },
};

export const swapShiftsChangeRequests = {
  /**
   * `GET /teams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   * Retrieve a list of swapShiftsChangeRequest objects in a team.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/swapShiftsChangeRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/swapShiftsChangeRequests`
   *
   * Create an instance of a swapShiftsChangeRequest object.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/swapShiftsChangeRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   * Retrieve the properties and relationships of a swapShiftsChangeRequest object.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
      paramDefs: {
        path: ['team-id', 'swapShiftsChangeRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
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
   * `GET /teams/{team-id}/schedule/timeOffReasons`
   *
   * The set of reasons for a time off in the schedule.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/timeOffReasons',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/timeOffReasons`
   *
   * Create a new timeOffReason.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timeOffReasons']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeOffReasons']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeOffReasons']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeOffReasons',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * Retrieve the properties and relationships of a timeOffReason object by ID.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'timeOffReason-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * Replace an existing timeOffReason. If the specified timeOffReason doesn&#x27;t exist, this method returns 404 Not found.
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
      paramDefs: {
        path: ['team-id', 'timeOffReason-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
   *
   * Mark a timeOffReason as inactive by setting the isActive property. Every team must include at least one timeOffReason. This method doesn&#x27;t remove the specified timeOffReason instance. timeOffItem instances that were assigned this reason remain assigned to this reason.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
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
   * `GET /teams/{team-id}/schedule/timeOffRequests`
   *
   * Retrieve a list of timeoffrequest objects in the team.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/timeOffRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/timeOffRequests`
   *
   * Create instance of a timeoffrequest object.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timeOffRequests']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeOffRequests']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeOffRequests']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeOffRequests',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   * Retrieve the properties and relationships of a timeoffrequest object.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'timeOffRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
      paramDefs: {
        path: ['team-id', 'timeOffRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
   *
   * Delete a timeOffRequest object.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
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
   * `GET /teams/{team-id}/schedule/timesOff`
   *
   * Get the list of timeOff instances in a schedule.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/schedule/timesOff']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timesOff']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/timesOff',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/schedule/timesOff`
   *
   * Create a new timeOff instance in a schedule.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timesOff']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timesOff']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timesOff']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timesOff',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * Retrieve the properties and relationships of a timeOff object by ID.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'timeOff-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * Replace an existing timeOff. If the specified timeOff doesn&#x27;t exist, this method returns 404 Not found.
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        path: ['team-id', 'timeOff-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}`
   *
   * Delete a timeOff instance from a schedule.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'timeOff-id'],
      },
      params,
    };
  },
};
