import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}': Operation<
    '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/operations': Operation<
    '/users/{user-id}/authentication/operations',
    'get'
  >;
  'GET /users/{user-id}/authentication/operations/{longRunningOperation-id}': Operation<
    '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}': Operation<
    '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    'patch'
  >;
  'POST /users/{user-id}/authentication/operations': Operation<
    '/users/{user-id}/authentication/operations',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'longRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/operations`
 *
 * Read the properties and relationships of a longRunningOperation object. This API allows you to retrieve the details and status of the following long-running Microsoft Graph API operations. The possible states of the long-running operation are notStarted, running, succeeded, failed, unknownFutureValue where succeeded and failed are terminal states.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/operations']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/operations']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/operations',
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
 * `GET /users/{user-id}/authentication/operations/{longRunningOperation-id}`
 *
 * Read the properties and relationships of a longRunningOperation object. This API allows you to retrieve the details and status of the following long-running Microsoft Graph API operations. The possible states of the long-running operation are notStarted, running, succeeded, failed, unknownFutureValue where succeeded and failed are terminal states.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/operations/{longRunningOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'longRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'longRunningOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/operations`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/operations']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/operations']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/operations']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/authentication/operations',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
