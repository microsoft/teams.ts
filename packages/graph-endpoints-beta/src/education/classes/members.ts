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
 * Retrieve the teachers and students for a class. Note that if the delegated token is used, members can only be seen by other members of the class.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/members']['response']> {
  return {
    ver: 'beta',
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
