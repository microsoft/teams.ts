import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/me/onenote/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
}

/**
 * `POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup`
 *
 * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
  params?: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['response']
> {
  return {
    method: 'post',
    path: '/me/onenote/sections/{onenoteSection-id}/copyToSectionGroup',
    paramDefs: [{ name: 'onenoteSection-id', in: 'path' }],
    params,
    body,
  };
}
