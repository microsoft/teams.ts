import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup`
 *
 * The section group that contains the section.  Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}
