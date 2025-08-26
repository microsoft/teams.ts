import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate`
 *
 * Deactivate a protectionPolicyBase.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate',
    paramDefs: [{ name: 'protectionPolicyBase-id', in: 'path' }],
    params,
    body,
  };
}
