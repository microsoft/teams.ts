import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects',
    paramDefs: [{ name: 'directorySettingTemplate-id', in: 'path' }],
    params,
    body,
  };
}
