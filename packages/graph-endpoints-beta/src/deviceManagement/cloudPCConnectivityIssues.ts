import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}': Operation<
    '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    'delete'
  >;
  'GET /deviceManagement/cloudPCConnectivityIssues': Operation<
    '/deviceManagement/cloudPCConnectivityIssues',
    'get'
  >;
  'GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}': Operation<
    '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    'get'
  >;
  'PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}': Operation<
    '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    'patch'
  >;
  'POST /deviceManagement/cloudPCConnectivityIssues': Operation<
    '/deviceManagement/cloudPCConnectivityIssues',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPCConnectivityIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/cloudPCConnectivityIssues`
 *
 * The list of CloudPC Connectivity Issue.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudPCConnectivityIssues',
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
 * `GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}`
 *
 * The list of CloudPC Connectivity Issue.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPCConnectivityIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    paramDefs: [{ name: 'cloudPCConnectivityIssue-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/cloudPCConnectivityIssues`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudPCConnectivityIssues']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudPCConnectivityIssues']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/cloudPCConnectivityIssues']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudPCConnectivityIssues',
    paramDefs: [],
    params,
    body,
  };
}
