export * as androidManagedAppProtections from './androidManagedAppProtections';
export * as defaultManagedAppProtections from './defaultManagedAppProtections';
export * as iosManagedAppProtections from './iosManagedAppProtections';
export * as managedAppPolicies from './managedAppPolicies';
export * as managedAppRegistrations from './managedAppRegistrations';
export * as managedAppStatuses from './managedAppStatuses';
export * as managedEBooks from './managedEBooks';
export * as mdmWindowsInformationProtectionPolicies from './mdmWindowsInformationProtectionPolicies';
export * as mobileAppCategories from './mobileAppCategories';
export * as mobileAppConfigurations from './mobileAppConfigurations';
export * as mobileAppRelationships from './mobileAppRelationships';
export * as mobileApps from './mobileApps';
export * as syncMicrosoftStoreForBusinessApps from './syncMicrosoftStoreForBusinessApps';
export * as targetedManagedAppConfigurations from './targetedManagedAppConfigurations';
export * as vppTokens from './vppTokens';
export * as windowsInformationProtectionPolicies from './windowsInformationProtectionPolicies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement': Operation<'/deviceAppManagement', 'get'>;
  'PATCH /deviceAppManagement': Operation<'/deviceAppManagement', 'patch'>;
}

/**
 * `GET /deviceAppManagement`
 *
 * Read properties and relationships of the deviceAppManagement object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement`
 *
 * Update the properties of a deviceAppManagement object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement']['response']> {
  return {
    method: 'patch',
    path: '/deviceAppManagement',
    paramDefs: [],
    params,
    body,
  };
}
