import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /dataPolicyOperations/{dataPolicyOperation-id}': Operation<
    '/dataPolicyOperations/{dataPolicyOperation-id}',
    'delete'
  >;
  'GET /dataPolicyOperations': Operation<'/dataPolicyOperations', 'get'>;
  'GET /dataPolicyOperations/{dataPolicyOperation-id}': Operation<
    '/dataPolicyOperations/{dataPolicyOperation-id}',
    'get'
  >;
  'PATCH /dataPolicyOperations/{dataPolicyOperation-id}': Operation<
    '/dataPolicyOperations/{dataPolicyOperation-id}',
    'patch'
  >;
  'POST /dataPolicyOperations': Operation<'/dataPolicyOperations', 'post'>;
}

/**
 * `DELETE /dataPolicyOperations/{dataPolicyOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataPolicyOperations/{dataPolicyOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataPolicyOperations/{dataPolicyOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/dataPolicyOperations/{dataPolicyOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'dataPolicyOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataPolicyOperations`
 *
 * Retrieve the properties of a dataPolicyOperation object.
 */
export function list(
  params?: IEndpoints['GET /dataPolicyOperations']['parameters']
): EndpointRequest<IEndpoints['GET /dataPolicyOperations']['response']> {
  return {
    method: 'get',
    path: '/dataPolicyOperations',
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
 * `GET /dataPolicyOperations/{dataPolicyOperation-id}`
 *
 * Retrieve the properties of a dataPolicyOperation object.
 */
export function get(
  params?: IEndpoints['GET /dataPolicyOperations/{dataPolicyOperation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /dataPolicyOperations/{dataPolicyOperation-id}']['response']> {
  return {
    method: 'get',
    path: '/dataPolicyOperations/{dataPolicyOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'dataPolicyOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataPolicyOperations/{dataPolicyOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataPolicyOperations/{dataPolicyOperation-id}']['body'],
  params?: IEndpoints['PATCH /dataPolicyOperations/{dataPolicyOperation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /dataPolicyOperations/{dataPolicyOperation-id}']['response']> {
  return {
    method: 'patch',
    path: '/dataPolicyOperations/{dataPolicyOperation-id}',
    paramDefs: [{ name: 'dataPolicyOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataPolicyOperations`
 *
 */
export function create(
  body: IEndpoints['POST /dataPolicyOperations']['body'],
  params?: IEndpoints['POST /dataPolicyOperations']['parameters']
): EndpointRequest<IEndpoints['POST /dataPolicyOperations']['response']> {
  return {
    method: 'post',
    path: '/dataPolicyOperations',
    paramDefs: [],
    params,
    body,
  };
}
