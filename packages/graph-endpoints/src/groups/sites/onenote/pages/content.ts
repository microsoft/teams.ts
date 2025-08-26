import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    'put'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content`
 *
 * The page&#x27;s HTML content.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content`
 *
 * The page&#x27;s HTML content.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content`
 *
 * The page&#x27;s HTML content.
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
> {
  return {
    method: 'put',
    path: '/groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
    body,
  };
}
