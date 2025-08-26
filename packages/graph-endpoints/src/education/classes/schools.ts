import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/schools': Operation<
    '/education/classes/{educationClass-id}/schools',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/schools/{educationSchool-id}': Operation<
    '/education/classes/{educationClass-id}/schools/{educationSchool-id}',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/schools`
 *
 * Retrieve a list of schools in which the class is taught.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/schools']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/schools']['response']> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/schools',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/schools/{educationSchool-id}`
 *
 * All schools that this class is associated with. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/schools/{educationSchool-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/schools/{educationSchool-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/schools/{educationSchool-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}
