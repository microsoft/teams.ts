import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /domains/{domain-id}/verify': Operation<'/domains/{domain-id}/verify', 'post'>;
}

/**
 * `POST /domains/{domain-id}/verify`
 *
 * Validate the ownership of a domain. This operation only applies to an unverified domain. For an unverified domain, the isVerified property is false.
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/verify']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/verify']['parameters']
): EndpointRequest<IEndpoints['POST /domains/{domain-id}/verify']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains/{domain-id}/verify',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
