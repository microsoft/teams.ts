import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /programControlTypes/{programControlType-id}': Operation<
    '/programControlTypes/{programControlType-id}',
    'delete'
  >;
  'GET /programControlTypes': Operation<'/programControlTypes', 'get'>;
  'GET /programControlTypes/{programControlType-id}': Operation<
    '/programControlTypes/{programControlType-id}',
    'get'
  >;
  'PATCH /programControlTypes/{programControlType-id}': Operation<
    '/programControlTypes/{programControlType-id}',
    'patch'
  >;
  'POST /programControlTypes': Operation<'/programControlTypes', 'post'>;
}

/**
 * `DELETE /programControlTypes/{programControlType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /programControlTypes/{programControlType-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /programControlTypes/{programControlType-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programControlTypes/{programControlType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'programControlType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programControlTypes`
 *
 * In the Microsoft Entra access reviews feature, list all the programControlType objects.
 */
export function list(
  params?: IEndpoints['GET /programControlTypes']['parameters']
): EndpointRequest<IEndpoints['GET /programControlTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControlTypes',
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
 * `GET /programControlTypes/{programControlType-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /programControlTypes/{programControlType-id}']['parameters']
): EndpointRequest<IEndpoints['GET /programControlTypes/{programControlType-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControlTypes/{programControlType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'programControlType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /programControlTypes/{programControlType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /programControlTypes/{programControlType-id}']['body'],
  params?: IEndpoints['PATCH /programControlTypes/{programControlType-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /programControlTypes/{programControlType-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programControlTypes/{programControlType-id}',
    paramDefs: [{ name: 'programControlType-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /programControlTypes`
 *
 */
export function create(
  body: IEndpoints['POST /programControlTypes']['body'],
  params?: IEndpoints['POST /programControlTypes']['parameters']
): EndpointRequest<IEndpoints['POST /programControlTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/programControlTypes',
    paramDefs: [],
    params,
    body,
  };
}
