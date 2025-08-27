import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingCurrencies/{bookingCurrency-id}': Operation<
    '/solutions/bookingCurrencies/{bookingCurrency-id}',
    'delete'
  >;
  'GET /solutions/bookingCurrencies': Operation<'/solutions/bookingCurrencies', 'get'>;
  'GET /solutions/bookingCurrencies/{bookingCurrency-id}': Operation<
    '/solutions/bookingCurrencies/{bookingCurrency-id}',
    'get'
  >;
  'PATCH /solutions/bookingCurrencies/{bookingCurrency-id}': Operation<
    '/solutions/bookingCurrencies/{bookingCurrency-id}',
    'patch'
  >;
  'POST /solutions/bookingCurrencies': Operation<'/solutions/bookingCurrencies', 'post'>;
}

/**
 * `DELETE /solutions/bookingCurrencies/{bookingCurrency-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/bookingCurrencies/{bookingCurrency-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingCurrency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingCurrencies`
 *
 * Get a list of bookingCurrency objects available to a Microsoft Bookings business.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingCurrencies']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/bookingCurrencies']['response']> {
  return {
    method: 'get',
    path: '/solutions/bookingCurrencies',
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
 * `GET /solutions/bookingCurrencies/{bookingCurrency-id}`
 *
 * Get the properties of a bookingCurrency object that is available to a Microsoft Bookings business. Use the id property, which is the currency code, to specify the currency.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingCurrencies/{bookingCurrency-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingCurrency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/bookingCurrencies/{bookingCurrency-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/bookingCurrencies/{bookingCurrency-id}',
    paramDefs: [{ name: 'bookingCurrency-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingCurrencies`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/bookingCurrencies']['body'],
  params?: IEndpoints['POST /solutions/bookingCurrencies']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/bookingCurrencies']['response']> {
  return {
    method: 'post',
    path: '/solutions/bookingCurrencies',
    paramDefs: [],
    params,
    body,
  };
}
