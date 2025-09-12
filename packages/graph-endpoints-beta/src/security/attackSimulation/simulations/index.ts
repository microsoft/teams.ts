import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/simulations/{simulation-id}': Operation<
    '/security/attackSimulation/simulations/{simulation-id}',
    'delete'
  >;
  'GET /security/attackSimulation/simulations': Operation<
    '/security/attackSimulation/simulations',
    'get'
  >;
  'GET /security/attackSimulation/simulations/{simulation-id}': Operation<
    '/security/attackSimulation/simulations/{simulation-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/simulations/{simulation-id}': Operation<
    '/security/attackSimulation/simulations/{simulation-id}',
    'patch'
  >;
  'POST /security/attackSimulation/simulations': Operation<
    '/security/attackSimulation/simulations',
    'post'
  >;
  'GET /security/attackSimulation/simulations/{simulation-id}/landingPage': Operation<
    '/security/attackSimulation/simulations/{simulation-id}/landingPage',
    'get'
  >;
  'GET /security/attackSimulation/simulations/{simulation-id}/loginPage': Operation<
    '/security/attackSimulation/simulations/{simulation-id}/loginPage',
    'get'
  >;
  'GET /security/attackSimulation/simulations/{simulation-id}/payload': Operation<
    '/security/attackSimulation/simulations/{simulation-id}/payload',
    'get'
  >;
}

/**
 * `DELETE /security/attackSimulation/simulations/{simulation-id}`
 *
 * Delete an attack simulation campaign for a tenant.
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/simulations/{simulation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/simulations/{simulation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/simulations/{simulation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['simulation-id'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulations`
 *
 * Get a list of attack simulation campaigns for a tenant.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/simulations']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/simulations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/simulations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulations/{simulation-id}`
 *
 * Get an attack simulation campaign for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/simulations/{simulation-id}',
    paramDefs: {
      path: ['simulation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/simulations/{simulation-id}`
 *
 * Update an attack simulation campaign for a tenant.
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/simulations/{simulation-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/simulations/{simulation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/simulations/{simulation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/simulations/{simulation-id}',
    paramDefs: {
      path: ['simulation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/simulations`
 *
 * Create an attack simulation campaign for a tenant.
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/simulations']['body']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/simulations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/simulations',
    body,
  };
}

export const landingPage = {
  /**
   * `GET /security/attackSimulation/simulations/{simulation-id}/landingPage`
   *
   * The landing page associated with a simulation during its creation.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/landingPage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/landingPage']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/attackSimulation/simulations/{simulation-id}/landingPage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['simulation-id'],
      },
      params,
    };
  },
};

export const loginPage = {
  /**
   * `GET /security/attackSimulation/simulations/{simulation-id}/loginPage`
   *
   * The login page associated with a simulation during its creation.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/loginPage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/loginPage']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/attackSimulation/simulations/{simulation-id}/loginPage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['simulation-id'],
      },
      params,
    };
  },
};

export const payload = {
  /**
   * `GET /security/attackSimulation/simulations/{simulation-id}/payload`
   *
   * The payload associated with a simulation during its creation.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/payload']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/payload']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/attackSimulation/simulations/{simulation-id}/payload',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['simulation-id'],
      },
      params,
    };
  },
};
