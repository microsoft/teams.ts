export * as content from './content';
export * as copyToSection from './copyToSection';
export * as onenotePatchContent from './onenotePatchContent';
export * as parentNotebook from './parentNotebook';
export * as parentSection from './parentSection';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/pages/{onenotePage-id}': Operation<
    '/me/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /me/onenote/pages': Operation<'/me/onenote/pages', 'get'>;
  'GET /me/onenote/pages/{onenotePage-id}': Operation<'/me/onenote/pages/{onenotePage-id}', 'get'>;
  'PATCH /me/onenote/pages/{onenotePage-id}': Operation<
    '/me/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /me/onenote/pages': Operation<'/me/onenote/pages', 'post'>;
}

/**
 * `DELETE /me/onenote/pages/{onenotePage-id}`
 *
 * Delete a OneNote page.
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/pages`
 *
 * Retrieve a list of page objects.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/pages']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/pages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/pages/{onenotePage-id}`
 *
 * Retrieve the properties and relationships of a page object. Getting page information Access a page&#x27;s metadata by page identifier: Getting page content You can use the page&#x27;s content endpoint to get the HTML content of a page: The includeIDs&#x3D;true query option is used to update pages.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: [{ name: 'onenotePage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/pages`
 *
 * Create a new OneNote page in the default section of the default notebook. To create a page in a different section in the default notebook, you can use the sectionName query parameter.  Example: ../onenote/pages?sectionName&#x3D;My%20section The POST /onenote/pages operation is used only to create pages in the current user&#x27;s default notebook. If you&#x27;re targeting other notebooks, you can create pages in a specified section.
 */
export function create(
  body: IEndpoints['POST /me/onenote/pages']['body'],
  params?: IEndpoints['POST /me/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/pages']['response']> {
  return {
    method: 'post',
    path: '/me/onenote/pages',
    paramDefs: [],
    params,
    body,
  };
}
