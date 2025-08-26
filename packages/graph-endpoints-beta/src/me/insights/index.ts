export * as shared from './shared';
export * as trending from './trending';
export * as used from './used';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/insights': Operation<'/me/insights', 'delete'>;
  'GET /me/insights': Operation<'/me/insights', 'get'>;
  'PATCH /me/insights': Operation<'/me/insights', 'patch'>;
}

/**
 * `DELETE /me/insights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/insights']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/insights']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/insights',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/insights`
 *
 * Represents relationships between a user and items such as OneDrive for work or school documents, calculated using advanced analytics and machine learning techniques. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/insights']['parameters']
): EndpointRequest<IEndpoints['GET /me/insights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/insights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/insights`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/insights']['body'],
  params?: IEndpoints['PATCH /me/insights']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/insights']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/insights',
    paramDefs: [],
    params,
    body,
  };
}
