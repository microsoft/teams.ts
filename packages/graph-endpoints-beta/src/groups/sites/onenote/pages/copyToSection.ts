import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection`
 *
 * Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/copyToSection',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
    body,
  };
}
