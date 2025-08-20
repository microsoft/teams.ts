import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/users/{educationUser-id}/taughtClasses': Operation<
    '/education/users/{educationUser-id}/taughtClasses',
    'get'
  >;
  'GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}': Operation<
    '/education/users/{educationUser-id}/taughtClasses/{educationClass-id}',
    'get'
  >;
}

/**
 * `GET /education/users/{educationUser-id}/taughtClasses`
 *
 * Get the educationClass resources owned by an educationUser.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/taughtClasses']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/taughtClasses']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/taughtClasses',
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
 * `GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}`
 *
 * Classes for which the user is a teacher.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/taughtClasses/{educationClass-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/taughtClasses/{educationClass-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}
