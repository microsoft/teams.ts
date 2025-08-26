import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook`
 *
 * The notebook that contains the page.  Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/parentNotebook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}
