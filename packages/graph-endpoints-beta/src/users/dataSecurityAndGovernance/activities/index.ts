export * as contentActivities from './contentActivities';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance/activities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/activities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/activities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance/activities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/activities`
 *
 * Container for activity logs (content processing and audit) related to this user. ContainsTarget: true.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance/activities`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
