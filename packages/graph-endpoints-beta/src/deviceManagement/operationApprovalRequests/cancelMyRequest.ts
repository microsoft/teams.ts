import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/operationApprovalRequests/cancelMyRequest': Operation<
    '/deviceManagement/operationApprovalRequests/cancelMyRequest',
    'post'
  >;
}

/**
 * `POST /deviceManagement/operationApprovalRequests/cancelMyRequest`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalRequests/cancelMyRequest']['body'],
  params?: IEndpoints['POST /deviceManagement/operationApprovalRequests/cancelMyRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/operationApprovalRequests/cancelMyRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalRequests/cancelMyRequest',
    paramDefs: [],
    params,
    body,
  };
}
