import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /functions/{attributeMappingFunctionSchema-id}': Operation<
    '/functions/{attributeMappingFunctionSchema-id}',
    'delete'
  >;
  'GET /functions': Operation<'/functions', 'get'>;
  'GET /functions/{attributeMappingFunctionSchema-id}': Operation<
    '/functions/{attributeMappingFunctionSchema-id}',
    'get'
  >;
  'PATCH /functions/{attributeMappingFunctionSchema-id}': Operation<
    '/functions/{attributeMappingFunctionSchema-id}',
    'patch'
  >;
  'POST /functions': Operation<'/functions', 'post'>;
}

/**
 * `DELETE /functions/{attributeMappingFunctionSchema-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /functions/{attributeMappingFunctionSchema-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /functions/{attributeMappingFunctionSchema-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/functions/{attributeMappingFunctionSchema-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'attributeMappingFunctionSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /functions`
 *
 */
export function list(
  params?: IEndpoints['GET /functions']['parameters']
): EndpointRequest<IEndpoints['GET /functions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/functions',
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
 * `GET /functions/{attributeMappingFunctionSchema-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /functions/{attributeMappingFunctionSchema-id}']['parameters']
): EndpointRequest<IEndpoints['GET /functions/{attributeMappingFunctionSchema-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/functions/{attributeMappingFunctionSchema-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'attributeMappingFunctionSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /functions/{attributeMappingFunctionSchema-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /functions/{attributeMappingFunctionSchema-id}']['body'],
  params?: IEndpoints['PATCH /functions/{attributeMappingFunctionSchema-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /functions/{attributeMappingFunctionSchema-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/functions/{attributeMappingFunctionSchema-id}',
    paramDefs: [{ name: 'attributeMappingFunctionSchema-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /functions`
 *
 */
export function create(
  body: IEndpoints['POST /functions']['body'],
  params?: IEndpoints['POST /functions']['parameters']
): EndpointRequest<IEndpoints['POST /functions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/functions',
    paramDefs: [],
    params,
    body,
  };
}
