import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'get'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'patch'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomQuestion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/customQuestions`
 *
 * All custom questions of this business.
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
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
 * `GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
 *
 * All custom questions of this business.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
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
 * `PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomQuestion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/customQuestions`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customQuestions']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
