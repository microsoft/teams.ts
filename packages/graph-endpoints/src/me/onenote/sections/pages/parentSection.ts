import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection': Operation<
    '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection`
 *
 * The section that contains the page. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenoteSection-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}
