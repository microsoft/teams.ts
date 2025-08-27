import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup`
 *
 * The section group that contains the section group. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}
