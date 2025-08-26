import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /domains/{domain-id}/rootDomain': Operation<'/domains/{domain-id}/rootDomain', 'get'>;
}

/**
  * `GET /domains/{domain-id}/rootDomain`
  *
  * Get the root domain of a subdomain.
The API returns a single object which is the root domain of the specified subdomain.
  */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}/rootDomain']['parameters']
): EndpointRequest<IEndpoints['GET /domains/{domain-id}/rootDomain']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/rootDomain',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
    ],
    params,
  };
}
