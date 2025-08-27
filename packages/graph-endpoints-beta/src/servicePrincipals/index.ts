export * as addTokenSigningCertificate from './addTokenSigningCertificate';
export * as appManagementPolicies from './appManagementPolicies';
export * as appRoleAssignedTo from './appRoleAssignedTo';
export * as appRoleAssignments from './appRoleAssignments';
export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as claimsMappingPolicies from './claimsMappingPolicies';
export * as claimsPolicy from './claimsPolicy';
export * as createPasswordSingleSignOnCredentials from './createPasswordSingleSignOnCredentials';
export * as createdObjects from './createdObjects';
export * as delegatedPermissionClassifications from './delegatedPermissionClassifications';
export * as deletePasswordSingleSignOnCredentials from './deletePasswordSingleSignOnCredentials';
export * as endpoints from './endpoints';
export * as federatedIdentityCredentials from './federatedIdentityCredentials';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getPasswordSingleSignOnCredentials from './getPasswordSingleSignOnCredentials';
export * as getUserOwnedObjects from './getUserOwnedObjects';
export * as homeRealmDiscoveryPolicies from './homeRealmDiscoveryPolicies';
export * as licenseDetails from './licenseDetails';
export * as memberOf from './memberOf';
export * as oauth2PermissionGrants from './oauth2PermissionGrants';
export * as ownedObjects from './ownedObjects';
export * as owners from './owners';
export * as permissionGrantPreApprovalPolicies from './permissionGrantPreApprovalPolicies';
export * as remoteDesktopSecurityConfiguration from './remoteDesktopSecurityConfiguration';
export * as restore from './restore';
export * as synchronization from './synchronization';
export * as tokenIssuancePolicies from './tokenIssuancePolicies';
export * as tokenLifetimePolicies from './tokenLifetimePolicies';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as updatePasswordSingleSignOnCredentials from './updatePasswordSingleSignOnCredentials';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}',
    'delete'
  >;
  'GET /servicePrincipals': Operation<'/servicePrincipals', 'get'>;
  'GET /servicePrincipals/{servicePrincipal-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}',
    'patch'
  >;
  'POST /servicePrincipals': Operation<'/servicePrincipals', 'post'>;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}`
 *
 * Delete a servicePrincipal object.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals`
 *
 * Retrieve a list of servicePrincipal objects.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals']['parameters']
): EndpointRequest<IEndpoints['GET /servicePrincipals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
 * `GET /servicePrincipals/{servicePrincipal-id}`
 *
 * Retrieve the properties and relationships of a servicePrincipal object.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}']['parameters']
): EndpointRequest<IEndpoints['GET /servicePrincipals/{servicePrincipal-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}`
 *
 * Create a new servicePrincipal object if it doesn&#x27;t exist, or update the properties of an existing servicePrincipal object.
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals`
 *
 * Create a new servicePrincipal object.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals']['body'],
  params?: IEndpoints['POST /servicePrincipals']['parameters']
): EndpointRequest<IEndpoints['POST /servicePrincipals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals',
    paramDefs: [],
    params,
    body,
  };
}
