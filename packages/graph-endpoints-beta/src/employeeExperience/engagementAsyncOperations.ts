import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}': Operation<
    '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    'delete'
  >;
  'GET /employeeExperience/engagementAsyncOperations': Operation<
    '/employeeExperience/engagementAsyncOperations',
    'get'
  >;
  'GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}': Operation<
    '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    'get'
  >;
  'PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}': Operation<
    '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    'patch'
  >;
  'POST /employeeExperience/engagementAsyncOperations': Operation<
    '/employeeExperience/engagementAsyncOperations',
    'post'
  >;
}

/**
 * `DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'engagementAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/engagementAsyncOperations`
 *
 * Get an engagementAsyncOperation to track a long-running operation request.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/engagementAsyncOperations']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/engagementAsyncOperations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/engagementAsyncOperations',
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
 * `GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}`
 *
 * Get an engagementAsyncOperation to track a long-running operation request.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'engagementAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/engagementAsyncOperations/{engagementAsyncOperation-id}',
    paramDefs: [{ name: 'engagementAsyncOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/engagementAsyncOperations`
 *
 */
export function create(
  body: IEndpoints['POST /employeeExperience/engagementAsyncOperations']['body'],
  params?: IEndpoints['POST /employeeExperience/engagementAsyncOperations']['parameters']
): EndpointRequest<IEndpoints['POST /employeeExperience/engagementAsyncOperations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/engagementAsyncOperations',
    paramDefs: [],
    params,
    body,
  };
}
