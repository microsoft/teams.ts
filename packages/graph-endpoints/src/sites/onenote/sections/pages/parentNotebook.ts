import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook': Operation<
    '/sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook`
 *
 * The notebook that contains the page.  Read-only.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}
