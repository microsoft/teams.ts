import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/retryServiceProvisioning': Operation<
    '/users/{user-id}/retryServiceProvisioning',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/retryServiceProvisioning`
 *
 * Retry the provisioning of a user object in Microsoft Entra ID.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/retryServiceProvisioning']['body'],
  params?: IEndpoints['POST /users/{user-id}/retryServiceProvisioning']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/retryServiceProvisioning']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/retryServiceProvisioning',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
