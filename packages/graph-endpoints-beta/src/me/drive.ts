import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/drive': Operation<'/me/drive', 'get'>;
}

/**
 * `GET /me/drive`
 *
 * Retrieve the properties and relationships of a drive resource. A drive is the top-level container for a file system, such as OneDrive or SharePoint document libraries.
 */
export function get(
  params?: IEndpoints['GET /me/drive']['parameters']
): EndpointRequest<IEndpoints['GET /me/drive']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
