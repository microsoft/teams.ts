import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/userFlows/{identityUserFlow-id}': Operation<
    '/identity/userFlows/{identityUserFlow-id}',
    'delete'
  >;
  'GET /identity/userFlows': Operation<'/identity/userFlows', 'get'>;
  'GET /identity/userFlows/{identityUserFlow-id}': Operation<
    '/identity/userFlows/{identityUserFlow-id}',
    'get'
  >;
  'PATCH /identity/userFlows/{identityUserFlow-id}': Operation<
    '/identity/userFlows/{identityUserFlow-id}',
    'patch'
  >;
  'POST /identity/userFlows': Operation<'/identity/userFlows', 'post'>;
}

/**
 * `DELETE /identity/userFlows/{identityUserFlow-id}`
 *
 * Delete an existing userFlow object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identity/userFlows/{identityUserFlow-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /identity/userFlows/{identityUserFlow-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/userFlows/{identityUserFlow-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'identityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/userFlows`
 *
 * Retrieve a list of userflows.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identity/userFlows']['parameters']
): EndpointRequest<IEndpoints['GET /identity/userFlows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/userFlows',
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
 * `GET /identity/userFlows/{identityUserFlow-id}`
 *
 * Retrieve the properties and associations for an userFlow object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identity/userFlows/{identityUserFlow-id}']['parameters']
): EndpointRequest<IEndpoints['GET /identity/userFlows/{identityUserFlow-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/userFlows/{identityUserFlow-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'identityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/userFlows/{identityUserFlow-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identity/userFlows/{identityUserFlow-id}']['body'],
  params?: IEndpoints['PATCH /identity/userFlows/{identityUserFlow-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /identity/userFlows/{identityUserFlow-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/userFlows/{identityUserFlow-id}',
    paramDefs: [{ name: 'identityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/userFlows`
 *
 * Create a new userFlow object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identity/userFlows']['body'],
  params?: IEndpoints['POST /identity/userFlows']['parameters']
): EndpointRequest<IEndpoints['POST /identity/userFlows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/userFlows',
    paramDefs: [],
    params,
    body,
  };
}
