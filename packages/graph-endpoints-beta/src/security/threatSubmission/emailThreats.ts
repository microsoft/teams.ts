import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'delete'
  >;
  'GET /security/threatSubmission/emailThreats': Operation<
    '/security/threatSubmission/emailThreats',
    'get'
  >;
  'GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}': Operation<
    '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    'patch'
  >;
  'POST /security/threatSubmission/emailThreats': Operation<
    '/security/threatSubmission/emailThreats',
    'post'
  >;
}

/**
 * `DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'emailThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatSubmission/emailThreats`
 *
 * Get a list of the emailThreatSubmission objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatSubmission/emailThreats']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatSubmission/emailThreats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/emailThreats',
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
 * `GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}`
 *
 * Read the properties and relationships of an emailThreatSubmission object.
 */
export function get(
  params?: IEndpoints['GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'emailThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['body'],
  params?: IEndpoints['PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatSubmission/emailThreats/{emailThreatSubmission-id}',
    paramDefs: [{ name: 'emailThreatSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatSubmission/emailThreats`
 *
 * Create a new emailThreatSubmission object.
 */
export function create(
  body: IEndpoints['POST /security/threatSubmission/emailThreats']['body'],
  params?: IEndpoints['POST /security/threatSubmission/emailThreats']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatSubmission/emailThreats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatSubmission/emailThreats',
    paramDefs: [],
    params,
    body,
  };
}
