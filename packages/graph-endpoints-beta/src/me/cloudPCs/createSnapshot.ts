import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/createSnapshot': Operation<
    '/me/cloudPCs/{cloudPC-id}/createSnapshot',
    'post'
  >;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/createSnapshot`
 *
 * Create a snapshot for a specific Cloud PC device.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/createSnapshot']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/createSnapshot']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/createSnapshot']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/createSnapshot',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
