import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/retryServiceProvisioning': Operation<'/me/retryServiceProvisioning', 'post'>;
}

/**
 * `POST /me/retryServiceProvisioning`
 *
 * Retry the provisioning of a user object in Microsoft Entra ID.
 */
export function create(
  body: IEndpoints['POST /me/retryServiceProvisioning']['body'],
  params?: IEndpoints['POST /me/retryServiceProvisioning']['parameters']
): EndpointRequest<IEndpoints['POST /me/retryServiceProvisioning']['response']> {
  return {
    method: 'post',
    path: '/me/retryServiceProvisioning',
    paramDefs: [],
    params,
    body,
  };
}
