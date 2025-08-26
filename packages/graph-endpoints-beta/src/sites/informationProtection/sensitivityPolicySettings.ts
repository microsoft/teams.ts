import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
