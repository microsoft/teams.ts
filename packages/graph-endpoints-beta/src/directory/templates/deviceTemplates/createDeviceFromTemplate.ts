import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
    'post'
  >;
}

/**
 * `POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate`
 *
 * Create a new device from a deviceTemplate.
 */
export function create(
  body: IEndpoints['POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['body'],
  params?: IEndpoints['POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
    paramDefs: [{ name: 'deviceTemplate-id', in: 'path' }],
    params,
    body,
  };
}
