import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/onenotePatchContent',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
    body,
  };
}
