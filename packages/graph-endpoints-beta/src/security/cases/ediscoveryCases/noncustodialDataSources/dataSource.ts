import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource',
    'patch'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryNoncustodialDataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource`
 *
 * User source or SharePoint site data source as non-custodial data source.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryNoncustodialDataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/dataSource',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryNoncustodialDataSource-id', in: 'path' },
    ],
    params,
    body,
  };
}
