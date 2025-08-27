export * as site from './site';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources',
    'post'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}`
 *
 * Delete a siteSource object associated with an ediscoveryCustodian.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'siteSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources`
 *
 * Get a list of the siteSource objects associated with an ediscoveryCustodian.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources',
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
      { name: 'ediscoveryCustodian-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}`
 *
 * Data source entity for SharePoint sites associated with the custodian.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'siteSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources/{siteSource-id}',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'siteSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources`
 *
 * Create a new siteSource object associated with an eDiscovery custodian.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources']['response']
> {
  return {
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/siteSources',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
    ],
    params,
    body,
  };
}
