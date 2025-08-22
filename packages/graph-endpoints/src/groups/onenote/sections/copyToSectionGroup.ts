import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/groups/{group-id}/onenote/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/copyToSectionGroup`
 *
 * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/onenote/sections/{onenoteSection-id}/copyToSectionGroup',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}
