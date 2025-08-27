import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/account/{userAccountInformation-id}': Operation<
    '/me/profile/account/{userAccountInformation-id}',
    'delete'
  >;
  'GET /me/profile/account': Operation<'/me/profile/account', 'get'>;
  'GET /me/profile/account/{userAccountInformation-id}': Operation<
    '/me/profile/account/{userAccountInformation-id}',
    'get'
  >;
  'PATCH /me/profile/account/{userAccountInformation-id}': Operation<
    '/me/profile/account/{userAccountInformation-id}',
    'patch'
  >;
  'POST /me/profile/account': Operation<'/me/profile/account', 'post'>;
}

/**
 * `DELETE /me/profile/account/{userAccountInformation-id}`
 *
 * Delete an userAccountInformation object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/account/{userAccountInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/profile/account/{userAccountInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/account/{userAccountInformation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userAccountInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/account`
 *
 * Retrieves properties related to the user&#x27;s accounts from the profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/account']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/account']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/account',
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
 * `GET /me/profile/account/{userAccountInformation-id}`
 *
 * Retrieve the properties and relationships of an userAccountInformation object in a user&#x27;s profile.
 */
export function get$1(
  params?: IEndpoints['GET /me/profile/account/{userAccountInformation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/account/{userAccountInformation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/account/{userAccountInformation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userAccountInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/account/{userAccountInformation-id}`
 *
 * Update the properties of an userAccountInformation object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/account/{userAccountInformation-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/account/{userAccountInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/profile/account/{userAccountInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/account/{userAccountInformation-id}',
    paramDefs: [{ name: 'userAccountInformation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/account`
 *
 * Create a new userAccountInformation object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/account']['body'],
  params?: IEndpoints['POST /me/profile/account']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/account']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/account',
    paramDefs: [],
    params,
    body,
  };
}
