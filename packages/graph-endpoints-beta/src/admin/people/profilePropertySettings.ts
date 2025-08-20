import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}': Operation<
    '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    'delete'
  >;
  'GET /admin/people/profilePropertySettings': Operation<
    '/admin/people/profilePropertySettings',
    'get'
  >;
  'GET /admin/people/profilePropertySettings/{profilePropertySetting-id}': Operation<
    '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    'get'
  >;
  'PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}': Operation<
    '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    'patch'
  >;
  'POST /admin/people/profilePropertySettings': Operation<
    '/admin/people/profilePropertySettings',
    'post'
  >;
}

/**
 * `DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}`
 *
 * Delete a profilePropertySetting object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/people/profilePropertySettings/{profilePropertySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'profilePropertySetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/people/profilePropertySettings`
 *
 * Get a collection of profilePropertySetting objects that define the configuration for user profile properties in an organization. The id property identifies each resource object uniquely.
 */
export function list(
  params?: IEndpoints['GET /admin/people/profilePropertySettings']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/profilePropertySettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/profilePropertySettings',
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
 * `GET /admin/people/profilePropertySettings/{profilePropertySetting-id}`
 *
 * Read the properties and relationships of a profilePropertySetting object.
 */
export function get(
  params?: IEndpoints['GET /admin/people/profilePropertySettings/{profilePropertySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/people/profilePropertySettings/{profilePropertySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'profilePropertySetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}`
 *
 * Update the properties of a profilePropertySetting object.
 */
export function update(
  body: IEndpoints['PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}']['body'],
  params?: IEndpoints['PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/people/profilePropertySettings/{profilePropertySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people/profilePropertySettings/{profilePropertySetting-id}',
    paramDefs: [{ name: 'profilePropertySetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/people/profilePropertySettings`
 *
 * Create a new profilePropertySetting object.
 */
export function create(
  body: IEndpoints['POST /admin/people/profilePropertySettings']['body'],
  params?: IEndpoints['POST /admin/people/profilePropertySettings']['parameters']
): EndpointRequest<IEndpoints['POST /admin/people/profilePropertySettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/people/profilePropertySettings',
    paramDefs: [],
    params,
    body,
  };
}
