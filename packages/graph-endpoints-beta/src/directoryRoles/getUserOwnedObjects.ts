import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoles/getUserOwnedObjects': Operation<
    '/directoryRoles/getUserOwnedObjects',
    'post'
  >;
}

/**
 * `POST /directoryRoles/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /directoryRoles/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /directoryRoles/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoles/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoles/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
