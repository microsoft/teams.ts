import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/certifications/{personCertification-id}': Operation<
    '/me/profile/certifications/{personCertification-id}',
    'delete'
  >;
  'GET /me/profile/certifications': Operation<'/me/profile/certifications', 'get'>;
  'GET /me/profile/certifications/{personCertification-id}': Operation<
    '/me/profile/certifications/{personCertification-id}',
    'get'
  >;
  'PATCH /me/profile/certifications/{personCertification-id}': Operation<
    '/me/profile/certifications/{personCertification-id}',
    'patch'
  >;
  'POST /me/profile/certifications': Operation<'/me/profile/certifications', 'post'>;
}

/**
 * `DELETE /me/profile/certifications/{personCertification-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/certifications/{personCertification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/profile/certifications/{personCertification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/certifications/{personCertification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'personCertification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/certifications`
 *
 * Retrieve a list of personCertification objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/certifications']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/certifications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/certifications',
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
 * `GET /me/profile/certifications/{personCertification-id}`
 *
 * Read the properties and relationships of a personCertification object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/certifications/{personCertification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/profile/certifications/{personCertification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/certifications/{personCertification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'personCertification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/certifications/{personCertification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/certifications/{personCertification-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/certifications/{personCertification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/profile/certifications/{personCertification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/certifications/{personCertification-id}',
    paramDefs: [{ name: 'personCertification-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/certifications`
 *
 * Create a new personCertification object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/certifications']['body'],
  params?: IEndpoints['POST /me/profile/certifications']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/certifications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/certifications',
    paramDefs: [],
    params,
    body,
  };
}
