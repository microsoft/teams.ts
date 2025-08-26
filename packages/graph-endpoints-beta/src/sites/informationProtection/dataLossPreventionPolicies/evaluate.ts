import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
