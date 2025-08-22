export * as ediscoveryCases from './ediscoveryCases';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases': Operation<'/security/cases', 'delete'>;
  'GET /security/cases': Operation<'/security/cases', 'get'>;
  'PATCH /security/cases': Operation<'/security/cases', 'patch'>;
}

/**
 * `DELETE /security/cases`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/cases']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/cases']['response']> {
  return {
    method: 'delete',
    path: '/security/cases',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/cases`
 *
 */
export function list(
  params?: IEndpoints['GET /security/cases']['parameters']
): EndpointRequest<IEndpoints['GET /security/cases']['response']> {
  return {
    method: 'get',
    path: '/security/cases',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/cases']['body'],
  params?: IEndpoints['PATCH /security/cases']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/cases']['response']> {
  return {
    method: 'patch',
    path: '/security/cases',
    paramDefs: [],
    params,
    body,
  };
}
