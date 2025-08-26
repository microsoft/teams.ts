export * as termsAndConditions from './termsAndConditions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    'delete'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    'get'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    'patch'
  >;
  'POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsAcceptanceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses`
 *
 * The list of acceptance statuses for this T&amp;C policy.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}`
 *
 * The list of acceptance statuses for this T&amp;C policy.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsAcceptanceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}',
    paramDefs: [
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsAcceptanceStatus-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['body'],
  params?: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses',
    paramDefs: [{ name: 'termsAndConditions-id', in: 'path' }],
    params,
    body,
  };
}
