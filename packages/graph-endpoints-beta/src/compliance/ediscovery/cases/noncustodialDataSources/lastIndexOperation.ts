import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/lastIndexOperation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'noncustodialDataSource-id', in: 'path' },
    ],
    params,
  };
}
