import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/stop',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop`
 *
 * Stop a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}/stop',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
    body,
  };
}
