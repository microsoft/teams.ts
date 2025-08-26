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
    method: 'delete',
    path: '/me/photo',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
  * `GET /me/photo`
  *
  * Get the specified profilePhoto or its metadata (profilePhoto properties). The supported sizes of HD photos on Microsoft 365 are as follows: 48x48, 64x64, 96x96, 120x120, 240x240,
360x360, 432x432, 504x504, and 648x648. Photos can be any dimension if they&#x27;re stored in Microsoft Entra ID. You can get the metadata of the largest available photo or specify a size to get the metadata for that photo size.
If the size you request is unavailable, you can still get a smaller size that the user has uploaded and made available.
For example, if the user uploads a photo that is 504x504 pixels, all but the 648x648 size of the photo is available for download.
  */
export function get(
  params?: IEndpoints['GET /me/photo']['parameters']
): EndpointRequest<IEndpoints['GET /me/photo']['response']> {
  return {
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
    method: 'patch',
    path: '/me/photo',
    paramDefs: [],
    params,
    body,
  };
}
