import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/getUserOwnedObjects': Operation<
    '/servicePrincipals/getUserOwnedObjects',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /servicePrincipals/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /servicePrincipals/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
