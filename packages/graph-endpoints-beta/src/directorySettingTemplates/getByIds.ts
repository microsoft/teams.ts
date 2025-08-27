import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directorySettingTemplates/getByIds': Operation<
    '/directorySettingTemplates/getByIds',
    'post'
  >;
}

/**
 * `POST /directorySettingTemplates/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /directorySettingTemplates/getByIds']['body'],
  params?: IEndpoints['POST /directorySettingTemplates/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /directorySettingTemplates/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directorySettingTemplates/getByIds',
    paramDefs: [],
    params,
    body,
  };
}
