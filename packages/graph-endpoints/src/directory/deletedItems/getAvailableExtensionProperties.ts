import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/deletedItems/getAvailableExtensionProperties': Operation<
    '/directory/deletedItems/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /directory/deletedItems/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /directory/deletedItems/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /directory/deletedItems/getAvailableExtensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/deletedItems/getAvailableExtensionProperties']['response']
> {
  return {
    method: 'post',
    path: '/directory/deletedItems/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
