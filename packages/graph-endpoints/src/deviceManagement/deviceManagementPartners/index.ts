import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementPartners': Operation<
    '/deviceManagement/deviceManagementPartners',
    'get'
  >;
  'GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementPartners': Operation<
    '/deviceManagement/deviceManagementPartners',
    'post'
  >;
  'POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementPartner-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementPartners`
 *
 * The list of Device Management Partners configured by the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementPartners']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceManagementPartners']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceManagementPartners',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}`
 *
 * The list of Device Management Partners configured by the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    paramDefs: {
      path: ['deviceManagementPartner-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    paramDefs: {
      path: ['deviceManagementPartner-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementPartners`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementPartners']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceManagementPartners']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceManagementPartners',
    body,
  };
}

export const terminate = {
  /**
   * `POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate',
      paramDefs: {
        path: ['deviceManagementPartner-id'],
      },
      params,
    };
  },
};
