import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/licenseDetails/{licenseDetails-id}': Operation<
    '/me/licenseDetails/{licenseDetails-id}',
    'delete'
  >;
  'GET /me/licenseDetails': Operation<'/me/licenseDetails', 'get'>;
  'GET /me/licenseDetails/{licenseDetails-id}': Operation<
    '/me/licenseDetails/{licenseDetails-id}',
    'get'
  >;
  'PATCH /me/licenseDetails/{licenseDetails-id}': Operation<
    '/me/licenseDetails/{licenseDetails-id}',
    'patch'
  >;
  'POST /me/licenseDetails': Operation<'/me/licenseDetails', 'post'>;
}

/**
 * `DELETE /me/licenseDetails/{licenseDetails-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/licenseDetails/{licenseDetails-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/licenseDetails`
 *
 * Retrieve a list of licenseDetails objects for enterprise users. This API returns details for licenses that are directly assigned and those transitively assigned through memberships in licensed groups.
 */
export function list(
  params?: IEndpoints['GET /me/licenseDetails']['parameters']
): EndpointRequest<IEndpoints['GET /me/licenseDetails']['response']> {
  return {
    method: 'get',
    path: '/me/licenseDetails',
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
 * `GET /me/licenseDetails/{licenseDetails-id}`
 *
 * A collection of this user&#x27;s license details. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/licenseDetails/{licenseDetails-id}']['response']> {
  return {
    method: 'get',
    path: '/me/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/licenseDetails/{licenseDetails-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/licenseDetails/{licenseDetails-id}']['body'],
  params?: IEndpoints['PATCH /me/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/licenseDetails/{licenseDetails-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/licenseDetails/{licenseDetails-id}',
    paramDefs: [{ name: 'licenseDetails-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/licenseDetails`
 *
 */
export function create(
  body: IEndpoints['POST /me/licenseDetails']['body'],
  params?: IEndpoints['POST /me/licenseDetails']['parameters']
): EndpointRequest<IEndpoints['POST /me/licenseDetails']['response']> {
  return {
    method: 'post',
    path: '/me/licenseDetails',
    paramDefs: [],
    params,
    body,
  };
}
