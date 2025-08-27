import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook': Operation<
    '/me/onenote/sections/{onenoteSection-id}/copyToNotebook',
    'post'
  >;
}

/**
 * `POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook`
 *
 * Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook']['body'],
  params?: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/sections/{onenoteSection-id}/copyToNotebook',
    paramDefs: [{ name: 'onenoteSection-id', in: 'path' }],
    params,
    body,
  };
}
