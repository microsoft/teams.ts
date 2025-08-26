import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
    'post'
  >;
}

/**
 * `POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate`
 *
 * Create a new device from a deviceTemplate.
 */
export function create(
  body: IEndpoints['POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['body'],
  params?: IEndpoints['POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['parameters']
): EndpointRequest<
  IEndpoints['POST /templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/templates/deviceTemplates/{deviceTemplate-id}/createDeviceFromTemplate',
    paramDefs: [{ name: 'deviceTemplate-id', in: 'path' }],
    params,
    body,
  };
}
