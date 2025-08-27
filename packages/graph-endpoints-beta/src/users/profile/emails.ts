import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/emails/{itemEmail-id}': Operation<
    '/users/{user-id}/profile/emails/{itemEmail-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/emails': Operation<'/users/{user-id}/profile/emails', 'get'>;
  'GET /users/{user-id}/profile/emails/{itemEmail-id}': Operation<
    '/users/{user-id}/profile/emails/{itemEmail-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/emails/{itemEmail-id}': Operation<
    '/users/{user-id}/profile/emails/{itemEmail-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/emails': Operation<'/users/{user-id}/profile/emails', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/emails/{itemEmail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/emails/{itemEmail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/emails/{itemEmail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/emails/{itemEmail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'itemEmail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/emails`
 *
 * Retrieve the properties and relationships of an itemEmail object in a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/emails']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/emails']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/emails',
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
 * `GET /users/{user-id}/profile/emails/{itemEmail-id}`
 *
 * Retrieve the properties and relationships of an itemEmail object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/emails/{itemEmail-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/emails/{itemEmail-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/emails/{itemEmail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'itemEmail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/emails/{itemEmail-id}`
 *
 * Update the properties of an itemEmail object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/emails/{itemEmail-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/emails/{itemEmail-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/profile/emails/{itemEmail-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/emails/{itemEmail-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'itemEmail-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/emails`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/emails']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/emails']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/emails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/emails',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
