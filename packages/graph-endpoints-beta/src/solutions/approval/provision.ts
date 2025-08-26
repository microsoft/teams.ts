import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/approval/provision': Operation<'/solutions/approval/provision', 'post'>;
}

/**
 * `POST /solutions/approval/provision`
 *
 * Provision an approvalSolution on behalf of a tenant.
 */
export function create(
  body: IEndpoints['POST /solutions/approval/provision']['body'],
  params?: IEndpoints['POST /solutions/approval/provision']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/approval/provision']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/approval/provision',
    paramDefs: [],
    params,
    body,
  };
}
