import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    'delete'
  >;
  'GET /deviceManagement/remoteAssistancePartners': Operation<
    '/deviceManagement/remoteAssistancePartners',
    'get'
  >;
  'GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    'patch'
  >;
  'POST /deviceManagement/remoteAssistancePartners': Operation<
    '/deviceManagement/remoteAssistancePartners',
    'post'
  >;
  'POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding',
    'post'
  >;
  'POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['remoteAssistancePartner-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/remoteAssistancePartners`
 *
 * The remote assist partners.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/remoteAssistancePartners']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/remoteAssistancePartners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/remoteAssistancePartners',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}`
 *
 * The remote assist partners.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    paramDefs: {
      path: ['remoteAssistancePartner-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}',
    paramDefs: {
      path: ['remoteAssistancePartner-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/remoteAssistancePartners`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/remoteAssistancePartners']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/remoteAssistancePartners']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/remoteAssistancePartners',
    body,
  };
}

export const beginOnboarding = {
  /**
   * `POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding`
   *
   * A request to start onboarding.  Must be coupled with the appropriate TeamViewer account information
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding',
      paramDefs: {
        path: ['remoteAssistancePartner-id'],
      },
      params,
    };
  },
};

export const disconnect = {
  /**
   * `POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect`
   *
   * A request to remove the active TeamViewer connector
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/disconnect',
      paramDefs: {
        path: ['remoteAssistancePartner-id'],
      },
      params,
    };
  },
};
