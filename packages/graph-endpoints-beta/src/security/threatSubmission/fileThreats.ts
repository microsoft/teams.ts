import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'delete'
  >;
  'GET /security/threatSubmission/fileThreats': Operation<
    '/security/threatSubmission/fileThreats',
    'get'
  >;
  'GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}': Operation<
    '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    'patch'
  >;
  'POST /security/threatSubmission/fileThreats': Operation<
    '/security/threatSubmission/fileThreats',
    'post'
  >;
}

/**
 * `DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatSubmission/fileThreats`
 *
 * Get a list of the fileThreatSubmission objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatSubmission/fileThreats']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatSubmission/fileThreats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/fileThreats',
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
 * `GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}`
 *
 * Read the properties and relationships of a fileThreatSubmission object.
 */
export function get(
  params?: IEndpoints['GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileThreatSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['body'],
  params?: IEndpoints['PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatSubmission/fileThreats/{fileThreatSubmission-id}',
    paramDefs: [{ name: 'fileThreatSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatSubmission/fileThreats`
 *
 * Create a new fileThreatSubmission object.
 */
export function create(
  body: IEndpoints['POST /security/threatSubmission/fileThreats']['body'],
  params?: IEndpoints['POST /security/threatSubmission/fileThreats']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatSubmission/fileThreats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatSubmission/fileThreats',
    paramDefs: [],
    params,
    body,
  };
}
