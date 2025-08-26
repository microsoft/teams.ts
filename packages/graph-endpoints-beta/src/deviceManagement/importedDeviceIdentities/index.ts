export * as importDeviceIdentityList from './importDeviceIdentityList';
export * as searchExistingIdentities from './searchExistingIdentities';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}': Operation<
    '/deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/importedDeviceIdentities': Operation<
    '/deviceManagement/importedDeviceIdentities',
    'get'
  >;
  'GET /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}': Operation<
    '/deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}': Operation<
    '/deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/importedDeviceIdentities': Operation<
    '/deviceManagement/importedDeviceIdentities',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'importedDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/importedDeviceIdentities`
 *
 * The imported device identities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/importedDeviceIdentities']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/importedDeviceIdentities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/importedDeviceIdentities',
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
 * `GET /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}`
 *
 * The imported device identities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'importedDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/importedDeviceIdentities/{importedDeviceIdentity-id}',
    paramDefs: [{ name: 'importedDeviceIdentity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/importedDeviceIdentities`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/importedDeviceIdentities']['body'],
  params?: IEndpoints['POST /deviceManagement/importedDeviceIdentities']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/importedDeviceIdentities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/importedDeviceIdentities',
    paramDefs: [],
    params,
    body,
  };
}
