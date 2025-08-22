import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/getAvailableExtensionProperties': Operation<
    '/applications/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /applications/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /applications/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /applications/getAvailableExtensionProperties']['parameters']
): EndpointRequest<IEndpoints['POST /applications/getAvailableExtensionProperties']['response']> {
  return {
    method: 'post',
    path: '/applications/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
