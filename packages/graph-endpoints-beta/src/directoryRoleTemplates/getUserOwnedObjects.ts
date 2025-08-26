import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoleTemplates/getUserOwnedObjects': Operation<
    '/directoryRoleTemplates/getUserOwnedObjects',
    'post'
  >;
}

/**
 * `POST /directoryRoleTemplates/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /directoryRoleTemplates/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoleTemplates/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoleTemplates/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
