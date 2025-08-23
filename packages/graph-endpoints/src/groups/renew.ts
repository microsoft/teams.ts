import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/renew': Operation<'/groups/{group-id}/renew', 'post'>;
}

/**
 * `POST /groups/{group-id}/renew`
 *
 * Renew a group&#x27;s expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/renew']['body'],
  params?: IEndpoints['POST /groups/{group-id}/renew']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/renew']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/renew',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
