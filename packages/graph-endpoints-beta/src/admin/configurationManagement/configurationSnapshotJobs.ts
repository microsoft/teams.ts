import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    'delete'
  >;
  'GET /admin/configurationManagement/configurationSnapshotJobs': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs',
    'get'
  >;
  'GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    'get'
  >;
  'PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    'patch'
  >;
  'POST /admin/configurationManagement/configurationSnapshotJobs': Operation<
    '/admin/configurationManagement/configurationSnapshotJobs',
    'post'
  >;
}

/**
 * `DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configurationSnapshotJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/configurationManagement/configurationSnapshotJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationSnapshotJobs',
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
 * `GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configurationSnapshotJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement/configurationSnapshotJobs/{configurationSnapshotJob-id}',
    paramDefs: [{ name: 'configurationSnapshotJob-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/configurationManagement/configurationSnapshotJobs`
 *
 */
export function create(
  body: IEndpoints['POST /admin/configurationManagement/configurationSnapshotJobs']['body'],
  params?: IEndpoints['POST /admin/configurationManagement/configurationSnapshotJobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/configurationManagement/configurationSnapshotJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/configurationManagement/configurationSnapshotJobs',
    paramDefs: [],
    params,
    body,
  };
}
