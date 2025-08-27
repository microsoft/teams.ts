import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/getMemberObjects',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
