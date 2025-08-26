export * as site from './site';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources',
    'post'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}`
 *
 * Delete a siteSource object associated with an ediscoveryHoldPolicy.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
      { name: 'siteSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources`
 *
 * Data sources that represent SharePoint sites.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}`
 *
 * Data sources that represent SharePoint sites.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
      { name: 'siteSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources/{siteSource-id}',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
      { name: 'siteSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources`
 *
 * Create a new siteSource object.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}/siteSources',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}
