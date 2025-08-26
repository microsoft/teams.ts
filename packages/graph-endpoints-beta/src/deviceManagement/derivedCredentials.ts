import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}': Operation<
    '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    'delete'
  >;
  'GET /deviceManagement/derivedCredentials': Operation<
    '/deviceManagement/derivedCredentials',
    'get'
  >;
  'GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}': Operation<
    '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    'get'
  >;
  'PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}': Operation<
    '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    'patch'
  >;
  'POST /deviceManagement/derivedCredentials': Operation<
    '/deviceManagement/derivedCredentials',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementDerivedCredentialSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/derivedCredentials`
 *
 * Collection of Derived credential settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/derivedCredentials']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/derivedCredentials']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/derivedCredentials',
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
 * `GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}`
 *
 * Collection of Derived credential settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementDerivedCredentialSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    paramDefs: [{ name: 'deviceManagementDerivedCredentialSettings-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/derivedCredentials`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/derivedCredentials']['body'],
  params?: IEndpoints['POST /deviceManagement/derivedCredentials']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/derivedCredentials']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/derivedCredentials',
    paramDefs: [],
    params,
    body,
  };
}
