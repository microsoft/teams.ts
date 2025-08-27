import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}': Operation<
    '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsUpdateCatalogItems': Operation<
    '/deviceManagement/windowsUpdateCatalogItems',
    'get'
  >;
  'GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}': Operation<
    '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}': Operation<
    '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsUpdateCatalogItems': Operation<
    '/deviceManagement/windowsUpdateCatalogItems',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsUpdateCatalogItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsUpdateCatalogItems`
 *
 * A collection of windows update catalog items (fetaure updates item , quality updates item)
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsUpdateCatalogItems',
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
 * `GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}`
 *
 * A collection of windows update catalog items (fetaure updates item , quality updates item)
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsUpdateCatalogItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    paramDefs: [{ name: 'windowsUpdateCatalogItem-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsUpdateCatalogItems`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsUpdateCatalogItems']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsUpdateCatalogItems']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsUpdateCatalogItems']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsUpdateCatalogItems',
    paramDefs: [],
    params,
    body,
  };
}
