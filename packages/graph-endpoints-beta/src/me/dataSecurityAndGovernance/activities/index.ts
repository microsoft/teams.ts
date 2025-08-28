export * as contentActivities from './contentActivities';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/activities': Operation<
    '/me/dataSecurityAndGovernance/activities',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/activities': Operation<
    '/me/dataSecurityAndGovernance/activities',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/activities': Operation<
    '/me/dataSecurityAndGovernance/activities',
    'patch'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/activities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/dataSecurityAndGovernance/activities']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/activities',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/activities`
 *
 * Container for activity logs (content processing and audit) related to this user. ContainsTarget: true.
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<IEndpoints['GET /me/dataSecurityAndGovernance/activities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/dataSecurityAndGovernance/activities',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance/activities`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/activities']['body'],
  params?: IEndpoints['PATCH /me/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/dataSecurityAndGovernance/activities']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/activities',
    paramDefs: [],
    params,
    body,
  };
}
