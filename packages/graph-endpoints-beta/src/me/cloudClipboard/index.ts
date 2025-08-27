export * as items from './items';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/cloudClipboard': Operation<'/me/cloudClipboard', 'delete'>;
  'GET /me/cloudClipboard': Operation<'/me/cloudClipboard', 'get'>;
  'PATCH /me/cloudClipboard': Operation<'/me/cloudClipboard', 'patch'>;
}

/**
 * `DELETE /me/cloudClipboard`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/cloudClipboard',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/cloudClipboard`
 *
 */
export function get(
  params?: IEndpoints['GET /me/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudClipboard',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/cloudClipboard`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/cloudClipboard']['body'],
  params?: IEndpoints['PATCH /me/cloudClipboard']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/cloudClipboard']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/cloudClipboard',
    paramDefs: [],
    params,
    body,
  };
}
