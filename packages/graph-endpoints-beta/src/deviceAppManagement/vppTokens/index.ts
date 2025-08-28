export * as revokeLicenses from './revokeLicenses';
export * as syncLicenseCounts from './syncLicenseCounts';
export * as syncLicenses from './syncLicenses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/vppTokens/{vppToken-id}': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}',
    'delete'
  >;
  'GET /deviceAppManagement/vppTokens': Operation<'/deviceAppManagement/vppTokens', 'get'>;
  'GET /deviceAppManagement/vppTokens/{vppToken-id}': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/vppTokens/{vppToken-id}': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}',
    'patch'
  >;
  'POST /deviceAppManagement/vppTokens': Operation<'/deviceAppManagement/vppTokens', 'post'>;
}

/**
 * `DELETE /deviceAppManagement/vppTokens/{vppToken-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/vppTokens/{vppToken-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceAppManagement/vppTokens/{vppToken-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'vppToken-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/vppTokens`
 *
 * List of Vpp tokens for this organization.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/vppTokens']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/vppTokens']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/vppTokens',
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
 * `GET /deviceAppManagement/vppTokens/{vppToken-id}`
 *
 * List of Vpp tokens for this organization.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/vppTokens/{vppToken-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/vppTokens/{vppToken-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'vppToken-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/vppTokens/{vppToken-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/vppTokens/{vppToken-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/vppTokens/{vppToken-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement/vppTokens/{vppToken-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}',
    paramDefs: [{ name: 'vppToken-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/vppTokens`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/vppTokens']['body'],
  params?: IEndpoints['POST /deviceAppManagement/vppTokens']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/vppTokens']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/vppTokens',
    paramDefs: [],
    params,
    body,
  };
}
