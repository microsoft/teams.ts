import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
    'post'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
      { name: 'dataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources`
 *
 * Get the list of additional sources associated with an eDiscovery search.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
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
      { name: 'ediscoverySearch-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}`
 *
 * Adds an additional source to the eDiscovery search.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
      { name: 'dataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources/{dataSource-id}',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
      { name: 'dataSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources`
 *
 * Create a new additional source associated with an eDiscovery search.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources']['response']
> {
  return {
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/additionalSources',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoverySearch-id', in: 'path' },
    ],
    params,
    body,
  };
}
