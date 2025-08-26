import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}': Operation<
    '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    'delete'
  >;
  'GET /directory/pendingExternalUserProfiles': Operation<
    '/directory/pendingExternalUserProfiles',
    'get'
  >;
  'GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}': Operation<
    '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    'get'
  >;
  'PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}': Operation<
    '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    'patch'
  >;
  'POST /directory/pendingExternalUserProfiles': Operation<
    '/directory/pendingExternalUserProfiles',
    'post'
  >;
}

/**
 * `DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}`
 *
 * Delete a pendingExternalUserProfile object. Note: To permanently delete the pendingExternalUserProfile, follow permanently delete an item. To restore a pendingExternalUserProfile, follow restore a deleted item.
 */
export function del(
  params?: IEndpoints['DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'pendingExternalUserProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/pendingExternalUserProfiles`
 *
 * Retrieve the properties of all pendingExternalUserProfiles.
 */
export function list(
  params?: IEndpoints['GET /directory/pendingExternalUserProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /directory/pendingExternalUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/pendingExternalUserProfiles',
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
 * `GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}`
 *
 * Retrieve the properties of a specific pendingExternalUserProfile.
 */
export function get(
  params?: IEndpoints['GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'pendingExternalUserProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}`
 *
 * Update the properties of a pendingExternalUserProfile object.
 */
export function update(
  body: IEndpoints['PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['body'],
  params?: IEndpoints['PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/pendingExternalUserProfiles/{pendingExternalUserProfile-id}',
    paramDefs: [{ name: 'pendingExternalUserProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/pendingExternalUserProfiles`
 *
 * Create a new pendingExternalUserProfile object.
 */
export function create(
  body: IEndpoints['POST /directory/pendingExternalUserProfiles']['body'],
  params?: IEndpoints['POST /directory/pendingExternalUserProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /directory/pendingExternalUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/pendingExternalUserProfiles',
    paramDefs: [],
    params,
    body,
  };
}
