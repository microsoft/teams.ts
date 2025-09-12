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
  'POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList': Operation<
    '/deviceManagement/importedDeviceIdentities/importDeviceIdentityList',
    'post'
  >;
  'POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities': Operation<
    '/deviceManagement/importedDeviceIdentities/searchExistingIdentities',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['importedDeviceIdentity-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['importedDeviceIdentity-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['importedDeviceIdentity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/importedDeviceIdentities`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/importedDeviceIdentities']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/importedDeviceIdentities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/importedDeviceIdentities',
    body,
  };
}

export const importDeviceIdentityList = {
  /**
   * `POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/importedDeviceIdentities/importDeviceIdentityList',
      body,
    };
  },
};

export const searchExistingIdentities = {
  /**
   * `POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/importedDeviceIdentities/searchExistingIdentities',
      body,
    };
  },
};
