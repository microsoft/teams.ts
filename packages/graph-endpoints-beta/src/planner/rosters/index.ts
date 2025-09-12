import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/rosters/{plannerRoster-id}': Operation<
    '/planner/rosters/{plannerRoster-id}',
    'delete'
  >;
  'GET /planner/rosters': Operation<'/planner/rosters', 'get'>;
  'GET /planner/rosters/{plannerRoster-id}': Operation<
    '/planner/rosters/{plannerRoster-id}',
    'get'
  >;
  'PATCH /planner/rosters/{plannerRoster-id}': Operation<
    '/planner/rosters/{plannerRoster-id}',
    'patch'
  >;
  'POST /planner/rosters': Operation<'/planner/rosters', 'post'>;
  'POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel': Operation<
    '/planner/rosters/{plannerRoster-id}/assignSensitivityLabel',
    'post'
  >;
  'GET /planner/rosters/{plannerRoster-id}/members': Operation<
    '/planner/rosters/{plannerRoster-id}/members',
    'get'
  >;
  'POST /planner/rosters/{plannerRoster-id}/members': Operation<
    '/planner/rosters/{plannerRoster-id}/members',
    'post'
  >;
  'GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    'get'
  >;
  'PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    'patch'
  >;
  'DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    'delete'
  >;
  'GET /planner/rosters/{plannerRoster-id}/plans': Operation<
    '/planner/rosters/{plannerRoster-id}/plans',
    'get'
  >;
  'GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `DELETE /planner/rosters/{plannerRoster-id}`
 *
 * Delete a plannerRoster object.
 */
export function del(
  params?: IEndpoints['DELETE /planner/rosters/{plannerRoster-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/rosters/{plannerRoster-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/rosters/{plannerRoster-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerRoster-id'],
    },
    params,
  };
}

/**
 * `GET /planner/rosters`
 *
 * Read the properties and relationships of a plannerRoster object.
 */
export function list(
  params?: IEndpoints['GET /planner/rosters']['parameters']
): EndpointRequest<IEndpoints['GET /planner/rosters']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /planner/rosters/{plannerRoster-id}`
 *
 * Read the properties and relationships of a plannerRoster object.
 */
export function get(
  params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}']['parameters']
): EndpointRequest<IEndpoints['GET /planner/rosters/{plannerRoster-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters/{plannerRoster-id}',
    paramDefs: {
      path: ['plannerRoster-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /planner/rosters/{plannerRoster-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}']['body'],
  params?: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/rosters/{plannerRoster-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/rosters/{plannerRoster-id}',
    paramDefs: {
      path: ['plannerRoster-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /planner/rosters`
 *
 * Create a new plannerRoster object.
 */
export function create(
  body: IEndpoints['POST /planner/rosters']['body']
): EndpointRequest<IEndpoints['POST /planner/rosters']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/rosters',
    body,
  };
}

export const assignSensitivityLabel = {
  /**
   * `POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel`
   *
   * Assign a sensitivity label to a plannerRoster object.
   */
  create: function create(
    body: IEndpoints['POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel']['body'],
    params?: IEndpoints['POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /planner/rosters/{plannerRoster-id}/assignSensitivityLabel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/planner/rosters/{plannerRoster-id}/assignSensitivityLabel',
      paramDefs: {
        path: ['plannerRoster-id'],
      },
      params,
      body,
    };
  },
};

export const members = {
  /**
   * `GET /planner/rosters/{plannerRoster-id}/members`
   *
   * Get the list of plannerRosterMembers from a plannerRoster.
   */
  list: function list(
    params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/members']['parameters']
  ): EndpointRequest<IEndpoints['GET /planner/rosters/{plannerRoster-id}/members']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/rosters/{plannerRoster-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['plannerRoster-id'],
      },
      params,
    };
  },
  /**
   * `POST /planner/rosters/{plannerRoster-id}/members`
   *
   * Add a member to the plannerRoster object.
   */
  create: function create(
    body: IEndpoints['POST /planner/rosters/{plannerRoster-id}/members']['body'],
    params?: IEndpoints['POST /planner/rosters/{plannerRoster-id}/members']['parameters']
  ): EndpointRequest<IEndpoints['POST /planner/rosters/{plannerRoster-id}/members']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/planner/rosters/{plannerRoster-id}/members',
      paramDefs: {
        path: ['plannerRoster-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}`
   *
   * Read the properties and relationships of a plannerRosterMember object.
   */
  get: function get(
    params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerRoster-id', 'plannerRosterMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['body'],
    params?: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
      paramDefs: {
        path: ['plannerRoster-id', 'plannerRosterMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}`
   *
   * Delete a plannerRosterMember object.
   */
  del: function del(
    params?: IEndpoints['DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerRoster-id', 'plannerRosterMember-id'],
      },
      params,
    };
  },
};

export const plans = {
  /**
   * `GET /planner/rosters/{plannerRoster-id}/plans`
   *
   * Get the plannerPlans contained by the plannerRoster.
   */
  list: function list(
    params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans']['parameters']
  ): EndpointRequest<IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/rosters/{plannerRoster-id}/plans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['plannerRoster-id'],
      },
      params,
    };
  },
  /**
   * `GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}`
   *
   * Retrieves the plans contained by the plannerRoster.
   */
  get: function get(
    params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerRoster-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};
