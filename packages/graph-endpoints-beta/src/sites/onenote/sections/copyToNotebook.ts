import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook': Operation<
    '/sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook`
 *
 * Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/onenote/sections/{onenoteSection-id}/copyToNotebook',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}
