export * as consentToDataSharing from './consentToDataSharing';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'dataSharingConsent-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'dataSharingConsent-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'dataSharingConsent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/dataSharingConsents`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/dataSharingConsents']['body'],
  params?: IEndpoints['POST /deviceManagement/dataSharingConsents']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/dataSharingConsents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/dataSharingConsents',
    paramDefs: [],
    params,
    body,
  };
}
