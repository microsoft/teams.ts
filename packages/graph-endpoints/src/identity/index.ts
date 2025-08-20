export * as apiConnectors from './apiConnectors';
export * as authenticationEventListeners from './authenticationEventListeners';
export * as authenticationEventsFlows from './authenticationEventsFlows';
export * as b2xUserFlows from './b2xUserFlows';
export * as conditionalAccess from './conditionalAccess';
export * as customAuthenticationExtensions from './customAuthenticationExtensions';
export * as identityProviders from './identityProviders';
export * as userFlowAttributes from './userFlowAttributes';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /identity': Operation<'/identity', 'get'>;
  'PATCH /identity': Operation<'/identity', 'patch'>;
}

/**
 * `GET /identity`
 *
 */
export function get(
  params?: IEndpoints['GET /identity']['parameters']
): EndpointRequest<IEndpoints['GET /identity']['response']> {
  return {
    method: 'get',
    path: '/identity',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /identity`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity']['body'],
  params?: IEndpoints['PATCH /identity']['parameters']
): EndpointRequest<IEndpoints['PATCH /identity']['response']> {
  return {
    method: 'patch',
    path: '/identity',
    paramDefs: [],
    params,
    body,
  };
}
