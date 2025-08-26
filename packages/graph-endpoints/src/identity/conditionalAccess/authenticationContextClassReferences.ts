import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationContextClassReferences': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationContextClassReferences': Operation<
    '/identity/conditionalAccess/authenticationContextClassReferences',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}`
 *
 * Delete an authenticationContextClassReference object that&#x27;s not published or used by a conditional access policy.
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationContextClassReference-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationContextClassReferences`
 *
 * Retrieve a list of authenticationContextClassReference objects.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/authenticationContextClassReferences',
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
 * `GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}`
 *
 * Retrieve the properties and relationships of a authenticationContextClassReference object.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationContextClassReference-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}`
 *
 * Create an authenticationContextClassReference object, if the ID has not been used. If ID has been used, this call updates the authenticationContextClassReference object.
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}',
    paramDefs: [{ name: 'authenticationContextClassReference-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationContextClassReferences`
 *
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationContextClassReferences']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/authenticationContextClassReferences']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationContextClassReferences']['response']
> {
  return {
    method: 'post',
    path: '/identity/conditionalAccess/authenticationContextClassReferences',
    paramDefs: [],
    params,
    body,
  };
}
