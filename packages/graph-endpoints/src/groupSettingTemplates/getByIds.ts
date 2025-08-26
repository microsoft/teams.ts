import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupSettingTemplates/getByIds': Operation<'/groupSettingTemplates/getByIds', 'post'>;
}

/**
 * `POST /groupSettingTemplates/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /groupSettingTemplates/getByIds']['body'],
  params?: IEndpoints['POST /groupSettingTemplates/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /groupSettingTemplates/getByIds']['response']> {
  return {
    method: 'post',
    path: '/groupSettingTemplates/getByIds',
    paramDefs: [],
    params,
    body,
  };
}
