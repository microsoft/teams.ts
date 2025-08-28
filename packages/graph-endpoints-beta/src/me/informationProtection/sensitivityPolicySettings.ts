import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/sensitivityPolicySettings': Operation<
    '/me/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'GET /me/informationProtection/sensitivityPolicySettings': Operation<
    '/me/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /me/informationProtection/sensitivityPolicySettings': Operation<
    '/me/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /me/informationProtection/sensitivityPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/sensitivityPolicySettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/informationProtection/sensitivityPolicySettings`
 *
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/informationProtection/sensitivityPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/sensitivityPolicySettings']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/sensitivityPolicySettings',
    paramDefs: [],
    params,
    body,
  };
}
