import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook`
 *
 * The notebook that contains the section.  Read-only.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}
