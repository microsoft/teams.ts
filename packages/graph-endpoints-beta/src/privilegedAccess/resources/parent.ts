import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent',
    'get'
  >;
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent`
 *
 * Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
  };
}
