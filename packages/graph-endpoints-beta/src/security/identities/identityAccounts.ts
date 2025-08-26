import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities/identityAccounts/{identityAccounts-id}': Operation<
    '/security/identities/identityAccounts/{identityAccounts-id}',
    'delete'
  >;
  'GET /security/identities/identityAccounts': Operation<
    '/security/identities/identityAccounts',
    'get'
  >;
  'GET /security/identities/identityAccounts/{identityAccounts-id}': Operation<
    '/security/identities/identityAccounts/{identityAccounts-id}',
    'get'
  >;
  'PATCH /security/identities/identityAccounts/{identityAccounts-id}': Operation<
    '/security/identities/identityAccounts/{identityAccounts-id}',
    'patch'
  >;
  'POST /security/identities/identityAccounts': Operation<
    '/security/identities/identityAccounts',
    'post'
  >;
}

/**
 * `DELETE /security/identities/identityAccounts/{identityAccounts-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/identities/identityAccounts/{identityAccounts-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/identities/identityAccounts/{identityAccounts-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/identities/identityAccounts/{identityAccounts-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'identityAccounts-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/identities/identityAccounts`
 *
 * Get a list of the identityAccounts objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/identities/identityAccounts']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities/identityAccounts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/identities/identityAccounts',
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
 * `GET /security/identities/identityAccounts/{identityAccounts-id}`
 *
 * Read the properties and relationships of a single identity security account object. This allows retrieving information about available identity accounts.
 */
export function get(
  params?: IEndpoints['GET /security/identities/identityAccounts/{identityAccounts-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/identities/identityAccounts/{identityAccounts-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/identities/identityAccounts/{identityAccounts-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'identityAccounts-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/identities/identityAccounts/{identityAccounts-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/identities/identityAccounts/{identityAccounts-id}']['body'],
  params?: IEndpoints['PATCH /security/identities/identityAccounts/{identityAccounts-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/identities/identityAccounts/{identityAccounts-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/identities/identityAccounts/{identityAccounts-id}',
    paramDefs: [{ name: 'identityAccounts-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/identities/identityAccounts`
 *
 */
export function create(
  body: IEndpoints['POST /security/identities/identityAccounts']['body'],
  params?: IEndpoints['POST /security/identities/identityAccounts']['parameters']
): EndpointRequest<IEndpoints['POST /security/identities/identityAccounts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/identities/identityAccounts',
    paramDefs: [],
    params,
    body,
  };
}
