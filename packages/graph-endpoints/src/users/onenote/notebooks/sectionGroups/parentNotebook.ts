import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook`
 *
 * The notebook that contains the section group. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}
