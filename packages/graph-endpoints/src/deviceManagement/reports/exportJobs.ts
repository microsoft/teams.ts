import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}': Operation<
    '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    'delete'
  >;
  'GET /deviceManagement/reports/exportJobs': Operation<
    '/deviceManagement/reports/exportJobs',
    'get'
  >;
  'GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}': Operation<
    '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    'get'
  >;
  'PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}': Operation<
    '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    'patch'
  >;
  'POST /deviceManagement/reports/exportJobs': Operation<
    '/deviceManagement/reports/exportJobs',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}`
 *
 * Deletes a deviceManagementExportJob.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementExportJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/reports/exportJobs`
 *
 * List properties and relationships of the deviceManagementExportJob objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reports/exportJobs']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/reports/exportJobs']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/reports/exportJobs',
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
 * `GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}`
 *
 * Read properties and relationships of the deviceManagementExportJob object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementExportJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}`
 *
 * Update the properties of a deviceManagementExportJob object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    paramDefs: [{ name: 'deviceManagementExportJob-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/reports/exportJobs`
 *
 * Create a new deviceManagementExportJob object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/exportJobs']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/exportJobs']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/reports/exportJobs']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/exportJobs',
    paramDefs: [],
    params,
    body,
  };
}
