import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/restore': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/restore',
    'post'
  >;
}

/**
  * `POST /groupSettingTemplates/{groupSettingTemplate-id}/restore`
  *
  * Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items.  Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- group
- servicePrincipal
  */
export function create(
  body: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/restore']['body'],
  params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/restore']['response']
> {
  return {
    method: 'post',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}/restore',
    paramDefs: [{ name: 'groupSettingTemplate-id', in: 'path' }],
    params,
    body,
  };
}
