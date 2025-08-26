import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}': Operation<
    '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    'delete'
  >;
  'GET /deviceManagement/domainJoinConnectors': Operation<
    '/deviceManagement/domainJoinConnectors',
    'get'
  >;
  'GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}': Operation<
    '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    'get'
  >;
  'PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}': Operation<
    '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    'patch'
  >;
  'POST /deviceManagement/domainJoinConnectors': Operation<
    '/deviceManagement/domainJoinConnectors',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementDomainJoinConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/domainJoinConnectors`
 *
 * A list of connector objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/domainJoinConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/domainJoinConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/domainJoinConnectors',
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
 * `GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}`
 *
 * A list of connector objects.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementDomainJoinConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    paramDefs: [{ name: 'deviceManagementDomainJoinConnector-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/domainJoinConnectors`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/domainJoinConnectors']['body'],
  params?: IEndpoints['POST /deviceManagement/domainJoinConnectors']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/domainJoinConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/domainJoinConnectors',
    paramDefs: [],
    params,
    body,
  };
}
