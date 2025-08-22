export * as targetDeviceGroups from './targetDeviceGroups';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    'patch'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration`
 *
 * Delete a remoteDesktopSecurityConfiguration object on a servicePrincipal. Removing remoteDesktopSecurityConfiguration object on the servicePrincipal disables the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to authenticate a user to Microsoft Entra joined or Microsoft Entra hybrid joined devices, and removes any target device groups that you configured for SSO.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration`
 *
 * Read the properties and relationships of a remoteDesktopSecurityConfiguration object on a servicePrincipal. Use this configuration to view the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to authenticate a user to Microsoft Entra joined or Microsoft Entra hybrid joined devices. Additionally you can view any targetDeviceGroups that have been configured for SSO.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration`
 *
 * Update the properties of a remoteDesktopSecurityConfiguration object on the servicePrincipal. Use this configuration to enable or disable the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to authenticate a user to Microsoft Entra joined or Microsoft Entra hybrid joined devices.
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
