import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}': Operation<
    '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    'delete'
  >;
  'GET /identity/userFlowAttributes': Operation<'/identity/userFlowAttributes', 'get'>;
  'GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}': Operation<
    '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    'get'
  >;
  'PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}': Operation<
    '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    'patch'
  >;
  'POST /identity/userFlowAttributes': Operation<'/identity/userFlowAttributes', 'post'>;
}

/**
 * `DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}`
 *
 * Delete a custom identityUserFlowAttribute.
 */
export function del(
  params?: IEndpoints['DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'identityUserFlowAttribute-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/userFlowAttributes`
 *
 * Retrieve a list of identityUserFlowAttribute objects.
 */
export function list(
  params?: IEndpoints['GET /identity/userFlowAttributes']['parameters']
): EndpointRequest<IEndpoints['GET /identity/userFlowAttributes']['response']> {
  return {
    method: 'get',
    path: '/identity/userFlowAttributes',
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
 * `GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}`
 *
 * Retrieve the properties and relationships of a identityUserFlowAttribute object.
 */
export function get(
  params?: IEndpoints['GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'identityUserFlowAttribute-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}`
 *
 * Update the properties of a custom identityUserFlowAttribute object.
 */
export function update(
  body: IEndpoints['PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['body'],
  params?: IEndpoints['PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/userFlowAttributes/{identityUserFlowAttribute-id}',
    paramDefs: [{ name: 'identityUserFlowAttribute-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/userFlowAttributes`
 *
 * Create a new custom identityUserFlowAttribute object.
 */
export function create(
  body: IEndpoints['POST /identity/userFlowAttributes']['body'],
  params?: IEndpoints['POST /identity/userFlowAttributes']['parameters']
): EndpointRequest<IEndpoints['POST /identity/userFlowAttributes']['response']> {
  return {
    method: 'post',
    path: '/identity/userFlowAttributes',
    paramDefs: [],
    params,
    body,
  };
}
