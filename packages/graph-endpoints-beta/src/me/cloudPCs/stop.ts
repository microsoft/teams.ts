import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/stop': Operation<'/me/cloudPCs/{cloudPC-id}/stop', 'post'>;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/stop`
 *
 * Stop a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/stop']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/stop']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/stop']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/stop',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
