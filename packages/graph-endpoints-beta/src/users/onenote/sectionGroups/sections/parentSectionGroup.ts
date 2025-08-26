import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup`
 *
 * The section group that contains the section.  Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}
