import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryObjects/getUserOwnedObjects': Operation<
    '/directoryObjects/getUserOwnedObjects',
    'post'
  >;
}

/**
 * `POST /directoryObjects/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /directoryObjects/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /directoryObjects/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /directoryObjects/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryObjects/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
