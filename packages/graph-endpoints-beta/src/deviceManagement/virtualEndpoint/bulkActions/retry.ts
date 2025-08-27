import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry': Operation<
    '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry',
    paramDefs: [{ name: 'cloudPcBulkAction-id', in: 'path' }],
    params,
    body,
  };
}
