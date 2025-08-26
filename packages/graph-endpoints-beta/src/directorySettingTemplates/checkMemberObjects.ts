import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects',
    paramDefs: [{ name: 'directorySettingTemplate-id', in: 'path' }],
    params,
    body,
  };
}
