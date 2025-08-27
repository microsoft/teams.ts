export * as getHealthMetricTimeSeries from './getHealthMetricTimeSeries';
export * as getHealthMetrics from './getHealthMetrics';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateConnectorDetails-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateConnectorDetails-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'certificateConnectorDetails-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/certificateConnectorDetails`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/certificateConnectorDetails']['body'],
  params?: IEndpoints['POST /deviceManagement/certificateConnectorDetails']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/certificateConnectorDetails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/certificateConnectorDetails',
    paramDefs: [],
    params,
    body,
  };
}
