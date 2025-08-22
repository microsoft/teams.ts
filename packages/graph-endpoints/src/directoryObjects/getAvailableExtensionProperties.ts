import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryObjects/getAvailableExtensionProperties': Operation<
    '/directoryObjects/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /directoryObjects/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /directoryObjects/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /directoryObjects/getAvailableExtensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryObjects/getAvailableExtensionProperties']['response']
> {
  return {
    method: 'post',
    path: '/directoryObjects/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
