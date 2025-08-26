import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /devices/getAvailableExtensionProperties': Operation<
    '/devices/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /devices/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /devices/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /devices/getAvailableExtensionProperties']['parameters']
): EndpointRequest<IEndpoints['POST /devices/getAvailableExtensionProperties']['response']> {
  return {
    method: 'post',
    path: '/devices/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
