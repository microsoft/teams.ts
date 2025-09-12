import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/onPremisesConnections': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/onPremisesConnections': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}`
 *
 * Delete a specific cloudPcOnPremisesConnection object. When you delete an Azure network connection, permissions to the service are removed from the specified Azure resources. You can&#x27;t delete an Azure network connection when it&#x27;s in use, as indicated by the inUse property.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcOnPremisesConnection-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/onPremisesConnections`
 *
 * Get a list of the cloudPcOnPremisesConnection objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/onPremisesConnections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/onPremisesConnections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}`
 *
 * Read the properties and relationships of the cloudPcOnPremisesConnection object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}',
    paramDefs: {
      path: ['cloudPcOnPremisesConnection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}`
 *
 * Update the properties of a cloudPcOnPremisesConnection object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}',
    paramDefs: {
      path: ['cloudPcOnPremisesConnection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/onPremisesConnections`
 *
 * Create a new cloudPcOnPremisesConnection object for provisioning Cloud PCs.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections',
    body,
  };
}

export const runHealthChecks = {
  /**
   * `POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks`
   *
   * Run health checks on the cloudPcOnPremisesConnection object. It triggers a new health check for this cloudPcOnPremisesConnection object and change the healthCheckStatus and healthCheckStatusDetails properties when check finished.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks',
      paramDefs: {
        path: ['cloudPcOnPremisesConnection-id'],
      },
      params,
    };
  },
};

export const updateAdDomainPassword = {
  /**
   * `POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword`
   *
   * Update the Active Directory domain password for a cloudPcOnPremisesConnection object. This API is supported when the type of the cloudPcOnPremisesConnection object is hybridAzureADJoin.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword',
      paramDefs: {
        path: ['cloudPcOnPremisesConnection-id'],
      },
      params,
      body,
    };
  },
};
