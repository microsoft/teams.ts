export * as addApps from './addApps';
export * as approveApps from './approveApps';
export * as completeSignup from './completeSignup';
export * as createGooglePlayWebToken from './createGooglePlayWebToken';
export * as requestSignupUrl from './requestSignupUrl';
export * as setAndroidDeviceOwnerFullyManagedEnrollmentState from './setAndroidDeviceOwnerFullyManagedEnrollmentState';
export * as syncApps from './syncApps';
export * as unbind from './unbind';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    'delete'
  >;
  'GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    'get'
  >;
  'PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings`
 *
 * The singleton Android managed store account enterprise settings entity.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings',
    paramDefs: [],
    params,
    body,
  };
}
