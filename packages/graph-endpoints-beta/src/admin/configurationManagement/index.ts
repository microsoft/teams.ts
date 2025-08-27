export * as configurationApplications from './configurationApplications';
export * as configurationDrifts from './configurationDrifts';
export * as configurationMonitoringResults from './configurationMonitoringResults';
export * as configurationMonitors from './configurationMonitors';
export * as configurationSnapshotJobs from './configurationSnapshotJobs';
export * as configurationSnapshots from './configurationSnapshots';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/configurationManagement': Operation<'/admin/configurationManagement', 'delete'>;
  'GET /admin/configurationManagement': Operation<'/admin/configurationManagement', 'get'>;
  'PATCH /admin/configurationManagement': Operation<'/admin/configurationManagement', 'patch'>;
}

/**
 * `DELETE /admin/configurationManagement`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/configurationManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/configurationManagement']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/configurationManagement',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/configurationManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/configurationManagement']['parameters']
): EndpointRequest<IEndpoints['GET /admin/configurationManagement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/configurationManagement',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/configurationManagement`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/configurationManagement']['body'],
  params?: IEndpoints['PATCH /admin/configurationManagement']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/configurationManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/configurationManagement',
    paramDefs: [],
    params,
    body,
  };
}
