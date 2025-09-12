import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}': Operation<
    '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}',
    'delete'
  >;
  'GET /deviceManagement/certificateConnectorDetails': Operation<
    '/deviceManagement/certificateConnectorDetails',
    'get'
  >;
  'GET /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}': Operation<
    '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}',
    'get'
  >;
  'PATCH /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}': Operation<
    '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}',
    'patch'
  >;
  'POST /deviceManagement/certificateConnectorDetails': Operation<
    '/deviceManagement/certificateConnectorDetails',
    'post'
  >;
  'POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries': Operation<
    '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries',
    'post'
  >;
  'POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics': Operation<
    '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['certificateConnectorDetails-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/certificateConnectorDetails`
 *
 * Collection of certificate connector details, each associated with a corresponding Intune Certificate Connector.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/certificateConnectorDetails']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/certificateConnectorDetails']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/certificateConnectorDetails',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}`
 *
 * Collection of certificate connector details, each associated with a corresponding Intune Certificate Connector.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}',
    paramDefs: {
      path: ['certificateConnectorDetails-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}',
    paramDefs: {
      path: ['certificateConnectorDetails-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/certificateConnectorDetails`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/certificateConnectorDetails']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/certificateConnectorDetails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/certificateConnectorDetails',
    body,
  };
}

export const getHealthMetricTimeSeries = {
  /**
   * `POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries']['body'],
    params?: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetricTimeSeries',
      paramDefs: {
        path: ['certificateConnectorDetails-id'],
      },
      params,
      body,
    };
  },
};

export const getHealthMetrics = {
  /**
   * `POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics']['body'],
    params?: IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/getHealthMetrics',
      paramDefs: {
        path: ['certificateConnectorDetails-id'],
      },
      params,
      body,
    };
  },
};
