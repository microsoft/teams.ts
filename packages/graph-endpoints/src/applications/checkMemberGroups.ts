import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/checkMemberGroups': Operation<
    '/applications/{application-id}/checkMemberGroups',
    'post'
  >;
}

/**
  * `POST /applications/{application-id}/checkMemberGroups`
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
  body: IEndpoints['POST /applications/{application-id}/checkMemberGroups']['body'],
  params?: IEndpoints['POST /applications/{application-id}/checkMemberGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/checkMemberGroups']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/checkMemberGroups',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
