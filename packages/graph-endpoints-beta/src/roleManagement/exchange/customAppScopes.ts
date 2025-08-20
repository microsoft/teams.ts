import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    'delete'
  >;
  'GET /roleManagement/exchange/customAppScopes': Operation<
    '/roleManagement/exchange/customAppScopes',
    'get'
  >;
  'GET /roleManagement/exchange/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    'get'
  >;
  'PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    'patch'
  >;
  'POST /roleManagement/exchange/customAppScopes': Operation<
    '/roleManagement/exchange/customAppScopes',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}`
 *
 * Delete a customAppScope object of an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'customAppScope-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/exchange/customAppScopes`
 *
 * Get a list of customAppScope objects for an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/exchange/customAppScopes']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/exchange/customAppScopes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/customAppScopes',
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
 * `GET /roleManagement/exchange/customAppScopes/{customAppScope-id}`
 *
 * Get the properties of a customAppScope object for an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange/customAppScopes/{customAppScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/customAppScopes/{customAppScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'customAppScope-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}`
 *
 * Update an existing customAppScope object of an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    paramDefs: [{ name: 'customAppScope-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/exchange/customAppScopes`
 *
 * Create a new customAppScope object for an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/exchange/customAppScopes']['body'],
  params?: IEndpoints['POST /roleManagement/exchange/customAppScopes']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/exchange/customAppScopes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/exchange/customAppScopes',
    paramDefs: [],
    params,
    body,
  };
}
