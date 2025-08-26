import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/users/{educationUser-id}/classes': Operation<
    '/education/users/{educationUser-id}/classes',
    'get'
  >;
  'GET /education/users/{educationUser-id}/classes/{educationClass-id}': Operation<
    '/education/users/{educationUser-id}/classes/{educationClass-id}',
    'get'
  >;
}

/**
 * `GET /education/users/{educationUser-id}/classes`
 *
 * Classes to which the user belongs. Nullable.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/classes']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/classes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/classes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/classes/{educationClass-id}`
 *
 * Classes to which the user belongs. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/classes/{educationClass-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/classes/{educationClass-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/classes/{educationClass-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}
