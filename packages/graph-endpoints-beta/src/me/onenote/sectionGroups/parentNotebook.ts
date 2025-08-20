import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/onenote/sectionGroups/{sectionGroup-id}/parentNotebook': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/parentNotebook',
    'get'
  >;
}

/**
 * `GET /me/onenote/sectionGroups/{sectionGroup-id}/parentNotebook`
 *
 * The notebook that contains the section group. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/parentNotebook']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/parentNotebook']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/parentNotebook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}
