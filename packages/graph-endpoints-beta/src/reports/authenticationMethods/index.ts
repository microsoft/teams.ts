export * as userEventsSummary from './userEventsSummary';
export * as userMfaSignInSummary from './userMfaSignInSummary';
export * as userPasswordResetsAndChangesSummary from './userPasswordResetsAndChangesSummary';
export * as userRegistrationDetails from './userRegistrationDetails';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'delete'>;
  'GET /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'get'>;
  'PATCH /reports/authenticationMethods': Operation<'/reports/authenticationMethods', 'patch'>;
}

/**
 * `DELETE /reports/authenticationMethods`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/authenticationMethods']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/authenticationMethods']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/authenticationMethods',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/authenticationMethods`
 *
 * Container for navigation properties for Microsoft Entra authentication methods resources.
 */
export function list(
  params?: IEndpoints['GET /reports/authenticationMethods']['parameters']
): EndpointRequest<IEndpoints['GET /reports/authenticationMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/authenticationMethods',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/authenticationMethods`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/authenticationMethods']['body'],
  params?: IEndpoints['PATCH /reports/authenticationMethods']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/authenticationMethods']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/authenticationMethods',
    paramDefs: [],
    params,
    body,
  };
}
