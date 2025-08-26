import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/getAvailableExtensionProperties': Operation<
    '/servicePrincipals/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /servicePrincipals/getAvailableExtensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/getAvailableExtensionProperties']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
