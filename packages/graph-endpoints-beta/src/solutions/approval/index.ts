export * as approvalItems from './approvalItems';
export * as operations from './operations';
export * as provision from './provision';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/approval': Operation<'/solutions/approval', 'delete'>;
  'GET /solutions/approval': Operation<'/solutions/approval', 'get'>;
  'PATCH /solutions/approval': Operation<'/solutions/approval', 'patch'>;
}

/**
 * `DELETE /solutions/approval`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/approval']['parameters']
): EndpointRequest<IEndpoints['DELETE /solutions/approval']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/approval',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /solutions/approval`
 *
 * Read the properties of an approvalSolution object to determine the provisioning state for a tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/approval']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/approval']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/approval`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/approval']['body'],
  params?: IEndpoints['PATCH /solutions/approval']['parameters']
): EndpointRequest<IEndpoints['PATCH /solutions/approval']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/approval',
    paramDefs: [],
    params,
    body,
  };
}
