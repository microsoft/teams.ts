import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}': Operation<
    '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    'delete'
  >;
  'GET /reports/applicationSignInDetailedSummary': Operation<
    '/reports/applicationSignInDetailedSummary',
    'get'
  >;
  'GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}': Operation<
    '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    'get'
  >;
  'PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}': Operation<
    '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    'patch'
  >;
  'POST /reports/applicationSignInDetailedSummary': Operation<
    '/reports/applicationSignInDetailedSummary',
    'post'
  >;
}

/**
 * `DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'applicationSignInDetailedSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/applicationSignInDetailedSummary`
 *
 * Retrieve the applicationSignInDetailedSummary objects.
 */
export function get(
  params?: IEndpoints['GET /reports/applicationSignInDetailedSummary']['parameters']
): EndpointRequest<IEndpoints['GET /reports/applicationSignInDetailedSummary']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/applicationSignInDetailedSummary',
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
 * `GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}`
 *
 * Retrieve the properties and relationships of an applicationSignInDetailedSummary object.
 */
export function get$1(
  params?: IEndpoints['GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'applicationSignInDetailedSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['body'],
  params?: IEndpoints['PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    paramDefs: [{ name: 'applicationSignInDetailedSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/applicationSignInDetailedSummary`
 *
 */
export function create(
  body: IEndpoints['POST /reports/applicationSignInDetailedSummary']['body'],
  params?: IEndpoints['POST /reports/applicationSignInDetailedSummary']['parameters']
): EndpointRequest<IEndpoints['POST /reports/applicationSignInDetailedSummary']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/applicationSignInDetailedSummary',
    paramDefs: [],
    params,
    body,
  };
}
