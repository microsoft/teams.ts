import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
    'get'
  >;
  'GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsInformationProtectionNetworkLearningSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries`
 *
 * The windows information protection network learning summaries.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
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
 * `GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}`
 *
 * The windows information protection network learning summaries.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionNetworkLearningSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    paramDefs: [{ name: 'windowsInformationProtectionNetworkLearningSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
    paramDefs: [],
    params,
    body,
  };
}
