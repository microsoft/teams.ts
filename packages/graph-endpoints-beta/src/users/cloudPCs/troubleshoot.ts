import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot`
 *
 * Troubleshoot a specific Cloud PC. Use this API to check the health status of the Cloud PC and the session host.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
    body,
  };
}
