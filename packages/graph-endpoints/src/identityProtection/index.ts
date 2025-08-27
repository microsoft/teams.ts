export * as riskDetections from './riskDetections';
export * as riskyServicePrincipals from './riskyServicePrincipals';
export * as riskyUsers from './riskyUsers';
export * as servicePrincipalRiskDetections from './servicePrincipalRiskDetections';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /identityProtection': Operation<'/identityProtection', 'get'>;
  'PATCH /identityProtection': Operation<'/identityProtection', 'patch'>;
}

/**
 * `GET /identityProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /identityProtection']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection']['response']> {
  return {
    method: 'get',
    path: '/identityProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection']['body'],
  params?: IEndpoints['PATCH /identityProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /identityProtection']['response']> {
  return {
    method: 'patch',
    path: '/identityProtection',
    paramDefs: [],
    params,
    body,
  };
}
