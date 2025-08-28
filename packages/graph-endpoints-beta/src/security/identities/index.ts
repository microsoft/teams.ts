export * as healthIssues from './healthIssues';
export * as identityAccounts from './identityAccounts';
export * as sensors from './sensors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities': Operation<'/security/identities', 'delete'>;
  'GET /security/identities': Operation<'/security/identities', 'get'>;
  'PATCH /security/identities': Operation<'/security/identities', 'patch'>;
}

/**
 * `DELETE /security/identities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/identities']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/identities']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/identities',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/identities`
 *
 * A container for security identities APIs.
 */
export function list(
  params?: IEndpoints['GET /security/identities']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/identities',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/identities`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/identities']['body'],
  params?: IEndpoints['PATCH /security/identities']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/identities']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/identities',
    paramDefs: [],
    params,
    body,
  };
}
