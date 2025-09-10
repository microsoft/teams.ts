import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/securityActions/{securityAction-id}': Operation<
    '/security/securityActions/{securityAction-id}',
    'delete'
  >;
  'GET /security/securityActions': Operation<'/security/securityActions', 'get'>;
  'GET /security/securityActions/{securityAction-id}': Operation<
    '/security/securityActions/{securityAction-id}',
    'get'
  >;
  'PATCH /security/securityActions/{securityAction-id}': Operation<
    '/security/securityActions/{securityAction-id}',
    'patch'
  >;
  'POST /security/securityActions': Operation<'/security/securityActions', 'post'>;
  'POST /security/securityActions/{securityAction-id}/cancelSecurityAction': Operation<
    '/security/securityActions/{securityAction-id}/cancelSecurityAction',
    'post'
  >;
}

/**
 * `DELETE /security/securityActions/{securityAction-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/securityActions/{securityAction-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/securityActions/{securityAction-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/securityActions/{securityAction-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['securityAction-id'],
    },
    params,
  };
}

/**
 * `GET /security/securityActions`
 *
 * Retrieve a list of securityAction objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/securityActions']['parameters']
): EndpointRequest<IEndpoints['GET /security/securityActions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityActions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/securityActions/{securityAction-id}`
 *
 * Retrieve the properties and relationships of a securityAction object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/securityActions/{securityAction-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/securityActions/{securityAction-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityActions/{securityAction-id}',
    paramDefs: {
      path: ['securityAction-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/securityActions/{securityAction-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/securityActions/{securityAction-id}']['body'],
  params?: IEndpoints['PATCH /security/securityActions/{securityAction-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/securityActions/{securityAction-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/securityActions/{securityAction-id}',
    paramDefs: {
      path: ['securityAction-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/securityActions`
 *
 * Create a new securityAction object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/securityActions']['body']
): EndpointRequest<IEndpoints['POST /security/securityActions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/securityActions',
    body,
  };
}

export const cancelSecurityAction = {
  /**
   * `POST /security/securityActions/{securityAction-id}/cancelSecurityAction`
   *
   * Cancel a security operation.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /security/securityActions/{securityAction-id}/cancelSecurityAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/securityActions/{securityAction-id}/cancelSecurityAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/securityActions/{securityAction-id}/cancelSecurityAction',
      paramDefs: {
        path: ['securityAction-id'],
      },
      params,
    };
  },
};
