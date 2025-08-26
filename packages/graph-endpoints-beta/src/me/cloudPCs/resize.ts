import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/resize': Operation<'/me/cloudPCs/{cloudPC-id}/resize', 'post'>;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/resize`
 *
 * Upgrade or downgrade an existing Cloud PC to a configuration with a new virtual CPU (vCPU) and storage size.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/resize']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/resize']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/resize']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/resize',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
