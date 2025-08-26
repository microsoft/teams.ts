import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/getUserOwnedObjects': Operation<'/contacts/getUserOwnedObjects', 'post'>;
}

/**
 * `POST /contacts/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /contacts/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /contacts/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contacts/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/contacts/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
