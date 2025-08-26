import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/photo': Operation<'/me/photo', 'delete'>;
  'GET /me/photo': Operation<'/me/photo', 'get'>;
  'PATCH /me/photo': Operation<'/me/photo', 'patch'>;
}

/**
 * `DELETE /me/photo`
 *
 * Delete the photo for the signed-in user or the specified group.
 */
export function del(
  params?: IEndpoints['DELETE /me/photo']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/photo']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/photo',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/photo`
 *
 * The user&#x27;s profile photo. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/photo']['parameters']
): EndpointRequest<IEndpoints['GET /me/photo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/photo`
 *
 * Update the photo for the specified contact, group, team, or user in a tenant. The size of the photo you can update to is limited to 4 MB. You can use either PATCH or PUT for this operation.
 */
export function update(
  body: IEndpoints['PATCH /me/photo']['body'],
  params?: IEndpoints['PATCH /me/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/photo']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/photo',
    paramDefs: [],
    params,
    body,
  };
}
