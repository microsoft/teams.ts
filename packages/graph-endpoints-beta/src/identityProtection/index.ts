export * as riskyServicePrincipals from './riskyServicePrincipals';
export * as riskyUsers from './riskyUsers';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /identityProtection': Operation<'/identityProtection', 'get'>;
  'PATCH /identityProtection': Operation<'/identityProtection', 'patch'>;
  'GET /identityProtection/riskDetections': Operation<'/identityProtection/riskDetections', 'get'>;
  'POST /identityProtection/riskDetections': Operation<
    '/identityProtection/riskDetections',
    'post'
  >;
  'GET /identityProtection/riskDetections/{riskDetection-id}': Operation<
    '/identityProtection/riskDetections/{riskDetection-id}',
    'get'
  >;
  'PATCH /identityProtection/riskDetections/{riskDetection-id}': Operation<
    '/identityProtection/riskDetections/{riskDetection-id}',
    'patch'
  >;
  'DELETE /identityProtection/riskDetections/{riskDetection-id}': Operation<
    '/identityProtection/riskDetections/{riskDetection-id}',
    'delete'
  >;
  'GET /identityProtection/servicePrincipalRiskDetections': Operation<
    '/identityProtection/servicePrincipalRiskDetections',
    'get'
  >;
  'POST /identityProtection/servicePrincipalRiskDetections': Operation<
    '/identityProtection/servicePrincipalRiskDetections',
    'post'
  >;
  'GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}': Operation<
    '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    'get'
  >;
  'PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}': Operation<
    '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    'patch'
  >;
  'DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}': Operation<
    '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
    'delete'
  >;
}

/**
 * `GET /identityProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /identityProtection']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection']['body']
): EndpointRequest<IEndpoints['PATCH /identityProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProtection',
    body,
  };
}

export const riskDetections = {
  /**
   * `GET /identityProtection/riskDetections`
   *
   * Retrieve the properties of a collection of riskDetection objects.
   */
  list: function list(
    params?: IEndpoints['GET /identityProtection/riskDetections']['parameters']
  ): EndpointRequest<IEndpoints['GET /identityProtection/riskDetections']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProtection/riskDetections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityProtection/riskDetections`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/riskDetections']['body']
  ): EndpointRequest<IEndpoints['POST /identityProtection/riskDetections']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityProtection/riskDetections',
      body,
    };
  },
  /**
   * `GET /identityProtection/riskDetections/{riskDetection-id}`
   *
   * Retrieve the properties of a riskDetection object.
   */
  get: function get(
    params?: IEndpoints['GET /identityProtection/riskDetections/{riskDetection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityProtection/riskDetections/{riskDetection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProtection/riskDetections/{riskDetection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['riskDetection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityProtection/riskDetections/{riskDetection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityProtection/riskDetections/{riskDetection-id}']['body'],
    params?: IEndpoints['PATCH /identityProtection/riskDetections/{riskDetection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityProtection/riskDetections/{riskDetection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityProtection/riskDetections/{riskDetection-id}',
      paramDefs: {
        path: ['riskDetection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityProtection/riskDetections/{riskDetection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityProtection/riskDetections/{riskDetection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityProtection/riskDetections/{riskDetection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityProtection/riskDetections/{riskDetection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['riskDetection-id'],
      },
      params,
    };
  },
};

export const servicePrincipalRiskDetections = {
  /**
   * `GET /identityProtection/servicePrincipalRiskDetections`
   *
   * Retrieve the properties of a collection of servicePrincipalRiskDetection objects.
   */
  list: function list(
    params?: IEndpoints['GET /identityProtection/servicePrincipalRiskDetections']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityProtection/servicePrincipalRiskDetections']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProtection/servicePrincipalRiskDetections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityProtection/servicePrincipalRiskDetections`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityProtection/servicePrincipalRiskDetections']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityProtection/servicePrincipalRiskDetections']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityProtection/servicePrincipalRiskDetections',
      body,
    };
  },
  /**
   * `GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}`
   *
   * Read the properties and relationships of a servicePrincipalRiskDetection object.
   */
  get: function get(
    params?: IEndpoints['GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipalRiskDetection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['body'],
    params?: IEndpoints['PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
      paramDefs: {
        path: ['servicePrincipalRiskDetection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipalRiskDetection-id'],
      },
      params,
    };
  },
};
