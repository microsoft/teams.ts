import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/users/{educationUser-id}/schools': Operation<
    '/education/users/{educationUser-id}/schools',
    'get'
  >;
  'GET /education/users/{educationUser-id}/schools/{educationSchool-id}': Operation<
    '/education/users/{educationUser-id}/schools/{educationSchool-id}',
    'get'
  >;
}

/**
 * `GET /education/users/{educationUser-id}/schools`
 *
 * Schools to which the user belongs. Nullable.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/schools']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/schools']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/schools',
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
 * `GET /education/users/{educationUser-id}/schools/{educationSchool-id}`
 *
 * Schools to which the user belongs. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/schools/{educationSchool-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/schools/{educationSchool-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/schools/{educationSchool-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}
