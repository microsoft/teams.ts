import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /filterOperators/{filterOperatorSchema-id}': Operation<
    '/filterOperators/{filterOperatorSchema-id}',
    'delete'
  >;
  'GET /filterOperators': Operation<'/filterOperators', 'get'>;
  'GET /filterOperators/{filterOperatorSchema-id}': Operation<
    '/filterOperators/{filterOperatorSchema-id}',
    'get'
  >;
  'PATCH /filterOperators/{filterOperatorSchema-id}': Operation<
    '/filterOperators/{filterOperatorSchema-id}',
    'patch'
  >;
  'POST /filterOperators': Operation<'/filterOperators', 'post'>;
}

/**
 * `DELETE /filterOperators/{filterOperatorSchema-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /filterOperators/{filterOperatorSchema-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /filterOperators/{filterOperatorSchema-id}']['response']> {
  return {
    method: 'delete',
    path: '/filterOperators/{filterOperatorSchema-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filterOperatorSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /filterOperators`
 *
 */
export function list(
  params?: IEndpoints['GET /filterOperators']['parameters']
): EndpointRequest<IEndpoints['GET /filterOperators']['response']> {
  return {
    method: 'get',
    path: '/filterOperators',
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
 * `GET /filterOperators/{filterOperatorSchema-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /filterOperators/{filterOperatorSchema-id}']['parameters']
): EndpointRequest<IEndpoints['GET /filterOperators/{filterOperatorSchema-id}']['response']> {
  return {
    method: 'get',
    path: '/filterOperators/{filterOperatorSchema-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filterOperatorSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /filterOperators/{filterOperatorSchema-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /filterOperators/{filterOperatorSchema-id}']['body'],
  params?: IEndpoints['PATCH /filterOperators/{filterOperatorSchema-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /filterOperators/{filterOperatorSchema-id}']['response']> {
  return {
    method: 'patch',
    path: '/filterOperators/{filterOperatorSchema-id}',
    paramDefs: [{ name: 'filterOperatorSchema-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /filterOperators`
 *
 */
export function create(
  body: IEndpoints['POST /filterOperators']['body'],
  params?: IEndpoints['POST /filterOperators']['parameters']
): EndpointRequest<IEndpoints['POST /filterOperators']['response']> {
  return {
    method: 'post',
    path: '/filterOperators',
    paramDefs: [],
    params,
    body,
  };
}
