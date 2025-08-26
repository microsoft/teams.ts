import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'delete'
  >;
  'GET /security/threatSubmission/urlThreats': Operation<
    '/security/threatSubmission/urlThreats',
    'get'
  >;
  'GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}': Operation<
    '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    'patch'
  >;
  'POST /security/threatSubmission/urlThreats': Operation<
    '/security/threatSubmission/urlThreats',
    'post'
  >;
}

/**
 * `DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'urlThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatSubmission/urlThreats`
 *
 * Get a list of the urlThreatSubmission objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatSubmission/urlThreats']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatSubmission/urlThreats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/urlThreats',
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
 * `GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}`
 *
 * Read the properties and relationships of an urlThreatSubmission object.
 */
export function get(
  params?: IEndpoints['GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'urlThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['body'],
  params?: IEndpoints['PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatSubmission/urlThreats/{urlThreatSubmission-id}',
    paramDefs: [{ name: 'urlThreatSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatSubmission/urlThreats`
 *
 * Create a new urlThreatSubmission object.
 */
export function create(
  body: IEndpoints['POST /security/threatSubmission/urlThreats']['body'],
  params?: IEndpoints['POST /security/threatSubmission/urlThreats']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatSubmission/urlThreats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatSubmission/urlThreats',
    paramDefs: [],
    params,
    body,
  };
}
