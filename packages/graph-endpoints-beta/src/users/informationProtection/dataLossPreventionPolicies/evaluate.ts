import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
