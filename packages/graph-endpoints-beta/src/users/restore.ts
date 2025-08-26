import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/restore': Operation<'/users/{user-id}/restore', 'post'>;
}

/**
  * `POST /users/{user-id}/restore`
  *
  * Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- externalUserProfile
- group
- pendingExternalUserProfile
- servicePrincipal
- user If an item was accidentally deleted, you can fully restore the item. This isn&#x27;t applicable to security groups, which are deleted permanently. Also, restoring an application doesn&#x27;t restore the associated service principal automatically. You must call this API to explicitly restore the deleted service principal. A recently deleted item remains available for up to 30 days. After 30 days, the item is permanently deleted.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/restore']['body'],
  params?: IEndpoints['POST /users/{user-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/restore']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/restore',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
