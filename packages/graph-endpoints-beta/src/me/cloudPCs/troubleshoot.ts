import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/me/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/troubleshoot`
 *
 * Troubleshoot a specific Cloud PC. Use this API to check the health status of the Cloud PC and the session host.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/troubleshoot']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/troubleshoot']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/troubleshoot',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
