export * as approval from './approval';
export * as backupRestore from './backupRestore';
export * as bookingBusinesses from './bookingBusinesses';
export * as businessScenarios from './businessScenarios';
export * as virtualEvents from './virtualEvents';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /solutions': Operation<'/solutions', 'get'>;
  'PATCH /solutions': Operation<'/solutions', 'patch'>;
  'GET /solutions/bookingCurrencies': Operation<'/solutions/bookingCurrencies', 'get'>;
  'POST /solutions/bookingCurrencies': Operation<'/solutions/bookingCurrencies', 'post'>;
  'GET /solutions/bookingCurrencies/{bookingCurrency-id}': Operation<
    '/solutions/bookingCurrencies/{bookingCurrency-id}',
    'get'
  >;
  'PATCH /solutions/bookingCurrencies/{bookingCurrency-id}': Operation<
    '/solutions/bookingCurrencies/{bookingCurrency-id}',
    'patch'
  >;
  'DELETE /solutions/bookingCurrencies/{bookingCurrency-id}': Operation<
    '/solutions/bookingCurrencies/{bookingCurrency-id}',
    'delete'
  >;
}

/**
 * `GET /solutions`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions']['parameters']
): EndpointRequest<IEndpoints['GET /solutions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions']['body']
): EndpointRequest<IEndpoints['PATCH /solutions']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions',
    body,
  };
}

export const bookingCurrencies = {
  /**
   * `GET /solutions/bookingCurrencies`
   *
   * Get a list of bookingCurrency objects available to a Microsoft Bookings business.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingCurrencies']['parameters']
  ): EndpointRequest<IEndpoints['GET /solutions/bookingCurrencies']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingCurrencies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/bookingCurrencies`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingCurrencies']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/bookingCurrencies']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingCurrencies',
      body,
    };
  },
  /**
   * `GET /solutions/bookingCurrencies/{bookingCurrency-id}`
   *
   * Get the properties of a bookingCurrency object that is available to a Microsoft Bookings business. Use the id property, which is the currency code, to specify the currency.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingCurrencies/{bookingCurrency-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingCurrency-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/bookingCurrencies/{bookingCurrency-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/bookingCurrencies/{bookingCurrency-id}',
      paramDefs: {
        path: ['bookingCurrency-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/bookingCurrencies/{bookingCurrency-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/bookingCurrencies/{bookingCurrency-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingCurrency-id'],
      },
      params,
    };
  },
};
