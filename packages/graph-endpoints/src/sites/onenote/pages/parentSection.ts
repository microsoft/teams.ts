import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection`
 *
 * The section that contains the page. Read-only.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/pages/{onenotePage-id}/parentSection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}
