import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /devices/getUserOwnedObjects': Operation<'/devices/getUserOwnedObjects', 'post'>;
}

/**
 * `POST /devices/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /devices/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /devices/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /devices/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/devices/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
