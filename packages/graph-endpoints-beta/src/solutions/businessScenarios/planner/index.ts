export * as planConfiguration from './planConfiguration';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner',
    'patch'
  >;
  'POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/getPlan',
    'post'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration',
    'patch'
  >;
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration',
    'delete'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['businessScenario-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner`
 *
 * Read the properties and relationships of a businessScenarioPlanner object.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner',
    paramDefs: {
      path: ['businessScenario-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner',
    paramDefs: {
      path: ['businessScenario-id'],
    },
    params,
    body,
  };
}

export const getPlan = {
  /**
   * `POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan`
   *
   * Get information about the plannerPlan mapped to a given target. If a plannerPlan doesn&#x27;t exist for the specified target at the time of the request, a new plan will be created for the businessScenario.
   */
  create: function create(
    body: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan']['body'],
    params?: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/getPlan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/getPlan',
      paramDefs: {
        path: ['businessScenario-id'],
      },
      params,
      body,
    };
  },
};

export const taskConfiguration = {
  /**
   * `GET /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration`
   *
   * Read the properties and relationships of a plannerTaskConfiguration object.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['businessScenario-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration`
   *
   * Update the properties of a plannerTaskConfiguration object.
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration']['body'],
    params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration',
      paramDefs: {
        path: ['businessScenario-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/businessScenarios/{businessScenario-id}/planner/taskConfiguration',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessScenario-id'],
      },
      params,
    };
  },
};
