export * as plans from './plans';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner': Operation<'/users/{user-id}/planner', 'delete'>;
  'GET /users/{user-id}/planner': Operation<'/users/{user-id}/planner', 'get'>;
  'PATCH /users/{user-id}/planner': Operation<'/users/{user-id}/planner', 'patch'>;
  'GET /users/{user-id}/planner/all': Operation<'/users/{user-id}/planner/all', 'get'>;
  'POST /users/{user-id}/planner/all': Operation<'/users/{user-id}/planner/all', 'post'>;
  'GET /users/{user-id}/planner/all/{plannerDelta-id}': Operation<
    '/users/{user-id}/planner/all/{plannerDelta-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/all/{plannerDelta-id}': Operation<
    '/users/{user-id}/planner/all/{plannerDelta-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/planner/all/{plannerDelta-id}': Operation<
    '/users/{user-id}/planner/all/{plannerDelta-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/favoritePlans': Operation<
    '/users/{user-id}/planner/favoritePlans',
    'get'
  >;
  'GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/favoritePlans/{plannerPlan-id}',
    'get'
  >;
  'GET /users/{user-id}/planner/myDayTasks': Operation<
    '/users/{user-id}/planner/myDayTasks',
    'get'
  >;
  'GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/myDayTasks/{plannerTask-id}',
    'get'
  >;
  'GET /users/{user-id}/planner/recentPlans': Operation<
    '/users/{user-id}/planner/recentPlans',
    'get'
  >;
  'GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/recentPlans/{plannerPlan-id}',
    'get'
  >;
  'GET /users/{user-id}/planner/rosterPlans': Operation<
    '/users/{user-id}/planner/rosterPlans',
    'get'
  >;
  'GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/rosterPlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/planner`
 *
 * Selective Planner services available to the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const all = {
  /**
   * `GET /users/{user-id}/planner/all`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/all']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/all']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/all',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/planner/all`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/planner/all']['body'],
    params?: IEndpoints['POST /users/{user-id}/planner/all']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/planner/all']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/planner/all',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/planner/all/{plannerDelta-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/planner/all/{plannerDelta-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/all/{plannerDelta-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/all/{plannerDelta-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerDelta-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/planner/all/{plannerDelta-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/planner/all/{plannerDelta-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/planner/all/{plannerDelta-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/planner/all/{plannerDelta-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/planner/all/{plannerDelta-id}',
      paramDefs: {
        path: ['user-id', 'plannerDelta-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/planner/all/{plannerDelta-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/planner/all/{plannerDelta-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/planner/all/{plannerDelta-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/planner/all/{plannerDelta-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'plannerDelta-id'],
      },
      params,
    };
  },
};

export const favoritePlans = {
  /**
   * `GET /users/{user-id}/planner/favoritePlans`
   *
   * Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/planner/favoritePlans']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/favoritePlans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/favoritePlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}`
   *
   * Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/favoritePlans/{plannerPlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/favoritePlans/{plannerPlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};

export const myDayTasks = {
  /**
   * `GET /users/{user-id}/planner/myDayTasks`
   *
   * Read-only. Nullable. Returns the plannerTasks to be shown in the My Day view of the user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/planner/myDayTasks']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/myDayTasks']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/myDayTasks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}`
   *
   * Read-only. Nullable. Returns the plannerTasks to be shown in the My Day view of the user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/myDayTasks/{plannerTask-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerTask-id'],
      },
      params,
    };
  },
};

export const recentPlans = {
  /**
   * `GET /users/{user-id}/planner/recentPlans`
   *
   * Read-only. Nullable. Returns the plannerPlans that the user recently viewed in apps that support recent plans.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/planner/recentPlans']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/recentPlans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/recentPlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}`
   *
   * Read-only. Nullable. Returns the plannerPlans that the user recently viewed in apps that support recent plans.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/recentPlans/{plannerPlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/recentPlans/{plannerPlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};

export const rosterPlans = {
  /**
   * `GET /users/{user-id}/planner/rosterPlans`
   *
   * Get the list of plannerPlans that are contained by the plannerRosters of which the user is a member.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/planner/rosterPlans']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/rosterPlans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/rosterPlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}`
   *
   * Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/planner/rosterPlans/{plannerPlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/planner/rosterPlans/{plannerPlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'plannerPlan-id'],
      },
      params,
    };
  },
};
