import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate`
 *
 * Activate a protectionPolicyBase. Currently, only one active backup policy per underlying service is supported (that is, one for OneDrive accounts, one for SharePoint sites, and one for Exchange Online users). You can add or remove artifacts (sites or user accounts) to or from each active policy.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate',
    paramDefs: [{ name: 'protectionPolicyBase-id', in: 'path' }],
    params,
    body,
  };
}
