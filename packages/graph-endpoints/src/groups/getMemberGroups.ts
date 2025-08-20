import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/getMemberGroups': Operation<
    '/groups/{group-id}/getMemberGroups',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/getMemberGroups`
 *
 * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/getMemberGroups']['body'],
  params?: IEndpoints['POST /groups/{group-id}/getMemberGroups']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/getMemberGroups']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/getMemberGroups',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
