import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/logTeleconferenceDeviceQuality': Operation<
    '/communications/calls/logTeleconferenceDeviceQuality',
    'post'
  >;
}

/**
 * `POST /communications/calls/logTeleconferenceDeviceQuality`
 *
 * Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.
 */
export function create(
  body: IEndpoints['POST /communications/calls/logTeleconferenceDeviceQuality']['body'],
  params?: IEndpoints['POST /communications/calls/logTeleconferenceDeviceQuality']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/logTeleconferenceDeviceQuality']['response']
> {
  return {
    method: 'post',
    path: '/communications/calls/logTeleconferenceDeviceQuality',
    paramDefs: [],
    params,
    body,
  };
}
