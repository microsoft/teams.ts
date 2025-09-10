export * as endUserNotifications from './endUserNotifications';
export * as landingPages from './landingPages';
export * as simulationAutomations from './simulationAutomations';
export * as simulations from './simulations';
export * as trainings from './trainings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation': Operation<'/security/attackSimulation', 'delete'>;
  'GET /security/attackSimulation': Operation<'/security/attackSimulation', 'get'>;
  'PATCH /security/attackSimulation': Operation<'/security/attackSimulation', 'patch'>;
  'GET /security/attackSimulation/loginPages': Operation<
    '/security/attackSimulation/loginPages',
    'get'
  >;
  'POST /security/attackSimulation/loginPages': Operation<
    '/security/attackSimulation/loginPages',
    'post'
  >;
  'GET /security/attackSimulation/loginPages/{loginPage-id}': Operation<
    '/security/attackSimulation/loginPages/{loginPage-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/loginPages/{loginPage-id}': Operation<
    '/security/attackSimulation/loginPages/{loginPage-id}',
    'patch'
  >;
  'DELETE /security/attackSimulation/loginPages/{loginPage-id}': Operation<
    '/security/attackSimulation/loginPages/{loginPage-id}',
    'delete'
  >;
  'GET /security/attackSimulation/operations': Operation<
    '/security/attackSimulation/operations',
    'get'
  >;
  'POST /security/attackSimulation/operations': Operation<
    '/security/attackSimulation/operations',
    'post'
  >;
  'GET /security/attackSimulation/operations/{attackSimulationOperation-id}': Operation<
    '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}': Operation<
    '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    'patch'
  >;
  'DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}': Operation<
    '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    'delete'
  >;
  'GET /security/attackSimulation/payloads': Operation<
    '/security/attackSimulation/payloads',
    'get'
  >;
  'POST /security/attackSimulation/payloads': Operation<
    '/security/attackSimulation/payloads',
    'post'
  >;
  'GET /security/attackSimulation/payloads/{payload-id}': Operation<
    '/security/attackSimulation/payloads/{payload-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/payloads/{payload-id}': Operation<
    '/security/attackSimulation/payloads/{payload-id}',
    'patch'
  >;
  'DELETE /security/attackSimulation/payloads/{payload-id}': Operation<
    '/security/attackSimulation/payloads/{payload-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/attackSimulation`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/attackSimulation']['response']> {
  return {
    method: 'delete',
    path: '/security/attackSimulation',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation`
 *
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation']['response']> {
  return {
    method: 'get',
    path: '/security/attackSimulation',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/attackSimulation`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation']['body']
): EndpointRequest<IEndpoints['PATCH /security/attackSimulation']['response']> {
  return {
    method: 'patch',
    path: '/security/attackSimulation',
    body,
  };
}

export const loginPages = {
  /**
   * `GET /security/attackSimulation/loginPages`
   *
   * Get a list of the loginPage objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/attackSimulation/loginPages']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/attackSimulation/loginPages']['response']> {
    return {
      method: 'get',
      path: '/security/attackSimulation/loginPages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/attackSimulation/loginPages`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/attackSimulation/loginPages']['body']
  ): EndpointRequest<IEndpoints['POST /security/attackSimulation/loginPages']['response']> {
    return {
      method: 'post',
      path: '/security/attackSimulation/loginPages',
      body,
    };
  },
  /**
   * `GET /security/attackSimulation/loginPages/{loginPage-id}`
   *
   * Get a loginPage associated with an attack simulation campaign for a tenant. Login pages are shown to users in attack simulations that use credential harvest and link in attachment social engineering techniques.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/loginPages/{loginPage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/loginPages/{loginPage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/attackSimulation/loginPages/{loginPage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['loginPage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/attackSimulation/loginPages/{loginPage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/attackSimulation/loginPages/{loginPage-id}']['body'],
    params?: IEndpoints['PATCH /security/attackSimulation/loginPages/{loginPage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/attackSimulation/loginPages/{loginPage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/attackSimulation/loginPages/{loginPage-id}',
      paramDefs: {
        path: ['loginPage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/attackSimulation/loginPages/{loginPage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/attackSimulation/loginPages/{loginPage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/attackSimulation/loginPages/{loginPage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/attackSimulation/loginPages/{loginPage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['loginPage-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /security/attackSimulation/operations`
   *
   * Get an attack simulation operation to track a long-running operation request for a tenant.
   */
  list: function list(
    params?: IEndpoints['GET /security/attackSimulation/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/attackSimulation/operations']['response']> {
    return {
      method: 'get',
      path: '/security/attackSimulation/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/attackSimulation/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/attackSimulation/operations']['body']
  ): EndpointRequest<IEndpoints['POST /security/attackSimulation/operations']['response']> {
    return {
      method: 'post',
      path: '/security/attackSimulation/operations',
      body,
    };
  },
  /**
   * `GET /security/attackSimulation/operations/{attackSimulationOperation-id}`
   *
   * Get an attack simulation operation to track a long-running operation request for a tenant.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/operations/{attackSimulationOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/operations/{attackSimulationOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/attackSimulation/operations/{attackSimulationOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['attackSimulationOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}']['body'],
    params?: IEndpoints['PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/attackSimulation/operations/{attackSimulationOperation-id}',
      paramDefs: {
        path: ['attackSimulationOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/attackSimulation/operations/{attackSimulationOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['attackSimulationOperation-id'],
      },
      params,
    };
  },
};

export const payloads = {
  /**
   * `GET /security/attackSimulation/payloads`
   *
   * Get a list of payloads for attack simulation campaigns. This operation expects the mandatory parameter source to filter and query the respective data source.
   */
  list: function list(
    params?: IEndpoints['GET /security/attackSimulation/payloads']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/attackSimulation/payloads']['response']> {
    return {
      method: 'get',
      path: '/security/attackSimulation/payloads',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/attackSimulation/payloads`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/attackSimulation/payloads']['body']
  ): EndpointRequest<IEndpoints['POST /security/attackSimulation/payloads']['response']> {
    return {
      method: 'post',
      path: '/security/attackSimulation/payloads',
      body,
    };
  },
  /**
   * `GET /security/attackSimulation/payloads/{payload-id}`
   *
   * Get an attack simulation campaign payload for a tenant.
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/payloads/{payload-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/payloads/{payload-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/attackSimulation/payloads/{payload-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['payload-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/attackSimulation/payloads/{payload-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/attackSimulation/payloads/{payload-id}']['body'],
    params?: IEndpoints['PATCH /security/attackSimulation/payloads/{payload-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/attackSimulation/payloads/{payload-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/attackSimulation/payloads/{payload-id}',
      paramDefs: {
        path: ['payload-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/attackSimulation/payloads/{payload-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/attackSimulation/payloads/{payload-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/attackSimulation/payloads/{payload-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/attackSimulation/payloads/{payload-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['payload-id'],
      },
      params,
    };
  },
};
