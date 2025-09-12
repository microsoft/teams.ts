export * as plans from './plans';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner': Operation<'/me/planner', 'delete'>;
  'GET /me/planner': Operation<'/me/planner', 'get'>;
  'PATCH /me/planner': Operation<'/me/planner', 'patch'>;
  'GET /me/planner/all': Operation<'/me/planner/all', 'get'>;
  'POST /me/planner/all': Operation<'/me/planner/all', 'post'>;
  'GET /me/planner/all/{plannerDelta-id}': Operation<'/me/planner/all/{plannerDelta-id}', 'get'>;
  'PATCH /me/planner/all/{plannerDelta-id}': Operation<
    '/me/planner/all/{plannerDelta-id}',
    'patch'
  >;
  'DELETE /me/planner/all/{plannerDelta-id}': Operation<
    '/me/planner/all/{plannerDelta-id}',
    'delete'
  >;
  'GET /me/planner/favoritePlans': Operation<'/me/planner/favoritePlans', 'get'>;
  'GET /me/planner/favoritePlans/{plannerPlan-id}': Operation<
    '/me/planner/favoritePlans/{plannerPlan-id}',
    'get'
  >;
  'GET /me/planner/myDayTasks': Operation<'/me/planner/myDayTasks', 'get'>;
  'GET /me/planner/myDayTasks/{plannerTask-id}': Operation<
    '/me/planner/myDayTasks/{plannerTask-id}',
    'get'
  >;
  'GET /me/planner/recentPlans': Operation<'/me/planner/recentPlans', 'get'>;
  'GET /me/planner/recentPlans/{plannerPlan-id}': Operation<
    '/me/planner/recentPlans/{plannerPlan-id}',
    'get'
  >;
  'GET /me/planner/rosterPlans': Operation<'/me/planner/rosterPlans', 'get'>;
  'GET /me/planner/rosterPlans/{plannerPlan-id}': Operation<
    '/me/planner/rosterPlans/{plannerPlan-id}',
    'get'
  >;
}

/**
 * `DELETE /me/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/planner`
 *
 * Retrieve the properties and relationships of a plannerUser object. The returned properties include the user&#x27;s favorite plans and recently viewed plans.
 */
export function get(
  params?: IEndpoints['GET /me/planner']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/planner`
 *
 * Update the properties of a plannerUser object. You can use this operation to add or remove plans from a user&#x27;s favorite plans list, and to indicate which plans the user has recently viewed.
 */
export function update(
  body: IEndpoints['PATCH /me/planner']['body'],
  params?: IEndpoints['PATCH /me/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
    body,
  };
}

export const all = {
  /**
   * `GET /me/planner/all`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/all']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/all']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/all',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/planner/all`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/planner/all']['body']
  ): EndpointRequest<IEndpoints['POST /me/planner/all']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/planner/all',
      body,
    };
  },
  /**
   * `GET /me/planner/all/{plannerDelta-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/planner/all/{plannerDelta-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/all/{plannerDelta-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/all/{plannerDelta-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerDelta-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/planner/all/{plannerDelta-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/planner/all/{plannerDelta-id}']['body'],
    params?: IEndpoints['PATCH /me/planner/all/{plannerDelta-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/planner/all/{plannerDelta-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/planner/all/{plannerDelta-id}',
      paramDefs: {
        path: ['plannerDelta-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/planner/all/{plannerDelta-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/planner/all/{plannerDelta-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/planner/all/{plannerDelta-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/planner/all/{plannerDelta-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['plannerDelta-id'],
      },
      params,
    };
  },
};

export const favoritePlans = {
  /**
   * `GET /me/planner/favoritePlans`
   *
   * Retrieve a list of plannerPlans that are marked as favorite by a user. You can mark a plan as favorite by updating the plannerUser resource.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/favoritePlans']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/favoritePlans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/favoritePlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/planner/favoritePlans/{plannerPlan-id}`
   *
   * Read-only. Nullable. Returns the plannerPlans that the user marked as favorites.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/favoritePlans/{plannerPlan-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/favoritePlans/{plannerPlan-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/favoritePlans/{plannerPlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id'],
      },
      params,
    };
  },
};

export const myDayTasks = {
  /**
   * `GET /me/planner/myDayTasks`
   *
   * Retrieve a list of plannerTask objects to be shown in the user&#x27;s My Day view within Planner. This method returns the list of tasks that the user added to the My Day view or that are due today.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/myDayTasks']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/myDayTasks']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/myDayTasks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/planner/myDayTasks/{plannerTask-id}`
   *
   * Read-only. Nullable. Returns the plannerTasks to be shown in the My Day view of the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/myDayTasks/{plannerTask-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/myDayTasks/{plannerTask-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/myDayTasks/{plannerTask-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerTask-id'],
      },
      params,
    };
  },
};

export const recentPlans = {
  /**
   * `GET /me/planner/recentPlans`
   *
   * Retrieve a list of plannerPlans recently viewed by a user. You can update recently viewed plans by updating the plannerUser resource.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/recentPlans']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/recentPlans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/recentPlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/planner/recentPlans/{plannerPlan-id}`
   *
   * Read-only. Nullable. Returns the plannerPlans that the user recently viewed in apps that support recent plans.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/recentPlans/{plannerPlan-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/recentPlans/{plannerPlan-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/recentPlans/{plannerPlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id'],
      },
      params,
    };
  },
};

export const rosterPlans = {
  /**
   * `GET /me/planner/rosterPlans`
   *
   * Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
   */
  list: function list(
    params?: IEndpoints['GET /me/planner/rosterPlans']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/rosterPlans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/rosterPlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/planner/rosterPlans/{plannerPlan-id}`
   *
   * Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member.
   */
  get: function get(
    params?: IEndpoints['GET /me/planner/rosterPlans/{plannerPlan-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/planner/rosterPlans/{plannerPlan-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/planner/rosterPlans/{plannerPlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['plannerPlan-id'],
      },
      params,
    };
  },
};
