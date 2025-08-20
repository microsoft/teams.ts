import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources`
 *
 * Get a list of noncustodialDataSource associated with a sourceCollection.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}`
 *
 * noncustodialDataSource sources that are included in the sourceCollection
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/noncustodialSources/{noncustodialDataSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
      { name: 'noncustodialDataSource-id', in: 'path' },
    ],
    params,
  };
}
