import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/reboot': Operation<'/me/cloudPCs/{cloudPC-id}/reboot', 'post'>;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/reboot`
 *
 * Reboot a specific Cloud PC.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reboot']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reboot']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reboot']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/reboot',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
