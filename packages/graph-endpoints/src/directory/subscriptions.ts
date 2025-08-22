import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/subscriptions/{companySubscription-id}': Operation<
    '/directory/subscriptions/{companySubscription-id}',
    'delete'
  >;
  'GET /directory/subscriptions': Operation<'/directory/subscriptions', 'get'>;
  'GET /directory/subscriptions/{companySubscription-id}': Operation<
    '/directory/subscriptions/{companySubscription-id}',
    'get'
  >;
  'PATCH /directory/subscriptions/{companySubscription-id}': Operation<
    '/directory/subscriptions/{companySubscription-id}',
    'patch'
  >;
  'POST /directory/subscriptions': Operation<'/directory/subscriptions', 'post'>;
}

/**
 * `DELETE /directory/subscriptions/{companySubscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/subscriptions/{companySubscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/subscriptions/{companySubscription-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/subscriptions/{companySubscription-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'companySubscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/subscriptions`
 *
 * Get the list of commercial subscriptions that an organization acquired.
 */
export function list(
  params?: IEndpoints['GET /directory/subscriptions']['parameters']
): EndpointRequest<IEndpoints['GET /directory/subscriptions']['response']> {
  return {
    method: 'get',
    path: '/directory/subscriptions',
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
 * `GET /directory/subscriptions/{companySubscription-id}`
 *
 * Get a specific commercial subscription that an organization acquired.
 */
export function get(
  params?: IEndpoints['GET /directory/subscriptions/{companySubscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/subscriptions/{companySubscription-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/subscriptions/{companySubscription-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'companySubscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/subscriptions/{companySubscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/subscriptions/{companySubscription-id}']['body'],
  params?: IEndpoints['PATCH /directory/subscriptions/{companySubscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/subscriptions/{companySubscription-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/subscriptions/{companySubscription-id}',
    paramDefs: [{ name: 'companySubscription-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /directory/subscriptions']['body'],
  params?: IEndpoints['POST /directory/subscriptions']['parameters']
): EndpointRequest<IEndpoints['POST /directory/subscriptions']['response']> {
  return {
    method: 'post',
    path: '/directory/subscriptions',
    paramDefs: [],
    params,
    body,
  };
}
