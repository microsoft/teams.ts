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
 * Deletes a windowsInformationProtectionNetworkLearningSummary.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
> {
  return {
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
 * List properties and relationships of the windowsInformationProtectionNetworkLearningSummary objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['response']
> {
  return {
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
 * Read properties and relationships of the windowsInformationProtectionNetworkLearningSummary object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
> {
  return {
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
 * Update the properties of a windowsInformationProtectionNetworkLearningSummary object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
> {
  return {
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
 * Create a new windowsInformationProtectionNetworkLearningSummary object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
    paramDefs: [],
    params,
    body,
  };
}
