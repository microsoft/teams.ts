import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}': Operation<
    '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    'delete'
  >;
  'GET /reports/appCredentialSignInActivities': Operation<
    '/reports/appCredentialSignInActivities',
    'get'
  >;
  'GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}': Operation<
    '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    'get'
  >;
  'PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}': Operation<
    '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    'patch'
  >;
  'POST /reports/appCredentialSignInActivities': Operation<
    '/reports/appCredentialSignInActivities',
    'post'
  >;
}

/**
 * `DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appCredentialSignInActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/appCredentialSignInActivities`
 *
 * Get a list of appCredentialSignInActivity objects that contains recent activity of application credentials.
 */
export function list(
  params?: IEndpoints['GET /reports/appCredentialSignInActivities']['parameters']
): EndpointRequest<IEndpoints['GET /reports/appCredentialSignInActivities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/appCredentialSignInActivities',
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
 * `GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}`
 *
 * Get an appCredentialSignInActivity object that contains recent activity of an application credential.
 */
export function get(
  params?: IEndpoints['GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appCredentialSignInActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['body'],
  params?: IEndpoints['PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    paramDefs: [{ name: 'appCredentialSignInActivity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/appCredentialSignInActivities`
 *
 */
export function create(
  body: IEndpoints['POST /reports/appCredentialSignInActivities']['body'],
  params?: IEndpoints['POST /reports/appCredentialSignInActivities']['parameters']
): EndpointRequest<IEndpoints['POST /reports/appCredentialSignInActivities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/appCredentialSignInActivities',
    paramDefs: [],
    params,
    body,
  };
}
