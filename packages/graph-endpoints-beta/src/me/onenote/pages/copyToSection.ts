import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/onenote/pages/{onenotePage-id}/copyToSection': Operation<
    '/me/onenote/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
}

/**
 * `POST /me/onenote/pages/{onenotePage-id}/copyToSection`
 *
 * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/copyToSection']['body'],
  params?: IEndpoints['POST /me/onenote/pages/{onenotePage-id}/copyToSection']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/pages/{onenotePage-id}/copyToSection']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/pages/{onenotePage-id}/copyToSection',
    paramDefs: [{ name: 'onenotePage-id', in: 'path' }],
    params,
    body,
  };
}
