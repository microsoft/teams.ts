import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject',
    'post'
  >;
}

/**
 * `POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject`
 *
 * Rejects the requested instance of an operationApprovalRequest.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject']['body'],
  params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/reject',
    paramDefs: [{ name: 'operationApprovalRequest-id', in: 'path' }],
    params,
    body,
  };
}
