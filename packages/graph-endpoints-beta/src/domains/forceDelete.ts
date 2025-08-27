import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /domains/{domain-id}/forceDelete': Operation<'/domains/{domain-id}/forceDelete', 'post'>;
}

/**
 * `POST /domains/{domain-id}/forceDelete`
 *
 * Delete a domain using an asynchronous operation. Before performing this operation, you must update or remove any references to Exchange as the provisioning service. The following actions are performed as part of this operation: After the domain deletion completes, API operations for the deleted domain return a 404 HTTP response code. To verify deletion of a domain, you can perform a get domain. If the domain was successfully deleted, a 404 HTTP response code is returned in the response.
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/forceDelete']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/forceDelete']['parameters']
): EndpointRequest<IEndpoints['POST /domains/{domain-id}/forceDelete']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains/{domain-id}/forceDelete',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
