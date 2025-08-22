export * as activities from './activities';
export * as processContent from './processContent';
export * as protectionScopes from './protectionScopes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance': Operation<'/me/dataSecurityAndGovernance', 'delete'>;
  'GET /me/dataSecurityAndGovernance': Operation<'/me/dataSecurityAndGovernance', 'get'>;
  'PATCH /me/dataSecurityAndGovernance': Operation<'/me/dataSecurityAndGovernance', 'patch'>;
}

/**
 * `DELETE /me/dataSecurityAndGovernance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/dataSecurityAndGovernance']['response']> {
  return {
    method: 'delete',
    path: '/me/dataSecurityAndGovernance',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance`
 *
 * The data security and governance settings for the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /me/dataSecurityAndGovernance']['response']> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance']['body'],
  params?: IEndpoints['PATCH /me/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/dataSecurityAndGovernance']['response']> {
  return {
    method: 'patch',
    path: '/me/dataSecurityAndGovernance',
    paramDefs: [],
    params,
    body,
  };
}
