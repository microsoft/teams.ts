import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoles/getAvailableExtensionProperties': Operation<
    '/directoryRoles/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /directoryRoles/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /directoryRoles/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /directoryRoles/getAvailableExtensionProperties']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoles/getAvailableExtensionProperties']['response']> {
  return {
    method: 'post',
    path: '/directoryRoles/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
