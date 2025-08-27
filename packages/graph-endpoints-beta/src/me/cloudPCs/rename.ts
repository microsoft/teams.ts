import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/rename': Operation<'/me/cloudPCs/{cloudPC-id}/rename', 'post'>;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/rename`
 *
 * Rename a specific Cloud PC. Use this API to update the displayName for the Cloud PC entity.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/rename',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
