import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/reprovision': Operation<
    '/me/cloudPCs/{cloudPC-id}/reprovision',
    'post'
  >;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/reprovision`
 *
 * Reprovision a specific Cloud PC.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reprovision']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reprovision']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reprovision']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/reprovision',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
