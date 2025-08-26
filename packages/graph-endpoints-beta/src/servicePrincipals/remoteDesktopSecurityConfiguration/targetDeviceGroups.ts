import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}`
 *
 * Delete a targetDeviceGroup object for the remoteDesktopSecurityConfiguration object on the servicePrincipal. Any user authenticating using the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to a Microsoft Entra joined or Microsoft Entra hybrid joined device that&#x27;s in the removed targetDeviceGroup doesn&#x27;t get SSO prompts.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'targetDeviceGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups`
 *
 * Get a list of the targetDeviceGroup objects and their properties on the remoteDesktopSecurityConfiguration resource on the servicePrincipal. Any user authenticating using the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to a Microsoft Entra joined or Microsoft Entra hybrid joined device that belongs to the targetDeviceGroup will get SSO.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
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
 * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}`
 *
 * Read the properties and relationships of a targetDeviceGroup object for the remoteDesktopSecurityConfiguration object on the servicePrincipal.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'targetDeviceGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}`
 *
 * Update the properties of a targetDeviceGroup object for remoteDesktopSecurityConfiguration object on the servicePrincipal. You can configure a maximum of 10 target device groups for the remoteDesktopSecurityConfiguraiton object on the servicePrincipal.
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'targetDeviceGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups`
 *
 * Create a new targetDeviceGroup object for the remoteDesktopSecurityConfiguration object on the servicePrincipal. You can configure a maximum of 10 target device groups for the remoteDesktopSecurityConfiguraiton object on the servicePrincipal.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
