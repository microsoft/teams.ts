import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'delete'
  >;
  'GET /threatSubmission/urlThreats': Operation<'/threatSubmission/urlThreats', 'get'>;
  'GET /threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'get'
  >;
  'PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'patch'
  >;
  'POST /threatSubmission/urlThreats': Operation<'/threatSubmission/urlThreats', 'post'>;
}

/**
 * `DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'urlThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /threatSubmission/urlThreats`
 *
 */
export function list(
  params?: IEndpoints['GET /threatSubmission/urlThreats']['parameters']
): EndpointRequest<IEndpoints['GET /threatSubmission/urlThreats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/urlThreats',
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
 * `GET /threatSubmission/urlThreats/{urlThreatSubmission-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'urlThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}']['body'],
  params?: IEndpoints['PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    paramDefs: [{ name: 'urlThreatSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /threatSubmission/urlThreats`
 *
 */
export function create(
  body: IEndpoints['POST /threatSubmission/urlThreats']['body'],
  params?: IEndpoints['POST /threatSubmission/urlThreats']['parameters']
): EndpointRequest<IEndpoints['POST /threatSubmission/urlThreats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/threatSubmission/urlThreats',
    paramDefs: [],
    params,
    body,
  };
}
