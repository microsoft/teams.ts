import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus': Operation<
    '/deviceManagement/operationApprovalRequests/retrieveRequestStatus',
    'post'
  >;
}

/**
 * `POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus']['body'],
  params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/operationApprovalRequests/retrieveRequestStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalRequests/retrieveRequestStatus',
    paramDefs: [],
    params,
    body,
  };
}
