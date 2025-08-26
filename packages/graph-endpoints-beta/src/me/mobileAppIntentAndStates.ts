import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'delete'
  >;
  'GET /me/mobileAppIntentAndStates': Operation<'/me/mobileAppIntentAndStates', 'get'>;
  'GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'get'
  >;
  'PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'patch'
  >;
  'POST /me/mobileAppIntentAndStates': Operation<'/me/mobileAppIntentAndStates', 'post'>;
}

/**
 * `DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileAppIntentAndState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mobileAppIntentAndStates`
 *
 * The list of troubleshooting events for this user.
 */
export function list(
  params?: IEndpoints['GET /me/mobileAppIntentAndStates']['parameters']
): EndpointRequest<IEndpoints['GET /me/mobileAppIntentAndStates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mobileAppIntentAndStates',
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
 * `GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
 *
 * The list of troubleshooting events for this user.
 */
export function get(
  params?: IEndpoints['GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppIntentAndState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['body'],
  params?: IEndpoints['PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    paramDefs: [{ name: 'mobileAppIntentAndState-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/mobileAppIntentAndStates`
 *
 */
export function create(
  body: IEndpoints['POST /me/mobileAppIntentAndStates']['body'],
  params?: IEndpoints['POST /me/mobileAppIntentAndStates']['parameters']
): EndpointRequest<IEndpoints['POST /me/mobileAppIntentAndStates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mobileAppIntentAndStates',
    paramDefs: [],
    params,
    body,
  };
}
