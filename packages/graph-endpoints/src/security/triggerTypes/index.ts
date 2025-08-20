export * as retentionEventTypes from './retentionEventTypes';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/triggerTypes': Operation<'/security/triggerTypes', 'delete'>;
  'GET /security/triggerTypes': Operation<'/security/triggerTypes', 'get'>;
  'PATCH /security/triggerTypes': Operation<'/security/triggerTypes', 'patch'>;
}

/**
 * `DELETE /security/triggerTypes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/triggerTypes']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/triggerTypes']['response']> {
  return {
    method: 'delete',
    path: '/security/triggerTypes',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/triggerTypes`
 *
 */
export function list(
  params?: IEndpoints['GET /security/triggerTypes']['parameters']
): EndpointRequest<IEndpoints['GET /security/triggerTypes']['response']> {
  return {
    method: 'get',
    path: '/security/triggerTypes',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/triggerTypes`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/triggerTypes']['body'],
  params?: IEndpoints['PATCH /security/triggerTypes']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/triggerTypes']['response']> {
  return {
    method: 'patch',
    path: '/security/triggerTypes',
    paramDefs: [],
    params,
    body,
  };
}
