import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/me/onenote/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
}

/**
 * `POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent']['body'],
  params?: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/pages/{onenotePage-id}/onenotePatchContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/pages/{onenotePage-id}/onenotePatchContent',
    paramDefs: [{ name: 'onenotePage-id', in: 'path' }],
    params,
    body,
  };
}
