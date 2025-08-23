import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
    'post'
  >;
}

/**
 * `POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations`
 *
 * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
 */
export function create(
  body: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['body'],
  params?: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['response']
> {
  return {
    method: 'post',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
    paramDefs: [{ name: 'authenticationStrengthPolicy-id', in: 'path' }],
    params,
    body,
  };
}
