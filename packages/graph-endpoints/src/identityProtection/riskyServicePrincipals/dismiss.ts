import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identityProtection/riskyServicePrincipals/dismiss': Operation<
    '/identityProtection/riskyServicePrincipals/dismiss',
    'post'
  >;
}

/**
 * `POST /identityProtection/riskyServicePrincipals/dismiss`
 *
 * Dismiss the risk of one or more riskyServicePrincipal objects. This action sets the targeted service principal account&#x27;s risk level to none. You can dismiss up to 60 service principal accounts in one request.
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyServicePrincipals/dismiss']['body'],
  params?: IEndpoints['POST /identityProtection/riskyServicePrincipals/dismiss']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityProtection/riskyServicePrincipals/dismiss']['response']
> {
  return {
    method: 'post',
    path: '/identityProtection/riskyServicePrincipals/dismiss',
    paramDefs: [],
    params,
    body,
  };
}
