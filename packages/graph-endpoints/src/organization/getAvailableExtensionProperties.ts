import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/getAvailableExtensionProperties': Operation<
    '/organization/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /organization/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /organization/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /organization/getAvailableExtensionProperties']['parameters']
): EndpointRequest<IEndpoints['POST /organization/getAvailableExtensionProperties']['response']> {
  return {
    method: 'post',
    path: '/organization/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
