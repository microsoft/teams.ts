import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'approvedClientApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps`
 *
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'approvedClientApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'approvedClientApp-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
