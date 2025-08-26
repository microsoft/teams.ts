import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/getUserOwnedObjects': Operation<'/organization/getUserOwnedObjects', 'post'>;
}

/**
 * `POST /organization/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /organization/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /organization/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /organization/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/organization/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
