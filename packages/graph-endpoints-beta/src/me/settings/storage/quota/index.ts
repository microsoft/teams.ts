export * as services from './services';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/storage/quota': Operation<'/me/settings/storage/quota', 'delete'>;
  'GET /me/settings/storage/quota': Operation<'/me/settings/storage/quota', 'get'>;
  'PATCH /me/settings/storage/quota': Operation<'/me/settings/storage/quota', 'patch'>;
}

/**
 * `DELETE /me/settings/storage/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/storage/quota']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/settings/storage/quota',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/settings/storage/quota`
 *
 * Read the properties and relationships of a unifiedStorageQuota object.
 */
export function get(
  params?: IEndpoints['GET /me/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/storage/quota']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/storage/quota',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/storage/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/storage/quota']['body'],
  params?: IEndpoints['PATCH /me/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings/storage/quota']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings/storage/quota',
    paramDefs: [],
    params,
    body,
  };
}
