import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/start': Operation<'/me/cloudPCs/{cloudPC-id}/start', 'post'>;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/start`
 *
 * Start a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/start']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/start']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/start']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/start',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
