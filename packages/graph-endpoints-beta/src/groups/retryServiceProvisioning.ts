import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/retryServiceProvisioning': Operation<
    '/groups/{group-id}/retryServiceProvisioning',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/retryServiceProvisioning`
 *
 * Retry the group service provisioning.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/retryServiceProvisioning']['body'],
  params?: IEndpoints['POST /groups/{group-id}/retryServiceProvisioning']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/retryServiceProvisioning']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/retryServiceProvisioning',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
