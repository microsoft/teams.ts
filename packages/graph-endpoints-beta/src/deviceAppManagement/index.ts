export * as androidManagedAppProtections from './androidManagedAppProtections';
export * as defaultManagedAppProtections from './defaultManagedAppProtections';
export * as deviceAppManagementTasks from './deviceAppManagementTasks';
export * as enterpriseCodeSigningCertificates from './enterpriseCodeSigningCertificates';
export * as iosLobAppProvisioningConfigurations from './iosLobAppProvisioningConfigurations';
export * as iosManagedAppProtections from './iosManagedAppProtections';
export * as managedAppPolicies from './managedAppPolicies';
export * as managedAppRegistrations from './managedAppRegistrations';
export * as managedAppStatuses from './managedAppStatuses';
export * as managedEBookCategories from './managedEBookCategories';
export * as managedEBooks from './managedEBooks';
export * as mdmWindowsInformationProtectionPolicies from './mdmWindowsInformationProtectionPolicies';
export * as mobileAppCatalogPackages from './mobileAppCatalogPackages';
export * as mobileAppCategories from './mobileAppCategories';
export * as mobileAppConfigurations from './mobileAppConfigurations';
export * as mobileAppRelationships from './mobileAppRelationships';
export * as mobileApps from './mobileApps';
export * as policySets from './policySets';
export * as symantecCodeSigningCertificate from './symantecCodeSigningCertificate';
export * as syncMicrosoftStoreForBusinessApps from './syncMicrosoftStoreForBusinessApps';
export * as targetedManagedAppConfigurations from './targetedManagedAppConfigurations';
export * as vppTokens from './vppTokens';
export * as wdacSupplementalPolicies from './wdacSupplementalPolicies';
export * as windowsInformationProtectionDeviceRegistrations from './windowsInformationProtectionDeviceRegistrations';
export * as windowsInformationProtectionPolicies from './windowsInformationProtectionPolicies';
export * as windowsInformationProtectionWipeActions from './windowsInformationProtectionWipeActions';
export * as windowsManagedAppProtections from './windowsManagedAppProtections';
export * as windowsManagementApp from './windowsManagementApp';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement': Operation<'/deviceAppManagement', 'get'>;
  'PATCH /deviceAppManagement': Operation<'/deviceAppManagement', 'patch'>;
}

/**
 * `GET /deviceAppManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement']['response']> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement',
    paramDefs: [],
    params,
    body,
  };
}
