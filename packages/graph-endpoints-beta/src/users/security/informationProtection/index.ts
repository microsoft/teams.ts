export * as labelPolicySettings from './labelPolicySettings';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/security/informationProtection': Operation<
    '/users/{user-id}/security/informationProtection',
    'delete'
  >;
  'GET /users/{user-id}/security/informationProtection': Operation<
    '/users/{user-id}/security/informationProtection',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection': Operation<
    '/users/{user-id}/security/informationProtection',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/security/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/security/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/security/informationProtection',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/security/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/security/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/security/informationProtection']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/security/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/security/informationProtection',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
