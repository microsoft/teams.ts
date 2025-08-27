import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/emails/{itemEmail-id}': Operation<
    '/me/profile/emails/{itemEmail-id}',
    'delete'
  >;
  'GET /me/profile/emails': Operation<'/me/profile/emails', 'get'>;
  'GET /me/profile/emails/{itemEmail-id}': Operation<'/me/profile/emails/{itemEmail-id}', 'get'>;
  'PATCH /me/profile/emails/{itemEmail-id}': Operation<
    '/me/profile/emails/{itemEmail-id}',
    'patch'
  >;
  'POST /me/profile/emails': Operation<'/me/profile/emails', 'post'>;
}

/**
 * `DELETE /me/profile/emails/{itemEmail-id}`
 *
 * Delete an itemEmail object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/emails/{itemEmail-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/emails/{itemEmail-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/emails/{itemEmail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'itemEmail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/emails`
 *
 * Retrieve a list of itemEmail objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/emails']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/emails']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/emails',
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
 * `GET /me/profile/emails/{itemEmail-id}`
 *
 * Represents detailed information about email addresses associated with the user.
 */
export function get(
  params?: IEndpoints['GET /me/profile/emails/{itemEmail-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/emails/{itemEmail-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/emails/{itemEmail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'itemEmail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/emails/{itemEmail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/emails/{itemEmail-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/emails/{itemEmail-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/emails/{itemEmail-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/emails/{itemEmail-id}',
    paramDefs: [{ name: 'itemEmail-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/emails`
 *
 * Create a new itemEmail object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/emails']['body'],
  params?: IEndpoints['POST /me/profile/emails']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/emails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/emails',
    paramDefs: [],
    params,
    body,
  };
}
