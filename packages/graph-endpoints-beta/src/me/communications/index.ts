export * as callSettings from './callSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/communications': Operation<'/me/communications', 'delete'>;
  'GET /me/communications': Operation<'/me/communications', 'get'>;
  'PATCH /me/communications': Operation<'/me/communications', 'patch'>;
}

/**
 * `DELETE /me/communications`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/communications']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/communications']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/communications',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/communications`
 *
 * The user&#x27;s communications settings on Teams.
 */
export function list(
  params?: IEndpoints['GET /me/communications']['parameters']
): EndpointRequest<IEndpoints['GET /me/communications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/communications',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/communications`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/communications']['body'],
  params?: IEndpoints['PATCH /me/communications']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/communications']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/communications',
    paramDefs: [],
    params,
    body,
  };
}
