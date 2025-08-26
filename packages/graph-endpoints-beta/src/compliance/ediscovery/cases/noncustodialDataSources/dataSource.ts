import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource': Operation<
    '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    'patch'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'noncustodialDataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource`
 *
 * User source or SharePoint site data source as noncustodial data source.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'noncustodialDataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/noncustodialDataSources/{noncustodialDataSource-id}/dataSource',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'noncustodialDataSource-id', in: 'path' },
    ],
    params,
    body,
  };
}
