import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects',
    paramDefs: [{ name: 'groupSettingTemplate-id', in: 'path' }],
    params,
    body,
  };
}
