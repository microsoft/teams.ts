import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/import',
    'post'
  >;
}

/**
 * `POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import']['body'],
  params?: IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/import',
    paramDefs: [],
    params,
    body,
  };
}
