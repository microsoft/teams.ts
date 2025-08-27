import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /security/dataSecurityAndGovernance/protectionScopes/compute': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes/compute',
    'post'
  >;
}

/**
 * `POST /security/dataSecurityAndGovernance/protectionScopes/compute`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/protectionScopes/compute']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/protectionScopes/compute']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/protectionScopes/compute']['response']
> {
  return {
    method: 'post',
    path: '/security/dataSecurityAndGovernance/protectionScopes/compute',
    paramDefs: [],
    params,
    body,
  };
}
