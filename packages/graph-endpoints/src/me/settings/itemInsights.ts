import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'delete'>;
  'GET /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'get'>;
  'PATCH /me/settings/itemInsights': Operation<'/me/settings/itemInsights', 'patch'>;
}

/**
 * `DELETE /me/settings/itemInsights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/itemInsights']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/itemInsights']['response']> {
  return {
    method: 'delete',
    path: '/me/settings/itemInsights',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/settings/itemInsights`
 *
 * Get the user-customizable privacy settings for itemInsights and meeting hours insights.
 */
export function list(
  params?: IEndpoints['GET /me/settings/itemInsights']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/itemInsights']['response']> {
  return {
    method: 'get',
    path: '/me/settings/itemInsights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/itemInsights`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/itemInsights']['body'],
  params?: IEndpoints['PATCH /me/settings/itemInsights']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings/itemInsights']['response']> {
  return {
    method: 'patch',
    path: '/me/settings/itemInsights',
    paramDefs: [],
    params,
    body,
  };
}
