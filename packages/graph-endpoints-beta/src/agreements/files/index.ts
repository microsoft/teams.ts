export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'delete'
  >;
  'GET /agreements/{agreement-id}/files': Operation<'/agreements/{agreement-id}/files', 'get'>;
  'GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'get'
  >;
  'PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    'patch'
  >;
  'POST /agreements/{agreement-id}/files': Operation<'/agreements/{agreement-id}/files', 'post'>;
}

/**
 * `DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/files`
 *
 * PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
 */
export function list(
  params?: IEndpoints['GET /agreements/{agreement-id}/files']['parameters']
): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}/files']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/files',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 * PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/agreements/{agreement-id}/files/{agreementFileLocalization-id}',
    paramDefs: [
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /agreements/{agreement-id}/files`
 *
 */
export function create(
  body: IEndpoints['POST /agreements/{agreement-id}/files']['body'],
  params?: IEndpoints['POST /agreements/{agreement-id}/files']['parameters']
): EndpointRequest<IEndpoints['POST /agreements/{agreement-id}/files']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/agreements/{agreement-id}/files',
    paramDefs: [{ name: 'agreement-id', in: 'path' }],
    params,
    body,
  };
}
