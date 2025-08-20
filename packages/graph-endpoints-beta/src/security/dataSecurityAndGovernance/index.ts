export * as policyFiles from './policyFiles';
export * as processContentAsync from './processContentAsync';
export * as protectionScopes from './protectionScopes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'patch'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataSecurityAndGovernance',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance`
 *
 */
export function get(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /security/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataSecurityAndGovernance',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance']['body'],
  params?: IEndpoints['PATCH /security/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataSecurityAndGovernance',
    paramDefs: [],
    params,
    body,
  };
}
