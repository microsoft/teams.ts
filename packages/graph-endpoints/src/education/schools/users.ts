import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/schools/{educationSchool-id}/users': Operation<
    '/education/schools/{educationSchool-id}/users',
    'get'
  >;
}

/**
 * `GET /education/schools/{educationSchool-id}/users`
 *
 * Get the educationUser resources associated with an educationSchool.
 */
export function list(
  params?: IEndpoints['GET /education/schools/{educationSchool-id}/users']['parameters']
): EndpointRequest<IEndpoints['GET /education/schools/{educationSchool-id}/users']['response']> {
  return {
    method: 'get',
    path: '/education/schools/{educationSchool-id}/users',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}
