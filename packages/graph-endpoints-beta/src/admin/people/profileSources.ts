import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people/profileSources/{profileSource-id}': Operation<
    '/admin/people/profileSources/{profileSource-id}',
    'delete'
  >;
  'GET /admin/people/profileSources': Operation<'/admin/people/profileSources', 'get'>;
  'GET /admin/people/profileSources/{profileSource-id}': Operation<
    '/admin/people/profileSources/{profileSource-id}',
    'get'
  >;
  'PATCH /admin/people/profileSources/{profileSource-id}': Operation<
    '/admin/people/profileSources/{profileSource-id}',
    'patch'
  >;
  'POST /admin/people/profileSources': Operation<'/admin/people/profileSources', 'post'>;
}

/**
 * `DELETE /admin/people/profileSources/{profileSource-id}`
 *
 * Delete a profileSource object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/people/profileSources/{profileSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/people/profileSources/{profileSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people/profileSources/{profileSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'profileSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/people/profileSources`
 *
 * Get a list of the profileSource objects and their properties, which represent both external data sources and out-of-the-box Microsoft data sources configured for user profiles in an organization.
 */
export function list(
  params?: IEndpoints['GET /admin/people/profileSources']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/profileSources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/profileSources',
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
 * `GET /admin/people/profileSources/{profileSource-id}`
 *
 * A collection of profile source settings configured by an administrator in an organization.
 */
export function get(
  params?: IEndpoints['GET /admin/people/profileSources/{profileSource-id}']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/profileSources/{profileSource-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people/profileSources/{profileSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'profileSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/people/profileSources/{profileSource-id}`
 *
 * Update the properties of a profileSource object.
 */
export function update(
  body: IEndpoints['PATCH /admin/people/profileSources/{profileSource-id}']['body'],
  params?: IEndpoints['PATCH /admin/people/profileSources/{profileSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/people/profileSources/{profileSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people/profileSources/{profileSource-id}',
    paramDefs: [{ name: 'profileSource-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/people/profileSources`
 *
 * Create a new profileSource object.
 */
export function create(
  body: IEndpoints['POST /admin/people/profileSources']['body'],
  params?: IEndpoints['POST /admin/people/profileSources']['parameters']
): EndpointRequest<IEndpoints['POST /admin/people/profileSources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/people/profileSources',
    paramDefs: [],
    params,
    body,
  };
}
