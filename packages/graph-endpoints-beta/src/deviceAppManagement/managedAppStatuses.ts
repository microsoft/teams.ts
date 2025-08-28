import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}': Operation<
    '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppStatuses': Operation<
    '/deviceAppManagement/managedAppStatuses',
    'get'
  >;
  'GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}': Operation<
    '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}': Operation<
    '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppStatuses': Operation<
    '/deviceAppManagement/managedAppStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppStatuses`
 *
 * The managed app statuses.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppStatuses']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedAppStatuses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppStatuses',
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
 * `GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}`
 *
 * The managed app statuses.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    paramDefs: [{ name: 'managedAppStatus-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppStatuses']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppStatuses']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedAppStatuses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedAppStatuses',
    paramDefs: [],
    params,
    body,
  };
}
