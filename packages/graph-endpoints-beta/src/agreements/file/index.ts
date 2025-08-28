export * as localizations from './localizations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}/file': Operation<'/agreements/{agreement-id}/file', 'delete'>;
  'GET /agreements/{agreement-id}/file': Operation<'/agreements/{agreement-id}/file', 'get'>;
  'PATCH /agreements/{agreement-id}/file': Operation<'/agreements/{agreement-id}/file', 'patch'>;
}

/**
 * `DELETE /agreements/{agreement-id}/file`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}/file']['parameters']
): EndpointRequest<IEndpoints['DELETE /agreements/{agreement-id}/file']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/agreements/{agreement-id}/file',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'agreement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/file`
 *
 * Retrieve the details of an agreement file, including the language and version information. The default file can have multiple versions, each with its own language, that can be retrieved by specifying the Accept-Language header.
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}/file']['parameters']
): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}/file']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/file',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}/file`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}/file']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}/file']['parameters']
): EndpointRequest<IEndpoints['PATCH /agreements/{agreement-id}/file']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/agreements/{agreement-id}/file',
    paramDefs: [{ name: 'agreement-id', in: 'path' }],
    params,
    body,
  };
}
