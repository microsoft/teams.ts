import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/getUserOwnedObjects': Operation<'/users/getUserOwnedObjects', 'post'>;
}

/**
 * `POST /users/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /users/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /users/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /users/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
