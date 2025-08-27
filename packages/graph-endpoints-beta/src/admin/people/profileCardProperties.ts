import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people/profileCardProperties/{profileCardProperty-id}': Operation<
    '/admin/people/profileCardProperties/{profileCardProperty-id}',
    'delete'
  >;
  'GET /admin/people/profileCardProperties': Operation<
    '/admin/people/profileCardProperties',
    'get'
  >;
  'GET /admin/people/profileCardProperties/{profileCardProperty-id}': Operation<
    '/admin/people/profileCardProperties/{profileCardProperty-id}',
    'get'
  >;
  'PATCH /admin/people/profileCardProperties/{profileCardProperty-id}': Operation<
    '/admin/people/profileCardProperties/{profileCardProperty-id}',
    'patch'
  >;
  'POST /admin/people/profileCardProperties': Operation<
    '/admin/people/profileCardProperties',
    'post'
  >;
}

/**
 * `DELETE /admin/people/profileCardProperties/{profileCardProperty-id}`
 *
 * Delete the profileCardProperty object specified by its directoryPropertyName from the organization&#x27;s profile card, and remove any localized customizations for that property.
 */
export function del(
  params?: IEndpoints['DELETE /admin/people/profileCardProperties/{profileCardProperty-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/people/profileCardProperties/{profileCardProperty-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people/profileCardProperties/{profileCardProperty-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'profileCardProperty-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/people/profileCardProperties`
 *
 * Get a collection of profileCardProperty resources for an organization. Each resource is identified by its directoryPropertyName property.
 */
export function list(
  params?: IEndpoints['GET /admin/people/profileCardProperties']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/profileCardProperties']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/profileCardProperties',
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
 * `GET /admin/people/profileCardProperties/{profileCardProperty-id}`
 *
 * Retrieve the properties of a profileCardProperty entity. The profileCardProperty is identified by its directoryPropertyName property.
 */
export function get(
  params?: IEndpoints['GET /admin/people/profileCardProperties/{profileCardProperty-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/people/profileCardProperties/{profileCardProperty-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/profileCardProperties/{profileCardProperty-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'profileCardProperty-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/people/profileCardProperties/{profileCardProperty-id}`
 *
 * Update the properties of a profileCardProperty object, identified by its directoryPropertyName property.
 */
export function update(
  body: IEndpoints['PATCH /admin/people/profileCardProperties/{profileCardProperty-id}']['body'],
  params?: IEndpoints['PATCH /admin/people/profileCardProperties/{profileCardProperty-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/people/profileCardProperties/{profileCardProperty-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people/profileCardProperties/{profileCardProperty-id}',
    paramDefs: [{ name: 'profileCardProperty-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/people/profileCardProperties`
 *
 * Create a new profileCardProperty for an organization. The new property is identified by its directoryPropertyName property. For more information about how to add properties to the profile card for an organization, see Add or remove custom attributes on a profile card using the profile card API.
 */
export function create(
  body: IEndpoints['POST /admin/people/profileCardProperties']['body'],
  params?: IEndpoints['POST /admin/people/profileCardProperties']['parameters']
): EndpointRequest<IEndpoints['POST /admin/people/profileCardProperties']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/people/profileCardProperties',
    paramDefs: [],
    params,
    body,
  };
}
