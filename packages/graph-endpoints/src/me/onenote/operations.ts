import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/operations/{onenoteOperation-id}': Operation<
    '/me/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
  'GET /me/onenote/operations': Operation<'/me/onenote/operations', 'get'>;
  'GET /me/onenote/operations/{onenoteOperation-id}': Operation<
    '/me/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /me/onenote/operations/{onenoteOperation-id}': Operation<
    '/me/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'POST /me/onenote/operations': Operation<'/me/onenote/operations', 'post'>;
}

/**
 * `DELETE /me/onenote/operations/{onenoteOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/operations/{onenoteOperation-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/operations`
 *
 * Get the status of a long-running OneNote operation. This applies to operations that return the Operation-Location header in the response, such as CopyNotebook, CopyToNotebook, CopyToSectionGroup, and CopyToSection.    You can poll the Operation-Location endpoint until the status property returns completed or failed.  If the status is completed, the resourceLocation property contains the resource endpoint URI.  If the status is failed, the error and @api.diagnostics properties provide error information.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/operations']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/operations',
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
 * `GET /me/onenote/operations/{onenoteOperation-id}`
 *
 * Get the status of a long-running OneNote operation. This applies to operations that return the Operation-Location header in the response, such as CopyNotebook, CopyToNotebook, CopyToSectionGroup, and CopyToSection.    You can poll the Operation-Location endpoint until the status property returns completed or failed.  If the status is completed, the resourceLocation property contains the resource endpoint URI.  If the status is failed, the error and @api.diagnostics properties provide error information.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/operations/{onenoteOperation-id}']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/operations/{onenoteOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/operations/{onenoteOperation-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/operations/{onenoteOperation-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote/operations/{onenoteOperation-id}',
    paramDefs: [{ name: 'onenoteOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/operations`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/operations']['body'],
  params?: IEndpoints['POST /me/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/operations']['response']> {
  return {
    method: 'post',
    path: '/me/onenote/operations',
    paramDefs: [],
    params,
    body,
  };
}
