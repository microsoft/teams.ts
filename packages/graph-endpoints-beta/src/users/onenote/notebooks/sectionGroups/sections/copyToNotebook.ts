import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook`
 *
 * Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}
