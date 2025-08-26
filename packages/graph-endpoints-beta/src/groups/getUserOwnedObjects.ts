import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/getUserOwnedObjects': Operation<'/groups/getUserOwnedObjects', 'post'>;
}

/**
 * `POST /groups/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /groups/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /groups/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /groups/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
