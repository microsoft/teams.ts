import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/dataSecurityAndGovernance/protectionScopes/compute': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes/compute',
    'post'
  >;
}

/**
 * `POST /me/dataSecurityAndGovernance/protectionScopes/compute`
 *
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/protectionScopes/compute']['body'],
  params?: IEndpoints['POST /me/dataSecurityAndGovernance/protectionScopes/compute']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/dataSecurityAndGovernance/protectionScopes/compute']['response']
> {
  return {
    method: 'post',
    path: '/me/dataSecurityAndGovernance/protectionScopes/compute',
    paramDefs: [],
    params,
    body,
  };
}
