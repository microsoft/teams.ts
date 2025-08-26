import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
    'post'
  >;
}

/**
 * `POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations`
 *
 * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
    paramDefs: [{ name: 'authenticationStrengthPolicy-id', in: 'path' }],
    params,
    body,
  };
}
