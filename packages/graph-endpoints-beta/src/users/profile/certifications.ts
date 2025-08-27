import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/certifications/{personCertification-id}': Operation<
    '/users/{user-id}/profile/certifications/{personCertification-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/certifications': Operation<
    '/users/{user-id}/profile/certifications',
    'get'
  >;
  'GET /users/{user-id}/profile/certifications/{personCertification-id}': Operation<
    '/users/{user-id}/profile/certifications/{personCertification-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/certifications/{personCertification-id}': Operation<
    '/users/{user-id}/profile/certifications/{personCertification-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/certifications': Operation<
    '/users/{user-id}/profile/certifications',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/profile/certifications/{personCertification-id}`
 *
 * Deletes a personCertification object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/certifications/{personCertification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/certifications/{personCertification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/certifications/{personCertification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'personCertification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/certifications`
 *
 * Represents the details of certifications associated with a person.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/certifications']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/certifications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/certifications',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/certifications/{personCertification-id}`
 *
 * Represents the details of certifications associated with a person.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/certifications/{personCertification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/certifications/{personCertification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/certifications/{personCertification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'personCertification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/certifications/{personCertification-id}`
 *
 * Update the properties of a personCertification object from a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/certifications/{personCertification-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/certifications/{personCertification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/certifications/{personCertification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/certifications/{personCertification-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'personCertification-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/certifications`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/certifications']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/certifications']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/certifications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/certifications',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
