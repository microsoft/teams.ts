import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup`
 *
 * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/copyToSectionGroup',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}
