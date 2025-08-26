import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/classes/{educationClass-id}/teachers': Operation<
    '/education/classes/{educationClass-id}/teachers',
    'get'
  >;
}

/**
 * `GET /education/classes/{educationClass-id}/teachers`
 *
 * Retrieve a list of teachers for a class. Delegated tokens must be members of the class to get the teacher list.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/teachers']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/teachers']['response']> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/teachers',
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
