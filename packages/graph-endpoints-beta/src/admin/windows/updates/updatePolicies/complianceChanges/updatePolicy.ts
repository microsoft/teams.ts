import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy',
    'get'
  >;
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy`
 *
 * The policy this compliance change is a member of.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'complianceChange-id', in: 'path' },
    ],
    params,
  };
}
