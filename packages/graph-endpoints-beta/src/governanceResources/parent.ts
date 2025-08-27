import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /governanceResources/{governanceResource-id}/parent': Operation<
    '/governanceResources/{governanceResource-id}/parent',
    'get'
  >;
}

/**
 * `GET /governanceResources/{governanceResource-id}/parent`
 *
 * Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/parent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
  };
}
