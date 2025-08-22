import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/getAvailableExtensionProperties': Operation<
    '/contracts/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /contracts/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /contracts/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /contracts/getAvailableExtensionProperties']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/getAvailableExtensionProperties']['response']> {
  return {
    method: 'post',
    path: '/contracts/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
