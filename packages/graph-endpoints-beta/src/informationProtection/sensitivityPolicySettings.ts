import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/sensitivityPolicySettings': Operation<
    '/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'GET /informationProtection/sensitivityPolicySettings': Operation<
    '/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /informationProtection/sensitivityPolicySettings': Operation<
    '/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /informationProtection/sensitivityPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/informationProtection/sensitivityPolicySettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /informationProtection/sensitivityPolicySettings`
 *
 */
export function list(
  params?: IEndpoints['GET /informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/sensitivityPolicySettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /informationProtection/sensitivityPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/sensitivityPolicySettings']['body'],
  params?: IEndpoints['PATCH /informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection/sensitivityPolicySettings',
    paramDefs: [],
    params,
    body,
  };
}
