export * as administrativeUnits from './administrativeUnits';
export * as attributeSets from './attributeSets';
export * as customSecurityAttributeDefinitions from './customSecurityAttributeDefinitions';
export * as deletedItems from './deletedItems';
export * as deviceLocalCredentials from './deviceLocalCredentials';
export * as federationConfigurations from './federationConfigurations';
export * as onPremisesSynchronization from './onPremisesSynchronization';
export * as publicKeyInfrastructure from './publicKeyInfrastructure';
export * as subscriptions from './subscriptions';

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
    method: 'patch',
    path: '/directory',
    paramDefs: [],
    params,
    body,
  };
}
