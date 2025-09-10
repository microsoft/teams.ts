import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/dataSharingConsents/{dataSharingConsent-id}': Operation<
    '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}',
    'delete'
  >;
  'GET /deviceManagement/dataSharingConsents': Operation<
    '/deviceManagement/dataSharingConsents',
    'get'
  >;
  'GET /deviceManagement/dataSharingConsents/{dataSharingConsent-id}': Operation<
    '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}',
    'get'
  >;
  'PATCH /deviceManagement/dataSharingConsents/{dataSharingConsent-id}': Operation<
    '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}',
    'patch'
  >;
  'POST /deviceManagement/dataSharingConsents': Operation<
    '/deviceManagement/dataSharingConsents',
    'post'
  >;
  'POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing': Operation<
    '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/dataSharingConsents/{dataSharingConsent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/dataSharingConsents/{dataSharingConsent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/dataSharingConsents/{dataSharingConsent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['dataSharingConsent-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/dataSharingConsents`
 *
 * Data sharing consents.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/dataSharingConsents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/dataSharingConsents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/dataSharingConsents',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/dataSharingConsents/{dataSharingConsent-id}`
 *
 * Data sharing consents.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/dataSharingConsents/{dataSharingConsent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/dataSharingConsents/{dataSharingConsent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}',
    paramDefs: {
      path: ['dataSharingConsent-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/dataSharingConsents/{dataSharingConsent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/dataSharingConsents/{dataSharingConsent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/dataSharingConsents/{dataSharingConsent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/dataSharingConsents/{dataSharingConsent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}',
    paramDefs: {
      path: ['dataSharingConsent-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/dataSharingConsents`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/dataSharingConsents']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/dataSharingConsents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/dataSharingConsents',
    body,
  };
}

export const consentToDataSharing = {
  /**
   * `POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing',
      paramDefs: {
        path: ['dataSharingConsent-id'],
      },
      params,
    };
  },
};
