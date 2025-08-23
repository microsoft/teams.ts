import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/members': Operation<
    '/education/classes/{educationClass-id}/members',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/members`
 *
 * Retrieves the educationUser members of an educationClass.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/members']['response']> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/members',
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
