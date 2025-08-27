import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoleTemplates/getAvailableExtensionProperties': Operation<
    '/directoryRoleTemplates/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /directoryRoleTemplates/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /directoryRoleTemplates/getAvailableExtensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoleTemplates/getAvailableExtensionProperties']['response']
> {
  return {
    method: 'post',
    path: '/directoryRoleTemplates/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
