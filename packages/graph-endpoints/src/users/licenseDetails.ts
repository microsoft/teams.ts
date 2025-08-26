import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    'delete'
  >;
  'GET /users/{user-id}/licenseDetails': Operation<'/users/{user-id}/licenseDetails', 'get'>;
  'GET /users/{user-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    'get'
  >;
  'PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    'patch'
  >;
  'POST /users/{user-id}/licenseDetails': Operation<'/users/{user-id}/licenseDetails', 'post'>;
}

/**
 * `DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/licenseDetails`
 *
 * A collection of this user&#x27;s license details. Read-only.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/licenseDetails']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/licenseDetails']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/licenseDetails',
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
 * `GET /users/{user-id}/licenseDetails/{licenseDetails-id}`
 *
 * A collection of this user&#x27;s license details. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/licenseDetails/{licenseDetails-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/licenseDetails`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/licenseDetails']['body'],
  params?: IEndpoints['POST /users/{user-id}/licenseDetails']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/licenseDetails']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/licenseDetails',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
