import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/classes': Operation<'/education/me/classes', 'get'>;
  'GET /education/me/classes/{educationClass-id}': Operation<
    '/education/me/classes/{educationClass-id}',
    'get'
  >;
}

/**
 * `GET /education/me/classes`
 *
 * Get the educationClass resources an educationUser is a member of.
 */
export function list(
  params?: IEndpoints['GET /education/me/classes']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/classes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/classes',
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
 * `GET /education/me/classes/{educationClass-id}`
 *
 * Classes to which the user belongs. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/me/classes/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/classes/{educationClass-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/classes/{educationClass-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}
