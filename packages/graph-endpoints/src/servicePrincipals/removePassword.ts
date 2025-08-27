import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/removePassword': Operation<
    '/servicePrincipals/{servicePrincipal-id}/removePassword',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/removePassword`
 *
 * Remove a password from a servicePrincipal object.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removePassword']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removePassword']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removePassword']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/removePassword',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
