export * as compute from './compute';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance/protectionScopes': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance/protectionScopes': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance/protectionScopes': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes',
    'patch'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/protectionScopes`
 *
 * Container for actions related to computing tenant-wide data protection scopes.
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance/protectionScopes']['body'],
  params?: IEndpoints['PATCH /security/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataSecurityAndGovernance/protectionScopes',
    paramDefs: [],
    params,
    body,
  };
}
