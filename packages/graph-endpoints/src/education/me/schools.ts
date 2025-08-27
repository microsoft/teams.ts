import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/schools': Operation<'/education/me/schools', 'get'>;
  'GET /education/me/schools/{educationSchool-id}': Operation<
    '/education/me/schools/{educationSchool-id}',
    'get'
  >;
}

/**
 * `GET /education/me/schools`
 *
 * Retrieve a list of schools for a user.
 */
export function list(
  params?: IEndpoints['GET /education/me/schools']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/schools']['response']> {
  return {
    method: 'get',
    path: '/education/me/schools',
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
 * `GET /education/me/schools/{educationSchool-id}`
 *
 * Schools to which the user belongs. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/me/schools/{educationSchool-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/schools/{educationSchool-id}']['response']> {
  return {
    method: 'get',
    path: '/education/me/schools/{educationSchool-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}
