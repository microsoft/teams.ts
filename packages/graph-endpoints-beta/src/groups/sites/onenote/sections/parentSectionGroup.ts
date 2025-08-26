import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup`
 *
 * The section group that contains the section.  Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/parentSectionGroup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}
