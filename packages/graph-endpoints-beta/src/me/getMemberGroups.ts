import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/getMemberGroups': Operation<'/me/getMemberGroups', 'post'>;
}

/**
 * `POST /me/getMemberGroups`
 *
 * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
 */
export function create(
  body: IEndpoints['POST /me/getMemberGroups']['body'],
  params?: IEndpoints['POST /me/getMemberGroups']['parameters']
): EndpointRequest<IEndpoints['POST /me/getMemberGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/getMemberGroups',
    paramDefs: [],
    params,
    body,
  };
}
