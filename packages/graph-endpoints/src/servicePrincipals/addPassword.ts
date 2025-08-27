import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/addPassword': Operation<
    '/servicePrincipals/{servicePrincipal-id}/addPassword',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/addPassword`
 *
 * Add a strong password or secret to a servicePrincipal object.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addPassword']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addPassword']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addPassword']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/addPassword',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
