export * as addToReviewSetOperation from './addToReviewSetOperation';
export * as additionalSources from './additionalSources';
export * as custodianSources from './custodianSources';
export * as lastEstimateStatisticsOperation from './lastEstimateStatisticsOperation';
export * as noncustodialSources from './noncustodialSources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
    'post'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}`
 *
 * Delete an ediscoverySearch object.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches`
 *
 * Get the list of ediscoverySearch resources from an eDiscoveryCase object.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
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
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}`
 *
 * Read the properties and relationships of an ediscoverySearch object.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}`
 *
 * Update the properties of an ediscoverySearch object.
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches`
 *
 * Create a new ediscoverySearch object.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches']['response']
> {
  return {
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches',
    paramDefs: [{ name: 'ediscoveryCase-id', in: 'path' }],
    params,
    body,
  };
}
