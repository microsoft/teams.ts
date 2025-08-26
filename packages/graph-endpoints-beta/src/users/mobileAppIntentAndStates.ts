import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'delete'
  >;
  'GET /users/{user-id}/mobileAppIntentAndStates': Operation<
    '/users/{user-id}/mobileAppIntentAndStates',
    'get'
  >;
  'GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'patch'
  >;
  'POST /users/{user-id}/mobileAppIntentAndStates': Operation<
    '/users/{user-id}/mobileAppIntentAndStates',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'mobileAppIntentAndState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mobileAppIntentAndStates`
 *
 * The list of troubleshooting events for this user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mobileAppIntentAndStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
 *
 * The list of troubleshooting events for this user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mobileAppIntentAndState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mobileAppIntentAndState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mobileAppIntentAndStates`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mobileAppIntentAndStates']['body'],
  params?: IEndpoints['POST /users/{user-id}/mobileAppIntentAndStates']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/mobileAppIntentAndStates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mobileAppIntentAndStates',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
