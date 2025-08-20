import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/me/outlook/masterCategories/{outlookCategory-id}',
    'delete'
  >;
  'GET /me/outlook/masterCategories': Operation<'/me/outlook/masterCategories', 'get'>;
  'GET /me/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/me/outlook/masterCategories/{outlookCategory-id}',
    'get'
  >;
  'PATCH /me/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/me/outlook/masterCategories/{outlookCategory-id}',
    'patch'
  >;
  'POST /me/outlook/masterCategories': Operation<'/me/outlook/masterCategories', 'post'>;
}

/**
 * `DELETE /me/outlook/masterCategories/{outlookCategory-id}`
 *
 * Delete the specified outlookCategory object.
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/masterCategories/{outlookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/masterCategories/{outlookCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/masterCategories/{outlookCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outlookCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/masterCategories`
 *
 * Get all the categories that have been defined for a user.
 */
export function list(
  params?: IEndpoints['GET /me/outlook/masterCategories']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/masterCategories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/masterCategories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/masterCategories/{outlookCategory-id}`
 *
 * Get the properties and relationships of the specified outlookCategory object.
 */
export function get(
  params?: IEndpoints['GET /me/outlook/masterCategories/{outlookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/masterCategories/{outlookCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/masterCategories/{outlookCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/outlook/masterCategories/{outlookCategory-id}`
 *
 * Update the writable property, color, of the specified outlookCategory object. You can&#x27;t modify the displayName property once you have created the category.
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/masterCategories/{outlookCategory-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/masterCategories/{outlookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/outlook/masterCategories/{outlookCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/masterCategories/{outlookCategory-id}',
    paramDefs: [{ name: 'outlookCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/outlook/masterCategories`
 *
 * Create an outlookCategory object in the user&#x27;s master list of categories.
 */
export function create(
  body: IEndpoints['POST /me/outlook/masterCategories']['body'],
  params?: IEndpoints['POST /me/outlook/masterCategories']['parameters']
): EndpointRequest<IEndpoints['POST /me/outlook/masterCategories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/masterCategories',
    paramDefs: [],
    params,
    body,
  };
}
