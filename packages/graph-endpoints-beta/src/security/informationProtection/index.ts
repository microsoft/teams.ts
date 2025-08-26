export * as labelPolicySettings from './labelPolicySettings';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/informationProtection': Operation<'/security/informationProtection', 'delete'>;
  'GET /security/informationProtection': Operation<'/security/informationProtection', 'get'>;
  'PATCH /security/informationProtection': Operation<'/security/informationProtection', 'patch'>;
}

/**
 * `DELETE /security/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/informationProtection',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/informationProtection']['body'],
  params?: IEndpoints['PATCH /security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/informationProtection',
    paramDefs: [],
    params,
    body,
  };
}
