import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsInformationProtectionAppLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
    'get'
  >;
  'GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsInformationProtectionAppLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}`
 *
 * Deletes a windowsInformationProtectionAppLearningSummary.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsInformationProtectionAppLearningSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsInformationProtectionAppLearningSummaries`
 *
 * List properties and relationships of the windowsInformationProtectionAppLearningSummary objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
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
 * `GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}`
 *
 * Read properties and relationships of the windowsInformationProtectionAppLearningSummary object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionAppLearningSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}`
 *
 * Update the properties of a windowsInformationProtectionAppLearningSummary object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    paramDefs: [{ name: 'windowsInformationProtectionAppLearningSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsInformationProtectionAppLearningSummaries`
 *
 * Create a new windowsInformationProtectionAppLearningSummary object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsInformationProtectionAppLearningSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsInformationProtectionAppLearningSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsInformationProtectionAppLearningSummaries']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
    paramDefs: [],
    params,
    body,
  };
}
