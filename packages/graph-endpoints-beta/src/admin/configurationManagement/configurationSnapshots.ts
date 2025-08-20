import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}': Operation<
    '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationSnapshots': Operation<
    '/admin/configurationManagement/configurationSnapshots',
    'get'
  >;
  'GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}': Operation<
    '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}': Operation<
    '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    'patch'
  >;
  'POST /admin/configurationManagement/configurationSnapshots': Operation<
    '/admin/configurationManagement/configurationSnapshots',
    'post'
  >;
}

/**
 * `DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configurationBaseline-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationSnapshots`
 *
 */
export function list(
  params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshots']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationSnapshots']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationSnapshots',
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
 * `GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configurationBaseline-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement/configurationSnapshots/{configurationBaseline-id}',
    paramDefs: [{ name: 'configurationBaseline-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/configurationManagement/configurationSnapshots`
 *
 */
export function create(
  body: IEndpoints['POST /admin/configurationManagement/configurationSnapshots']['body'],
  params?: IEndpoints['POST /admin/configurationManagement/configurationSnapshots']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/configurationManagement/configurationSnapshots']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/configurationManagement/configurationSnapshots',
    paramDefs: [],
    params,
    body,
  };
}
