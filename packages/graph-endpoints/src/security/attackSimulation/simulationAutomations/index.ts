import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    'delete'
  >;
  'GET /security/attackSimulation/simulationAutomations': Operation<
    '/security/attackSimulation/simulationAutomations',
    'get'
  >;
  'GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    'patch'
  >;
  'POST /security/attackSimulation/simulationAutomations': Operation<
    '/security/attackSimulation/simulationAutomations',
    'post'
  >;
  'GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
    'get'
  >;
  'POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
    'post'
  >;
  'GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    'patch'
  >;
  'DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['simulationAutomation-id'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulationAutomations`
 *
 * Get a list of attack simulation automations for a tenant.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/simulationAutomations']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/simulationAutomations']['response']> {
  return {
    method: 'get',
    path: '/security/attackSimulation/simulationAutomations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}`
 *
 * Get an attack simulation automation for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    paramDefs: {
      path: ['simulationAutomation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    paramDefs: {
      path: ['simulationAutomation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/simulationAutomations`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/simulationAutomations']['body']
): EndpointRequest<
  IEndpoints['POST /security/attackSimulation/simulationAutomations']['response']
> {
  return {
    method: 'post',
    path: '/security/attackSimulation/simulationAutomations',
    body,
  };
}

export const runs = {
  /**
   * `GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs`
   *
   * Get a list of the attack simulation automation runs for a tenant.
   */
  list: function list(
    params?: IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['response']
  > {
    return {
      method: 'get',
      path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['simulationAutomation-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['body'],
    params?: IEndpoints['POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['response']
  > {
    return {
      method: 'post',
      path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
      paramDefs: {
        path: ['simulationAutomation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}`
   *
   * A collection of simulation automation runs.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['simulationAutomation-id', 'simulationAutomationRun-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['body'],
    params?: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
      paramDefs: {
        path: ['simulationAutomation-id', 'simulationAutomationRun-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['simulationAutomation-id', 'simulationAutomationRun-id'],
      },
      params,
    };
  },
};
