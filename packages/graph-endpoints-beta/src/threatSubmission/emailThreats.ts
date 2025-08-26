import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'delete'
  >;
  'GET /threatSubmission/emailThreats': Operation<'/threatSubmission/emailThreats', 'get'>;
  'GET /threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'get'
  >;
  'PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'patch'
  >;
  'POST /threatSubmission/emailThreats': Operation<'/threatSubmission/emailThreats', 'post'>;
}

/**
 * `DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'emailThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /threatSubmission/emailThreats`
 *
 */
export function list(
  params?: IEndpoints['GET /threatSubmission/emailThreats']['parameters']
): EndpointRequest<IEndpoints['GET /threatSubmission/emailThreats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/emailThreats',
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
 * `GET /threatSubmission/emailThreats/{emailThreatSubmission-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'emailThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}']['body'],
  params?: IEndpoints['PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    paramDefs: [{ name: 'emailThreatSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /threatSubmission/emailThreats`
 *
 */
export function create(
  body: IEndpoints['POST /threatSubmission/emailThreats']['body'],
  params?: IEndpoints['POST /threatSubmission/emailThreats']['parameters']
): EndpointRequest<IEndpoints['POST /threatSubmission/emailThreats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/threatSubmission/emailThreats',
    paramDefs: [],
    params,
    body,
  };
}
