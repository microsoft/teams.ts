export * as resources from './resources';
export * as roleAssignmentRequests from './roleAssignmentRequests';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as roleSettings from './roleSettings';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}',
    'delete'
  >;
  'GET /privilegedAccess': Operation<'/privilegedAccess', 'get'>;
  'GET /privilegedAccess/{privilegedAccess-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}',
    'patch'
  >;
  'POST /privilegedAccess': Operation<'/privilegedAccess', 'post'>;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccess-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedAccess']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedAccess/{privilegedAccess-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}',
    paramDefs: {
      path: ['privilegedAccess-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}',
    paramDefs: {
      path: ['privilegedAccess-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess']['body']
): EndpointRequest<IEndpoints['POST /privilegedAccess']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess',
    body,
  };
}
