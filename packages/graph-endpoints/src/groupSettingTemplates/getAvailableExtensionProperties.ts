import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupSettingTemplates/getAvailableExtensionProperties': Operation<
    '/groupSettingTemplates/getAvailableExtensionProperties',
    'post'
  >;
}

/**
 * `POST /groupSettingTemplates/getAvailableExtensionProperties`
 *
 * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
 */
export function create(
  body: IEndpoints['POST /groupSettingTemplates/getAvailableExtensionProperties']['body'],
  params?: IEndpoints['POST /groupSettingTemplates/getAvailableExtensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /groupSettingTemplates/getAvailableExtensionProperties']['response']
> {
  return {
    method: 'post',
    path: '/groupSettingTemplates/getAvailableExtensionProperties',
    paramDefs: [],
    params,
    body,
  };
}
