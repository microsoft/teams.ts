import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'delete'
  >;
  'GET /threatSubmission/fileThreats': Operation<'/threatSubmission/fileThreats', 'get'>;
  'GET /threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'get'
  >;
  'PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'patch'
  >;
  'POST /threatSubmission/fileThreats': Operation<'/threatSubmission/fileThreats', 'post'>;
}

/**
 * `DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /threatSubmission/fileThreats`
 *
 */
export function list(
  params?: IEndpoints['GET /threatSubmission/fileThreats']['parameters']
): EndpointRequest<IEndpoints['GET /threatSubmission/fileThreats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/fileThreats',
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
 * `GET /threatSubmission/fileThreats/{fileThreatSubmission-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}']['body'],
  params?: IEndpoints['PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    paramDefs: [{ name: 'fileThreatSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /threatSubmission/fileThreats`
 *
 */
export function create(
  body: IEndpoints['POST /threatSubmission/fileThreats']['body'],
  params?: IEndpoints['POST /threatSubmission/fileThreats']['parameters']
): EndpointRequest<IEndpoints['POST /threatSubmission/fileThreats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/threatSubmission/fileThreats',
    paramDefs: [],
    params,
    body,
  };
}
