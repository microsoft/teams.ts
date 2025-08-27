import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host`
 *
 * The host related to this component. This is a reverse navigation property. When you navigate to components from a host, this should be assumed to be a return reference.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostComponents/{hostComponent-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostComponent-id', in: 'path' },
    ],
    params,
  };
}
