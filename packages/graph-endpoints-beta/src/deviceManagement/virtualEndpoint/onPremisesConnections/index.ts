export * as runHealthChecks from './runHealthChecks';
export * as updateAdDomainPassword from './updateAdDomainPassword';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcOnPremisesConnection-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcOnPremisesConnection-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'cloudPcOnPremisesConnection-id', in: 'path' }],
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
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections',
    paramDefs: [],
    params,
    body,
  };
}
