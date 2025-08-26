import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups': Operation<
    '/directory/deletedItems/{directoryObject-id}/checkMemberGroups',
    'post'
  >;
}

/**
  * `POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups`
  *
  * Check for membership in a specified list of group IDs, and return from that list the IDs of groups where a specified object is a member. The specified object can be of one of the following types:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Microsoft Entra ID. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.
  */
export function create(
  body: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups']['body'],
  params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups']['response']
> {
  return {
    method: 'post',
    path: '/directory/deletedItems/{directoryObject-id}/checkMemberGroups',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}
