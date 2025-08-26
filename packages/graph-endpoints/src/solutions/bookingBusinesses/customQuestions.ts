import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'get'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
 *
 * Delete a bookingCustomQuestion object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomQuestion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
 *
 * Get the bookingCustomQuestion resources associated with a bookingBusiness.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
 *
 * Read the properties and relationships of a bookingCustomQuestion object.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomQuestion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
 *
 * Update the properties of a bookingCustomQuestion object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomQuestion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
 *
 * Create a new bookingCustomQuestion object.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
