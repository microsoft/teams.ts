export * as detectionRules from './detectionRules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/rules': Operation<'/security/rules', 'delete'>;
  'GET /security/rules': Operation<'/security/rules', 'get'>;
  'PATCH /security/rules': Operation<'/security/rules', 'patch'>;
}

/**
 * `DELETE /security/rules`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/rules']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/rules']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/rules',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/rules`
 *
 */
export function list(
  params?: IEndpoints['GET /security/rules']['parameters']
): EndpointRequest<IEndpoints['GET /security/rules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/rules',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/rules`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/rules']['body'],
  params?: IEndpoints['PATCH /security/rules']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/rules']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/rules',
    paramDefs: [],
    params,
    body,
  };
}
