export * as administrativeUnits from './administrativeUnits';
export * as attributeSets from './attributeSets';
export * as authenticationMethodDevices from './authenticationMethodDevices';
export * as certificateAuthorities from './certificateAuthorities';
export * as customSecurityAttributeDefinitions from './customSecurityAttributeDefinitions';
export * as deletedItems from './deletedItems';
export * as deviceLocalCredentials from './deviceLocalCredentials';
export * as externalUserProfiles from './externalUserProfiles';
export * as featureRolloutPolicies from './featureRolloutPolicies';
export * as federationConfigurations from './federationConfigurations';
export * as impactedResources from './impactedResources';
export * as inboundSharedUserProfiles from './inboundSharedUserProfiles';
export * as onPremisesSynchronization from './onPremisesSynchronization';
export * as outboundSharedUserProfiles from './outboundSharedUserProfiles';
export * as pendingExternalUserProfiles from './pendingExternalUserProfiles';
export * as publicKeyInfrastructure from './publicKeyInfrastructure';
export * as recommendationConfiguration from './recommendationConfiguration';
export * as recommendations from './recommendations';
export * as sharedEmailDomains from './sharedEmailDomains';
export * as subscriptions from './subscriptions';
export * as templates from './templates';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /directory': Operation<'/directory', 'get'>;
  'PATCH /directory': Operation<'/directory', 'patch'>;
}

/**
 * `GET /directory`
 *
 */
export function get(
  params?: IEndpoints['GET /directory']['parameters']
): EndpointRequest<IEndpoints['GET /directory']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /directory`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory']['body'],
  params?: IEndpoints['PATCH /directory']['parameters']
): EndpointRequest<IEndpoints['PATCH /directory']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory',
    paramDefs: [],
    params,
    body,
  };
}
