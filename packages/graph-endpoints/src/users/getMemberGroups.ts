import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/getMemberGroups': Operation<'/users/{user-id}/getMemberGroups', 'post'>;
}

/**
 * `POST /users/{user-id}/getMemberGroups`
 *
 * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/getMemberGroups']['body'],
  params?: IEndpoints['POST /users/{user-id}/getMemberGroups']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/getMemberGroups']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/getMemberGroups',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
