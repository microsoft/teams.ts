import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `GET /me/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup`
 *
 * The section group that contains the section group. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}
