import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `POST /informationProtection/dataLossPreventionPolicies/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /informationProtection/dataLossPreventionPolicies/evaluate']['body'],
  params?: IEndpoints['POST /informationProtection/dataLossPreventionPolicies/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /informationProtection/dataLossPreventionPolicies/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/dataLossPreventionPolicies/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
