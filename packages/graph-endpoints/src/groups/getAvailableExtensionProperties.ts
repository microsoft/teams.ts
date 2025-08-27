import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/getAvailableExtensionProperties': Operation<
    '/groups/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /groups/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /groups/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /groups/getAvailableExtensionProperties']['parameters']
): EndpointRequest<IEndpoints['POST /groups/getAvailableExtensionProperties']['response']> {
  return {
    method: 'post',
    path: '/groups/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
