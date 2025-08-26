export * as defaultIosEnrollmentProfile from './defaultIosEnrollmentProfile';
export * as defaultMacOsEnrollmentProfile from './defaultMacOsEnrollmentProfile';
export * as defaultTvOSEnrollmentProfile from './defaultTvOSEnrollmentProfile';
export * as defaultVisionOSEnrollmentProfile from './defaultVisionOSEnrollmentProfile';
export * as enrollmentProfiles from './enrollmentProfiles';
export * as generateEncryptionPublicKey from './generateEncryptionPublicKey';
export * as importedAppleDeviceIdentities from './importedAppleDeviceIdentities';
export * as shareForSchoolDataSyncService from './shareForSchoolDataSyncService';
export * as syncWithAppleDeviceEnrollmentProgram from './syncWithAppleDeviceEnrollmentProgram';
export * as unshareForSchoolDataSyncService from './unshareForSchoolDataSyncService';
export * as uploadDepToken from './uploadDepToken';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/depOnboardingSettings': Operation<
    '/deviceManagement/depOnboardingSettings',
    'get'
  >;
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/depOnboardingSettings': Operation<
    '/deviceManagement/depOnboardingSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'depOnboardingSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/depOnboardingSettings`
 *
 * This collections of multiple DEP tokens per-tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/depOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings',
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
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}`
 *
 * This collections of multiple DEP tokens per-tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'depOnboardingSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}',
    paramDefs: [{ name: 'depOnboardingSetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/depOnboardingSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/depOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings',
    paramDefs: [],
    params,
    body,
  };
}
