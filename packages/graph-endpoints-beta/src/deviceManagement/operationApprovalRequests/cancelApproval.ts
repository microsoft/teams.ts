import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval',
    'post'
  >;
}

/**
 * `POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval`
 *
 * Cancels an already approved instance of an operationApprovalRequest.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval']['body'],
  params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}/cancelApproval',
    paramDefs: [{ name: 'operationApprovalRequest-id', in: 'path' }],
    params,
    body,
  };
}
