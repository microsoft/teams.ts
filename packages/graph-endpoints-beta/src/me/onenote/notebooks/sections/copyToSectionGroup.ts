import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
}

/**
 * `POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup`
 *
 * Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup',
    paramDefs: [
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}
