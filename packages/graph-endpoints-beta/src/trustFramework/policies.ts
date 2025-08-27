import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /trustFramework/policies/{trustFrameworkPolicy-id}': Operation<
    '/trustFramework/policies/{trustFrameworkPolicy-id}',
    'delete'
  >;
  'GET /trustFramework/policies': Operation<'/trustFramework/policies', 'get'>;
  'GET /trustFramework/policies/{trustFrameworkPolicy-id}': Operation<
    '/trustFramework/policies/{trustFrameworkPolicy-id}',
    'get'
  >;
  'PATCH /trustFramework/policies/{trustFrameworkPolicy-id}': Operation<
    '/trustFramework/policies/{trustFrameworkPolicy-id}',
    'patch'
  >;
  'POST /trustFramework/policies': Operation<'/trustFramework/policies', 'post'>;
}

/**
 * `DELETE /trustFramework/policies/{trustFrameworkPolicy-id}`
 *
 * Delete an existing trustFrameworkPolicy object from an Microsoft Entra B2C tenant.
 */
export function del(
  params?: IEndpoints['DELETE /trustFramework/policies/{trustFrameworkPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /trustFramework/policies/{trustFrameworkPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/trustFramework/policies/{trustFrameworkPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'trustFrameworkPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /trustFramework/policies`
 *
 * Retrieve a list of trustFrameworkPolicies in the tenant/directory.
 */
export function list(
  params?: IEndpoints['GET /trustFramework/policies']['parameters']
): EndpointRequest<IEndpoints['GET /trustFramework/policies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework/policies',
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
 * `GET /trustFramework/policies/{trustFrameworkPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /trustFramework/policies/{trustFrameworkPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /trustFramework/policies/{trustFrameworkPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework/policies/{trustFrameworkPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'trustFrameworkPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /trustFramework/policies/{trustFrameworkPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /trustFramework/policies/{trustFrameworkPolicy-id}']['body'],
  params?: IEndpoints['PATCH /trustFramework/policies/{trustFrameworkPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /trustFramework/policies/{trustFrameworkPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/trustFramework/policies/{trustFrameworkPolicy-id}',
    paramDefs: [{ name: 'trustFrameworkPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /trustFramework/policies`
 *
 */
export function create(
  body: IEndpoints['POST /trustFramework/policies']['body'],
  params?: IEndpoints['POST /trustFramework/policies']['parameters']
): EndpointRequest<IEndpoints['POST /trustFramework/policies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/trustFramework/policies',
    paramDefs: [],
    params,
    body,
  };
}
