import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/taughtClasses': Operation<'/education/me/taughtClasses', 'get'>;
  'GET /education/me/taughtClasses/{educationClass-id}': Operation<
    '/education/me/taughtClasses/{educationClass-id}',
    'get'
  >;
}

/**
 * `GET /education/me/taughtClasses`
 *
 * Classes for which the user is a teacher.
 */
export function list(
  params?: IEndpoints['GET /education/me/taughtClasses']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/taughtClasses']['response']> {
  return {
    method: 'get',
    path: '/education/me/taughtClasses',
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
 * `GET /education/me/taughtClasses/{educationClass-id}`
 *
 * Classes for which the user is a teacher.
 */
export function get(
  params?: IEndpoints['GET /education/me/taughtClasses/{educationClass-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/taughtClasses/{educationClass-id}']['response']> {
  return {
    method: 'get',
    path: '/education/me/taughtClasses/{educationClass-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}
