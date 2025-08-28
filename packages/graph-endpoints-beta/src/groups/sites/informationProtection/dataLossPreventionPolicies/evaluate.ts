import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
