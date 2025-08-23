import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/itemInsights': Operation<
    '/users/{user-id}/settings/itemInsights',
    'delete'
  >;
  'GET /users/{user-id}/settings/itemInsights': Operation<
    '/users/{user-id}/settings/itemInsights',
    'get'
  >;
  'PATCH /users/{user-id}/settings/itemInsights': Operation<
    '/users/{user-id}/settings/itemInsights',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/itemInsights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/itemInsights']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings/itemInsights']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/settings/itemInsights',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/itemInsights`
 *
 * The user&#x27;s settings for the visibility of meeting hour insights, and insights derived between a user and other items in Microsoft 365, such as documents or sites. Get userInsightsSettings through this navigation property.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/itemInsights']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/itemInsights']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/settings/itemInsights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/itemInsights`
 *
 * Update the privacy settings for itemInsights and meeting hours insights of a user.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/itemInsights']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/itemInsights']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings/itemInsights']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/settings/itemInsights',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
