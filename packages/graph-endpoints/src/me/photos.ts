import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/photos': Operation<'/me/photos', 'get'>;
  'GET /me/photos/{profilePhoto-id}': Operation<'/me/photos/{profilePhoto-id}', 'get'>;
}

/**
 * `GET /me/photos`
 *
 * The collection of the user&#x27;s profile photos in different sizes. Read-only.
 */
export function list(
  params?: IEndpoints['GET /me/photos']['parameters']
): EndpointRequest<IEndpoints['GET /me/photos']['response']> {
  return {
    method: 'get',
    path: '/me/photos',
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
 * `GET /me/photos/{profilePhoto-id}`
 *
 * The collection of the user&#x27;s profile photos in different sizes. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/photos/{profilePhoto-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/photos/{profilePhoto-id}']['response']> {
  return {
    method: 'get',
    path: '/me/photos/{profilePhoto-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'profilePhoto-id', in: 'path' },
    ],
    params,
  };
}
