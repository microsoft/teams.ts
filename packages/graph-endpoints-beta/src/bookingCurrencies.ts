import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /bookingCurrencies/{bookingCurrency-id}': Operation<
    '/bookingCurrencies/{bookingCurrency-id}',
    'delete'
  >;
  'GET /bookingCurrencies': Operation<'/bookingCurrencies', 'get'>;
  'GET /bookingCurrencies/{bookingCurrency-id}': Operation<
    '/bookingCurrencies/{bookingCurrency-id}',
    'get'
  >;
  'PATCH /bookingCurrencies/{bookingCurrency-id}': Operation<
    '/bookingCurrencies/{bookingCurrency-id}',
    'patch'
  >;
  'POST /bookingCurrencies': Operation<'/bookingCurrencies', 'post'>;
}

/**
 * `DELETE /bookingCurrencies/{bookingCurrency-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingCurrencies/{bookingCurrency-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /bookingCurrencies/{bookingCurrency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingCurrencies/{bookingCurrency-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingCurrency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingCurrencies`
 *
 */
export function list(
  params?: IEndpoints['GET /bookingCurrencies']['parameters']
): EndpointRequest<IEndpoints['GET /bookingCurrencies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingCurrencies',
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
 * `GET /bookingCurrencies/{bookingCurrency-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /bookingCurrencies/{bookingCurrency-id}']['parameters']
): EndpointRequest<IEndpoints['GET /bookingCurrencies/{bookingCurrency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingCurrencies/{bookingCurrency-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingCurrency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /bookingCurrencies/{bookingCurrency-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingCurrencies/{bookingCurrency-id}']['body'],
  params?: IEndpoints['PATCH /bookingCurrencies/{bookingCurrency-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /bookingCurrencies/{bookingCurrency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingCurrencies/{bookingCurrency-id}',
    paramDefs: [{ name: 'bookingCurrency-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /bookingCurrencies`
 *
 */
export function create(
  body: IEndpoints['POST /bookingCurrencies']['body'],
  params?: IEndpoints['POST /bookingCurrencies']['parameters']
): EndpointRequest<IEndpoints['POST /bookingCurrencies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingCurrencies',
    paramDefs: [],
    params,
    body,
  };
}
