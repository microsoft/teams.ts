export * as importAppleDeviceIdentityList from './importAppleDeviceIdentityList';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'depOnboardingSetting-id', in: 'path' },
      { name: 'importedAppleDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities`
 *
 * The imported Apple device identities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'depOnboardingSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}`
 *
 * The imported Apple device identities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'depOnboardingSetting-id', in: 'path' },
      { name: 'importedAppleDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/{importedAppleDeviceIdentity-id}',
    paramDefs: [
      { name: 'depOnboardingSetting-id', in: 'path' },
      { name: 'importedAppleDeviceIdentity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities',
    paramDefs: [{ name: 'depOnboardingSetting-id', in: 'path' }],
    params,
    body,
  };
}
