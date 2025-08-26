import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload`
 *
 * Reupload a cloudPcDeviceImage object that failed to upload.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload',
    paramDefs: [{ name: 'cloudPcDeviceImage-id', in: 'path' }],
    params,
    body,
  };
}
