import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/pages/{onenotePage-id}/content',
    'delete'
  >;
  'GET /me/onenote/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/pages/{onenotePage-id}/content',
    'get'
  >;
  'PUT /me/onenote/pages/{onenotePage-id}/content': Operation<
    '/me/onenote/pages/{onenotePage-id}/content',
    'put'
  >;
}

/**
 * `DELETE /me/onenote/pages/{onenotePage-id}/content`
 *
 * The page&#x27;s HTML content.
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}/content']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}/content']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/pages/{onenotePage-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/pages/{onenotePage-id}/content`
 *
 * The page&#x27;s HTML content.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/pages/{onenotePage-id}/content']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/pages/{onenotePage-id}/content']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/pages/{onenotePage-id}/content',
    paramDefs: [{ name: 'onenotePage-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /me/onenote/pages/{onenotePage-id}/content`
 *
 * Update the content of a OneNote page.
 */
export function set(
  body: IEndpoints['PUT /me/onenote/pages/{onenotePage-id}/content']['body'],
  params?: IEndpoints['PUT /me/onenote/pages/{onenotePage-id}/content']['parameters']
): EndpointRequest<IEndpoints['PUT /me/onenote/pages/{onenotePage-id}/content']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/me/onenote/pages/{onenotePage-id}/content',
    paramDefs: [{ name: 'onenotePage-id', in: 'path' }],
    params,
    body,
  };
}
