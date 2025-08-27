import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /permissionGrants/getUserOwnedObjects': Operation<
    '/permissionGrants/getUserOwnedObjects',
    'post'
  >;
}

/**
 * `POST /permissionGrants/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /permissionGrants/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /permissionGrants/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /permissionGrants/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/permissionGrants/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
