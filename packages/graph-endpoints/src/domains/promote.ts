import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /domains/{domain-id}/promote': Operation<'/domains/{domain-id}/promote', 'post'>;
}

/**
 * `POST /domains/{domain-id}/promote`
 *
 * Promote a verified subdomain to the root domain. A verified domain has its isVerified property set to true.
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/promote']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/promote']['parameters']
): EndpointRequest<IEndpoints['POST /domains/{domain-id}/promote']['response']> {
  return {
    method: 'post',
    path: '/domains/{domain-id}/promote',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
