import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/getAvailableExtensionProperties': Operation<
    '/contacts/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /contacts/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /contacts/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /contacts/getAvailableExtensionProperties']['parameters']
): EndpointRequest<IEndpoints['POST /contacts/getAvailableExtensionProperties']['response']> {
  return {
    method: 'post',
    path: '/contacts/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
