import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
