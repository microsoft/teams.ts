import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/photos': Operation<'/groups/{group-id}/photos', 'get'>;
  'GET /groups/{group-id}/photos/{profilePhoto-id}': Operation<
    '/groups/{group-id}/photos/{profilePhoto-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/photos`
 *
 * Retrieve a list of profilePhoto objects.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/photos']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/photos']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/photos',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/photos/{profilePhoto-id}`
 *
 * The profile photos owned by the group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/photos/{profilePhoto-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/photos/{profilePhoto-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/photos/{profilePhoto-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'profilePhoto-id', in: 'path' },
    ],
    params,
  };
}
