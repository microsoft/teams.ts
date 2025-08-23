import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign`
 *
 * Assign a cloudPcUserSetting to user groups.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assign',
    paramDefs: [{ name: 'cloudPcUserSetting-id', in: 'path' }],
    params,
    body,
  };
}
