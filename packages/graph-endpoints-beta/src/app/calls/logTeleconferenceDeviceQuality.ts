import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/logTeleconferenceDeviceQuality': Operation<
    '/app/calls/logTeleconferenceDeviceQuality',
    'post'
  >;
}

/**
 * `POST /app/calls/logTeleconferenceDeviceQuality`
 *
 * Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.
 */
export function create(
  body: IEndpoints['POST /app/calls/logTeleconferenceDeviceQuality']['body'],
  params?: IEndpoints['POST /app/calls/logTeleconferenceDeviceQuality']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/logTeleconferenceDeviceQuality']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/logTeleconferenceDeviceQuality',
    paramDefs: [],
    params,
    body,
  };
}
