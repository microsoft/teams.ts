import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /permissionGrants/getAvailableExtensionProperties': Operation<
    '/permissionGrants/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /permissionGrants/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /permissionGrants/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /permissionGrants/getAvailableExtensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /permissionGrants/getAvailableExtensionProperties']['response']
> {
  return {
    method: 'post',
    path: '/permissionGrants/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
