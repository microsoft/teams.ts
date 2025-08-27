import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects`
  *
  * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
  */
export function create(
  body: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects',
    paramDefs: [{ name: 'groupSettingTemplate-id', in: 'path' }],
    params,
    body,
  };
}
