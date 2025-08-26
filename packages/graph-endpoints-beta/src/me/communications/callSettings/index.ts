export * as delegates from './delegates';
export * as delegators from './delegators';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/communications/callSettings': Operation<'/me/communications/callSettings', 'delete'>;
  'GET /me/communications/callSettings': Operation<'/me/communications/callSettings', 'get'>;
  'PATCH /me/communications/callSettings': Operation<'/me/communications/callSettings', 'patch'>;
}

/**
 * `DELETE /me/communications/callSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/communications/callSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/communications/callSettings`
 *
 * The call settings assigned to the user.
 */
export function list(
  params?: IEndpoints['GET /me/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['GET /me/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/communications/callSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/communications/callSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/communications/callSettings']['body'],
  params?: IEndpoints['PATCH /me/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/communications/callSettings',
    paramDefs: [],
    params,
    body,
  };
}
