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
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}`
 *
 * Delete a specific cloudPcOnPremisesConnection object. When you delete an Azure network connection, permissions to the service are removed from the specified Azure resources. You cannot delete an Azure network connection when it&#x27;s in use, as indicated by the inUse property.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}']['response']
> {
  return {
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
 * List properties and relationships of the cloudPcOnPremisesConnection objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/onPremisesConnections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/onPremisesConnections']['response']
> {
  return {
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
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections',
    body,
  };
}

export const runHealthChecks = {
  /**
   * `POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks`
   *
   * Run health checks on the cloudPcOnPremisesConnection object. It triggers a new health check for the cloudPcOnPremisesConnection (../resources/cloudpconpremisesconnection.md) object and changes the healthCheckStatus and [healthCheckStatusDetail properties when check finished.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/runHealthChecks',
      paramDefs: {
        path: ['cloudPcOnPremisesConnection-id'],
      },
      params,
    };
  },
};
