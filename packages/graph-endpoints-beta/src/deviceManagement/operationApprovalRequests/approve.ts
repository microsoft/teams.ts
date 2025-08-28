import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve',
    'post'
  >;
}

/**
 * `POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve`
 *
 * Approves the requested instance of an operationApprovalRequest.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve']['body'],
  params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/approve',
    paramDefs: [{ name: 'operationApprovalRequest-id', in: 'path' }],
    params,
    body,
  };
}
