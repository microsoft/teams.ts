import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}': Operation<
    '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    'delete'
  >;
  'GET /reports/servicePrincipalSignInActivities': Operation<
    '/reports/servicePrincipalSignInActivities',
    'get'
  >;
  'GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}': Operation<
    '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    'get'
  >;
  'PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}': Operation<
    '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    'patch'
  >;
  'POST /reports/servicePrincipalSignInActivities': Operation<
    '/reports/servicePrincipalSignInActivities',
    'post'
  >;
}

/**
 * `DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipalSignInActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/servicePrincipalSignInActivities`
 *
 * Get a list of servicePrincipalSignInActivity objects that contains sign-in activity information for service principals in a Microsoft Entra tenant. You can use a service principal as a client or resource. A service principal supports delegated or app-only authentication context.
 */
export function list(
  params?: IEndpoints['GET /reports/servicePrincipalSignInActivities']['parameters']
): EndpointRequest<IEndpoints['GET /reports/servicePrincipalSignInActivities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/servicePrincipalSignInActivities',
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
 * `GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}`
 *
 * Get a servicePrincipalSignInActivity object that contains sign-in activity information for a service principal in a Microsoft Entra tenant. You can use a service principal as a client or resource. A service principal supports delegated or app-only authentication context.
 */
export function get(
  params?: IEndpoints['GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipalSignInActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['body'],
  params?: IEndpoints['PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    paramDefs: [{ name: 'servicePrincipalSignInActivity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/servicePrincipalSignInActivities`
 *
 */
export function create(
  body: IEndpoints['POST /reports/servicePrincipalSignInActivities']['body'],
  params?: IEndpoints['POST /reports/servicePrincipalSignInActivities']['parameters']
): EndpointRequest<IEndpoints['POST /reports/servicePrincipalSignInActivities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/servicePrincipalSignInActivities',
    paramDefs: [],
    params,
    body,
  };
}
