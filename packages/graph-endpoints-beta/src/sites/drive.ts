import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/drive': Operation<'/sites/{site-id}/drive', 'get'>;
}

/**
 * `GET /sites/{site-id}/drive`
 *
 * The default drive (document library) for this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/drive']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/drive']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}
