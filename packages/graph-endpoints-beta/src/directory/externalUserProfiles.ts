import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/externalUserProfiles/{externalUserProfile-id}': Operation<
    '/directory/externalUserProfiles/{externalUserProfile-id}',
    'delete'
  >;
  'GET /directory/externalUserProfiles': Operation<'/directory/externalUserProfiles', 'get'>;
  'GET /directory/externalUserProfiles/{externalUserProfile-id}': Operation<
    '/directory/externalUserProfiles/{externalUserProfile-id}',
    'get'
  >;
  'PATCH /directory/externalUserProfiles/{externalUserProfile-id}': Operation<
    '/directory/externalUserProfiles/{externalUserProfile-id}',
    'patch'
  >;
  'POST /directory/externalUserProfiles': Operation<'/directory/externalUserProfiles', 'post'>;
}

/**
 * `DELETE /directory/externalUserProfiles/{externalUserProfile-id}`
 *
 * Delete an externalUserProfile object. Note: To permanently delete the externalUserProfile, follow permanently delete an item. To restore an externalUserProfile, follow restore a deleted item.
 */
export function del(
  params?: IEndpoints['DELETE /directory/externalUserProfiles/{externalUserProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/externalUserProfiles/{externalUserProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/externalUserProfiles/{externalUserProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalUserProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/externalUserProfiles`
 *
 * Retrieve the properties of all externalUserProfiles
 */
export function list(
  params?: IEndpoints['GET /directory/externalUserProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /directory/externalUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/externalUserProfiles',
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
 * `GET /directory/externalUserProfiles/{externalUserProfile-id}`
 *
 * Retrieve the properties of a specific externalUserProfile.
 */
export function get(
  params?: IEndpoints['GET /directory/externalUserProfiles/{externalUserProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/externalUserProfiles/{externalUserProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/externalUserProfiles/{externalUserProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalUserProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/externalUserProfiles/{externalUserProfile-id}`
 *
 * Update the properties of a externalUserProfile object.
 */
export function update(
  body: IEndpoints['PATCH /directory/externalUserProfiles/{externalUserProfile-id}']['body'],
  params?: IEndpoints['PATCH /directory/externalUserProfiles/{externalUserProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/externalUserProfiles/{externalUserProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/externalUserProfiles/{externalUserProfile-id}',
    paramDefs: [{ name: 'externalUserProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/externalUserProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /directory/externalUserProfiles']['body'],
  params?: IEndpoints['POST /directory/externalUserProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /directory/externalUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/externalUserProfiles',
    paramDefs: [],
    params,
    body,
  };
}
