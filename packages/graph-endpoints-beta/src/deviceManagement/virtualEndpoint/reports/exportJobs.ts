import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/reports/exportJobs': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/exportJobs': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcExportJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/reports/exportJobs`
 *
 * Read the properties and relationships of a cloudPcExportJob object. You can download a report by first creating a new cloudPcExportJob resource to initiate downloading. Use this GET operation to verify the exportJobStatus property of the cloudPcExportJob resource. The property becomes completed when the report finishes downloading in the location specified by the exportUrl property.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/reports/exportJobs',
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
 * `GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}`
 *
 * Read the properties and relationships of a cloudPcExportJob object. You can download a report by first creating a new cloudPcExportJob resource to initiate downloading. Use this GET operation to verify the exportJobStatus property of the cloudPcExportJob resource. The property becomes completed when the report finishes downloading in the location specified by the exportUrl property.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcExportJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    paramDefs: [{ name: 'cloudPcExportJob-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/exportJobs`
 *
 * Create a new cloudPcExportJob resource to initiate downloading the entire or specified portion of a report. Use the GET cloudPcExportJob operation to verify the exportJobStatus property of the cloudPcExportJob resource. When the property result is completed, the report finishes downloading to the location specified by the exportUrl property.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/exportJobs']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/exportJobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/exportJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/exportJobs',
    paramDefs: [],
    params,
    body,
  };
}
