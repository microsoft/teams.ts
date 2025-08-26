import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/getUserOwnedObjects': Operation<'/contracts/getUserOwnedObjects', 'post'>;
}

/**
 * `POST /contracts/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /contracts/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /contracts/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/contracts/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
