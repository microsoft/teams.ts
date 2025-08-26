import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/approval/approvalItems/{approvalItem-id}/cancel': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/cancel',
    'post'
  >;
}

/**
 * `POST /solutions/approval/approvalItems/{approvalItem-id}/cancel`
 *
 * Cancel the approval item. The owner of the approval is the only user who can trigger this endpoint.
 */
export function create(
  body: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/cancel']['body'],
  params?: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/cancel',
    paramDefs: [{ name: 'approvalItem-id', in: 'path' }],
    params,
    body,
  };
}
