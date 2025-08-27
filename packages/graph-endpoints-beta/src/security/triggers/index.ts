export * as retentionEvents from './retentionEvents';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/triggers': Operation<'/security/triggers', 'delete'>;
  'GET /security/triggers': Operation<'/security/triggers', 'get'>;
  'PATCH /security/triggers': Operation<'/security/triggers', 'patch'>;
}

/**
 * `DELETE /security/triggers`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/triggers']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/triggers']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/triggers',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/triggers`
 *
 */
export function list(
  params?: IEndpoints['GET /security/triggers']['parameters']
): EndpointRequest<IEndpoints['GET /security/triggers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/triggers',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/triggers`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/triggers']['body'],
  params?: IEndpoints['PATCH /security/triggers']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/triggers']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/triggers',
    paramDefs: [],
    params,
    body,
  };
}
