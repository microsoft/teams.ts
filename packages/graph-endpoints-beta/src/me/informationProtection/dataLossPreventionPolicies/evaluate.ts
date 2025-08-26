import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/me/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/dataLossPreventionPolicies/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies/evaluate']['body'],
  params?: IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/dataLossPreventionPolicies/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
