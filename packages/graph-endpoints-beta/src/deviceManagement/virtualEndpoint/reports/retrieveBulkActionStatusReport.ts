import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport`
 *
 * Get the bulk remote action status report, including data such as the bulk action ID, bulk action display name, initiating user&#x27;s principal name, action type, and action state.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport',
    paramDefs: [],
    params,
    body,
  };
}
