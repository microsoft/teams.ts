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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/triggers`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/triggers']['body']
): EndpointRequest<IEndpoints['PATCH /security/triggers']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/triggers',
    body,
  };
}
