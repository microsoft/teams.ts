import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
