import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute']['body'],
  params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
