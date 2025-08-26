import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /security/securityActions/{securityAction-id}/cancelSecurityAction': Operation<
    '/security/securityActions/{securityAction-id}/cancelSecurityAction',
    'post'
  >;
}

/**
 * `POST /security/securityActions/{securityAction-id}/cancelSecurityAction`
 *
 * Cancel a security operation.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/securityActions/{securityAction-id}/cancelSecurityAction']['body'],
  params?: IEndpoints['POST /security/securityActions/{securityAction-id}/cancelSecurityAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/securityActions/{securityAction-id}/cancelSecurityAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/securityActions/{securityAction-id}/cancelSecurityAction',
    paramDefs: [{ name: 'securityAction-id', in: 'path' }],
    params,
    body,
  };
}
