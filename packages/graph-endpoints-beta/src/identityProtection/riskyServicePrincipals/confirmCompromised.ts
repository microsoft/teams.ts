import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identityProtection/riskyServicePrincipals/confirmCompromised': Operation<
    '/identityProtection/riskyServicePrincipals/confirmCompromised',
    'post'
  >;
}

/**
 * `POST /identityProtection/riskyServicePrincipals/confirmCompromised`
 *
 * Confirm one or more riskyServicePrincipal objects as compromised. This action sets the targeted service principal account&#x27;s risk level to high.
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyServicePrincipals/confirmCompromised']['body'],
  params?: IEndpoints['POST /identityProtection/riskyServicePrincipals/confirmCompromised']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityProtection/riskyServicePrincipals/confirmCompromised']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskyServicePrincipals/confirmCompromised',
    paramDefs: [],
    params,
    body,
  };
}
