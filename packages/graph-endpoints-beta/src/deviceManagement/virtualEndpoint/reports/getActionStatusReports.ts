import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getActionStatusReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports`
 *
 * Get the remote action status reports, including data such as the Cloud PC ID, Cloud PC device display name, initiating user&#x27;s principal name, device owner&#x27;s user principal name, action taken, and action state.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getActionStatusReports',
    paramDefs: [],
    params,
    body,
  };
}
